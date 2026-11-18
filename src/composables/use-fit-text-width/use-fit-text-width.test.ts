import type { Ref } from 'vue'
import { nextTick } from 'vue'
import { useFitTextWidth } from '@/composables/use-fit-text-width/use-fit-text-width'
import { BddTest, mountComposable } from '@/tests/utils'

BddTest().given('a useFitTextWidth composable', () => {
  let element: HTMLElement
  let container: HTMLElement
  let elementRef: Ref<HTMLElement | undefined>
  let containerRef: Ref<HTMLElement | undefined>
  let enabled: Ref<boolean>
  let unmount: () => void
  let resize: ResizeObserverCallback
  let mutate: MutationCallback
  let widths: number[]
  let frames: Map<number, FrameRequestCallback>
  let nextFrame: number
  const observeResize = vi.fn()
  const disconnectResize = vi.fn()
  const observeMutation = vi.fn()
  const disconnectMutation = vi.fn()

  function flushFrame () {
    const callbacks = Array.from(frames.values())
    frames.clear()
    callbacks.forEach(callback => callback(0))
  }

  beforeEach(() => {
    element = document.createElement('span')
    container = document.createElement('div')
    container.appendChild(element)
    elementRef = ref(element)
    containerRef = ref(container)
    enabled = ref(true)
    widths = [30.2, 20]
    frames = new Map()
    nextFrame = 0
    vi.clearAllMocks()

    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      frames.set(++nextFrame, callback)
      return nextFrame
    })
    vi.stubGlobal('cancelAnimationFrame', (id: number) => frames.delete(id))
    vi.stubGlobal('ResizeObserver', class {
      constructor (callback: ResizeObserverCallback) { resize = callback }
      observe = observeResize
      disconnect = disconnectResize
    })
    vi.stubGlobal('MutationObserver', class {
      constructor (callback: MutationCallback) { mutate = callback }
      observe = observeMutation
      disconnect = disconnectMutation
    })
    vi.spyOn(Range.prototype, 'getClientRects').mockImplementation(() => {
      const rects = widths.map(width => new DOMRect(0, 0, width, 10))
      return Object.assign(rects, { item: (index: number) => rects[index] ?? null })
    })

    const mounted = mountComposable(() => useFitTextWidth(elementRef, { container: containerRef, enabled }))
    unmount = mounted.unmount
    flushFrame()
  })

  afterEach(() => {
    unmount()
    vi.restoreAllMocks()
    vi.unstubAllGlobals()
  })

  BddTest().when('the text wraps', () => {
    BddTest().then('it fits the longest line and observes the container and text', () => {
      expect(element.style.width).toBe('31px')
      expect(observeResize).toHaveBeenCalledWith(container)
      expect(observeMutation).toHaveBeenCalledWith(element, { childList: true, characterData: true, subtree: true })
    })

    BddTest().and('the container or text changes', () => {
      BddTest().then('it remeasures the text', () => {
        widths = [45.5, 12]
        resize([], {} as ResizeObserver)
        flushFrame()
        expect(element.style.width).toBe('46px')

        widths = [80]
        mutate([], {} as MutationObserver)
        flushFrame()
        expect(element.style.width).toBe('')
      })
    })

    BddTest().and('fitting is disabled and enabled again', () => {
      BddTest().then('it restores the width and fits again', async () => {
        enabled.value = false
        await nextTick()
        flushFrame()
        expect(element.style.width).toBe('')

        enabled.value = true
        await nextTick()
        flushFrame()
        expect(element.style.width).toBe('31px')
      })
    })

    BddTest().and('the referenced element changes', () => {
      BddTest().then('it restores the old element and observes the new one', async () => {
        const replacement = document.createElement('span')
        replacement.style.width = '75%'
        elementRef.value = replacement
        await nextTick()
        flushFrame()
        expect(element.style.width).toBe('')
        expect(replacement.style.width).toBe('31px')
        unmount()
        expect(replacement.style.width).toBe('75%')
      })
    })

    BddTest().and('the container changes', () => {
      BddTest().then('it observes the replacement container', async () => {
        const replacement = document.createElement('div')
        containerRef.value = replacement
        await nextTick()
        flushFrame()
        expect(disconnectResize).toHaveBeenCalled()
        expect(observeResize).toHaveBeenLastCalledWith(replacement)
      })
    })

    BddTest().and('no container is specified', () => {
      BddTest().then('it observes the text element parent by default', () => {
        unmount()
        observeResize.mockClear()
        const mounted = mountComposable(() => useFitTextWidth(elementRef))
        unmount = mounted.unmount
        flushFrame()
        expect(observeResize).toHaveBeenCalledWith(container)
        expect(element.style.width).toBe('31px')
      })
    })

    BddTest().and('a measurement is pending when unmounted', () => {
      BddTest().then('it cancels the frame and disconnects observers', () => {
        resize([], {} as ResizeObserver)
        expect(frames.size).toBe(1)
        unmount()
        expect(frames.size).toBe(0)
        expect(disconnectResize).toHaveBeenCalled()
        expect(disconnectMutation).toHaveBeenCalled()
        expect(element.style.width).toBe('')
      })
    })
  })
})

import type { Ref } from 'vue'
import { afterEach, beforeEach, expect, vi } from 'vitest'
import { nextTick } from 'vue'
import { useTextTruncation } from '@/composables/use-text-truncation/use-text-truncation'
import { BddTest, mountComposable } from '@/tests/utils'

const MEASURE_CLASS = 'av-text-truncation-measure'

BddTest().given('a useTextTruncation composable', () => {
  let result: ReturnType<typeof useTextTruncation>

  let resizeObserverMock: {
    observe: ReturnType<typeof vi.fn>
    disconnect: ReturnType<typeof vi.fn>
  }

  let mutationObserverMock: {
    observe: ReturnType<typeof vi.fn>
    disconnect: ReturnType<typeof vi.fn>
  }

  let element: HTMLElement
  let elementRef: Ref<HTMLElement | undefined | null>
  let naturalHeight = 20
  let displayedHeight = 20
  let scrollWidth = 100
  let clientWidth = 100
  let unmount: (() => void) | undefined

  function createElement () {
    const parent = document.createElement('div')
    element = document.createElement('span')
    parent.appendChild(element)
    document.body.appendChild(parent)

    elementRef = ref(element)

    vi.spyOn(element, 'getBoundingClientRect').mockImplementation(() => ({
      width: 100,
      height: displayedHeight,
    }) as DOMRect)

    vi.spyOn(parent, 'getBoundingClientRect').mockReturnValue({
      width: 200,
      height: 20,
    } as DOMRect)

    Object.defineProperty(element, 'scrollWidth', {
      configurable: true,
      get: () => scrollWidth,
    })

    Object.defineProperty(element, 'clientWidth', {
      configurable: true,
      get: () => clientWidth,
    })

    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(function (this: HTMLElement) {
      if (this.classList.contains(MEASURE_CLASS)) {
        return {
          width: 100,
          height: naturalHeight,
        } as DOMRect
      }

      return {
        width: 0,
        height: 0,
      } as DOMRect
    })

    vi.spyOn(element, 'getBoundingClientRect').mockImplementation(() => ({
      width: 100,
      height: displayedHeight,
    }) as DOMRect)

    return parent
  }

  async function mountWithElement () {
    mountComposable(() => {
      result = useTextTruncation(elementRef)
      return result
    })

    await nextTick()
  }

  beforeEach(() => {
    vi.clearAllMocks()

    naturalHeight = 20
    displayedHeight = 20
    scrollWidth = 100
    clientWidth = 100
    unmount = undefined

    resizeObserverMock = {
      observe: vi.fn(),
      disconnect: vi.fn(),
    }

    mutationObserverMock = {
      observe: vi.fn(),
      disconnect: vi.fn(),
    }

    vi.stubGlobal('ResizeObserver', class {
      observe = resizeObserverMock.observe
      disconnect = resizeObserverMock.disconnect
    })

    vi.stubGlobal('MutationObserver', class {
      observe = mutationObserverMock.observe
      disconnect = mutationObserverMock.disconnect
    })

    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      callback(0)
      return 0
    })
  })

  afterEach(() => {
    document.body.innerHTML = ''
    vi.restoreAllMocks()
    vi.unstubAllGlobals()
  })

  BddTest().when('the referenced element does not exist', () => {
    beforeEach(async () => {
      elementRef = ref(undefined)
      await mountWithElement()
    })

    BddTest().then('it should not be truncated', () => {
      expect(result.isTruncated.value).toBe(false)
    })
  })

  BddTest().when('the referenced element has no parent', () => {
    beforeEach(async () => {
      element = document.createElement('span')
      elementRef = ref(element)
      await mountWithElement()
    })

    BddTest().then('it should not be truncated', () => {
      expect(result.isTruncated.value).toBe(false)
    })
  })

  BddTest().when('the text fits within the displayed height', () => {
    beforeEach(async () => {
      createElement()
      await mountWithElement()
    })

    BddTest().then('it should not be truncated', async () => {
      await vi.waitFor(() => {
        expect(result.isTruncated.value).toBe(false)
      })
    })
  })

  BddTest().when('the text exceeds the displayed height', () => {
    beforeEach(async () => {
      naturalHeight = 50
      displayedHeight = 20

      createElement()
      await mountWithElement()
    })

    BddTest().then('it should be vertically truncated', async () => {
      await vi.waitFor(() => {
        expect(result.isTruncated.value).toBe(true)
      })
    })
  })

  BddTest().when('the text exceeds the available width', () => {
    beforeEach(async () => {
      scrollWidth = 150
      clientWidth = 100

      createElement()
      await mountWithElement()
    })

    BddTest().then('it should be horizontally truncated', async () => {
      await vi.waitFor(() => {
        expect(result.isTruncated.value).toBe(true)
      })
    })
  })

  BddTest().when('the element is mounted', () => {
    beforeEach(async () => {
      createElement()
      await mountWithElement()
    })

    BddTest().then('it should observe the element and its parent', () => {
      expect(resizeObserverMock.observe).toHaveBeenCalledWith(element)
      expect(resizeObserverMock.observe).toHaveBeenCalledWith(element.parentElement)
    })

    BddTest().then('it should observe mutations on the element and its parent', () => {
      expect(mutationObserverMock.observe).toHaveBeenCalledWith(
        element,
        expect.objectContaining({
          childList: true,
          characterData: true,
          subtree: true,
          attributes: true,
          attributeFilter: ['class', 'style'],
        }),
      )

      expect(mutationObserverMock.observe).toHaveBeenCalledWith(
        element.parentElement,
        expect.objectContaining({
          attributes: true,
          attributeFilter: ['class', 'style'],
        }),
      )
    })
  })

  BddTest().when('the component is unmounted', () => {
    beforeEach(async () => {
      createElement()

      const mounted = mountComposable(() => useTextTruncation(elementRef))
      unmount = mounted.unmount

      await nextTick()
      unmount()
    })

    BddTest().then('it should disconnect the observers', () => {
      expect(resizeObserverMock.disconnect).toHaveBeenCalled()
      expect(mutationObserverMock.disconnect).toHaveBeenCalled()
    })
  })
})

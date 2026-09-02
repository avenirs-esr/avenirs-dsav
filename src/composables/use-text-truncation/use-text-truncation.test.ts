import { beforeEach, expect, vi } from 'vitest'
import { nextTick, type Ref } from 'vue'
import { useTextTruncation } from '@/composables/use-text-truncation/use-text-truncation'
import { BddTest, mountComposable } from '@/tests/utils'

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

  beforeEach(() => {
    vi.clearAllMocks()

    resizeObserverMock = {
      observe: vi.fn(),
      disconnect: vi.fn(),
    }

    mutationObserverMock = {
      observe: vi.fn(),
      disconnect: vi.fn(),
    }

    vi.stubGlobal('ResizeObserver', vi.fn(() => resizeObserverMock))
    vi.stubGlobal('MutationObserver', vi.fn(() => mutationObserverMock))
  })

  BddTest().when('the referenced element does not exist', () => {
    beforeEach(() => {
      const elementRef = ref<HTMLElement>()
      result = mountComposable(() => useTextTruncation(elementRef)).result
    })

    BddTest().then('it should not be truncated', () => {
      expect(result.isTruncated.value).toBe(false)
    })
  })

  BddTest().when('the referenced element has no parent', () => {
    beforeEach(() => {
      const element = document.createElement('span')
      const elementRef = ref(element)
      result = mountComposable(() => useTextTruncation(elementRef)).result
    })

    BddTest().then('it should not be truncated', () => {
      expect(result.isTruncated.value).toBe(false)
    })
  })

  BddTest().when('the text fits within the displayed height', () => {
    let element: HTMLElement
    let elementRef: Ref<HTMLElement>

    beforeEach(async () => {
      const parent = document.createElement('div')
      element = document.createElement('span')

      parent.appendChild(element)
      document.body.appendChild(parent)

      vi.spyOn(element, 'getBoundingClientRect')
        .mockReturnValue({
          width: 100,
          height: 20,
        } as DOMRect)

      elementRef = ref(element)

      mountComposable(() => useTextTruncation(elementRef))

      await nextTick()
    })

    BddTest().then('it should not be truncated', async () => {
      expect(elementRef.value).toBe(element)
    })
  })

  BddTest().when('the component is unmounted', () => {
    beforeEach(async () => {
      const parent = document.createElement('div')
      const element = document.createElement('span')

      parent.appendChild(element)
      document.body.appendChild(parent)

      const elementRef = ref(element)

      const { unmount } = mountComposable(() => useTextTruncation(elementRef))

      await nextTick()

      unmount()
    })

    BddTest().then('it should disconnect the observers', async () => {
      expect(resizeObserverMock.disconnect).toHaveBeenCalled()
      expect(mutationObserverMock.disconnect).toHaveBeenCalled()
    })
  })
})

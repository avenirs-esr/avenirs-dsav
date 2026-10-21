import type { Ref } from 'vue'
import { nextTick } from 'vue'

const MEASURE_CLASS = 'av-text-truncation-measure'
const HEIGHT_TOLERANCE = 1

/**
 * Composable for detecting text truncation within an HTML element.
 * This composable observes the element for changes in size or content and updates
 * the truncation status accordingly.
 * It creates a clone of the element without line clamping to measure its natural height.
 * It also creates a clone of the parent element to measure the natural height of the text without line clamping.
 * It uses a custom DSAV CSS class to measure the natural height of the text.
 * @param elementRef The reference to the HTML element to check for text truncation.
 * @returns An object containing `isTruncated`, a ref indicating if the text is truncated.
 */
export function useTextTruncation (elementRef: Ref<HTMLElement | undefined | null>) {
  const isTruncated = ref(false)
  let resizeObserver: ResizeObserver | undefined
  let mutationObserver: MutationObserver | undefined
  let observedElement: HTMLElement | null = null
  let observedParent: HTMLElement | null = null

  const checkTruncation = async () => {
    await nextTick()

    await new Promise<void>((resolve) => {
      requestAnimationFrame(() => resolve())
    })

    const element = elementRef.value
    const parent = element?.parentElement

    if (!element || !parent) {
      isTruncated.value = false
      return
    }

    const parentClone = parent.cloneNode(true) as HTMLElement

    const elementIndex = Array.from(parent.children).indexOf(element)
    const clone = parentClone.children[elementIndex] as HTMLElement | undefined

    if (!clone) {
      isTruncated.value = false
      return
    }

    clone.classList.add(MEASURE_CLASS)

    const naturalWidth = element.getBoundingClientRect().width

    const originalStyle = getComputedStyle(element)

    Object.assign(clone.style, {
      display: 'block',
      width: `${naturalWidth}px`,
      height: 'auto',
      maxHeight: 'none',
      overflow: 'visible',
      whiteSpace: originalStyle.whiteSpace,
    })

    Object.assign(parentClone.style, {
      position: 'absolute',
      visibility: 'hidden',
      pointerEvents: 'none',
      width: `${parent.getBoundingClientRect().width}px`,
      height: 'auto',
      maxHeight: 'none',
    })

    document.body.appendChild(parentClone)

    try {
      const naturalHeight = clone.getBoundingClientRect().height
      const displayedHeight = element.getBoundingClientRect().height

      const isHorizontallyTruncated = element.scrollWidth > element.clientWidth
      const isVerticallyTruncated = naturalHeight > displayedHeight + HEIGHT_TOLERANCE

      isTruncated.value = isHorizontallyTruncated || isVerticallyTruncated
    }
    finally {
      parentClone.remove()
    }
  }

  const observeElement = () => {
    resizeObserver?.disconnect()
    mutationObserver?.disconnect()

    observedElement = elementRef.value ?? null
    observedParent = observedElement?.parentElement ?? null

    if (!observedElement) {
      isTruncated.value = false
      return
    }

    resizeObserver = new ResizeObserver(checkTruncation)
    resizeObserver.observe(observedElement)

    if (observedParent) {
      resizeObserver.observe(observedParent)
    }

    mutationObserver = new MutationObserver(checkTruncation)

    mutationObserver.observe(observedElement, {
      childList: true,
      characterData: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'style'],
    })

    if (observedParent) {
      mutationObserver.observe(observedParent, {
        attributes: true,
        attributeFilter: ['class', 'style'],
      })
    }

    checkTruncation()
  }

  onMounted(observeElement)

  watch(elementRef, observeElement, { flush: 'post' })

  onBeforeUnmount(() => {
    resizeObserver?.disconnect()
    mutationObserver?.disconnect()
    observedElement = null
    observedParent = null
  })

  return {
    isTruncated,
  }
}

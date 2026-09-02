import { nextTick, type Ref } from 'vue'

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

  const checkTruncation = async () => {
    await nextTick()

    const element = elementRef.value
    const parent = element?.parentElement

    if (!element || !parent) {
      isTruncated.value = false
      return
    }

    const parentClone = parent.cloneNode(true) as HTMLElement

    const elementIndex = Array.from(parent.children).indexOf(element)
    const clone = parentClone.children[elementIndex] as HTMLElement

    if (!clone) {
      isTruncated.value = false
      return
    }

    clone.classList.add(MEASURE_CLASS)

    Object.assign(parentClone.style, {
      position: 'absolute',
      visibility: 'hidden',
      pointerEvents: 'none',
      width: `${parent.getBoundingClientRect().width}px`,
      height: 'auto',
      maxHeight: 'none',
    })

    document.body.appendChild(parentClone)

    const naturalHeight = clone.getBoundingClientRect().height
    const displayedHeight = element.getBoundingClientRect().height

    isTruncated.value = naturalHeight > displayedHeight + HEIGHT_TOLERANCE

    parentClone.remove()
  }

  onMounted(() => {
    const element = elementRef.value
    const parent = element?.parentElement

    if (!element) {
      return
    }

    resizeObserver = new ResizeObserver(checkTruncation)
    resizeObserver.observe(element)
    if (parent) {
      resizeObserver.observe(parent)
    }

    mutationObserver = new MutationObserver(checkTruncation)
    mutationObserver.observe(element, {
      childList: true,
      characterData: true,
      subtree: true,
    })

    window.addEventListener('resize', checkTruncation)

    checkTruncation()
  })

  onBeforeUnmount(() => {
    resizeObserver?.disconnect()
    mutationObserver?.disconnect()
    window.removeEventListener('resize', checkTruncation)
  })

  return {
    isTruncated,
  }
}

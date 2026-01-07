/**
 * Return type of the {@link useContainedScroll} composable.
 *
 * A composable to contain scroll events within a specified scrollable element.
 * Prevents scroll "bleed" when reaching the top or bottom of the scrollable area.
 * Handles both wheel and touch events for comprehensive support.
 *
 * It exposes event handlers for wheel and touch events to be attached to
 * the relevant container element.
 */
export interface UseContainedScrollReturn {
  /**
   * Handler for wheel events to contain scrolling within the specified scrollable element.
   * @param event - The wheel event object.
   */
  onWheel: (event: WheelEvent) => void

  /**
   * Handler for touchstart events to initialize touch-based scrolling containment.
   * @param event - The touch event object.
   */
  onTouchStart: (event: TouchEvent) => void

  /**
   * Handler for touchmove events to contain scrolling within the specified scrollable element.
   * @param event - The touch event object.
   */
  onTouchMove: (event: TouchEvent) => void
}

interface UseContainedScrollOptions {
  scrollableSelector: string
}

/**
 * A composable that helps contain scroll events within a specified scrollable element.
 * @param options - Configuration options for the contained scroll behavior:
 * @param options.scrollableSelector - A CSS selector string to identify the scrollable element within which scrolling should be contained.
 * @returns An object containing event handlers for wheel and touch events to manage contained scrolling.
 */
export function useContainedScroll (
  { scrollableSelector }: UseContainedScrollOptions
): UseContainedScrollReturn {
  const startY = ref(0)

  function preventScroll (
    event: WheelEvent | TouchEvent,
    deltaY: number
  ) {
    const target = event.target as HTMLElement
    const scrollable = target.closest(scrollableSelector) as HTMLElement | null

    if (!scrollable) {
      event.preventDefault()
      return
    }

    const { scrollTop, scrollHeight, clientHeight } = scrollable

    const atTop = scrollTop === 0
    const atBottom = scrollTop + clientHeight >= scrollHeight - 1

    const scrollingUp = deltaY < 0
    const scrollingDown = deltaY > 0

    if (
      scrollHeight <= clientHeight
      || (scrollingUp && atTop)
      || (scrollingDown && atBottom)
    ) {
      event.preventDefault()
    }
  }

  function onWheel (event: WheelEvent) {
    preventScroll(event, event.deltaY)
  }

  function onTouchStart (event: TouchEvent) {
    startY.value = event.touches[0].clientY
  }

  function onTouchMove (event: TouchEvent) {
    preventScroll(event, startY.value - event.touches[0].clientY)
  }

  return {
    onWheel,
    onTouchStart,
    onTouchMove
  }
}

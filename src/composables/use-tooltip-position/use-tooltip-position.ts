import { nextTick } from 'vue'
import { remToPx } from '@/utils/units/units'

type Placement = 'top' | 'bottom'

/**
 * Composable for managing tooltip positioning. It is meant to be used with AvTooltip.
 * @returns An object containing tooltip placement, style, and update/reset functions.
 */
export function useTooltipPosition () {
  const placement = ref<Placement>('top')
  const tooltipStyle = ref<Record<string, string>>({
    position: 'fixed',
    visibility: 'hidden',
  })
  const arrowLeft = ref('50%')

  function getViewportWidth (): number {
    return window.visualViewport?.width ?? document.documentElement.clientWidth
  }

  function getViewportHeight (): number {
    return window.visualViewport?.height ?? document.documentElement.clientHeight
  }

  function clamp (value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max)
  }

  function computePlacement (triggerRect: DOMRect, tooltipRect: DOMRect, padding: number): Placement {
    const spaceTop = triggerRect.top
    const spaceBottom = getViewportHeight() - triggerRect.bottom

    const fitsTop = spaceTop >= tooltipRect.height + padding
    const fitsBottom = spaceBottom >= tooltipRect.height + padding

    if (fitsTop) {
      return 'top'
    }
    if (fitsBottom) {
      return 'bottom'
    }

    return spaceTop > spaceBottom ? 'top' : 'bottom'
  }

  async function update (
    trigger: HTMLElement,
    tooltip: HTMLElement,
    paddingRem: number
  ) {
    const padding = remToPx(paddingRem)
    await nextTick()

    const triggerRect = trigger.getBoundingClientRect()
    const tooltipRect = tooltip.getBoundingClientRect()

    placement.value = computePlacement(triggerRect, tooltipRect, padding)

    let top = 0

    if (placement.value === 'top') {
      top = triggerRect.top - tooltipRect.height - padding
    }
    else {
      top = triggerRect.bottom + padding
    }

    const triggerCenterX = triggerRect.left + triggerRect.width / 2

    let left = triggerCenterX - tooltipRect.width / 2

    if (left < padding) {
      left = padding
    }

    const viewportWidth = getViewportWidth()

    if (left + tooltipRect.width > viewportWidth - padding) {
      left = viewportWidth - tooltipRect.width - padding
    }

    const rawArrowX = triggerCenterX - left
    const arrowEdgePadding = 6
    const safeArrowX = clamp(rawArrowX, arrowEdgePadding, tooltipRect.width - arrowEdgePadding)

    arrowLeft.value = `${safeArrowX}px`

    tooltipStyle.value = {
      'position': 'fixed',
      'left': `${left}px`,
      'top': `${top}px`,
      '--arrow-left': arrowLeft.value
    }
  }

  function reset () {
    placement.value = 'top'
    tooltipStyle.value = {
      position: 'fixed',
      visibility: 'hidden',
    }
    arrowLeft.value = '50%'
  }

  return {
    placement,
    tooltipStyle,
    update,
    reset,
  }
}

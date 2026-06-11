import { afterEach, beforeEach, expect, vi } from 'vitest'
import { useTooltipPosition } from '@/composables/use-tooltip-position/use-tooltip-position'
import { BddTest } from '@/tests/utils'

function createRect (partial: Partial<DOMRect>): DOMRect {
  return {
    x: partial.x ?? 0,
    y: partial.y ?? 0,
    top: partial.top ?? 0,
    left: partial.left ?? 0,
    right: partial.right ?? 0,
    bottom: partial.bottom ?? 0,
    width: partial.width ?? 0,
    height: partial.height ?? 0,
    toJSON: () => '',
  } as DOMRect
}

BddTest().given('a useTooltipPosition composable', () => {
  const defaultPadding = 0.5
  let trigger: HTMLElement
  let tooltip: HTMLElement
  let composable: ReturnType<typeof useTooltipPosition>

  beforeEach(() => {
    vi.clearAllMocks()

    Object.defineProperty(window, 'visualViewport', {
      configurable: true,
      value: undefined,
    })

    Object.defineProperty(document.documentElement, 'clientWidth', {
      configurable: true,
      value: 1000,
    })

    Object.defineProperty(document.documentElement, 'clientHeight', {
      configurable: true,
      value: 800,
    })

    document.documentElement.style.fontSize = '16px'

    trigger = document.createElement('button')
    tooltip = document.createElement('div')
    composable = useTooltipPosition()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  BddTest().then('it should initialize with hidden style and top placement', () => {
    expect(composable.placement.value).toBe('top')
    expect(composable.tooltipStyle.value).toEqual({
      position: 'fixed',
      visibility: 'hidden',
    })
  })

  BddTest().when('there is enough space above the trigger', () => {
    beforeEach(async () => {
      vi.spyOn(trigger, 'getBoundingClientRect').mockReturnValue(createRect({
        top: 400,
        bottom: 420,
        left: 100,
        width: 40,
      }))

      vi.spyOn(tooltip, 'getBoundingClientRect').mockReturnValue(createRect({
        width: 200,
        height: 80,
      }))

      await composable.update(trigger, tooltip, defaultPadding)
    })

    BddTest().then('it should place the tooltip on top and center arrow', () => {
      expect(composable.placement.value).toBe('top')
      expect(composable.tooltipStyle.value).toEqual({
        'position': 'fixed',
        'left': '20px',
        'top': '312px',
        '--arrow-left': '100px',
      })
    })
  })

  BddTest().when('there is not enough space above but enough space below', () => {
    beforeEach(async () => {
      vi.spyOn(trigger, 'getBoundingClientRect').mockReturnValue(createRect({
        top: 10,
        bottom: 30,
        left: 400,
        width: 40,
      }))

      vi.spyOn(tooltip, 'getBoundingClientRect').mockReturnValue(createRect({
        width: 160,
        height: 80,
      }))

      await composable.update(trigger, tooltip, defaultPadding)
    })

    BddTest().then('it should place the tooltip below', () => {
      expect(composable.placement.value).toBe('bottom')
      expect(composable.tooltipStyle.value.top).toBe('38px')
    })
  })

  BddTest().when('the tooltip would overflow on the right', () => {
    beforeEach(async () => {
      Object.defineProperty(document.documentElement, 'clientWidth', {
        configurable: true,
        value: 500,
      })

      vi.stubGlobal('innerWidth', 1000)

      vi.spyOn(trigger, 'getBoundingClientRect').mockReturnValue(createRect({
        top: 200,
        bottom: 220,
        left: 460,
        width: 40,
      }))

      vi.spyOn(tooltip, 'getBoundingClientRect').mockReturnValue(createRect({
        width: 200,
        height: 80,
      }))

      await composable.update(trigger, tooltip, defaultPadding)
    })

    BddTest().then('it should clamp left position using viewport width and not innerWidth', () => {
      expect(composable.tooltipStyle.value.left).toBe('292px')
      expect(composable.tooltipStyle.value['--arrow-left']).toBe('188px')
    })
  })

  BddTest().when('the trigger is too close to the left edge', () => {
    beforeEach(async () => {
      vi.spyOn(trigger, 'getBoundingClientRect').mockReturnValue(createRect({
        top: 200,
        bottom: 220,
        left: 0,
        width: 10,
      }))

      vi.spyOn(tooltip, 'getBoundingClientRect').mockReturnValue(createRect({
        width: 200,
        height: 80,
      }))

      await composable.update(trigger, tooltip, defaultPadding)
    })

    BddTest().then('it should clamp tooltip left and arrow offset', () => {
      expect(composable.tooltipStyle.value.left).toBe('8px')
      expect(composable.tooltipStyle.value['--arrow-left']).toBe('6px')
    })
  })

  BddTest().when('reset is called after update', () => {
    beforeEach(async () => {
      vi.spyOn(trigger, 'getBoundingClientRect').mockReturnValue(createRect({
        top: 200,
        bottom: 220,
        left: 200,
        width: 20,
      }))

      vi.spyOn(tooltip, 'getBoundingClientRect').mockReturnValue(createRect({
        width: 120,
        height: 40,
      }))

      await composable.update(trigger, tooltip, defaultPadding)
      composable.reset()
    })

    BddTest().then('it should restore default placement and hidden style', () => {
      expect(composable.placement.value).toBe('top')
      expect(composable.tooltipStyle.value).toEqual({
        position: 'fixed',
        visibility: 'hidden',
      })
    })
  })
})

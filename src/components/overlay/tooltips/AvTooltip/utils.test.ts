import { expect } from 'vitest'
import { getAvTooltipContent, isAvTooltipEnabled } from '@/components/overlay/tooltips/AvTooltip/utils'
import { BddTest } from '@/tests/utils'

BddTest().given('AvTooltip helpers for interactive controls', () => {
  BddTest().when('an enabled control has no reason to show a tooltip', () => {
    const props = { disabledTooltip: 'Unavailable' }

    BddTest().then('it should keep regular content and disable the tooltip', () => {
      expect(getAvTooltipContent({ ...props, content: 'Label' })).toBe('Label')
      expect(isAvTooltipEnabled(props)).toBe(false)
    })
  })

  BddTest().when('an enabled control explicitly enables its tooltip', () => {
    BddTest().then('it should enable the tooltip', () => {
      expect(isAvTooltipEnabled({ enableTooltip: true })).toBe(true)
    })
  })

  BddTest().when('a control is icon-only', () => {
    BddTest().then('it should enable the tooltip', () => {
      expect(isAvTooltipEnabled({ iconOnly: true })).toBe(true)
    })
  })

  BddTest().when('an icon-only control is disabled', () => {
    BddTest().then('it should still enable the tooltip', () => {
      expect(isAvTooltipEnabled({ iconOnly: true, disabled: true })).toBe(true)
    })
  })

  BddTest().when('a disabled control has a disabled tooltip', () => {
    const props = { disabled: true, disabledTooltip: 'Unavailable' }

    BddTest().then('it should show the disabled message and make the trigger focusable', () => {
      expect(getAvTooltipContent({ ...props, content: 'Label' })).toBe('Unavailable')
      expect(isAvTooltipEnabled(props)).toBe(true)
    })
  })

  BddTest().when('a disabled control has no disabled tooltip', () => {
    const props = { disabled: true }

    BddTest().then('it should disable the tooltip without forcing focusability', () => {
      expect(getAvTooltipContent({ ...props, content: 'Label' })).toBe('Label')
      expect(isAvTooltipEnabled(props)).toBe(false)
    })
  })

  BddTest().when('a disabled control explicitly enables its tooltip', () => {
    BddTest().then('it should enable the tooltip', () => {
      expect(isAvTooltipEnabled({ disabled: true, enableTooltip: true })).toBe(true)
    })
  })
})

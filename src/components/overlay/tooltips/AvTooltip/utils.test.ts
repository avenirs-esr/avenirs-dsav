import { expect } from 'vitest'
import { getAvTooltipContent, getAvTooltipForceFocusable, isAvTooltipDisabled } from '@/components/overlay/tooltips/AvTooltip/utils'
import { BddTest } from '@/tests/utils'

BddTest().given('AvTooltip helpers for interactive controls', () => {
  BddTest().when('an enabled control has a disabled tooltip', () => {
    const props = { disabledTooltip: 'Unavailable' }

    BddTest().then('it should keep regular content and disable the tooltip', () => {
      expect(getAvTooltipContent({ ...props, content: 'Label' })).toBe('Label')
      expect(isAvTooltipDisabled(props)).toBe(true)
      expect(getAvTooltipForceFocusable(props)).toBe(false)
    })
  })

  BddTest().when('a disabled control has a disabled tooltip', () => {
    const props = { disabled: true, disabledTooltip: 'Unavailable' }

    BddTest().then('it should show the disabled message and make the trigger focusable', () => {
      expect(getAvTooltipContent({ ...props, content: 'Label' })).toBe('Unavailable')
      expect(isAvTooltipDisabled(props)).toBe(false)
      expect(getAvTooltipForceFocusable(props)).toBe(true)
    })
  })

  BddTest().when('a disabled control has no disabled tooltip', () => {
    const props = { disabled: true }

    BddTest().then('it should disable the tooltip without forcing focusability', () => {
      expect(getAvTooltipContent({ ...props, content: 'Label' })).toBe('Label')
      expect(isAvTooltipDisabled(props)).toBe(true)
      expect(getAvTooltipForceFocusable(props)).toBe(false)
    })
  })
})

import { beforeEach, expect } from 'vitest'
import { BddTest } from '@/tests'
import { MDI_ICONS, RI_ICONS } from '@/tokens'
import { getIconPath, type IconPathStyle } from '@/utils/icon-path/icon-path'

/**
 * Get CSS variable for icon path
 * @param name Icon name or data URL.
 * You must use the icons constants defined in `src/tokens/icons.ts`.
 * By not using the constants, you risk falsely referencing an undefined CSS variable.
 * @returns CSS variable object for icon path. `{ '--icon-path': string } | Record<string, never>`
 * @example
 * ```ts
 * getIconPath(MDI_ICONS.ACCOUNT_CIRCLE_OUTLINE)
 * // Returns: { '--icon-path': 'var(--icon-mdi-account-circle-outline)' }
 *
 * getIconPath('mdi:account-circle-outline')
 * // Returns: { '--icon-path': 'var(--icon-mdi-account-circle-outline)' }
 *
 * getIconPath(RI_ICONS.DICE_1_LINE)
 * // Returns: { '--icon-path': 'var(--icon-ri-dice-1-line)' }
 *
 * getIconPath('ri:dice-1-line')
 * // Returns: { '--icon-path': 'var(--icon-ri-dice-1-line)' }
 *
 * getIconPath('data:image/svg+xml;base64,...')
 * // Returns: { '--icon-path': 'url(data:image/svg+xml;base64,...)' }
 *
 * getIconPath('')
 * // Returns: {}
 *
 * getIconPath('   ')
 * // Returns: {}
 *
 * getIconPath('undefined-icon-name')
 * // Returns: { '--icon-path': 'var(--icon-undefined-icon-name)' }
 * // Falsy icon names still return a CSS variable reference.
 * ```
 */

BddTest().given('an icon path getter', () => {
  let result: IconPathStyle

  BddTest().when('getting icon path with existing MDI_ICONS constant', () => {
    beforeEach(() => {
      result = getIconPath(MDI_ICONS.ACCOUNT_CIRCLE_OUTLINE)
    })

    BddTest().then('it should return the correct CSS variable', () => {
      expect(result).toEqual({ '--icon-path': 'var(--icon-mdi-account-circle-outline)' })
    })
  })

  BddTest().when('getting icon path with existing MDI_ICONS constant as string', () => {
    beforeEach(() => {
      result = getIconPath('mdi:account-circle-outline')
    })

    BddTest().then('it should return the correct CSS variable', () => {
      expect(result).toEqual({ '--icon-path': 'var(--icon-mdi-account-circle-outline)' })
    })
  })

  BddTest().when('getting icon path with existing RI_ICONS constant', () => {
    beforeEach(() => {
      result = getIconPath(RI_ICONS.DICE_1_LINE)
    })

    BddTest().then('it should return the correct CSS variable', () => {
      expect(result).toEqual({ '--icon-path': 'var(--icon-ri-dice-1-line)' })
    })
  })

  BddTest().when('getting icon path with existing RI_ICONS constant as string', () => {
    beforeEach(() => {
      result = getIconPath('ri:dice-1-line')
    })

    BddTest().then('it should return the correct CSS variable', () => {
      expect(result).toEqual({ '--icon-path': 'var(--icon-ri-dice-1-line)' })
    })
  })

  BddTest().when('getting icon path with data URL', () => {
    beforeEach(() => {
      result = getIconPath('data:image/svg+xml;base64,...')
    })

    BddTest().then('it should return a URL CSS variable', () => {
      expect(result).toEqual({ '--icon-path': 'url(data:image/svg+xml;base64,...)' })
    })
  })

  BddTest().when('getting icon path with non existing icon name', () => {
    beforeEach(() => {
      result = getIconPath('undefined-icon-name')
    })

    BddTest().then('it should return a CSS variable with the given name', () => {
      expect(result).toEqual({ '--icon-path': 'var(--icon-undefined-icon-name)' })
    })
  })

  BddTest().when('getting icon path with empty string', () => {
    beforeEach(() => {
      result = getIconPath('')
    })

    BddTest().then('it should return an empty object', () => {
      expect(result).toEqual({})
    })
  })

  BddTest().when('getting icon path with whitespace string', () => {
    beforeEach(() => {
      result = getIconPath('   ')
    })

    BddTest().then('it should return an empty object', () => {
      expect(result).toEqual({})
    })
  })
})

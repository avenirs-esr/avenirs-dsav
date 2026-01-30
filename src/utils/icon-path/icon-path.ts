export type IconPathStyle = { '--icon-path': string } | Record<string, never>

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
export function getIconPath (name?: string): IconPathStyle {
  const trimmedName = name?.trim()

  if (!trimmedName) {
    return {}
  }

  if (trimmedName.startsWith('data:')) {
    return { '--icon-path': `url(${trimmedName})` }
  }

  const safeName = trimmedName.replace(':', '-')
  return { '--icon-path': `var(--icon-${safeName})` }
}

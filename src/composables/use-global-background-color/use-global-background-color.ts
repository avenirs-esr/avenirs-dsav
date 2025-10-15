/**
 * Vue composable to dynamically update the global background color using a CSS variable.
 *
 * This composable sets the CSS custom property `--global-background-color`
 * on the `#app`, `<html>` and `<body>` elements when the component is mounted,
 * and automatically * resets it to its default value (`var(--default-global-background-color)`)
 * when the component is unmounted.
 *
 * It allows you to control page-level background color transitions
 * when navigating between views.
 *
 * @example
 * ```ts
 * useGlobalBackgroundColor('var(--my-color)') // sets the global background to 'var(--my-color)' while mounted
 * ```
 *
 * @param {string} color - The background color value to apply (e.g., `'red'`, `'#f0f0f0'`, or `'var(--my-color)'`).
 */
export function useGlobalBackgroundColor (color: string) {
  onMounted(() => {
    document.documentElement.style.setProperty('--global-background-color', color)
  })

  onUnmounted(() => {
    document.documentElement.style.setProperty('--global-background-color', 'var(--default-global-background-color)')
  })
}

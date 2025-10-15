import type { ComputedRef } from 'vue'
import type { BREAKPOINTS } from '@/config'

/**
 * Result returned by the useBreakpoint composable.
 */
export interface UseBreakpointReturn {
  /**
   * Returns a computed boolean that is `true` when the viewport width
   * is strictly **below** the given breakpoint (`max-width: bp - 1px`).
   *
   * Equivalent to the Sass mixin: `@include respond-below($breakpoint)`
   *
   * @example
   * ```ts
   * const isMobile = respondBelow(BREAKPOINTS.MD) // true if width <= 767px
   * ```
   */
  respondBelow: (bp: BREAKPOINTS) => ComputedRef<boolean>

  /**
   * Returns a computed boolean that is `true` when the viewport width
   * is **at or above** the given breakpoint (`min-width: bp`).
   *
   * Equivalent to the Sass mixin: `@include respond-to($breakpoint)`
   *
   * @example
   * ```ts
   * const isDesktop = respondTo(BREAKPOINTS.LG) // true if width >= 1024px
   * ```
   */
  respondTo: (bp: BREAKPOINTS) => ComputedRef<boolean>
}

/**
 * Vue composable to handle responsive breakpoints based on the current viewport width.
 *
 * This composable provides reactive utilities (`respondBelow` and `respondTo`)
 * that mirror the behavior of the Sass mixins `@include respond-below($breakpoint)`
 * and `@include respond-to($breakpoint)`, allowing you to keep logic and styles
 * perfectly in sync.
 *
 * @example
 * ```ts
 * const { respondBelow, respondTo } = useBreakpoint()
 *
 * const isMobile = respondBelow(BREAKPOINTS.MD) // true if width < 768px
 * const isDesktop = respondTo(BREAKPOINTS.LG)  // true if width >= 1024px
 * ```
 *
 * @returns {UseBreakpointReturn} Object containing:
 *  - `respondBelow`: Returns a computed boolean (`true` if width < breakpoint),
 *  - `respondTo`: Returns a computed boolean (`true` if width >= breakpoint).
 *
 * @see BREAKPOINTS for the defined responsive thresholds.
 */
export function useBreakpoint (): UseBreakpointReturn {
  const width = ref(window.innerWidth)

  const onResize = () => {
    width.value = window.innerWidth
  }

  onMounted(() => window.addEventListener('resize', onResize))
  onUnmounted(() => window.removeEventListener('resize', onResize))

  const respondBelow = (bp: BREAKPOINTS) =>
    computed(() => width.value <= bp - 1)

  const respondTo = (bp: BREAKPOINTS) =>
    computed(() => width.value >= bp)

  return { respondBelow, respondTo }
}

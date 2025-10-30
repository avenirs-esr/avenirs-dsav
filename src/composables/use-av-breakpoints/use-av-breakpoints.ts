import type { Ref } from 'vue'
import { useBreakpoints } from '@vueuse/core'

/**
 * Named viewport breakpoints for responsive behavior.
 * These values are aligned with the AVENIR(s) design system.
 */
export const AV_BREAKPOINTS = {
  sm: 576, /* 36rem */
  md: 768, /* 48rem */
  lg: 1024, /* 64rem */
  xl: 1440, /* 90rem */
} as const

/**
 * Result returned by the `useAvBreakpoints` composable.
 *
 * Each property is a reactive reference (`Ref<boolean>`) that updates automatically
 * when the viewport width changes. It provides both **granular breakpoint flags**
 * (`isBelowSm`, `isAboveLg`, etc.) and **semantic viewport categories**
 * (`isMobile`, `isTablet`, `isDesktop`).
 * The current active breakpoint key is also provided via `currentBreakpoint`.
 */
export interface UseAvBreakpointsReturn {
  /**
   * True if the viewport width is considered mobile.
   * Equivalent to `width < 768px (48rem)` (below md).
   */
  isMobile: Ref<boolean>

  /**
   * True if the viewport width is considered tablet.
   * Equivalent to `768px (48rem) <= width < 1024px (64rem)` (between md and lg).
   */
  isTablet: Ref<boolean>

  /**
   * True if the viewport width is considered desktop.
   * Equivalent to `width >= 1024px (64rem)` (lg and above).
   */
  isDesktop: Ref<boolean>

  /** True if viewport width is below 576px (36rem). */
  isBelowSm: Ref<boolean>

  /** True if viewport width is below 768px (48rem). */
  isBelowMd: Ref<boolean>

  /** True if viewport width is below 1024px (64rem). */
  isBelowLg: Ref<boolean>

  /** True if viewport width is below 1440px (90rem). */
  isBelowXl: Ref<boolean>

  /** True if viewport width is above or equal to 768px (48rem). */
  isAboveMd: Ref<boolean>

  /** True if viewport width is above or equal to 1024px (64rem). */
  isAboveLg: Ref<boolean>

  /** Current active breakpoint key ('sm' | 'md' | 'lg' | 'xl'). */
  currentBreakpoint?: Ref<keyof typeof AV_BREAKPOINTS>
}

/**
 * Vue composable providing reactive responsive utilities
 * based on the current viewport width.
 *
 * It uses VueUse useBreakpoints with DSAV breakpoints:
 * - sm: 576px (36rem),
 * - md: 768px (48rem),
 * - lg: 1024px (64rem),
 * - xl: 1440px (90rem),
 *
 * @example
 * ```ts
 * import { useAvBreakpoints } from '@avenirs-esr/avenirs-dsav'
 *
 * const { isMobile, isDesktop, isBelowMd, isAboveLg } = useAvBreakpoints()
 * ```
 *
 * @returns {UseAvBreakpointsReturn} Object containing:
 * - `isBelowSm|Md|Lg|Xl`: computed refs returning true if below a breakpoint
 * - `isAboveMd|Lg`: computed refs returning true if above a breakpoint
 *
 * @see {@link https://vueuse.org/core/useBreakpoints/ useBreakpoints on VueUse}
 */
export function useAvBreakpoints (): UseAvBreakpointsReturn {
  const breakpoints = useBreakpoints(AV_BREAKPOINTS)

  const isBelowSm = breakpoints.smaller('sm')
  const isBelowMd = breakpoints.smaller('md')
  const isBelowLg = breakpoints.smaller('lg')
  const isBelowXl = breakpoints.smaller('xl')
  const isAboveMd = breakpoints.greater('md')
  const isAboveLg = breakpoints.greater('lg')

  const isMobile = isBelowMd
  const isTablet = computed(() => isAboveMd.value && isBelowLg.value)
  const isDesktop = isAboveLg

  const currentBreakpoint = breakpoints.active() as Ref<keyof typeof AV_BREAKPOINTS>

  return {
    isMobile,
    isTablet,
    isDesktop,
    isBelowSm,
    isBelowMd,
    isBelowLg,
    isBelowXl,
    isAboveMd,
    isAboveLg,
    currentBreakpoint
  }
}

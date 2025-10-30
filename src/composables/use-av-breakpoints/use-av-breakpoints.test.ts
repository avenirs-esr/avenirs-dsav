import type { MaybeRefOrGetter } from 'vue'
import { beforeEach, expect, vi } from 'vitest'
import { type AV_BREAKPOINTS, useAvBreakpoints } from '@/composables/use-av-breakpoints/use-av-breakpoints'
import { BddTest, mountComposable } from '@/tests/utils'

const mockSmaller = vi.fn()
const mockGreater = vi.fn()
const mockActive = vi.fn()
const mockComputed = (val: boolean) => computed(() => val)

vi.mock('@vueuse/core', () => ({
  useBreakpoints: vi.fn(() => ({
    smaller: (bp: MaybeRefOrGetter<string>) => mockComputed(mockSmaller(bp)),
    greater: (bp: MaybeRefOrGetter<string>) => mockComputed(mockGreater(bp)),
    active: () => computed(() => mockActive())
  }))
}))

BddTest().given('a useAvBreakpoints composable', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  interface Scenario {
    name: string
    smaller: string[]
    greater: string[]
    active: keyof typeof AV_BREAKPOINTS
  }

  const scenarios: Scenario[] = [
    { name: 'below sm', smaller: ['sm'], greater: [], active: 'sm' },
    { name: 'below md', smaller: ['sm', 'md'], greater: [], active: 'md' },
    { name: 'below lg', smaller: ['sm', 'md', 'lg'], greater: [], active: 'lg' },
    { name: 'below xl', smaller: ['sm', 'md', 'lg', 'xl'], greater: [], active: 'xl' },
    { name: 'above md', smaller: [], greater: ['md', 'lg', 'xl'], active: 'lg' },
    { name: 'above lg', smaller: [], greater: ['lg', 'xl'], active: 'xl' },
  ]

  scenarios.forEach(({ name, smaller, greater, active }) => {
    BddTest().when(`the viewport width is ${name}`, () => {
      beforeEach(() => {
        mockSmaller.mockImplementation(bp => smaller.includes(bp))
        mockGreater.mockImplementation(bp => greater.includes(bp))
        mockActive.mockImplementation(() => active)
      })

      BddTest().then('it should return the right result', () => {
        const { result } = mountComposable(() => useAvBreakpoints())

        Object.entries(result).forEach(([key, ref]) => {
          let expectedValue: boolean | keyof typeof AV_BREAKPOINTS
          if (key === 'currentBreakpoint') {
            expectedValue = active
          }
          else if (key === 'isMobile') {
            expectedValue = result.isBelowMd.value
          }
          else if (key === 'isTablet') {
            expectedValue = result.isAboveMd.value && result.isBelowLg.value
          }
          else if (key === 'isDesktop') {
            expectedValue = result.isAboveLg.value
          }
          else if (key.startsWith('isBelow')) {
            expectedValue = smaller.includes(key.replace('isBelow', '').toLowerCase())
          }
          else {
            expectedValue = greater.includes(key.replace('isAbove', '').toLowerCase())
          }

          expect(ref.value).toBe(expectedValue)
        })
      })
    })
  })
})

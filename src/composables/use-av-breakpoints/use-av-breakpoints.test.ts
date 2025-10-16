import type { MaybeRefOrGetter } from 'vue'
import { beforeEach, expect, vi } from 'vitest'
import { BddTest, mountComposable } from '@/tests/utils'
import { useAvBreakpoints } from './use-av-breakpoints'

const mockSmaller = vi.fn()
const mockGreater = vi.fn()
const mockComputed = (val: boolean) => computed(() => val)

vi.mock('@vueuse/core', () => ({
  useBreakpoints: vi.fn(() => ({
    smaller: (bp: MaybeRefOrGetter<string>) => mockComputed(mockSmaller(bp)),
    greater: (bp: MaybeRefOrGetter<string>) => mockComputed(mockGreater(bp)),
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
  }

  const scenarios: Scenario[] = [
    { name: 'below sm', smaller: ['sm'], greater: [] },
    { name: 'below md', smaller: ['sm', 'md'], greater: [] },
    { name: 'below lg', smaller: ['sm', 'md', 'lg'], greater: [] },
    { name: 'below xl', smaller: ['sm', 'md', 'lg', 'xl'], greater: [] },
    { name: 'above md', smaller: [], greater: ['md', 'lg', 'xl'] },
    { name: 'above lg', smaller: [], greater: ['lg', 'xl'] },
  ]

  scenarios.forEach(({ name, smaller, greater }) => {
    BddTest().when(`the viewport width is ${name}`, () => {
      beforeEach(() => {
        mockSmaller.mockImplementation(bp => smaller.includes(bp))
        mockGreater.mockImplementation(bp => greater.includes(bp))
      })

      BddTest().then('it should return the right result', () => {
        const { result } = mountComposable(() => useAvBreakpoints())

        Object.entries(result).forEach(([key, ref]) => {
          let expectedValue: boolean
          if (key === 'isMobile') {
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

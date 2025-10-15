import { beforeEach, expect, vi } from 'vitest'
import { useGlobalBackgroundColor } from '@/composables/use-global-background-color/use-global-background-color'
import { BddTest, mountComposable } from '@/tests/utils'

BddTest().given('a useGlobalBackgroundColor composable', () => {
  let setPropertySpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    vi.clearAllMocks()
    setPropertySpy = vi.spyOn(document.documentElement.style, 'setProperty')
  })

  BddTest().when('the composable is mounted with a specific color', () => {
    BddTest().then('it should set the global background color to the given value', () => {
      const color = 'red'
      const { unmount } = mountComposable(() => useGlobalBackgroundColor(color))

      expect(setPropertySpy).toHaveBeenCalledWith('--global-background-color', color)

      unmount()
    })
  })

  BddTest().when('the composable is unmounted', () => {
    BddTest().then('it should reset the background color to the default variable', () => {
      const color = 'blue'
      const { unmount } = mountComposable(() => useGlobalBackgroundColor(color))

      unmount()

      expect(setPropertySpy).toHaveBeenCalledWith(
        '--global-background-color',
        'var(--default-global-background-color)'
      )
    })
  })
})

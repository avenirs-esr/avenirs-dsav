import { beforeEach, expect, vi } from 'vitest'
import { useBreakpoint } from '@/composables/use-breakpoint/use-breakpoint'
import { BREAKPOINTS } from '@/config/breakpoints'
import { BddTest, mountComposable } from '@/tests/utils'

BddTest().given('an useBreakpoint composable', () => {
  let addEventListenerSpy: ReturnType<typeof vi.spyOn>
  let removeEventListenerSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    vi.clearAllMocks()
    addEventListenerSpy = vi.spyOn(window, 'addEventListener')
    removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')
  })

  BddTest().when('the composable is mounted', () => {
    BddTest().then('it should add a resize event listener', () => {
      const { unmount } = mountComposable(() => useBreakpoint())
      expect(addEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function))
      unmount()
      expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function))
    })
  })

  BddTest().when('checking respondBelow and respondTo', () => {
    BddTest().then('they should return correct booleans for current window.innerWidth', () => {
      const { result, unmount } = mountComposable(() => useBreakpoint())

      expect(result.respondBelow(BREAKPOINTS.MD).value).toBe(window.innerWidth <= BREAKPOINTS.MD - 1)
      expect(result.respondTo(BREAKPOINTS.MD).value).toBe(window.innerWidth >= BREAKPOINTS.MD)

      unmount()
    })
  })

  BddTest().when('window is resized', () => {
    BddTest().then('respondBelow and respondTo should update reactively', async () => {
      const { result, unmount } = mountComposable(() => useBreakpoint())
      const resizeHandler = addEventListenerSpy.mock.calls.find(
        call => call[0] === 'resize'
      )?.[1] as EventListener

      window.innerWidth = 500
      resizeHandler(new Event('resize'))

      expect(result.respondBelow(BREAKPOINTS.MD).value).toBe(true)
      expect(result.respondTo(BREAKPOINTS.MD).value).toBe(false)

      window.innerWidth = 1200
      resizeHandler(new Event('resize'))

      expect(result.respondBelow(BREAKPOINTS.MD).value).toBe(false)
      expect(result.respondTo(BREAKPOINTS.MD).value).toBe(true)

      unmount()
    })
  })
})

import { beforeEach, expect, vi } from 'vitest'
import { useContainedScroll, type UseContainedScrollReturn } from '@/composables/use-contained-scroll/use-contained-scroll'
import { BddTest, mountComposable } from '@/tests/utils'

BddTest().given('a useContainedScroll composable', () => {
  let result: UseContainedScrollReturn

  BddTest().when('the composable is initialized', () => {
    beforeEach(() => {
      result = mountComposable(() =>
        useContainedScroll({ scrollableSelector: '.scrollable' })
      ).result
    })

    BddTest().then('it should have event handlers', () => {
      expect(result.onWheel).toBeInstanceOf(Function)
      expect(result.onTouchStart).toBeInstanceOf(Function)
      expect(result.onTouchMove).toBeInstanceOf(Function)
    })

    BddTest().and('the onWheel handler is called', () => {
      let wheelEvent: WheelEvent

      beforeEach(() => {
        document.body.innerHTML = `
          <div class="scrollable" style="height: 100px; overflow-y: scroll;">
            <div style="height: 300px;"></div>
          </div>
        `

        wheelEvent = {
          deltaY: 100,
          target: document.querySelector('.scrollable'),
          preventDefault: vi.fn(),
        } as unknown as WheelEvent

        result.onWheel(wheelEvent)
      })

      BddTest().then('it should prevent default scrolling', () => {
        expect(wheelEvent.preventDefault).toHaveBeenCalled()
      })
    })

    BddTest().and('the onWheel handler is called on a non-scrollable element', () => {
      let wheelEvent: WheelEvent

      beforeEach(() => {
        document.body.innerHTML = `
          <div class="non-scrollable" style="height: 100px; overflow-y: hidden;">
            <div style="height: 300px;"></div>
          </div>
        `

        wheelEvent = {
          deltaY: 100,
          target: document.querySelector('.non-scrollable'),
          preventDefault: vi.fn(),
        } as unknown as WheelEvent

        result.onWheel(wheelEvent)
      })

      BddTest().then('it should prevent default scrolling', () => {
        expect(wheelEvent.preventDefault).toHaveBeenCalled()
      })
    })

    BddTest().and('the onTouchMove handler is called without onTouchStart', () => {
      let touchEvent: TouchEvent

      beforeEach(() => {
        document.body.innerHTML = `
          <div class="scrollable" style="height: 100px; overflow-y: scroll;">
            <div style="height: 300px;"></div>
          </div>
        `

        touchEvent = {
          type: 'touchmove',
          target: document.querySelector('.scrollable'),
          touches: [{ clientY: 200 }],
          preventDefault: vi.fn(),
          defaultPrevented: false
        } as unknown as TouchEvent

        result.onTouchMove(touchEvent)
      })

      BddTest().then('it should prevent default scrolling', () => {
        expect(touchEvent.preventDefault).toHaveBeenCalled()
      })
    })

    BddTest().and('the onTouchStart and onTouchMove handlers are called', () => {
      let touchStartEvent: TouchEvent
      let touchMoveEvent: TouchEvent

      beforeEach(() => {
        document.body.innerHTML = `
          <div class="scrollable" style="height: 100px; overflow-y: scroll;">
            <div style="height: 300px;"></div>
          </div>
        `

        touchStartEvent = {
          type: 'touchstart',
          touches: [{ clientY: 300 }],
          target: document.querySelector('.scrollable'),
        } as unknown as TouchEvent

        touchMoveEvent = {
          type: 'touchmove',
          target: document.querySelector('.scrollable'),
          touches: [{ clientY: 200 }],
          preventDefault: vi.fn(),
          defaultPrevented: false
        } as unknown as TouchEvent

        result.onTouchStart(touchStartEvent)
        result.onTouchMove(touchMoveEvent)
      })

      BddTest().then('it should prevent default scrolling', () => {
        expect(touchMoveEvent.preventDefault).toHaveBeenCalled()
      })
    })
  })
})

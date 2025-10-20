import { beforeEach, expect, vi } from 'vitest'
import { nextTick } from 'vue'
import { useCollapsable, type UseCollapsableReturn } from '@/composables/use-collapsable/use-collapsable'
import { BddTest, mountComposable } from '@/tests/utils'

BddTest().given('a useCollapsable composable', () => {
  let result: UseCollapsableReturn
  let element: HTMLElement

  beforeEach(() => {
    element = document.createElement('div')
    Object.defineProperty(element, 'offsetHeight', { value: 100, writable: false })

    vi.spyOn(window, 'requestAnimationFrame')
      .mockImplementation((callback) => {
        callback(100)
        return 1
      })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  BddTest().when('the composable is initialized', () => {
    beforeEach(() => {
      result = mountComposable(() => useCollapsable()).result
    })

    BddTest().then('it should have default reactive states', () => {
      expect(result.collapse.value).toBeUndefined()
      expect(result.collapsing.value).toBe(false)
      expect(result.cssExpanded.value).toBe(false)
    })
  })

  BddTest().when('calling adjust', () => {
    beforeEach(() => {
      result = mountComposable(() => useCollapsable()).result
    })

    BddTest().and('collapse is undefined', () => {
      beforeEach(() => {
        result.collapse.value = undefined
      })

      BddTest().then('it should not throw', () => {
        expect(() => result.adjust()).not.toThrow()
      })
    })

    BddTest().and('collapse is exists', () => {
      beforeEach(() => {
        result.collapse.value = element
      })

      BddTest().then('it should update CSS variables', () => {
        result.adjust()

        expect(element.style.getPropertyValue('--collapser')).toBe('')
        expect(element.style.getPropertyValue('--collapse')).toBe('-100px')
      })
    })
  })

  BddTest().when('calling doExpand', () => {
    beforeEach(() => {
      vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
        callback(100)
        return 1
      })
      result = mountComposable(() => useCollapsable()).result
    })

    BddTest().and('with a true new value and collapse exists', () => {
      beforeEach(() => {
        result.collapse.value = element
        result.doExpand(true)
      })

      BddTest().then('it should set collapsing at true and cssExpanded at true', () => {
        expect(result.collapsing.value).toBe(true)
        expect(result.cssExpanded.value).toBe(true)
        expect(element.style.getPropertyValue('--collapse-max-height')).toBe('none')
        expect(element.style.getPropertyValue('--collapse')).toBe('-100px')
      })
    })

    BddTest().and('with a true new value and collapse is undefined', () => {
      beforeEach(() => {
        result.collapse.value = undefined
        result.doExpand(true)
      })

      BddTest().then('it should not crash if collapse is undefined', () => {
        expect(() => result.doExpand(true)).not.toThrow()
      })
    })

    BddTest().and('with a false new value and collapse exists', () => {
      beforeEach(async () => {
        result.collapse.value = element
        result.doExpand(false)
        await nextTick()
      })

      BddTest().then('it should collapse and set cssExpanded=false after RAFs', () => {
        expect(result.collapsing.value).toBe(true)
        expect(result.cssExpanded.value).toBe(false)
      })
    })
  })

  BddTest().when('calling onTransitionEnd', () => {
    beforeEach(() => {
      result = mountComposable(() => useCollapsable()).result
      result.collapsing.value = true
      result.collapse.value = element
      result.onTransitionEnd(true)
    })

    BddTest().then('it should reset collapsing to false', () => {
      expect(result.collapsing.value).toBe(false)
    })

    BddTest().and('autofocus is true', () => {
      let link: HTMLAnchorElement

      beforeEach(() => {
        link = document.createElement('a')
        vi.spyOn(link, 'focus')
        element.appendChild(link)
        result.collapse.value = element

        result.onTransitionEnd(true, true)
      })

      BddTest().then('it should focus first <a>', () => {
        expect(link.focus).toHaveBeenCalled()
      })
    })

    BddTest().and('autofocus is false', () => {
      let link: HTMLAnchorElement

      beforeEach(() => {
        link = document.createElement('a')
        vi.spyOn(link, 'focus')
        element.appendChild(link)
        result.collapse.value = element

        result.onTransitionEnd(true, false)
      })

      BddTest().then('it should not focus first <a>', () => {
        expect(link.focus).not.toHaveBeenCalled()
      })
    })

    BddTest().and('and it is collapsed', () => {
      beforeEach(() => {
        result.collapse.value = element
        element.style.setProperty('--collapse-max-height', 'none')

        result.onTransitionEnd(false)
      })

      BddTest().then('it should remove --collapse-max-height when collapsed', () => {
        expect(element.style.getPropertyValue('--collapse-max-height')).toBe('')
      })
    })
  })
})

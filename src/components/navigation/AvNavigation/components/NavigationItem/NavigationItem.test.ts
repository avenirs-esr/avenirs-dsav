import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect } from 'vitest'
import NavigationItem from '@/components/navigation/AvNavigation/components/NavigationItem/NavigationItem.vue'
import { BddTest } from '@/tests/utils'

BddTest().given('a navigation item', () => {
  let wrapper: VueWrapper<InstanceType<typeof NavigationItem>>

  BddTest().when('the component is mounted with default props', () => {
    beforeEach(() => {
      wrapper = mount(NavigationItem, {
        slots: { default: '<a href="#">Accueil</a>' }
      })
    })

    BddTest().then('it should render a list item element', () => {
      expect(wrapper.element.tagName).toBe('LI')
      expect(wrapper.classes()).toContain('av-nav__item')
    })

    BddTest().then('it should contain the default slot content', () => {
      expect(wrapper.html()).toContain('Accueil')
    })

    BddTest().then('it should automatically generate an ID', () => {
      const id = wrapper.attributes('id')
      expect(id).toMatch(/^nav-item-/)
    })

    BddTest().then('it should not have aria-current set by default', () => {
      expect(wrapper.attributes('aria-current')).toBeUndefined()
    })
  })

  BddTest().when('the active prop is true', () => {
    beforeEach(() => {
      wrapper = mount(NavigationItem, {
        props: { active: true },
        slots: { default: '<a href="#">Active</a>' }
      })
    })

    BddTest().then('it should set aria-current="page"', () => {
      expect(wrapper.attributes('aria-current')).toBe('page')
    })
  })

  BddTest().when('a custom id is provided', () => {
    beforeEach(() => {
      wrapper = mount(NavigationItem, {
        props: { id: 'custom-id' },
        slots: { default: '<a href="#">Link</a>' }
      })
    })

    BddTest().then('it should use the provided id', () => {
      expect(wrapper.attributes('id')).toBe('custom-id')
    })
  })
})

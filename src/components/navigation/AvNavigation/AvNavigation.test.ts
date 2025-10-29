import type { VueWrapper } from '@vue/test-utils'
import { beforeEach, expect, vi } from 'vitest'
import { registerNavigationLinkKey } from '@/components/header/AvHeader/injection-key'
import AvNavigation, { type AvNavigationProps } from '@/components/navigation/AvNavigation/AvNavigation.vue'
import { NavigationItemStub } from '@/components/navigation/AvNavigation/components/NavigationItem/NavigationItem.stub'
import { NavigationMenuStub } from '@/components/navigation/AvNavigation/components/NavigationMenu/NavigationMenu.stub'
import { NavigationMenuLinkStub } from '@/components/navigation/AvNavigation/components/NavigationMenuLink/NavigationMenuLink.stub'
import { BddTest, mountWithRouter } from '@/tests/utils'

let addSpy: ReturnType<typeof vi.spyOn>
let removeSpy: ReturnType<typeof vi.spyOn>

BddTest().given('an AvNavigation', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvNavigation>>

  const stubs = {
    NavigationItem: NavigationItemStub,
    NavigationMenuLink: NavigationMenuLinkStub,
    NavigationMenu: NavigationMenuStub
  }

  const props: AvNavigationProps = {
    navItems: [
      { text: 'Home', to: '/', id: 'home' },
      { text: 'Student', to: '/student', id: 'student' },
      { text: 'Teacher', to: '/teacher', id: 'teacher' },
      {
        title: 'Common',
        id: 'common',
        links: [
          { text: 'Life on campus', to: '/common/life-on-campus', id: 'life-on-campus' },
          { text: 'Library', to: '/common/library', id: 'library' },
        ]
      }
    ],
  }

  BddTest().when('the component is mounted', () => {
    beforeEach(async () => {
      vi.clearAllMocks()

      addSpy = vi.spyOn(document, 'addEventListener')
      removeSpy = vi.spyOn(document, 'removeEventListener')

      wrapper = await mountWithRouter(AvNavigation, {
        props,
        global: {
          provide: { [registerNavigationLinkKey]: vi.fn() },
          stubs
        }
      })
    })

    BddTest().then('it should render 4 navigation items', () => {
      expect(wrapper.findAllComponents({ name: 'NavigationItem' }).length).toBe(4)
    })

    BddTest().then('it should render 3 navigation links', () => {
      expect(wrapper.findAllComponents({ name: 'NavigationMenuLink' }).length).toBe(3)
    })

    BddTest().then('it should render 1 navigation menu', () => {
      expect(wrapper.findAllComponents({ name: 'NavigationMenu' }).length).toBe(1)
    })

    BddTest().then('it should add a click and a keydown event listeners', () => {
      expect(addSpy).toHaveBeenCalledWith('click', expect.any(Function))
      expect(addSpy).toHaveBeenCalledWith('keydown', expect.any(Function))
    })

    BddTest().and('when the component is unmounted', () => {
      beforeEach(async () => {
        wrapper.unmount()
      })

      BddTest().then('it should remove the click and the keydown event listeners', () => {
        expect(removeSpy).toHaveBeenCalledWith('click', expect.any(Function))
        expect(removeSpy).toHaveBeenCalledWith('keydown', expect.any(Function))
      })
    })
  })

  BddTest().when('a navigation link is clicked', () => {
    beforeEach(async () => {
      vi.clearAllMocks()

      wrapper = await mountWithRouter(AvNavigation, {
        props,
        global: {
          provide: { [registerNavigationLinkKey]: vi.fn() },
          stubs
        }
      })

      const link = wrapper.findComponent({ name: 'NavigationMenuLink' })
      await link.vm.$emit('toggleId', 'home')
    })

    BddTest().then('the navigation link should be active', () => {
      const link = wrapper.findComponent({ name: 'NavigationMenuLink' })
      expect(link.props('id')).toBe('home')
      expect(link.props('activeId')).toBe('home')
    })
  })

  BddTest().when('a navigation menu is expanded', () => {
    beforeEach(async () => {
      vi.clearAllMocks()

      wrapper = await mountWithRouter(AvNavigation, {
        props,
        global: {
          provide: { [registerNavigationLinkKey]: vi.fn() },
          stubs
        }
      })

      const menu = wrapper.findComponent({ name: 'NavigationMenu' })
      await menu.vm.$emit('toggleId', 'common')
    })

    BddTest().then('the navigation menu should be expanded', () => {
      const menu = wrapper.findComponent({ name: 'NavigationMenu' })
      expect(menu.props('id')).toBe('common')
      expect(menu.props('expandedId')).toBe('common')
    })

    BddTest().and('the user presses the Escape key', () => {
      beforeEach(async () => {
        const event = new KeyboardEvent('keydown', { key: 'Escape' })
        document.dispatchEvent(event)
        await wrapper.vm.$nextTick()
      })

      BddTest().then('the navigation menu should be collapsed', () => {
        const menu = wrapper.findComponent({ name: 'NavigationMenu' })
        expect(menu.props('id')).toBe('common')
        expect(menu.props('expandedId')).toBeUndefined()
      })
    })

    BddTest().and('the user clicks outside the navigation', () => {
      beforeEach(async () => {
        const event = new MouseEvent('click')
        document.dispatchEvent(event)
        await wrapper.vm.$nextTick()
      })

      BddTest().then('the navigation menu should be collapsed', () => {
        const menu = wrapper.findComponent({ name: 'NavigationMenu' })
        expect(menu.props('id')).toBe('common')
        expect(menu.props('expandedId')).toBeUndefined()
      })
    })
  })
})

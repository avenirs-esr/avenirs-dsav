import type { VueWrapper } from '@vue/test-utils'
import NavigationMenu, { type NavigationMenuProps } from '@/components/navigation/AvNavigation/components/NavigationMenu/NavigationMenu.vue'
import { NavigationMenuItemStub } from '@/components/navigation/AvNavigation/components/NavigationMenuItem/NavigationMenuItem.stub'
import { NavigationMenuLinkStub } from '@/components/navigation/AvNavigation/components/NavigationMenuLink/NavigationMenuLink.stub'
import { BddTest } from '@/tests'
import { mountWithRouter } from '@/tests/utils'

const doExpandSpy = vi.fn()
const onTransitionEndSpy = vi.fn()

vi.mock('@/composables/use-collapsable/use-collapsable', () => ({
  useCollapsable: () => ({
    collapse: ref(),
    collapsing: ref(false),
    cssExpanded: ref(false),
    doExpand: doExpandSpy,
    onTransitionEnd: onTransitionEndSpy,
  }),
}))

vi.mock('@/composables', () => ({
  useAvBreakpoints: () => ({ isBelowLg: false }),
}))

BddTest().given('a NavigationMenu', () => {
  let wrapper: VueWrapper<InstanceType<typeof NavigationMenu>>

  const props: NavigationMenuProps = {
    title: 'Common',
    id: 'common',
    links: [
      { text: 'Life on campus', to: '/common/life-on-campus', id: 'life-on-campus' },
      { text: 'Library', to: '/common/library', id: 'library' },
    ]
  }

  const stubs = {
    NavigationMenuItem: NavigationMenuItemStub,
    NavigationMenuLink: NavigationMenuLinkStub,
  }

  BddTest().when('the component is mounted', () => {
    beforeEach(async () => {
      vi.clearAllMocks()

      wrapper = await mountWithRouter(NavigationMenu, {
        props,
        global: { stubs }
      })
    })

    BddTest().then('it should render the menu button with the correct title', () => {
      const button = wrapper.find('.fr-nav__btn')
      expect(button.text()).toBe('Common')
    })

    BddTest().then('it should render 2 navigation menu items', () => {
      expect(wrapper.findAllComponents({ name: 'NavigationMenuItem' }).length).toBe(2)
    })

    BddTest().then('it should render 2 navigation menu links', () => {
      expect(wrapper.findAllComponents({ name: 'NavigationMenuLink' }).length).toBe(2)
    })

    BddTest().then('it should call doExpand', () => {
      expect(doExpandSpy).not.toHaveBeenCalled()
    })

    BddTest().and('expandedId is the same as id', () => {
      beforeEach(async () => {
        await wrapper.setProps({ expandedId: 'common' })
      })

      BddTest().then('it should call doExpand', () => {
        expect(doExpandSpy).toHaveBeenCalled()
      })
    })

    BddTest().and('a menu link emits toggleId', () => {
      beforeEach(async () => {
        const menuLink = wrapper.findComponent(NavigationMenuLinkStub)
        await menuLink.vm.$emit('toggleId', 'common')
      })

      BddTest().then('it should re-emit toggleId with expandedId', () => {
        const emits = wrapper.emitted('toggleId')
        expect(emits).toBeTruthy()
      })
    })
  })

  BddTest().and('given expandedId is the same as id', () => {
    beforeEach(async () => {
      vi.clearAllMocks()

      wrapper = await mountWithRouter(NavigationMenu, {
        props: { ...props, expandedId: 'common' },
        global: { stubs }
      })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should call doExpand', () => {
        expect(doExpandSpy).toHaveBeenCalled()
      })
    })
  })
})

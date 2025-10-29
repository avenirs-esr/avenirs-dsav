import { mount, RouterLinkStub, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect, vi } from 'vitest'
import { nextTick } from 'vue'
import NavigationMenuLink, { type NavigationMenuLinkProps } from '@/components/navigation/AvNavigation/components/NavigationMenuLink/NavigationMenuLink.vue'
import { BddTest } from '@/tests/utils'

vi.mock('@/composables', () => ({
  useAvBreakpoints: () => ({ isBelowLg: false }),
}))

BddTest().given('a navigation menu link', () => {
  let wrapper: VueWrapper<InstanceType<typeof NavigationMenuLink>>

  const stubs = { RouterLink: RouterLinkStub }
  const onClick = vi.fn()

  const internalLink: NavigationMenuLinkProps = {
    id: 'home-link',
    text: 'Home',
    to: '/',
    icon: undefined,
    onClick
  }
  const externalLink: NavigationMenuLinkProps = {
    id: 'external-link',
    text: 'External',
    to: 'https://example.com',
    icon: undefined,
    onClick
  }
  const linkWithIcon: NavigationMenuLinkProps = {
    text: 'Home',
    to: '/',
    icon: 'mdi:home',
    onClick
  }

  BddTest().when('the commponent is mounted with an internal link', () => {
    beforeEach(() => {
      vi.clearAllMocks()

      wrapper = mount(NavigationMenuLink, {
        props: internalLink,
        global: { stubs },
      })
    })

    BddTest().then('it should render a RouterLink', () => {
      const routerLink = wrapper.findComponent(RouterLinkStub)
      expect(routerLink.exists()).toBe(true)
      expect(routerLink.text()).toContain('Home')
    })

    BddTest().and('the link is clicked', () => {
      beforeEach(async () => {
        const routerLink = wrapper.getComponent(RouterLinkStub)
        await routerLink.trigger('click')
        await nextTick()
      })

      BddTest().then('it should call the onClick handler', () => {
        expect(onClick).toHaveBeenCalled()
      })

      BddTest().then('it should emit toggleId', () => {
        expect(wrapper.emitted('toggleId')?.[0][0]).toBe('home-link')
      })
    })
  })

  BddTest().when('the commponent is mounted with an external link', () => {
    beforeEach(() => {
      vi.clearAllMocks()

      wrapper = mount(NavigationMenuLink, {
        props: externalLink,
      })
    })

    BddTest().then('it should render an <a> with the href', () => {
      const externalLink = wrapper.get('[data-testid="nav-external-link"]')
      expect(externalLink.attributes('href')).toBe('https://example.com')
      expect(externalLink.text()).toBe('External')
    })

    BddTest().and('the link is clicked', () => {
      beforeEach(async () => {
        const externalLink = wrapper.get('[data-testid="nav-external-link"]')
        await externalLink.trigger('click')
        await nextTick()
      })

      BddTest().then('it should call the onClick handler', () => {
        expect(onClick).toHaveBeenCalled()
      })

      BddTest().then('it should emit toggleId', () => {
        expect(wrapper.emitted('toggleId')?.[0][0]).toBe('external-link')
      })
    })
  })

  BddTest().when('the commponent is mounted with a link with an icon', () => {
    beforeEach(() => {
      wrapper = mount(NavigationMenuLink, {
        props: linkWithIcon,
        global: { stubs },
      })
    })

    BddTest().then('it should render the icon', () => {
      const icon = wrapper.findComponent({ name: 'AvIcon' })
      expect(icon.exists()).toBe(true)
      expect(icon.props('name')).toBe('mdi:home')
    })
  })
})

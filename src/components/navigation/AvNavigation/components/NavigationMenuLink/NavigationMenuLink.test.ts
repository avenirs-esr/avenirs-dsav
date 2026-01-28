import { RouterLinkStub, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect, vi } from 'vitest'
import { nextTick } from 'vue'
import { registerNavigationLinkKey } from '@/components/header/AvHeader/injection-key'
import NavigationMenuLink, { type NavigationMenuLinkProps } from '@/components/navigation/AvNavigation/components/NavigationMenuLink/NavigationMenuLink.vue'
import { BddTest, mountWithRouter } from '@/tests/utils'

BddTest().given('a navigation menu link', () => {
  let wrapper: VueWrapper<InstanceType<typeof NavigationMenuLink>>

  const onClick = vi.fn()
  const mockCloseModal = vi.fn()

  const provide = {
    [registerNavigationLinkKey as symbol]: () => mockCloseModal,
  }

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
    icon: 'mdi:home-variant-outline',
    onClick
  }

  BddTest().when('the commponent is mounted with an internal link', () => {
    beforeEach(async () => {
      vi.clearAllMocks()

      wrapper = await mountWithRouter(NavigationMenuLink, {
        props: internalLink,
        global: { provide }
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
    beforeEach(async () => {
      vi.clearAllMocks()

      wrapper = await mountWithRouter(NavigationMenuLink, {
        props: externalLink,
        global: { provide }
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
        externalLink.element.addEventListener('click', e => e.preventDefault())
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
    beforeEach(async () => {
      wrapper = await mountWithRouter(NavigationMenuLink, {
        props: linkWithIcon,
        global: { provide }
      })
    })

    BddTest().then('it should render the icon', () => {
      const icon = wrapper.findComponent({ name: 'AvIcon' })
      expect(icon.exists()).toBe(true)
      expect(icon.props('name')).toBe('mdi:home-variant-outline')
    })
  })
})

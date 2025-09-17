import type { VueWrapper } from '@vue/test-utils'
import { registerNavigationLinkKey } from '@gouvminint/vue-dsfr'
import { beforeEach, expect, vi } from 'vitest'
import AvNavigation from '@/components/navigation/AvNavigation/AvNavigation.vue'
import { DsfrNavigationStub } from '@/tests/stubs'
import { BddTest, mountWithRouter } from '@/tests/utils'

BddTest().given('an AvNavigation', () => {
  let wrapper: VueWrapper

  const props = {
    navItems: [
      { to: '/student', text: 'Home student' },
      { to: '/teacher', text: 'Home teacher' },
    ],
  }

  const stubs = { DsfrNavigation: DsfrNavigationStub }

  BddTest().when('the component is mounted', () => {
    beforeEach(async () => {
      vi.clearAllMocks()

      wrapper = await mountWithRouter(AvNavigation, {
        props,
        global: {
          provide: { [registerNavigationLinkKey]: vi.fn() },
          stubs
        }
      })
    })

    BddTest().then('it should render and pass props to DsfrNavigation', async () => {
      const navWrapper = wrapper.find('.my-nav-wrapper')
      expect(navWrapper.exists()).toBe(true)

      const dsfrNav = wrapper.findComponent({ name: 'DsfrNavigation' })
      expect(wrapper.find('.dsfr-navigation-mock').exists()).toBe(true)
      expect(dsfrNav.exists()).toBe(true)

      expect(dsfrNav.props('navItems')).toEqual(props.navItems)
    })
  })
})

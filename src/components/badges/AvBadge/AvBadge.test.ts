import { mount, type VueWrapper } from '@vue/test-utils'
import AvBadge, { type AvBadgeProps } from '@/components/badges/AvBadge/AvBadge.vue'
import { BddTest } from '@/tests/utils'
import { ICONS_DATA_URL } from '@/tokens'

BddTest().given('an AvBadge', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvBadge>>

  const props: AvBadgeProps = {
    color: 'var(--color)',
    backgroundColor: 'var(--background-color)',
    label: 'MyBadge'
  }

  BddTest().when('the component is mounted', () => {
    beforeEach(() => {
      wrapper = mount(AvBadge, { props })
    })

    BddTest().then('it should render with given properties', () => {
      const badge = wrapper.find('.av-badge')
      expect(badge.classes()).toContain('fr-badge--info')
      expect(badge.text()).toBe(props.label)
      expect(badge.classes()).not.toContain('av-badge--customIcon')
      expect(badge.classes()).not.toContain('fr-badge--no-icon')
      expect(badge.classes()).not.toContain('fr-badge--sm')
    })

    BddTest().and('given iconDataUrl prop', () => {
      const newProps: AvBadgeProps = { ...props, iconDataUrl: ICONS_DATA_URL.MDI_CHECK_CIRCLE }

      beforeEach(() => {
        wrapper = mount(AvBadge, { props: newProps })
      })

      BddTest().then('it should add custom icon class', () => {
        const badge = wrapper.find('.av-badge')
        expect(badge.classes()).toContain('av-badge--custom-icon')
      })
    })

    BddTest().and('given another type', () => {
      const newProps: AvBadgeProps = { ...props, type: 'error' }

      beforeEach(() => {
        wrapper = mount(AvBadge, { props: newProps })
      })

      BddTest().then('it should update type class', () => {
        const badge = wrapper.find('.av-badge')
        expect(badge.classes()).toContain('fr-badge--error')
      })
    })

    BddTest().and('given small prop', () => {
      const newProps: AvBadgeProps = { ...props, small: true }

      beforeEach(() => {
        wrapper = mount(AvBadge, { props: newProps })
      })

      BddTest().then('it should add small class', () => {
        const badge = wrapper.find('.av-badge')
        expect(badge.classes()).toContain('fr-badge--sm')
      })
    })

    BddTest().and('given no icon prop', () => {
      const newProps: AvBadgeProps = { ...props, noIcon: true }

      beforeEach(() => {
        wrapper = mount(AvBadge, { props: newProps })
      })

      BddTest().then('it should add no icon class', () => {
        const badge = wrapper.find('.av-badge')
        expect(badge.classes()).toContain('fr-badge--no-icon')
      })
    })

    BddTest().and('given ellipsis prop', () => {
      const newProps: AvBadgeProps = { ...props, ellipsis: true }

      beforeEach(() => {
        wrapper = mount(AvBadge, { props: newProps })
      })

      BddTest().then('it should add an ellipsis class', () => {
        const badge = wrapper.find('.av-badge')
        expect(badge.find('.fr-ellipsis').exists()).toBe(true)
      })
    })
  })
})

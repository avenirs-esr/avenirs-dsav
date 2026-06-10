import { mount, type VueWrapper } from '@vue/test-utils'
import AvBadge, { type AvBadgeProps } from '@/components/badges/AvBadge/AvBadge.vue'
import { AvTooltipStub } from '@/tests'
import { BddTest } from '@/tests/utils'
import { ICONS_DATA_URL, MDI_ICONS } from '@/tokens'

BddTest().given('an AvBadge', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvBadge>>

  const props: AvBadgeProps = {
    color: 'var(--color)',
    backgroundColor: 'var(--background-color)',
    label: 'MyBadge'
  }

  const stubs = { AvTooltip: AvTooltipStub }

  BddTest().when('the component is mounted', () => {
    beforeEach(() => {
      wrapper = mount(AvBadge, { props, global: { stubs } })
    })

    BddTest().then('it should render with given properties', () => {
      const badge = wrapper.find('.av-badge')
      expect(badge.text()).toBe(props.label)
      expect(badge.classes()).not.toContain('av-badge--custom-icon')
      expect(badge.classes()).toContain('av-badge--no-icon')
      expect(badge.classes()).not.toContain('av-badge--sm')
    })

    BddTest().and('given icon prop with base64', () => {
      const newProps: AvBadgeProps = { ...props, icon: ICONS_DATA_URL.MDI_CHECK_CIRCLE }

      beforeEach(() => {
        wrapper = mount(AvBadge, { props: newProps, global: { stubs } })
      })

      BddTest().then('it should add custom icon class', () => {
        const badge = wrapper.find('.av-badge')
        expect(badge.classes()).toContain('av-badge--custom-icon')
      })
    })

    BddTest().and('given icon prop with MDI_ICON', () => {
      const newProps: AvBadgeProps = { ...props, icon: MDI_ICONS.STAR }

      beforeEach(() => {
        wrapper = mount(AvBadge, { props: newProps, global: { stubs } })
      })

      BddTest().then('it should add custom icon class', () => {
        const badge = wrapper.find('.av-badge')
        expect(badge.classes()).toContain('av-badge--custom-icon')
      })
    })

    BddTest().and('given small prop', () => {
      const newProps: AvBadgeProps = { ...props, small: true }

      beforeEach(() => {
        wrapper = mount(AvBadge, { props: newProps, global: { stubs } })
      })

      BddTest().then('it should add small class', () => {
        const badge = wrapper.find('.av-badge')
        expect(badge.classes()).toContain('av-badge--sm')
      })
    })

    BddTest().and('given ellipsis prop', () => {
      const newProps: AvBadgeProps = { ...props, ellipsis: true }

      beforeEach(() => {
        wrapper = mount(AvBadge, { props: newProps, global: { stubs } })
      })

      BddTest().then('it should add an ellipsis class', () => {
        const badge = wrapper.find('.av-badge')
        expect(badge.find('.av-max-lines').exists()).toBe(true)
      })
    })
  })
})

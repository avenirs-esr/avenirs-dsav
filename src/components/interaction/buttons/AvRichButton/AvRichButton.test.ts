import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect } from 'vitest'
import { AvIconStub } from '@/components/base/AvIcon/AvIcon.stub'
import AvRichButton from '@/components/interaction/buttons/AvRichButton/AvRichButton.vue'
import { BddTest } from '@/tests/utils'

BddTest().given('an AvRichButton', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvRichButton>>

  const props = { label: 'test' }

  const stubs = { AvIcon: AvIconStub }

  BddTest().when('mounted with default props', () => {
    beforeEach(() => {
      wrapper = mount(AvRichButton, { props, global: { stubs } })
    })

    BddTest().then('it should render an empty button', () => {
      expect(wrapper.findAllComponents({ name: 'AvIcon' })).toHaveLength(0)
    })

    BddTest().and('the button is clicked', () => {
      beforeEach(async () => {
        await wrapper.find('button').trigger('click')
      })

      BddTest().then('it should emit a click event', () => {
        expect(wrapper.emitted('click')).toBeTruthy()
      })
    })
  })

  BddTest().when('mounted with a default slot', () => {
    beforeEach(() => {
      wrapper = mount(AvRichButton, {
        props,
        slots: { default: 'Click me' },
        global: { stubs }
      })
    })

    BddTest().then('it should render the default slot', () => {
      expect(wrapper.text()).toContain('Click me')
    })
  })

  BddTest().when('mounted with a left icon', () => {
    const customProps = {
      ...props,
      iconLeft: 'mdi:home-variant-outline'
    }

    beforeEach(() => {
      wrapper = mount(AvRichButton, { props: customProps, global: { stubs } })
    })

    BddTest().then('it should render the left icon', () => {
      const leftContainer = wrapper.find('.av-rich-button__left')
      const leftIcon = leftContainer.findComponent({ name: 'AvIcon' })
      expect(leftIcon.exists()).toBe(true)
      expect(leftIcon.props('name')).toBe(customProps.iconLeft)
    })
  })

  BddTest().when('mounted with right icon', () => {
    const customProps = {
      ...props,
      iconRight: 'mdi:home-variant-outline'
    }

    beforeEach(() => {
      wrapper = mount(AvRichButton, { props: customProps, global: { stubs } })
    })

    BddTest().then('it should render the left icon', () => {
      const leftContainer = wrapper.find('.av-rich-button__left')
      const leftIcon = leftContainer.findComponent({ name: 'AvIcon' })
      expect(leftIcon.exists()).toBe(false)
      const rightIcon = wrapper.findComponent({ name: 'AvIcon' })
      expect(rightIcon.props('name')).toBe(customProps.iconRight)
    })
  })
})

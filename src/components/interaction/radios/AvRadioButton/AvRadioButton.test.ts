import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect } from 'vitest'
import AvRadioButton, { type AvRadioButtonProps } from '@/components/interaction/radios/AvRadioButton/AvRadioButton.vue'
import { AvTooltipStub } from '@/components/overlay/tooltips/AvTooltip/AvTooltip.stub'
import { BddTest } from '@/tests/utils'

BddTest().given('a radio button with required props', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvRadioButton>>

  const slots = {
    default: '<div class="slot-content">Slot Content</div>',
  }

  beforeEach(() => {
    wrapper = mount(AvRadioButton, {
      props: {
        value: 'Test',
      },
      slots,
      global: { stubs: { AvTooltip: AvTooltipStub } },
    })
  })

  BddTest().when('the radio button is mounted', () => {
    BddTest().then('it should render the slot content', () => {
      expect(wrapper.find('.slot-content').exists()).toBe(true)
      expect(wrapper.find('.slot-content').text()).toBe('Slot Content')
    })
  })

  BddTest().and('with optional icon prop', () => {
    let wrapper: VueWrapper
    const props: AvRadioButtonProps = {
      value: 'Test value',
      label: 'Test label',
      description: 'Test description',
      disabled: false,
    }

    beforeEach(() => {
      wrapper = mount(AvRadioButton, {
        props,
        slots,
        global: { stubs: { AvTooltip: AvTooltipStub } },
      })
    })

    BddTest().when('the radio button is mounted', () => {
      BddTest().then('it should accept the props without error', () => {
        expect(wrapper.props()).toMatchObject(props)
      })
    })
  })

  BddTest().and('disabled with a tooltip message', () => {
    beforeEach(() => {
      wrapper = mount(AvRadioButton, {
        props: { value: 'Test', disabled: true, disabledTooltip: 'Choice unavailable' },
        slots,
        global: { stubs: { AvTooltip: AvTooltipStub } },
      })
    })

    BddTest().when('the radio button is mounted', () => {
      BddTest().then('it should enable AvTooltip with the disabled message', () => {
        const tooltip = wrapper.findComponent(AvTooltipStub)
        expect(tooltip.props('content')).toBe('Choice unavailable')
        expect(tooltip.props('disabled')).toBe(false)
        expect(tooltip.props('forceFocusable')).toBe(true)
      })
    })
  })
})

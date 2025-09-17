import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect } from 'vitest'
import AvAccordion from '@/components/interaction/accordions/AvAccordion/AvAccordion.vue'
import { BddTest } from '@/tests/utils'

BddTest().given('an AvAccordion', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvAccordion>>

  const slots = {
    default: '<div class="slot-content">Slot Content</div>',
  }

  BddTest().and('with required props', () => {
    beforeEach(() => {
      wrapper = mount(AvAccordion, {
        props: {
          title: 'Test Title',
        },
        slots,
      })
    })

    BddTest().when('the accordion is mounted', () => {
      BddTest().then('it should render the slot content', () => {
        expect(wrapper.find('.slot-content').exists()).toBe(true)
        expect(wrapper.find('.slot-content').text()).toBe('Slot Content')
      })
    })
  })

  BddTest().and('with optional icon prop', () => {
    const props = {
      title: 'Test Title',
      icon: 'test-icon',
    }

    beforeEach(() => {
      wrapper = mount(AvAccordion, {
        props,
        slots,
      })
    })

    BddTest().when('the accordion is mounted', () => {
      BddTest().then('it should accept the icon prop without error', () => {
        expect(wrapper.props()).toMatchObject(props)
      })
    })
  })
})

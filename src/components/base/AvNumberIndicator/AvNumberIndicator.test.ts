import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import AvNumberIndicator from '@/components/base/AvNumberIndicator/AvNumberIndicator.vue'
import { BddTest } from '@/tests/utils'

BddTest().given('an AvNumberIndicator component', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvNumberIndicator>>

  BddTest().when('it is mounted without a value', () => {
    beforeEach(() => {
      wrapper = mount(AvNumberIndicator)
    })

    BddTest().then('it should render the container without the indicator', () => {
      expect(wrapper.find('[data-testid="av-number-indicator"]').exists()).toBe(true)
      expect(wrapper.find('.av-number-indicator').exists()).toBe(false)
    })
  })

  BddTest().when('it is mounted with a valid value', () => {
    const validValues = [0, 1, 42, 999]

    BddTest().then('it should display the value', () => {
      for (const value of validValues) {
        wrapper = mount(AvNumberIndicator, {
          props: { value },
        })

        const indicator = wrapper.find('.av-number-indicator')

        expect(indicator.exists()).toBe(true)
        expect(indicator.text()).toBe(String(value))
      }
    })
  })

  BddTest().when('it is mounted with an invalid value', () => {
    const invalidValues = [
      -1,
      1.5,
      -0.5,
      Number.NaN,
      Number.POSITIVE_INFINITY,
      Number.NEGATIVE_INFINITY,
    ]

    BddTest().then('it should not display the indicator', () => {
      for (const value of invalidValues) {
        wrapper = mount(AvNumberIndicator, {
          props: { value },
        })

        expect(wrapper.find('.av-number-indicator').exists()).toBe(false)
      }
    })
  })

  BddTest().when('it is mounted with additional attributes', () => {
    beforeEach(() => {
      wrapper = mount(AvNumberIndicator, {
        props: { value: 42 },
        attrs: {
          'id': 'test-indicator',
          'aria-label': '42 notifications',
          'class': 'custom-class',
        },
      })
    })

    BddTest().then('it should forward attributes to the indicator', () => {
      const indicator = wrapper.find('.av-number-indicator')

      expect(indicator.attributes('id')).toBe('test-indicator')
      expect(indicator.attributes('aria-label')).toBe('42 notifications')
      expect(indicator.classes()).toContain('custom-class')
    })

    BddTest().then('it should not forward attributes to the container', () => {
      const container = wrapper.find('[data-testid="av-number-indicator"]')

      expect(container.attributes('id')).toBeUndefined()
      expect(container.attributes('aria-label')).toBeUndefined()
      expect(container.classes()).not.toContain('custom-class')
    })
  })

  BddTest().when('it is mounted with additional attributes but an invalid value', () => {
    beforeEach(() => {
      wrapper = mount(AvNumberIndicator, {
        props: { value: -1 },
        attrs: {
          id: 'test-indicator',
          class: 'custom-class',
        },
      })
    })

    BddTest().then('it should not forward attributes to the container', () => {
      const container = wrapper.find('[data-testid="av-number-indicator"]')

      expect(container.attributes('id')).toBeUndefined()
      expect(container.classes()).not.toContain('custom-class')
    })
  })
})

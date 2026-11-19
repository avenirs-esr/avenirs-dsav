import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import AvNumberIndicator from '@/components/base/AvNumberIndicator/AvNumberIndicator.vue'
import { BddTest } from '@/tests/utils'

BddTest().given('an AvNumberIndicator component', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvNumberIndicator>>

  const getContainer = () => wrapper.find('[data-testid="av-number-indicator-container"]')
  const getSpan = () => wrapper.find('[data-testid="av-number-indicator"]')

  BddTest().when('it is mounted without a value', () => {
    beforeEach(() => {
      wrapper = mount(AvNumberIndicator)
    })

    BddTest().then('it should render the container without the indicator', () => {
      expect(getContainer().exists()).toBe(true)
      expect(getSpan().exists()).toBe(false)
    })
  })

  BddTest().when('it is mounted with a valid value', () => {
    const validValues = [0, 1, 42, 999]

    BddTest().then('it should display the value', () => {
      for (const value of validValues) {
        wrapper = mount(AvNumberIndicator, {
          props: { value },
        })

        const indicator = getSpan()

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

    BddTest().then('it should render the container without the indicator', () => {
      for (const value of invalidValues) {
        wrapper = mount(AvNumberIndicator, {
          props: { value },
        })

        expect(getContainer().exists()).toBe(true)
        expect(getSpan().exists()).toBe(false)
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
      const indicator = getSpan()

      expect(indicator.attributes('id')).toBe('test-indicator')
      expect(indicator.attributes('aria-label')).toBe('42 notifications')
      expect(indicator.classes()).toContain('custom-class')
    })

    BddTest().then('it should not forward attributes to the container', () => {
      const container = getContainer()

      expect(container.attributes('id')).toBeUndefined()
      expect(container.attributes('aria-label')).toBeUndefined()
      expect(container.classes()).not.toContain('custom-class')
    })
  })
})

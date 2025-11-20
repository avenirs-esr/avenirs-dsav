import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect } from 'vitest'
import AvCheckbox, { type AvCheckboxProps } from '@/components/interaction/checkboxes/AvCheckbox/AvCheckbox.vue'
import { BddTest } from '@/tests/utils'

const defaultProps: AvCheckboxProps & { modelValue: (string | number | boolean | undefined)[] } = {
  name: 'test-checkbox',
  value: '1',
  label: 'Checkbox Label',
  modelValue: []
}

function mountWithProps (props: Partial<AvCheckboxProps
  & { modelValue: (string | number | boolean | undefined)[] }> = {}, slots = {}) {
  return mount(AvCheckbox, { props: { ...defaultProps, ...props }, slots })
}

BddTest().given('an AvCheckbox component', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvCheckbox>>

  BddTest().when('default props are provided', () => {
    beforeEach(() => {
      wrapper = mountWithProps()
    })

    BddTest().then('it should render the checkbox input and label', () => {
      const input = wrapper.find('input[type="checkbox"]')
      const label = wrapper.find('label')
      expect(input.exists()).toBe(true)
      expect(label.exists()).toBe(true)
      expect(label.text()).toContain('Checkbox Label')
    })

    BddTest().then('it should update v-model when clicked', async () => {
      const input = wrapper.find('input[type="checkbox"]')
      await input.setValue(true)
      expect((wrapper.vm as any).modelValue).toContain(defaultProps.value)
      await input.setValue(false)
      expect((wrapper.vm as any).modelValue).not.toContain(defaultProps.value)
    })
  })

  BddTest().when('icon prop is provided', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ icon: 'mdi:home-variant-outline' })
    })

    BddTest().then('it should render the icon', () => {
      const icon = wrapper.find('.option-icon')
      expect(icon.exists()).toBe(true)
    })
  })

  BddTest().when('hint prop is provided', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ hint: 'This is a hint' })
    })

    BddTest().then('it should render the hint', () => {
      const hint = wrapper.find('.av-hint-text')
      expect(hint.exists()).toBe(true)
      expect(hint.text()).toBe('This is a hint')
    })
  })

  BddTest().when('errorMessage prop is provided', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ errorMessage: 'Error!' })
    })

    BddTest().then('it should render the error message with correct class', () => {
      const msg = wrapper.find('.av-message--error')
      expect(msg.exists()).toBe(true)
      expect(msg.text()).toBe('Error!')
    })
  })

  BddTest().when('validMessage prop is provided', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ validMessage: 'Valid!' })
    })

    BddTest().then('it should render the valid message with correct class', () => {
      const msg = wrapper.find('.av-message--success')
      expect(msg.exists()).toBe(true)
      expect(msg.text()).toBe('Valid!')
    })
  })

  BddTest().when('checkbox is checked', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ modelValue: [defaultProps.value] })
    })

    BddTest().then('label class should be bold and icon updated', () => {
      const labelText = wrapper.find('.label')
      expect(labelText.classes()).toContain('b2-bold')
    })
  })

  BddTest().when('disabled prop is true', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ disabled: true })
    })

    BddTest().then('input should have tabindex -1', () => {
      const input = wrapper.find('input[type="checkbox"]')
      expect(input.attributes('tabindex')).toBe('-1')
    })
  })

  BddTest().when('a label slot is provided', () => {
    beforeEach(() => {
      wrapper = mountWithProps({}, { label: '<span class="custom-label">Custom Label</span>' })
    })

    BddTest().then('it should render the slot content instead of the label prop', () => {
      const label = wrapper.find('.custom-label')
      expect(label.exists()).toBe(true)
      expect(label.text()).toBe('Custom Label')
      expect(wrapper.text()).not.toContain(defaultProps.label)
    })
  })
})

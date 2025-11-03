import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect } from 'vitest'
import { h } from 'vue'
import AvRadioButton from '@/components/interaction/radios/AvRadioButton/AvRadioButton.vue'
import AvRadioButtonSet, { type AvRadioButtonSetProps } from '@/components/interaction/radios/AvRadioButtonSet/AvRadioButtonSet.vue'
import { BddTest } from '@/tests/utils'

BddTest().given('an AvRadioButtonSet component', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvRadioButtonSet>>

  const props: AvRadioButtonSetProps = {
    name: 'test-radio-set',
    modelValue: 'Radio 1'
  }

  const slots = {
    default: () => [
      h(AvRadioButton, { value: 'Radio 1' }, () => 'Choice 1'),
      h(AvRadioButton, { value: 'Radio 2' }, () => 'Choice 2'),
      h(AvRadioButton, { value: 'Radio 3' }, () => 'Choice 3'),
    ]
  }

  BddTest().and('provided with multiple radio buttons', () => {
    beforeEach(() => {
      wrapper = mount(AvRadioButtonSet, { props, slots })
    })

    BddTest().when('the radio button set is mounted', () => {
      BddTest().then('it should render all radio buttons', () => {
        const radios = wrapper.findAll('input[type="radio"]')
        expect(radios.length).toBe(3)
        expect((radios[0].element as HTMLInputElement).checked).toBe(true)
        expect((radios[1].element as HTMLInputElement).checked).toBe(false)
      })
    })

    BddTest().when('a radio button is clicked', () => {
      beforeEach(async () => {
        const radios = wrapper.findAll('input[type="radio"]')
        await radios[1].trigger('click')
      })

      BddTest().then('it should emit update:modelValue', () => {
        expect(wrapper.emitted('update:modelValue')).toBeTruthy()
        expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['Radio 2'])
        expect(wrapper.vm.selected).toBe('Radio 2')
      })
    })

    BddTest().when('the modelValue prop changes from the parent', () => {
      BddTest().then('it should update the selected radio button accordingly', async () => {
        await wrapper.setProps({ modelValue: 'Radio 3' })
        expect(wrapper.vm.selected).toBe('Radio 3')

        const radios = wrapper.findAll('input[type="radio"]')
        expect((radios[2].element as HTMLInputElement).checked).toBe(true)
      })
    })

    BddTest().when('an errorMessage is provided', () => {
      BddTest().then('it should render the error message with the correct class', async () => {
        await wrapper.setProps({ errorMessage: 'Error message' })
        const msg = wrapper.find('.av-message--error')
        expect(msg.exists()).toBe(true)
        expect(msg.text()).toBe('Error message')
      })
    })

    BddTest().when('a validMessage is provided', () => {
      BddTest().then('it should render the valid message with the correct class', async () => {
        await wrapper.setProps({ validMessage: 'Valid message' })
        const msg = wrapper.find('.av-message--success')
        expect(msg.exists()).toBe(true)
        expect(msg.text()).toBe('Valid message')
      })
    })
  })

  BddTest().and('mounted with no slot provided', () => {
    beforeEach(() => {
      wrapper = mount(AvRadioButtonSet, { props })
    })

    BddTest().when('it is mounted', () => {
      BddTest().then('it should not render any radio button', () => {
        const radios = wrapper.findAllComponents(AvRadioButton)
        expect(radios.length).toBe(0)
      })
    })
  })
})

import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect } from 'vitest'
import AvStepper, { type AvStepperProps } from '@/components/navigation/AvStepper/AvStepper.vue'
import { BddTest } from '@/tests/utils'

BddTest().given('an AvStepper component', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvStepper>>

  const props: AvStepperProps = {
    steps: ['Step 1', 'Step 2', 'Step 3'],
    currentStep: 0
  }

  BddTest().when('mounted with given props', () => {
    beforeEach(() => {
      wrapper = mount(AvStepper, { props })
    })

    BddTest().then('it should render the right steps', () => {
      const steps = wrapper.findAll('.step')
      expect(steps).toHaveLength(props.steps.length)
      expect(steps[0].text()).toBe('1')
      expect(steps[1].text()).toBe('2')
      expect(steps[2].text()).toBe('3')
    })

    BddTest().then('it should render the right step labels', () => {
      const labels = wrapper.findAll('.label')
      expect(labels).toHaveLength(props.steps.length)
      expect(labels[0].text()).toBe(props.steps[0])
      expect(labels[1].text()).toBe(props.steps[1])
      expect(labels[2].text()).toBe(props.steps[2])
    })

    BddTest().then('it should render the amount of separators', () => {
      const separators = wrapper.findAll('.separator')
      expect(separators).toHaveLength(props.steps.length - 1)
    })

    BddTest().then('it should render the current step', () => {
      const steps = wrapper.findAll('.step')
      expect(steps[0].classes()).toContain('step--active')
      expect(steps[0].attributes('aria-current')).toBe('step')
      expect(steps[1].classes()).not.toContain('step--active')
      expect(steps[1].attributes('aria-current')).not.toBe('step')
      expect(steps[2].classes()).not.toContain('step--active')
      expect(steps[2].attributes('aria-current')).not.toBe('step')
    })

    BddTest().then('it should render the updated current step', async () => {
      let steps = wrapper.findAll('.step')
      expect(steps[0].classes()).toContain('step--active')
      expect(steps[0].attributes('aria-current')).toBe('step')
      expect(steps[1].classes()).not.toContain('step--active')
      expect(steps[1].attributes('aria-current')).not.toBe('step')
      expect(steps[2].classes()).not.toContain('step--active')
      expect(steps[2].attributes('aria-current')).not.toBe('step')

      await wrapper.setProps({ currentStep: props.currentStep + 1 })

      steps = wrapper.findAll('.step')
      expect(steps[0].classes()).toContain('step--active')
      expect(steps[0].attributes('aria-current')).not.toBe('step')
      expect(steps[1].classes()).toContain('step--active')
      expect(steps[1].attributes('aria-current')).toBe('step')
      expect(steps[2].classes()).not.toContain('step--active')
      expect(steps[2].attributes('aria-current')).not.toBe('step')
    })
  })
})

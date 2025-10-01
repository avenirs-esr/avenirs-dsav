import type { Meta, StoryFn } from '@storybook/vue3'
import AvStepper, { type AvStepperProps } from './AvStepper.vue'

/**
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvStepper</code> component is a visual guide to show the user their progress through a series of steps.
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <p><span class="b2-regular">The stepper displays:</span></p>
 * <ul>
 *   <li><span class="b2-regular">all steps titles</span></li>
 *   <li><span class="b2-regular">a progress status showing the current step and the total number of steps</span></li>
 *   <li><span class="b2-regular">a stylized progress bar</span></li>
 * </ul>
 */

const meta: Meta<typeof AvStepper> = {
  title: 'Components/Navigation/AvStepper',
  component: AvStepper,
  tags: ['autodocs'],
  argTypes: {
    steps: {
      control: { type: 'object', required: true }
    },
    currentStep: {
      control: { type: 'number', required: true }
    },
    width: { control: 'text' }
  },
  args: {
    steps: ['Step 1: Init', 'Step 2: Develop a feature', 'Step 3: Deploy'],
    currentStep: 0
  }
}

export default meta

const Template: StoryFn<AvStepperProps> = args => ({
  components: { AvStepper },
  setup () {
    return { args }
  },
  template: `<AvStepper v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {}

export const CustomWidth = Template.bind({})
CustomWidth.args = {
  width: '40rem'
}

export const WithStepTwoActive = Template.bind({})
WithStepTwoActive.args = {
  currentStep: 1
}

export const WithAllStepsActive = Template.bind({})
WithAllStepsActive.args = {
  currentStep: 2
}

export const WithTwoSteps = Template.bind({})
WithTwoSteps.args = {
  steps: ['Step 1', 'Step 2']
}

export const WithFourSteps = Template.bind({})
WithFourSteps.args = {
  steps: [
    'Step 1: Clone the repository',
    'Step 2: Create a branch from develop',
    'Step 3: Develop the feature',
    'Step 4: Create a PR and merge when approved'
  ]
}

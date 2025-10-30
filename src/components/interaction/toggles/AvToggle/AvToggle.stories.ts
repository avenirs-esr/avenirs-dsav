import type { Meta, StoryFn } from '@storybook/vue3'
import AvToggle, { type AvToggleProps } from '@/components/interaction/toggles/AvToggle/AvToggle.vue'

/**
 * <h1 class="n1">Toggles - <code>AvToggle</code></h1>
 *
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvToggle</code> is a versatile Vue component, designed to allow the user to choose between two opposite states
 *     (<em>active</em> / <em>inactive</em>).
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <p><span class="b2-regular">None.</span></p>
 */
const meta: Meta<AvToggleProps> = {
  title: 'Components/Interaction/Toggles/AvToggle',
  component: AvToggle,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'boolean' },
    description: { control: 'text', type: { name: 'string', required: true } },
    disabled: { control: 'boolean' },
    activeText: { control: 'text' },
    inactiveText: { control: 'text' },
    name: { control: 'text' },
  },
  args: {
    modelValue: false,
    description: 'Some description',
    disabled: false,
    activeText: 'On',
    inactiveText: 'Off',
    name: undefined
  },
}

export default meta

const Template: StoryFn<AvToggleProps> = args => ({
  components: { AvToggle },
  setup () {
    return { args }
  },
  template: `<AvToggle v-bind="args" v-model="args.modelValue" />`,
})

export const Default = Template.bind({})
Default.args = {}

export const InitActive = Template.bind({})
InitActive.args = {
  modelValue: true
}

const WidthRestrictTemplate: StoryFn<AvToggleProps> = args => ({
  components: { AvToggle },
  setup () {
    return { args }
  },
  template: `<div :style="{width: '100px'}"><AvToggle v-bind="args" v-model="args.modelValue" /></div>`,
})

export const WidthRestrict = WidthRestrictTemplate.bind({})
WidthRestrict.args = {
  description: 'A long description to see how this works'
}

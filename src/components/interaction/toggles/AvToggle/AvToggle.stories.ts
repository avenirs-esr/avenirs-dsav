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
 * <p>
 *   <span class="b2-regular">
 *     It can display a description and a tooltip (with a dedicated one when the toggle is disabled). The text displayed next to the
 *     switch (<code>On</code> / <code>Off</code> by default) can be customized with the <code>default</code> slot.
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
    id: { control: 'text' },
    name: { control: 'text' },
    description: { control: 'text' },
    tooltip: { control: 'text' },
    disabled: { control: 'boolean' },
    disabledTooltip: { control: 'text' },
  },
  args: {
    modelValue: false,
    description: 'Some description',
    disabled: false,
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
  modelValue: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}

export const DisabledActive = Template.bind({})
DisabledActive.args = {
  modelValue: true,
  disabled: true,
}

export const WithTooltip = Template.bind({})
WithTooltip.args = {
  tooltip: 'Enable or disable the feature',
}

/**
 * When `disabledTooltip` is `true`, the `tooltip` is also displayed while the toggle is disabled.
 */
export const DisabledWithSameTooltip = Template.bind({})
DisabledWithSameTooltip.args = {
  disabled: true,
  tooltip: 'This feature cannot be changed',
  disabledTooltip: true,
}

/**
 * A dedicated tooltip can be displayed while the toggle is disabled (the regular `tooltip` is then hidden).
 */
export const DisabledWithCustomTooltip = Template.bind({})
DisabledWithCustomTooltip.args = {
  disabled: true,
  tooltip: 'Enable or disable the feature',
  disabledTooltip: 'You are not allowed to change this setting',
}

const CustomStatusTemplate: StoryFn<AvToggleProps> = args => ({
  components: { AvToggle },
  setup () {
    return { args }
  },
  template: `
    <AvToggle v-bind="args" v-model="args.modelValue">
      <template #default="{ active }">
        <span :class="active ? 'caption-bold' : 'caption-regular'">
          {{ active ? 'Yes' : 'No' }}
        </span>
      </template>
    </AvToggle>
  `,
})

/**
 * The `default` slot replaces the `On` / `Off` text and receives the current state through the `active` slot prop.
 */
export const CustomStatus = CustomStatusTemplate.bind({})
CustomStatus.args = {}

const WidthRestrictTemplate: StoryFn<AvToggleProps> = args => ({
  components: { AvToggle },
  setup () {
    return { args }
  },
  template: `<div :style="{width: '10px'}"><AvToggle v-bind="args" v-model="args.modelValue" /></div>`,
})

export const WidthRestrict = WidthRestrictTemplate.bind({})
WidthRestrict.args = {
  description: 'A long description to see how this works',
}

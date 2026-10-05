import type { Meta, StoryFn } from '@storybook/vue3'
import AvBadge from '@/components/badges/AvBadge/AvBadge.vue'
import AvToggle, { type AvToggleProps } from '@/components/interaction/toggles/AvToggle/AvToggle.vue'
import { MDI_ICONS } from '@/tokens'

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
    statusTextWidth: { control: 'text' }
  },
  args: {
    modelValue: false,
    description: 'Some description',
    disabled: false,
    activeText: 'On',
    inactiveText: 'Off',
    name: undefined,
    statusTextWidth: '1.8rem'
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
  template: `<div :style="{width: '10px'}"><AvToggle v-bind="args" v-model="args.modelValue" /></div>`,
})

export const WidthRestrict = WidthRestrictTemplate.bind({})
WidthRestrict.args = {
  description: 'A long description to see how this works'
}

const TemplateWithSlot: StoryFn<AvToggleProps> = args => ({
  components: { AvToggle, AvBadge, MDI_ICONS },
  setup () {
    return { args }
  },
  template: `<AvToggle v-bind="args" v-model="args.modelValue">
    <template #default="{ active }">
      <AvBadge
        :label="active ? 'Active' : 'Inactive'"
        color="white"
        :background-color="active ? 'darkblue' : 'darkred'"
        :icon="active ? 'mdi:check-circle-outline' : 'mdi:warning-outline'"
      />
    </template>
  </AvToggle>`,
})

export const WithSlot = TemplateWithSlot.bind({})
WithSlot.args = {}

export const WithSlotActive = TemplateWithSlot.bind({})
WithSlotActive.args = {
  modelValue: true,
}

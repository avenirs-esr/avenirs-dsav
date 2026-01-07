import type { Meta, StoryFn } from '@storybook/vue3'
import AvCancelConfirmButtons, { type AvCancelConfirmButtonsProps } from '@/components/interaction/buttons/AvCancelConfirmButtons/AvCancelConfirmButtons.vue'
import { iconMapping, iconOptions } from '@/utils/storybook'

/**
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvCancelConfirmButtons</code> is an interaction element with an interface enabling the user
 *     to perform a cancel and/or a confirm action.
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     This component consists of two optional buttons:
 *   </span>
 * </p>
 *
 * <ul>
 *   <li>
 *     <span class="b2-regular">
 *       A <strong>cancel button</strong>, displayed by passing the <code>cancelLabel</code> prop.
 *     </span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">
 *       A <strong>confirm button</strong>, displayed by passing the <code>confirmLabel</code> prop.
 *     </span>
 *   </li>
 * </ul>
 */
const meta: Meta<AvCancelConfirmButtonsProps> = {
  title: 'Components/Interaction/Buttons/AvCancelConfirmButtons',
  component: AvCancelConfirmButtons,
  argTypes: {
    cancelLabel: { control: 'text' },
    cancelIcon: { control: 'select', options: iconOptions, mapping: iconMapping },
    cancelDisabled: { control: 'boolean' },
    cancelIsLoading: { control: 'boolean' },
    confirmLabel: { control: 'text' },
    confirmIcon: { control: 'select', options: iconOptions, mapping: iconMapping },
    confirmDisabled: { control: 'boolean' },
    confirmIsLoading: { control: 'boolean' },
  },
  args: {
    cancelLabel: 'Cancel',
    cancelIcon: undefined,
    confirmLabel: 'Confirm',
    confirmIcon: undefined,
  },
}

export default meta

const Template: StoryFn<AvCancelConfirmButtonsProps> = args => ({
  components: { AvCancelConfirmButtons },
  setup () {
    return { args }
  },
  template: `<AvCancelConfirmButtons v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {}

export const CancelOnly = Template.bind({})
CancelOnly.args = {
  cancelLabel: 'Cancel',
  confirmLabel: undefined
}

export const ConfirmOnly = Template.bind({})
ConfirmOnly.args = {
  confirmLabel: 'Confirm',
  cancelLabel: undefined
}

export const CancelDisabled = Template.bind({})
CancelDisabled.args = {
  cancelDisabled: true,
}

export const ConfirmDisabled = Template.bind({})
ConfirmDisabled.args = {
  confirmDisabled: true,
}

export const BothDisabled = Template.bind({})
BothDisabled.args = {
  cancelDisabled: true,
  confirmDisabled: true,
}

export const CancelLoading = Template.bind({})
CancelLoading.args = {
  cancelIsLoading: true,
}

export const ConfirmLoading = Template.bind({})
ConfirmLoading.args = {
  confirmIsLoading: true,
}

export const BothLoading = Template.bind({})
BothLoading.args = {
  cancelIsLoading: true,
  confirmIsLoading: true,
}

export const IconOnly = Template.bind({})
IconOnly.args = {
  iconOnly: true,
}

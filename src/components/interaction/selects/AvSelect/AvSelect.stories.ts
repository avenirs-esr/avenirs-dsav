import type { StoryFn } from '@storybook/vue3'
import AvSelect, { type AvSelectProps } from '@/components/interaction/selects/AvSelect/AvSelect.vue'
import { MDI_ICONS } from '@/tokens/icons'

/**
 * <h1 class="n1">Drop-down list - <code>AvSelect</code></h1>
 *
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvSelect</code> is a Vue component enabling a user to select an item from a given list.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     The drop-down list provides a list of options from which the user can choose. Only the visible part of the component is stylized:
 *     the drop-down list of options retains the browser style.
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <p><span class="b2-regular">The <code>AvSelect</code> consists of a set of <code>&lt;option&gt;</code> within a <code>&lt;select&gt;</code>.</span></p>
 */
const meta = {
  title: 'Components/Interaction/Selects/AvSelect',
  component: AvSelect,
  tags: ['autodocs'],
  argTypes: {
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    dense: { control: 'boolean' },
    name: { control: 'text' },
    hint: { control: 'text' },
    modelValue: { control: 'text' },
    label: { control: 'text' },
    options: {
      type: { name: '{value: string | number | undefined, text: string, disabled?: boolean}[]', required: true },
      control: false,
    },
    successMessage: { control: 'text' },
    errorMessage: { control: 'text' },
    placeholder: { control: 'text', required: true },
    prefixIcon: { control: 'text' },
  },
  args: {
    options: [
      { value: '1', text: 'Choice 1' },
      { value: '2', text: 'Choice 2' },
      { value: '3', text: 'Choice 3' },
      { value: '4', text: 'Choice 4' },
      { value: '5', text: 'Choice 5' },
    ],
    placeholder: 'Placeholder',
    required: false,
    disabled: false,
    name: 'select',
    hint: '',
    modelValue: '',
    label: '',
    successMessage: '',
    errorMessage: '',
    dense: false,
    prefixIcon: '',
  },
}

export default meta

const Template: StoryFn<AvSelectProps> = args => ({
  components: { AvSelect },
  setup () {
    return { args }
  },
  template: `<AvSelect v-bind="args" v-model="args.modelValue" />`,
})

export const Default = Template.bind({})
Default.args = {
  name: 'default-select',
  label: 'Select'
}

export const Dense = Template.bind({})
Dense.args = {
  name: 'dense-select',
  dense: true,
  label: 'Dense Select',
}

export const Disabled = Template.bind({})
Disabled.args = {
  name: 'disabled-select',
  disabled: true,
  label: 'Disabled Select',
}

export const Required = Template.bind({})
Required.args = {
  name: 'required-select',
  required: true,
  label: 'Required Select',
}

export const Hint = Template.bind({})
Hint.args = {
  name: 'hint-select',
  hint: 'This is a hint message.',
  label: 'Hint Select',
}

export const CustomPlaceholder = Template.bind({})
CustomPlaceholder.args = {
  name: 'custom-placeholder-select',
  placeholder: 'Please select an option',
  label: 'Custom placeholder Select',
}

export const WithError = Template.bind({})
WithError.args = {
  name: 'with-error-select',
  errorMessage: 'This field is required.',
  label: 'With error Select',
}

export const WithSuccess = Template.bind({})
WithSuccess.args = {
  name: 'with-success-select',
  successMessage: 'Selection successful!',
  label: 'With success Select',
}

export const WithPrefixIcon = Template.bind({})
WithPrefixIcon.args = {
  name: 'with-prefix-icon-select',
  prefixIcon: MDI_ICONS.ACCOUNT_CIRCLE_OUTLINE,
  label: 'With prefix icon Select',
}

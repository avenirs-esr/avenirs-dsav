import type { Meta, StoryFn } from '@storybook/vue3'
import AvCheckbox, { type AvCheckboxProps } from '@/components/interaction/checkboxes/AvCheckbox/AvCheckbox.vue'

/**
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p class="b2-regular">
 *   The <code>AvCheckbox</code> allows the user to select one or more options from a list.
 *   They are used to make multiple selections (from 0 to N items) or to allow a binary choice,
 *   where the user can select or deselect a single option.
 * </p>
 *
 * <p class="b2-regular">
 *   Checkboxes can be used alone or in a list. Avoid lists with more than 5 items, and when you want to restrict
 *   the choice to a single item, use radio buttons (see <code>AvRadioButton</code>).
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <ul class="b2-regular">
 *   <li>a checkbox <code>&lt;input type="checkbox"&gt;</code></li>
 *   <li>a label associated with the checkbox, defined by the <code>label</code> prop</li>
 *   <li>an information, error (<code>errorMessage</code> prop), or validation (<code>validMessage</code> prop) message, displayed below the checkbox</li>
 * </ul>
 */
const meta: Meta<AvCheckboxProps> = {
  title: 'Components/Interaction/Checkboxes/AvCheckbox',
  component: AvCheckbox,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'text' },
    name: { control: 'text', required: true },
    required: { control: 'boolean' },
    value: { control: 'text', required: true },
    small: { control: 'boolean' },
    inline: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text', required: true },
    errorMessage: { control: 'text' },
    validMessage: { control: 'text' },
    hint: { control: 'text' },
  },
  args: {
    icon: undefined,
    name: 'default-checkbox',
    required: false,
    value: '1',
    small: false,
    inline: false,
    disabled: false,
    label: 'A default checkbox',
    errorMessage: '',
    validMessage: '',
    hint: ''
  },
}

export default meta

const Template: StoryFn<AvCheckboxProps> = args => ({
  components: { AvCheckbox },
  setup () {
    const model = ref<(string | number)[]>([])
    return { args, model }
  },
  template: `<AvCheckbox v-bind="args" v-model="model" />`,
})

export const Default = Template.bind({})
Default.args = {}

export const WithIcon = Template.bind({})
WithIcon.args = {
  name: 'with-icon-checkbox',
  label: 'A checkbox with icon',
  icon: 'mdi:home'
}

export const Required = Template.bind({})
Required.args = {
  name: 'required-checkbox',
  label: 'A required checkbox',
  required: true
}

export const Disabled = Template.bind({})
Disabled.args = {
  name: 'disabled-checkbox',
  label: 'A disabled checkbox',
  disabled: true
}

export const Error = Template.bind({})
Error.args = {
  name: 'error-checkbox',
  label: 'A checkbox with error',
  errorMessage: 'An error has occured'
}

export const Valid = Template.bind({})
Valid.args = {
  name: 'valid-checkbox',
  label: 'A valid checkbox',
  validMessage: 'Congratulations!'
}

export const Hint = Template.bind({})
Hint.args = {
  name: 'hint-checkbox',
  label: 'A checkbox with a hint',
  hint: 'You should click this'
}

export const Small = Template.bind({})
Small.args = {
  name: 'small-checkbox',
  label: 'A small checkbox',
  small: true
}

export const SmallWithIcon = Template.bind({})
SmallWithIcon.args = {
  name: 'small-with-icon-checkbox',
  label: 'A disabled checkbox with icon',
  small: true,
  icon: 'mdi:home'
}

export const SmallRequired = Template.bind({})
SmallRequired.args = {
  name: 'small-required-checkbox',
  label: 'A small required checkbox',
  small: true,
  required: true
}

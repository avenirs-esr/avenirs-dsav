import type { StoryFn } from '@storybook/vue3'
import AvMultiselect, { type AvMultiselectProps } from '@/components/interaction/selects/AvMultiselect/AvMultiselect.vue'
import { MDI_ICONS } from '@/tokens'

/**
 * <h1 class="n1">Enhanced drop-down list - <code>AvMultiselect</code></h1>
 *
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvMultiselect</code> is a Vue component enabling a user to select one or many items from a given list.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     The drop-down list provides a list of options for the user to choose from.
 *     The user can filter this list and use a button to select/deselect all visible items.
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <p><span class="b2-regular">The <code>AvMultiselect</code> consists of:</span></p>
 * <ul>
 *   <li><span class="b2-regular">a <strong>label</strong> - Mandatory (<code>label</code> prop)</span></li>
 *   <li><span class="b2-regular">a <strong>description</strong> - Optional (<code>hint</code> prop or <code>hint</code> slot)</span></li>
 *   <li><span class="b2-regular">a <strong>list</strong> - Composed of a set of selectable options (mandatory, <code>options</code> prop with a label, a value and an optional icon)</span></li>
 * </ul>
 *
 * <p><span class="b2-regular">Inside the list:</span></p>
 * <ul>
 *   <li><span class="b2-regular">a <strong>"Select all" / "Deselect all" button</strong> - Optional (<code>selectAll</code> and <code>selectAllLabel</code> props)</span></li>
 *   <li><span class="b2-regular">an <strong>input field</strong> - Optional</span></li>
 *   <li><span class="b2-regular">a <strong>form section (fieldset)</strong> containing:</span>
 *     <ul>
 *       <li><span class="b2-regular">a <strong>legend</strong> - Optional, can be hidden (<code>legend</code> prop or <code>legend</code> slot)</span></li>
 *       <li><span class="b2-regular">a <strong>description of the group</strong> - Optional, can be hidden</span></li>
 *       <li><span class="b2-regular">a <strong>list of options</strong> - Mandatory (<code>options</code> prop with a label, a value and an optional icon)</span></li>
 *     </ul>
 *   </li>
 * </ul>
 */
const meta = {
  title: 'Components/Interaction/Selects/AvMultiselect',
  component: AvMultiselect,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    dense: { control: 'boolean' },
    id: { control: 'text' },
    name: { control: 'text' },
    hint: { control: 'text' },
    modelValue: {
      type: { name: '{value: string | number, label: string}[]', required: true },
      control: false,
    },
    label: { control: 'text' },
    options: {
      type: { name: '{value: string | number, label: string}[]', required: true },
      control: false,
    },
    successMessage: { control: 'text' },
    errorMessage: { control: 'text' },
    placeholder: { control: 'text', required: true },
    selectAll: { control: 'boolean' },
    search: { control: 'boolean' },
    width: { control: 'text' }
  },
  args: {
    options: [
      { value: '1', label: 'Choice 1' },
      { value: '2', label: 'Choice 2 with a long text' },
      { value: '3', label: 'Choice 3' },
      { value: '4', label: 'Choice 4' },
      { value: '5', label: 'Choice 5' },
    ],
    placeholder: 'Placeholder',
    required: false,
    disabled: false,
    id: 'selectId',
    name: 'select',
    hint: '',
    modelValue: [],
    label: '',
    successMessage: '',
    errorMessage: '',
    dense: false,
    selectAll: false,
    search: false,
  },
  parameters: {
    docs: {
      story: {
        height: '20rem',
      },
    },
  }
}

export default meta

const Template: StoryFn<AvMultiselectProps> = args => ({
  components: { AvMultiselect },
  setup () {
    return { args }
  },
  template: `<AvMultiselect v-bind="args" v-model="args.modelValue" />`,
})

export const Default = Template.bind({})
Default.args = {
  label: 'Select',
  id: 'default-multiselect'
}

export const Dense = Template.bind({})
Dense.args = {
  dense: true,
  label: 'Dense Select',
  id: 'dense-multiselect'
}

export const OptionsWithIcon = Template.bind({})
OptionsWithIcon.args = {
  options: [
    { value: '1', label: 'Choice 1', icon: MDI_ICONS.ATTACH_FILE },
    { value: '2', label: 'Choice 2', icon: MDI_ICONS.CHAT_ALERT },
    { value: '3', label: 'Choice 3', icon: MDI_ICONS.CONTENT_SAVE_OUTLINE },
    { value: '4', label: 'Choice 4', icon: MDI_ICONS.ELECTRON_FRAMEWORK },
    { value: '5', label: 'Choice 5', icon: MDI_ICONS.IMAGE_OUTLINE },
  ],
  label: 'Options with icon',
  id: 'icons-multiselect'
}

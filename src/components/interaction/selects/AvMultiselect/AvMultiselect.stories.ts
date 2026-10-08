import type { StoryFn } from '@storybook/vue3'
import type { AvMultiselectOption } from '@/components/interaction/selects/AvMultiselect/AvMultiselect.types'
import AvMultiselect, { type AvMultiselectProps } from '@/components/interaction/selects/AvMultiselect/AvMultiselect.vue'
import { MDI_ICONS } from '@/tokens'

type AvMultiselectStoryArgs = AvMultiselectProps & {
  modelValue: AvMultiselectOption[]
}

/**
 * <h1 class="n1">Enhanced drop-down list - <code>AvMultiselect</code></h1>
 *
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvMultiselect</code> component enables users to select one or multiple options from a custom
 *     drop-down list.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     The component supports flat options and one level of grouped options. Users can search the list, select
 *     or deselect all visible active options, and select or deselect all active options within a group.
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvMultiselect</code> component consists of:
 *   </span>
 * </p>
 *
 * <ul>
 *   <li>
 *     <span class="b2-regular">
 *       A label, provided by the mandatory <code>label</code> prop.
 *     </span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">
 *       An optional hint, provided by the <code>hint</code> prop.
 *     </span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">
 *       A button displaying the placeholder or selected text.
 *     </span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">
 *       A custom options panel containing:
 *     </span>
 *     <ul>
 *       <li>
 *         <span class="b2-regular">
 *           An optional search input.
 *         </span>
 *       </li>
 *       <li>
 *         <span class="b2-regular">
 *           An optional select-all button.
 *         </span>
 *       </li>
 *       <li>
 *         <span class="b2-regular">
 *           Flat options or groups containing child options.
 *         </span>
 *       </li>
 *       <li>
 *         <span class="b2-regular">
 *           A group checkbox when grouped options are provided.
 *         </span>
 *       </li>
 *     </ul>
 *   </li>
 * </ul>
 *
 * <p>
 *   <span class="b2-regular">
 *     Groups support only one nesting level: a group can contain options, but cannot contain other groups.
 *     Group objects are not added to the selected model; selecting a group selects or deselects its active
 *     child options.
 *   </span>
 * </p>
 */

const meta = {
  title: 'Components/Interaction/Selects/AvMultiselect',
  component: AvMultiselect,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    dense: { control: 'boolean' },
    name: { control: 'text' },
    hint: { control: 'text' },
    modelValue: {
      type: { name: '{value: string | number, label: string}[]', required: true },
      control: false,
    },
    label: { control: 'text' },
    options: {
      type: { name: '{value: string | number, label: string}[] | {label: string, children: ...}[]', required: true },
      control: false,
    },
    successMessage: { control: 'text' },
    errorMessage: { control: 'text' },
    placeholder: { control: 'text', required: true },
    selectAll: { control: 'boolean' },
    search: { control: 'boolean' },
    width: { control: 'text' },
    height: { control: 'text' },
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
    name: 'select',
    hint: '',
    modelValue: [],
    label: '',
    successMessage: '',
    errorMessage: '',
    dense: false,
    selectAll: false,
    search: false,
    selectedText: 'Selected option(s)',
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

const Template: StoryFn<AvMultiselectStoryArgs> = args => ({
  components: { AvMultiselect },
  setup () {
    return { args }
  },
  template: `<AvMultiselect v-bind="args" v-model="args.modelValue" />`,
})

export const Default = Template.bind({})
Default.args = {
  label: 'Select',
}

export const Dense = Template.bind({})
Dense.args = {
  dense: true,
  label: 'Dense Select',
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
}

export const GroupedOptions = Template.bind({})
GroupedOptions.args = {
  options: [
    {
      label: 'Group 1',
      children: [
        { value: '1', label: 'Choice 1' },
        { value: '2', label: 'Choice 2' },
      ],
    },
    { value: '3', label: 'Ungrouped choice' },
    {
      label: 'Group 2',
      children: [
        { value: '4', label: 'Choice 4' },
        { value: '5', label: 'Choice 5', disabled: true },
      ],
    },
  ],
  label: 'Grouped options',
}

export const GroupedOptionsWithSelectedValues = Template.bind({})
GroupedOptionsWithSelectedValues.args = {
  ...GroupedOptions.args,
  modelValue: [
    { value: '1', label: 'Choice 1' },
    { value: '2', label: 'Choice 2' },
  ],
  label: 'Grouped options with selected values',
}

export const CollapseMaxHeight = Template.bind({})
CollapseMaxHeight.args = {
  options: [
    { value: '1', label: 'Choice 1', icon: MDI_ICONS.ATTACH_FILE },
    { value: '2', label: 'Choice 2', icon: MDI_ICONS.CHAT_ALERT },
    { value: '3', label: 'Choice 3', icon: MDI_ICONS.CONTENT_SAVE_OUTLINE },
    { value: '4', label: 'Choice 4', icon: MDI_ICONS.ELECTRON_FRAMEWORK },
    { value: '5', label: 'Choice 5', icon: MDI_ICONS.IMAGE_OUTLINE },
    { value: '6', label: 'Choice 6', icon: MDI_ICONS.ATTACH_FILE },
    { value: '7', label: 'Choice 7', icon: MDI_ICONS.CHAT_ALERT },
    { value: '8', label: 'Choice 8', icon: MDI_ICONS.CONTENT_SAVE_OUTLINE },
    { value: '9', label: 'Choice 9', icon: MDI_ICONS.ELECTRON_FRAMEWORK },
    { value: '10', label: 'Choice 10', icon: MDI_ICONS.IMAGE_OUTLINE },
  ],
  label: 'Collapse max height',
  collapseMaxHeight: '150px',
}

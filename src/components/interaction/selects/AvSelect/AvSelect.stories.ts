import type { StoryFn } from '@storybook/vue3'
import AvSelect, {
  type AvSelectProps,
  type AvSelectSelectedOption,
} from '@/components/interaction/selects/AvSelect/AvSelect.vue'
import { MDI_ICONS } from '@/tokens/icons'

type AvSelectStoryArgs = AvSelectProps & {
  selectedItem: AvSelectSelectedOption
}

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
    label: { control: 'text' },
    options: {
      type: { name: '{id: string | number | undefined, label: string, disabled?: boolean}[]', required: true },
      control: false,
    },
    selectedItem: { control: false },
    successMessage: { control: 'text' },
    errorMessage: { control: 'text' },
    placeholder: { control: 'text', required: true },
    prefixIcon: { control: 'text' },
  },
  args: {
    options: [
      { id: '1', label: 'Choice 1' },
      { id: '2', label: 'Choice 2' },
      { id: '3', label: 'Choice 3' },
      { id: '4', label: 'Choice 4' },
      { id: '5', label: 'Choice 5' },
    ],
    placeholder: 'Placeholder',
    required: false,
    disabled: false,
    name: 'select',
    hint: '',
    selectedItem: { itemId: '' },
    label: '',
    successMessage: '',
    errorMessage: '',
    dense: false,
    prefixIcon: '',
  },
}

export default meta

const Template: StoryFn<AvSelectStoryArgs> = args => ({
  components: { AvSelect },
  setup () {
    return { args }
  },
  template: `
    <AvSelect v-bind="args" v-model:selected-item="args.selectedItem" />
    <p>Selected item: {{ args.selectedItem.itemId }}</p>
    <p>Selected item parent: {{ args.selectedItem.parentId }}</p>
  `,
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

export const WithOptGroups = Template.bind({})
WithOptGroups.args = {
  name: 'with-optgroups-select',
  label: 'Select with optgroups',
  options: [
    {
      id: 'group1',
      label: 'Group 1',
      children: [
        { id: '1', label: 'Choice 1' },
        { id: '2', label: 'Choice 2' },
      ],
    },
    {
      id: 'group2',
      label: 'Group 2',
      children: [
        { id: '3', label: 'Choice 3' },
        { id: '4', label: 'Choice 4' },
      ],
    },
    { id: '5', label: 'Ungrouped Choice' },
  ],
}

export const WithOptGroupsAndSelectedItem = Template.bind({})
WithOptGroupsAndSelectedItem.args = {
  name: 'with-optgroups-select',
  label: 'Select with optgroups',
  options: [
    {
      id: 'group1',
      label: 'Group 1',
      children: [
        { id: '1', label: 'Choice 1' },
        { id: '2', label: 'Choice 2' },
      ],
    },
    {
      id: 'group2',
      label: 'Group 2',
      children: [
        { id: '3', label: 'Choice 3' },
        { id: '4', label: 'Choice 4' },
      ],
    },
    { id: '5', label: 'Ungrouped Choice' },
  ],
  selectedItem: { itemId: '3', parentId: 'group2' },
}

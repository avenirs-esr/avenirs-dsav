import type { StoryFn } from '@storybook/vue3'
import type { AvSelectItem, AvSelectOption } from '@/components/interaction/selects/AvSelect/AvSelect.types'
import type { AvSelectProps } from '@/components/interaction/selects/AvSelect/AvSelect.vue'
import AvSelect from '@/components/interaction/selects/AvSelect/AvSelect.vue'
import { MDI_ICONS } from '@/tokens'

type AvSelectStoryArgs = AvSelectProps & {
  modelValue: AvSelectOption[] | AvSelectOption | null
}

const meta = {
  title: 'Components/Interaction/Selects/AvSelect',
  component: AvSelect,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    dense: { control: 'boolean' },
    multiple: { control: 'boolean' },
    name: { control: 'text' },
    hint: { control: 'text' },
    modelValue: {
      type: {
        name: 'AvSelectOption[] | AvSelectOption | null',
        required: false,
      },
      control: false,
    },
    label: { control: 'text' },
    options: {
      type: {
        name: 'AvSelectItem[]',
        required: true,
      },
      control: false,
    },
    successMessage: { control: 'text' },
    errorMessage: { control: 'text' },
    placeholder: { control: 'text', required: true },
    selectAll: { control: 'boolean' },
    search: { control: 'boolean' },
    searchPlaceholder: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    selectedText: { control: 'text' },
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
    multiple: false,
    name: 'av-select',
    hint: '',
    modelValue: null,
    label: '',
    successMessage: '',
    errorMessage: '',
    dense: false,
    selectAll: false,
    search: false,
    searchPlaceholder: 'Rechercher...',
  },
  parameters: {
    docs: {
      story: {
        height: '20rem',
      },
    },
  },
}

export default meta

const Template: StoryFn<AvSelectStoryArgs> = args => ({
  components: { AvSelect },
  setup () {
    return { args }
  },
  template: `
    <div class="av-col av-gap-sm">
      <AvSelect v-bind="args" v-model="args.modelValue" />
      <pre>modelValue: {{ JSON.stringify(args.modelValue, null, 2) }}</pre>
    </div>
  `,
})

const optionsWithIcon: AvSelectOption[] = [
  { value: '1', label: 'Choice 1', icon: MDI_ICONS.ATTACH_FILE },
  { value: '2', label: 'Choice 2', icon: MDI_ICONS.CHAT_ALERT },
  { value: '3', label: 'Choice 3', icon: MDI_ICONS.CONTENT_SAVE_OUTLINE },
  { value: '4', label: 'Choice 4', icon: MDI_ICONS.ELECTRON_FRAMEWORK },
  { value: '5', label: 'Choice 5', icon: MDI_ICONS.IMAGE_OUTLINE },
]

const groupedOptions: AvSelectItem[] = [
  {
    id: 'group-1',
    label: 'Group 1',
    children: [
      { value: '1', label: 'Choice 1' },
      { value: '2', label: 'Choice 2' },
    ],
  },
  { value: '3', label: 'Ungrouped choice' },
  {
    id: 'group-2',
    label: 'Group 2',
    children: [
      { value: '4', label: 'Choice 4' },
      { value: '5', label: 'Choice 5', disabled: true, disabledTooltip: 'This option is disabled' },
    ],
  },
]

const optionsForMaxHeight: AvSelectOption[] = [
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
]

export const Default = Template.bind({})
Default.args = {
  label: 'Select',
  multiple: false,
  modelValue: null,
}

export const Multiple = Template.bind({})
Multiple.args = {
  label: 'Multiple select',
  multiple: true,
  modelValue: [],
}

export const Dense = Template.bind({})
Dense.args = {
  dense: true,
  label: 'Dense Select',
  multiple: false,
  modelValue: null,
}

export const DenseMultiple = Template.bind({})
DenseMultiple.args = {
  dense: true,
  label: 'Dense Multiple Select',
  multiple: true,
  modelValue: [],
}

export const OptionsWithIcon = Template.bind({})
OptionsWithIcon.args = {
  options: optionsWithIcon,
  label: 'Options with icon',
  multiple: false,
  modelValue: null,
}

export const OptionsWithIconMultiple = Template.bind({})
OptionsWithIconMultiple.args = {
  options: optionsWithIcon,
  label: 'Options with icon - multiple',
  multiple: true,
  modelValue: [],
}

export const GroupedOptions = Template.bind({})
GroupedOptions.args = {
  options: groupedOptions,
  label: 'Grouped options',
  multiple: false,
  modelValue: null,
}

export const GroupedOptionsMultiple = Template.bind({})
GroupedOptionsMultiple.args = {
  options: groupedOptions,
  label: 'Grouped options - multiple',
  multiple: true,
  modelValue: [],
}

export const GroupedOptionsWithSelectedValues = Template.bind({})
GroupedOptionsWithSelectedValues.args = {
  options: groupedOptions,
  modelValue: { value: '1', label: 'Choice 1' },
  label: 'Grouped options with selected value',
  multiple: false,
}

export const GroupedOptionsWithSelectedValuesMultiple = Template.bind({})
GroupedOptionsWithSelectedValuesMultiple.args = {
  options: groupedOptions,
  modelValue: [
    { value: '1', label: 'Choice 1' },
    { value: '2', label: 'Choice 2' },
  ],
  label: 'Grouped options with selected values - multiple',
  multiple: true,
}

export const CollapseMaxHeight = Template.bind({})
CollapseMaxHeight.args = {
  options: optionsForMaxHeight,
  label: 'Collapse max height',
  collapseMaxHeight: '150px',
  multiple: false,
  modelValue: null,
}

export const CollapseMaxHeightMultiple = Template.bind({})
CollapseMaxHeightMultiple.args = {
  options: optionsForMaxHeight,
  label: 'Collapse max height - multiple',
  collapseMaxHeight: '150px',
  multiple: true,
  modelValue: [],
}

export const ConstrainedWidth = Template.bind({})
ConstrainedWidth.args = {
  options: optionsForMaxHeight,
  label: 'Constrained width',
  width: '200px',
  multiple: false,
  modelValue: null,
}

export const ConstrainedWidthMultiple = Template.bind({})
ConstrainedWidthMultiple.args = {
  options: optionsForMaxHeight,
  label: 'Constrained width - multiple',
  width: '200px',
  multiple: true,
  modelValue: [],
}

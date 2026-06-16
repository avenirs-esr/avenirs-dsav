import type { StoryFn } from '@storybook/vue3'
import type { AvAutocompleteOption } from '@/components/interaction/selects/AvAutocomplete/AvAutocomplete.types'
import AvListItem from '@/components/interaction/lists/AvListItem/AvListItem.vue'
import AvAutocomplete from '@/components/interaction/selects/AvAutocomplete/AvAutocomplete.vue'
import { MDI_ICONS } from '@/tokens'

interface ExtendedOption extends AvAutocompleteOption {
  role?: string
  department?: string
}

/**
 * <h1 class="n1">Selects - <code>AvAutocomplete</code></h1>
 *
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvAutocomplete</code> component is a comprehensive autocomplete/select component that provides search-as-you-type functionality with support for both single and multi-selection modes.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     It combines an input field with a dropdown containing filterable options, offering a seamless user experience for selecting from large datasets. The component supports customizable option rendering, debounced search, infinite scrolling, and flexible styling options.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     This component is designed with accessibility in mind, featuring keyboard navigation, focus management, and proper ARIA attributes.
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <p><span class="b2-regular">The autocomplete consists of an input field, dropdown with filterable options, and optional selected items section for multi-select mode.</span></p>
 */
const meta = {
  title: 'Components/Interaction/Selects/AvAutocomplete',
  component: AvAutocomplete,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    inputOptions: {
      control: 'object',
      description: 'Input-related options and configuration'
    },
    options: {
      control: 'object',
    },
    multiSelect: { control: 'boolean' },
    getOptionLabel: { control: false },
    getOptionKey: { control: false },
    filterOptions: { control: false },
    dropdownWidth: { control: 'text' },
    maxDropdownHeight: { control: 'text' },
    listOptions: { control: 'object' },
    scrollbarClass: { control: 'text' },
    dropdownClass: { control: 'text' },
    loading: { control: 'boolean' },
    debounceDelay: { control: 'number' },
    maxResults: { control: 'number' },
    enableLoadMore: { control: 'boolean' },
    showSelectedSection: { control: 'boolean' },
    displaySelectionInInput: {
      control: 'boolean',
      description: 'Whether selected items should be displayed inside the input in multi-select mode'
    },
    blurCloseDelay: { control: 'number' },
    loadMoreThrottleDelay: { control: 'number' },
    serverSideFiltering: { control: 'boolean' },
    requiredTip: {
      description: 'Slot for displaying a required field tip in the input',
      table: {
        category: 'slots',
        type: { summary: 'VNode' }
      }
    },
    item: {
      description: 'Slot for customizing how each option is displayed in the dropdown',
      table: {
        category: 'slots',
        type: {
          summary: '{ option: T; isSelected: boolean; toggle: () => void } => VNode'
        }
      }
    },
    selectedItem: {
      description: 'Slot for customizing how selected items are displayed',
      table: {
        category: 'slots',
        type: {
          summary: '{ option: T; remove: () => void } => VNode'
        }
      }
    },
    empty: {
      description: 'Slot for customizing the empty state when no options match',
      table: {
        category: 'slots',
        type: { summary: 'VNode' }
      }
    },
    clearLabel: {
      control: 'text',
      description: 'Label for the clear selection button'
    },
    showClearSelectionButton: {
      control: 'boolean',
      description: 'Whether to show a button to clear the selection'
    },
    clearSelectionLabel: {
      control: 'text',
      description: 'Label for the clear selection button when no items are selected'
    }
  },
  args: {
    clearLabel: 'Clear search',
    clearSelectionLabel: 'Clear selection',
    showClearSelectionButton: false,
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
      { label: 'Option 4', value: '4' },
      { label: 'Option 5', value: '5' },
      { label: 'Test 1', value: '6' },
      { label: 'Test 2', value: '7' },
    ],
    inputOptions: {
      label: 'Select options',
      placeholder: 'Search for options...',
    },
    multiSelect: false,
    dropdownWidth: '100%',
    maxDropdownHeight: '20rem',
    loading: false,
    debounceDelay: 300,
    enableLoadMore: false,
    showSelectedSection: false,
    displaySelectionInInput: true,
    blurCloseDelay: 150,
    loadMoreThrottleDelay: 200,
    serverSideFiltering: false,
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

const Template: StoryFn = args => ({
  components: { AvAutocomplete },
  setup () {
    const modelValue = ref([])
    return { args, modelValue, MDI_ICONS }
  },
  template: `<AvAutocomplete v-bind="args" v-model="modelValue" @search="(query) => console.log('Search:', query)" @load-more="() => console.log('Load more')" />`,
})

export const Default = Template.bind({})
Default.args = {}

export const MultiSelect = Template.bind({})
MultiSelect.args = {
  multiSelect: true,
  showSelectedSection: true,
  inputOptions: {
    label: 'Multi-select options',
    placeholder: 'Search and select multiple options...',
  },
}

export const MultiSelectWithoutSelectionInInput = Template.bind({})
MultiSelectWithoutSelectionInInput.args = {
  multiSelect: true,
  showSelectedSection: true,
  displaySelectionInInput: false,
  inputOptions: {
    label: 'Multi-select without selection in input',
    placeholder: 'Search and keep typing after selection...',
  },
}

export const WithCustomInput = Template.bind({})
WithCustomInput.args = {
  inputOptions: {
    label: 'Custom input',
    placeholder: 'Start typing to search...',
    required: true,
  },
}

export const Loading = Template.bind({})
Loading.args = {
  loading: true,
  inputOptions: {
    label: 'Loading state',
    placeholder: 'Loading options...',
  },
}

export const WithClearSelectionButton = Template.bind({})
WithClearSelectionButton.args = {
  multiSelect: true,
  showSelectedSection: true,
  showClearSelectionButton: true,
  inputOptions: {
    label: 'Multi-select with clear button',
    placeholder: 'Search and select multiple options...',
  },
}

export const WithLoadMore = Template.bind({})
WithLoadMore.args = {
  enableLoadMore: true,
  maxDropdownHeight: '15rem',
  inputOptions: {
    label: 'Infinite scroll',
    placeholder: 'Scroll to load more...',
  },
  options: Array.from({ length: 20 }, (_, i) => ({
    label: `Option ${i + 1}`,
    value: `${i + 1}`,
  })),
}

export const CustomDropdownSize = Template.bind({})
CustomDropdownSize.args = {
  dropdownWidth: '25rem',
  maxDropdownHeight: '12rem',
  inputOptions: {
    label: 'Custom dropdown size',
    placeholder: 'Fixed width dropdown...',
  },
}

export const WithDescriptionAndDisabled = Template.bind({})
WithDescriptionAndDisabled.args = {
  multiSelect: true,
  serverSideFiltering: true,
  inputOptions: {
    label: 'Select an activity',
    placeholder: 'Search for activities...',
  },
  options: [
    { label: 'Définir ses valeurs', value: '1', description: 'Me connaître' },
    { label: 'Explorer ses pistes', value: '2', description: 'Explorer mes futures' },
    { label: 'Activité désactivée', value: '3', description: 'CV', disabled: true },
  ],
}

export const WithCustomItemSlotExample = {
  render () {
    return {
      components: { AvAutocomplete, AvListItem },
      setup () {
        const modelValue = ref([])
        const customOptions: ExtendedOption[] = [
          { label: 'John Doe', value: 'john', role: 'Developer', department: 'Engineering' },
          { label: 'Jane Smith', value: 'jane', role: 'Designer', department: 'Design' },
          { label: 'Bob Johnson', value: 'bob', role: 'Manager', department: 'Product' },
          { label: 'Alice Brown', value: 'alice', role: 'Analyst', department: 'Marketing' },
        ]

        return { modelValue, customOptions, MDI_ICONS }
      },
      template: `
        <AvAutocomplete 
          v-model="modelValue"
          :options="customOptions"
          :input-options="{
            label: 'Select team member',
            placeholder: 'Search for team members...'
          }"
          :min-chars="1"
          @search="(query) => console.log('Search:', query)"
        >
          <template #item="{ option, isSelected, toggle }">
            <AvListItem 
              :selected="isSelected"
              hover-background-color="var(--light-background-neutral)"
              @click="toggle"
            >
              <div style="display: flex; flex-direction: column; gap: 0.25rem; width: 100%;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="font-weight: 600; color: var(--title);">{{ option.label }}</span>
                  <span style="font-size: 0.875rem; color: var(--light-foreground-info); background: var(--light-background-info); padding: 0.125rem 0.5rem; border-radius: var(--radius-xs);">{{ option.role }}</span>
                </div>
                <div style="font-size: 0.875rem; color: var(--text2);">{{ option.department }}</div>
              </div>
            </AvListItem>
          </template>
        </AvAutocomplete>
      `
    }
  },
}

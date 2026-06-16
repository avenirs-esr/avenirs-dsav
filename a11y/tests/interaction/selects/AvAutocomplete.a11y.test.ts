import { testStories } from 'a11y/utils'

const component = 'AvAutocomplete'
const title = 'Components/Interaction/Selects/AvAutocomplete'
const stories = [
  'Default',
  'MultiSelect',
  'MultiSelectWithoutSelectionInInput',
  'WithCustomInput',
  'Loading',
  'WithClearSelectionButton',
  'WithLoadMore',
  'CustomDropdownSize',
  'WithDescriptionAndDisabled',
  'WithCustomItemSlotExample',
]

testStories(component, title, stories)

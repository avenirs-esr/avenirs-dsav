import { testStories } from '../../../utils'

const component = 'AvAutocomplete'
const title = 'Components/Interaction/Selects/AvAutocomplete'
const stories = [
  'Default',
  'MultiSelect',
  'WithCustomInput',
  'WithLoadMore',
  'CustomDropdownSize',
  'WithCustomItemSlotExample',
]

testStories(component, title, stories)

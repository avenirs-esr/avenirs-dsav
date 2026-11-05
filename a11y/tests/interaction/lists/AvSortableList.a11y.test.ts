import { testStories } from 'a11y/utils'

const component = 'AvSortableList'
const title = 'Components/Interaction/Lists/AvSortableList'
const stories = [
  'Default',
  'CustomSlot',
  'ItemsWithIcons',
  'ItemsAsButtons',
  'CustomControlLabels',
  'Disabled',
  'LongList',
  'SubActivityForms',
]

testStories(component, title, stories)

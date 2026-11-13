import { testStories } from 'a11y/utils'

const component = 'AvSortableList'
const title = 'Components/Interaction/Lists/AvSortableList'
const stories = [
  'Default',
  'Disabled',
  'Loading',
  'CustomSlot',
  'ItemsWithIcons',
  'ItemsAsButtons',
  'CustomControlLabels',
  'LongList',
  'SubActivityForms',
]

testStories(component, title, stories)

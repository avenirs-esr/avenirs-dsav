import { testStories } from 'a11y/utils'

const component = 'AvTable'
const title = 'Components/DataDisplay/AvTable'
const stories = [
  'Default',
  'Empty',
  'Loading',
  'WithCustomCellSlot',
  'WithCustomEmptySlot',
]

testStories(component, title, stories)

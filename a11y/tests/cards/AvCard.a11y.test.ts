import { testStories } from 'a11y/utils'

const component = 'AvCard'
const title = 'Components/Cards/AvCard'
const stories = [
  'Default',
  'WithCustomColors',
  'WithOnlyDefaultSlot',
]

testStories(component, title, stories)

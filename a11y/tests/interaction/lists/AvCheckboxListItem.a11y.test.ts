import { testStories } from 'a11y/utils'

const component = 'AvCheckboxListItem'
const title = 'Components/Interaction/Lists/AvCheckboxListItem'
const stories = [
  'Default',
  'WithCustomContent',
  'WithAccessibility'
]

testStories(component, title, stories)

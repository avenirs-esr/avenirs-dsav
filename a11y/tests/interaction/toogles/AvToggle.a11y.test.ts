import { testStories } from 'a11y/utils'

const component = 'AvToggle'
const title = 'Components/Interaction/Toggles/AvToggle'
const stories = [
  'Default',
  'InitActive',
  'WidthRestrict',
]

testStories(component, title, stories)

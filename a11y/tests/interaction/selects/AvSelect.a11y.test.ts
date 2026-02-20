import { testStories } from 'a11y/utils'

const component = 'AvSelect'
const title = 'Components/Interaction/Selects/AvSelect'
const stories = [
  'Default',
  'Dense',
  'Disabled',
  'Required',
  'Hint',
  'CustomPlaceholder',
  'WithError',
  'WithSuccess',
  'WithPrefixIcon',
  'WithOptGroups',
]

testStories(component, title, stories)

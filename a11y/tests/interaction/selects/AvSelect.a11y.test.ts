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
  'LabelInvisible',
  'WithOptGroups',
  'WithOptGroupsAndSelectedItem',
]

testStories(component, title, stories)

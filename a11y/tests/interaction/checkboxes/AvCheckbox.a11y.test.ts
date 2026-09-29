import { testStories } from 'a11y/utils'

const component = 'AvCheckbox'
const title = 'Components/Interaction/Checkboxes/AvCheckbox'
const stories = [
  'Default',
  'WithIcon',
  'Required',
  'Disabled',
  'DisabledAndChecked',
  'DisabledWithTooltip',
  'Error',
  'Valid',
  'Hint',
  'Small',
  'SmallWithIcon',
  'SmallRequired',
  'LabelSlot',
]

testStories(component, title, stories)

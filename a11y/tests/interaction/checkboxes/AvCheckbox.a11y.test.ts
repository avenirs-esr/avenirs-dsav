import { testStories } from '../../../utils'

const component = 'AvCheckbox'
const title = 'Components/Interaction/Checkboxes/AvCheckbox'
const stories = [
  'Default',
  'WithIcon',
  'Required',
  'Disabled',
  'Error',
  'Valid',
  'Hint',
  'Small',
  'SmallWithIcon',
  'SmallRequired',
]

testStories(component, title, stories)

import { testStories } from 'a11y/utils'

const component = 'AvAlert'
const title = 'Components/Feedback/AvAlert'
const stories = [
  'Default',
  'Closeable',
  'Small',
  'SuccessAlert',
  'ErrorAlert',
  'WarningAlert',
  'MultipleAlerts'
]

testStories(component, title, stories)

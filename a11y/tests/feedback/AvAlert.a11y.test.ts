import { testStories } from '../../utils'

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

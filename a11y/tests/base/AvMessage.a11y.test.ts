import { testStories } from 'a11y/utils'

const component = 'AvMessage'
const title = 'Components/Base/AvMessage'
const stories = [
  'Info',
  'Success',
  'Warning',
  'Error',
]

testStories(component, title, stories)

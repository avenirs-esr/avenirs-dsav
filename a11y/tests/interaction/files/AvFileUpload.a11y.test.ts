import { testStories } from 'a11y/utils'

const component = 'AvFileUpload'
const title = 'Components/Interaction/Files/AvFileUpload'
const stories = [
  'Default',
  'Error',
  'Success',
  'LeftSlot',
]

testStories(component, title, stories)

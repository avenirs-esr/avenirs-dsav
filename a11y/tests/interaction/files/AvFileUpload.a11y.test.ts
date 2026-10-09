import { testStories } from 'a11y/utils'

const component = 'AvFileUpload'
const title = 'Components/Interaction/Files/AvFileUpload'
const stories = [
  'Default',
  'Error',
  'Success',
  'ValidationWithErrorMessage',
  'Disabled',
  'NotDeletable',
  'LeftSlot',
  'Compact',
  'CompactWithFileName',
  'CompactMultipleFiles',
  'Preview',
  'PreviewWithFile',
]

testStories(component, title, stories)

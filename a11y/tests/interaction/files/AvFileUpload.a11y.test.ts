import { testStories } from 'a11y/utils'

const component = 'AvFileUpload'
const title = 'Components/Interaction/Files/AvFileUpload'
const stories = [
  'Default',
  'WithFiles',
  'Multiple',
  'MultipleWithCountLabel',
  'MultipleWithMaxFiles',
  'MultipleWithMaxFilesAndCountLabel',
  'Error',
  'Success',
  'SuccessAndError',
  'LeftSlot',
  'Compact',
  'CompactWithFiles',
  'MultipleFiles',
]

testStories(component, title, stories)

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
  'MultipleWithMaxFilesAndCountLabelAndConfirmDelete',
  'Error',
  'Success',
  'SuccessAndError',
  'LeftSlot',
  'Compact',
  'CompactWithFile',
  'CompactMultipleFiles',
]

testStories(component, title, stories)

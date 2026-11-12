import { testStories } from 'a11y/utils'

const component = 'AvRichTextEditor'
const title = 'Components/Interaction/Inputs/AvRichTextEditor'
const stories = [
  'Default',
  'Disabled',
  'Loading',
  'MaxLength',
  'ExceedableMaxLength',
  'MaxLengthCaptionSlot',
  'AllAllowedHeadersLevels',
  'TwoEditors',
  'TwoEditorsInList'
]

testStories(component, title, stories)

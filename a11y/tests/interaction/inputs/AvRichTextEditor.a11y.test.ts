import { testStories } from 'a11y/utils'

const component = 'AvRichTextEditor'
const title = 'Components/Interaction/Inputs/AvRichTextEditor'
const stories = [
  'Default',
  'MaxLength',
  'ExceedableMaxLength',
  'MaxLengthCaptionSlot',
  'AllAllowedHeadersLevels'
]

testStories(component, title, stories)

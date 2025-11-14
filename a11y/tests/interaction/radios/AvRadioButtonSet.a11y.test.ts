import { testStories } from 'a11y/utils'

const component = 'AvRadioButtonSet'
const title = 'Components/Interaction/Radios/AvRadioButtonSet'
const stories = [
  'Default',
  'Inline',
  'Disabled',
  'Small',
  'Error',
  'SuccessInline',
]

testStories(component, title, stories)

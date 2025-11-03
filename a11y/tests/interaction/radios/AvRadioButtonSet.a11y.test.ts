import { testStories } from '../../../utils'

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

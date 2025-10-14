import { testStories } from '../../../utils'

const component = 'AvCancelConfirmButtons'
const title = 'Components/Interaction/Buttons/AvCancelConfirmButtons'
const stories = [
  'Default',
  'CancelOnly',
  'ConfirmOnly',
]

testStories(component, title, stories)

import { testStories } from '../../../utils'

const component = 'AvCancelConfirmButtons'
const title = 'Components/Interaction/Buttons/AvCancelConfirmButtons'
const stories = [
  'Default',
  'CancelOnly',
  'ConfirmOnly',
  'CancelDisabled',
  'ConfirmDisabled',
  'BothDisabled',
  'CancelLoading',
  'ConfirmLoading',
  'BothLoading',
]

testStories(component, title, stories)

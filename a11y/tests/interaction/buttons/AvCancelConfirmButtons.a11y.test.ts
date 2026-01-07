import { testStories } from 'a11y/utils'

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
  'IconOnly',
]

testStories(component, title, stories)

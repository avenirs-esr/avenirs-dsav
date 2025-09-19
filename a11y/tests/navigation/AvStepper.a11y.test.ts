import { testStories } from '../../utils'

const component = 'AvStepper'
const title = 'Components/Navigation/AvStepper'
const stories = [
  'Default',
  'WithAllStepsActive',
  'WithStepTwoActive',
  'WithTwoSteps',
  'WithFourSteps',
]

testStories(component, title, stories)

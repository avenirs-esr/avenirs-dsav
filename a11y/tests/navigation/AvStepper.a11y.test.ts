import { testStories } from 'a11y/utils'

const component = 'AvStepper'
const title = 'Components/Navigation/AvStepper'
const stories = [
  'Default',
  'CustomWidth',
  'WithAllStepsActive',
  'WithStepTwoActive',
  'WithTwoSteps',
  'WithFourSteps',
]

testStories(component, title, stories)

import { testStories } from 'a11y/utils'

const component = 'AvPeriodInput'
const title = 'Components/Interaction/Inputs/AvPeriodInput'
const stories = [
  'Default',
  'Prefilled',
  'WithWidth',
  'WithCustomSpacing',
  'BothDisabled',
  'Stacked',
  'WithExternalBounds',
  'WithRangeBehavior',
  'StartDateDisabled',
  'EndDateDisabled',
  'MonthType',
  'DateTimeLocalType',
  'HiddenLabel',
]

testStories(component, title, stories)

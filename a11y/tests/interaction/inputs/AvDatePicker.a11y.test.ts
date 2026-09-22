import { testStories } from 'a11y/utils'

const component = 'AvDatePicker'
const title = 'Components/Interaction/Inputs/AvDatePicker'
const stories = [
  'Default',
  'Prefilled',
  'Disabled',
  'WithError',
  'HiddenLabel',
  'WithMinMaxDate',
  'WithCustomFormat',
  'MonthType',
  'TimeType',
  'WeekType',
  'RangeType',
  'MonthRangeType',
  'DateTimeLocalType',
  'WithLabelSuffix',
]

testStories(component, title, stories)

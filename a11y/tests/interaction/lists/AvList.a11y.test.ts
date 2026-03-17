import { testStories } from 'a11y/utils'

const component = 'AvList'
const title = 'Components/Interaction/Lists/AvList'
const stories = [
  'Default',
  'Bordered',
  'DividedList',
  'CustomStyling',
  'SmallSize',
  'MediumSize',
  'LargeSize',
  'CheckboxList',
  'CheckboxListCustomItems'
]

testStories(component, title, stories)

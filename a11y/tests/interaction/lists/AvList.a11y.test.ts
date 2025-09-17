import { testStories } from '../../../utils'

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
]

testStories(component, title, stories)

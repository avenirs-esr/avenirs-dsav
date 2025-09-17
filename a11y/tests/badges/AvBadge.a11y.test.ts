import { testStories } from '../../utils'

const component = 'AvBadge'
const title = 'Components/Badges/AvBadge'
const stories = [
  'Default',
  'WithoutIcon',
  'SmallEllipsis',
  'StatusNotStarted',
  'StatusInProgress',
  'StatusSubmitted',
  'StatusCompleted'
]

testStories(component, title, stories)

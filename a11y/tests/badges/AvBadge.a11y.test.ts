import { testStories } from 'a11y/utils'

const component = 'AvBadge'
const title = 'Components/Badges/AvBadge'
const stories = [
  'Default',
  'WithoutIcon',
  'SmallEllipsis',
  'EllipsisNotTruncated',
  'StatusNotStarted',
  'StatusInProgress',
  'StatusSubmitted',
  'StatusCompleted',
  'NoSentenceCase',
  'WithSentenceCase'
]

testStories(component, title, stories)

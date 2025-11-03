import { testStories } from '../../utils'

const component = 'AvPagination'
const title = 'Components/Navigation/AvPagination'
const stories = [
  'Default',
  'DefaultMiddlePage',
  'DefaultLastPage',
  'DefaultTruncated',
  'Compact',
  'CompactMiddlePage',
  'CompactLastPage',
]

testStories(component, title, stories)

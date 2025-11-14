import { testStories } from 'a11y/utils'

const component = 'AvNotice'
const title = 'Components/Base/AvNotice'
const stories = [
  'Default',
  'InfoNotice',
  'AlertNotice',
  'WithoutTitle',
]

testStories(component, title, stories)

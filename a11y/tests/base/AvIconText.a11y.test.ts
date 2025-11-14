import { testStories } from 'a11y/utils'

const component = 'AvIconText'
const title = 'Components/Base/AvIconText'
const stories = [
  'Default',
  'InlineNoEllipsis',
  'CustomColors',
]

testStories(component, title, stories)

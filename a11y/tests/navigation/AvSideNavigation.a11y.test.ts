import { testStories } from 'a11y/utils'

const component = 'AvSideNavigation'
const title = 'Components/Navigation/AvSideMenu'
const stories = [
  'Default',
  'Collapsed',
  'CustomWidth',
]

testStories(component, title, stories)

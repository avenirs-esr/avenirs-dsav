import { testStories } from '../../utils'

const component = 'AvSideMenu'
const title = 'Components/Navigation/AvSideMenu'
const stories = [
  'Default',
  'NonCollapsible',
  'CustomWidth',
  'StudentNavigation',
  'Minimal',
]

testStories(component, title, stories)

import { testStories } from 'a11y/utils'

const component = 'AvSideMenu'
const title = 'Components/Navigation/AvSideMenu'
const stories = [
  'Default',
  'Collapsed',
  'HiddenContentCollapsed',
  'NonCollapsible',
  'CustomWidth',
  'StudentNavigation',
  'Minimal',
  'Sticky',
]

testStories(component, title, stories)

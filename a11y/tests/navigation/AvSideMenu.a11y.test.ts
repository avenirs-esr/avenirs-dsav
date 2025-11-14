import { testStories } from 'a11y/utils'

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

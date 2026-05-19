import { testStories } from 'a11y/utils'

const component = 'AvSideNavigation'
const title = 'Components/Navigation/AvSideNavigation'
const stories = [
  'Default',
  'MenuItems',
  'Collapsed',
  'HiddenContentCollapsed',
  'CustomWidth',
  'CustomCollapsedWidth',
  'CustomColor',
]

testStories(component, title, stories)

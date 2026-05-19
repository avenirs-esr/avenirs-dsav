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
  'Sticky'
]

testStories(component, title, stories)

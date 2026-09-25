import { testStories } from 'a11y/utils'

const component = 'AvSideNavigation'
const title = 'Components/Navigation/AvSideNavigation'
const stories = [
  'Default',
  'Secondary',
  'MenuItemsDefault',
  'MenuItemsSecondary',
  'Collapsed',
  'HiddenContentCollapsed',
  'CustomWidth',
  'CustomCollapsedWidth',
  'Sticky'
]

testStories(component, title, stories)

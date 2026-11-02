import { testStories } from 'a11y/utils'

const component = 'AvSideNavigation'
const title = 'Components/Navigation/AvSideNavigation'
const stories = [
  'Default',
  'Secondary',
  'ItemsWithIndexes',
  'ItemsWithIndexesSecondary',
  'MenuItemsDefault',
  'MenuItemsSecondary',
  'Collapsed',
  'HiddenContentCollapsed',
  'CustomWidth',
  'CustomCollapsedWidth',
  'Sticky'
]

testStories(component, title, stories)

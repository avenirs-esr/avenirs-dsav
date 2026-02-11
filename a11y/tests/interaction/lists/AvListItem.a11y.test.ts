import { testStories } from 'a11y/utils'

const component = 'AvListItem'
const title = 'Components/Interaction/Lists/AvListItem'
const stories = [
  'Default',
  'WithIcon',
  'Clickable',
  'SubClickable',
  'Selected',
  'SubSelected',
  'Disabled',
  'TitleOnly',
  'DescriptionOnly',
  'NavigationLink',
  'SubNavigationLink',
  'LargeIcon',
  'SubLargeIcon',
  'CustomColors',
  'SubCustomColors',
  'WithCustomContent',
  'WithAccessibility',
]

testStories(component, title, stories)

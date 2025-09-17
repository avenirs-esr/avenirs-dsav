import { testStories } from '../../../utils'

const component = 'AvListItem'
const title = 'Components/Interaction/Lists/AvListItem'
const stories = [
  'Default',
  'WithIcon',
  'Clickable',
  'Selected',
  'Disabled',
  'TitleOnly',
  'DescriptionOnly',
  'NavigationLink',
  'LargeIcon',
  'CustomColors',
  'WithCustomContent',
  'WithAccessibility',
]

testStories(component, title, stories)

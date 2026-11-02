import { testStories } from 'a11y/utils'

const component = 'AvListItem'
const title = 'Components/Interaction/Lists/AvListItem'
const stories = [
  'Default',
  'Secondary',
  'TertiaryOnDarkBackground',
  'WithIcon',
  'WithIndex',
  'WithIconAndIndex',
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
  'WithCustomContent',
  'WithAccessibility',
  'WithTitleMaxLines',
  'WithTitleMaxLinesAndTooltip',
  'WithTitleMaxLinesAndTooltipAndShortTitle'
]

testStories(component, title, stories)

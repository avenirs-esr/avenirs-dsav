import { testStories } from 'a11y/utils'

const component = 'Avtabs'
const title = 'Components/Interaction/Tabs/AvTabs'
const stories = [
  'Default',
  'Compact',
  'WithFirstTabDisabled',
  'WithSecondTabDisabled',
  'WithLastTabDisabled',
  'WithLoadingTab',
  'CompactWithDisabledTab',
  'CompactWithLoadingTab'
]

testStories(component, title, stories)

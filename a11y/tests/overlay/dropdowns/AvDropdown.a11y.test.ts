import { testStories } from 'a11y/utils'

const component = 'AvDropdown'
const title = 'Components/Overlay/Dropdowns/AvDropdown'
const stories = [
  'Default',
  'WithLabel',
  'FlatTrigger',
  'DefaultTrigger',
  'LargeTrigger',
  'WideMenu',
  'LargeItems',
  'PrimaryItems',
  'WithoutIcons',
  'IconOnlyItems',
  'WithDisabledItem',
  'SettingsMenu',
]

testStories(component, title, stories)

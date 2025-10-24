import { testStories } from '../../../utils'

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
  'SettingsMenu',
]

testStories(component, title, stories)

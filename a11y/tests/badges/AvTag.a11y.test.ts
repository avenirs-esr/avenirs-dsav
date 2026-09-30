import { testStories } from 'a11y/utils'

const component = 'AvTag'
const title = 'Components/Badges/AvTag'
const stories = [
  'Default',
  'Small',
  'Disabled',
  'DisabledWithTooltip',
  'IconOnly',
  'WithoutIcon',
  'Selectable',
  'SelectableSelected',
  'SelectableUnselected'
]

testStories(component, title, stories)

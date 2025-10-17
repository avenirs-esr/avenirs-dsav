import { testStories } from '../../utils'

const component = 'AvTag'
const title = 'Components/Badges/AvTag'
const stories = [
  'Default',
  'Small',
  'WithLink',
  'IconOnly',
  'WithoutIcon',
  'Selectable',
  'SelectableSelected',
  'SelectableUnselected'
]

testStories(component, title, stories)

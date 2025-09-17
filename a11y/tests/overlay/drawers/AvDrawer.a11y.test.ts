import { testStories } from '../../../utils'

const component = 'AvDrawer'
const title = 'Components/Overlay/Drawers/AvDrawer'
const stories = [
  'Default',
  'LeftPosition',
  'WithoutBackdrop',
  'CustomWidth',
  'WithFooter',
]

testStories(component, title, stories)

import { testStories } from 'a11y/utils'

const component = 'AvFloatingPanel'
const title = 'Components/Overlay/Panels/AvFloatingPanel'
const stories = [
  'Default',
  'Expanded',
  'WithSubtitle',
  'WithSubtitleAndFitContent',
  'WithoutIcon',
]

testStories(component, title, stories)

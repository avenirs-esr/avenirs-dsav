import { testStories } from 'a11y/utils'

const component = 'AvFloatingPanel'
const title = 'Components/Overlay/Panels/AvFloatingPanel'
const stories = [
  'Default',
  'Expanded',
  'WithSubtitle',
  'WithSubtitleAndFitContent',
  'WithouIcon',
]

testStories(component, title, stories)

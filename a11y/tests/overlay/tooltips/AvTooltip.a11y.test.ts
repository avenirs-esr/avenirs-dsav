import { testStories } from 'a11y/utils'

const component = 'AvTooltip'
const title = 'Components/Overlay/Tooltips/AvTooltip'
const stories = [
  'Default',
  'Disavbled',
  'JustifyLeft',
  'JustifyCenter',
  'JustifyRight',
  'ShortContent',
]

testStories(component, title, stories)

import { testStories } from 'a11y/utils'

const component = 'AvNumberIndicator'
const title = 'Components/Base/AvNumberIndicator'
const stories = [
  'Default',
  'WithParentColor',
  'ZeroValue',
  'NegativeValue',
  'NonIntegerValue',
  'TwoDigits',
  'ThreeDigits',
  'FourDigits',
  'FiveDigits',
  'SixDigits',
  'SevenDigits',
  'EightDigits',
  'NineDigits',
  'TenDigits',
]

testStories(component, title, stories)

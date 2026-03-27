import { testStories } from 'a11y/utils'

const component = 'AvMultiselect'
const title = 'Components/Interaction/Selects/AvMultiselect'
const stories = [
  'Default',
  'Dense',
  'OptionsWithIcon',
  'CollapseMaxHeight',
]

testStories(component, title, stories)

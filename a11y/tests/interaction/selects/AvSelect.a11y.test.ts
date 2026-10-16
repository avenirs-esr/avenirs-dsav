import { testStories } from 'a11y/utils'

const component = 'AvSelect'
const title = 'Components/Interaction/Selects/AvSelect'
const stories = [
  'Default',
  'Multiple',
  'Dense',
  'DenseMultiple',
  'OptionsWithIcon',
  'OptionsWithIconMultiple',
  'GroupedOptions',
  'GroupedOptionsMultiple',
  'GroupedOptionsWithSelectedValues',
  'GroupedOptionsWithSelectedValuesMultiple',
  'CollapseMaxHeight',
  'CollapseMaxHeightMultiple',
]

testStories(component, title, stories)

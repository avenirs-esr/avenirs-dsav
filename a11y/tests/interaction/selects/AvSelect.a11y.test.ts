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
  'ConstrainedWidth',
  'ConstrainedWidthMultiple',
]

testStories(component, title, stories)

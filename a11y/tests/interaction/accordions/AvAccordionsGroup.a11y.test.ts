import { testStories } from '../../../utils'

const component = 'AvAccordionsGroup'
const title = 'Components/Interaction/Accordions/AvAccordionsGroup'
const stories = [
  'Default',
  'WithFirstAccordionOpen',
  'WithSecondAccordionOpen',
]

testStories(component, title, stories)

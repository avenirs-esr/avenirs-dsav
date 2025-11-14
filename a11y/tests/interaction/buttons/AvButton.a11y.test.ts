import { testStories } from 'a11y/utils'

const component = 'AvButton'
const title = 'Components/Interaction/Buttons/AvButton'
const stories = [
  'Default',
  'DefaultIconOnly',
  'DefaultLoading',
  'DefaultDisabled',
  'DefaultNoRadius',
  'DefaultSecondary',
  'Outlined',
  'OutlinedIconOnly',
  'OutlinedLoading',
  'OutlinedDisabled',
  'OutlinedNoRadius',
  'OutlinedSecondary',
  'Flat',
  'FlatIconOnly',
  'FlatLoading',
  'FlatDisabled',
  'FlatNoRadius',
  'FlatSecondary',
]

testStories(component, title, stories)

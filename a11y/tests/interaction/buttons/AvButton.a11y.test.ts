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
  'TertiaryOnDarkBackground',
  'Outlined',
  'OutlinedIconOnly',
  'OutlinedLoading',
  'OutlinedDisabled',
  'OutlinedNoRadius',
  'OutlinedSecondary',
  'OutlinedTertiaryOnDarkBackground',
  'Flat',
  'FlatIconOnly',
  'FlatLoading',
  'FlatDisabled',
  'FlatNoRadius',
  'FlatSecondary',
  'FlatTertiaryOnDarkBackground',
]

testStories(component, title, stories)

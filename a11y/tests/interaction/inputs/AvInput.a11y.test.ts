import { testStories } from '../../../utils'

const component = 'AvInput'
const title = 'Components/Interaction/Inputs/AvInput'
const stories = [
  'Default',
  'WithHint',
  'Required',
  'Valid',
  'Disabled',
  'Email',
  'Password',
  'Textarea',
  'WithoutLabel',
  'WithMaxLength',
  'MultipleErrors',
  'MultipleValidMessages',
  'WithPrefixIcon',
  'EmailWithIcon',
  'PasswordWithIcon',
  'PhoneWithIcon',
  'PrefixIconWithValidation',
  'PrefixIconDisabled',
  'NumberInput',
  'SearchInput',
  'UrlInput',
]

testStories(component, title, stories)

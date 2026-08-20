import { testStories } from 'a11y/utils'

const component = 'AvFilePill'
const title = 'Components/Interaction/Files/AvFilePill'
const stories = [
  'Default',
  'WithDetails',
  'Downloadable',
  'DownloadableAndDeletable',
  'LongFileName',
]

testStories(component, title, stories)

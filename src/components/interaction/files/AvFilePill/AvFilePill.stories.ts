import type { Meta, StoryFn } from '@storybook/vue3'
import AvFilePill, { type AvFilePillProps } from '@/components/interaction/files/AvFilePill/AvFilePill.vue'

/**
 * <h1 class="n1">File pill - <code>AvFilePill</code></h1>
 *
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvFilePill</code> component displays a selected or attached file as a compact pill with its name,
 *     optional details, and optional download or delete actions.
 *   </span>
 * </p>
 */
const meta: Meta<AvFilePillProps> = {
  title: 'Components/Interaction/Files/AvFilePill',
  component: AvFilePill,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    size: { control: 'number' },
    type: { control: 'text' },
    id: { control: 'text' },
    downloadable: { control: 'boolean' },
    deletable: { control: 'boolean' },
    showDetails: { control: 'boolean' },
  },
  args: {
    name: 'Document.pdf',
    size: 5123456,
    type: 'pdf',
    id: 'document-pdf',
    downloadable: false,
    deletable: true,
    showDetails: false,
  },
}

export default meta

const Template: StoryFn<AvFilePillProps> = args => ({
  components: { AvFilePill },
  setup () {
    return { args }
  },
  template: '<AvFilePill v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {}

export const WithDetails = Template.bind({})
WithDetails.args = {
  showDetails: true,
}

export const Downloadable = Template.bind({})
Downloadable.args = {
  downloadable: true,
  deletable: false,
  showDetails: true,
}

export const DownloadableAndDeletable = Template.bind({})
DownloadableAndDeletable.args = {
  downloadable: true,
  showDetails: true,
}

export const LongFileName = Template.bind({})
LongFileName.args = {
  name: 'very-long-file-name-that-should-be-truncated-in-the-file-pill-component.pdf',
  showDetails: true,
}

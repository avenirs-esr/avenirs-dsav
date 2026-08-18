import type { Meta, StoryFn } from '@storybook/vue3'
import profile_banner_placeholder from '@/assets/profile_banner_placeholder.png'
import AvIcon from '@/components/base/AvIcon/AvIcon.vue'
import AvFileUpload, { type AvFileUploadProps } from '@/components/interaction/files/AvFileUpload/AvFileUpload.vue'

/**
 * <h1 class="n1">File uploader - <code>AvFileUpload</code></h1>
 *
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvFileUpload</code> component allows you to upload files by clicking on the file upload area
 *     or by dragging and dropping a file in the area. Supports both single and multiple file uploads with two display variants.
 *   </span>
 * </p>
 */
const meta: Meta<AvFileUploadProps> = {
  title: 'Components/Interaction/Files/AvFileUpload',
  component: AvFileUpload,
  tags: ['autodocs'],
  argTypes: {
    ariaLabel: { control: 'text' },
    accept: { control: 'text' },
    maxFileSizeMb: { control: 'number' },
    error: { control: 'text' },
    validMessage: { control: 'text' },
    disabled: { control: 'boolean' },
    modelValue: { control: 'text' },
    maxWidth: { control: 'text' },
    fileName: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    deleteButtonLabel: { control: 'text' },
    compact: { control: 'boolean' },
    enableMultiple: { control: 'boolean' },
  },
  args: {
    ariaLabel: '',
    accept: '',
    maxFileSizeMb: undefined,
    error: '',
    validMessage: '',
    disabled: false,
    modelValue: null,
    maxWidth: 'none',
    fileName: undefined,
    title: 'Upload file',
    description: 'or drag and drop here',
    deleteButtonLabel: 'Delete',
    compact: false,
    enableMultiple: false,
  },
}

export default meta

const Template: StoryFn<AvFileUploadProps> = args => ({
  components: { AvFileUpload, AvIcon },
  setup () {
    return { args }
  },
  template: `
    <AvFileUpload v-bind="args">
      <span class="b2-regular">Upload file</span>
      <span class="b2-bold">PDF format</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5MB • </span>
        Images: <span class="caption-bold">5MB • </span>
        Audio: <span class="caption-bold">5MB • </span>
        Video: <span class="caption-bold">50MB • </span>
        Application: <span class="caption-bold">10MB</span>
      </template>
    </AvFileUpload>
  `,
})

export const Default = Template.bind({})
Default.args = {}

export const Error = Template.bind({})
Error.args = {
  error: 'This is an error message'
}

export const Success = Template.bind({})
Success.args = {
  validMessage: 'File uploaded successfully'
}

const LeftSlotTemplate: StoryFn<AvFileUploadProps & { leftImageSrc: string }> = args => ({
  components: { AvFileUpload, AvIcon },
  setup () {
    return { args }
  },
  template: `
    <AvFileUpload v-bind="args">
      <template #left>
        <img
          :src="args.leftImageSrc"
          alt="banner"
          style="height: 100%; width: 100%; object-fit: cover;"
        >
      </template>

      <span class="b2-regular">Upload file</span>
      <span class="b2-bold">PDF format</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5MB • </span>
        Images: <span class="caption-bold">5MB • </span>
        Audio: <span class="caption-bold">5MB • </span>
        Video: <span class="caption-bold">50MB • </span>
        Application: <span class="caption-bold">10MB</span>
      </template>
    </AvFileUpload>
  `,
})

export const LeftSlot = LeftSlotTemplate.bind({})
LeftSlot.args = {
  leftImageSrc: profile_banner_placeholder
}

export const Compact = Template.bind({})
Compact.args = {
  compact: true,
  title: 'Attach documents',
  description: '',
}

export const CompactWithFiles = Template.bind({})
CompactWithFiles.args = {
  compact: true,
  title: 'Attach documents',
  description: '',
  fileName: 'Document.pdf',
}

export const MultipleFiles = Template.bind({})
MultipleFiles.args = {
  compact: true,
  enableMultiple: true,
  title: 'Attach documents',
  description: '',
  fileName: 'Document1.pdf',
}

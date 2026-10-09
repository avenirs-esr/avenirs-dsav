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
 *     The <code>AvFileUpload</code> component allows users to upload files by clicking on the file upload area
 *     or by dragging and dropping files. It supports both single and multiple file uploads, with two display
 *     variants: default and compact.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     The component handles file validation, including accepted file types, maximum file size, and maximum
 *     number of files. Invalid files are discarded, and appropriate error events are emitted.
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
    maxFiles: { control: 'number' },
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
    maxFiles: undefined,
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

const files = [
  new File([], 'Document.pdf'),
  new File([], 'text.txt'),
  new File([], 'Image.png'),
  new File([], 'Audio.mp3'),
  new File([], 'Video.mp4'),
  new File([], 'Application.zip'),
  new File([], 'Video.mov'),
  new File([], 'Spreadsheet.xlsx'),
  new File([], 'Presentation.pptx'),
  new File([], 'Archive.rar'),
  new File([], 'Script.js'),
  new File([], 'Database.db'),
  new File([], 'Vector.svg'),
  new File([], 'Font.ttf'),
  new File([], 'Archive.7z'),
  new File([], 'Compressed.tar.gz'),
  new File([], 'Executable.exe'),
  new File([], 'Script.py'),
]

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

export const WithFiles = Template.bind({})
WithFiles.args = {
  modelValue: files.slice(0, 1)
}

export const Multiple = Template.bind({})
Multiple.args = {
  enableMultiple: true,
  modelValue: files,
  deleteButtonLabel: 'Delete\u{00A0}all'
}

export const MultipleWithCountLabel = Template.bind({})
MultipleWithCountLabel.args = {
  enableMultiple: true,
  countLabel: 'files selected',
  modelValue: files,
  deleteButtonLabel: 'Delete\u{00A0}all'
}

export const MultipleWithMaxFiles = Template.bind({})
MultipleWithMaxFiles.args = {
  enableMultiple: true,
  maxFiles: files.length,
  modelValue: files,
  deleteButtonLabel: 'Delete\u{00A0}all'
}

export const MultipleWithMaxFilesAndCountLabel = Template.bind({})
MultipleWithMaxFilesAndCountLabel.args = {
  enableMultiple: true,
  maxFiles: files.length,
  countLabel: `/ ${files.length} files selected`,
  modelValue: files,
  deleteButtonLabel: 'Delete\u{00A0}all'
}

export const Error = Template.bind({})
Error.args = {
  error: 'This is an error message'
}

export const Success = Template.bind({})
Success.args = {
  modelValue: files.slice(0, 1),
  validMessage: 'File uploaded successfully'
}

export const SuccessAndError = Template.bind({})
SuccessAndError.args = {
  modelValue: files.slice(0, 1),
  validMessage: 'File uploaded successfully',
  error: 'The file does not meet the expected format. The file size exceeds the allowed limit. The number of files exceeds the allowed limit.'
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
  modelValue: files,
}

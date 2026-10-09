import type { Meta, StoryFn } from '@storybook/vue3'
import profile_banner_placeholder from '@/assets/profile_banner_placeholder.png'
import AvFileUpload, { type AvFileUploadProps } from '@/components/interaction/files/AvFileUpload/AvFileUpload.vue'

/**
 * <h1 class="n1">File uploader - <code>AvFileUpload</code></h1>
 *
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvFileUpload</code> component provides a file upload interface supporting single or multiple file selection,
 *     drag and drop, file validation, deletion and preview modes.
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <ul>
 *   <li><span class="b2-regular">Default upload mode with title, description and hint.</span></li>
 *   <li><span class="b2-regular">Compact mode displaying selected files as file pills.</span></li>
 *   <li><span class="b2-regular">Preview mode for displaying selected or persisted files.</span></li>
 *   <li><span class="b2-regular">Optional <code>left</code> and <code>hint</code> slots for custom content.</span></li>
 *   <li><span class="b2-regular">Single or multiple file selection with drag and drop support.</span></li>
 *   <li><span class="b2-regular">Optional file-level and collection-level validation with error reporting.</span></li>
 * </ul>
 */
const meta: Meta<AvFileUploadProps<string>> = {
  title: 'Components/Interaction/Files/AvFileUpload',
  component: AvFileUpload as unknown as Meta['component'],
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    ariaLabel: { control: 'text' },
    modelValue: { control: false },
    fileName: { control: 'text' },
    accept: { control: 'text' },
    disabled: { control: 'boolean' },
    disabledTooltip: { control: 'text' },
    isPreview: { control: 'boolean' },
    deletable: { control: 'boolean' },
    enableMultiple: { control: 'boolean' },
    validateFile: { control: false },
    validateFiles: { control: false },
    getErrorMessage: { control: false },
    errorMessage: { control: 'text' },
    validMessage: { control: 'text' },
    compact: { control: 'boolean' },
    maxWidth: { control: 'text' },
    deleteButtonLabel: { control: 'text' },
    filePillDownloadPrefixLabel: { control: 'text' },
    filePillDeletePrefixLabel: { control: 'text' },
  },
  args: {
    id: undefined,
    title: 'Upload file',
    description: 'or drag and drop here',
    ariaLabel: '',
    modelValue: [],
    fileName: undefined,
    accept: undefined,
    disabled: false,
    disabledTooltip: undefined,
    isPreview: false,
    deletable: true,
    enableMultiple: false,
    validateFile: undefined,
    validateFiles: undefined,
    getErrorMessage: undefined,
    errorMessage: undefined,
    validMessage: undefined,
    maxWidth: undefined,
    deleteButtonLabel: 'Delete',
    compact: false,
    filePillDownloadPrefixLabel: 'Download',
    filePillDeletePrefixLabel: 'Delete',
  },
}

export default meta

type StoryArgs = AvFileUploadProps<string>

const Template: StoryFn<StoryArgs> = args => ({
  components: {
    AvFileUpload,
  },
  setup () {
    return { args }
  },
  template: `
    <AvFileUpload v-bind="args">
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
  errorMessage: 'This is an error message',
}

export const Success = Template.bind({})
Success.args = {
  validMessage: 'File uploaded successfully',
}

export const ValidationWithErrorMessage: StoryFn<StoryArgs> = args => ({
  components: {
    AvFileUpload,
  },
  setup () {
    const fileUpload = ref<{
      addFiles: (files: File[]) => Promise<void>
    }>()

    const validateFile: NonNullable<StoryArgs['validateFile']> = () => 'invalid-file-type'

    const getErrorMessage: NonNullable<StoryArgs['getErrorMessage']> = (error) => {
      if (error === 'invalid-file-type') {
        return 'This file type is not supported'
      }

      return undefined
    }

    onMounted(async () => {
      await fileUpload.value?.addFiles([
        new File(['invalid file'], 'Document.txt', {
          type: 'text/plain',
        }),
      ])
    })

    return {
      args,
      fileUpload,
      validateFile,
      getErrorMessage,
    }
  },
  template: `
    <AvFileUpload
      ref="fileUpload"
      v-bind="args"
      :validate-file="validateFile"
      :get-error-message="getErrorMessage"
    />
  `,
})

ValidationWithErrorMessage.args = {
  title: 'Upload file',
  description: 'The selected file is rejected by validation',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  disabledTooltip: 'File upload is disabled',
}

export const NotDeletable: StoryFn<StoryArgs> = args => ({
  components: {
    AvFileUpload,
  },
  setup () {
    const files = [
      new File(['required document'], 'RequiredDocument.pdf', {
        type: 'application/pdf',
      }),
    ]

    return {
      args,
      files,
    }
  },
  template: `
    <AvFileUpload
      v-bind="args"
      :model-value="files"
    />
  `,
})

NotDeletable.args = {
  deletable: false,
  title: 'Required document',
  description: 'This file cannot be deleted',
}

export const LeftSlot: StoryFn<StoryArgs> = args => ({
  components: {
    AvFileUpload,
  },
  setup () {
    return {
      args,
      profileBannerPlaceholder: profile_banner_placeholder,
    }
  },
  template: `
    <AvFileUpload v-bind="args">
      <template #left>
        <img
          :src="profileBannerPlaceholder"
          alt="Banner"
          style="height: 100%; width: 100%; object-fit: cover;"
        >
      </template>

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

LeftSlot.args = {}

export const Compact = Template.bind({})
Compact.args = {
  compact: true,
  title: 'Attach documents',
  description: '',
}

export const CompactWithFileName = Template.bind({})
CompactWithFileName.args = {
  compact: true,
  title: 'Attach documents',
  description: '',
  fileName: 'Document.pdf',
}

export const CompactMultipleFiles: StoryFn<StoryArgs> = args => ({
  components: {
    AvFileUpload,
  },
  setup () {
    const files = [
      new File(['document 1'], 'Document1.pdf', {
        type: 'application/pdf',
      }),
      new File(['document 2'], 'Document2.pdf', {
        type: 'application/pdf',
      }),
    ]

    return {
      args,
      files,
    }
  },
  template: `
    <AvFileUpload
      v-bind="args"
      :model-value="files"
    />
  `,
})

CompactMultipleFiles.args = {
  compact: true,
  enableMultiple: true,
  title: 'Attach documents',
  description: '',
}

export const Preview = Template.bind({})
Preview.args = {
  isPreview: true,
  fileName: 'Document.pdf',
  title: 'Persisted document',
  description: 'Read-only preview of a persisted file',
  deletable: false,
}

export const PreviewWithFile: StoryFn<StoryArgs> = args => ({
  components: {
    AvFileUpload,
  },
  setup () {
    const file = new File(['document'], 'Document.pdf', {
      type: 'application/pdf',
    })

    return {
      args,
      file,
    }
  },
  template: `
    <AvFileUpload
      v-bind="args"
      :model-value="[file]"
    />
  `,
})

PreviewWithFile.args = {
  isPreview: true,
  title: 'Selected file',
  description: 'Preview of a selected file',
  deletable: true,
}

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
 *     or by dragging and dropping a file in the area.
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
    title: 'Add a new',
    description: 'or drag and drop here',
    deleteButtonLabel: 'Delete',
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
      <span class="b2-regular">Add a new</span>
      <span class="b2-bold">trace of type pdf file</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5Mo • </span>
        Images: <span class="caption-bold">5Mo • </span>
        Audio: <span class="caption-bold">5Mo • </span>
        Vidéo: <span class="caption-bold">50Mo • </span>
        Application: <span class="caption-bold">10Mo</span>
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
  validMessage: 'This is a success message'
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

      <span class="b2-regular">Add a new</span>
      <span class="b2-bold">trace of type pdf file</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5Mo • </span>
        Images: <span class="caption-bold">5Mo • </span>
        Audio: <span class="caption-bold">5Mo • </span>
        Vidéo: <span class="caption-bold">50Mo • </span>
        Application: <span class="caption-bold">10Mo</span>
      </template>
    </AvFileUpload>
  `,
})

export const LeftSlot = LeftSlotTemplate.bind({})
LeftSlot.args = {
  leftImageSrc: profile_banner_placeholder
}

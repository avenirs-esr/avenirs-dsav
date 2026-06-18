import type { PropType } from 'vue'

export const AvFileUploadStub = defineComponent({
  name: 'AvFileUpload',
  props: {
    id: {
      type: String,
      required: false
    },
    ariaLabel: {
      type: String,
      required: false
    },
    accept: {
      type: [String, Array<string>],
      required: false
    },
    maxFileSizeMb: {
      type: Number,
      required: false
    },
    error: {
      type: String,
      required: false
    },
    validMessage: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    modelValue: {
      type: File as PropType<File | null>,
      required: false
    },
    maxWidth: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    deleteButtonLabel: {
      type: String,
      required: false
    },
    fileName: {
      type: String,
      required: false
    },
  },
  emits: [
    'update:modelValue',
    'update:validMessage',
    'update:error',
    'change',
    'deleteFile',
    'acceptTypeError',
    'fileSizeError'
  ],
  template: `
    <div>
      <slot name="left"></slot>
      <input
        class="file-input"
        type="file"
        @change="e => $emit('change', e.target.files)"
      />
      <button
        class="error-trigger"
        @click="$emit('acceptTypeError')"
      >
        Trigger Error
      </button>
      <button
        class="error-trigger"
        @click="$emit('fileSizeError')"
      >
        Trigger File Size Error
      </button>
      <button data-testid="delete-file-button" @click="$emit('deleteFile')">Delete File</button>
    </div>
  `
})

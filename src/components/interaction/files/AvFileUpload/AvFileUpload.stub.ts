import type { PropType } from 'vue'
import { AvInteractivePropsStub } from '@/types/interfaces.stub'

export const AvFileUploadStub = defineComponent({
  name: 'AvFileUpload',
  props: {
    ...AvInteractivePropsStub,
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
      type: [Number, Function],
      required: false
    },
    maxFiles: {
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
    modelValue: {
      type: Array as PropType<File[] | null>,
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
    countLabel: {
      type: String,
      required: false
    },
    compact: {
      type: Boolean,
      required: false
    },
    enableMultiple: {
      type: Boolean,
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
    'fileSizeError',
    'maxFilesError'
  ],
  template: `
    <div>
      <slot name="left"></slot>
      <input
        class="file-input"
        type="file"
        :multiple="enableMultiple"
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
      <button
        class="error-trigger"
        @click="$emit('maxFilesError')"
      >
        Trigger Max Files Error
      </button>
      <button data-testid="delete-file-button" @click="$emit('deleteFile')">Delete File</button>
    </div>
  `
})

import type { PropType } from 'vue'
import type { AvFileUploadBeforeAdd } from '@/components/interaction/files/AvFileUpload/AvFileUpload.types'
import { vi } from 'vitest'
import { AvInteractivePropsStub } from '@/types/interfaces.stub'

export const AvFileUploadStub = defineComponent({
  name: 'AvFileUpload',
  props: {
    ...AvInteractivePropsStub,
    id: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    ariaLabel: {
      type: String,
      required: false,
      default: '',
    },
    modelValue: {
      type: Array as PropType<File[]>,
      required: false,
      default: () => [],
    },
    fileName: {
      type: String,
      required: false,
    },
    accept: {
      type: [String, Array] as PropType<string | string[]>,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    isPreview: {
      type: Boolean,
      required: false,
      default: false,
    },
    deletable: {
      type: Boolean,
      required: false,
      default: true,
    },
    enableMultiple: {
      type: Boolean,
      required: false,
      default: false,
    },
    beforeAdd: {
      type: Function as PropType<AvFileUploadBeforeAdd>,
      required: false,
    },
    errorMessage: {
      type: String,
      required: false,
    },
    validMessage: {
      type: String,
      required: false,
    },
    compact: {
      type: Boolean,
      required: false,
      default: false,
    },
    maxWidth: {
      type: String,
      required: false,
    },
    deleteButtonLabel: {
      type: String,
      required: false,
      default: 'Delete',
    },
    filePillDownloadPrefixLabel: {
      type: String,
      required: false,
      default: 'Download',
    },
    filePillDeletePrefixLabel: {
      type: String,
      required: false,
      default: 'Delete',
    },
  },
  emits: [
    'update:modelValue',
    'update:errorMessage',
    'update:validMessage',
    'click',
    'change',
    'deleteFiles',
    'filesDeleted',
  ],
  setup (props, { emit, expose }) {
    const realId = props.id ?? 'file-upload-stub'

    expose({
      addFiles: vi.fn(),
      deleteFiles: vi.fn(),
    })

    return {
      realId,
      emit,
    }
  },
  template: `
    <div class="av-file-upload-stub">
      <slot name="left"></slot>

      <input
        v-if="!isPreview"
        :id="realId"
        class="file-input"
        type="file"
        :multiple="enableMultiple"
        :disabled="disabled"
        :accept="Array.isArray(accept) ? accept.join(',') : accept"
        @click="emit('click', $event)"
        @change="emit('change', Array.from($event.target.files ?? []))"
      >

      <button
        class="error-trigger"
        type="button"
        @click="emit('filesRejected', 'stub-error')"
      >
        Trigger Error
      </button>

      <button
        v-if="deletable && !disabled && modelValue.length"
        data-testid="delete-file-button"
        type="button"
        @click="emit('deleteFiles', modelValue)"
      >
        {{ deleteButtonLabel }}
      </button>

      <slot name="hint"></slot>
    </div>
  `
})

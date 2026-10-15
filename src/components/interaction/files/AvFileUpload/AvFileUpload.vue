<script setup lang="ts">
import type { Slot } from 'vue'
import type { AvFileUploadContext } from '@/components/interaction/files/AvFileUpload/AvFileUploadContext'
import type { AvInteractiveProps } from '@/types/interfaces.types'
import AvFileUploadCompact from '@/components/interaction/files/AvFileUpload/AvFileUploadCompact.vue'
import { AvFileUploadContextKey } from '@/components/interaction/files/AvFileUpload/AvFileUploadContext'
import AvFileUploadDefault from '@/components/interaction/files/AvFileUpload/AvFileUploadDefault.vue'
import AvFileUploadDeleteModal from '@/components/interaction/files/AvFileUpload/AvFileUploadDeleteModal.vue'
import AvFileUploadFilePills from '@/components/interaction/files/AvFileUpload/AvFileUploadFilePills.vue'
import { useAvFileUploadDelete } from '@/components/interaction/files/AvFileUpload/composables/useAvFileUploadDelete'
import { useAvFileUploadFiles } from '@/components/interaction/files/AvFileUpload/composables/useAvFileUploadFiles'
import { getAvTooltipContent, isAvTooltipEnabled } from '@/components/overlay/tooltips/AvTooltip/utils'

/**
 * AvFileUpload component props.
 */
export interface AvFileUploadProps extends AvInteractiveProps {
  /**
   * Unique identifier for the file upload component.
   * If not specified, a random ID is generated.
   * @default `file-upload-${crypto.randomUUID()}`
   */
  id?: string

  /**
   * ARIA label for file upload button.
   * @default ''
   */
  ariaLabel?: string

  /**
   * Accepted file types, specified as a string (like HTML `accept` attribute)
   * or an array of strings (which will be transformed into a string).
   * @default undefined
   */
  accept?: string | string[]

  /**
   * Maximum allowed file size in megabytes, or a function returning the limit for a given file.
   * @default undefined
   */
  maxFileSizeMb?: number | ((file: File) => number | undefined)

  /**
   * Maximum number of files allowed (only applies when `enableMultiple` is true).
   * @default undefined
   */
  maxFiles?: number

  /**
   * Error message to be displayed in case of upload problem.
   * @default ''
   */
  error?: string

  /**
   * Message indicating that the uploaded file is valid.
   * @default ''
   */
  validMessage?: string

  /**
   * Array of selected files.
   * @default null
   */
  modelValue?: File[] | null

  /**
   * Max width of the component.
   * @default undefined
   */
  maxWidth?: string

  /**
   * Title of the file upload section.
   */
  title: string

  /**
   * Description of the file upload section.
   */
  description: string

  /**
   * Delete button label.
   * @default 'Remove'
   */
  deleteButtonLabel?: string

  /**
   * Name of the file to display as default (e.g., for server-persisted uploads).
   * @default undefined
   */
  fileName?: string

  /**
   * Label for the file count display. Displayed when multiple files are enabled.
   * You do not need to include the file count in this label; it will
   * be automatically prefixed with the number of selected files.
   * @example 'files selected'
   */
  countLabel?: string

  /**
   * Display in compact mode with file pills.
   * @default false
   */
  compact?: boolean

  /**
   * Enable multiple file uploads.
   * @default false
   */
  enableMultiple?: boolean

  /**
   * Prefix for the download button label in AvFilePill. If not provided, the default label will be "Download {name}".
   * @default 'Download'
   */
  filePillDownloadPrefixLabel?: string

  /**
   * Prefix for the delete button label in AvFilePill. If not provided, the default label will be "Delete {name}".
   * @default 'Delete'
   */
  filePillDeletePrefixLabel?: string

  /**
   * Ask for confirmation before deleting selected files.
   * @default false
   */
  confirmDelete?: boolean

  /**
   * Title for the confirmation modal when deleting files.
   * @default 'Are you sure you want to delete this(these) file(s)?'
   */
  confirmDeleteModalTitle?: string

  /**
   * Label for the confirm button in the delete confirmation modal.
   * @default 'Delete'
   */
  confirmDeleteModalConfirmLabel?: string

  /**
   * Label for the cancel button in the delete confirmation modal.
   * @default 'Cancel'
   */
  confirmDeleteModalCancelLabel?: string
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<AvFileUploadProps>(), {
  id: undefined,
  ariaLabel: '',
  accept: undefined,
  maxFileSizeMb: undefined,
  maxFiles: undefined,
  validMessage: '',
  error: '',
  maxWidth: 'none',
  disabled: false,
  deleteButtonLabel: 'Remove',
  confirmDelete: false,
  fileName: undefined,
  compact: false,
  enableMultiple: false,
  filePillDownloadPrefixLabel: 'Download',
  filePillDeletePrefixLabel: 'Delete',
  confirmDeleteModalTitle: 'Are you sure you want to delete this(these) file(s)?',
  confirmDeleteModalConfirmLabel: 'Delete',
  confirmDeleteModalCancelLabel: 'Cancel',
})

const emit = defineEmits<{
  /**
   * Event emitted when the model value is updated.
   * @param payload The updated files array (File[] or null).
   */
  (e: 'update:modelValue', payload: File[] | null): void

  /**
   * Event emitted when the validMessage is updated.
   * @param payload The updated message (string or null).
   */
  (e: 'update:validMessage', payload: string | null): void

  /**
   * Event emitted when the error is updated.
   * @param payload The updated error message (string or null).
   */
  (e: 'update:error', payload: string | null): void

  /**
   * Event emitted when the selected file(s) change.
   * @param payload The new list of selected files (FileList or File[]).
   */
  (e: 'change', payload: FileList | File[]): void

  /**
   * Event emitted when a file is deleted.
   * @param payload Optional: the File object or index that was deleted.
   */
  (e: 'deleteFile', payload?: File | number): void

  /**
   * Event emitted when a file of wrong type is dropped or selected.
   */
  (e: 'acceptTypeError'): void

  /**
   * Event emitted when a dropped or selected file exceeds the configured size limit.
   */
  (e: 'fileSizeError'): void

  /**
   * Event emitted when the number of files exceeds the configured limit.
   */
  (e: 'maxFilesError'): void
}>()

defineSlots<{
  /**
   * Slot for the hint description.
   */
  hint?: Slot

  /**
   * Slot for the left content.
   */
  left?: Slot

  /**
   * Slot for the confirm delete modal body.
   */
  confirmDeleteModalBody?: Slot<{ files: (File | { name: string })[] }>

  /**
   * Default slot for global content between the left and right icons.
   */
  default?: Slot
}>()

const modelValue = defineModel<File[] | null>()

const { id, accept, maxFileSizeMb, ariaLabel, disabled, validMessage, error } = toRefs(props)
const realId = computed(() => id.value ?? `file-upload-${crypto.randomUUID()}`)

const acceptTypes = computed(() => {
  if (Array.isArray(accept.value)) {
    return accept.value.join(',')
  }
  return accept.value
})

const {
  isDragging,
  onChange,
  onDragOver,
  onDragLeave,
  onDrop,
} = useAvFileUploadFiles({
  acceptTypes,
  maxFileSizeMb,
  enableMultiple: toRef(props, 'enableMultiple'),
  maxFiles: toRef(props, 'maxFiles'),
  disabled,
  modelValue,
  emitChange: files => emit('change', files),
  emitAcceptTypeError: () => emit('acceptTypeError'),
  emitFileSizeError: () => emit('fileSizeError'),
  emitMaxFilesError: () => emit('maxFilesError'),
})

const uploadLabelAttrs = computed(() => {
  return {
    'for': realId.value,
    'class': [
      'av-upload-group',
      {
        'av-upload-group--error': error.value,
        'av-upload-group--valid': validMessage.value,
        'av-upload-group--disabled': disabled.value,
        'drag-over': isDragging.value,
      },
    ],
    'aria-label': ariaLabel.value,
    'onDragover': onDragOver,
    'onDragleave': onDragLeave,
    'onDrop': onDrop,
  }
})

const {
  isDeleteConfirmationOpen,
  pendingDeleteFiles,
  onClear,
  cancelDelete,
  confirmDelete,
} = useAvFileUploadDelete({
  modelValue,
  confirmDelete: toRef(props, 'confirmDelete'),
  fileName: toRef(props, 'fileName'),
  emitDeleteFile: file => emit('deleteFile', file),
  emitValidMessageUpdate: message => emit('update:validMessage', message),
  emitErrorUpdate: error => emit('update:error', error),
  emitChange: files => emit('change', files),
})

const context: AvFileUploadContext = {
  props,
  modelValue,
  realId: realId.value,
  acceptTypes,
  uploadLabelAttrs,
  onChange,
  onClear,
}

provide(AvFileUploadContextKey, context)

defineExpose({
  pendingDeleteFilesCount: computed(() => pendingDeleteFiles.value.length)
})
</script>

<template>
  <AvTooltip
    :content="getAvTooltipContent({ disabled, disabledTooltip })"
    :disabled="!isAvTooltipEnabled({ disabled, disabledTooltip })"
    :force-focusable="isAvTooltipEnabled({ disabled, disabledTooltip })"
  >
    <AvFileUploadFilePills />

    <AvFileUploadCompact v-if="compact">
      <template #hint>
        <slot name="hint" />
      </template>
    </AvFileUploadCompact>
    <AvFileUploadDefault v-else>
      <template #left>
        <slot name="left" />
      </template>
      <template #hint>
        <slot name="hint" />
      </template>
    </AvFileUploadDefault>
  </AvTooltip>

  <AvFileUploadDeleteModal
    :opened="isDeleteConfirmationOpen"
    :pending-delete-files="pendingDeleteFiles"
    @close="cancelDelete"
    @confirm="confirmDelete"
  >
    <template
      v-if="$slots.confirmDeleteModalBody"
      #default="{ files }"
    >
      <slot
        name="confirmDeleteModalBody"
        :files="files"
      />
    </template>
  </AvFileUploadDeleteModal>
</template>

<style lang="scss" scoped>
:deep(.av-upload) {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
}

:deep(.av-upload-group) {
  cursor: pointer;
}

:deep(.av-upload-group--disabled) {
  cursor: not-allowed;
}
</style>

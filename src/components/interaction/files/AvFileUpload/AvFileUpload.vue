<script setup lang="ts" generic="TError extends string = string">
import type { ComputedRef, Slot } from 'vue'
import type { AvMessageProps } from '@/components/base'
import type { AvFileUploadFilesRejections, AvFileUploadProps } from '@/components/interaction/files/AvFileUpload/AvFileUpload.types'
import { getFilesToDelete, getValidationErrorMessages, useFileDropZone, validateFilesToAdd } from '@/components/interaction/files/AvFileUpload/AvFileUpload.utils'
import AvFileUploadCompact from '@/components/interaction/files/AvFileUpload/AvFileUploadCompact.vue'
import { AvFileUploadContextKey } from '@/components/interaction/files/AvFileUpload/AvFileUploadContext'
import AvFileUploadDefault from '@/components/interaction/files/AvFileUpload/AvFileUploadDefault.vue'
import { getAvTooltipContent, isAvTooltipEnabled } from '@/components/overlay/tooltips/AvTooltip/utils'

defineOptions({
  inheritAttrs: false,
})

const {
  id = `file-upload-${crypto.randomUUID()}`,
  title,
  description,
  ariaLabel = '',
  fileName,
  accept,
  disabled = false,
  isPreview: _isPreview = false,
  deletable = true,
  enableMultiple = false,
  validateFile,
  validateFiles,
  getErrorMessage,
  errorMessage,
  validMessage,
  compact = false,
  maxWidth,
  deleteButtonLabel = 'Delete',
  filePillDownloadPrefixLabel = 'Download',
  filePillDeletePrefixLabel = 'Delete',
} = defineProps<AvFileUploadProps<TError>>()

const emit = defineEmits<{
  /**
   * Event emitted when the file input is clicked.
   */
  (e: 'click', event: MouseEvent): void

  /**
   * Event emitted when the selected file(s) change.
   */
  (e: 'change', files: File[]): void

  /**
   * Event emitted when file validation rejects the selection or one or more files.
   *
   * When `enableMultiple` is `false`, only the first validation error is emitted.
   *
   * @example
   * ```ts
   * function handleFilesRejected(rejections: AvFileUploadFilesRejections<MyError>) {
   *   if (typeof rejections === 'string') {
   *     // Global rejection
   *     return
   *   }
   *
   *   // File-specific rejections
   * }
   * ```
   */
  (e: 'filesRejected', rejections: AvFileUploadFilesRejections<TError>): void

  /**
   * Event emitted when deletion of one or more files is requested.
   */
  (e: 'deleteFiles', files: File[]): void

  /**
   * Event emitted after one or more files have been deleted.
   */
  (e: 'filesDeleted', files: File[]): void

  /**
   * Event emitted when the errorMessage is updated.
   */
  (e: 'update:errorMessage', message?: string): void

  /**
   * Event emitted when the validMessage is updated.
   */
  (e: 'update:validMessage', message?: string): void
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
}>()

const modelValue = defineModel<File[]>({
  default: () => [],
})

const validationErrorMessages = ref<string[]>()

const acceptTypes = computed(() => Array.isArray(accept) ? accept.join(',') : accept)
const isPreview = computed(() => _isPreview || (!compact && !enableMultiple && modelValue.value.length > 0))
const canAddFiles = computed(() => !disabled && !isPreview.value)
const canDeleteFiles = computed(() => !disabled && deletable && modelValue.value.length > 0)
const hasExternalMessage = computed(() => errorMessage !== undefined || validMessage !== undefined)

function rejectFiles (rejections: AvFileUploadFilesRejections<TError>) {
  if (!hasExternalMessage.value) {
    validationErrorMessages.value = getValidationErrorMessages(rejections, getErrorMessage)
  }
  emit('filesRejected', rejections)
}

/**
 * Validates and adds the provided files.
 *
 * A global error from `validateFiles` rejects the entire selection.
 * In single-file mode, any validation error prevents the file from being added.
 * In multiple-file mode, files with validation errors are rejected individually while the others are added.
 *
 * See `validateFile` and `validateFiles` for validation rules and rejection formats.
 */
async function addFiles (files: File[]) {
  if (!canAddFiles.value || !files.length) {
    return
  }

  validationErrorMessages.value = undefined

  const filesToBeAdded = enableMultiple ? files : files.slice(0, 1)
  const { globalError, fileRejections } = await validateFilesToAdd(filesToBeAdded, enableMultiple, validateFile, validateFiles)

  if (globalError) {
    rejectFiles(globalError)
    return
  }

  const acceptedFiles = filesToBeAdded.filter(file => !fileRejections.has(file))

  if (acceptedFiles.length) {
    const selectedFiles = enableMultiple
      ? [...modelValue.value, ...acceptedFiles]
      : acceptedFiles

    modelValue.value = selectedFiles
    emit('change', selectedFiles)
  }

  if (fileRejections.size) {
    rejectFiles(Array.from(fileRejections, ([file, errors]) => ({ file, errors })))
  }
}

/**
 * Deletes the specified files.
 *
 * Accepts files or their indexes. When no files are specified, all files are deleted.
 * Clears validation messages and emits `filesDeleted` and `change` after the deletion.
 */
function deleteFiles (files?: (File | number)[]) {
  if (!canDeleteFiles.value) {
    return
  }

  const { toBeDeleted, remainingFiles } = getFilesToDelete(modelValue.value, files)

  if (!toBeDeleted.length) {
    return
  }

  modelValue.value = remainingFiles
  validationErrorMessages.value = undefined

  emit('update:validMessage', undefined)
  emit('update:errorMessage', undefined)
  emit('filesDeleted', toBeDeleted)
  emit('change', remainingFiles)
}

async function onChange (event: Event) {
  const input = event.target as HTMLInputElement
  input.value = ''
  await addFiles(Array.from(input.files ?? []))
}

function onDeleteFiles (filesIdx?: number[]) {
  if (!canDeleteFiles.value) {
    return
  }

  const { toBeDeleted } = getFilesToDelete(modelValue.value, filesIdx)

  if (toBeDeleted.length) {
    emit('deleteFiles', toBeDeleted)
  }
}

const { isDragging, dropHandlers } = useFileDropZone(canAddFiles, addFiles)

const uploadLabelAttrs = computed(() => ({
  'for': id,
  'class': [
    'av-upload-group',
    {
      'av-upload-group--disabled': disabled,
      'av-upload-group--error': errorMessage,
      'av-upload-group--valid': validMessage,
      'drag-over': isDragging.value,
    },
  ],
  'aria-label': ariaLabel,
  ...dropHandlers,
}))
const messageAttrs: ComputedRef<AvMessageProps | undefined> = computed(() => {
  if (hasExternalMessage.value) {
    return {
      type: errorMessage !== undefined ? 'error' : 'success',
      message: errorMessage ?? validMessage,
    }
  }

  if (validationErrorMessages.value?.length) {
    return {
      type: 'error',
      message: validationErrorMessages.value,
    }
  }

  return undefined
})

provide(AvFileUploadContextKey, {
  id: toRef(() => id),
  title: toRef(() => title),
  description: toRef(() => description),
  modelValue,
  fileName: toRef(() => fileName),
  disabled: toRef(() => disabled),
  enableMultiple: toRef(() => enableMultiple),
  maxWidth: toRef(() => maxWidth),
  deleteButtonLabel: toRef(() => deleteButtonLabel),
  filePillDownloadPrefixLabel: toRef(() => filePillDownloadPrefixLabel),
  filePillDeletePrefixLabel: toRef(() => filePillDeletePrefixLabel),
  acceptTypes,
  isPreview,
  canAddFiles,
  canDeleteFiles,
  uploadLabelAttrs,
  messageAttrs,
})

defineExpose({
  addFiles,
  deleteFiles,
})
</script>

<template>
  <AvTooltip
    :content="getAvTooltipContent({ disabled, disabledTooltip })"
    :disabled="!isAvTooltipEnabled({ disabled, disabledTooltip })"
    :force-focusable="isAvTooltipEnabled({ disabled, disabledTooltip })"
  >
    <AvFileUploadCompact
      v-if="compact"
      @click="emit('click', $event)"
      @change="onChange"
      @delete-files="filesIdx => onDeleteFiles([filesIdx])"
    >
      <template #hint>
        <slot name="hint" />
      </template>
    </AvFileUploadCompact>

    <AvFileUploadDefault
      v-else
      @click="emit('click', $event)"
      @change="onChange"
      @delete-files="onDeleteFiles"
    >
      <template #left>
        <slot name="left" />
      </template>

      <template #hint>
        <slot name="hint" />
      </template>
    </AvFileUploadDefault>
  </AvTooltip>
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

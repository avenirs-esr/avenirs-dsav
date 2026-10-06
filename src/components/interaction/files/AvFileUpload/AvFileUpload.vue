<script setup lang="ts" generic="TError extends string = string">
import type { ComputedRef, Slot } from 'vue'
import type { AvMessageProps } from '@/components/base'
import type { AvFileUploadErrorMessageGetter, AvFileUploadFilesRejections, AvFileUploadFilesValidator, AvFileUploadFileValidator } from '@/components/interaction/files/AvFileUpload/AvFileUpload.types'
import type { AvInteractiveProps } from '@/types'
import { getFilesToDelete, getValidationErrorMessages, useFileDropZone, validateFilesToAdd } from '@/components/interaction/files/AvFileUpload/AvFileUpload.utils'
import AvFileUploadCompact from '@/components/interaction/files/AvFileUpload/AvFileUploadCompact.vue'
import { AvFileUploadContextKey } from '@/components/interaction/files/AvFileUpload/AvFileUploadContext'
import AvFileUploadDefault from '@/components/interaction/files/AvFileUpload/AvFileUploadDefault.vue'
import { getAvTooltipContent, isAvTooltipEnabled } from '@/components/overlay/tooltips/AvTooltip/utils'

/**
 * AvFileUpload component props.
 */
export interface AvFileUploadProps<TError extends string = string> extends AvInteractiveProps {
  /**
   * Unique identifier for the file upload component.
   * If not specified, a random ID is generated.
   *
   * @default `file-upload-${crypto.randomUUID()}`
   */
  id?: string

  /**
   * Title of the file upload section.
   */
  title: string

  /**
   * Description of the file upload section.
   */
  description: string

  /**
   * ARIA label for file upload button.
   *
   * @default ''
   */
  ariaLabel?: string

  /**
   * Currently selected files.
   * With `enableMultiple`, newly selected files are appended to the list; otherwise, they replace the current selection.
   *
   * @default []
   */
  modelValue?: File[]

  /**
   * File name to display instead of the name of the selected file(s).
   *
   * @default undefined
   */
  fileName?: string

  /**
   * Accepted file types, specified as a string (like HTML `accept` attribute) or an array of strings (which will be transformed into a string).
   *
   * @default undefined
   */
  accept?: string | string[]

  /**
   * Whether the file upload is disabled.
   * When disabled, files cannot be added or deleted.
   *
   * @default false
   */
  disabled?: boolean

  /**
   * Displays the current file(s) in preview mode without allowing additional files to be added.
   * In single-file, non-compact mode, preview mode is automatically enabled once a file is selected.
   *
   * @default false
   */
  isPreview?: boolean

  /**
   * Whether files can be deleted.
   * When false, files can still be added but existing files cannot be deleted.
   *
   * @default true
   */
  deletable?: boolean

  /**
   * Enable multiple file uploads.
   * When enabled, newly selected files are appended to the existing files.
   *
   * @default false
   */
  enableMultiple?: boolean

  /**
   * Validates each file individually.
   * Can be used alone or together with `validateFiles` to apply file-level validation in addition to collection-level validation.
   *
   * @default undefined
   */
  validateFile?: AvFileUploadFileValidator<TError>

  /**
   * Validates the files being added as a collection.
   * A single error rejects the whole selection and skips `validateFile`.
   *
   * @default undefined
   */
  validateFiles?: AvFileUploadFilesValidator<TError>

  /**
   * Function to get the error message associated with a validation error.
   * The returned message is displayed automatically for validation errors when neither `errorMessage` nor `validMessage` is defined.
   *
   * @default undefined
   */
  getErrorMessage?: AvFileUploadErrorMessageGetter<TError>

  /**
   * Error message to display.
   * When defined, takes precedence over the message returned by `getErrorMessage`.
   *
   * @default undefined
   */
  errorMessage?: string

  /**
   * Success message to display.
   * When defined, takes precedence over the message returned by `getErrorMessage`.
   *
   * @default undefined
   */
  validMessage?: string

  /**
   * Display in compact mode with file pills.
   *
   * @default false
   */
  compact?: boolean

  /**
   * Max width of the component.
   *
   * @default undefined
   */
  maxWidth?: string

  /**
   * Delete button label.
   *
   * @default 'Delete'
   */
  deleteButtonLabel?: string

  /**
   * Prefix for the download button label in `AvFilePill`.
   *
   * @default 'Download'
   */
  filePillDownloadPrefixLabel?: string

  /**
   * Prefix for the delete button label in `AvFilePill`.
   *
   * @default 'Delete'
   */
  filePillDeletePrefixLabel?: string
}

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

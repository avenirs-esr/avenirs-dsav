<script setup lang="ts">
import { nextTick, type Slot } from 'vue'
import AvIcon from '@/components/base/AvIcon/AvIcon.vue'
import AvButton from '@/components/interaction/buttons/AvButton/AvButton.vue'
import { MDI_ICONS } from '@/tokens'

/**
 * AvFileUpload component props.
 */
export interface AvFileUploadProps {
  /**
   * Unique identifier for the file upload component.
   * If not specified, a random ID is generated.
   *
   * @default `file-upload-${crypto.randomUUID()}`
   */
  id?: string

  /**
   * ARIA label for file upload button.
   *
   * @default ''
   */
  ariaLabel?: string

  /**
   * Accepted file types, specified as a string (like HTML `accept` attribute)
   * or an array of strings (which will be transformed into a string).
   *
   * @default undefined
   */
  accept?: string | string[]

  /**
   * Maximum allowed file size in megabytes.
   *
   * @default undefined
   */
  maxFileSizeMb?: number

  /**
   * Error message to be displayed in case of upload problem.
   *
   * @default ''
   */
  error?: string

  /**
   * Message indicating that the uploaded file is valid.
   *
   * @default ''
   */
  validMessage?: string

  /**
   * Whether the file upload input is disabled.
   *
   * @default false
   */
  disabled?: boolean

  /**
   * Array of selected files.
   *
   * @default null
   */
  modelValue?: File[] | null

  /**
   * Max width of the component.
   *
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
   *
   * @default 'Remove'
   */
  deleteButtonLabel?: string

  /**
   * Name of the file to display as default (e.g., for server-persisted uploads).
   *
   * @default undefined
   */
  fileName?: string

  /**
   * Display in compact mode with file pills.
   *
   * @default false
   */
  compact?: boolean

  /**
   * Enable multiple file uploads.
   *
   * @default false
   */
  enableMultiple?: boolean
}

defineOptions({
  inheritAttrs: false,
})

const {
  id,
  ariaLabel = '',
  accept = undefined,
  maxFileSizeMb = undefined,
  validMessage = '',
  error = '',
  maxWidth = 'none',
  disabled = false,
  deleteButtonLabel = 'Remove',
  title,
  description,
  fileName,
  compact = false,
  enableMultiple = false,
} = defineProps<AvFileUploadProps>()

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
   * Default slot for global content between the left and right icons.
   */
  default?: Slot
}>()

const modelValue = defineModel<File[] | null>()

const realId = id ?? `file-upload-${crypto.randomUUID()}`

const acceptTypes = computed(() => {
  if (Array.isArray(accept)) {
    return accept.join(',')
  }
  return accept
})

const isDragging = ref(false)

function isFileAccepted (file: File): boolean {
  const acceptValue = acceptTypes.value
  if (!acceptValue) {
    return true
  }

  const acceptedTypes = acceptValue.split(',').map(type => type.trim().toLowerCase())

  return acceptedTypes.some((type) => {
    if (type.startsWith('.')) {
      return file.name.toLowerCase().endsWith(type)
    }
    else if (type.includes('/')) {
      return file.type === type || file.type.startsWith(`${type.split('/')[0]}/`)
    }
    return false
  })
}

function isFileSizeAccepted (file: File): boolean {
  if (maxFileSizeMb === undefined || maxFileSizeMb <= 0) {
    return true
  }

  return file.size <= maxFileSizeMb * 1024 * 1024
}

async function onDrop (event: DragEvent) {
  event.preventDefault()
  isDragging.value = false

  if (disabled || !event.dataTransfer?.files?.length) {
    return
  }

  const acceptedTypeFiles = Array.from(event.dataTransfer.files).filter(isFileAccepted)
  const acceptedFiles = acceptedTypeFiles.filter(isFileSizeAccepted)
  await nextTick()

  if (acceptedFiles.length) {
    if (enableMultiple) {
      modelValue.value = [...(modelValue.value ?? []), ...acceptedFiles]
    }
    else {
      modelValue.value = [acceptedFiles[0]!]
    }
    emit('change', acceptedFiles)
  }
  else if (acceptedTypeFiles.length) {
    emit('fileSizeError')
  }
  else {
    emit('acceptTypeError')
  }
}

function onDragOver (event: DragEvent) {
  event.preventDefault()
  if (!disabled) {
    isDragging.value = true
  }
}

function onDragLeave () {
  isDragging.value = false
}

function onChange ($event: InputEvent) {
  const fileList = ($event.target as HTMLInputElement).files
  const selectedFile = fileList?.[0]

  if (selectedFile && !isFileAccepted(selectedFile)) {
    emit('acceptTypeError')
    return
  }

  if (selectedFile && !isFileSizeAccepted(selectedFile)) {
    emit('fileSizeError')
    return
  }

  if (!fileList || !fileList.length) {
    return
  }

  if (enableMultiple) {
    modelValue.value = [...(modelValue.value ?? []), ...Array.from(fileList)]
  }
  else {
    modelValue.value = [fileList[0]!]
  }
  emit('change', fileList)
}

const isPreview = computed(() => !!fileName || (modelValue.value && modelValue.value.length > 0))

const uploadLabelAttrs = computed(() => {
  return {
    'for':
    realId,
    'class':
    [
      'av-upload-group',
      {
        'av-upload-group--error': error,
        'av-upload-group--valid': validMessage,
        'av-upload-group--disabled': disabled,
        'drag-over': isDragging.value,
      },
    ],
    'aria-label':
    ariaLabel,
    'onDragover':
    onDragOver,
    'onDragleave':
    onDragLeave,
    'onDrop':
    onDrop,
  }
})

function clearFile (file: File) {
  const newFiles = (modelValue.value ?? []).filter(f => f !== file)
  modelValue.value = newFiles.length > 0 ? newFiles : null
}

function clearFileByIndex (index: number) {
  const newFiles = (modelValue.value ?? []).filter((_, i) => i !== index)
  modelValue.value = newFiles.length > 0 ? newFiles : null
}

function onClear (file?: File | number) {
  if (file !== undefined) {
    if (typeof file === 'number') {
      clearFileByIndex(file)
    }
    else {
      clearFile(file)
    }
  }
  else {
    modelValue.value = null
  }
  emit('deleteFile', file)
  emit('update:validMessage', null)
  emit('update:error', null)
  emit('change', [] as unknown as FileList)
}
</script>

<template>
  <div
    v-if="compact"
    class="av-compact-upload"
  >
    <div
      v-if="(modelValue && modelValue.length > 0) || fileName"
      class="av-compact-files-list av-col av-gap-xxs av-mb-xs"
    >
      <div
        v-for="(name, idx) in modelValue && modelValue.length > 0 ? modelValue.map((f: File) => f.name) : [fileName]"
        :key="`${name}-${idx}`"
        class="av-compact-file-pill av-row av-align-center av-gap-xs av-p-xs av-radius-md av-border-width-sm av-border-style-solid av-border-stroke av-background-card"
      >
        <AvIcon
          :size="1.5"
          :name="MDI_ICONS.ATTACH_FILE"
          color="var(--icon)"
        />
        <span class="b2-regular av-ellipsis av-compact-file-name">{{ name }}</span>
        <AvButton
          v-if="!disabled"
          :label="`Delete ${name}`"
          :icon="MDI_ICONS.TRASH_CAN_OUTLINE"
          icon-only
          small
          @click="() => onClear(modelValue && modelValue.length > 0 ? modelValue[idx] : idx)"
        />
      </div>
    </div>

    <label
      v-bind="uploadLabelAttrs"
      class="av-compact-add-pill av-row av-align-center av-gap-xs av-p-xs av-radius-md av-border-width-sm av-border-style-dashed av-border-stroke"
    >
      <AvIcon
        :size="1.5"
        :name="MDI_ICONS.ATTACHMENT_PLUS"
        color="var(--dark-background-primary1)"
      />
      <span class="b2-regular">{{ title }}</span>
      <input
        :id="realId"
        class="av-upload"
        type="file"
        :aria-describedby="error || validMessage ? `${realId}-desc` : undefined"
        v-bind="$attrs"
        :disabled="disabled"
        :aria-disabled="disabled"
        :accept="acceptTypes"
        :multiple="enableMultiple"
        @change="onChange($event as InputEvent)"
      >
    </label>

    <AvMessage
      :type="error ? 'error' : 'success'"
      :message="error ? error : validMessage"
    />
    <span class="caption-light">
      <slot name="hint" />
    </span>
  </div>

  <div
    v-else
    class="av-default-upload"
  >
    <component
      :is="isPreview ? 'div' : 'label'"
      v-bind="isPreview ? {} : uploadLabelAttrs"
      :class="isPreview ? 'file-preview-container av-radius-lg av-p-xs av-border-width-sm av-border-style-solid av-border-stroke' : ''"
    >
      <div :class="isPreview ? '' : 'file-upload-container av-radius-lg av-p-xs av-border-width-sm av-border-style-dashed av-border-stroke'">
        <div class="av-row av-align-center av-gap-xs">
          <div class="left-content-container av-row av-align-center av-justify-center av-radius-md">
            <slot name="left">
              <AvIcon
                :size="2.5"
                :name="MDI_ICONS.ATTACHMENT_PLUS"
                color="var(--icon)"
              />
            </slot>
          </div>
          <div class="content-container av-col">
            <div v-if="isPreview">
              <span class="b2-bold">{{ fileName || modelValue?.[0]?.name }}</span>
            </div>
            <div
              v-else
              class="av-col av-gap-xxs"
            >
              <span class="b2-regular">{{ title }}</span>
              <span class="caption-light">{{ description }}</span>
            </div>

            <AvMessage
              :type="error ? 'error' : 'success'"
              :message="error ? error : validMessage"
            />
          </div>

          <div
            v-if="!disabled"
            class="av-px-xs"
          >
            <AvButton
              v-if="isPreview"
              :label="deleteButtonLabel"
              theme="SECONDARY"
              @click="() => onClear()"
            />
            <AvIcon
              v-else
              :size="1.5"
              :name="MDI_ICONS.TRAY_UPLOAD"
              color="var(--dark-background-primary1)"
            />
          </div>
          <input
            v-if="!isPreview"
            :id="realId"
            class="av-upload"
            type="file"
            :aria-describedby="error || validMessage ? `${realId}-desc` : undefined"
            v-bind="$attrs"
            :disabled="disabled"
            :aria-disabled="disabled"
            :accept="acceptTypes"
            @change="onChange($event as InputEvent)"
          >
        </div>
      </div>
    </component>
    <span class="caption-light">
      <slot name="hint" />
    </span>
  </div>
</template>

<style lang="scss" scoped>
.av-upload {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
}

.av-upload-group {
  cursor: pointer;
  max-width: v-bind('maxWidth');

  &--disabled {
    cursor: not-allowed;
  }
}

.file-preview-container {
  &:focus-within {
    outline: 2px solid #005fcc;
    outline-offset: 2px;
  }
}

.file-upload-container {
  &:focus-within {
    outline: 2px solid #005fcc;
    outline-offset: 2px;
  }
}

.drag-over .file-upload-container {
  background-color: var(--light-background-primary1);
  border-color: var(--dark-background-primary1);
}

.left-content-container {
  height: var(--dimension-4xl);
  width: var(--dimension-4xl);
  overflow: hidden;
}

.content-container {
  flex: 1 1 auto;
  min-width: 0;
}

.left-content-container, .right-icon-container {
  flex: 0 0 auto;
}

.av-compact-upload {
  max-width: v-bind('maxWidth');
}

.av-compact-file-pill {
  position: relative;
}

.av-compact-file-name {
  flex: 1 1 auto;
  min-width: 0;
}

.av-compact-add-pill {
  background-color: var(--surface-background);
  cursor: pointer;
  transition: background-color 0.2s ease;

  &.av-upload-group--disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &.drag-over {
    background-color: var(--light-background-primary1);
    border-color: var(--dark-background-primary1);
  }
}
</style>

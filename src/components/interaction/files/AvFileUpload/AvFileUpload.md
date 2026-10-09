# File uploader - `AvFileUpload`

## ✨ Introduction

The `AvFileUpload` component allows you to upload files by clicking on the file upload area or by dragging and dropping files. It supports both single and multiple file uploads with two display variants (default and compact).

It handles file validation, including accepted file types, maximum file size, and maximum number of files. Invalid files are discarded, and appropriate error events are emitted.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `id` | `string` | `file-upload-${crypto.randomUUID()}` | | Unique identifier for the file upload component. If not specified, a random ID is generated. |
| `ariaLabel` | `string` | `''` | | ARIA label for file upload button. |
| `accept` | `string \| string[]` | `undefined` | | Accepted file types, specified as a string (like HTML `accept` attribute) or an array of strings (which will be transformed into a string). Non accepted files are discarded. |
| `maxFileSizeMb` | `number \| ((file: File) => number \| undefined)` | `undefined` | | Maximum allowed file size in megabytes, or a function returning the limit for a given file (`undefined` means no limit). Larger files are discarded. |
| `maxFiles` | `number` | `undefined` | | Maximum number of files allowed (only with `enableMultiple`). Files beyond the limit are discarded. |
| `validMessage` | `string` | `''` | | Message indicating that the uploaded file is valid. Displayed together with `error` when both are set. |
| `error` | `string` | `''` | | Error message to be displayed in case of upload problem. |
| `modelValue` | `File[] \| null` | `null` | | Array of selected files. |
| `maxWidth` | `string` | `'none'` | | Max width of the component. |
| `fileName` | `string` | `undefined` | | Name of the file to display as default (e.g., for server-persisted uploads). |
| `countLabel` | `string` | `undefined` | | Label indicating the count of selected files when multiple files are enabled. You do not need to include the file count in this label; it will be automatically prefixed with the number of selected files. |
| `title` | `string` | | ✅ | Title of the file upload section. |
| `description` | `string` | | ✅ | Description of the file upload section. |
| `deleteButtonLabel` | `string` | `Remove` | | Delete button label. |
| `disabled` | `boolean` | `false` | | Whether the file upload input is disabled. |
| `disabledTooltip` | `string` | | | Tooltip text displayed when the file upload is disabled. |
| `compact` | `boolean` | `false` | | Display in compact mode with file pills. |
| `enableMultiple` | `boolean` | `false` | | Enable multiple file uploads. |
| `filePillDownloadPrefixLabel` | `string` | `'Download'` | | Prefix label for the download button in file pills. |
| `filePillDeletePrefixLabel` | `string` | `'Delete'` | | | Prefix label for the delete button in file pills. |

## 🔊 Events

| Name | Data (*payload*) | Description |
| --- | --- | --- |
| `'update:modelValue'` | The updated files array (`File[] \| null`) | Event emitted when the files array is updated. |
| `'update:validMessage'` | The updated message (`string \| null`) | Event emitted when the validMessage is updated. |
| `'update:error'` | The updated error message (`string \| null`) | Event emitted when the error is updated. |
| `'change'` | The new list of accepted files (`File[]`) | Event emitted when the selected file(s) change. |
| `'deleteFile'` | Optional file or index (`File \| number`) | Event emitted when a file is deleted. |
| `'acceptTypeError'` | | Event emitted when at least one dropped or selected file has an invalid format. Valid files are still accepted. |
| `'fileSizeError'` | | Event emitted when at least one file exceeds the configured max size. Valid files are still accepted. |
| `'maxFilesError'` | | Event emitted when more files are dropped or selected than allowed: more than `maxFiles` with `enableMultiple`, or more than one file without it. Files up to the limit are still accepted. |

## 🎨 Slots

| Name | Description |
|-----------| --- --- --- -|
| `hint` | Slot for the hint description. |
| `left` | Slot for the left content. |
| `default` | Default slot for global content between the left and right icons. |

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-interaction-files-avfileupload--docs).

## 💡 Examples of use

### Default variant (single file)

```vue
<script setup lang="ts">
import { AvFileUpload } from '@avenirs-esr/avenirs-dsav'
import { ref } from 'vue'

const files = ref<File[] | null>(null)
function handleFileChange (fileList: FileList | File[]) {
  console.log('Files selected:', fileList)
}
</script>

<template>
  <AvFileUpload
    v-model="files"
    title="Upload a document"
    description="or drag and drop here"
    :accept="['.pdf', '.jpg', '.png']"
    @change="handleFileChange"
  >
    <template #hint>
      PDF: <span class="caption-bold">10MB • </span>
      Images: <span class="caption-bold">5MB</span>
    </template>
  </AvFileUpload>
</template>
```

### Handling errors
```vue
<script setup lang="ts">
import { AvFileUpload } from '@avenirs-esr/avenirs-dsav'
import { ref } from 'vue'

const files = ref<File[] | null>(null)
function handleFileChange (fileList: FileList | File[]) {
  console.log('Files selected:', fileList)
}

const acceptTypeError = ref<string | null>(null)
const fileSizeError = ref<string | null>(null)
const maxFilesError = ref<string | null>(null)

function handleAcceptTypeError () {
  acceptTypeError.value = 'The file does not meet the expected format.'
}

function handleFileSizeError () {
  fileSizeError.value = 'The file size exceeds the allowed limit.'
}

function handleMaxFilesError () {
  maxFilesError.value = 'The number of files exceeds the allowed limit.'
}

const errors = computed(() => {
  return [
    acceptTypeError.value,
    fileSizeError.value,
    maxFilesError.value
  ].filter(Boolean).join(' ')
})
</script>

<template>
  <AvFileUpload
    v-model="files"
    title="Upload a document"
    description="or drag and drop here"
    :accept="['.pdf', '.jpg', '.png']"
    :error="errors"
    @change="handleFileChange"
    @accept-type-error="handleAcceptTypeError"
    @file-size-error="handleFileSizeError"
    @max-files-error="handleMaxFilesError"
  >
    <template #hint>
      PDF: <span class="caption-bold">10MB • </span>
      Images: <span class="caption-bold">5MB</span>
    </template>
  </AvFileUpload>
</template>
```

### With file pills

```vue
<script setup lang="ts">
import { AvFileUpload } from '@avenirs-esr/avenirs-dsav'
import { ref } from 'vue'

const files = ref<File[] | null>([new File(['a'], 'a.pdf'), new File(['b'], 'b.pdf')])
</script>

<template>
  <AvFileUpload
    v-model="files"
    enable-multiple
    title="Attach documents"
    :accept="['.pdf', '.doc']"
  />
</template>
```

### Compact variant (multiple files)

```vue
<script setup lang="ts">
import { AvFileUpload } from '@avenirs-esr/avenirs-dsav'
import { ref } from 'vue'

const files = ref<File[] | null>(null)
</script>

<template>
  <AvFileUpload
    v-model="files"
    compact
    title="Attach documents"
    :enable-multiple="true"
    :accept="['.pdf', '.doc']"
  />
</template>
```

### With delete modal

```vue
<script setup lang="ts">
import { AvFileUpload, AvModal } from '@avenirs-esr/avenirs-dsav'
import { ref } from 'vue'

const files = ref<File[] | null>([new File(['a'], 'a.pdf'), new File(['b'], 'b.pdf')])
const errors = ref<string | null>(null)
const validMessage = ref<string | null>(null)
const isDeleteModalOpen = ref(false)

async function onRequestDeleteImage () {
  const currentError = errors.value
  const currentValid = validMessage.value

  files.value = modelValue.value ? [modelValue.value] : []
  isDeleteModalOpen.value = true

  await nextTick()
  errors.value = currentError
  validMessage.value = currentValid
}

function onConfirmDeleteFile () {
  isDeleteModalOpen.value = false

  errors.value = null
  validMessage.value = null
  files.value = []
  modelValue.value = null
}
</script>

<template>
  <AvFileUpload
    v-model="files"
    enable-multiple
    title="Attach documents"
    :accept="['.pdf', '.doc']"
  />

  <AvModal
    :opened="isDeleteModalOpen"
    title="Are you sure you want to delete this file?"
    description="This action cannot be undone."
    @close="isDeleteModalOpen.value = false"
    @confirm="onConfirmDeleteFile"
  />
</template>
```

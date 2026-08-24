# File uploader - `AvFileUpload`

## ✨ Introduction

The `AvFileUpload` component allows you to upload files by clicking on the file upload area or by dragging and dropping files. It supports both single and multiple file uploads with two display variants (default and compact).

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `id` | `string` | `file-upload-${crypto.randomUUID()}` | | Unique identifier for the file upload component. If not specified, a random ID is generated. |
| `ariaLabel` | `string` | `''` | | ARIA label for file upload button. |
| `accept` | `string \| string[]` | `undefined` | | Accepted file types, specified as a string (like HTML `accept` attribute) or an array of strings (which will be transformed into a string). |
| `maxFileSizeMb` | `number` | `undefined` | | Maximum allowed file size in megabytes. |
| `validMessage` | `string` | `''` | | Message indicating that the uploaded file is valid. |
| `error` | `string` | `''` | | Error message to be displayed in case of upload problem. |
| `modelValue` | `File[] \| null` | `null` | | Array of selected files. |
| `maxWidth` | `string` | `'none'` | | Max width of the component. |
| `fileName` | `string` | `undefined` | | Name of the file to display as default (e.g., for server-persisted uploads). |
| `title` | `string` | | ✅ | Title of the file upload section. |
| `description` | `string` | | ✅ | Description of the file upload section. |
| `deleteButtonLabel` | `string` | `Remove` | | Delete button label. |
| `disabled` | `boolean` | `false` | | Whether the file upload input is disabled. |
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
| `'change'` | The new list of selected files (`FileList \| File[]`) | Event emitted when the selected file(s) change. |
| `'deleteFile'` | Optional file or index (`File \| number`) | Event emitted when a file is deleted. |
| `'acceptTypeError'` | | Event emitted when a file of wrong type is dropped or selected. |
| `'fileSizeError'` | | Event emitted when a file exceeds the configured max size. |

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

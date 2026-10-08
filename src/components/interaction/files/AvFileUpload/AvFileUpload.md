# File uploader - `AvFileUpload`

## ✨ Introduction

The `AvFileUpload` component allows users to select files from their device or add them by drag and drop. It supports single and multiple file selection, two display variants (`default` and `compact`), file deletion, preview mode, and optional validation of the files being added.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `id` | `string` | `file-upload-${crypto.randomUUID()}` | | Unique identifier for the file upload component. If not specified, a random ID is generated. |
| `title` | `string` | | ✅ | Title of the file upload section. |
| `description` | `string` | | ✅ | Description of the file upload section. |
| `ariaLabel` | `string` | `''` | | ARIA label for the file upload control. |
| `modelValue` | `File[]` | `[]` | | Currently selected files. With `enableMultiple`, newly selected files are appended to the current selection; otherwise, they replace it. |
| `fileName` | `string` | `undefined` | | File name to display instead of the name of the selected file(s). Useful for displaying a persisted file that is not available as a `File` object. |
| `accept` | `string \| string[]` | `undefined` | | Accepted file types, specified as a string like the HTML `accept` attribute or as an array of strings. |
| `disabled` | `boolean` | `false` | | Whether the file upload is disabled. When disabled, files cannot be added or deleted. |
| `isPreview` | `boolean` | `false` | | Displays the current file(s) in preview mode without allowing additional files to be added. In single-file, non-compact mode, preview mode is automatically enabled once a file is selected. |
| `deletable` | `boolean` | `true` | | Whether files can be deleted. When `false`, files can still be added but existing files cannot be deleted. |
| `enableMultiple` | `boolean` | `false` | | Enables multiple file selection. When enabled, newly selected files are appended to the current selection. |
| `beforeAdd` | `AvFileUploadBeforeAdd` | `undefined` | | Called with the files being added (files already in `modelValue` are not provided). Only the returned files are added. May be asynchronous. See `useFileUploadValidation`. |
| `errorMessage` | `string` | `undefined` | | Error message to display. |
| `validMessage` | `string` | `undefined` | | Success message to display. |
| `compact` | `boolean` | `false` | | Displays the component in compact mode with file pills. |
| `maxWidth` | `string` | `undefined` | | Maximum width of the component. |
| `deleteButtonLabel` | `string` | `'Delete'` | | Label of the delete button. |
| `filePillDownloadPrefixLabel` | `string` | `'Download'` | | Prefix label for the download button in file pills. |
| `filePillDeletePrefixLabel` | `string` | `'Delete'` | | Prefix label for the delete button in file pills. |

The component also inherits the props defined by `AvInteractiveProps`, including `disabledTooltip`.

## ✅ Validation

The component does not validate files by itself. Use `beforeAdd` to filter the files being added, ideally through the `useFileUploadValidation` composable:

```ts
const files = ref<File[]>([])
const { beforeAdd, errorMessage, reset } = useFileUploadValidation({
  files,
  accept: ['.pdf', 'image/*'],
  maxSize: 5 * 1024 * 1024,
  maxFiles: 3,
  validate: file => file.name.includes(' ') ? 'invalid-name' : undefined,
  getErrorMessage: error => t(`upload.errors.${error}`),
})
```

```vue
<AvFileUpload
  v-model="files"
  enable-multiple
  :before-add="beforeAdd"
  :error-message="errorMessage"
  @update:error-message="reset"
/>
```

Built-in error codes are `'invalid-file-type'`, `'file-too-large'` and `'too-many-files'` (the latter rejects the whole selection). Files with errors are not added; the others are.

The `accept` prop configures the native file input but is not enforced for files added by drag and drop. Pass `accept` to `useFileUploadValidation` as well to enforce it.

## 🔊 Events

| Name | Data (*Payload*) | Description |
| --- | --- | --- |
| `'update:modelValue'` | `File[]` | Event emitted when the selected files are updated. |
| `'click'` | `MouseEvent` | Event emitted when the file input is clicked. |
| `'change'` | `File[]` | Event emitted when the selected file(s) change. |
| `'deleteFiles'` | `File[]` | Event emitted when the user requests the deletion of one or more files. The parent is responsible for deciding whether and how the files should be deleted. |
| `'filesDeleted'` | `File[]` | Event emitted after one or more files have actually been deleted by the component. |
| `'update:errorMessage'` | `string \| undefined` | Event emitted when the `errorMessage` is updated. |
| `'update:validMessage'` | `string \| undefined` | Event emitted when the `validMessage` is updated. |

The deletion flow is intentionally split between `deleteFiles` and `filesDeleted`:

* `deleteFiles` signals that the user requested a deletion. The parent can use this event to handle confirmation, filtering, persistence, or any other deletion logic.
* `filesDeleted` is emitted when the deletion is actually performed by the component through its `deleteFiles` method.

## 🧩 Exposed methods

### `addFiles`

Adds files programmatically using the same `beforeAdd` and selection logic as files added through the file input or drag and drop.

```ts
avFileUploadRef.value?.addFiles(files)
```

### `deleteFiles`

Deletes the specified files programmatically.

It accepts either `File` objects or indexes. When no argument is provided, all selected files are deleted.

```ts
avFileUploadRef.value?.deleteFiles(files)
```

The method performs the deletion and emits the corresponding `filesDeleted` and `change` events.

## 🎨 Slots

| Name | Description |
| --- | --- |
| `hint` | Slot for hint or additional information displayed below the upload area. |
| `left` | Slot for custom content displayed in the left area of the default variant. |

## 🚀 Storybook demos

You can find examples of use and demos of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-interaction-files-avfileupload--docs).

## 💡 Examples of use

### Default variant (single file)

```vue
<script setup lang="ts">
import { AvFileUpload } from '@avenirs-esr/avenirs-dsav'
import { ref } from 'vue'

const files = ref<File[]>([])

function handleFileChange (selectedFiles: File[]) {
  console.log('Files selected:', selectedFiles)
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

In the default variant, selecting a single file automatically switches the component to preview mode.

### Compact variant (multiple files)

```vue
<script setup lang="ts">
import { AvFileUpload } from '@avenirs-esr/avenirs-dsav'
import { ref } from 'vue'

const files = ref<File[]>([])
</script>

<template>
  <AvFileUpload
    v-model="files"
    compact
    enable-multiple
    title="Attach documents"
    description="Select one or more documents"
    :accept="['.pdf', '.doc', '.docx']"
  />
</template>
```

### Preview of a persisted file

```vue
<script setup lang="ts">
import { AvFileUpload } from '@avenirs-esr/avenirs-dsav'
</script>

<template>
  <AvFileUpload
    is-preview
    file-name="existing-document.pdf"
    title="Document"
    description=""
  />
</template>
```

The `fileName` prop can be used to display a file that is already persisted without providing a `File` object through `modelValue`.

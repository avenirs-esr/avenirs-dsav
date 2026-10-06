# File uploader - `AvFileUpload`

## ✨ Introduction

The `AvFileUpload` component allows users to select files from their device or add them by drag and drop. It supports single and multiple file selection, two display variants (`default` and `compact`), file deletion, preview mode, and synchronous or asynchronous file validation.

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
| `validateFile` | `AvFileUploadFileValidator<TError>` | `undefined` | | Validates each file individually. Can be used alone or together with `validateFiles`. When both validators reject the same file, their errors are merged. |
| `validateFiles` | `AvFileUploadFilesValidator<TError>` | `undefined` | | Validates the files being added as a collection. Files already present in `modelValue` are not provided. A single error rejects the whole selection and skips `validateFile`; an array associates errors with specific files and is combined with `validateFile` results. |
| `getErrorMessage` | `AvFileUploadErrorMessageGetter<TError>` | `undefined` | | Returns the message associated with a validation error. The returned message is displayed automatically for validation errors when neither `errorMessage` nor `validMessage` is defined. Returning `void` prevents the validation error from being displayed. |
| `errorMessage` | `string` | `undefined` | | Error message to display. When defined, it takes precedence over messages returned by `getErrorMessage`. |
| `validMessage` | `string` | `undefined` | | Success message to display. When defined, it takes precedence over messages returned by `getErrorMessage`. |
| `compact` | `boolean` | `false` | | Displays the component in compact mode with file pills. |
| `maxWidth` | `string` | `undefined` | | Maximum width of the component. |
| `deleteButtonLabel` | `string` | `'Delete'` | | Label of the delete button. |
| `filePillDownloadPrefixLabel` | `string` | `'Download'` | | Prefix label for the download button in file pills. |
| `filePillDeletePrefixLabel` | `string` | `'Delete'` | | Prefix label for the delete button in file pills. |

`AvFileUpload` is generic over `TError extends string = string`. This type represents the application's validation error codes and is preserved by `validateFile`, `validateFiles`, `getErrorMessage`, and the `filesRejected` event.

The component also inherits the props defined by `AvInteractiveProps`, including `disabledTooltip`.

## ✅ Validation

`validateFile` validates each file individually and may return:

```text
TError | TError[] | void
```

For example:

```ts
validateFile: file => file.size > MAX_FILE_SIZE ? 'file-too-large' : undefined
```

`validateFiles` validates the files being added as a collection and may return:

```text
TError
 | AvFileUploadFileValidationResult<TError>[]
 | void
```

A single `TError` represents a global rejection of the selection. An array associates one or more errors with specific files.

For example:

```ts
validateFiles: files => files.length > MAX_FILES ? 'too-many-files' : undefined
```

or:

```ts
validateFiles: files => files
  .filter(file => existingFileNames.has(file.name))
  .map(file => ({ file, errors: 'duplicate-file' }))
```

Both validators may be synchronous or asynchronous.

When both validators are provided, file-specific errors returned by `validateFiles` and `validateFile` are merged per file and duplicate errors are removed.

A global error returned by `validateFiles` rejects the whole selection and skips `validateFile`.

`getErrorMessage` can be used to map validation error codes to user-facing messages:

```ts
getErrorMessage: (error) => {
  switch (error) {
    case 'file-too-large':
      return 'The file is too large'
    case 'invalid-type':
      return 'This file type is not allowed'
  }
}
```

When neither `errorMessage` nor `validMessage` is provided, the messages returned by `getErrorMessage` are displayed automatically for validation errors. Returning `void` prevents a validation error from being displayed.

The `accept` prop configures the native file input but does not perform validation. Use `validateFile` or `validateFiles` to enforce validation rules consistently, including for files added by drag and drop.

## 🔊 Events

| Name | Data (*Payload*) | Description |
| --- | --- | --- |
| `'update:modelValue'` | `File[]` | Event emitted when the selected files are updated. |
| `'click'` | `MouseEvent` | Event emitted when the file input is clicked. |
| `'change'` | `File[]` | Event emitted when the selected file(s) change. |
| `'filesRejected'` | `AvFileUploadFilesRejections<TError>` | Event emitted when file validation rejects the selection or one or more files. |
| `'deleteFiles'` | `File[]` | Event emitted when the user requests the deletion of one or more files. The parent is responsible for deciding whether and how the files should be deleted. |
| `'filesDeleted'` | `File[]` | Event emitted after one or more files have actually been deleted by the component. |
| `'update:errorMessage'` | `string \| undefined` | Event emitted when the `errorMessage` is updated. |
| `'update:validMessage'` | `string \| undefined` | Event emitted when the `validMessage` is updated. |

`filesRejected` behaves differently depending on the mode:

* In single-file mode, only the first validation error is emitted as a `TError`.
* In multiple-file mode, files without validation errors are added while rejected files are emitted through `filesRejected` as an array of `{ file, errors }`.
* When a multiple-file selection contains both valid and rejected files, `change` is emitted before `filesRejected`.

The deletion flow is intentionally split between `deleteFiles` and `filesDeleted`:

* `deleteFiles` signals that the user requested a deletion. The parent can use this event to handle confirmation, filtering, persistence, or any other deletion logic.
* `filesDeleted` is emitted when the deletion is actually performed by the component through its `deleteFiles` method.

## 🧩 Exposed methods

### `addFiles`

Adds files programmatically using the same validation and selection logic as files added through the file input or drag and drop.

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

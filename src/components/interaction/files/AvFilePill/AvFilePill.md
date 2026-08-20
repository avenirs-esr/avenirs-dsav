# File pill - `AvFilePill`

## ✨ Introduction

The `AvFilePill` component displays a selected or attached file in a compact pill. It is used by `AvFileUpload` in compact mode and can also be used independently to show a file name with optional metadata and action buttons.

## 🏗️ Structure

The component is composed of a file attachment icon, a content area containing the file name and optional details, and optional action buttons for download and deletion. Long file names and details are truncated to keep the pill compact.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `name` | `string` | | ✅ | Name of the file displayed in the pill. |
| `size` | `number` | `undefined` | | Size of the file in bytes. Only displayed when `showDetails` is enabled. |
| `type` | `string` | `undefined` | | File extension displayed in uppercase. Only displayed when `showDetails` is enabled. |
| `id` | `string` | `file-pill-${crypto.randomUUID()}` | | Unique identifier emitted by the `download` and `delete` events. |
| `downloadable` | `boolean` | `false` | | Displays a download action button when enabled. |
| `deletable` | `boolean` | `true` | | Displays a delete action button when enabled. |
| `showDetails` | `boolean` | `false` | | Displays the file extension and formatted size below the file name when available. |

## 🔊 Events

| Name | Payload | Description |
| --- | --- | --- |
| `download` | `id: string` | Emitted when the download button is clicked. |
| `delete` | `id: string` | Emitted when the delete button is clicked. |

## 🎨 Slots

This component does not expose slots.

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-interaction-files-avfilepill--docs).

## 💡 Examples of use

### Default pill

```vue
<script setup lang="ts">
import { AvFilePill } from '@avenirs-esr/avenirs-dsav'
</script>

<template>
  <AvFilePill name="Document.pdf" />
</template>
```

### Pill with details and actions

```vue
<script setup lang="ts">
import { AvFilePill } from '@avenirs-esr/avenirs-dsav'

function handleDownload (id: string) {
  console.log('Download file:', id)
}

function handleDelete (id: string) {
  console.log('Delete file:', id)
}
</script>

<template>
  <AvFilePill
    id="document-pdf"
    name="Document.pdf"
    type="pdf"
    :size="5123456"
    show-details
    downloadable
    @download="handleDownload"
    @delete="handleDelete"
  />
</template>
```

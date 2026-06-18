# File uploader - `AvFileUpload`

## ✨ Introduction

The `AvFileUpload` allows you to upload files by clicking on the file upload area or by dragging and dropping a file in the area.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `id` | `Function` | `file-upload-${crypto.randomUUID()}` | | Unique identifier for the file download component. If not specified, a random ID is generated. |
| `ariaLabel` | `string` | `''` | | ARIA label for file download button. |
| `accept` | `string \| string[]` | `undefined` | | Accepted file types, specified as a string (like HTML `accept` attribute) or an array of strings (which will be transformed into a string). |
| `maxFileSizeMb` | `number` | `undefined` | | Maximum allowed file size in megabytes. |
| `validMessage` | `string` | `''` | | Message indicating that the downloaded file is valid. |
| `error` | `string` | `''` | | Error message to be displayed in case of download problem. |
| `modelValue` | `File \| null` | `''` | | Value linked to file upload input template. |
| `maxWidth` | `string` | `'none'` | | Max width of the component. |
| `fileName` | `string` | `'none'` | | Name of actual file. |
| `title` | `string` | | ✅ | Title of the file upload section. |
| `description` | `string` | | ✅ | Description of the file upload section. |
| `deleteButtonLabel` | `string` | `Remove` | | Delete button label. Hidden when component is disabled. |
| `disabled` | `boolean` | `false` | | Whether the file upload input is disabled. |

## 🔊 Events

| Name | Data (*payload*) | Description |
| --- | --- | --- |
| `'update:modelValue'` | The updated model value (`File`) | Event emitted when the model value linked to the file is updated |
| `'update:validMessage'` | The updated valide message (`string`) | Event emitted when the validMessage is updated. |
| `'update:error'` | The updated error message (`string`) | Event emitted when the error is updated. |
| `'change'` | The new list of selected files (`FileList \| File[]`) | Event emitted when the selected file is changed. |
| `'delete-file'` | | Event emitted when the delete button is clicked. |
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

```vue
<template>
  <AvFileUpload
    :accept="['.jpg', '.png']"
    @change="handleFileChange"
  >
    <span class="b2-regular">Add a new</span>
    <span class="b2-bold">trace of type pdf file</span>
    <span class="caption-regular">or drag and drop here</span>

    <template #hint>
      Text: <span class="caption-bold">5Mo • </span>
      Images: <span class="caption-bold">5Mo • </span>
      Audio: <span class="caption-bold">5Mo • </span>
      Vidéo: <span class="caption-bold">50Mo • </span>
      Application: <span class="caption-bold">10Mo</span>
    </template>
  </AvFileUpload>
</template>
```

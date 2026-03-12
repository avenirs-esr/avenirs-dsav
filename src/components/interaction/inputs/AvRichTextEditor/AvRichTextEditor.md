# Inputs - `AvRichTextEditor`

## ✨ Introduction

The `AvRichTextEditor` component is a flexible and accessible rich text editor component that provides a standardized way to collect user input in forms and interfaces. It supports various formatting options, validation states, and accessibility features to ensure a consistent user experience.
It adds rich text editing capabilities, character count tracking, and custom styling.

## 🏗️ Structure

The input component consists of the following elements:
- **Wrapper**: Container that manages the overall layout and positioning
- **Toolbar**: Contains buttons for text formatting options (e.g., bold, italic, lists, etc.)
- **Editable Area**: The main contenteditable element where users can input and format their text
- **Caption**: Optional helper text displayed below the label

The component integrates focus management, proper ARIA attributes, and responsive design patterns.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `editorLabel` | `string` | | ✅ | Label for the rich text editor, used for accessibility purposes. @example "Rich Text Editor" |
| `toolbarLabel` | `string` | | ✅ | Label for the toolbar, used for accessibility purposes. @example "Rich text editor toolbar" |
| `undoLabel` | `string` | | ✅ | Label for the undo button in the toolbar. @example "Undo (CTRL + Z)" |
| `redoLabel` | `string` | | ✅ | Label for the redo button in the toolbar. @example "Redo (CTRL + Y)" |
| `paragraphLabel` | `string` | | ✅ | Label for the paragraph button in the toolbar. @example "Paragraph" |
| `headingLabel` | `string` | | ✅ | Label for the heading button in the toolbar. @example "Heading". @note The numbers are |
| `boldLabel` | `string` | | ✅ | Label for the bold button in the toolbar. @example "Bold (CTRL + B)" |
| `italicLabel` | `string` | | ✅ | Label for the italic button in the toolbar. @example "Italic (CTRL + I)" |
| `underlineLabel` | `string` | | | ✅ | Label for the underline button in the toolbar. @example "Underline (CTRL + U)" |
| `linkLabel` | `string` | | ✅ | Label for the link button in the toolbar. @example "Link (CTRL + K)" |
| `linkNameLabel` | `string` | | ✅ | Label for the link name input in the link popover. @example "Link Name" |
| `linkNamePlaceholder` | `string` | | ✅ | Placeholder for the link name input in the link popover. @example "Example Link" |
| `linkUrlLabel` | `string` | | ✅ | Label for the link URL input in the link popover. @example "Link URL" |
| `unsetLinkLabel` | `string` | | ✅ | Label for the button to remove a link in the toolbar. @example "Unlink (CTRL + SHIFT + K)" |
| `imageLabel` | `string` | | ✅ | Label for the image button in the toolbar. @example "Image (CTRL + SHIFT + I)" |
| `imageNameLabel` | `string` | | ✅ | Label for the image name input in the image popover. @example "Image Name" |
| `imageNamePlaceholder` | `string` | | ✅ | Placeholder for the image name input in the image popover. @example "Example Image" |
| `imageUrlLabel` | `string` | | ✅ | Label for the image URL input in the image popover. @example "Image URL" |
| `removeImageLabel` | `string` | | ✅ | Label for the button to remove an image in the toolbar. @example "Remove image" |
| `insertTableLabel` | `string` | | ✅ | Label for the button to insert a table in the toolbar. @example "Insert table" |
| `tableSettingsLabel` | `string` | | ✅ | Label for the button to open the table settings dropdown in the toolbar. @example "Table settings" |
| `deleteTableLabel` | `string` | `string` | | ✅ | Label for the button to delete a table in the toolbar. @example "Delete table" |
| `addColumnBeforeLabel` | `string` | | ✅ | Label for the button to add a column before in the toolbar. @example "Add column before" |
| `addColumnAfterLabel` | `string` | | ✅ | Label for the button to add a column after in the toolbar. @example "Add column after" |
| `deleteColumnLabel` | `string` | | ✅ | Label for the button to delete a column in the toolbar. @example "Delete column" |
| `addRowBeforeLabel` | `string` | | ✅ | Label for the button to add a row before in the toolbar. @example "Add row before" |
| `addRowAfterLabel` | `string` | | ✅ | Label for the button to add a row after in the toolbar. @example "Add row after" |
| `deleteRowLabel` | `string` | | ✅ | Label for the button to delete a row in the toolbar. @example "Delete row" |
| `alignLeftLabel` | `string` | | ✅ | Label for the button to align text to the left in the toolbar. @example "Align left (CTRL + SHIFT + L)" |
| `alignCenterLabel` | `string` | | ✅ | Label for the button to align text to the center in the toolbar. @example "Align center (CTRL + SHIFT + E)" |
| `alignRightLabel` | `string` | | ✅ | Label for the button to align text to the right in the toolbar. @example "Align right (CTRL + SHIFT + R)" |
| `alignJustifyLabel` | `string` | | ✅ | Label for the button to justify text in the toolbar. @example "Justify (CTRL + SHIFT + J)" |
| `bulletListLabel` | `string` | | ✅ | Label for the button to insert a bullet list in the toolbar. @example "Bullet list (CTRL + SHIFT + 8)" |
| `orderedListLabel` | `string` | | ✅ | Label for the button to insert a numbered list in the toolbar. @example "Numbered list (CTRL + SHIFT + 7)" |
| `decreaseIndentLabel` | `string` | | ✅ | Label for the button to decrease indent in the toolbar. @example "Decrease indent (CTRL + [)" |
| `increaseIndentLabel` | `string` | | ✅ | Label for the button to increase indent in the toolbar. @example "Increase indent (CTRL + ])" |
| `popoversCancelLabel` | `string` | | ✅ | Label for the cancel button in the popovers. @example "Cancel" |
| `popoversConfirmLabel` | `string` | | ✅ | Label for the confirm button in the popovers. @example "Confirm" |

## 🔊 Events

The component uses `defineModel` for both content and character count.

### Model events

| Model | Type | Description |
| --- | --- | --- |
| `default` | `string` | Current HTML content of the rich text editor |
| `charCount` | `number` | Current character count (user input without HTML formatting) of the rich text editor content |

## 🎨 Slots

| Name | Description | Slot Props |
| --- | --- | --- |
| `maxLengthCaption` | Slot for max length caption to display the current length / max length | `currentValue: number`, `maxlength: number \| undefined` |

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-interaction-inputs-avrichtexteditor--docs).

## 💡 Examples of use

```vue
<script setup lang="ts">
const content = ref('')
const charCount = ref(0)

const labels: AvRichTextEditorLabels = {
  editorLabel: 'Rich Text Editor',
  toolbarLabel: 'Rich Text Editor Toolbar',
  undoLabel: 'Undo',
  redoLabel: 'Redo',
  paragraphLabel: 'Paragraph',
  headingLabel: 'Heading',
  boldLabel: 'Bold',
  italicLabel: 'Italic',
  underlineLabel: 'Underline',
  linkLabel: 'Insert Link',
  linkNameLabel: 'Link Name',
  linkNamePlaceholder: 'Example Link',
  linkUrlLabel: 'Link URL',
  unsetLinkLabel: 'Unset Link',
  imageLabel: 'Insert Image',
  imageNameLabel: 'Image Name',
  imageNamePlaceholder: 'Example Image',
  imageUrlLabel: 'Image URL',
  removeImageLabel: 'Remove Image',
  insertTableLabel: 'Insert Table',
  tableSettingsLabel: 'Table Settings',
  deleteTableLabel: 'Delete Table',
  addColumnBeforeLabel: 'Add Column Before',
  addColumnAfterLabel: 'Add Column After',
  deleteColumnLabel: 'Delete Column',
  addRowBeforeLabel: 'Add Row Before',
  addRowAfterLabel: 'Add Row After',
  deleteRowLabel: 'Delete Row',
  alignLeftLabel: 'Align Left',
  alignCenterLabel: 'Align Center',
  alignRightLabel: 'Align Right',
  alignJustifyLabel: 'Justify Text',
  bulletListLabel: 'Bullet List',
  orderedListLabel: 'Ordered List',
  decreaseIndentLabel: 'Decrease Indent',
  increaseIndentLabel: 'Increase Indent',
  popoversCancelLabel: 'Cancel',
  popoversConfirmLabel: 'Confirm'
}
</script>

<template>
  <div class="av-col av-container">
    <AvRichTextEditor
      v-model="content"
      v-model:char-count="charCount"
      v-bind="labels"
    />

    <p>Character count: {{ charCount }}</p>
    <p>HTML Content count: {{ content.length }}</p>
    <p>HTML Content: {{ content }}</p>
  </div>
</template>
```

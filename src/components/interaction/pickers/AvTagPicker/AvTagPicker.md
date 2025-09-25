# Tag picker - `AvTagPicker`

## ✨ Introduction

The `AvTagPicker` is a Vue component enabling a user to select an element from a given set. Selectable elements consist of tag components.

The tag list provides a list of options from which the user can choose.

## 🏗️ Structure

Buttons consist of :
- A label - mandatory, using the `label` prop, enables label display when `iconOnly` is `false`, also enables connection to `title` and `aria-label` ;
- An icon, which can be modified (see available icons) - optional.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `AvTagPickerOption[]` | | ✅ | List of options available in picker. |
| `label` | `string` | `undefined` | | Label displayed above picker. |
| `labelColor` | `string` | `'var(--text2)'` | | Color of label. |
| `labelTypographyClass` | `string` | `'b2-regular'` | | Typography class applied to label. |
| `multiple` | `boolean` | `false` | | Activate multiple selection mode if `true`. |
| `selected` (simple mode) | `AvTagPickerOption` | | | Option selected (simple mode). |
| `selected` (multiple mode) | `AvTagPickerOption[]` | | | Selected options (multiple mode). |
| `handleSelectChange` (single) | `(selected: AvTagPickerOption) => void` | | ✅ | Method called when selecting in single mode. |
| `handleSelectChange` (multiple) | `(selected: AvTagPickerOption[]) => void` | | ✅ | Method called when selecting in multiple mode. |

## 🔊 Events

None.

## 🎨 Slots

None.

## 💡 Examples of use

```vue
<template>
  <AvTagPicker
    :options="options"
    :selected="selectedOption"
    :handle-select-change="handleSelectChange"
    :multiple="false"
    label="Number of results per page:"
    label-typography-class="b2-regular"
    label-color="var(--text2)"
  />
</template>
```

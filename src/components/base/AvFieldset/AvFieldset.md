# Fieldsets - `AvFieldset`

## ✨ Introduction

The `AvFieldset` allows the user to logically and visually link form elements belonging to the same set.

## 🏗️ Structure

The fieldset consists of the following elements:

- a `default` slot for the fieldset content
- a slot and a prop for the fieldset caption called `legend`
- an ID for the `<legend>` tag called `legendId`
- a class for the `<legend>` tag called `legendClass`
- a slot and a prop for the hint placed above the fieldset content called `hint`
- a class for the hint called `hintClass`

## 🏷️ Props

| Name | Type| Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `legend` | `string` | `''` | | Fieldset caption.|
| `legendClass` | `string` | `''` | | `<legend>` tag class.|
| `legendId` | `string` | `''` | | `<legend>` tag id.|
| `hint` | `string` | `''` | | Hint placed above the fieldset.|
| `hintClass` | `string` | `''` | | Class for the hint.|

## 🔊 Events

None.

## 🎨 Slots

| Name | Description |
| --- | --- |
| `default` | Slot by default for the content of the fieldset. |
| `legend` | Slot for the content of the title of the `fieldset`. |
| `hint` | Slot for the content of the hint. |

## 💡 Examples of use

```vue
<template>
  <AvFieldset
    id="some-id"
    class="your-component__fieldset"
    legend="A super legend"
    legend-id="your-form-legend"
  >
    <!-- Your content here -->
  </AvFieldSet>
</template>
```

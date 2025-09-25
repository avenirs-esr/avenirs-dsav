# Drop-down list - `AvSelect`

## ✨ Introduction

The `AvSelect` is a Vue component enabling a user to select an item from a given list.

The drop-down list provides a list of options from which the user can choose. Only the visible part of the component is stylized: the drop-down list of options retains the browser style.

## 🏗️ Structure

`AvSelect` consists of a set of `<option>` within a `<select>`.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `modelValue` | `string \| number` | | | Selected option value. |
| `required` | `boolean` | | | Indicates if the select is required.|
| `disabled` | `boolean` | | | Indicated if the select is disabled.|
| `options` | `(string \| undefined \| { value: string \| undefined, text: string disabled?: boolean})[]` | `[]` | | Selectable options. |
| `label` | `string` | `''` | | Select text label.|
| `name` | `string` | | | Field name.|
| `hint` | `string` | | | Texte d'indice pour guider.|
| `successMessage` | `string` | `''` | | If set, display a success message. |
| `errorMessage` | `string` | `''` | | If set, display an error message.|
| `defaultUnselectedText` | `string` | | ✅ | Placeholder text.|
| `selectId` | `string` | `useRandomId('select')` | | Unique id for the select. Used for the accessibility. |
| `dense` | `boolean` | | | Dense mode for reduced padding.|

## 🔊 Events

| Name | Data (*payload*) | Description |
| --- | --- | --- |
| `'update:modelValue'` | `string \| number` | Emitted when an option is selected. |

## 🎨 Slots

None.

## 💡 Examples of use

```vue
<template>
  <AvSelect
    v-model="select"
    :options="[
      { value: 1, text: 'Choice number 1' },
      { value: 2, text: '2' },
      { value: 3, text: '3' },
      { value: 4, text: '4' },
    ]"
    default-unselected-text="Placeholder"
  />
</template>
```

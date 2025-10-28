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
| `required` | `boolean` | `false` | | Indicates if the select is required.|
| `disabled` | `boolean` | `false` | | Indicated if the select is disabled.|
| `options` | `(string \| undefined \| { value: string \| undefined, text: string disabled?: boolean})[]` | `[]` | | Selectable options. |
| `label` | `string` | `''` | | Select text label.|
| `name` | `string` | `''` | | Field name.|
| `hint` | `string` | | `''` | Texte d'indice pour guider.|
| `successMessage` | `string` | `''` | | If set, display a success message. |
| `errorMessage` | `string` | `''` | | If set, display an error message.|
| `placeholder` | `string` | | ✅ | Placeholder text.|
| `selectId` | `string` | `select-${crypto.randomUUID()}` | | Unique id for the select. Used for the accessibility. |
| `dense` | `boolean` | `true` | | Dense mode for reduced padding.|

## 🔊 Events

| Name | Data (*payload*) | Description |
| --- | --- | --- |
| `'update:modelValue'` | `string \| number` | Emitted when an option is selected. |

## 🎨 Slots

None.

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-interaction-selects-avselect--docs).

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

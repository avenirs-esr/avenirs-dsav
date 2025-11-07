# Enhanced drop-down list - `AvMultiselect`

## ✨ Introduction

The `AvMultiselect` is a Vue component enabling a user to select one or many items from a given list.

The drop-down list provides a list of options for the user to choose from. The user can filter this list and use a button to select/deselect all visible items.

## 🏗️ Structure

The `AvMultiselect` consists of:
- a label - Mandatory (prop `label`)
- a description - Optional (prop `hint` or slot `hint`)
- a list, composed of a set of selectable options - Mandatory (prop `options` with a label, a value and an optional icon)

Inside the list:
- a "select all" or "deselect all" button - Optional (props `selectAll` and `selectAllLabel`)
- an input field - Optional
- a form section (fieldset) containing:
  - a legend - Optional (which can be hidden from the screen - prop `legend` or slot `legend`)
  - a description of the group - Optional (which can be hidden from the screen)
  - a list of options - Mandatory (prop `options` with a label, a value and an optional icon)

## 🏷️ Props

| Name             | Type | Default | Mandatory | Description |
|------------------| --- | --- | --- | --- |
| `modelValue`     | `(string \| number)[]` | | ✅ | Selected option(s) value(s). |
| `disabled`       | `boolean` | `false` | | Indicated if the select is disabled.|
| `options`        | `{ value: string \| number, label: string, icon?: string})[]` | `[]` | | Selectable options. |
| `label`          | `string` | | ✅ | Select text label.|
| `name`           | `string` | | | Field name.|
| `hint`           | `string` | | | Hint for guidance.|
| `successMessage` | `string` | `''` | | If set, display a success message. |
| `errorMessage`   | `string` | `''` | | If set, display an error message.|
| `placeholder`    | `string` | | ✅ | Placeholder text.|
| `selectId`       | `string` | `useRandomId('select')` | | Unique id for the select. Used for the accessibility. |
| `dense`          | `boolean` | | | Dense mode for reduced padding.|
| `selectedText`   | `string` | `'x option(s) sélectionné(s)'` | | Displayed text when options are selected.|
| `selectAll`      | `boolean` | `false` | | Displays the select all items button.|
| `selectAllLabel` | `[string, string]` | `["Tout sélectionner", "Tout désélectionner"]` | | Update the select all items button label.|
| `search`         | `boolean` | `false` | | Displays the search bar.|
| `width`          | `string` | `undefined` | | Fixes the width of the multiselect.|
| `height`         | `string` | `undefined` | | Fixes the height of the multiselect.|
## 🔊 Events

| Name | Data (*payload*) | Description |
| --- | --- | --- |
| `'update:modelValue'` | `(string \| number)[]` | Emitted when an option is selected or unselected. |

## 🎨 Slots

None.

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-interaction-selects-avmultiselect--docs).

## 💡 Examples of use

```vue
<template>
  <AvMultiselect
    v-model="select"
    :options="[
      { value: 1, label: 'Choice number 1' },
      { value: 2, label: '2' },
      { value: 3, label: '3' },
      { value: 4, label: '4' },
    ]"
    placeholder="Placeholder"
    label="Select"
  />
</template>
```

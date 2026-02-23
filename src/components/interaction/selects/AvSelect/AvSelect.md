# Drop-down list - `AvSelect`

## ✨ Introduction

The `AvSelect` is a Vue component enabling a user to select an item from a given list.

The drop-down list provides a list of options from which the user can choose. Only the visible part of the component is stylized: the drop-down list of options retains the browser style.

## 🏗️ Structure

The `AvSelect` consists of a set of `<option>` within a `<select>`. If an option group is provided, it is rendered as an `<optgroup>` containing its child options.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `selectedItem` | `AvSelectSelectedOption` | `{ itemId: '' }` | | Selected option object used with `v-model:selectedItem`. |
| `required` | `boolean` | `false` | | Indicates if the select is required.|
| `disabled` | `boolean` | `false` | | Indicated if the select is disabled.|
| `options` | `AvSelectOption[]` | `[]` | | Selectable options. |
| `label` | `string` | `''` | | Select text label.|
| `name` | `string` | `''` | | Field name.|
| `hint` | `string` | | `''` | Texte d'indice pour guider.|
| `successMessage` | `string` | `''` | | If set, display a success message. |
| `errorMessage` | `string` | `''` | | If set, display an error message.|
| `placeholder` | `string` | | ✅ | Placeholder text.|
| `id` | `string` | `select-${crypto.randomUUID()}` | | Unique id for the select. Used for the accessibility. |
| `dense` | `boolean` | `false` | | Dense mode for reduced padding.|
| `prefixIcon` | `string` | | | Prefix icon name (optional).|

N.B. The `options` prop is an array of objects with the following structure:

```ts
export interface AvSelectOptionBase {
  id: string
  label: string
  disabled?: boolean
}

export interface AvSelectSelectedOption {
  itemId: string
  parentId?: string
}

export interface AvSelectOption extends AvSelectOptionBase { children?: AvSelectOption[] }
```

## 🔊 Events

| Name | Data (*payload*) | Description |
| --- | --- | --- |
| `'update:selectedItem'` | `AvSelectSelectedOption` | Emitted when an option is selected (includes `parentId` when option comes from an `optgroup`). |

## 🎨 Slots

None.

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-interaction-selects-avselect--docs).

## 💡 Examples of use

```vue
<script setup lang="ts">
import { ref } from 'vue'

const selectedItem = ref({ itemId: '' })
</script>

<template>
  <AvSelect
    v-model:selected-item="selectedItem"
    :options="[
      {
        id: 'group-1',
        label: 'Group 1',
        children: [
          { id: '1', label: 'Choice 1' },
          { id: '2', label: 'Choice 2' },
        ],
      },
      { id: '3', label: 'Choice 3' },
    ]"
    placeholder="Placeholder"
  />
</template>
```

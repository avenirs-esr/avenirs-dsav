# Search bar - `AvSearchBar`

## ✨ Introduction

The `AvSearchBar` is a navigation system that allows users to quickly access content by searching for a keyword or phrase.

## 🏗️ Structure

The search bar is composed by:
- an input
- a button

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `id` | `string`| `search-bar-${crypto.randomUUID()}`| | Unique id for the search bar. |
| `label` | `string` | `'Recherche'` | | Label of the search bar. |
| `modelValue`| `string` | `''` | | Current value linked to the search bar. |
| `placeholder`| `string`| `'Rechercher...'` | | Placeholder for the search bar. |
| `disabled` | `boolean` | `false` | | If `true`, disable the search bar.

## 🔊 Events

| Name | Data (*payload*) | Description |
| --- | --- | --- |
| `update:modelValue` | `string \| undefined` | Emitted when the input value changes |
| `search` | `string \| undefined` | Emitted when the button is clicked or the enter key pressed |

## 🎨 Slots

None.

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-interaction-inputs-avsearchbar--docs).

## 💡 Examples of use

```vue
<script>
const state = ref(false)
</script>

<template>
  <AvSearchBar
    label="Search"
    :model-value="modelValue"
    placeholder="Search..."
    @update:model-value="emit('update:modelValue', $event)"
    @search="emit('search', $event)"
  />
</template>
```

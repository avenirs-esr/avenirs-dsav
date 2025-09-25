# Toggles - `AvToggle`

## ✨ Introduction

The `AvToggle` is a versatile Vue component, designed to allow the user to choose between two opposite states (active/inactive).

## 🏗️ Structure

None.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `modelValue` | `boolean` | `undefined` | | Boolean value linked to the input. |
| `description` | `string` | | ✅ | Indicates the purpose of the toggle. |
| `id` | `string` | `crypto.randomUUID()` | | Unique id for the toggle. Used for accessibility. |
| `disabled` | `boolean` | `undefined` | | Indicates if the toggle is disabled. |
| `activeText` | `string` | `'On'` | | Text to display next to the toggle (right) when it is active. |
| `inactiveText` | `string` | `'Off'` | | Text to display next to the toggle (right) when it is inactive. |
| `name` | `string` | `undefined` | | `name` attribute of the input. |

## 🔊 Events

None.

## 🎨 Slots

None.

## 💡 Examples of use

```vue
<script>
const state = ref(false)
</script>

<template>
  <AvToggle
    v-model="state"
    description="Awesome toggle"
  />
</template>
```

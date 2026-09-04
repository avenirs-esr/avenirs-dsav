# Tag picker - `AvTagPicker`

## ✨ Introduction

The `AvTagPicker` is a Vue component allowing users to select one or multiple options from a list of tags.

Selectable elements are represented by tag components. The component supports two modes:
- **single mode**: only one option can be selected at a time;
- **multiple mode**: several options can be selected simultaneously.

In **single mode**, when no `selected` value is provided, the first available option is selected by default.

## 🏗️ Structure

The component is composed of:
- A list of tag components generated from the provided `options`;
- An optional label displayed above the picker.

Each tag can display:
- Its option label;
- A selected state indicator;
- A disabled state in single mode when the option is currently selected.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `options` | `AvTagPickerOption[]` | | ✅ | List of options available in the picker. |
| `label` | `string` | `undefined` | | Label displayed above the picker. |
| `labelColor` | `string` | `'var(--text2)'` | | Color applied to the label. |
| `labelTypographyClass` | `string` | `'b2-regular'` | | Typography class applied to the label. |
| `multiple` | `boolean` | `false` | | Enables multiple selection mode when `true`. |
| `selected` (single mode) | `string` | First option value | | Value of the selected option. |
| `selected` (multiple mode) | `string[]` | First option value in an array | | Values of the selected options. |
| `handleSelectChange` (single mode) | `(selected: AvTagPickerOption) => void` | | ✅ | Callback called when the selected option changes. |
| `handleSelectChange` (multiple mode) | `(selected: AvTagPickerOption[]) => void` | | ✅ | Callback called when the selected options change. |

### Default selection behavior

In **single mode**, when `selected` is not provided:
- if options are available, the first option is selected automatically;
- if no options are available, no option is selected.

To explicitly start with no selected option, provide:
- `selected=""` in single mode;
- `selected=[]` in multiple mode.

## 🔊 Events

None.

## 🎨 Slots

None.

## 🚀 Storybook demos

You can find examples and demos of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-interaction-pickers-avtagpicker--docs).

## 💡 Examples of use

### Single selection mode

```vue
<script setup lang="ts">
const selectedOption = ref('1')

const options = [
  {
    label: 'Option 1',
    value: '1'
  },
  {
    label: 'Option 2',
    value: '2'
  }
]

function handleSelectChange (option) {
  selectedOption.value = option.value
}
</script>

<template>
  <AvTagPicker
    :options="options"
    :selected="selectedOption"
    :handle-select-change="handleSelectChange"
    label="Choose an option:"
  />
</template>
```

### Multiple selection mode

```vue
<script setup lang="ts">
const selectedOptions = ref(['1'])

function handleSelectChange (options) {
  selectedOptions.value = options.map(option => option.value)
}
</script>

<template>
  <AvTagPicker
    :options="options"
    :selected="selectedOptions"
    multiple
    :handle-select-change="handleSelectChange"
    label="Choose options:"
  />
</template>
```

# Enhanced drop-down list - `AvMultiselect`

## ✨ Introduction

`AvMultiselect` enables users to select one or many options from a custom drop-down list.

The component supports flat options and one level of grouped options. Users can search the list, select or deselect all visible active options, and select or deselect all active options in a group.

## 🏗️ Structure

The `AvMultiselect` consists of:

- a label, provided by the mandatory `label` prop;
- an optional hint, provided by the `hint` prop;
- a button displaying the placeholder or selected text;
- a custom options panel containing:
  - an optional search input;
  - an optional select-all button;
  - flat options or groups containing child options;
  - a group checkbox when grouped options are provided.

Groups support one nesting level only: a group contains options, but groups cannot contain other groups. Group objects are not added to the selected model; selecting a group selects or deselects its active child options.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `collapseHint` | `string` | `'Utilisez la tabulation (ou les touches flèches) pour naviguer dans la liste des suggestions'` | | Screen-reader-only hint for the options panel. |
| `collapseMaxHeight` | `string` | `undefined` | | Maximum height of the options panel. |
| `dense` | `boolean` | `undefined` | | Enables the dense display mode. |
| `disabled` | `boolean` | `undefined` | | Disables the multiselect. |
| `disabledTooltip` | `string` | `undefined` | | Tooltip displayed when the multiselect is disabled. |
| `errorMessage` | `string` | `''` | | Error message displayed below the multiselect. |
| `height` | `string` | `undefined` | | Fixed height of the multiselect button. |
| `hint` | `string` | `''` | | Guidance text displayed with the label. |
| `id` | `string` | `multi-select-${crypto.randomUUID()}` | | Unique identifier used for accessibility. |
| `label` | `string` | | ✅ | Text label for the multiselect. |
| `labelClass` | `string` | `''` | | Additional CSS class applied to the label. |
| `labelVisible` | `boolean` | `true` | | Controls whether the label is visually visible. The label remains available to assistive technologies when hidden. |
| `options` | `AvMultiselectItem[]` | `[]` | | Flat options or groups of options displayed in the list. |
| `placeholder` | `string` | | ✅ | Text displayed when no option is selected. |
| `search` | `boolean` | `false` | | Displays the search input. |
| `selectAll` | `boolean` | `false` | | Displays the button used to select or deselect all visible active options. |
| `selectAllLabel` | `[string, string]` | `['Tout sélectionner', 'Tout désélectionner']` | | Labels for the select-all and deselect-all states. |
| `selectedText` | `string` | | ✅ | Text displayed when at least one option is selected. |
| `successMessage` | `string` | `''` | | Success message displayed below the multiselect. |
| `width` | `string` | `undefined` | | Fixed width of the multiselect button. |

Individual options inherit `disabled` and `disabledTooltip` from `AvInteractiveProps`. Disabled options cannot be selected by clicking an option, selecting all options, or selecting a group. Their disabled tooltip is displayed when provided.

### Option types

`options` accepts flat options or groups with child options:

```ts
interface AvMultiselectOption {
  label: string
  value: string | number
  icon?: string
  disabled?: boolean
  disabledTooltip?: string
}

interface AvMultiselectOptionGroup {
  label: string
  children: AvMultiselectOption[]
}

type AvMultiselectItem = AvMultiselectOption | AvMultiselectOptionGroup
```

A group checkbox reflects the state of its active children. It is checked when all active children are selected, unchecked when none are selected, and partially checked when only some are selected. Disabled children are ignored when calculating and changing the group selection.

## 🔊 Events

| Name | Payload | Description |
| --- | --- | --- |
| `update:modelValue` | `AvMultiselectOption[]` | Emitted when the selected options change. The model contains option objects only; group objects are never emitted. |

The component supports `v-model` through the `modelValue` prop and the `update:modelValue` event.

## 🎨 Slots

None.

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-interaction-selects-avmultiselect--docs).

## 💡 Examples of use

### Flat options

```vue
<script setup lang="ts">
import { AvMultiselect, type AvMultiselectOption } from '@avenirs-esr/avenirs-dsav'
import { ref } from 'vue'

const selectedOptions = ref<AvMultiselectOption[]>([])
</script>

<template>
  <AvMultiselect
    v-model="selectedOptions"
    :options="[
      { value: 1, label: 'Choice number 1' },
      { value: 2, label: 'Choice number 2' },
      { value: 3, label: 'Choice number 3' },
    ]"
    placeholder="Select options"
    selected-text="Options selected"
    label="Options"
  />
</template>
```

### Grouped options

```vue
<script setup lang="ts">
import { AvMultiselect, type AvMultiselectOption } from '@avenirs-esr/avenirs-dsav'
import { ref } from 'vue'

const selectedOptions = ref<AvMultiselectOption[]>([])
</script>

<template>
  <AvMultiselect
    v-model="selectedOptions"
    :options="[
      {
        label: 'Group 1',
        children: [
          { value: 'choice-1', label: 'Choice 1' },
          { value: 'choice-2', label: 'Choice 2' },
        ],
      },
      {
        label: 'Group 2',
        children: [
          { value: 'choice-3', label: 'Choice 3' },
        ],
      },
    ]"
    placeholder="Select options"
    selected-text="Options selected"
    label="Options"
    search
    select-all
  />
</template>
```

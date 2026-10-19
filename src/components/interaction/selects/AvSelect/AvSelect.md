# Enhanced drop-down list - `AvSelect`

## ✨ Introduction

`AvSelect` enables users to select one or multiple options from a custom drop-down list, depending on the `multiple` prop.

The component supports flat options and one level of grouped options. Users can search the list. In multiple-selection mode, they can select or deselect all visible enabled options and select or deselect all enabled options within a group.

**Single-selection mode** is enabled when `multiple` is `false`. **Multiple-selection mode** is enabled when `multiple` is `true`.

The component supports disabled options, optional tooltips for disabled options, hints, validation messages, and configurable dimensions.

## 🏗️ Structure

The `AvSelect` consists of:

- a label, provided by the mandatory `label` prop;
- an optional hint, provided by the `hint` prop;
- a button displaying the placeholder, the selected option label, or the configured selected text;
- a custom options panel containing:
  - an optional search input;
  - an optional select-all button, available in multiple-selection mode;
  - flat options or groups containing child options;
  - a group checkbox when grouped options are provided in multiple-selection mode;
  - a message when no options match the search;

Groups support one nesting level only: a group contains options, but groups cannot contain other groups. Group objects are not included in the selected model; selecting a group selects or deselects its enabled child options.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `collapseHint` | `string` | `'Utilisez la tabulation (ou les touches flèches) pour naviguer dans la liste des suggestions'` | | Screen-reader-only hint for the options panel. |
| `collapseMaxHeight` | `string` | `undefined` | | Maximum height of the options list. |
| `dense` | `boolean` | `undefined` | | Enables the dense display mode. |
| `disabled` | `boolean` | `undefined` | | Disables the select. |
| `disabledTooltip` | `string` | `undefined` | | Tooltip displayed when the select is disabled. |
| `errorMessage` | `string` | `''` | | Error message displayed below the select. Hides `successMessage` when both are provided. |
| `height` | `string` | `undefined` | | CSS height applied to the select button, such as `2.5rem` or `100%`. |
| `hint` | `string` | `''` | | Guidance text displayed alongside the label. |
| `id` | `string` | Generated using `crypto.randomUUID()` | | Unique identifier used for accessibility. |
| `label` | `string` | | ✅ | Text label for the select. |
| `labelClass` | `string` | `''` | | Additional CSS class applied to the label. |
| `labelVisible` | `boolean` | `true` | | Controls whether the label is visually visible. The label remains available to assistive technologies when hidden. |
| `multiple` | `boolean` | `false` | | Enables multiple selection when `true`, or single selection when `false`. |
| `options` | `AvSelectItem[]` | `[]` | | Flat options or groups of options displayed in the list. |
| `placeholder` | `string` | | ✅ | Text displayed when no option is selected, or when a selected value cannot be resolved to an available option. |
| `required` | `boolean` | `false` | | Marks the select as required and prevents clearing the selection through an individual option interaction in single-selection mode. |
| `search` | `boolean` | `false` | | Displays the search input used to filter options by label. |
| `selectAll` | `boolean` | `false` | | Displays the button used to select or deselect all visible enabled options. Only applies in multiple-selection mode. |
| `selectAllLabel` | `[string, string]` | `['Tout sélectionner', 'Tout désélectionner']` | | Labels for the select-all and deselect-all states, respectively. |
| `selectedText` | `string` | `'fichier(s) sélectionné(s)'` | | Text displayed when at least one option is selected in multiple-selection mode. |
| `successMessage` | `string` | `''` | | Success message displayed below the select when no error message is provided. |
| `width` | `string` | `undefined` | | CSS width applied to the select container and button, such as `20rem` or `100%`. |
| `prefixIcon` | `string` | `undefined` | | Prefix icon displayed inside the select button. |

Individual options inherit `disabled` and `disabledTooltip` from `AvInteractiveProps`. Disabled options cannot be selected through individual option interactions, group selection, or select-all. Their disabled tooltip is displayed when provided.

The `required` prop does not replace form-level validation. It prevents clearing an existing single selection through the individual option interaction handled by the component.

## 🧩 Option types

The `options` prop accepts flat options or groups containing child options.

```ts
interface AvSelectOption extends AvInteractiveProps {
  label: string
  icon?: string
  value: string | number
}

interface AvSelectOptionGroup {
  id: string
  label: string
  children: AvSelectOption[]
}

interface AvSelectSelectedOption extends AvSelectOption {
  parentId?: string
}

type AvSelectItem = AvSelectOption | AvSelectOptionGroup
```

- `AvSelectOption` represents an individual selectable option.
- `AvSelectOptionGroup` organizes options under a group label. Its `id` is required.
- `AvSelectSelectedOption` represents a selected option and may include `parentId` when the option belongs to a group.
- `AvSelectItem` is the union of individual options and groups.

### Group selection

A group checkbox reflects the state of its enabled children:

- **Checked:** all enabled children are selected.
- **Unchecked:** not all enabled children are selected.

Disabled children are ignored when calculating and changing the group selection. A group checkbox is disabled when every child in the group is disabled.

Groups are never emitted as selected values. Selecting a group updates the selection with its enabled child options.

### Search and select-all

When `search` is enabled, options are filtered by their labels, without case sensitivity. For groups, the group is displayed only when at least one child matches the search.

When `multiple` and `selectAll` are both enabled, the select-all button applies to the currently visible enabled options. Disabled options are excluded. The button selects all such options when they are not all selected, and deselects them when they are all selected.

Selecting or deselecting all visible options does not remove selected options that are hidden by the current search filter.

## 🔊 Events and `v-model`

The component uses Vue's `v-model` API through the `modelValue` prop and the `update:modelValue` event.

| Name | Payload | Description |
| --- | --- | --- |
| `update:modelValue` | `AvSelectSelectedOption[] \| AvSelectSelectedOption \| null` | Emitted when the selection changes. The payload is an array in multiple-selection mode, and an option or `null` in single-selection mode. |

The expected model type depends on the `multiple` prop:

- When `multiple` is `true`, use `AvSelectSelectedOption[]`.
- When `multiple` is `false`, use `AvSelectSelectedOption | null`.

Selected options retain their original properties, including `label`, `value`, `icon`, and any applicable disabled-option properties. For grouped options, the selected child option includes `parentId`, identifying its parent group.

The `parentId` property is added when the selected value is resolved against the current options and belongs to a group. It is not required for standalone options.

Example:

```ts
const selectedOption = ref<AvSelectSelectedOption | null>(null)

const selectedOptions = ref<AvSelectSelectedOption[]>([])
```

## 🎨 Slots

None.

## 🚀 Storybook demos

You can find examples and demos on the dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-interaction-selects-AvSelect--docs).

## 💡 Examples of use

### Single selection

```vue
<script setup lang="ts">
import type { AvSelectSelectedOption } from '@avenirs-esr/avenirs-dsav'
import { AvSelect } from '@avenirs-esr/avenirs-dsav'
import { ref } from 'vue'

const selectedOption = ref<AvSelectSelectedOption | null>(null)

const options = [
  { value: 1, label: 'Choice number 1' },
  { value: 2, label: 'Choice number 2' },
  { value: 3, label: 'Choice number 3' },
]
</script>

<template>
  <AvSelect
    v-model="selectedOption"
    :options="options"
    placeholder="Select an option"
    label="Option"
  />
</template>
```

### Multiple selection

```vue
<script setup lang="ts">
import type { AvSelectSelectedOption } from '@avenirs-esr/avenirs-dsav'
import { AvSelect } from '@avenirs-esr/avenirs-dsav'
import { ref } from 'vue'

const selectedOptions = ref<AvSelectSelectedOption[]>([])

const options = [
  { value: 1, label: 'Choice number 1' },
  { value: 2, label: 'Choice number 2' },
  { value: 3, label: 'Choice number 3' },
]
</script>

<template>
  <AvSelect
    v-model="selectedOptions"
    :options="options"
    placeholder="Select options"
    selected-text="Options selected"
    label="Options"
    multiple
  />
</template>
```

### Grouped options

```vue
<script setup lang="ts">
import type { AvSelectSelectedOption } from '@avenirs-esr/avenirs-dsav'
import { AvSelect } from '@avenirs-esr/avenirs-dsav'
import { ref } from 'vue'

const selectedOptions = ref<AvSelectSelectedOption[]>([])

const options = [
  {
    id: 'group-1',
    label: 'Group 1',
    children: [
      { value: 'choice-1', label: 'Choice 1' },
      { value: 'choice-2', label: 'Choice 2' },
    ],
  },
  {
    id: 'group-2',
    label: 'Group 2',
    children: [
      { value: 'choice-3', label: 'Choice 3' },
    ],
  },
]
</script>

<template>
  <AvSelect
    v-model="selectedOptions"
    :options="options"
    placeholder="Select options"
    selected-text="Options selected"
    label="Options"
    search
    select-all
    multiple
  />
</template>
```

### Disabled options

```vue
<script setup lang="ts">
import type { AvSelectSelectedOption } from '@avenirs-esr/avenirs-dsav'
import { AvSelect } from '@avenirs-esr/avenirs-dsav'
import { ref } from 'vue'

const selectedOptions = ref<AvSelectSelectedOption[]>([])

const options = [
  { value: 'available', label: 'Available option' },
  {
    value: 'unavailable',
    label: 'Unavailable option',
    disabled: true,
    disabledTooltip: 'This option is unavailable',
  },
]
</script>

<template>
  <AvSelect
    v-model="selectedOptions"
    :options="options"
    placeholder="Select options"
    label="Options"
    multiple
  />
</template>
```

### Selection utilities

The library provides utility functions to normalize the value emitted by `AvSelect`. They are useful when handling the component's model value, which can represent a single selection, multiple selections, or no selection.

#### `getAvSelectSelectedOptions`

Returns the selected options as an array, regardless of whether the input contains a single option or an array of options. Returns `null` when no selection is available.

```ts
import type { AvSelectModelValue } from '@avenirs-esr/avenirs-dsav'
import { getAvSelectSelectedOptions } from '@avenirs-esr/avenirs-dsav'

const selectedValue: AvSelectModelValue = {
  value: 'choice-1',
  label: 'Choice 1',
}

const selectedOptions = getAvSelectSelectedOptions(selectedValue)
// [{ value: 'choice-1', label: 'Choice 1' }]
```

This is particularly useful when the calling code always needs to iterate over the selected options:

```ts
const selectedOptions = getAvSelectSelectedOptions(modelValue)

if (selectedOptions) {
  selectedOptions.forEach((option) => {
    console.log(option.value)
  })
}
```

#### `getAvSelectSelectedOption`

Returns the selected option when the input contains a single option, or the first selected option when it contains an array. Returns `null` when no selection is available.

```ts
import type { AvSelectModelValue } from '@avenirs-esr/avenirs-dsav'
import { getAvSelectSelectedOption } from '@avenirs-esr/avenirs-dsav'

const selectedValue: AvSelectModelValue = [
  { value: 'choice-1', label: 'Choice 1' },
  { value: 'choice-2', label: 'Choice 2' },
]

const selectedOption = getAvSelectSelectedOption(selectedValue)
// { value: 'choice-1', label: 'Choice 1' }
```

This is useful when the calling code only needs one option, for example to retrieve its value:

```ts
const selectedOption = getAvSelectSelectedOption(modelValue)

if (selectedOption) {
  console.log(selectedOption.value)
}
```

Both utilities accept `AvSelectModelValue`, which represents the possible values emitted by `AvSelect`:

```ts
type AvSelectModelValue = AvSelectSelectedOption | AvSelectSelectedOption[] | null
```

Use `getAvSelectSelectedOptions` when working with a collection of selected options, and `getAvSelectSelectedOption` when only one option is needed.
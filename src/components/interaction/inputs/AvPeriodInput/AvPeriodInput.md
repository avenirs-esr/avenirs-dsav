# Period input - `AvPeriodInput`

## ✨ Introduction

The `AvPeriodInput` component allows users to select a period by choosing a start date and an end date.

It supports two label modes:
- **Single label** (default): one label is displayed above both inputs via the `label` prop
- **Separated labels**: each input has its own label via `startLabel` and `endLabel`, enabled with `showEachInputLabel`

It includes a built-in range behavior:
- selecting a start date automatically constrains the end date minimum
- selecting an end date automatically constrains the start date maximum

## 🏗️ Structure

The period input is composed of:
- a wrapper label (single mode) or individual input labels (separated mode)
- a start date input
- a spacer separator (spacing is customizable)
- an end date input

## 🏷️ Props

This component uses a **discriminated union** based on `showEachInputLabel`:

### Common props

| Name                | Type | Default | Mandatory | Description                                                                           |
|---------------------| --- | --- | --- |---------------------------------------------------------------------------------------|
| `id`                | `string` | `period-input-${crypto.randomUUID()}` |  | Unique id for the period input.                                                       |
| `labelClass`        | `string` | `'b2-light'` |  | CSS class for the label.                                                              |
| `labelVisible`      | `boolean` | `true` |  | Whether the label is visible.                                                         |
| `startModelValue`   | `string` | `''` |  | Start date value (ISO string: `YYYY-MM-DD`).                                          |
| `endModelValue`     | `string` | `''` |  | End date value (ISO string: `YYYY-MM-DD`).                                            |
| `startErrorMessage` | `string` | `''` |  | Error message for start input.                                                        |
| `endErrorMessage`   | `string` | `''` |  | Error message for end input.                                                          |
| `startDateDisabled` | `boolean` | `false` |  | If `true`, disable only the start date input.                                         |
| `endDateDisabled`   | `boolean` | `false` |  | If `true`, disable only the end date input.                                           |
| `width`             | `string` |  |  | Optional width for both inputs (CSS value).                                           |
| `startMinDate`      | `Date` |  |  | Minimum selectable date for the start input.                                          |
| `startMaxDate`      | `Date` |  |  | Maximum selectable date for the start input. Also impacted by the selected end date.  |
| `endMinDate`        | `Date` |  |  | Minimum selectable date for the end input. Also impacted by the selected start date.  |
| `endMaxDate`        | `Date` |  |  | Maximum selectable date for the end input.                                            |
| `stacked`           | `boolean` | `false` |  | If `true`, stack inputs vertically.                                                   |
| `separatorSpacing`  | `string` | `var(--spacing-sm)` |  | Spacing between inputs. Uses `width` in horizontal mode and `height` in stacked mode. |
| `type`              | `'date' \| 'datetime-local' \| 'month' \| 'time' \| 'week'` | `'date'` |  | Input type for both date inputs.                                                      |

### When `showEachInputLabel` is `false` or not set (default)

| Name         | Type     | Default | Mandatory | Description                              |
|--------------|----------|---------|-----------|------------------------------------------|
| `label`      | `string` |         | ✅         | Label displayed above the two inputs.    |
| `startLabel` | `string` |         |           | Accessible label for the start input.    |
| `endLabel`   | `string` |         |           | Accessible label for the end input.      |

### When `showEachInputLabel` is `true`

| Name                | Type      | Default | Mandatory | Description                                       |
|---------------------|-----------|---------|-----------|---------------------------------------------------|
| `showEachInputLabel`| `boolean` | `false` | ✅         | If `true`, show individual labels per input.      |
| `startLabel`        | `string`  |         | ✅         | Label displayed above the start input.            |
| `endLabel`          | `string`  |         | ✅         | Label displayed above the end input.              |
| `label`             | `string`  |         |           | Ignored when `showEachInputLabel` is `true`.      |

## 🔁 Built-in range behavior

Without any extra configuration:
- if `startModelValue` is valid, the end input `minDate` becomes `max(endMinDate, startSelectedDate)`
- if `endModelValue` is valid, the start input `maxDate` becomes `min(startMaxDate, endSelectedDate)`

External constraints (`startMinDate`, `startMaxDate`, `endMinDate`, `endMaxDate`) are always respected.

## 🔊 Events

| Name | Data (*payload*) | Description |
| --- | --- | --- |
| `update:startModelValue` | `string` | Emitted when the start date changes |
| `update:endModelValue` | `string` | Emitted when the end date changes |
| `change` | `{ start: string; end: string }` | Emitted when either start or end date changes |

## 🎨 Slots

None.

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated Storybook page.

## 💡 Examples of use

### Single label (default)

```vue
<script setup lang="ts">
import AvPeriodInput from '@/components/interaction/inputs/AvPeriodInput/AvPeriodInput.vue'

const start = ref('')
const end = ref('')
</script>

<template>
  <AvPeriodInput
    label="Period"
    start-label="Start"
    end-label="End"
    :start-model-value="start"
    :end-model-value="end"
    @update:start-model-value="start = $event"
    @update:end-model-value="end = $event"
  />
</template>
```

### Separated labels (`showEachInputLabel`)

Use this mode when each input needs its own visible label, for example inside a form.

```vue
<script setup lang="ts">
import AvPeriodInput from '@/components/interaction/inputs/AvPeriodInput/AvPeriodInput.vue'

const start = ref('')
const end = ref('')
</script>

<template>
  <AvPeriodInput
    show-each-input-label
    start-label="Start date"
    end-label="End date"
    :start-model-value="start"
    :end-model-value="end"
    @update:start-model-value="start = $event"
    @update:end-model-value="end = $event"
  />
</template>
```

### With validation error messages

```vue
<template>
  <AvPeriodInput
    label="Execution period"
    start-label="Start"
    end-label="End"
    :start-model-value="start"
    :end-model-value="end"
    :start-error-message="startError"
    :end-error-message="endError"
    @update:start-model-value="start = $event"
    @update:end-model-value="end = $event"
  />
</template>
```

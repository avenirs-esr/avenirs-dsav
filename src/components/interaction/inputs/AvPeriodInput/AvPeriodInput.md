# Period input - `AvPeriodInput`

## ✨ Introduction

The `AvPeriodInput` component allows users to select a period by choosing a start date and an end date under a single label.

It includes a built-in range behavior:
- selecting a start date automatically constrains the end date minimum
- selecting an end date automatically constrains the start date maximum

## 🏗️ Structure

The period input is composed of:
- a wrapper label
- a start date input
- a spacer separator (spacing is customizable)
- an end date input

## 🏷️ Props

| Name | Type | Default | Mandatory | Description                                                                           |
| --- | --- | --- | --- |---------------------------------------------------------------------------------------|
| `id` | `string` | `period-input-${crypto.randomUUID()}` |  | Unique id for the period input.                                                       |
| `label` | `string` |  | ✅ | Label displayed above the two inputs.                                                 |
| `labelClass` | `string` | `'b2-light'` |  | CSS class for the common label                                                        |
| `startModelValue` | `string` | `''` |  | Start date value (ISO string: `YYYY-MM-DD`).                                          |
| `endModelValue` | `string` | `''` |  | End date value (ISO string: `YYYY-MM-DD`).                                            |
| `startLabel` | `string` |  | ✅ | Label for the start input (internal labels are hidden by default).                    |
| `endLabel` | `string` |  | ✅ | Label for the end input (internal labels are hidden by default).                      |
| `disabled` | `boolean` | `false` |  | If `true`, disable both inputs.                                                       |
| `width` | `string` |  |  | Optional width for both inputs (CSS value).                                           |
| `startMinDate` | `Date` |  |  | Minimum selectable date for the start input.                                          |
| `startMaxDate` | `Date` |  |  | Maximum selectable date for the start input. Also impacted by the selected end date.  |
| `endMinDate` | `Date` |  |  | Minimum selectable date for the end input. Also impacted by the selected start date.  |
| `endMaxDate` | `Date` |  |  | Maximum selectable date for the end input.                                            |
| `stacked` | `boolean` | `false` |  | If `true`, stack inputs vertically.                                                   |
| `separatorSpacing` | `string` | `var(--spacing-sm)` |  | Spacing between inputs. Uses `width` in horizontal mode and `height` in stacked mode. |

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

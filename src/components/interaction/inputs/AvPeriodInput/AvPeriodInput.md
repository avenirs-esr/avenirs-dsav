# Period input - `AvPeriodInput`

## ✨ Introduction

The `AvPeriodInput` component allows users to select a period by choosing a start date and an end date under a single label.

It is designed to be simple, flexible and consistent with DSAV input patterns.

## 🏗️ Structure

The period input is composed of:
- a wrapper label
- a start date input
- a spacer element used as a separator
- an end date input

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `id` | `string` | `period-input-${crypto.randomUUID()}` |  | Unique id for the period input. |
| `label` | `string` | `'Period'` |  | Label displayed above the two inputs. |
| `startModelValue` | `string` | `''` |  | Start date value (ISO string: `YYYY-MM-DD`). |
| `endModelValue` | `string` | `''` |  | End date value (ISO string: `YYYY-MM-DD`). |
| `startLabel` | `string` |  |  | Optional label for the start input (internal labels are hidden by default). |
| `endLabel` | `string` |  |  | Optional label for the end input (internal labels are hidden by default). |
| `disabled` | `boolean` | `false` |  | If `true`, disable both inputs. |
| `startWidth` | `string` |  |  | Optional width for the start input (CSS value). |
| `endWidth` | `string` |  |  | Optional width for the end input (CSS value). |
| `separatorSpacing` | `string` | `var(--spacing-3)` |  | Spacing between the start and end inputs (any valid CSS length). |
| `startMinDate` | `Date` |  |  | Minimum selectable date for the start input. |
| `startMaxDate` | `Date` |  |  | Maximum selectable date for the start input. |
| `endMinDate` | `Date` |  |  | Minimum selectable date for the end input. |
| `endMaxDate` | `Date` |  |  | Maximum selectable date for the end input. |
| `stacked` | `boolean` | `false` |  | If `true`, stack inputs vertically (useful for mobile layouts). |

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
import { isValid } from 'date-fns'
import AvPeriodInput from '@/components/interaction/inputs/AvPeriodInput/AvPeriodInput.vue'

function getDateSelectedFromString (date: string | undefined) {
  if (!date || !isValid(new Date(date))) {
    return undefined
  }
  return new Date(date)
}

const start = ref('')
const end = ref('')
</script>

<template>
  <AvPeriodInput
    label="Period"
    :start-model-value="start"
    :end-model-value="end"
    separator-spacing="1rem"
    :start-max-date="getDateSelectedFromString(end)"
    :end-min-date="getDateSelectedFromString(start)"
    @update:start-model-value="start = $event"
    @update:end-model-value="end = $event"
  />
</template>
```

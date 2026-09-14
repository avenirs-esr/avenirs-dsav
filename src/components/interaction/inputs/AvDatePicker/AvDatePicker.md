# Date picker - `AvDatePicker`

## ✨ Introduction

The `AvDatePicker` component renders a single date input with an associated label, built on top of [VueDatePicker](https://vue3datepicker.com/).

It supports several input types via the `type` prop: `date`, `datetime-local`, `month`, `time`, `week` and `range`.

The locale shortcuts currently mapped by the component are not exhaustive. If a locale is missing or if a product needs a specific display/parsing rule, use the `formats` prop to pass a custom VueDatePicker format configuration.

## 🏗️ Structure

The date picker is composed of:
- a label
- a date input
- an optional error message

## 🏷️ Props

| Name              | Type | Default | Mandatory | Description                                                                     |
|-------------------|------|---------|-----------|-----------------------------------------------------------------------------------|
| `autoApply`       | `boolean` | `true` |  | Whether a selection is applied immediately without a confirm action, forwarded to VueDatePicker. |
| `clearLabel`      | `string` | `'clear'` |  | Label of the clear button.                                                       |
| `disabled`        | `boolean` | `false` |  | Whether the date input is disabled, forwarded to VueDatePicker.                   |
| `errorMessage`    | `string \| string[]` |  |  | Error message(s) displayed below the date input.                                  |
| `formats`         | `Partial<FormatsConfig> \| null` | Type-based localized tokens |  | Custom display/parsing formats forwarded to VueDatePicker. When omitted, the component uses type-based date-fns tokens formatted from the resolved locale. Custom values override these defaults, and `null` disables them. |
| `id`              | `string` | `date-picker-${crypto.randomUUID()}` |  | Unique id for the date input.                                                     |
| `inputAttrs`      | `Partial<InputAttributesConfig>` |  |  | Attributes forwarded to the underlying date input element, forwarded to VueDatePicker. |
| `label`           | `string` | `''` |  | Label displayed above the date input.                                             |
| `labelClass`      | `string` | `'b2-light'` |  | CSS class for the label.                                                          |
| `labelVisible`    | `boolean` | `true` |  | Whether the label is visible.                                                     |
| `locale`          | `string` | `fr` |  | Locale used to render and format the date picker. Values `fr`, `fr-FR`, `en`, `en-US`, and `en-GB` are converted to matching date-fns Locale objects; omitted or unsupported strings fall back to French. This mapped list is not exhaustive, so use `formats` for custom display/parsing needs. |
| `maxDate`         | `DateValue` |  |  | Maximum selectable date, forwarded to VueDatePicker.                              |
| `minDate`         | `DateValue` |  |  | Minimum selectable date, forwarded to VueDatePicker.                              |
| `modelValue`      | `Date \| MonthModel \| TimeModel \| [Date, Date] \| null` |  | ✅ | Current value of the date input.                                                  |
| `placeholder`     | `string` |  |  | Placeholder text for the date input, forwarded to VueDatePicker.                  |
| `timeConfig`      | `Partial<TimeConfig>` |  |  | Time picker configuration, forwarded to VueDatePicker.                            |
| `type`            | `'date' \| 'datetime-local' \| 'month' \| 'time' \| 'week' \| 'range'` | `'date'` |  | Type of date picker to render.                                                    |
| `width`           | `string` |  |  | Width of the date input (CSS value).                                              |

## 🔊 Events

| Name | Data (*payload*) | Description |
| --- | --- | --- |
| `update:modelValue` | `Date \| MonthModel \| TimeModel \| [Date, Date] \| null` | Emitted when the date value changes |
| `change` | `Date \| MonthModel \| TimeModel \| [Date, Date] \| null` | Emitted when the date value changes |

## 🎨 Slots

None.

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-interaction-inputs-avdatepicker--docs).

## 💡 Examples of use

### Basic usage

```vue
<script setup lang="ts">
import { ref } from 'vue'
import AvDatePicker from '@/components/interaction/inputs/AvDatePicker/AvDatePicker.vue'

const date = ref<Date | null>(null)
</script>

<template>
  <AvDatePicker
    label="Date"
    :model-value="date"
    @update:model-value="date = $event"
  />
</template>
```

### With min/max date

```vue
<template>
  <AvDatePicker
    label="Date"
    :model-value="date"
    :min-date="new Date('2026-01-01')"
    :max-date="new Date('2026-12-31')"
    @update:model-value="date = $event"
  />
</template>
```

### With validation error message

```vue
<template>
  <AvDatePicker
    label="Date"
    :model-value="date"
    error-message="This date is required."
    @update:model-value="date = $event"
  />
</template>
```

### With custom format

```vue
<template>
  <AvDatePicker
    label="Date"
    :model-value="date"
    :formats="{ input: 'dd.MM.yyyy', preview: 'dd.MM.yyyy' }"
    @update:model-value="date = $event"
  />
</template>
```

### Manipulating the result

`modelValue` shape depends on `type`: a `Date` for `date`/`datetime-local`, a `MonthModel` for `month`, a `TimeModel` for `time`, and a `[Date, Date]` tuple for `range`. Use the `isDate`, `isMonthModel`, `isTimeModel`, `isDateRange` and `toDate` helpers exported from `dsav-utils` to narrow and convert the value safely instead of inspecting its shape manually.

```vue
<script setup lang="ts">
import type { AvDatePickerModel } from '@/components/interaction/inputs/AvDatePicker/AvDatePicker.types'
import { ref } from 'vue'
import AvDatePicker, { type AvDatePickerProps } from '@/components/interaction/inputs/AvDatePicker/AvDatePicker.vue'
import { isDate, isDateRange, isMonthModel, isTimeModel, toDate } from '@/utils'

const monthValue = ref<AvDatePickerModel>(null)

function onUpdate (value: AvDatePickerModel) {
  if (isDate(value)) {
    console.log('Selected date:', value)
  }

  if (isMonthModel(value)) {
    const date = toDate(value)
    console.log('Selected month as a Date:', date)
  }

  if (isTimeModel(value)) {
    console.log('Selected time:', `${value.hours}:${value.minutes}`)
  }

  if (isDateRange(value)) {
    const [start, end] = value
    console.log('Selected range:', start, end)
  }
}
</script>

<template>
  <AvDatePicker
    label="Month"
    type="month"
    :model-value="monthValue"
    @update:model-value="onUpdate"
  />
</template>
```

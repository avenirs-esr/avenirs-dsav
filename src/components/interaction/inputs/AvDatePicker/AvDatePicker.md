# Date picker - `AvDatePicker`

## ✨ Introduction

The `AvDatePicker` component renders a single date input with an associated label, built on top of [VueDatePicker](https://vue3datepicker.com/).

It supports several input types via the `type` prop: `date`, `datetime-local`, `month`, `time` and `week`.

The `range` prop is independent from `type`, so it can be combined with any of them (e.g. a plain date range, a month range, or a week range).

The locale shortcuts currently mapped by the component are not exhaustive. If a locale is missing or if a product needs a specific display/parsing rule, use the `formats` prop to pass a custom VueDatePicker format configuration.

## 🏗️ Structure

The date picker is composed of:
- a label row, with the label and an optional `labelSuffix` slot content, spaced apart
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
| `modelValue`      | `Date \| MonthModel \| TimeModel \| [Date, Date] \| [MonthModel, MonthModel] \| [TimeModel, TimeModel] \| null` |  | ✅ | Current value of the date input.                                                  |
| `placeholder`     | `string` |  |  | Placeholder text for the date input, forwarded to VueDatePicker.                  |
| `range`           | `boolean \| Partial<RangeConfig>` | `false` |  | Whether the date input allows selecting a range, forwarded to VueDatePicker. Independent from `type`, so it can be combined with any of them. |
| `timeConfig`      | `Partial<TimeConfig>` |  |  | Time picker configuration, forwarded to VueDatePicker.                            |
| `type`            | `'date' \| 'datetime-local' \| 'month' \| 'time' \| 'week'` | `'date'` |  | Type of date picker to render.                                                    |
| `width`           | `string` |  |  | Width of the date input (CSS value).                                              |

## 🔊 Events

| Name | Data (*payload*) | Description |
| --- | --- | --- |
| `update:modelValue` | `Date \| MonthModel \| TimeModel \| [Date, Date] \| [MonthModel, MonthModel] \| [TimeModel, TimeModel] \| null` | Emitted when the date value changes |
| `change` | `Date \| MonthModel \| TimeModel \| [Date, Date] \| null` | Emitted when the date value changes |

## 🎨 Slots

| Name | Description |
| --- | --- |
| `labelSuffix` | Content rendered next to the label, in the label row. Empty by default. |

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

### With a date range

```vue
<template>
  <AvDatePicker
    label="Period"
    range
    :model-value="dateRange"
    @update:model-value="dateRange = $event"
  />
</template>
```

### With a month range

The `range` prop is independent from `type`, so it can be combined with `month` to select a range of months.

```vue
<template>
  <AvDatePicker
    label="Period"
    type="month"
    range
    :model-value="monthRange"
    @update:model-value="monthRange = $event"
  />
</template>
```

### With a label suffix

```vue
<template>
  <AvDatePicker
    label="Date"
    :model-value="date"
    @update:model-value="date = $event"
  >
    <template #labelSuffix>
      <span class="b2-light">Optional</span>
    </template>
  </AvDatePicker>
</template>
```

### Manipulating the result

`modelValue` shape depends on `type` and whether `range` is enabled: a `Date` for `date`/`datetime-local`, a `MonthModel` for `month`, a `TimeModel` for `time`, and a `[Date, Date]`, `[MonthModel, MonthModel]` or `[TimeModel, TimeModel]` tuple when `range` is used with the matching `type`. Use the `isDate`, `isMonthModel`, `isTimeModel`, `isDateRange`, `isMonthRange`, `isTimeRange` and `toDate` helpers exported from `dsav-utils` to narrow and convert the value safely instead of inspecting its shape manually.

```vue
<script setup lang="ts">
import type { AvDatePickerModel } from '@/components/interaction/inputs/AvDatePicker/AvDatePicker.types'
import { ref } from 'vue'
import AvDatePicker, { type AvDatePickerProps } from '@/components/interaction/inputs/AvDatePicker/AvDatePicker.vue'
import { isDate, isDateRange, isMonthModel, isMonthRange, isTimeModel, isTimeRange, toDate } from '@/utils'

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

  if (isMonthRange(value)) {
    const [start, end] = value
    console.log('Selected month range:', start, end)
  }

  if (isTimeRange(value)) {
    const [start, end] = value
    console.log('Selected time range:', start, end)
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

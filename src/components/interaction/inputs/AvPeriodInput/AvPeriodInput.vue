<script lang="ts" setup>
import { isValid, max, min, parseISO } from 'date-fns'
import AvInput, { type AvInputProps } from '@/components/interaction/inputs/AvInput/AvInput.vue'

/**
 * AvPeriodInput component.
 *
 * This component renders two date inputs (start/end) under a single label.
 * It is designed to be used for period/range selection.
 */
export interface AvPeriodInputProps {
  /**
   * Unique id for the period input
   * @default `period-input-${crypto.randomUUID()}`
   */
  id?: string

  /**
   * Label displayed above the two inputs
   */
  label: string

  /**
   * CSS class for the label
   * @default 'b2-light'
   */
  labelClass?: string

  /**
   * Start date value (ISO string: YYYY-MM-DD)
   * @default ''
   */
  startModelValue?: string

  /**
   * End date value (ISO string: YYYY-MM-DD)
   * @default ''
   */
  endModelValue?: string

  /**
   * Label for the start input (optional).
   * Note: the internal labels are hidden by default since this component has a single wrapper label.
   */
  startLabel: string

  /**
   * Label for the end input (optional).
   * Note: the internal labels are hidden by default since this component has a single wrapper label.
   */
  endLabel: string

  /**
   * Optional width for both inputs (CSS value)
   * e.g. '14.875rem', '240px', '100%'
   */
  width?: string

  /**
   * Minimum selectable date for the start input
   */
  startMinDate?: Date

  /**
   * Maximum selectable date for the start input
   */
  startMaxDate?: Date

  /**
   * Minimum selectable date for the end input
   */
  endMinDate?: Date

  /**
   * Maximum selectable date for the end input
   */
  endMaxDate?: Date

  /**
   * If `true`, stack inputs vertically (useful for mobile layouts)
   * @default false
   */
  stacked?: boolean

  /**
   * Spacing between start and end inputs.
   * Accepts any valid CSS length (e.g. '0.5rem', '1rem', '16px').
   * @default var(--spacing-sm)
   */
  separatorSpacing?: string
  /**
   * If `true`, disable the end date input
   * @default false
   */
  endDateDisabled?: boolean
  /**
   * If `true`, disable the start date input
   * @default false
   */
  startDateDisabled?: boolean
  /**
   * Input type for both date inputs
   * @default 'date'
   */
  type?: Extract<AvInputProps['type'], 'date' | 'datetime-local' | 'month' | 'time' | 'week'>
  /**
   * Whether the label is visible
   * @default true
   */
  labelVisible?: boolean
  /**
   * Error message for start input
   */
  startErrorMessage?: string
  /**
   * Error message for end input
   */
  endErrorMessage?: string

  /**
   * If `true`, show individual labels for each input (start/end) instead of a single wrapper label.
   * Note: if this prop is `true`, the `label` prop will be ignored and the `startLabel` and `endLabel` will be shown instead.
   */
  showEachInputLabel?: boolean
}

const {
  id,
  label,
  labelClass = 'b2-light',
  startModelValue = '',
  endModelValue = '',
  startLabel,
  endLabel,
  width,
  startMinDate,
  startMaxDate,
  endMinDate,
  endMaxDate,
  stacked = false,
  startDateDisabled = false,
  endDateDisabled = false,
  separatorSpacing = 'var(--spacing-sm)',
  labelVisible = true,
  type = 'date',
  startErrorMessage,
  endErrorMessage,
  showEachInputLabel = false,
} = defineProps<AvPeriodInputProps>()

/**
 * Events emitted by the AvPeriodInput component.
 * @event update:startModelValue - Emitted when the start date changes
 * @event update:endModelValue - Emitted when the end date changes
 * @event change - Emitted when either start or end date changes
 */
const emit = defineEmits<{
  (e: 'update:startModelValue', payload: string): void
  (e: 'update:endModelValue', payload: string): void
  (e: 'change', payload: { start: string, end: string }): void
}>()

const realId = computed(() => id ?? `period-input-${crypto.randomUUID()}`)
const startId = computed(() => `${realId.value}__start`)
const endId = computed(() => `${realId.value}__end`)

function toValidDate (value?: string): Date | undefined {
  if (!value) {
    return undefined
  }
  const date = parseISO(value)
  return isValid(date) ? date : undefined
}

function maxOfDates (first?: Date, second?: Date): Date | undefined {
  return first && second ? max([first, second]) : first ?? second
}

function minOfDates (first?: Date, second?: Date): Date | undefined {
  return first && second ? min([first, second]) : first ?? second
}

const startSelectedDate = computed(() => toValidDate(startModelValue))
const endSelectedDate = computed(() => toValidDate(endModelValue))

const computedStartMinDate = computed(() => startMinDate)

const computedStartMaxDate = computed(() => {
  return minOfDates(startMaxDate, endSelectedDate.value)
})

const computedEndMinDate = computed(() => {
  return maxOfDates(endMinDate, startSelectedDate.value)
})

const computedEndMaxDate = computed(() => endMaxDate)

const finalLabelClass = computed(() => [
  'av-label',
  { 'av-hidden': !labelVisible },
  labelClass
])

function onStartUpdate (value: string | number | null) {
  const next = value?.toString() ?? ''
  emit('update:startModelValue', next)
  emit('change', { start: next, end: endModelValue })
}

function onEndUpdate (value: string | number | null) {
  const next = value?.toString() ?? ''
  emit('update:endModelValue', next)
  emit('change', { start: startModelValue, end: next })
}
</script>

<template>
  <div
    class="av-period-input av-col av-gap-xxs"
    :class="{ 'av-period-input--stacked': stacked }"
  >
    <label
      v-if="!showEachInputLabel"
      :class="finalLabelClass"
      :for="startId"
      data-testid="common-label"
    >
      {{ label }}
    </label>

    <div
      class="av-period-input__row"
      :class="{
        'av-row av-align-end': !stacked,
        'av-col av-align-stretch': stacked,
      }"
    >
      <AvInput
        :id="startId"
        :type="type"
        :model-value="startModelValue"
        :label="startLabel"
        :aria-label="startLabel"
        :label-visible="showEachInputLabel"
        :disabled="startDateDisabled"
        :width="width"
        :min-date="computedStartMinDate"
        :max-date="computedStartMaxDate"
        :error-message="startErrorMessage"
        data-testid="start-date-input"
        @update:model-value="onStartUpdate($event)"
      />

      <AvInput
        :id="endId"
        :type="type"
        :model-value="endModelValue"
        :label="endLabel"
        :aria-label="endLabel"
        :label-visible="showEachInputLabel"
        :disabled="endDateDisabled"
        :width="width"
        :min-date="computedEndMinDate"
        :max-date="computedEndMaxDate"
        :error-message="endErrorMessage"
        data-testid="end-date-input"
        @update:model-value="onEndUpdate($event)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.av-period-input {
  box-sizing: border-box;

  &__row {
    box-sizing: border-box;
    gap: v-bind('separatorSpacing');
  }

  &__separator {
    flex: 0 0 auto;
  }
}
</style>

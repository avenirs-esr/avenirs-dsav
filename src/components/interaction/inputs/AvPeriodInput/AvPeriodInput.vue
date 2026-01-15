<script lang="ts" setup>
import AvInput from '@/components/interaction/inputs/AvInput/AvInput.vue'

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
   * @default 'Period'
   */
  label?: string

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
  startLabel?: string

  /**
   * Label for the end input (optional).
   * Note: the internal labels are hidden by default since this component has a single wrapper label.
   */
  endLabel?: string

  /**
   * If `true`, disable both inputs
   * @default false
   */
  disabled?: boolean

  /**
   * Optional width for the start input (CSS value)
   * e.g. '14.875rem', '240px', '100%'
   */
  startWidth?: string

  /**
   * Optional width for the end input (CSS value)
   * e.g. '14.875rem', '240px', '100%'
   */
  endWidth?: string

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
   * @default var(--spacing-3)
   */
  separatorSpacing?: string
}

const {
  id,
  label = 'Period',
  startModelValue = '',
  endModelValue = '',
  startLabel,
  endLabel,
  disabled = false,
  startWidth,
  endWidth,
  startMinDate,
  startMaxDate,
  endMinDate,
  endMaxDate,
  stacked = false,
  separatorSpacing = 'var(--spacing-3)',
} = defineProps<AvPeriodInputProps>()

/**
 * Events emitted by the AvPeriodInput component.
 * @event update:startModelValue - Emitted when the start date changes
 * @event update:endModelValue - Emitted when the end date changes
 * @event change - Emitted when either start or end date changes
 */
const emit = defineEmits<{
  /**
   * Emitted when the start date changes.
   * @param payload Current start date (ISO string).
   */
  (e: 'update:startModelValue', payload: string): void

  /**
   * Emitted when the end date changes.
   * @param payload Current end date (ISO string).
   */
  (e: 'update:endModelValue', payload: string): void

  /**
   * Emitted when either start or end date changes.
   * @param payload Object containing both values.
   */
  (e: 'change', payload: { start: string, end: string }): void
}>()

const realId = computed(() => id ?? `period-input-${crypto.randomUUID()}`)
const startId = computed(() => `${realId.value}__start`)
const endId = computed(() => `${realId.value}__end`)
const separatorStyle = computed(() => {
  return stacked
    ? { height: separatorSpacing }
    : { width: separatorSpacing }
})

function onStartUpdate (value: unknown) {
  const next = value?.toString() ?? ''
  emit('update:startModelValue', next)
  emit('change', { start: next, end: endModelValue })
}

function onEndUpdate (value: unknown) {
  const next = value?.toString() ?? ''
  emit('update:endModelValue', next)
  emit('change', { start: startModelValue, end: next })
}
</script>

<template>
  <div
    class="av-period-input"
    :class="{ 'av-period-input--stacked': stacked }"
  >
    <label
      class="av-period-input__label"
      :for="startId"
    >
      {{ label }}
    </label>

    <div class="av-period-input__row">
      <AvInput
        :id="startId"
        type="date"
        :model-value="startModelValue"
        :label="startLabel"
        :label-visible="false"
        :disabled="disabled"
        :aria-disabled="disabled"
        :width="startWidth"
        :min-date="startMinDate"
        :max-date="startMaxDate"
        @update:model-value="onStartUpdate($event)"
      />

      <span
        class="av-period-input__separator"
        aria-hidden="true"
        :style="separatorStyle"
      />

      <AvInput
        :id="endId"
        type="date"
        :model-value="endModelValue"
        :label="endLabel"
        :label-visible="false"
        :disabled="disabled"
        :aria-disabled="disabled"
        :width="endWidth"
        :min-date="endMinDate"
        :max-date="endMaxDate"
        @update:model-value="onEndUpdate($event)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.av-period-input {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  box-sizing: border-box;

  &__row {
    display: flex;
    align-items: flex-end;
    box-sizing: border-box;
  }

  &__separator {
    flex: 0 0 auto;
  }

  &--stacked {
    .av-period-input__row {
      flex-direction: column;
      align-items: stretch;
    }
  }
}
</style>

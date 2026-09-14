<script lang="ts" setup>
import type { AvDatePickerModel } from '@/components/interaction/inputs/AvDatePicker/AvDatePicker.types'
import { type RootProps, VueDatePicker } from '@vuepic/vue-datepicker'
import { useAttrs } from 'vue'
import AvMessage from '@/components/base/AvMessage/AvMessage.vue'
import AvButton from '@/components/interaction/buttons/AvButton/AvButton.vue'
import { DATE_FNS_LOCALE_MAP, DEFAULT_DATE_FNS_LOCALE } from '@/components/interaction/inputs/AvDatePicker/AvDatePicker.config'
import { MDI_ICONS } from '@/tokens'
import { AV_DATE_PICKER_FORMATS_BY_TYPE, type AvDatePickerType } from '@/utils/dates/date-picker'

/**
 * AvDatePicker component.
 *
 * This component renders a single date input with an associated label,
 * built on top of VueDatePicker.
 */
export interface AvDatePickerProps {
  /**
   * Whether a selection is applied immediately without a confirm action, forwarded to VueDatePicker
   * @default true
   */
  autoApply?: RootProps['autoApply']

  /**
   * Label of the clear button.
   * @default 'clear'
   */
  clearLabel?: string

  /**
   * Whether the date input is disabled, forwarded to VueDatePicker
   * @default false
   */
  disabled?: RootProps['disabled']

  /**
   * Error message(s) displayed below the date input
   */
  errorMessage?: string | string[]

  /**
   * Display/parsing formats used by the date picker, forwarded to VueDatePicker
   */
  formats?: RootProps['formats']

  /**
   * Unique id for the date input
   * @default `date-picker-${crypto.randomUUID()}`
   */
  id?: string

  /**
   * Attributes forwarded to the underlying date input element, forwarded to VueDatePicker
   */
  inputAttrs?: RootProps['inputAttrs']

  /**
   * Label displayed above the date input
   * @default ''
   */
  label?: string

  /**
   * CSS class for the label
   * @default 'b2-light'
   */
  labelClass?: string

  /**
   * Whether the label is visible
   * @default true
   */
  labelVisible?: boolean

  /**
   * Locale used to render the date picker, forwarded to VueDatePicker
   */
  locale?: string

  /**
   * Maximum selectable date, forwarded to VueDatePicker
   */
  maxDate?: RootProps['maxDate']

  /**
   * Minimum selectable date, forwarded to VueDatePicker
   */
  minDate?: RootProps['minDate']

  /**
   * Current value of the date input
   */
  modelValue: AvDatePickerModel

  /**
   * Placeholder text for the date input, forwarded to VueDatePicker
   */
  placeholder?: string

  /**
   * Time picker configuration, forwarded to VueDatePicker
   */
  timeConfig?: RootProps['timeConfig']

  /**
   * Type of date picker to render
   * @default 'date'
   */
  type?: AvDatePickerType

  /**
   * Width of the date input (CSS value)
   */
  width?: string
}

defineOptions({
  inheritAttrs: false,
})

const {
  autoApply = true,
  clearLabel = 'clear',
  disabled = false,
  errorMessage,
  formats,
  id,
  inputAttrs: inputProps = {},
  label = '',
  labelClass = 'b2-light',
  labelVisible = true,
  locale,
  maxDate,
  minDate,
  modelValue,
  placeholder,
  timeConfig,
  type = 'date',
  width,
} = defineProps<AvDatePickerProps>()

/**
 * Events emitted by the AvDatePicker component.
 * @event update:modelValue - Emitted when the date value changes
 * @event change - Emitted when the date value changes
 */
const emit = defineEmits<{
  (e: 'change', value: AvDatePickerProps['modelValue']): void
  (e: 'update:modelValue', value: AvDatePickerProps['modelValue']): void
}>()

const attrs = useAttrs()

const realId = computed(() => id ?? `date-picker-${crypto.randomUUID()}`)

const datePickerTimeConfig = computed(() => ({
  enableTimePicker: type === 'datetime-local' || type === 'time',
  ...timeConfig,
}))

const datePickerLocale = computed<RootProps['locale']>(() => locale
  ? DATE_FNS_LOCALE_MAP[locale] ?? DEFAULT_DATE_FNS_LOCALE
  : DEFAULT_DATE_FNS_LOCALE)

const datePickerFormats = computed<RootProps['formats']>(() => {
  if (formats === null) {
    return null
  }

  const defaultFormats = AV_DATE_PICKER_FORMATS_BY_TYPE[type]

  if (!defaultFormats && !formats) {
    return undefined
  }

  return {
    ...defaultFormats,
    ...formats,
  }
})

const isInvalid = computed(() => Boolean(errorMessage && (Array.isArray(errorMessage) ? errorMessage.length : errorMessage)))

const inputAttrs = computed(() => ({
  id: realId.value,
  required: false,
  autocomplete: 'off',
  clearable: true,
  alwaysClearable: false,
  hideInputIcon: false,
  inputmode: 'text' as const,
  ...inputProps,
  ...attrs
}))

function onUpdate (value: AvDatePickerProps['modelValue']) {
  emit('update:modelValue', value)
  emit('change', value)
}
</script>

<template>
  <div
    class="av-date-picker av-col av-gap-xxs"
    :class="{ 'av-date-picker--error': isInvalid }"
    :style="{ width }"
  >
    <label
      class="av-label"
      data-testid="av-date-picker-label"
      :class="[
        { 'av-sr-only': !labelVisible },
        labelClass,
      ]"
      :for="realId"
    >
      {{ label }}
    </label>

    <VueDatePicker
      :auto-apply="autoApply"
      :disabled="disabled"
      :formats="datePickerFormats"
      :input-attrs="inputAttrs"
      :locale="datePickerLocale"
      :max-date="maxDate"
      :min-date="minDate"
      :model-value="modelValue"
      :month-picker="type === 'month'"
      :placeholder="placeholder"
      :range="type === 'range'"
      :time-config="datePickerTimeConfig"
      :time-picker="type === 'time'"
      :ui="{
        input: 'av-date-picker__input av-radius-lg b2-light',
      }"
      :week-picker="type === 'week'"
      @update:model-value="onUpdate"
    >
      <template #clear-icon="{ clear }">
        <AvButton
          :icon="MDI_ICONS.CLOSE_CIRCLE_OUTLINE"
          icon-only
          :label="clearLabel"
          small
          class="av-mx-xxs"
          @click="clear()"
        />
      </template>
    </VueDatePicker>

    <AvMessage
      v-if="isInvalid"
      :message="errorMessage"
      type="error"
    />
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/core/typography';
@use '@/styles/utilities/layout';
@use '@/styles/utilities/palette';
@use '@/styles/utilities/spacing';

.av-date-picker {
  :deep(.dp__main) {
    width: 100%;
  }

  :deep(.dp--input-wrap) {
    width: 100%;
  }

  :deep(.dp--input) {
    @extend .b2-light;
    @extend .av-w-full;
    @extend .av-background-base;
    @extend .av-py-xs;

    align-self: stretch;
    box-sizing: border-box;
    min-height: var(--dimension-3xl);
    border: 1px solid var(--divider);
  }

  :deep(.dp--input:focus-visible) {
    border: none;
    outline-offset: 0;
  }

  :deep(.dp--input:hover:not(:disabled):not(:focus)) {
    border-color: var(--dark-background-primary1);
  }

  :deep(.dp--input:disabled) {
    background-color: var(--surface-background);
    color: var(--text2);
    cursor: not-allowed;
    opacity: 0.7;
  }

  :deep(.dp--menu) {
    border: 1px solid var(--divider);
    color: var(--text1);
  }

  :deep(.dp__active_date),
  :deep(.dp__range_end),
  :deep(.dp__range_start) {
    background-color: var(--dark-background-primary1);
    color: var(--other-background-base);
  }

  :deep(.dp__today) {
    border-color: var(--dark-background-primary1);
  }

  &--error {
    :deep(.dp--input) {
      border-color: var(--dark-background-error);
    }
  }
}
</style>

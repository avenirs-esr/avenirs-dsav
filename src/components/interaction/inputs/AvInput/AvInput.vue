<script setup lang="ts">
import { type Ref, type Slot, useAttrs } from 'vue'
import AvIcon from '@/components/base/AvIcon/AvIcon.vue'
import { formatDateForInputType, formatDisplayedDate, getDateInputPlaceholder, getDateInputPrefixIcon, isDateInputType } from '@/components/interaction/inputs/AvInput/utils'

export interface AvInputProps {
  /**
   * ID of the input element
   * @default `input-${crypto.randomUUID()}`
   */
  id?: string

  /**
   * ID of the description element
   */
  descriptionId?: string

  /**
   * Hint text displayed below the label
   */
  hint?: string

  /**
   * Validation state - valid
   * @default false
   */
  isValid?: boolean

  /**
   * Render as textarea instead of input
   * @default false
   */
  isTextarea?: boolean

  /**
   * Whether the label is visible
   * @default true
   */
  labelVisible?: boolean

  /**
   * Label text
   * @default ''
   */
  label?: string

  /**
   * CSS class for the label
   * @default 'b2-light'
   */
  labelClass?: string

  /**
   * Model value for v-model
   * @default ''
   */
  modelValue?: string | number | null

  /**
   * Placeholder text
   */
  placeholder?: string

  /**
   * Input type (text, email, password, etc.)
   * @default 'text'
   */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'datetime-local' | 'month' | 'time' | 'week' | 'color' | 'file' | 'hidden' | 'range'

  /**
   * Minimum date for date inputs
   */
  minDate?: Date

  /**
   * Max date for date inputs
   */
  maxDate?: Date

  /**
   * Whether the input is disabled
   * @default false
   */
  disabled?: boolean

  /**
   * Whether the input is required
   * @default false
   */
  required?: boolean

  /**
   * Maximum length of input
   */
  maxlength?: number

  /**
   * Minimum length of input
   */
  minlength?: number

  /**
   * Error message to display
   */
  errorMessage?: string | string[]

  /**
   * Valid message to display
   */
  validMessage?: string | string[]

  /**
   * Prefix icon name (optional)
   */
  prefixIcon?: string

  /**
   * Minimum height of the textarea (if isTextarea is true)
   */
  textareaMinHeight?: string

  /**
   * Width of the input
   */
  width?: string

  /**
   * Removes radii from the input border.
   * @default false
   */
  noRadius?: boolean

  /**
   * Custom date format string for displayed date
   * If invalid or not provided, defaults to standard format based on input type
   */
  formatDateStr?: string
}

defineOptions({
  inheritAttrs: false,
})

const {
  id,
  descriptionId,
  hint = '',
  isValid = false,
  isTextarea = false,
  labelVisible = true,
  label = '',
  labelClass = 'b2-light',
  modelValue = '',
  placeholder,
  type = 'text',
  textareaMinHeight = 'var(--dimension-5xl)',
  minDate,
  maxDate,
  disabled = false,
  required = false,
  maxlength,
  minlength,
  errorMessage,
  validMessage,
  prefixIcon,
  width,
  noRadius = false,
  formatDateStr,
} = defineProps<AvInputProps>()

/**
 * Events emitted by the component.
 */
const emit = defineEmits<{
  /**
   * Emitted when the model value changes
   * @param value Value (`string | number | null`) The new value of the input
   */
  'update:modelValue': [value: string | number | null]
}>()

/**
 * Slots available for the component.
 *
 * @slot requiredTip - Slot for custom required tip content.
 */
defineSlots<{
  /**
   * Slot for custom required tip content
   */
  requiredTip?: Slot

  /**
   * Slot for max length caption to display the current length / max length
   */
  maxLengthCaption?: Slot<{ currentValue?: string | number | null, maxlength?: number }>
}>()

const attrs = useAttrs()

const realId = computed(() => id ?? `input-${crypto.randomUUID()}`)

const errorMessages = computed(() => {
  if (!errorMessage) {
    return []
  }
  return Array.isArray(errorMessage) ? errorMessage : [errorMessage]
})

const validMessages = computed(() => {
  if (!validMessage) {
    return []
  }
  return Array.isArray(validMessage) ? validMessage : [validMessage]
})

const isInvalid = computed(() => {
  return !!errorMessage
})

const __input: Ref<HTMLElement | null> = ref(null)
const focus = () => __input.value?.focus()

function openPicker () {
  (__input.value as HTMLInputElement)?.showPicker()
}

const isComponent = computed(() => isTextarea ? 'textarea' : 'input')
const finalLabelClass = computed(() => [
  'av-label',
  { invisible: !labelVisible },
])

const prefixIconTop = computed(() => labelVisible ? '69%' : '55%')

const commonInputClasses = computed(() => ({
  'av-input__input av-col av-align-center av-w-full b2-light': true,
  'av-input__input--error': isInvalid.value,
  'av-input__input--valid': isValid,
}))

const inputProps = computed(() => ({
  ...attrs,
  disabled,
  maxlength,
  minlength,
  required,
  type,
  placeholder,
  max: formatDateForInputType(type, maxDate),
  min: formatDateForInputType(type, minDate),
  ariaDescribedBy: descriptionId || undefined,
}))

const icon = computed(() => {
  if (!isDateInputType(type)) {
    return prefixIcon
  }
  return getDateInputPrefixIcon(type)
})

defineExpose({
  focus,
})
</script>

<template>
  <div
    class="av-input av-col av-gap-xxs"
    :class="{
      'av-input--date': type === 'date',
      'av-input--no-radius': noRadius,
    }"
  >
    <div class="av-input__wrapper av-col av-gap-xxs">
      <div class="av-input__control">
        <div
          v-if="icon"
          class="av-input__prefix av-align-center av-col"
        >
          <AvIcon
            :name="icon"
            :size="1.2"
          />
        </div>

        <label
          :class="finalLabelClass"
          :for="realId"
        >
          <span :class="labelClass">
            {{ label }}
            <slot name="requiredTip">
              <span
                v-if="required"
                aria-hidden="true"
                class="required"
              >*</span>
            </slot>
          </span>
        </label>

        <component
          :is="isComponent"
          v-bind="inputProps"
          :id="realId"
          ref="__input"
          :class="{
            ...commonInputClasses,
            'av-sr-only': isDateInputType(type),
          }"
          :value="modelValue"
          @input="emit('update:modelValue', $event.target.value)"
        />

        <component
          :is="isComponent"
          v-if="isDateInputType(type)"
          :class="commonInputClasses"
          v-bind="inputProps"
          :placeholder="getDateInputPlaceholder(type)"
          type="text"
          readonly
          :value="formatDisplayedDate(type, modelValue, formatDateStr)"
          @click="openPicker"
        />
      </div>
      <slot
        v-if="!disabled"
        name="maxLengthCaption"
        :current-value="modelValue"
        :maxlength="maxlength"
      >
        <span
          v-if="maxlength"
          class="caption-light"
        >
          {{ modelValue?.toString().length }} / {{ maxlength }}
        </span>
      </slot>
    </div>

    <span
      v-if="hint"
      class="av-hint-text"
    >
      {{ hint }}
    </span>

    <AvMessage
      v-if="errorMessages.length > 0"
      :message="errorMessages"
      type="error"
    />

    <AvMessage
      v-if="validMessages.length > 0"
      :message="validMessages"
      type="success"
    />
  </div>
</template>

<style lang="scss" scoped>
.av-input {
  width: v-bind('width');

  &__control {
    position: relative;

    &:focus-within {
      .av-input__prefix {
        color: var(--dark-background-primary1);
      }
    }
  }

  &__prefix {
    position: absolute;
    left: var(--spacing-xs);
    top: v-bind('prefixIconTop');
    transform: translateY(-50%);
    z-index: 1;
    pointer-events: none;
    color: var(--text2);
    transition: color 0.2s ease;
  }

  &__input {
    align-self: stretch;
    border-radius: var(--radius-lg);
    border: 1px solid var(--divider);
    background-color: var(--other-background-base);
    padding: var(--spacing-xs) var(--spacing-sm);
    box-sizing: border-box;

    &--error {
      border-color: var(--dark-background-error);

      &:hover {
        border-color: var(--light-foreground-error) !important;
      }
    }

    &:focus {
      outline-offset: -1px;
    }

    &:hover {
      &:not(:disabled) {
        border-color: var(--dark-background-primary1);
      }
    }

    &:disabled {
      background-color: var(--surface-background);
      color: var(--text2);
      cursor: not-allowed;
      opacity: 0.7;
    }

    &::placeholder {
      font-style: italic;
    }
  }

  input {
    &[type="date"] {
      appearance: textfield;
      -webkit-appearance: textfield;
    }

    &[type="date"]::-webkit-calendar-picker-indicator {
      cursor: pointer;
      position: absolute;
      right: var(--spacing-sm);
    }
  }

  textarea {
    min-height: v-bind('textareaMinHeight');
    resize: vertical;
    align-items: flex-start;
    padding-top: var(--spacing-xs);
    height: auto;
    cursor: text;
  }

  &:has(.av-input__prefix) &__input {
    padding-left: calc(var(--spacing-xs) * 3 + var(--spacing-sm));
  }

  &--no-radius {
    .av-input__input {
      border-radius: var(--radius-none);
    }
  }
}

.invisible {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>

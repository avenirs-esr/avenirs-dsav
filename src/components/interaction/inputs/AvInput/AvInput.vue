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
   * Message to display when maxlength is exceeded
   */
  maxlengthExceededMessage?: string

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
  maxlengthExceededMessage,
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

  /**
   * Emitted when the maxlength is exceeded or no longer exceeded
   * @param exceeded Value (`boolean`) Whether the maxlength is currently exceeded
   */
  'maxlengthExceeded': [exceeded: boolean]
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

  /**
   * Slot for suffix content inside the input control (e.g. action buttons)
   */
  suffix?: Slot
}>()

const attrs = useAttrs()

const realId = id ?? `input-${crypto.randomUUID()}`

const currentLength = computed(() => {
  if (modelValue === null || modelValue === undefined) {
    return 0
  }
  return modelValue.toString().length
})

const maxlengthExceeded = computed(() => {
  if (!maxlength) {
    return false
  }
  return currentLength.value > maxlength
})

const errorMessages = computed(() => {
  const errors = []
  if (maxlengthExceeded.value && maxlengthExceededMessage) {
    errors.push(maxlengthExceededMessage)
  }
  if (!errorMessage) {
    return errors
  }
  return errors.concat(Array.isArray(errorMessage) ? errorMessage : [errorMessage])
})

const validMessages = computed(() => {
  if (!validMessage) {
    return []
  }
  return Array.isArray(validMessage) ? validMessage : [validMessage]
})

const isInvalid = computed(() => {
  return errorMessages.value.length > 0
})

const __input: Ref<HTMLElement | null> = ref(null)
const focus = () => __input.value?.focus()

const isComponent = computed(() => isTextarea ? 'textarea' : 'input')
const finalLabelClass = computed(() => [
  'av-label',
  { invisible: !labelVisible },
])

const iconsTopPosition = computed(() => labelVisible && label ? '69%' : '60%')

const commonInputClasses = computed(() => ({
  'av-input__input av-col av-align-center av-w-full b2-light av-py-xs av-px-sm': true,
  'av-input__input--error': isInvalid.value,
  'av-input__input--valid': isValid,
  'av-pt-xs av-align-start': isTextarea,
  'av-radius-none': noRadius,
  'av-radius-lg': !noRadius,
}))

const inputProps = computed(() => ({
  ...attrs,
  disabled,
  minlength,
  required,
  type,
  placeholder: !disabled ? placeholder : '',
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

watch(() => maxlengthExceeded.value, (newValue) => {
  emit('maxlengthExceeded', newValue)
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

        <template v-if="isDateInputType(type)">
          <div class="av-input__date-wrapper">
            <component
              :is="isComponent"
              v-bind="inputProps"
              :id="realId"
              ref="__input"
              class="av-input__input--date-real"
              :class="[commonInputClasses]"
              :value="modelValue"
              @input="emit('update:modelValue', $event.target.value)"
              @change="emit('update:modelValue', $event.target.value)"
            />
            <component
              :is="isComponent"
              v-bind="inputProps"
              :id="`${realId}-picker`"
              class="av-input__input--date-picker"
              :class="[commonInputClasses]"
              :placeholder="!disabled ? getDateInputPlaceholder(type) : ''"
              type="text"
              readonly
              aria-hidden="true"
              tabindex="-1"
              :value="formatDisplayedDate(type, modelValue, formatDateStr)"
              @mousedown.prevent
              @touchstart.prevent
            />
          </div>
        </template>
        <component
          :is="isComponent"
          v-else
          v-bind="inputProps"
          :id="realId"
          ref="__input"
          :class="commonInputClasses"
          :value="modelValue"
          @input="emit('update:modelValue', $event.target.value)"
        />

        <div
          v-if="$slots.suffix"
          class="av-align-center av-col av-input__suffix"
        >
          <slot name="suffix" />
        </div>
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
          :class="{
            'av-text-error': maxlengthExceeded,
          }"
        >
          {{ currentLength }} / {{ maxlength }}
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
@use '@/styles/core/focus' as *;
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
    top: v-bind('iconsTopPosition');
    transform: translateY(-50%);
    z-index: 1;
    pointer-events: none;
    color: var(--text2);
    transition: color 0.2s ease;
  }

  &__suffix {
    position: absolute;
    right: var(--spacing-xs);
    top: v-bind('iconsTopPosition');
    z-index: 1;
    transform: translateY(-50%);
  }

  &__input {
    align-self: stretch;
    border: 1px solid var(--divider);
    background-color: var(--other-background-base);
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
      opacity: 0.6;
    }

    &:disabled::placeholder {
      opacity: 0.7;
    }
  }

  &__date-wrapper {
    position: relative;
    width: 100%;

    &:focus-within {
      .av-input__input--date-picker {
        @include focus-style;
        outline-offset: -1px;
      }
    }
  }

  &__input--date-real {
    position: absolute;
    inset: 0;
    opacity: 0;
    z-index: 1;
    cursor: pointer;
    appearance: auto;

    &:focus {
      outline: none;
    }

    &:disabled {
      opacity: 0;
      background-color: transparent;
      cursor: not-allowed;
    }

    &::-webkit-calendar-picker-indicator {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }
  }

  textarea {
    min-height: v-bind('textareaMinHeight');
    resize: vertical;
    height: auto;
    cursor: text;
  }
}

.av-input:has(.av-input__prefix) .av-input__input {
  padding-left: var(--spacing-xl) !important;
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

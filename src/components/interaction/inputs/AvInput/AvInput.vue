<script setup lang="ts">
import type { Ref, Slot } from 'vue'
import { format, isValid as isValidDate } from 'date-fns'
import AvIcon from '@/components/base/AvIcon/AvIcon.vue'

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
   * Slot for custom captions, such as error or valid messages.
   */
  customCaptions?: Slot<{ currentValue?: string | number | null, maxlength?: number }>
}>()

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

const min = computed(() => formatDateYyyyMMdd(minDate))
const max = computed(() => formatDateYyyyMMdd(maxDate))

function formatDateYyyyMMdd (date: Date | undefined) {
  if ((type !== 'date' && type !== 'datetime-local') || (date === undefined || !isValidDate(date))) {
    return undefined
  }
  return format(date, 'yyyy-MM-dd')
}

const __input: Ref<HTMLElement | null> = ref(null)
const focus = () => __input.value?.focus()

const isComponent = computed(() => isTextarea ? 'textarea' : 'input')
const finalLabelClass = computed(() => [
  'av-label',
  { invisible: !labelVisible },
])

const prefixIconTop = computed(() => labelVisible ? '69%' : '55%')

defineExpose({
  focus,
})
</script>

<template>
  <div
    class="av-input"
    :class="{
      'av-input--date': type === 'date',
      'av-input--no-radius': noRadius,
    }"
  >
    <div class="av-input__wrapper">
      <div class="av-input__control">
        <div
          v-if="prefixIcon"
          class="av-input__prefix"
        >
          <AvIcon
            :name="prefixIcon"
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
                class="required"
              >*</span>
            </slot>
            <span
              v-if="hint"
              class="av-hint-text"
            >
              {{ hint }}
            </span>
          </span>
        </label>

        <component
          :is="isComponent"
          :id="realId"
          ref="__input"
          class="av-input__input"
          :class="{
            'av-input__input--error': isInvalid,
            'av-input__input--valid': isValid,
          }"
          :placeholder="placeholder"
          :type="type"
          :disabled="disabled"
          :maxlength="maxlength"
          :minlength="minlength"
          :required="required"
          v-bind="$attrs"
          :max="max"
          :min="min"
          :value="modelValue"
          :aria-describedby="descriptionId || undefined"
          @input="emit('update:modelValue', $event.target.value)"
        />
      </div>
      <slot
        name="customCaptions"
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

    <div
      v-if="errorMessages.length > 0"
      role="alert"
    >
      <AvMessage
        :message="errorMessages"
        type="error"
      />
    </div>

    <div v-if="validMessages.length > 0">
      <AvMessage
        :message="validMessages"
        type="success"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/core/_typography.scss';

.av-input {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xxs);
  width: v-bind('width');

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xxs);
  }

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
    display: flex;
    align-items: center;
    pointer-events: none;
    color: var(--text2);
    transition: color 0.2s ease;
  }

  &__input {
    display: flex;
    align-items: center;
    align-self: stretch;
    border-radius: var(--radius-lg);
    border: 1px solid var(--divider);
    background-color: var(--other-background-base);
    padding: var(--spacing-xs) var(--spacing-sm);
    width: 100%;
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
      @extend .b2-light;

      font-style: italic;
    }
  }

  input {
    @extend .b2-light;

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
    @extend .b2-light;

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

<script setup lang="ts">
import type { Ref, Slot } from 'vue'
import { format, isValid as isValidDate } from 'date-fns'
import AvIcon from '@/components/base/AvIcon/AvIcon.vue'

export interface AvInputProps {
  /**
   * ID of the input element
   * @default `av-input-${crypto.randomUUID()}`
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
   */
  labelVisible?: boolean

  /**
   * Label text
   * @default ''
   */
  label?: string

  /**
   * CSS class for the label
   * @default ''
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
  id = crypto.randomUUID(),
  descriptionId,
  hint = '',
  isValid = false,
  isTextarea = false,
  labelVisible,
  label = '',
  labelClass = '',
  modelValue = '',
  placeholder,
  type = 'text',
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
  'fr-label',
  { invisible: !labelVisible },
  labelClass,
])

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
        :for="id"
      >
        <span class="b2-light">
          {{ label }}
          <slot name="requiredTip">
            <span
              v-if="required === true"
              class="required"
            >
              *
            </span>
          </slot>
          <span
            v-if="hint"
            class="fr-hint-text"
          >
            {{ hint }}
          </span>
        </span>
      </label>

      <div
        class="av-input__wrapper"
        :class="[
          { 'fr-input-wrap': type === 'date' },
        ]"
      >
        <component
          :is="isComponent"
          :id="id"
          ref="__input"
          :placeholder="placeholder"
          :type="type"
          :disabled="disabled"
          :maxlength="maxlength"
          :minlength="minlength"
          :required="required"
          v-bind="$attrs"
          :max="max"
          :min="min"
          class="fr-input"
          :class="{
            'fr-input--error': isInvalid,
            'fr-input--valid': isValid,
          }"
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
      class="av-input__error"
      role="alert"
    >
      <div
        v-for="(message, index) in errorMessages"
        :key="index"
        class="av-input__error-message"
      >
        {{ message }}
      </div>
    </div>

    <div
      v-if="validMessages.length > 0"
      class="av-input__valid"
    >
      <div
        v-for="(message, index) in validMessages"
        :key="index"
        class="av-input__valid-message"
      >
        {{ message }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/typography.scss" as typography;

.av-input__wrapper{
  margin-top: 0 !important;
  position: relative;
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

.av-input {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xxs);
  width: v-bind('width');
}

input[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0;
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  margin-left: -2rem;
}

.av-input__prefix {
  position: absolute;
  left: var(--spacing-xs);
  top: 55%;
  z-index: 1;
  display: flex;
  align-items: center;
  pointer-events: none;
  color: var(--text2);
  transition: color 0.2s ease;
}

.av-input__wrapper:focus-within .av-input__prefix {
  color: var(--dark-background-primary1);
}

.av-input__prefix svg {
  color: inherit;
}

.av-input input,
.av-input textarea {
  display: flex;
  align-items: center;
  align-self: stretch;
  border-radius: var(--radius-lg);
  border: 1px solid var(--divider);
  background-color: var(--other-background-base);
  box-shadow: none;
}

.av-input--no-radius input,
.av-input--no-radius textarea {
  border-radius: var(--radius-none);
}

.av-input .fr-input--error {
  border-color: var(--dark-background-error);
}

.av-input .fr-input--error:hover {
  border-color: var(--light-foreground-error) !important;
}

.av-input:has(.av-input__prefix) input,
.av-input:has(.av-input__prefix) textarea {
  padding-left: calc(var(--spacing-xs) * 3 + 1rem);
}

.av-input input:focus,
.av-input textarea:focus {
  outline: none;
  border-color: var(--dark-background-primary1);
}

.av-input input:hover:not(:disabled),
.av-input textarea:hover:not(:disabled) {
  border-color: var(--dark-background-primary1);
}

.av-input input {
  @extend .caption-regular;
}

.av-input textarea {
  @extend .b2-light;
}

.av-input input:disabled,
.av-input textarea:disabled {
  background-color: var(--surface-background);
  color: var(--text2);
  cursor: not-allowed;
  opacity: 0.7;
}

.av-input input::placeholder,
.av-input textarea::placeholder {
  color: var(--text2);
}

.av-input label {
  color: var(--text1);
  padding-bottom: var(--spacing-xxs);
}

.av-input textarea {
  min-height: 6rem;
  resize: vertical;
  align-items: flex-start;
  padding-top: var(--spacing-xs);
  height: auto;
}

.av-input__error-message {
  font-size: var( --font-size-xs);
  color: var(--dark-background-error);
  margin-bottom: var(--spacing-xs);
}

.av-input__error-message:last-child {
  margin-bottom: 0;
}

.av-input__valid-message {
  font-size: var( --font-size-xs);
  color: var(--dark-background-success);
  margin-bottom: var(--spacing-xs);
}

.av-input__valid-message:last-child {
  margin-bottom: 0;
}
</style>

<script setup lang="ts">
import type { Slot } from 'vue'
import { DsfrInput } from '@gouvminint/vue-dsfr'
import { format, isValid as isValidDate } from 'date-fns'
import AvVIcon from '@/components/base/AvVIcon/AvVIcon.vue'

export interface AvInputProps {
  /**
   * ID of the input element
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
   */
  isValid?: boolean

  /**
   * Render as textarea instead of input
   */
  isTextarea?: boolean

  /**
   * Whether the label is visible
   */
  labelVisible?: boolean

  /**
   * Label text
   */
  label?: string

  /**
   * CSS class for the label
   */
  labelClass?: string

  /**
   * Model value for v-model
   */
  modelValue?: string | number | null

  /**
   * Placeholder text
   */
  placeholder?: string

  /**
   * Input type (text, email, password, etc.)
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
   */
  disabled?: boolean

  /**
   * Whether the input is required
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
}

const props = withDefaults(defineProps<AvInputProps>(), {
  isValid: false,
  isTextarea: false,
  labelVisible: true,
  type: 'text',
  disabled: false,
  required: false
})

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
const slots = defineSlots<{
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
  if (!props.errorMessage) {
    return []
  }
  return Array.isArray(props.errorMessage) ? props.errorMessage : [props.errorMessage]
})

const validMessages = computed(() => {
  if (!props.validMessage) {
    return []
  }
  return Array.isArray(props.validMessage) ? props.validMessage : [props.validMessage]
})

const inputId = computed(() => props.id || `av-input-${crypto.randomUUID()}`)

const isInvalid = computed(() => {
  return !!props.errorMessage
})

const min = computed(() => formatDateYyyyMMdd(props.minDate))
const max = computed(() => formatDateYyyyMMdd(props.maxDate))

function formatDateYyyyMMdd (date: Date | undefined) {
  if ((props.type !== 'date' && props.type !== 'datetime-local') || (date === undefined || !isValidDate(date))) {
    return undefined
  }
  return format(date, 'yyyy-MM-dd')
}
</script>

<template>
  <div
    class="av-input"
    :class="{ 'av-input--date': type === 'date' }"
  >
    <div class="av-input__wrapper">
      <div
        v-if="prefixIcon"
        class="av-input__prefix"
      >
        <AvVIcon
          :name="prefixIcon"
          :size="1.2"
        />
      </div>
      <DsfrInput
        :id="inputId"
        :model-value="modelValue"
        :label="label"
        :label-visible="labelVisible"
        :label-class="labelClass"
        :hint="hint"
        :description-id="props.descriptionId"
        :is-invalid="isInvalid"
        :is-valid="isValid"
        :is-textarea="isTextarea"
        wrapper-class="av-input__wrapper"
        :placeholder="placeholder"
        :type="type"
        :disabled="disabled"
        :required="required"
        :maxlength="maxlength"
        :minlength="minlength"
        v-bind="$attrs"
        :max="max"
        :min="min"
        @update:model-value="emit('update:modelValue', $event)"
      >
        <template
          v-if="slots.requiredTip"
          #required-tip
        >
          <component :is="slots.requiredTip" />
        </template>
      </DsfrInput>
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

<style lang="scss">
.av-input__wrapper{
  margin-top: 0 !important;
  position: relative;
}
</style>

<style lang="scss" scoped>
@use "@/styles/typography.scss" as typography;

.av-input {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xxs);
  width: v-bind('width');
}

:deep(input[type="date"]::-webkit-calendar-picker-indicator) {
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
  top: 50%;
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

.av-input__prefix :deep(svg) {
  color: inherit;
}

.av-input :deep(input),
.av-input :deep(textarea) {
  display: flex;
  align-items: center;
  align-self: stretch;
  border-radius: var(--radius-lg);
  border: 1px solid var(--divider);
  background-color: var(--other-background-base);
  box-shadow: none;
}

.av-input :deep(.fr-input--error) {
  border-color: var(--dark-background-error);
}

.av-input :deep(.fr-input--error):hover {
  border-color: var(--light-foreground-error) !important;
}

.av-input:has(.av-input__prefix) :deep(input),
.av-input:has(.av-input__prefix) :deep(textarea) {
  padding-left: calc(var(--spacing-xs) * 3 + 1rem);
}

.av-input :deep(input:focus),
.av-input :deep(textarea:focus) {
  outline: none;
  border-color: var(--dark-background-primary1);
}

.av-input :deep(input:hover:not(:disabled)),
.av-input :deep(textarea:hover:not(:disabled)) {
  border-color: var(--dark-background-primary1);
}

.av-input :deep(input) {
  @extend .caption-regular;
}

.av-input :deep(textarea) {
  @extend .b2-light;
}

.av-input :deep(input:disabled),
.av-input :deep(textarea:disabled) {
  background-color: var(--surface-background);
  color: var(--text2);
  cursor: not-allowed;
  opacity: 0.7;
}

.av-input :deep(input::placeholder),
.av-input :deep(textarea::placeholder) {
  color: var(--text2);
}

.av-input :deep(label) {
  @extend .b2-light;
  color: var(--text1);
  padding-bottom: var(--spacing-xxs);
}

.av-input :deep(textarea) {
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

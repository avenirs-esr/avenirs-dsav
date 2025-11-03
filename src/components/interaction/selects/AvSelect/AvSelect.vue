<script lang="ts" setup>
import { ICONS_DATA_URL } from '@/tokens'

/**
 * AvSelect component props.
 */
export interface AvSelectProps {
  /**
   * Indicates if the select is required.
   * @default false
   */
  required?: boolean

  /**
   * Indicated if the select is disabled.
   * @default false
   */
  disabled?: boolean

  /**
   * Unique id for the select. Used for the accessibility.
   * @default `select-${crypto.randomUUID()}`
   */
  id?: string

  /**
   * Field name.
   * @default ''
   */
  name?: string

  /**
   * Hint for guidance.
   * @default ''
   */
  hint?: string

  /**
   * Selected option value.
   */
  modelValue?: string | number | undefined

  /**
   * Select text label.
   * @default ''
   */
  label?: string

  /**
   * Selectable options.
   * @default []
   */
  options?: {
    value: string | number | undefined
    text: string
    disabled?: boolean
  }[]

  /**
   * If set, display a success message.
   * @default ''
   */
  successMessage?: string

  /**
   * If set, display an error message.
   * @default ''
   */
  errorMessage?: string

  /**
   * Placeholder text.
   */
  placeholder: string

  /**
   * dense mode
   * @default false
   */
  dense?: boolean
}

const {
  required = false,
  disabled = false,
  id,
  name = '',
  hint = '',
  modelValue,
  label = '',
  options = [],
  successMessage = '',
  errorMessage = '',
  placeholder,
  dense = false,
} = defineProps<AvSelectProps>()

/**
 * Events emitted by the component.
 */
const emit = defineEmits<{
  /**
   * Emitted when an option is selected.
   * @param value Value (`string | number`) of the selected option.
   */
  (e: 'update:modelValue', value: string | number): void
}>()

const realId = computed(() => id ?? `select-${crypto.randomUUID()}`)

const title = computed(() => {
  if (!modelValue) {
    return placeholder
  }
  const selected = options?.find(option => String(option.value) === String(modelValue))
  return selected ? selected.text : placeholder
})

const styleVars = computed(() => ({
  '--icon-path': `url(${ICONS_DATA_URL.MDI_KEYBOARD_ARROW_DOWN})`,
}))

const message = computed(() => {
  return errorMessage || successMessage
})
const messageType = computed(() => {
  return errorMessage ? 'error' : 'success'
})
</script>

<template>
  <div :class="{ 'av-select--dense': dense }">
    <div
      class="av-select-group"
      :class="{ [`av-select-group--${messageType}`]: message }"
    >
      <label
        class="av-label b2-light"
        :for="realId"
      >
        <span>{{ label }}</span>
        <span
          v-if="required"
          class="required"
        >&nbsp;*</span>

        <span
          v-if="hint"
          class="av-hint-text"
        >
          {{ hint }}
        </span>
      </label>

      <select
        :id="realId"
        :class="{ [`av-select--${messageType}`]: message }"
        class="av-select"
        :name="name || realId"
        :disabled="disabled"
        :aria-disabled="disabled"
        :required="required"
        :aria-required="required"
        :title="title"
        v-bind="$attrs"
        :style="styleVars"
        @change="emit('update:modelValue', ($event.target as HTMLInputElement)?.value)"
      >
        <option
          :selected="!options.some(option => option.value === modelValue)"
          disabled
          value=""
          hidden=""
        >
          {{ placeholder }}
        </option>

        <option
          v-for="(option, index) in options"
          :key="index"
          :selected="modelValue === option.value"
          :value="option.value"
          :disabled="option.disabled"
          :aria-disabled="option.disabled"
        >
          {{ option.text }}
        </option>
      </select>
      <AvMessage
        :message-id="`select-${messageType}-desc-${messageType}`"
        :message="message"
        :type="messageType"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/core/_typography.scss';

.av-select {
  @extend .b1-regular;

  background-color: var(--other-background-base);
  border: 1px solid var(--stroke);
  color: var(--text1);
  box-shadow: none;
  border-radius: var(--radius-md);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-image: var(--icon-path);
  background-position: calc(100% - var(--dimension-sm)) 50%;
  background-repeat: no-repeat;
  background-size: var(--dimension-sm) var(--dimension-sm);
  margin-top: var(--spacing-none);
  display: block;
  padding: var(--spacing-xs) var(--spacing-xl) var(--spacing-xs) var(--spacing-sm);
  width: 100%;

  &--dense {
    .av-select {
      @extend .b2-regular;

      padding-top: .1rem !important;
      padding-bottom: .1rem !important;
    }
  }

  &[aria-disabled=true] {
    background-color: var(--light-background-neutral);
    color: var(--text1);
  }

  &:not([aria-disabled=true]):hover {
    background-color: var(--dark-background-primary1);
    color: var(--other-background-base);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23FFFFFF' d='M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z'/%3E%3C/svg%3E");
  }

  &:hover {
    option {
      color: var(--text1);
      background-color: var(--other-background-base);
    }
  }
}
</style>

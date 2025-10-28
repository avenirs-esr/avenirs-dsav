<script lang="ts" setup>
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
  selectId?: string

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
  selectId = `select-${crypto.randomUUID()}`,
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

const title = computed(() => {
  if (!modelValue) {
    return placeholder
  }
  const selected = options?.find(option => String(option.value) === String(modelValue))
  return selected ? selected.text : placeholder
})

const message = computed(() => {
  return errorMessage || successMessage
})
const messageType = computed(() => {
  return errorMessage ? 'error' : 'valid'
})
</script>

<template>
  <div :class="{ 'fr-select--dense': dense }">
    <div
      class="fr-select-group"
      :class="{ [`fr-select-group--${messageType}`]: message }"
    >
      <label
        class="fr-label b2-light"
        :for="selectId"
      >
        <span>{{ label }}</span>
        <span
          v-if="required"
          class="required"
        >&nbsp;*</span>

        <span
          v-if="hint"
          class="fr-hint-text"
        >{{ hint }}</span>
      </label>

      <select
        :id="selectId"
        :class="{ [`fr-select--${messageType}`]: message }"
        class="fr-select"
        :name="name || selectId"
        :disabled="disabled"
        :aria-disabled="disabled"
        :required="required"
        :aria-required="required"
        :title="title"
        v-bind="$attrs"
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

      <p
        v-if="message"
        :id="`select-${messageType}-desc-${messageType}`"
        :class="`fr-${messageType}-text`"
      >
        {{ message }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/typography.scss" as typography;

.fr-select {
  background-color: var(--other-background-base);
  border: 1px solid var(--stroke);
  color: var(--text1);
  box-shadow: none;
  border-radius: var(--radius-md);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%232929A2' d='M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z'/%3E%3C/svg%3E");
  margin-top: var(--spacing-none);
  padding-bottom: var(--spacing-xxs);
}

.fr-select--dense .fr-select {
  padding-top: .1rem !important;
  padding-bottom: .1rem !important;
}

.fr-select[aria-disabled=true] {
  background-color: var(--light-background-neutral);
  color: var(--text1);
}

.fr-select:not([aria-disabled=true]):hover {
  background-color: var(--dark-background-primary1);
  color: var(--other-background-base);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23FFFFFF' d='M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z'/%3E%3C/svg%3E");
}

.fr-select:hover option {
  color: var(--text1);
  background-color: var(--other-background-base);
}
</style>

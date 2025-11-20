<script lang="ts" setup>
import type { Slot } from 'vue'
import { MDI_ICONS } from '@/tokens/icons'

/**
 * AvCheckbox component props
 */
export interface AvCheckboxProps {
  /**
   * Unique ID of the component
   * @default `checkbox-${crypto.randomUUID()}`
   */
  id?: string

  /**
   * Custom icon to add between the checkbox and the label (Iconify naming convention)
   */
  icon?: string

  /**
   * Name of the field `<input>`
   */
  name: string

  /**
   * Indicates if the checkbox is mandatory
   * @default false
   */
  required?: boolean

  /**
   * Value associated to the checkbox
   */
  value: string | number | boolean

  /**
   * Displays the checkbox in its small version
   * @default false
   */
  small?: boolean

  /**
   * Displays the checkbox in its inline version
   * @default false
   */
  inline?: boolean

  /**
   * Simulates a disabled state to make the checkbox as disabled
   * @default false
   */
  disabled?: boolean

  /**
   * Label to be displayed next to the checkbox
   * This prop is optional if you use the `label` slot.
   */
  label?: string

  /**
   * Error message to be displayed under the checkbox
   * @default ''
   */
  errorMessage?: string

  /**
   * Valid message to be displayed under the checkbox
   * @default ''
   */
  validMessage?: string

  /**
   * Hint to be displayed under the checkbox
   * @default ''
   */
  hint?: string
}

defineOptions({
  inheritAttrs: false,
})

const {
  id,
  icon,
  name,
  required = false,
  value,
  small = false,
  inline = false,
  disabled = false,
  label,
  errorMessage,
  validMessage,
  hint
} = defineProps<AvCheckboxProps>()

/**
 * Slots available in the AvCheckbox component.
 *
 * @slot label - Slot for the checkbox label.
 */
defineSlots<{
  /**
   * Slot for the checkbox label
   */
  label?: Slot
}>()

const realId = computed(() => id ?? `checkbox-${crypto.randomUUID()}`)

const message = computed(() => errorMessage || validMessage)
const messageId = computed(() => message.value ? `message-${realId.value}` : undefined)

const modelValue = defineModel<(string | number | boolean | undefined)[]>({ required: true })

const isChecked = computed(() => modelValue.value.includes(value))

const checkboxIconName = computed(() => {
  return isChecked.value ? MDI_ICONS.CHECKBOX_MARKED : MDI_ICONS.CHECKBOX_BLANK_OUTLINE
})

const iconColor = computed(() => {
  return isChecked.value ? 'var(--dark-background-primary1)' : 'var(--icon)'
})

const iconSize = computed(() => small ? 1 : 1.5)

const labelClass = computed(() => {
  if (small) {
    return isChecked.value ? 'caption-bold' : 'caption-regular'
  }
  return isChecked.value ? 'b2-bold' : 'b2-regular'
})
</script>

<template>
  <AvFieldsetElement
    :inline="inline"
    :disabled="disabled"
  >
    <input
      :id="realId"
      v-model="modelValue"
      :name="name"
      class="av-sr-only"
      type="checkbox"
      :value="value"
      :checked="isChecked"
      :required
      v-bind="$attrs"
      :data-testid="`input-checkbox-${realId}`"
      :data-test="`input-checkbox-${realId}`"
      :tabindex="disabled ? -1 : undefined"
      :aria-describedby="messageId"
    >
    <label
      :for="realId"
      class="av-label"
    >
      <div class="label-container">
        <AvIcon
          class="option-checkbox"
          :name="checkboxIconName"
          :color="iconColor"
          :size="iconSize"
        />
        <AvIcon
          v-if="icon"
          class="option-icon"
          :name="icon"
          :color="iconColor"
          :size="iconSize"
        />
        <span
          class="label"
          :class="labelClass"
        >
          <slot name="label">
            {{ label }}
          </slot>
        </span>
        <span
          v-if="required"
          class="required"
          :class="labelClass"
        >&nbsp;*</span>
      </div>
      <span
        v-if="hint"
        class="av-hint-text"
      >
        {{ hint }}
      </span>
    </label>
    <AvMessage
      :message-id="messageId"
      :type="errorMessage ? 'error' : 'success'"
      :message="message"
    />
  </AvFieldsetElement>
</template>

<style lang="scss" scoped>
.av-label {
  padding-bottom: var(--spacing-none);
}

.label-container {
  display: flex;
  flex-direction: row;
  gap: var(--spacing-xs);
  align-items: center;
}

.av-fieldset__element--disabled {
  opacity: 0.95 !important;
}

.label {
  color: var(--text2);
}
</style>

<script lang="ts" setup>
import type { Slot } from 'vue'

/**
 * RadioButton component props.
 */
export interface RadioButtonProps {
  /**
   * Value of the radio button.
   * This value will be emitted when the radio is selected.
   */
  value: string | number | boolean

  /**
   * Model value of the radio button.
   */
  modelValue: string | number | boolean | undefined

  /**
   * If true, disables this radio button.
   */
  disabled?: boolean

  /**
   * If true, displays the button in its small version.
   */
  small?: boolean

  /**
   * If true, displays the button in its inline version.
   */
  inline?: boolean

  /**
   * Name of the input field.
   * Must be the same for each AvRadioButton in an AvRadioButtonSet
   * @default ''
   */
  name?: string
}

const {
  value,
  modelValue,
  disabled,
  small = false,
  inline = false,
  name = '',
} = defineProps<RadioButtonProps>()

const emit = defineEmits<{
  /**
   * Emitted when the selected radio button changes.
   *
   * @event update:modelValue
   * @param value The newly selected value.
   * Can be a `string`, `number`, or `boolean`, depending on the bound data.
   */
  (e: 'update:modelValue', value: string | number | boolean): void
}>()

defineSlots<{
  /**
   * Default slot used to fully customize the radio label.
   */
  default?: Slot
}>()

const id = ref(`av-radio-button-${crypto.randomUUID()}`)
</script>

<template>
  <AvFieldsetElement
    :inline="inline"
    :disabled="disabled"
  >
    <div
      class="av-radio-group av-row av-align-center av-gap-xs"
      :class="{
        'av-radio-group--sm': small,
      }"
    >
      <input
        :id="id"
        type="radio"
        :name="name"
        :value="value"
        :checked="modelValue === value"
        :disabled="disabled"
        v-bind="$attrs"
        @click="emit('update:modelValue', value)"
      >
      <label
        :for="id"
        class="av-label"
      >
        <slot />
      </label>
    </div>
  </AvFieldsetElement>
</template>

<style lang="scss" scoped>
.av-radio-group {
  input[type=radio] {
    height: var(--dimension-md);
    width: var(--dimension-md);
  }

  &--sm {
    input[type=radio] {
      height: var(--dimension-sm);
      width: var(--dimension-sm);
    }
  }

  .av-label {
    padding: var(--spacing-none);
  }
}
</style>

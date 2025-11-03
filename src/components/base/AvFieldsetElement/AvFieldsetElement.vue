<script lang="ts" setup>
import type { Slot } from 'vue'

/**
 * AvFieldsetElement component props.
 */
export interface AvFieldsetProps {
  /**
   * Simulates a disabled state to make the fieldset element as disabled
   * @default false
   */
  disabled?: boolean
}

const {
  disabled = false
} = defineProps<AvFieldsetProps>()

/**
 * Slots available in the AvFieldsetElement component.
 *
 * @slot default - Default slot for the content of the fieldset element.
 */
defineSlots<{
  /**
   * Slot by default for the content of the fieldset element
   */
  default?: Slot
}>()
</script>

<template>
  <div
    class="av-fieldset__element"
    :class="{
      'av-fieldset__element--disabled': disabled,
    }"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.av-fieldset__element {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding-left: var(--spacing-xs);
  padding-right: var(--spacing-xs);

  &--disabled {
    pointer-events: none;
    cursor: default;
    opacity: 0.6;
  }
}
</style>

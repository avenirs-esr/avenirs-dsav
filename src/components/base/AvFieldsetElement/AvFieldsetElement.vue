<script lang="ts" setup>
import type { Slot } from 'vue'
import type { AvInteractiveProps } from '@/types/interfaces.types'
import { getAvTooltipContent, isAvTooltipEnabled } from '@/components/overlay/tooltips/AvTooltip/utils'

export interface AvFieldsetElementProps extends AvInteractiveProps {
  disabledOpacity?: number
}

const { disabled = false, disabledOpacity = 0.6 } = defineProps<AvFieldsetElementProps>()

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
  <AvTooltip
    :content="getAvTooltipContent({ disabled, disabledTooltip })"
    :disabled="!isAvTooltipEnabled({ disabled, disabledTooltip })"
    :force-focusable="isAvTooltipEnabled({ disabled, disabledTooltip })"
  >
    <div
      class="av-fieldset__element av-col av-px-xs"
      :class="{
        'av-fieldset__element--disabled': disabled,
      }"
    >
      <slot />
    </div>
  </AvTooltip>
</template>

<style lang="scss" scoped>
.av-fieldset__element {
  &--disabled {
    pointer-events: auto;
    cursor: not-allowed !important;
    opacity: v-bind('disabledOpacity');
    filter: grayscale(100%);

    :slotted(*) {
      pointer-events: none;
    }
  }
}
</style>

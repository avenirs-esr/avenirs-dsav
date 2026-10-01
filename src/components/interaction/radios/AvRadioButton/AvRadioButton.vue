<script lang="ts" setup>
import type { Slot } from 'vue'
import type { AvInteractiveProps } from '@/types/interfaces.types'
import AvTooltip from '@/components/overlay/tooltips/AvTooltip/AvTooltip.vue'
import { getAvTooltipContent, isAvTooltipEnabled } from '@/components/overlay/tooltips/AvTooltip/utils'

/**
 * AvRadioButton component props.
 */
export interface AvRadioButtonProps extends AvInteractiveProps {
  /**
   * Value of the radio button.
   * This value will be emitted when the radio is selected.
   */
  value: string | number | boolean

  /**
   * Optional fallback label, used if no custom label slot is provided.
   * Ignored if the `default` slot is used (see slot description).
   */
  label?: string

  /**
   * Optional description shown under the radio label, providing more context.
   */
  description?: string
}

defineProps<AvRadioButtonProps>()

defineSlots<{
  /**
   * Default slot used to fully customize the radio label.
   * When provided, this slot replaces the default `label` prop.
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
    <slot />
  </AvTooltip>
</template>

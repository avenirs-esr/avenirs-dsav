<script lang="ts" setup>
import type { Slot } from 'vue'

/**
 * AvTab component props.
 */
export interface AvTabProps {
  /**
   * Title of the tab displayed in the tab bar.
   */
  title: string

  /**
   * Tab icon
   */
  icon?: string

  /**
   * Whether the tab is disabled.
   */
  disabled?: boolean

  /**
   * Whether the tab is in loading state.
   */
  isLoading?: boolean
}

defineProps<AvTabProps>()

/**
 * Slots available in the AvTab component.
 * The default slot contains the contents of the tab.
 */
defineSlots<{
  /**
   * Default slot for tab content.
   */
  default?: Slot
}>()
</script>

<template>
  <slot />
</template>

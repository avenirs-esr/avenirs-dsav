<script setup lang="ts">
import { AvButton } from '@/components/interaction'
import { MDI_ICONS } from '@/tokens'

/**
 * AvCancelConfirmButtons component props.
 */
export interface AvCancelConfirmButtonsProps {
  /**
   * Label and title (for accessibility) of the cancel button.
   */
  cancelLabel?: string

  /**
   * Icon name of the cancel button.
   * @default 'mdi:close-circle-outline'
   */
  cancelIcon?: string

  /**
   * Adds a disabled state on the cancel button.
   */
  cancelDisabled?: boolean

  /**
   * Adds a loading state on the cancel button.
   */
  cancelIsLoading?: boolean

  /**
   * Label and title (for accessibility) of the confirm button.
   */
  confirmLabel?: string

  /**
   * Icon name of the confirm button.
   * @default 'mdi:check-circle-outline'
   */
  confirmIcon?: string

  /**
   * Adds a disabled state on the confirm button.
   */
  confirmDisabled?: boolean

  /**
   * Adds a loading state on the confirm button.
   */
  confirmIsLoading?: boolean
}

const {
  cancelLabel,
  cancelIcon = MDI_ICONS.CLOSE_CIRCLE_OUTLINE,
  cancelDisabled,
  cancelIsLoading,
  confirmLabel,
  confirmIcon = MDI_ICONS.CLOSE_CIRCLE_OUTLINE,
  confirmDisabled,
  confirmIsLoading
} = defineProps<AvCancelConfirmButtonsProps>()

/**
 * Events emitted by the component.
 *
 * @event cancel - Event emitted when the cancel button is clicked.
 * @event confirm - Event emitted when the confirm button is clicked.
 */
const emit = defineEmits<{
  (e: 'cancel'): void
  (e: 'confirm'): void
}>()
</script>

<template>
  <div class="av-cancel-confirm-buttons-container">
    <AvButton
      v-if="cancelLabel"
      :icon="cancelIcon"
      :label="cancelLabel"
      :title="cancelLabel"
      variant="OUTLINED"
      :is-loading="cancelIsLoading"
      :disabled="cancelDisabled"
      small
      @click="() => emit('cancel')"
    />
    <AvButton
      v-if="confirmLabel"
      :icon="confirmIcon"
      :label="confirmLabel"
      :title="confirmLabel"
      variant="FLAT"
      :is-loading="confirmIsLoading"
      :disabled="confirmDisabled"
      small
      @click="() => emit('confirm')"
    />
  </div>
</template>

<style lang="scss" scoped>
.av-cancel-confirm-buttons-container {
  display: flex;
  flex-direction: row;
  gap: var(--spacing-sm);
}
</style>

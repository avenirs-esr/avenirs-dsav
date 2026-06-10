<script setup lang="ts">
import { useAttrs } from 'vue'
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

  /**
   * If true, only the icon will be displayed on the buttons.
   * @default false
   */
  iconOnly?: boolean

  /**
   * Associates the confirm button with a form.
   */
  form?: string
}

defineOptions({
  inheritAttrs: false,
})

const {
  cancelLabel,
  cancelIcon = MDI_ICONS.CLOSE_CIRCLE_OUTLINE,
  cancelDisabled,
  cancelIsLoading,
  confirmLabel,
  confirmIcon = MDI_ICONS.CHECK_CIRCLE_OUTLINE,
  confirmDisabled,
  confirmIsLoading,
  iconOnly = false,
  form,
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

const attrs = useAttrs()
</script>

<template>
  <div
    class="av-cancel-confirm-buttons-container av-row av-gap-sm"
    v-bind="attrs"
  >
    <AvButton
      v-if="cancelLabel"
      :icon="cancelIcon"
      :label="cancelLabel"
      variant="OUTLINED"
      :is-loading="cancelIsLoading"
      :disabled="cancelDisabled"
      :icon-only="iconOnly"
      small
      data-testid="cancel-button"
      @click="emit('cancel')"
    />
    <AvButton
      v-if="confirmLabel"
      :icon="confirmIcon"
      :label="confirmLabel"
      variant="FLAT"
      :is-loading="confirmIsLoading"
      :disabled="confirmDisabled"
      :type="form ? 'submit' : undefined"
      :form="form"
      :icon-only="iconOnly"
      small
      data-testid="confirm-button"
      @click="emit('confirm')"
    />
  </div>
</template>

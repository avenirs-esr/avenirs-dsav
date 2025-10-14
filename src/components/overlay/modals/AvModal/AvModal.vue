<script setup lang="ts">
import type { Slot } from 'vue'
import { MDI_ICONS } from '@/tokens'

/**
 * AvModal component props.
 */
export interface AvModalProps {
  /**
   * Unique identifier for the modal.
   * @default useRandomId('modal', 'dialog')
   */
  modalId?: string

  /**
   * Indicates whether the modal is open.
   * @default false
   */
  opened?: boolean

  /**
   * Specifies whether the modal is an alert (role `"alertdialog"` if `true`) or not (role will be `"dialog"`).
   * @default false
   */
  isAlert?: boolean

  /**
   * Reference to original element to restore focus after closing.
   * @default { focus() {} }
   */
  origin?: {
    focus: () => void
  }

  /**
   * Name of icon to be displayed in modal title.
   */
  icon?: string

  /**
   * Modal size.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl'

  /**
   * Label and title (for accessibility) of the close button.
   */
  closeButtonLabel: string

  /**
   * Icon name of the confirm button.
   * @default 'mdi:close-circle-outline'
   */
  closeButtonIcon?: string

  /**
   * Adds a disabled state on the close button.
   */
  closeButtonDisabled?: boolean

  /**
   * Label and title (for accessibility) of the confirm button.
   */
  confirmButtonLabel?: string

  /**
   * Icon name of the confirm button.
   * @default 'mdi:check-circle-outline'
   */
  confirmButtonIcon?: string

  /**
   * Adds a disabled state on the confirm button.
   */
  confirmButtonDisabled?: boolean

  /**
   * Adds a loading state on the close button.
   */
  isLoading?: boolean
}

const { isLoading, ...props } = defineProps<AvModalProps>()

/**
 * Events emitted by the component.
 *
 * @event close - Event emitted when the modal is closed.
 * @event confirm - Event emitted when the confirm button is clicked.
 */
const emit = defineEmits<{
  (e: 'close'): void
  (e: 'confirm'): void
}>()

/**
 * Slots available in the component.
 *
 * @slot default - Default slot for modal content.
 * @slot header - Slot for modal title.
 * @slot footer - Slot for modal footer.
 */
const slots = defineSlots<{
  default?: Slot
  header?: Slot
  footer?: Slot
}>()

const closeButtonIcon = computed(() => props.closeButtonIcon ?? MDI_ICONS.CLOSE_CIRCLE_OUTLINE)
const confirmButtonIcon = computed(() => props.confirmButtonIcon ?? MDI_ICONS.CHECK_CIRCLE_OUTLINE)
</script>

<template>
  <Teleport to="body">
    <DsfrModal
      v-bind="props"
      title=""
      @keydown.esc="emit('close')"
    >
      <template #default>
        <div
          v-if="slots.header"
          class="header"
        >
          <slot name="header" />
        </div>
        <slot />
      </template>
      <template #footer>
        <div class="footer">
          <AvCancelConfirmButtons
            :cancel-label="props.closeButtonLabel"
            :cancel-icon="closeButtonIcon"
            :cancel-disabled="props.closeButtonDisabled"
            :cancel-is-loading="isLoading"
            :confirm-label="props.confirmButtonLabel"
            :confirm-icon="confirmButtonIcon"
            :confirm-disabled="props.confirmButtonDisabled"
            :confirm-is-loading="isLoading"
            @cancel="() => emit('close')"
            @confirm="() => emit('confirm')"
          />
          <slot name="footer" />
        </div>
      </template>
    </DsfrModal>
  </Teleport>
</template>

<style lang="scss" scoped>
:deep(.fr-modal__header),
:deep(.fr-modal__body),
:deep(.fr-modal__footer) {
  background: var(--dialog) !important;
}

:deep(.fr-modal__body) {
  border-radius: var(--radius-lg) !important;
}

:deep(.fr-btn--close) {
  display: none !important;
}

.header {
  padding-bottom: var(--spacing-md);
}

.footer {
  display: flex;
  flex-direction: row;
  justify-content: right;
  width: 100%;
  gap: var(--spacing-sm);
}
</style>

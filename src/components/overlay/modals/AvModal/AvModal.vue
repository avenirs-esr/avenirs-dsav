<script setup lang="ts">
import type { Slot } from 'vue'
import { FocusTrap } from 'focus-trap-vue'
import { MDI_ICONS } from '@/tokens'

/**
 * AvModal component props.
 */
export interface AvModalProps {
  /**
   * Unique identifier for the modal.
   * @default `modal-${crypto.randomUUID()}`
   */
  id?: string

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
   * @default false
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
   * @default false
   */
  confirmButtonDisabled?: boolean

  /**
   * Adds a loading state on the close button.
   */
  isLoading?: boolean
}

const {
  id,
  opened = false,
  isAlert = false,
  size = 'md',
  closeButtonLabel,
  closeButtonIcon = MDI_ICONS.CLOSE_CIRCLE_OUTLINE,
  closeButtonDisabled = false,
  confirmButtonLabel,
  confirmButtonIcon = MDI_ICONS.CHECK_CIRCLE_OUTLINE,
  confirmButtonDisabled = false,
  isLoading,
} = defineProps<AvModalProps>()

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

const realId = computed(() => id ?? `modal-${crypto.randomUUID()}`)

const role = computed(() => {
  return isAlert ? 'alertdialog' : 'dialog'
})

const closeBtn = ref<HTMLButtonElement | null>(null)
const modal = ref()
watch(() => opened, (newValue) => {
  if (newValue) {
    modal.value?.showModal()
    closeBtn.value?.focus()
  }
  else {
    modal.value?.close()
  }
  setAppropriateClassOnBody(newValue)
})

function setAppropriateClassOnBody (on: boolean) {
  if (typeof window !== 'undefined') {
    document.body.classList.toggle('modal-open', on)
  }
}

onMounted(() => {
  setAppropriateClassOnBody(opened)
})

onBeforeUnmount(() => {
  setAppropriateClassOnBody(false)
})
</script>

<template>
  <Teleport to="body">
    <FocusTrap
      v-if="opened"
    >
      <dialog
        :id="realId"
        ref="modal"
        aria-modal="true"
        :aria-labelledby="realId"
        :role="role"
        class="fr-modal"
        :class="{ 'fr-modal--opened': opened }"
        :open="opened"
        @keydown.esc="emit('close')"
      >
        <div class="av-container av-container--fluid av-container-md">
          <div class="av-row-md av-row-md--center">
            <div
              class="av-col-12"
              :class="{
                'av-col-md-8': size === 'lg',
                'av-col-md-6': size === 'md',
                'av-col-md-4': size === 'sm',
              }"
            >
              <div class="fr-modal__body">
                <div class="fr-modal__content">
                  <div
                    v-if="slots.header"
                    class="header"
                  >
                    <slot name="header" />
                  </div>
                  <slot />
                </div>
                <div
                  class="fr-modal__footer"
                >
                  <AvCancelConfirmButtons
                    ref="closeBtn"
                    :cancel-label="closeButtonLabel"
                    :cancel-icon="closeButtonIcon"
                    :cancel-disabled="closeButtonDisabled"
                    :cancel-is-loading="isLoading"
                    :confirm-label="confirmButtonLabel"
                    :confirm-icon="confirmButtonIcon"
                    :confirm-disabled="confirmButtonDisabled"
                    :confirm-is-loading="isLoading"
                    @cancel="() => emit('close')"
                    @confirm="() => emit('confirm')"
                  />
                  <slot name="footer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </FocusTrap>
  </Teleport>
</template>

<style lang="scss" scoped>
:global(body.modal-open) {
  overflow: hidden;
}

.fr-modal__content {
  padding: var(--spacing-sm) var(--spacing-lg) var(--spacing-none);
}

.fr-modal__body {
  border-radius: var(--radius-lg) !important;
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

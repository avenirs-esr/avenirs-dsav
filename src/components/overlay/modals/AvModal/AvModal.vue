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
        class="av-modal av-col av-h-full av-w-full av-align-stretch av-justify-end av-justify-around--md av-p-none av-m-none"
        :class="{ 'av-modal--opened av-w-full av-h-full': opened }"
        :open="opened"
        @keydown.esc="emit('close')"
      >
        <div class="av-container av-container--md av-container--lg av-container-fluid av-w-full">
          <div class="av-modal__body av-pt-sm av-pt-none--md">
            <div class="av-modal__content av-mb-4xl av-px-lg av-pt-sm--md">
              <div
                v-if="slots.header"
                class="header av-row av-align-center av-pb-md"
              >
                <slot name="header" />
              </div>
              <slot />
            </div>
            <div class="av-modal__footer av-row av-justify-end av-p-sm av--mt-2xl">
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
      </dialog>
    </FocusTrap>
  </Teleport>
</template>

<style lang="scss" scoped>
@use '@/styles/settings/breakpoints' as *;

.av-modal {
  position: fixed;
  inset: 0;
  border: none;
  color: inherit;
  opacity: 0;
  transition: opacity .3s, visibility .3s;
  visibility: hidden;
  background-color: var(--transparency);

  &__header {
    flex: auto 0 0;
  }

  &__body {
    border-radius: var(--radius-lg) var(--radius-lg) var(--radius-none) var(--radius-none);
    max-height: calc(100vh - var(--spacing-lg));
    overflow-y: auto;
    background-color: var(--dialog);
  }

  &__footer {
    bottom: 0;
    flex: auto 0 0;
    position: sticky;
    transition: box-shadow .3s;
    background-color: var(--dialog);
  }

  &--opened {
    opacity: 1;
    transition: opacity .3s, visibility .3s;
    visibility: inherit;
  }

  .av-container-fluid {
    min-width: 50%;
  }

  @include max-width(md) {
    &__body {
      max-height: 80vh;
    }
  }
}

:global(body.modal-open) {
  overflow: hidden;
}
</style>

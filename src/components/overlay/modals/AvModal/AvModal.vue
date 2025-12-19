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
        class="av-modal"
        :class="{ 'av-modal--opened': opened }"
        :open="opened"
        @keydown.esc="emit('close')"
      >
        <div class="av-container av-container--md av-container-fluid">
          <div class="av-modal__body">
            <div class="av-modal__content">
              <div
                v-if="slots.header"
                class="header"
              >
                <slot name="header" />
              </div>
              <slot />
            </div>
            <div class="av-modal__footer">
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
  --ground: 2000;
  align-items: stretch;
  border: none;
  bottom: 0;
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  left: 0;
  margin: 0;
  opacity: 0;
  padding: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity .3s, visibility .3s;
  visibility: hidden;
  width: 100%;
  z-index: 1750;
  background-color: var(--transparency);

    width: 100%;

  &__header {
    align-items: center;
    display: flex;
    flex: auto 0 0;
    padding: 1rem 1rem .5rem;
  }

  &__content {
    padding: var(--spacing-sm) var(--spacing-lg) var(--spacing-none);
    margin-bottom: 3.5rem;
  }

  &__body {
    border-radius: var(--radius-lg);
    --modal-max-height: calc(100vh - 2rem);
    flex: 1 1 auto;
    max-height: var(--modal-max-height);
    overflow-y: auto;
    z-index: calc(var(--ground) + 2000);
    background-color: var(--dialog);
  }

  &__footer {
    bottom: 0;
    display: flex;
    flex: auto 0 0;
    margin-top: -2.5rem;
    padding: 1rem;
    position: sticky;
    transition: box-shadow .3s;
    z-index: calc(var(--ground) + 1250);
    justify-content: flex-end;
    background-color: var(--dialog);
  }

  &--opened {
    height: 100%;
    opacity: 1;
    transition: opacity .3s, visibility .3s;
    visibility: inherit;
    width: 100%;
  }

  .av-container-fluid {
    min-width: 50%;
  }

  @include max-width(md) {
    .av-container-fluid {
      width: 100%;
    }

    justify-content: flex-end;
    width: 100%;

    &__body {
      max-height: 80vh;
      width: 100%;
    }

    &__content {
      margin-bottom: var(--spacing-4xl);
      padding-left: var(--spacing-lg);
      padding-right: var(--spacing-lg);
    }

    &__footer {
      margin-top: calc(-1 * var(--spacing-2xl));
      padding: var(--spacing-lg);
    }
  }
}

:global(body.modal-open) {
  overflow: hidden;
}

.header {
  padding-bottom: var(--spacing-md);
}
</style>

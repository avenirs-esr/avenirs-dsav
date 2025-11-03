<script setup lang="ts">
import type { Slot } from 'vue'
import AvIcon from '@/components/base/AvIcon/AvIcon.vue'
import AvButton from '@/components/interaction/buttons/AvButton/AvButton.vue'
import { MDI_ICONS } from '@/tokens'

/**
 * AvAlert component props.
 */
export interface AvAlertProps {
  /**
   * If true, the alert is displayed with the `alert` role.
   * @default false
   */
  alert?: boolean

  /**
   * Indicates whether the alert is closed (`true`) or visible (`false`).
   * @default false
   */
  closed?: boolean

  /**
   * Indicates whether the alert can be closed using a button.
   * @default false
   */
  closeable?: boolean

  /**
   * The alert unique identifier.
   * @default `alert-${crypto.randomUUID()}`
   */
  id?: string

  /**
   * The alert title.
   * @default ''
   */
  title?: string

  /**
   * The alert description text.
   */
  description?: string

  /**
   * Indicates whether the alert should be displayed in a small format.
   * @default false
   */
  small?: boolean

  /**
   * The alert type. Affects the color and icon.
   * @default 'info'
   */
  type?: 'info' | 'success' | 'warning' | 'error'

  /**
   * The label and aria-label of the alert close button.
   * @default 'Fermer'
   */
  closeButtonLabel?: string
}

const {
  alert = false,
  id,
  title = '',
  description,
  type = 'info',
  closeButtonLabel = 'Fermer',
  small = false
} = defineProps<AvAlertProps>()

/**
 * Events emitted by AvAlert.
 * @event close - Event triggered when the alert closes.
 */
const emit = defineEmits<{
  /**
   * Event triggered when the alert closes.
   */
  (e: 'close'): void
}>()

/**
 * Slots available in the AvAlert component.
 *
 * @slot default - Default slot for global content.
 */
defineSlots<{
  /**
   * Default slot for global content.
   */
  default?: Slot
}>()

const realId = computed(() => id ?? `alert-${crypto.randomUUID()}`)
const onClick = () => emit('close')

const classes = computed(() => ([
  `av-alert--${type}`,
  {
    'av-alert--sm': small,
  },
]),
)

const icon = computed(() => {
  switch (type) {
    case 'error':
      return { name: MDI_ICONS.ALERT_CIRCLE_OUTLINE, color: 'var(--dark-background-error)' }
    case 'success':
      return { name: MDI_ICONS.CHECK_CIRCLE, color: 'var(--dark-background-success)' }
    case 'warning':
      return { name: MDI_ICONS.WARNING_OUTLINE, color: 'var(--dark-background-warn)' }
    case 'info':
    default:
      return { name: MDI_ICONS.INFORMATION_OUTLINE, color: 'var(--dark-background-primary1)' }
  }
})
</script>

<template>
  <div
    v-if="!closed"
    :id="realId"
    class="av-alert"
    :class="classes"
    :role="alert ? 'alert' : undefined"
  >
    <div class="av-alert__container">
      <div class="av-alert__content">
        <AvIcon
          v-bind="icon"
          :size="3"
        />
        <div class="av-alert__title">
          <span
            v-if="!small"
            class="s2-bold"
          >
            {{ title }}
          </span>
          <slot>
            <span class="b1-regular">{{ description }}</span>
          </slot>
        </div>
      </div>
      <AvButton
        v-if="closeable"
        icon-only
        :icon="MDI_ICONS.CLOSE_CIRCLE_OUTLINE"
        :label="closeButtonLabel"
        :on-click="onClick"
        :small="small"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.av-alert {
  border: 1px solid var(--dark-background-primary1);
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
  background-color: var(--dialog);

  &__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: var(--spacing-md);
  }

  &__content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--spacing-sm);
  }

  &__title {
    display: flex;
    flex-direction: column;
  }

  +.av-alert {
    margin-top: var(--spacing-sm);
  }

  &--sm {
    padding: var(--spacing-sm);
  }
}
</style>

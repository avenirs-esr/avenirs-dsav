<script setup lang="ts">
import AvIcon from '@/components/base/AvIcon/AvIcon.vue'
import AvButton from '@/components/interaction/buttons/AvButton/AvButton.vue'
import { MDI_ICONS } from '@/tokens'

/**
 * AvAlert component props.
 */
export interface AvAlertProps {
  /**
   * Indicates whether the alert is closed (`true`) or visible (`false`).
   * Managed by the parent component (typically AvToaster).
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

const realId = id ?? `alert-${crypto.randomUUID()}`
const onClick = () => emit('close')

const classes = computed(() => ([
  `av-alert--${type}`,
  {
    'av-alert--sm av-p-sm': small,
    'av-p-md': !small,
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

const role = computed(() => (type === 'error' || type === 'warning' ? 'alert' : 'status'))
</script>

<template>
  <div
    v-if="!closed"
    :id="realId"
    class="av-alert av-radius-lg"
    :class="classes"
    :role="role"
  >
    <div class="av-alert__container av-row av-align-center av-justify-between av-w-full av-gap-md">
      <div class="av-alert__content av-row av-align-center av-gap-sm">
        <AvIcon
          v-bind="icon"
          :size="3"
        />
        <div class="av-col">
          <span
            v-if="!small"
            class="s2-bold"
          >
            {{ title }}
          </span>
          <span class="b1-regular">{{ description }}</span>
        </div>
      </div>
      <AvButton
        v-if="closeable"
        icon-only
        :icon="MDI_ICONS.CLOSE_CIRCLE_OUTLINE"
        :label="closeButtonLabel"
        :small="small"
        @click="onClick"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.av-alert {
  border: 1px solid var(--dark-background-primary1);
  background-color: var(--dialog);

  +.av-alert {
    margin-top: var(--spacing-sm);
  }
}
</style>

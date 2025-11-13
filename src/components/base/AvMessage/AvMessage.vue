<script lang="ts" setup>
import { MDI_ICONS } from '@/tokens'

/**
 * AvMessageElement component props.
 */
export interface AvMessageProps {
  /**
   * Unique ID of the component
   * @default `message-${crypto.randomUUID()}`
   */
  messageId?: string

  /**
   * Defines the type of message to display
   */
  type: 'info' | 'success' | 'warning' | 'error'

  /**
   * Message text to display
   * @default undefined
   */
  message?: string | string[]
}

const { messageId, type, message } = defineProps<AvMessageProps>()

const id = computed(() => messageId ?? `message-${crypto.randomUUID()}`)

const avIconTextProps = computed(() => {
  switch (type) {
    case 'success':
      return {
        icon: MDI_ICONS.SUCCESS_CIRCLE_OUTLINE,
        iconColor: 'var(--dark-background-success)',
        textColor: 'var(--dark-background-success)',
        typographyClass: 'caption-regular'
      }
    case 'warning':
      return {
        icon: MDI_ICONS.WARNING_OUTLINE,
        iconColor: 'var(--dark-background-warn)',
        textColor: 'var(--dark-background-warn)',
        typographyClass: 'caption-regular'
      }
    case 'error':
      return {
        icon: MDI_ICONS.CLOSE_OCTAGON,
        iconColor: 'var(--dark-background-error)',
        textColor: 'var(--dark-background-error)',
        typographyClass: 'caption-regular'
      }
    default:
      return {
        icon: MDI_ICONS.INFORMATION_BOX_OUTLINE,
        iconColor: 'var(--dark-background-info)',
        textColor: 'var(--dark-background-info)',
        typographyClass: 'caption-regular'
      }
  }
})

const messages = computed(() => {
  if (!message) {
    return []
  }
  if (!Array.isArray(message)) {
    return [message ?? '']
  }
  return message
})
</script>

<template>
  <div
    class="av-message"
    role="alert"
  >
    <AvIconText
      v-for="(msg, index) in messages"
      :id="`${id}-${index}`"
      :key="`${id}-${index}`"
      :class="`av-message--${type}`"
      v-bind="avIconTextProps"
      :text="msg"
    />
  </div>
</template>

<style lang="scss" scoped>
.av-message {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);

  & > *:first-child {
    padding-top: var(--spacing-xs);
  }
}
</style>

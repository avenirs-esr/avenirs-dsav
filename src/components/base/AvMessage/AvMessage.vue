<script lang="ts" setup>
import { ICONS_DATA_URL } from '@/tokens'

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

const styleVars = computed(() => {
  switch (type) {
    case 'success':
      return { '--icon-path': `url(${ICONS_DATA_URL.MDI_SUCCESS_CIRCLE_OUTLINE})` }
    case 'warning':
      return { '--icon-path': `url(${ICONS_DATA_URL.MDI_WARNING_OUTLINE})` }
    case 'error':
      return { '--icon-path': `url(${ICONS_DATA_URL.MDI_CLOSE_OCTAGON})` }
    default:
      return { '--icon-path': `url(${ICONS_DATA_URL.MDI_INFORMATION_BOX_OUTLINE})` }
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
  <div class="av-message">
    <span
      v-for="(msg, index) in messages"
      :id="`${id}-${index}`"
      :key="`${id}-${index}`"
      aria-live="assertive"
      role="alert"
      class="caption-regular"
      :class="`av-message--${type}`"
      :style="styleVars"
    >
      {{ msg }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.av-message {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);

  &--error {
    color: var(--dark-background-error) !important;
  }

  &--info {
    color: var(--dark-background-info) !important;
  }

  &--success {
    color: var(--dark-background-success) !important;
  }

  &--warning {
    color: var(--dark-background-warn) !important;
  }

  &--error::before,
  &--info::before,
  &--success::before,
  &--warning::before {
    background-color: currentColor;
    content: "";
    display: inline-block;
    flex: 0 0 auto;
    height: var(--dimension-sm);
    margin-left: var(--spacing-xxs);
    margin-right: var(--spacing-xxs);
    -webkit-mask-image: var(--icon-path);
    mask-image: var(--icon-path);
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
    width: var(--dimension-sm);
    vertical-align: calc((.75em - var(--dimension-sm))*.5);
  }
}
</style>

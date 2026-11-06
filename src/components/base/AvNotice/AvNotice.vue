<script setup lang="ts">
import DOMPurify from 'dompurify'
import { MDI_ICONS } from '@/tokens'

/**
 * AvNotice component props.
 */
export interface AvNoticeProps {
  /**
   * The banner title.
   * @default ''
   */
  title?: string

  /**
   * The banner text as plain text or HTML. Will be sanitized to prevent XSS attacks.
   * @default ''
   */
  text?: string

  /**
   * The banner type.
   * Can be 'info', 'warning', or 'alert'.
   */
  type: 'info' | 'warning' | 'alert'

  /**
   * Whether the notice is global. Used for full-width notices
   * (e.g. a site-wide alert at the top of the page)
   * Use it when notice is instanciated in AvHeader globalNotice slot.
   * @default false
   */
  global?: boolean
}

const { title = '', text = '', type, global = false } = defineProps<AvNoticeProps>()

const sanitizedDescription = computed(() => DOMPurify.sanitize(text ?? ''))

const icon = computed(() => {
  switch (type) {
    case 'warning':
      return { name: MDI_ICONS.WARNING, color: 'var(--dark-background-warn)' }
    case 'alert':
      return { name: MDI_ICONS.WARNING_CIRCLE, color: 'var(--dark-background-error)' }
    case 'info':
    default:
      return { name: MDI_ICONS.INFORMATION_BOX, color: 'var(--dark-background-info)' }
  }
})

const backgroundColor = computed(() => {
  switch (type) {
    case 'warning':
      return 'var(--light-background-warn)'
    case 'alert':
      return 'var(--light-background-error)'
    case 'info':
    default:
      return 'var(--light-background-info)'
  }
})
</script>

<template>
  <div
    class="av-notice av-row av-align-center av-gap-sm av-p-sm"
    :class="[`av-notice--${type}`, { 'av-notice--global av-container': global }]"
  >
    <AvIcon
      v-bind="icon"
      :size="1.5"
    />
    <span class="b2-bold">
      {{ title }}
      <span class="b2-regular">
        <span v-html="sanitizedDescription" />
      </span>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.av-notice {
  &--info {
    color: var(--dark-background-info);
  }

  &--warning {
    color: var(--dark-background-warn);
  }

  &--alert {
    color: var(--dark-background-error);
  }

  &--global {
    box-shadow: 0 0 0 100vmax v-bind('backgroundColor');
    clip-path: inset(0 -100vmax);
  }

  span,
  .b2-bold,
  .b2-regular {
    color: inherit;
  }
}
</style>

<script setup lang="ts">
import { MDI_ICONS } from '@/tokens'
import { formatTextToHtml } from '@/utils/string/string'

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
   * The banner text. Any text surrounded by a ** will be underlined.
   * @default ''
   */
  text?: string

  /**
   * The banner type.
   * Can be 'info', 'warning', or 'alert'.
   */
  type: 'info' | 'warning' | 'alert'
}

const { title = '', text = '', type } = defineProps<AvNoticeProps>()

const formattedDesc = computed(() => formatTextToHtml(text))

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
</script>

<template>
  <div
    class="av-notice av-row av-align-center av-gap-sm av-p-sm"
    :class="`av-notice--${type}`"
  >
    <AvIcon
      v-bind="icon"
      :size="1.5"
    />
    <span class="b2-bold">
      {{ title }}
      <span class="b2-regular">
        <span v-html="formattedDesc" />
      </span>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.av-notice {
  &--info {
    background-color: var(--light-background-info);
    color: var(--dark-background-info);
  }

  &--warning {
    background-color: var(--light-background-warn);
    color: var(--dark-background-warn);
  }

  &--alert {
    background-color: var(--light-background-error);
    color: var(--dark-background-error);
  }

  span,
  .b2-bold,
  .b2-regular {
    color: inherit;
  }
}
</style>

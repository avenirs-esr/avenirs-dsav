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
      return MDI_ICONS.WARNING
    case 'alert':
      return MDI_ICONS.WARNING_CIRCLE
    case 'info':
    default:
      return MDI_ICONS.INFORMATION_BOX
  }
})
</script>

<template>
  <div
    class="av-notice"
    :class="`av-notice--${type}`"
  >
    <AvIcon
      :name="icon"
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
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm);

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

  .b2-bold,
  .b2-regular {
    color: inherit;
  }
}
</style>

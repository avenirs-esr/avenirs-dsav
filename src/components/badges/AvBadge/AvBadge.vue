<script setup lang="ts">
/**
 * AvBadge component props.
 */
export interface AvBadgeProps {
/**
 * The color of the text to display in the badge.
 */
  color: string

  /**
   * The background color of the badge.
   */
  backgroundColor: string

  /**
   * The color of the badge border.
   */
  borderColor?: string

  /**
   * The link to the public icon in the project (e.g., `/assets/icons/calendar-clock-outline.svg`).
   */
  iconPath?: string

  /**
   * The text to display in the badge.
   */
  label: string

  /**
   * Sets the badge type.
   * @default 'info'
   */
  type?: 'success' | 'error' | 'new' | 'info' | 'warning' | undefined

  /**
   * If true, the badge is displayed without an icon.
   * @default false
   */
  noIcon?: boolean | undefined

  /**
   * If true, displays a reduced-size badge.
   * @default false
   */
  small?: boolean | undefined

  /**
   * If true, the text is truncated with an ellipsis if it is too long.
   * @default false
   */
  ellipsis?: boolean | undefined
}

const {
  color,
  backgroundColor,
  borderColor,
  iconPath,
  label,
  type = 'info',
  noIcon = false,
  small = false,
  ellipsis = false
} = defineProps<AvBadgeProps>()

const styleVars = computed(() => ({
  '--icon-path': `url(${iconPath})`,
}))
</script>

<template>
  <p
    class="av-badge fr-badge"
    :class="{
      [`fr-badge--${type}`]: type,
      'fr-badge--no-icon': noIcon,
      'fr-badge--sm': small,
      'av-badge--custom-icon': iconPath && !noIcon,
    }"
    :title="ellipsis ? label : undefined"
    :style="styleVars"
  >
    <span :class="ellipsis ? 'fr-ellipsis' : ''">
      {{ label }}
    </span>
  </p>
</template>

<style lang="scss" scoped>
.av-badge {
  color: v-bind('color') !important;
  background-color: v-bind('backgroundColor');
  border: 1px solid v-bind('borderColor');
}

.av-badge--custom-icon::before {
  content: '';
  margin-right: var(--spacing-xs);
  height: var(--dimension-sm);
  width: var(--dimension-sm);
  mask: var(--icon-path) !important;
  mask-size: contain !important;
  mask-repeat: no-repeat;
  mask-position: center;
  background-color: currentColor !important;
}
</style>

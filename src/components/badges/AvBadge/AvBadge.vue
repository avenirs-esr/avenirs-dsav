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
   * The base64 icon to be displayed.
   * You can use the `ICONS_DATA_URL` constant from DSAV.
   */
  iconDataUrl?: string

  /**
   * The text to display in the badge.
   */
  label: string

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
  iconDataUrl,
  label,
  small = false,
  ellipsis = false
} = defineProps<AvBadgeProps>()

const styleVars = computed(() => (
  iconDataUrl
    ? { '--icon-path': `url(${iconDataUrl})` }
    : {}
))
</script>

<template>
  <p
    class="av-badge"
    :class="{
      'av-badge--sm': small,
      'av-badge--custom-icon': iconDataUrl,
      'av-badge--no-icon': !iconDataUrl,
    }"
    :title="ellipsis ? label : undefined"
    :style="styleVars"
  >
    <span
      :class="{
        'av-ellipsis': ellipsis,
        'caption-bold': small,
        'b2-bold': !small,
      }"
    >
      {{ label }}
    </span>
  </p>
</template>

<style lang="scss" scoped>
.av-badge {
  color: v-bind('color');
  background-color: v-bind('backgroundColor');
  border: 1px solid v-bind('borderColor');
  border-radius: var(--radius-sm);
  display: inline-flex;
  flex-direction: row;
  max-height: none;
  max-width: 100%;
  min-height: var(--dimension-md);
  overflow: initial;
  padding: var(--spacing-none) var(--spacing-xs);
  width: -moz-fit-content;
  width: fit-content;
  align-items: center;
  margin: var(--spacing-none);

  & span {
    color: inherit;
  }

  &::before {
    display: inline-block;
    flex: 0 0 auto;
  }

  &--no-icon::before {
    content: none;
  }

  &--custom-icon::before {
    content: '';
    margin-right: var(--spacing-xs);
    height: var(--dimension-sm);
    width: var(--dimension-sm);
    mask: var(--icon-path);
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
    background-color: currentColor;
  }

  &--sm {
    padding: var(--spacing-none) var(--spacing-xxs);
  }
}

.av-badge--sm.av-badge--custom-icon::before {
  height: .75rem;
  width: .75rem;
}
</style>

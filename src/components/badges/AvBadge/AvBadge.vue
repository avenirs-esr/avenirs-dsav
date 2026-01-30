<script setup lang="ts">
import { getIconPath } from '@/utils/icon-path/icon-path'

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
   * The name of the icon or the base64 icon to be displayed.
   * You can use the `MDI_ICONS`, `RI_ICONS`, and `ICONS_DATA_URL` constants from DSAV.
   */
  icon?: string

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
  borderColor = 'transparent',
  icon,
  label,
  small = false,
  ellipsis = false,
} = defineProps<AvBadgeProps>()

const iconPathStyleVars = computed(() => getIconPath(icon))
</script>

<template>
  <span
    role="status"
    class="av-badge av-row av-align-center av-py-none av-m-none av-radius-sm"
    :class="{
      'av-badge--sm av-px-xxs': small,
      'av-px-xs': !small,
      'av-badge--custom-icon': icon,
      'av-badge--no-icon': !icon,
    }"
    :title="label"
    :style="iconPathStyleVars"
  >
    <span
      :class="{
        'av-ellipsis': ellipsis,
        'caption-regular': small,
        'b2-regular': !small,
      }"
    >
      {{ label }}
    </span>
  </span>
</template>

<style lang="scss" scoped>
.av-badge {
  color: v-bind('color');
  background-color: v-bind('backgroundColor');
  border: 1px solid v-bind('borderColor');
  max-width: 100%;
  min-height: var(--dimension-md);
  overflow: initial;
  width: fit-content;

  & span {
    color: inherit;
    line-height: 1;
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
}

.av-badge--sm.av-badge--custom-icon::before {
  height: .75rem;
  width: .75rem;
}
</style>

<script setup lang="ts">
import type AvIcon from '@/components/base/AvIcon/AvIcon.vue'
import { MDI_ICONS } from '@/tokens'
import { toSentenceCase } from '@/utils'

/**
 * AvButton component
 */
export interface AvButtonProps {
  /**
   * Button variant: borderless (`DEFAULT`) or with border (`OUTLINED`).
   * @default 'DEFAULT'
   */
  variant?: 'DEFAULT' | 'OUTLINED' | 'FLAT'

  /**
   * Button theme: blue (`PRIMARY`) or gray (`SECONDARY`).
   * @default 'PRIMARY'
   */
  theme?: 'PRIMARY' | 'SECONDARY'

  /**
   * Indicates button loading status.
   * @default false
   */
  isLoading?: boolean

  /**
   * Manually change icon size.
   * If not defined, the size is automatically calculated.
   */
  iconScale?: number

  /**
   * Removes radii from the button border.
   * @default false
   */
  noRadius?: boolean

  /**
   * Indicates if the button is disabled.
   * @default false
   */
  disabled?: boolean

  /**
   * Button text label.
   */
  label: string

  /**
   * Hide label text (`true`) or show it (`false`).
   * @default false
   */
  iconOnly?: boolean

  /**
   * Display the button in small size (`true`) or default size (`false`).
   * @default false
   */
  small?: boolean

  /**
   * Icon to be displayed in the button. Can be a name or an icon configuration (eg: `{"name": "mdi:stars"}`).
   */
  icon?: string | InstanceType<typeof AvIcon>['$props']

  /**
   * Disable sentence case transformation on the label.
   * You should only use this on very specific cases.
   * @default false
   */
  noSentenceCase?: boolean

  /**
   * Function called when button is clicked.
   * @param event The click MouseEvent
   * @deprecated Use `@click` event listener instead.
   */
  onClick?: ($event: MouseEvent) => void
}

const {
  variant = 'DEFAULT',
  theme = 'PRIMARY',
  small = false,
  iconOnly = false,
  disabled = false,
  isLoading = false,
  noRadius = false,
  icon,
  iconScale,
  noSentenceCase = false,
  label,
  onClick
} = defineProps<AvButtonProps>()

const btn = ref<{ focus: () => void } | null>(null)
function focus () {
  btn.value?.focus()
}
defineExpose({ focus })

const loadingIcon: InstanceType<typeof AvIcon>['$props'] = { name: MDI_ICONS.LOADING, animation: 'spin' }

const iconSize = computed(() => {
  if (iconScale && !Number.isNaN(iconScale)) {
    return iconScale
  }
  if (small) {
    return 1
  }
  return 1.5
})
const iconToRender = computed(() => {
  if (isLoading) {
    return { ...loadingIcon, size: iconSize.value }
  }
  if (typeof icon === 'string' && !!icon.trim()) {
    return { name: icon, size: iconSize.value }
  }
  if (icon && typeof icon !== 'string') {
    return { ...icon, size: iconSize.value }
  }
  return undefined
})
const labelToRender = computed(() => noSentenceCase ? label : toSentenceCase(label))
const buttonDisabled = computed(() => disabled || isLoading)
const variantClass = computed(() => `av-button--variant-${variant.toLowerCase()}`)
const themeClass = computed(() => `av-button--theme-${theme.toLowerCase()}`)
</script>

<template>
  <button
    ref="btn"
    class="av-button"
    :class="[
      {
        'av-button--disabled': buttonDisabled,
        'av-button--sm': small,
        'av-button--no-radius': noRadius,
      },
      variantClass,
      themeClass,
    ]"
    :title="iconOnly ? labelToRender : undefined"
    :disabled="buttonDisabled"
    :aria-disabled="buttonDisabled"
    :aria-label="labelToRender"
    :style="iconOnly ? { 'padding-inline': 'var(--spacing-xs)' } : {}"
    @click="onClick ? onClick($event) : () => {}"
  >
    <AvIcon
      v-if="iconToRender"
      v-bind="iconToRender"
    />
    <span
      v-if="!iconOnly"
      :class="small ? 'b2-regular' : 'b1-regular'"
    >
      {{ labelToRender }}
    </span>
  </button>
</template>

<style lang="scss" scoped>
@use "sass:map";

.av-button {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  padding: var(--spacing-xs) var(--spacing-sm);
  width: fit-content;
  gap: var(--spacing-xs);
  border-radius: var(--radius-lg);

  &--sm {
    border-radius: var(--radius-md);
    padding: var(--spacing-xxs) 0.75rem;
  }

  &--no-radius {
    border-radius: var(--radius-none);
  }

  // === Themes ===
  @each $theme, $colors in (
    primary: (
      text: var(--dark-background-primary1),
      bg: var(--other-background-base),
      hover-bg: var(--dark-background-primary2),
      hover-bg-alt: var(--light-background-primary1),
      hover-text: var(--other-background-base)
    ),
    secondary: (
      text: var(--text1),
      bg: var(--other-background-base),
      hover-bg: var(--light-background-neutral),
      hover-bg-alt: var(--contrast-foreground),
      hover-text: var(--text1)
    )
  ) {
    &--theme-#{$theme} {
      // === Variants ===
      @each $variant, $style in (
        default: (
          bg: map.get($colors, bg),
          color: map.get($colors, text),
          border: transparent
        ),
        outlined: (
          bg: map.get($colors, bg),
          color: map.get($colors, text),
          border: map.get($colors, text)
        ),
        flat: if(
          $theme == primary,
          (
            bg: map.get($colors, text),
            color: map.get($colors, bg),
            border: map.get($colors, text)
          ),
          (
            bg: var(--light-background-neutral),
            color: map.get($colors, text),
            border: var(--light-background-neutral)
          )
        )
      ) {
        &.av-button--variant-#{$variant} {
          background-color: map.get($style, bg);
          color: map.get($style, color);
          border: 1px solid map.get($style, border);

          // === Hover ===
          @if $variant != flat {
            &:hover:not(.av-button--disabled) {
              background-color: map.get($colors, hover-bg);
              color: map.get($colors, hover-text);
              border-color: map.get($colors, hover-bg);
            }
          }

          @if $variant == flat {
            &:hover:not(.av-button--disabled) {
              background-color: map.get($colors, hover-bg-alt);
              color: map.get($colors, text);
              border-color: map.get($colors, text);
            }
          }

          // === Disabled ===
          &.av-button--disabled {
            background-color: transparent;
            color: var(--divider);
            border-color: var(--divider);
            cursor: default;
          }
        }
      }
    }
  }

  .b1-regular,
  .b2-regular {
    color: inherit;
  }
}
</style>

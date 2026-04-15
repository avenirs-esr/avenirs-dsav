<script setup lang="ts">
import type AvIcon from '@/components/base/AvIcon/AvIcon.vue'
import { useAttrs } from 'vue'
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
   * Button theme: blue (`PRIMARY`) or gray (`SECONDARY`) or white (`TERTIARY`).
   * @default 'PRIMARY'
   */
  theme?: 'PRIMARY' | 'SECONDARY' | 'TERTIARY'

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
}

defineOptions({
  inheritAttrs: false,
})

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
} = defineProps<AvButtonProps>()

defineEmits<{
  /**
   * Emitted when the button is clicked.
   */
  (e: 'click', event: MouseEvent): void
}>()

const btn = ref<{ focus: () => void } | null>(null)
const attrs = useAttrs()
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
    v-bind="attrs"
    :title="iconOnly ? labelToRender : undefined"
    :aria-label="labelToRender"
    :aria-disabled="buttonDisabled"
    class="av-button av-row av-align-center av-gap-xs"
    :class="[
      {
        'av-button--disabled': buttonDisabled,
        'av-button--sm': small,
        'av-px-xs av-py-xxs': small && !iconOnly,
        'av-px-sm av-py-xs': !small && !iconOnly,
        'av-px-xxs av-py-xxs': small && iconOnly,
        'av-px-xs av-py-xs': !small && iconOnly,
        'av-radius-md': !noRadius && small,
        'av-radius-lg': !noRadius && !small,
        'av-radius-none': noRadius,
      },
      variantClass,
      themeClass,
    ]"
    :disabled="buttonDisabled"
    @click="$emit('click', $event)"
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
  width: fit-content;
  transition: background-color 0.2s ease, border-color 0.2s ease;

  // === Themes ===
  @each $theme, $colors in (
    primary: (
      text: var(--dark-background-primary1),
      bg: transparent,
      hover-bg: var(--light-background-primary1),
      hover-text: var(--dark-background-primary1),
      hover-text-flat: var(--other-background-base)
    ),
    secondary: (
      text: var(--text1),
      bg: transparent,
      hover-bg: var(--contrast-foreground),
      hover-text: var(--text1)
    ),
    tertiary: (
      text: var(--other-background-base),
      bg: transparent,
      hover-bg: var(--light-background-primary1),
      hover-text: var(--dark-background-primary1)
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
            color: map.get($colors, hover-text-flat),
            border: map.get($colors, text)
          ),
          (
            bg: var(--light-background-neutral),
            color: map.get($colors, hover-text),
            border: var(--light-background-neutral)
          )
        )
      ) {
        &.av-button--variant-#{$variant} {
          background-color: map.get($style, bg);
          color: map.get($style, color);
          border: 1px solid map.get($style, border);

          // === ARIA pressed ===
          &[aria-pressed="true"]:not(.av-button--disabled) {
            background-color: map.get($colors, hover-bg);;
            color: map.get($colors, text);
          }

          // === Hover ===
          &:hover:not(.av-button--disabled),
          &:hover:not([aria-pressed="true"]) {
            @if $variant == default {
              background-color: map.get($colors, hover-bg);
              color: map.get($colors, hover-text);
            } @else {
              background-color: map.get($colors, hover-bg);
              color: map.get($colors, hover-text);
              border-color: map.get($colors, text);
            }
          }

          &:hover[aria-pressed="true"] {
            background-color: map.get($colors, hover-bg);
            color: map.get($colors, hover-text);
          }

          // === Disabled ===
          &.av-button--disabled,
          &.av-button--disabled:hover {
            @if $variant == default {
              border-color: transparent;
            } @else {
              border-color: var(--divider);
            }
            background-color: transparent;
            color: var(--divider);
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

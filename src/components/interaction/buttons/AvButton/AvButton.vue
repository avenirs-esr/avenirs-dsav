<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
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
   * @warning If to is defined, the button will always be `DEFAULT` variant.
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

  /**
   * Route location to navigate to when the button is clicked.
   */
  to?: string | RouteLocationRaw

  /**
   * External URL to navigate to when the button is clicked.
   * When provided, the button is rendered as an anchor (`a`).
   */
  href?: string
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
  to = undefined,
  href = undefined,
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

const buttonDisabled = computed(() => disabled || isLoading)
const hasHref = computed(() => typeof href === 'string' && !!href.trim())
const hasTo = computed(() => !!to)
const asLink = computed(() => (hasHref.value || hasTo.value) && !buttonDisabled.value)

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
  if (isLoading && !disabled) {
    return { ...loadingIcon, size: iconSize.value }
  }
  if (hasHref.value && !disabled) {
    return { name: MDI_ICONS.EXTERNAL_LINK, size: iconSize.value }
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

const componentToRender = computed(() => {
  if (hasHref.value && !buttonDisabled.value) {
    return 'a'
  }
  if (hasTo.value && !buttonDisabled.value) {
    return 'RouterLink'
  }
  return 'button'
})
const variantClass = computed(() => `av-button--variant-${asLink.value ? 'default' : variant.toLowerCase()}`)
const themeClass = computed(() => `av-button--theme-${theme.toLowerCase()}`)

const linkProps = computed(() => {
  if (hasHref.value && !buttonDisabled.value) {
    return { href, target: '_blank', rel: 'noopener noreferrer' }
  }
  if (hasTo.value && !buttonDisabled.value) {
    return { to }
  }
  return {}
})
</script>

<template>
  <AvTooltip
    :content="labelToRender"
    :disabled="!iconOnly || buttonDisabled"
  >
    <component
      :is="componentToRender"
      ref="btn"
      v-bind="{ ...attrs, ...linkProps }"
      :aria-label="!hasTo || (hasTo && iconOnly) ? labelToRender : undefined"
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
      :data-tag="hasHref && !buttonDisabled ? 'link' : hasTo && !buttonDisabled ? 'routerlink' : 'button'"
      @click="!hasTo && !hasHref ? $emit('click', $event) : undefined"
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
    </component>
  </AvTooltip>
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

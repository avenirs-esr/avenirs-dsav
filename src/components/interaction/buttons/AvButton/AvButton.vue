<script setup lang="ts">
import type { ComputedRef } from 'vue'
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
   * Indicates icon position:
   * left (`false`) or right (`true`).
   * @default false
   */
  iconRight?: boolean

  /**
   * Hide label text (`true`) or show it (`false`).
   * @default false
   */
  iconOnly?: boolean

  /**
   * Button size: 'sm', 'small', 'md', 'medium', 'lg', 'large' or ''.
   * @default 'md'
   */
  size?: 'sm' | 'small' | 'lg' | 'large' | 'md' | 'medium' | '' | undefined

  /**
   * Icon to be displayed in the button. Can be a name or an icon configuration (eg: `{"name": "mdi:stars"}`).
   */
  icon?: string | InstanceType<typeof AvIcon>['$props']

  /**
   * Function called when button is clicked.
   * @param event The click MouseEvent
   */
  onClick?: ($event: MouseEvent) => void
}

const {
  variant = 'DEFAULT',
  theme = 'PRIMARY',
  size = 'md',
  iconOnly = false,
  iconRight = false,
  disabled = false,
  isLoading = false,
  noRadius = false,
  icon,
  iconScale,
  label,
  onClick
} = defineProps<AvButtonProps>()

const btn = ref<{ focus: () => void } | null>(null)
function focus () {
  btn.value?.focus()
}
defineExpose({ focus })

const loadingIcon: InstanceType<typeof AvIcon>['$props'] = { name: MDI_ICONS.LOADING_OUTLINE, animation: 'spin' }
const sm = computed(() => ['sm', 'small'].includes(size))
const md = computed(() => ['md', 'medium'].includes(size))
const lg = computed(() => ['lg', 'large'].includes(size))
const iconSize = computed(() => {
  if (iconScale && !Number.isNaN(iconScale)) {
    return iconScale
  }
  if (sm.value) {
    return 1
  }
  if (lg.value) {
    return 2
  }
  return 1.5 // md
})
const iconToRender: ComputedRef<InstanceType<typeof AvIcon>['$props'] | undefined> = computed(() => {
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
const labelToRender = computed(() => toSentenceCase(label))
const buttonDisabled = computed(() => disabled || isLoading)
const variantClass = computed(() => `av-button--variant-${variant.toLowerCase()}`)
const themeClass = computed(() => `av-button--theme-${theme.toLowerCase()}`)
</script>

<template>
  <button
    ref="btn"
    class="av-button fr-btn inline-flex"
    :class="[
      {
        'fr-btn--tertiary': variant !== 'DEFAULT',
        'fr-btn--tertiary-no-outline': variant === 'DEFAULT',
        'fr-btn--sm': sm,
        'fr-btn--md': md,
        'fr-btn--lg': lg,
        'reverse': iconRight,
        'justify-center': iconOnly,
        'av-button--no-radius': noRadius,
      },
      variantClass,
      themeClass,
    ]"
    :title="iconOnly ? labelToRender : undefined"
    :disabled="buttonDisabled"
    :aria-disabled="buttonDisabled"
    :aria-label="labelToRender"
    :style="iconOnly ? { 'padding-inline': '0.5rem' } : {}"
    @click="onClick ? onClick($event) : () => {}"
  >
    <AvIcon
      v-if="iconToRender"
      v-bind="iconToRender"
    />
    <span v-if="!iconOnly">
      {{ labelToRender }}
    </span>
  </button>
</template>

<style lang="scss" scoped>
.fr-btn {
  box-shadow: none;
}

.av-button--variant-default.av-button--theme-primary {
  background-color: var(--other-background-base);
  color: var(--dark-background-primary1);
  border: 1px solid transparent;
}

.av-button--variant-outlined.av-button--theme-primary {
  background-color: var(--other-background-base);
  color: var(--dark-background-primary1);
  border: 1px solid var(--dark-background-primary1);
}

.av-button--variant-flat.av-button--theme-primary {
  background-color: var(--dark-background-primary1);
  color: var(--other-background-base);
  border: 1px solid var(--dark-background-primary1);
}

.av-button--variant-default.av-button--theme-secondary {
  background-color: var(--other-background-base);
  color: var(--text1);
  border: 1px solid transparent;
}

.av-button--variant-outlined.av-button--theme-secondary {
  background-color: var(--other-background-base);
  color: var(--text1);
  border: 1px solid var(--text1);
}

.av-button--variant-flat.av-button--theme-secondary {
  background-color: var(--light-background-neutral);
  color: var(--text1);
  border: 1px solid var(--light-background-neutral);
}

.av-button--theme-primary:hover {
  background-color: var(--dark-background-primary1);
  color: var(--other-background-base);
}

.av-button--theme-secondary:hover {
  background-color: var(--light-background-neutral);
}

.av-button--variant-flat.av-button--theme-primary:hover {
  background-color: var(--other-background-base);
  color: var(--dark-background-primary1);
}

.av-button--variant-flat.av-button--theme-secondary:hover {
  background-color: var(--other-background-base);
  color: var(--text1);
  border-color: var(--text1);
}

.fr-btn.av-button--no-radius {
  border-radius: var(--radius-none) !important;
}

.fr-btn[disabled], .fr-btn[disabled]:hover {
  background-color: transparent;
  color: var(--divider);
  border-color: var(--divider);
  cursor: default;
}

.inline-flex {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.reverse {
  flex-direction: row-reverse;
}
</style>

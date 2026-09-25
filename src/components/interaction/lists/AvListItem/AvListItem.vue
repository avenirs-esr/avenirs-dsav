<script setup lang="ts">
import type { Slot } from 'vue'
import AvIcon from '@/components/base/AvIcon/AvIcon.vue'
import AvTooltip from '@/components/overlay/tooltips/AvTooltip/AvTooltip.vue'
import { useTextTruncation } from '@/composables'
import { Theme } from '@/types'

/**
 * AvListItem component props.
 */
export interface AvListItemProps {
  /**
   * The theme of the list item, affecting its overall styling.
   */
  theme?: Theme

  /**
   * The icon name according to the naming convention of Iconify-vue.
   */
  icon?: string

  /**
   * The icon size.
   * @default 1.3125
   */
  iconSize?: number

  /**
   * The title text.
   */
  title?: string

  /**
   * The description text.
   */
  description?: string

  /**
   * Whether the list item is clickable.
   * @default false
   */
  clickable?: boolean

  /**
   * Whether the list item is disabled.
   * @default false
   */
  disabled?: boolean

  /**
   * Whether the list item is selected/active.
   * @default false
   */
  selected?: boolean

  /**
   * Function called when list item is clicked.
   * @param event The click MouseEvent
   */
  onClick?: ($event: MouseEvent) => void

  /**
   * ARIA label for the list item when clickable.
   */
  ariaLabel?: string

  /**
   * ID of an element that describes the list item.
   */
  ariaDescribedby?: string

  /**
   * HTML tag to use for the root element when clickable.
   * @default 'button'
   */
  tag?: 'button' | 'div' | 'a'

  /**
   * Href attribute when tag is 'a'.
   */
  href?: string

  /**
   * Target attribute when tag is 'a'.
   */
  target?: string

  /**
   * Rel attribute when tag is 'a'.
   */
  rel?: string

  /**
   * ARIA role for the list item. If not provided, defaults based on context.
   */
  role?: string

  /**
   * Type of list item, affecting styling. 'main' for primary items, 'sub' for nested items.
   * @default 'main'
   */
  type?: 'main' | 'sub'

  /**
   * Enables the tooltip on the button. The tooltip will display the content of the `label` prop.
   * @default false
   */
  enableTooltip?: boolean

  /**
   * Maximum number of lines to display for the title of the list item. If the title exceeds this number of lines, it will be truncated with an ellipsis.
   * @default undefined
   * @example 2 → "This is a long title that will be truncated..." (if it exceeds 2 lines)
   * @example 3 → "This is a long title that will be truncated..." (if it exceeds 3 lines)
   * @example undefined → No truncation, the title will take as many lines as needed
   */
  titleMaxLines?: number
}

const {
  icon,
  iconSize = 1.3125,
  title,
  description,
  disabled = false,
  selected = false,
  onClick,
  ariaLabel,
  ariaDescribedby,
  href,
  target,
  rel,
  role = 'listitem',
  type = 'main',
  enableTooltip = false,
  titleMaxLines = undefined,
  theme = Theme.PRIMARY,
} = defineProps<AvListItemProps>()

/**
 * Slots available in the AvListItem component.
 */
const slots = defineSlots<{
  /**
   * Default slot for custom content.
   */
  default?: Slot
}>()

const titleRef = ref<HTMLElement | null>(null)
const descriptionRef = ref<HTMLElement | null>(null)

const { isTruncated: isTitleTruncated } = useTextTruncation(titleRef)
const { isTruncated: isDescriptionTruncated } = useTextTruncation(descriptionRef)

const componentTag = computed(() => {
  if (!!href || !!target || !!rel) {
    return 'a'
  }

  if (onClick) {
    return 'button'
  }

  return 'div'
})

const isLink = computed(() => componentTag.value === 'a')
const isButton = computed(() => componentTag.value === 'button')
const clickable = computed(() => isLink.value || isButton.value)

const computedAriaLabel = computed(() => {
  if (ariaLabel) {
    return ariaLabel
  }

  if (title && description) {
    return `${title}, ${description}`
  }

  return title || description || undefined
})

const clickableClass = computed(() => clickable.value ? 'av-list-item--clickable' : '')
const disabledClass = computed(() => disabled && isButton.value ? 'av-list-item--disabled' : '')
const selectedClass = computed(() => selected ? 'av-list-item--selected' : '')
const itemClass = computed(() => `av-list-${type}item`)
const themeClass = computed(() => `av-list-item--theme-${theme.toLowerCase()}`)

function handleClick (event: MouseEvent) {
  if (!clickable.value || disabled) {
    return
  }

  onClick?.(event)
}

function handleKeyDown (event: KeyboardEvent) {
  if (!clickable.value || disabled) {
    return
  }

  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()

    const mouseEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })

    onClick?.(mouseEvent)
  }
}
</script>

<template>
  <div
    :role="role"
    :class="itemClass"
  >
    <AvTooltip
      :content="computedAriaLabel ?? ''"
      :disabled="!enableTooltip || !computedAriaLabel || !(isTitleTruncated || isDescriptionTruncated)"
      trigger-class="av-w-full"
    >
      <component
        :is="componentTag"
        :aria-label="clickable ? computedAriaLabel : undefined"
        :aria-describedby="ariaDescribedby"
        :aria-disabled="disabled && isButton ? 'true' : undefined"
        :tabindex="clickable && !disabled ? 0 : undefined"
        class="av-list-item av-row av-align-center av-gap-xs av-w-full"
        :class="[clickableClass, disabledClass, selectedClass, themeClass]"
        :disabled="disabled && isButton ? true : undefined"
        :type="isButton ? 'button' : undefined"
        :href="isLink ? href : undefined"
        :target="isLink ? target : undefined"
        :rel="isLink ? rel : undefined"
        data-testid="av-list-item"
        :data-tag="componentTag"
        @click="handleClick"
        @keydown="handleKeyDown"
      >
        <div
          v-if="icon"
          class="av-list-item__icon av-col av-align-center av-justify-center"
        >
          <AvIcon
            :name="icon"
            :size="iconSize"
          />
        </div>

        <div class="av-list-item__content av-col av-gap-xs">
          <span
            v-if="title"
            ref="titleRef"
            class="av-list-item__title av-wrap-anywhere"
            :class="{
              'b2-bold': type === 'main',
              'b2-regular': type !== 'main',
              'av-max-lines': titleMaxLines !== undefined,
            }"
          >
            {{ title }}
          </span>

          <span
            v-if="description"
            ref="descriptionRef"
            class="av-list-item__description av-wrap-anywhere"
            :class="type === 'main' ? 'b1-bold' : 'b1-regular'"
          >
            {{ description }}
          </span>

          <div v-if="slots.default">
            <slot />
          </div>
        </div>
      </component>
    </AvTooltip>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:map";

.av-list-item {
  --max-lines: v-bind('titleMaxLines');

  text-align: left;
  cursor: default;
  transition: all 0.2s ease-in-out;

  &__title,
  &__description {
    color: inherit;
  }

  &--clickable {
    cursor: pointer;
    border-radius: var(--radius-sm);
  }

  &--disabled {
    cursor: not-allowed;
    opacity: 0.6;

    .av-list-item__icon {
      opacity: 0.5;
    }
  }
}

// === Themes ===
@each $theme, $colors in (
  primary: (
    text: var(--color-primary-text),
    bg: var(--color-primary-bg),
    hover-bg: var(--color-primary-hover-bg),
    hover-text: var(--color-primary-hover-text),
    text-selected: var(--color-primary-text-flat),
    bg-selected: var(--color-primary-bg-flat),
    sub-text-selected: var(--color-primary-bg-flat),
    sub-bg-selected: var(--color-primary-text-flat)
  ),
  secondary: (
    text: var(--color-secondary-text),
    bg: var(--color-secondary-bg),
    hover-bg: var(--color-secondary-hover-bg),
    hover-text: var(--color-secondary-hover-text),
    text-selected: var(--color-secondary-text-flat),
    bg-selected: var(--color-secondary-bg-flat),
    sub-text-selected: var(--color-secondary-text),
    sub-bg-selected: var(--color-secondary-text-flat)
  ),
  tertiary: (
    text: var(--color-tertiary-text),
    bg: var(--color-tertiary-bg),
    hover-bg: var(--color-tertiary-hover-bg),
    hover-text: var(--color-tertiary-hover-text),
    text-selected: var(--color-tertiary-text-flat),
    bg-selected: var(--color-tertiary-bg-flat),
    sub-text-selected: var(--color-tertiary-bg-flat),
    sub-bg-selected: var(--color-tertiary-text-flat)
  )
) {
  .av-list-item--theme-#{$theme} {
    .av-list-item__title,
    .av-list-item__description {
      color: map.get($colors, text);
    }

    :deep(.av-icon__icon) {
      background-color: map.get($colors, text);
    }

    // === Main items ===
    .av-list-mainitem & {
      &.av-list-item--clickable {
        &:hover:not(.av-list-item--disabled),
        &:focus-visible {
          background-color: map.get($colors, hover-bg);

          .av-list-item__title,
          .av-list-item__description {
            color: map.get($colors, hover-text);
          }

          :deep(.av-icon__icon) {
            background-color: map.get($colors, hover-text);
          }
        }

        &:active:not(.av-list-item--disabled) {
          transform: translateY(0);
          box-shadow: 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.1);
        }
      }

      &.av-list-item--selected {
        background-color: map.get($colors, bg-selected);

        .av-list-item__title,
        .av-list-item__description {
          color: map.get($colors, text-selected);
        }

        :deep(.av-icon__icon) {
          background-color: map.get($colors, text-selected);
        }
      }
    }

    // === Sub items ===
    .av-list-subitem & {
      &.av-list-item--clickable {
        &:hover:not(.av-list-item--disabled),
        &:focus-visible {
          background-color: map.get($colors, hover-bg);

          .av-list-item__title,
          .av-list-item__description {
            color: map.get($colors, hover-text);
          }

          :deep(.av-icon__icon) {
            background-color: map.get($colors, hover-text);
          }
        }

        &:active:not(.av-list-item--disabled) {
          transform: translateY(0);
          box-shadow: 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.1);
        }
      }

      &.av-list-item--selected {
        position: relative;

        .av-list-item__title,
        .av-list-item__description {
          color: map.get($colors, sub-text-selected);
          font-weight: bold;
        }

        :deep(.av-icon__icon) {
          background-color: map.get($colors, sub-text-selected);
        }

        &:before {
          content: '';
          position: absolute;
          left: 0;
          top: var(--spacing-xs);
          bottom: var(--spacing-xs);
          width: 2px;
          background-color: map.get($colors, sub-text-selected);
        }
      }
    }
  }
}

.b1-regular,
.b2-regular {
  color: inherit;
}
</style>

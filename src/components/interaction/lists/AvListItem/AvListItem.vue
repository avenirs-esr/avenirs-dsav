<script setup lang="ts">
import type { Slot } from 'vue'
import AvIcon from '@/components/base/AvIcon/AvIcon.vue'

/**
 * AvListItem component props.
 */
export interface AvListItemProps {
  /**
   * The icon name according to the naming convention of Iconify-vue.
   */
  icon?: string

  /**
   * The icon color.
   * @default 'var(--text1)'
   */
  color?: string

  /**
   * The icon size.
   * @default 1.3125
   */
  iconSize?: number

  /**
   * icon color
   */
  iconColor?: string

  /**
   * The title text.
   */
  title?: string

  /**
   * The description text.
   */
  description?: string

  /**
   * The hover color when the list item is clickable.
   * @default 'var(--dark-background-primary1)'
   */
  hoverBackgroundColor?: string

  /**
   * The color when the list item is hovered.
   * @default 'var(--dark-background-primary1)'
   */
  colorOnHover?: string

  /**
   * The description color.
   * @default 'var(--text2)'
   */
  descriptionColor?: string

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
}

const {
  icon,
  color = 'var(--text1)',
  descriptionColor = 'var(--text2)',
  hoverBackgroundColor = 'var(--dark-background-primary1)',
  colorOnHover = 'var(--card)',
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
  type = 'main'
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
    <component
      :is="componentTag"
      :title="title"
      :aria-label="clickable ? computedAriaLabel : undefined"
      :aria-describedby="ariaDescribedby"
      :aria-disabled="disabled && isButton ? 'true' : undefined"
      :tabindex="clickable && !disabled ? 0 : undefined"
      class="av-list-item av-row av-align-center av-gap-xs av-w-full"
      :class="[clickableClass, disabledClass, selectedClass]"
      :disabled="disabled && isButton ? true : undefined"
      :href="isLink ? href : undefined"
      :target="isLink ? target : undefined"
      :rel="isLink ? rel : undefined"
      @click="handleClick"
      @keydown="handleKeyDown"
    >
      <div
        v-if="icon"
        class="av-list-item__icon av-col av-align-center av-justify-center"
      >
        <AvIcon
          :name="icon"
          :color="iconColor ?? color"
          :size="iconSize"
        />
      </div>

      <div class="av-list-item__content av-col av-gap-xs">
        <span
          v-if="title"
          class="av-list-item__title"
          :class="type === 'main' ? 'b2-bold' : 'b2-regular'"
        >
          {{ title }}
        </span>

        <span
          v-if="description"
          class="av-list-item__description"
          :class="type === 'main' ? 'b1-bold' : 'b1-regular'"
        >
          {{ description }}
        </span>
        <div v-if="slots.default">
          <slot />
        </div>
      </div>
    </component>
  </div>
</template>

<style lang="scss" scoped>
@mixin hoverColors {
  .av-list-item__title,
  .av-list-item__description{
    color: v-bind('colorOnHover') !important;
  }

  :deep(.av-icon__icon) {
    background-color: v-bind('colorOnHover') !important;
  }
}

@mixin subHoverColors {
  .av-list-item__title,
  .av-list-item__description{
    color: v-bind('hoverBackgroundColor') !important;
  }

  :deep(.av-icon__icon) {
    background-color: v-bind('hoverBackgroundColor') !important;
  }
}

.av-list-item {
  text-align: left;
  cursor: default;
  transition: all 0.2s ease-in-out;

  &__title {
    color: v-bind('color');
  }

  &__description {
    color: v-bind('descriptionColor');
  }

  &--clickable {
    cursor: pointer;
    border-radius: var(--radius-sm);
  }

  &--disabled {
    cursor: not-allowed;
    opacity: 0.6;

    .av-list-item__title,
    .av-list-item__description {
      color: var(--text3);
    }

    .av-list-item__icon {
      opacity: 0.5;
    }
  }
}

.av-list-mainitem {
  .av-list-item {
    &--clickable {
      &:hover:not(.av-list-item--disabled) {
        background-color: v-bind('hoverBackgroundColor');
        transform: translateY(-0.0625rem);
        @include hoverColors;
      }

      &:focus-visible {
        outline: 0.125rem solid var(--dark-background-primary1);
        outline-offset: 0.125rem;
        background-color: v-bind('hoverBackgroundColor');
        @include hoverColors;
      }

      &:active:not(.av-list-item--disabled) {
        transform: translateY(0);
        box-shadow: 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.1);
      }
    }

    &--selected {
      background-color: v-bind('hoverBackgroundColor');
      @include hoverColors;
    }
  }
}

.av-list-subitem {
  .av-list-item {
    &--clickable {
      &:hover:not(.av-list-item--disabled) {
        background-color: v-bind('colorOnHover');
        transform: translateY(-0.0625rem);
        @include subHoverColors;
      }

      &:focus-visible {
        outline: 0.125rem solid var(--dark-background-primary1);
        outline-offset: 0.125rem;
        background-color: v-bind('colorOnHover');
        @include subHoverColors;
      }

      &:active:not(.av-list-item--disabled) {
        transform: translateY(0);
        box-shadow: 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.1);
      }
    }

    &--selected {
      position: relative;
      @include subHoverColors;

      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: var(--spacing-xs);
        bottom: var(--spacing-xs);
        width: 2px;
        background-color: v-bind('hoverBackgroundColor');
      }
    }
  }
}
</style>

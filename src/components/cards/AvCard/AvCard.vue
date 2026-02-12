<script lang="ts" setup>
import type { Slot } from 'vue'
import type AvButton from '@/components/interaction/buttons/AvButton/AvButton.vue'
import { MDI_ICONS } from '@/tokens'

/**
 * AvCard component props.
 */
export interface AvCardProps {
  /**
   * If true, the card will be displayed in title-only mode.
   * @default false
   */
  titleOnly?: boolean

  /**
   * The background color of the card.
   * @default 'var(--card)'
   */
  backgroundColor?: string

  /**
   * The border color of the card.
   * @default 'var(--stroke)'
   */
  borderColor?: string

  /**
   * The background color of the card title.
   * @default 'var(--surface-background)'
   */
  titleBackground?: string

  /**
   * The height of the card title.
   */
  titleHeight?: string

  /**
   * Whether the card is collapsible. When collapsed, the title is still shown.
   * This requires a title slot to be provided.
   * @default false
   */
  collapsible?: boolean

  /**
   * Whether the card is collapsed by default (only if collapsible is true).
   * @default false
   */
  collapsed?: boolean
}

const {
  titleOnly = false,
  backgroundColor = 'var(--card)',
  borderColor = 'var(--stroke)',
  titleBackground = 'var(--surface-background)',
  titleHeight,
  collapsible = false,
  collapsed: defaultCollapsed = false
} = defineProps<AvCardProps>()

/**
 * Slots available in the AvCard component.
 *
 * @slot title - Slot for the card title.
 * @slot body - Slot for the card body.
 * @slot footer - Slot for card footer.
 * @slot default - Default slot for global content.
 */
const slots = defineSlots<{
  /**
   * Slot for the card title.
   */
  title?: Slot

  /**
   * Slot for the card body.
   */
  body?: Slot

  /**
   * Slot for the card footer.
   */
  footer?: Slot

  /**
   * Default slot for global content.
   */
  default?: Slot
}>()

const collapsed = ref(defaultCollapsed)
const isHoveringInteractive = ref(false)

const id = computed(() => `av-card-${crypto.randomUUID()}`)
const buttonRef = ref<InstanceType<typeof AvButton> | null>(null)

const titleClasses = computed(() => {
  if (collapsed.value) {
    return 'av-card__title--collapsed av--m-sm'
  }

  if (titleOnly) {
    return 'av-card__title--title-only av--m-sm'
  }

  return 'av--mt-sm av--mx-sm'
})

function toggleCollapsed () {
  collapsed.value = !collapsed.value
}

function isInteractiveElement (element: HTMLElement): boolean {
  const interactiveTags = ['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA']
  const interactiveRoles = ['button', 'link', 'checkbox', 'radio', 'textbox', 'tab', 'menuitem']

  if (interactiveTags.includes(element.tagName)) {
    return true
  }

  const role = element.getAttribute('role')
  if (role && interactiveRoles.includes(role)) {
    return true
  }

  if (element.hasAttribute('tabindex') && element.getAttribute('tabindex') !== '-1') {
    return true
  }

  return false
}

/**
 * Finds the first interactive element in the ancestor chain.
 * Returns the interactive element if found, or null otherwise.
 * Treats the collapse button as an interactive element.
 */
function findInteractiveAncestor (target: HTMLElement, currentTarget: EventTarget | null): HTMLElement | null {
  if (buttonRef.value && (target === buttonRef.value.$el || buttonRef.value.$el.contains(target))) {
    return null
  }

  let currentElement: HTMLElement | null = target
  while (currentElement && currentElement !== currentTarget) {
    if (isInteractiveElement(currentElement)) {
      return currentElement
    }
    currentElement = currentElement.parentElement
  }

  return null
}

function handleCardClick (event: MouseEvent) {
  const target = event.target as HTMLElement
  const interactiveElement = findInteractiveAncestor(target, event.currentTarget)

  if (interactiveElement) {
    return
  }

  if (collapsible) {
    toggleCollapsed()
    buttonRef.value?.$el.focus()
  }
}

function handleMouseMove (event: MouseEvent) {
  if (!collapsible) {
    return
  }

  const target = event.target as HTMLElement

  const interactiveElement = findInteractiveAncestor(target, event.currentTarget)

  isHoveringInteractive.value = !!interactiveElement
}
</script>

<template>
  <div
    class="av-card av-col av-p-sm av-justify-start av-radius-2xl"
    :class="{
      'av-card--collapsible': collapsible,
      'av-card--hovering-interactive': isHoveringInteractive,
    }"
    :style="{ borderColor, background: backgroundColor }"
    @click="handleCardClick"
    @mousemove="handleMouseMove"
  >
    <header
      v-if="slots.title"
      class="av-card__title av-row av-align-center av-justify-between av-p-sm av-gap-sm"
      :class="titleClasses"
      :style="{ background: titleBackground, minHeight: titleHeight, maxHeight: titleHeight }"
    >
      <slot name="title" />
      <AvButton
        v-if="collapsible"
        ref="buttonRef"
        :aria-controls="`${id}-content`"
        :aria-expanded="!collapsed"
        :icon="collapsed ? MDI_ICONS.CHEVRON_DOWN : MDI_ICONS.CHEVRON_LEFT"
        icon-only
        label="Details"
        @click.stop="toggleCollapsed"
      />
    </header>
    <div
      v-if="!titleOnly"
      v-show="!collapsible || !collapsed"
      :id="`${id}-content`"
      :aria-hidden="collapsible && collapsed"
      class="av-card__content-collapsible av-col av-justify-between av-h-full av-gap-sm"
      :class="{ 'av-pt-sm': !!slots.title }"
    >
      <slot />
      <div
        v-if="slots.body"
        class="av-card__body"
      >
        <slot name="body" />
      </div>
      <div
        v-if="slots.footer"
        class="av-card__footer"
      >
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.av-card {
  border: 1px solid transparent;
  overflow: hidden;

  &__title {
    box-sizing: border-box;
  }

  &--collapsible:hover {
    &:not(.av-card--hovering-interactive) {
      cursor: pointer;
      outline: 1px solid v-bind('borderColor');

      .av-button {
        background-color: var(--dark-background-primary2);
        color: var(--other-background-base);
      }
    }
  }

  &--hovering-interactive {
    cursor: default;
  }

  .av-button {
    background-color: transparent;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  }
}
</style>

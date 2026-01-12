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

const id = computed(() => `av-card-${crypto.randomUUID()}`)
const buttonRef = ref<InstanceType<typeof AvButton> | null>(null)

function handleCardClick (event: MouseEvent) {
  if (collapsible && buttonRef.value && event.target !== buttonRef.value.$el && !buttonRef.value.$el.contains(event.target as Node)) {
    collapsed.value = !collapsed.value
  }
}
</script>

<template>
  <div
    class="av-card av-col av-p-sm av-justify-start"
    :class="{ 'av-card--collapsible': collapsible }"
    :style="{ borderColor, background: backgroundColor }"
    @click="handleCardClick"
  >
    <header
      v-if="slots.title"
      class="av-card__title av-row av-align-center av-justify-between av-p-sm av-gap-sm"
      :class="{ 'av-card__title--collapsed': collapsed,
                'av-card__title--title-only': titleOnly,
      }"
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
        @click="collapsed = !collapsed"
      />
    </header>
    <div
      v-if="!titleOnly"
      v-show="!collapsible || !collapsed"
      :id="`${id}-content`"
      :aria-hidden="collapsible && collapsed"
      class="av-card__content-collapsible av-col av-justify-between av-h-full av-pt-sm av-gap-sm"
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
  border-radius: 1.5rem;
  border: 1px solid transparent;
  overflow: hidden;

  &__title {
    box-sizing: border-box;
    margin: calc(-1 * var(--spacing-sm)) calc(-1 * var(--spacing-sm)) 0 calc(-1 * var(--spacing-sm));

    &--title-only,
    &--collapsed {
      margin: calc(-1 * var(--spacing-sm));
    }
  }

  &--collapsible:hover {
    cursor: pointer;
    outline: 1px solid v-bind('borderColor');

    .av-button {
      background-color: var(--dark-background-primary2);
      color: var(--other-background-base);
    }
  }

  .av-button {
    background-color: transparent;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  }
}
</style>

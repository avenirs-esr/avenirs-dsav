<script lang="ts" setup>
import type { Slot } from 'vue'
import { MDI_ICONS } from '@/tokens'

/**
 * AvCard component props.
 */
export interface AvCardProps {
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
</script>

<template>
  <div
    class="av-card"
    :style="{ borderColor, background: backgroundColor }"
  >
    <div
      v-if="slots.title"
      class="av-card__title"
      :class="{ 'av-card__title--collapsed': collapsed }"
      :style="{ background: titleBackground, minHeight: titleHeight, maxHeight: titleHeight }"
    >
      <slot name="title" />
      <AvButton
        v-if="collapsible"
        :icon="collapsed ? MDI_ICONS.CHEVRON_DOWN : MDI_ICONS.CHEVRON_LEFT"
        icon-only
        label=""
        @click="collapsed = !collapsed"
      />
    </div>
    <div
      v-show="!collapsible || !collapsed"
      class="av-card__content-collapsible"
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
  display: flex;
  flex-direction: column;
  border-radius: 1.5rem;
  border: 1px solid transparent;
  overflow: hidden;
  padding: var(--spacing-sm);
  justify-content: space-between;

  &__title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    margin: calc(-1 * var(--spacing-sm)) calc(-1 * var(--spacing-sm)) 0 calc(-1 * var(--spacing-sm));
    padding: var(--spacing-sm);
    gap: var(--spacing-sm);

    &--collapsed {
      margin: calc(-1 * var(--spacing-sm));
    }
  }

  &__content-collapsible {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm) 0;
  }

  .av-button {
    background-color: transparent;
  }
}
</style>

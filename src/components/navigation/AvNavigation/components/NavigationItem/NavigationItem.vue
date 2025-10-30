<script lang="ts" setup>
import type { Slot } from 'vue'

/**
 * NavigationItem component props.
 */
export interface NavigationItemProps {
  /**
   * The unique identifier for the navigation item.
   * @default `nav-item-${crypto.randomUUID()}`
   */
  id?: string

  /**
   * Indicates if the navigation item is currently active.
   */
  active?: boolean
}

const { id, active } = defineProps<NavigationItemProps>()

/**
 * Slots for NavigationItem component.
 */
defineSlots<{
  /**
   * Default slot for the content of the navigation item.
   */
  default?: Slot
}>()

const realId = computed(() => id ?? `nav-item-${crypto.randomUUID()}`)
</script>

<template>
  <li
    :id="realId"
    class="fr-nav__item"
    :aria-current="active ? 'page' : undefined"
  >
    <slot />
  </li>
</template>

<style lang="scss" scoped>
.fr-nav__item {
  &--active {
    :deep(.fr-nav__link) {
      box-shadow: inset 0 -2px 0 0 var(--dark-background-primary1);
    }
  }
}
</style>

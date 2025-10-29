<script lang="ts" setup>
import type { Slot } from 'vue'

/**
 * NavigationMenuItem component props.
 */
export interface NavigationMenuItemProps {
  /**
   * The unique identifier for the navigation item.
   * @default `nav-menu-item-${crypto.randomUUID}`
   */
  id?: string

  /**
   * Indicates if the navigation item is currently active.
   */
  active?: boolean
}

const { id = `nav-menu-item-${crypto.randomUUID()}`, active } = defineProps<NavigationMenuItemProps>()

/**
 * Slots for NavigationMenuItem component.
 */
defineSlots<{
  /**
   * Default slot for the content of the navigation menu item.
   */
  default?: Slot
}>()
</script>

<template>
  <li
    :id="id"
    class="fr-menu__item"
    :aria-current="active ? 'page' : undefined"
  >
    <slot />
  </li>
</template>

<style lang="scss" scoped>
:deep(.fr-nav__link) {
  &:hover {
    border-radius: var(--radius-none);
  }
}
</style>

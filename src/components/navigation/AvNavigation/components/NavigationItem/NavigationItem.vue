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
    class="av-nav__item"
    :class="{ 'av-nav__item--active': active }"
    :aria-current="active ? 'page' : undefined"
  >
    <slot />
  </li>
</template>

<style lang="scss" scoped>
:deep(a[aria-current="page"]) {
  &::before {
  content: "";
    display: inline-block;
    width: var(--dimension-xxxs);
    height: 100%;
    background-color: var(--dark-background-primary1);
    margin-right: var(--dimension-xs);
    vertical-align: middle;
  }

  & > * {
    color: var(--dark-background-primary1) !important;
  }

  &:hover {
    & > * {
      color: inherit !important;
    }
  }
}
</style>

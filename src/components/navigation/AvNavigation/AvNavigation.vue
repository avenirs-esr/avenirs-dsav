<script setup lang="ts">
import NavigationItem from '@/components/navigation/AvNavigation/components/NavigationItem/NavigationItem.vue'
import NavigationMenu, { type NavigationMenuProps } from '@/components/navigation/AvNavigation/components/NavigationMenu/NavigationMenu.vue'
import NavigationMenuLink, { type NavigationMenuLinkProps } from '@/components/navigation/AvNavigation/components/NavigationMenuLink/NavigationMenuLink.vue'

/**
 * AvNavigation component props.
 */
export interface AvNavigationProps {
  /**
   * The unique identifier for the navigation element.
   * @default `nav-${crypto.randomUUID()}`
   */
  id?: string

  /**
   * The aria-label for the navigation element.
   * @default 'Menu principal'
   */
  label?: string

  /**
   * List of navigation items.
   * Each item can be:
   * - A direct navigation link (`NavigationMenuLinkProps`) with `to` and `text` props.
   * - A navigation submenu (`NavigationMenuProps`) with `title`, `links` and `active` props.
   */
  navItems: (NavigationMenuLinkProps | NavigationMenuProps)[]
}

const {
  id = `nav-${crypto.randomUUID()}`,
  label = 'Menu principal',
  navItems,
} = defineProps<AvNavigationProps>()

const expandedMenuId = ref<string | undefined>(undefined)

function toggle (id: string | undefined) {
  if (id === expandedMenuId.value) {
    expandedMenuId.value = undefined
    return
  }
  expandedMenuId.value = id
}

function handleElementClick (el: HTMLElement) {
  if (el === document.getElementById(id)) {
    return
  }

  if (!el?.parentNode) {
    toggle(expandedMenuId.value)
    return
  }

  handleElementClick(el.parentNode as HTMLElement)
}

function onDocumentClick (e: MouseEvent) {
  handleElementClick(e.target as HTMLElement)
}

function onKeyDown (e: KeyboardEvent) {
  if (e.key === 'Escape') {
    toggle(expandedMenuId.value)
  }
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
  document.addEventListener('keydown', onKeyDown)
})
onUnmounted(() => {
  document.removeEventListener('click', onDocumentClick)
  document.removeEventListener('keydown', onKeyDown)
})
</script>

<template>
  <div
    style="position: relative"
    class="my-nav-wrapper"
  >
    <nav
      :id="id"
      class="fr-nav"
      role="navigation"
      :aria-label="label"
    >
      <ul class="fr-nav__list">
        <NavigationItem
          v-for="(navItem, index) of navItems"
          :id="navItem.id"
          :key="index"
        >
          <NavigationMenuLink
            v-if="(navItem as NavigationMenuLinkProps).to && (navItem as NavigationMenuLinkProps).text"
            v-bind="navItem"
            :active-id="expandedMenuId"
            @toggle-id="toggle($event)"
          />
          <NavigationMenu
            v-else-if="(navItem as NavigationMenuProps).title && (navItem as NavigationMenuProps).links"
            v-bind="(navItem as NavigationMenuProps)"
            :expanded-id="expandedMenuId"
            @toggle-id="toggle($event)"
          />
        </NavigationItem>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.fr-nav__list {
  position: relative;
}
</style>

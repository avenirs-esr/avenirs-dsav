<script setup lang="ts">
import { AvList, AvListItem } from '@/components/interaction/lists'
import AvSideMenu from '@/components/navigation/AvSideMenu/AvSideMenu.vue'

export interface AvSideNavigationItem {
  id: string
  label: string
  icon: string
}

export interface AvSideNavigationMenuItem extends AvSideNavigationItem { expanded?: boolean, children?: AvSideNavigationItem[] }

export interface AvSideNavigationProps {
  /**
   * List of items to display in the side navigation.
   */
  items: AvSideNavigationMenuItem[]
  /**
   * The currently selected item ID.
   */
  selectedItem?: string
  /**
   * Whether the side menu is collapsed or not.
   */
  isSideMenuCollapsed?: boolean
  /**
   * Width of the side menu when collapsed.
   */
  collapsedWidth?: string
  /**
   * Color of selected item background and icon.
   */
  selectedItemColor?: string
}

const { items, collapsedWidth = '3.5rem' } = defineProps<AvSideNavigationProps>()

/**
 * Events emitted by the component.
 */
defineEmits<{
  /**
   * Emitted when the selected item changes.
   * @param event - The event name
   * @param selectedItem - The ID of the newly selected item
   */
  (event: 'update:selectedItem', selectedItem: string): void
  /**
   * Emitted when the side menu collapse state changes.
   * @param value - New collapsed state (true for collapsed, false for expanded)
   */
  (event: 'update:isSideMenuCollapsed', value: boolean): void
}>()

const selectedItem = defineModel<string>('selectedItem', {
  default: ''
})

const isSideMenuCollapsed = defineModel<boolean>('isSideMenuCollapsed', {
  default: false
})

const expandedMenus = ref<string[]>(items.filter(item => item.expanded).map(item => item.id))

function handleSelectItem (itemId: string) {
  selectedItem.value = itemId
}

function isItemSelected (item: AvSideNavigationMenuItem): boolean {
  return selectedItem.value === item.id
    || (item.children ? item.children.some(child => selectedItem.value === child.id) : false)
}

function handleMenuItemClick (itemId: string) {
  if (expandedMenus.value.includes(itemId)) {
    expandedMenus.value = expandedMenus.value.filter(id => id !== itemId)
  }
  else {
    expandedMenus.value.push(itemId)
  }
}
</script>

<template>
  <AvSideMenu
    v-model:collapsed="isSideMenuCollapsed"
    :collapsed-width="collapsedWidth"
    :color="selectedItemColor"
  >
    <AvList
      size="small"
      role="menu"
    >
      <template
        v-for="item in items"
        :key="item.id"
      >
        <AvListItem
          :title="isSideMenuCollapsed ? undefined : item.label"
          :icon="item.icon"
          :icon-size="1.8"
          :selected="isItemSelected(item)"
          :hover-background-color="selectedItemColor"
          role="menuitem"
          class="av-side-navigation__menu-item"
          :class="{
            'av-side-navigation__menu-item--collapsed': isSideMenuCollapsed,
          }"
          :data-testid="expandedMenus.includes(item.id) ? `expanded-menu-${item.id}` : `collapsed-menu-${item.id}`"
          @click="item.children ? handleMenuItemClick(item.id) : handleSelectItem(item.id)"
        />

        <template v-if="item.children && item.children.length > 0">
          <div
            v-show="expandedMenus.includes(item.id)"
            class="av-pl-sm"
          >
            <AvList
              size="small"
              role="menu"
            >
              <AvListItem
                v-for="subitem in item.children"
                :key="subitem.id"
                :title="isSideMenuCollapsed ? undefined : subitem.label"
                :icon="subitem.icon"
                :icon-size="1.8"
                :selected="selectedItem === subitem.id"
                :hover-background-color="selectedItemColor"
                role="menuitem"
                type="sub"
                class="av-side-navigation__menu-item"
                :class="{
                  'av-side-navigation__menu-item--collapsed': isSideMenuCollapsed,
                }"
                @click="handleSelectItem(subitem.id)"
              />
            </AvList>
          </div>
        </template>
      </template>
    </AvList>
  </AvSideMenu>
</template>

<style lang="scss" scoped>
.av-side-navigation__menu-item {
  border-radius: var(--radius-xl) 0 0 var(--radius-xl);

  &--collapsed {
    justify-content: center;

    :deep(.av-list-item__content) {
      display: none;
    }
  }
}
</style>

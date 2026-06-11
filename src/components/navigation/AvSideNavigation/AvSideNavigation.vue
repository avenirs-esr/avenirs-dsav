<script setup lang="ts">
import { AvList, AvListItem } from '@/components/interaction/lists'
import AvSideMenu from '@/components/navigation/AvSideMenu/AvSideMenu.vue'

export interface AvSideNavigationItem {
  id: string
  label: string
  icon?: string
}

export interface AvSideNavigationSelectedItem {
  itemId: string
  parentId?: string
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
  selectedItem?: AvSideNavigationSelectedItem

  /**
   * Whether the side menu is collapsed or not.
   */
  isSideMenuCollapsed?: boolean

  /**
   * Width of the side menu when expanded.
   */
  width?: string

  /**
   * Width of the side menu when collapsed.
   */
  collapsedWidth?: string

  /**
   * Color of selected item background and icon.
   */
  selectedItemColor?: string

  /**
   * Whether to hide the content when the menu is collapsed
   * @default false
   */
  hideContentWhenCollapsed?: boolean

  /**
   * Whether the side-menu should be sticky (fixed position)
   * If true, the side-menu will remain visible while scrolling the page.
   * The `stickyOffset` prop can be used to adjust the distance from the top of the viewport when the menu becomes sticky.
   * @default false
   */
  sticky?: boolean

  /**
   * Offset from the top of the viewport when the menu becomes sticky (e.g., '0', '1rem', '50px', var(--spacing-lg), etc.).
   * This prop is only applicable if `sticky` is set to true.
   * @default '0'
   */
  stickyOffset?: string

  /**
   * Aria label for the collapse button.
   * @default 'Collapse button'
   */
  collapseButtonAriaLabel?: string

  /**
   * Aria label for the expand button.
   * @default 'Expand button'
   */
  expandButtonAriaLabel?: string
}

const {
  items,
  width = 'fit-content',
  collapsedWidth = '3.5rem',
  selectedItemColor,
  hideContentWhenCollapsed = false,
  sticky = false,
  stickyOffset = '0',
  collapseButtonAriaLabel = 'Collapse button',
  expandButtonAriaLabel = 'Expand button'
} = defineProps<AvSideNavigationProps>()

const selectedItem = defineModel<AvSideNavigationSelectedItem>('selectedItem', {
  default: () => ({ itemId: '' })
})

const isSideMenuCollapsed = defineModel<boolean>('isSideMenuCollapsed', {
  default: false
})

const expandedMenus = ref<string[]>(items.filter(item => item.expanded).map(item => item.id))

function handleSelectItem (itemId: string, parentId?: string) {
  selectedItem.value = parentId ? { itemId, parentId } : { itemId }
}

function isSubItemSelected (parentItem: AvSideNavigationMenuItem, subItem: AvSideNavigationItem): boolean {
  if (selectedItem.value.parentId) {
    return selectedItem.value.parentId === parentItem.id && selectedItem.value.itemId === subItem.id
  }

  return selectedItem.value.itemId === subItem.id
}

function isItemSelected (item: AvSideNavigationMenuItem): boolean {
  return selectedItem.value.itemId === item.id
    || (item.children ? item.children.some(child => isSubItemSelected(item, child)) : false)
}

function handleMenuItemClick (itemId: string) {
  if (expandedMenus.value.includes(itemId)) {
    expandedMenus.value = expandedMenus.value.filter(id => id !== itemId)
  }
  else {
    expandedMenus.value.push(itemId)
  }
}

watchEffect(() => {
  const parentId = selectedItem.value.parentId ?? selectedItem.value.itemId

  if (parentId && !expandedMenus.value.includes(parentId)) {
    expandedMenus.value.push(parentId)
  }
})
</script>

<template>
  <AvSideMenu
    v-model:collapsed="isSideMenuCollapsed"
    :width="width"
    :collapsed-width="collapsedWidth"
    :color="selectedItemColor"
    :hide-content-when-collapsed="hideContentWhenCollapsed"
    :sticky="sticky"
    :sticky-offset="stickyOffset"
    :collapse-button-aria-label="collapseButtonAriaLabel"
    :expand-button-aria-label="expandButtonAriaLabel"
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
          :title="item.label"
          :icon="item.icon"
          :icon-size="1.8"
          :selected="isItemSelected(item)"
          :hover-background-color="selectedItemColor"
          :enable-tooltip="isSideMenuCollapsed"
          role="menuitem"
          class="av-side-navigation__menu-item"
          :class="{
            'av-side-navigation__menu-item--collapsed': isSideMenuCollapsed,
          }"
          :data-testid="expandedMenus.includes(item.id) ? `expanded-menu-${item.id}` : `collapsed-menu-${item.id}`"
          :data-selected="isItemSelected(item)"
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
                :title="subitem.label"
                :icon="subitem.icon"
                :icon-size="1.8"
                :selected="isSubItemSelected(item, subitem)"
                :hover-background-color="selectedItemColor"
                role="menuitem"
                type="sub"
                class="av-side-navigation__menu-item"
                :class="{
                  'av-side-navigation__menu-item--collapsed': isSideMenuCollapsed,
                }"
                :data-testid="`menu-${item.id}-${subitem.id}`"
                :data-selected="isSubItemSelected(item, subitem)"
                :enable-tooltip="isSideMenuCollapsed"
                @click="handleSelectItem(subitem.id, item.id)"
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

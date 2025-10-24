<script setup lang="ts">
import AvButton, { type AvButtonProps } from '@/components/interaction/buttons/AvButton/AvButton.vue'
import AvPopover from '@/components/overlay/popovers/AvPopover/AvPopover.vue'
import { MDI_ICONS } from '@/tokens/icons'

/**
 * AvDropdownItem interface representing a single menu item.
 */
export interface AvDropdownItem {
  /**
   * Unique identifier for the item.
   */
  name: string

  /**
   * Display text for the item.
   */
  label: string

  /**
   * Optional icon (MDI icon name).
   */
  icon?: string
}

/**
 * AvDropdown props interface.
 */
export interface AvDropdownProps {
  /**
   * Array of menu items to display. Each item must have `name` and `label`, with optional `icon`.
   */
  items: AvDropdownItem[]

  /**
   * Accessibility label for the trigger button.
   */
  triggerAriaLabel: string

  /**
   * Icon for the trigger button.
   * @default MDI_ICONS.DOTS_VERTICAL
   */
  triggerIcon?: string

  /**
   * Text label for the trigger button. If not provided, only the icon is shown.
   */
  triggerLabel?: string

  /**
   * Variant of the trigger button.
   * @default 'OUTLINED'
   */
  triggerVariant?: AvButtonProps['variant']

  /**
   * Size of the trigger button.
   * @default 'sm'
   */
  triggerSize?: AvButtonProps['size']

  /**
   * Width of the dropdown menu.
   * @default '15rem'
   */
  width?: string

  /**
   * Internal padding of the dropdown menu.
   * @default 'var(--spacing-xs)'
   */
  padding?: string

  /**
   * Size of menu item buttons.
   * @default 'sm'
   */
  itemSize?: AvButtonProps['size']

  /**
   * Theme of menu item buttons.
   * @default 'SECONDARY'
   */
  itemTheme?: AvButtonProps['theme']

  /**
   * Scale factor for menu item icons.
   * @default 1.3
   */
  itemIconScale?: number
}

const {
  items,
  triggerAriaLabel,
  triggerIcon = MDI_ICONS.DOTS_VERTICAL,
  triggerLabel,
  triggerVariant = 'OUTLINED',
  triggerSize = 'sm',
  width = '15rem',
  padding = 'var(--spacing-xs)',
  itemSize = 'sm',
  itemTheme = 'SECONDARY',
  itemIconScale = 1.3
} = defineProps<AvDropdownProps>()

/**
 * Events emitted by AvDropdown.
 */
const emit = defineEmits<{
  /**
   * Event emitted when a menu item is clicked.
   * @event itemSelected
   * @param itemName Name of the selected item.
   */
  (e: 'itemSelected', itemName: string): void
}>()

function handleItemClick (itemName: string, close: () => void) {
  emit('itemSelected', itemName)
  close()
}
</script>

<template>
  <AvPopover
    :width="width"
    :padding="padding"
  >
    <template #trigger="{ toggle }">
      <AvButton
        :icon="triggerIcon"
        :label="triggerLabel || triggerAriaLabel"
        :aria-label="triggerAriaLabel"
        :variant="triggerVariant"
        :size="triggerSize"
        @click="toggle"
      />
    </template>
    <template #popover="{ close }">
      <div class="av-dropdown">
        <AvButton
          v-for="item in items"
          :key="item.name"
          class="av-dropdown__menu-item"
          :icon="item.icon"
          :label="item.label"
          :aria-label="item.label"
          :size="itemSize"
          :theme="itemTheme"
          :icon-scale="itemIconScale"
          no-radius
          @click="handleItemClick(item.name, close)"
        />
      </div>
    </template>
  </AvPopover>
</template>

<style lang="scss" scoped>
.av-dropdown {
  display: flex;
  flex-direction: column;

  &__menu-item {
    display: flex;
    width: 100%;
    align-items: center;
    align-self: stretch;

    &:first-child {
      border-radius: var(--radius-sm) var(--radius-sm) 0 0;
    }

    &:last-child {
      border-radius: 0 0 var(--radius-sm) var(--radius-sm);
    }
  }
}
</style>

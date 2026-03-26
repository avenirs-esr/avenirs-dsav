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

  /**
   * If true, only the icon is displayed, without the label.
   */
  iconOnly?: boolean

  /**
   * If true, the menu item is disabled.
   */
  disabled?: boolean
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
   * Applies the active state style to the trigger button.
   * @default false
   */
  triggerActive?: boolean

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
   * Display the trigger button in small size (`true`) or default size (`false`).
   * @default true
   */
  triggerSmall?: AvButtonProps['small']

  /**
   * If true, the trigger button will not apply sentence case to its label.
   */
  triggerNoSentenceCase?: AvButtonProps['noSentenceCase']

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
   * Display menu item buttons in small size (`true`) or default size (`false`).
   * @default true
   */
  itemSmall?: AvButtonProps['small']

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
  triggerSmall = true,
  triggerNoSentenceCase = false,
  triggerActive = false,
  width = '15rem',
  padding = 'var(--spacing-xs)',
  itemSmall = true,
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
        :small="triggerSmall"
        :no-sentence-case="triggerNoSentenceCase"
        :icon-only="!triggerLabel"
        :active="triggerActive"
        @click="toggle"
      />
    </template>
    <template #popover="{ close }">
      <div class="av-dropdown av-col">
        <AvButton
          v-for="item in items"
          :key="item.name"
          class="av-dropdown__menu-item"
          :icon="item.icon"
          :label="item.label"
          :aria-label="item.label"
          :small="itemSmall"
          :theme="itemTheme"
          :icon-scale="itemIconScale"
          :disabled="item.disabled"
          :icon-only="item.iconOnly"
          :data-testid="item.name"
          no-radius
          @click="handleItemClick(item.name, close)"
        />
      </div>
    </template>
  </AvPopover>
</template>

<style lang="scss" scoped>
.av-dropdown {
  &__menu-item {
    width: 100%;

    &:first-child {
      border-radius: var(--radius-sm) var(--radius-sm) 0 0;
    }

    &:last-child {
      border-radius: 0 0 var(--radius-sm) var(--radius-sm);
    }
  }
}
</style>

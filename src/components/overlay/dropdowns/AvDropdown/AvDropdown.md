# Dropdowns - `AvDropdown`

## ✨ Introduction

The `AvDropdown` is a contextual menu component that displays a list of actionable items in a popover.

The `AvDropdown` is built on top of `AvPopover` and `AvButton` components, providing a convenient way to create dropdown menus with customizable trigger buttons and menu items. It features focus management, keyboard accessibility, and automatic closing on item selection.

Each menu item can have an optional icon and emits an event when clicked, making it perfect for settings menus, action lists, or contextual operations.

## 🏗️ Structure

The dropdown consists of:

- A trigger button - mandatory, configured via `trigger*` props;
- A list of menu items - mandatory, defined via the `items` prop, each with a name, label, and optional icon;
- A popover container - automatically managed, with customizable width and padding.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `items` | `AvDropdownItem[]` | | ✅ | Array of menu items to display. Each item must have `name` and `label`, with optional `icon`. |
| `triggerAriaLabel` | `string` | | ✅ | Accessibility label for the trigger button. |
| `triggerActive` | `boolean` | `false` | | Applies the active state style to the trigger button. |
| `triggerIcon` | `string` | `MDI_ICONS.DOTS_VERTICAL` | | Icon for the trigger button. |
| `triggerLabel` | `string` | `undefined` | | Text label for the trigger button. If not provided, only the icon is shown. |
| `triggerVariant` | `'DEFAULT' \| 'OUTLINED' \| 'FLAT'` | `'OUTLINED'` | | Variant of the trigger button. |
| `triggerSmall` | `boolean` | `true` | | Display the trigger button in small size (`true`) or default size (`false`). |
| `width` | `string` | `'15rem'` | | Width of the dropdown menu. |
| `padding` | `string` | `'var(--spacing-xs)'` | | Internal padding of the dropdown menu. |
| `itemSmall` | `boolean` | `true` | | Display the menu item buttons in small size (`true`) or default size (`false`). |
| `itemTheme` | `'PRIMARY' \| 'SECONDARY'` | `'SECONDARY'` | | Theme of menu item buttons. |
| `itemIconScale` | `number` | `1.3` | | Scale factor for menu item icons. |

### AvDropdownItem Type

```typescript
interface AvDropdownItem {
  name: string // Unique identifier for the item
  label: string // Display text for the item
  icon?: string // Optional icon (MDI icon name)
  iconOnly?: boolean // If true, only the icon is displayed, without the label.
  disabled?: boolean // If true, the menu item is disabled.
}
```

## 🔊 Events

| Name | Payload | Description |
| --- | --- | --- |
| `itemSelected` | `itemName: string` | Emitted when a menu item is clicked. The payload is the `name` of the selected item. |

## 🎨 Slots

None.

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-overlay-dropdowns-avdropdown--docs).

## 💡 Examples of use

### Basic settings menu

```vue
<script setup lang="ts">
import { AvDropdown, MDI_ICONS } from '@avenirs-esr/avenirs-dsav'

const menuItems = [
  {
    name: 'edit',
    icon: MDI_ICONS.PENCIL_OUTLINE,
    label: 'Edit'
  },
  {
    name: 'delete',
    icon: MDI_ICONS.TRASH_CAN_OUTLINE,
    label: 'Delete'
  }
]

function handleItemSelected (itemName: string) {
  switch (itemName) {
    case 'edit':
      console.log('Edit action')
      break
    case 'delete':
      console.log('Delete action')
      break
  }
}
</script>

<template>
  <AvDropdown
    :items="menuItems"
    trigger-aria-label="Actions menu"
    @item-selected="handleItemSelected"
  />
</template>
```

### Dropdown with custom styling

```vue
<script setup lang="ts">
import { AvDropdown, MDI_ICONS } from '@avenirs-esr/avenirs-dsav'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const menuItems = computed(() => [
  {
    name: 'update',
    icon: MDI_ICONS.PENCIL_OUTLINE,
    label: t('settings.update')
  },
  {
    name: 'deleteAssociation',
    icon: MDI_ICONS.TRASH_CAN_OUTLINE,
    label: t('settings.deleteAssociation')
  },
  {
    name: 'delete',
    icon: MDI_ICONS.TRASH_CAN_OUTLINE,
    label: t('settings.delete')
  }
])

function handleItemSelected (itemName: string) {
  console.log('Selected:', itemName)
}
</script>

<template>
  <AvDropdown
    :items="menuItems"
    :trigger-aria-label="t('settings.ariaLabel')"
    :trigger-label="t('settings.ariaLabel')"
    @item-selected="handleItemSelected"
  />
</template>
```

### Dropdown with different trigger variant

```vue
<template>
  <AvDropdown
    :items="menuItems"
    trigger-aria-label="More actions"
    trigger-label="Actions"
    trigger-variant="FLAT"
    trigger-small
    width="20rem"
    item-theme="PRIMARY"
    @item-selected="handleAction"
  />
</template>
```

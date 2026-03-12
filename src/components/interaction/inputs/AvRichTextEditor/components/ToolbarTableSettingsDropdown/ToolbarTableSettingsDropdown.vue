<script setup lang="ts">
import type { AvRichTextEditorLabels } from '@/components/interaction/inputs/AvRichTextEditor/AvRichTextEditor.types'
import { MDI_ICONS } from '@/tokens/icons'

export interface ToolbarTableSettingsDropdownProps extends Pick<AvRichTextEditorLabels, 'deleteTableLabel'
  | 'addColumnBeforeLabel'
  | 'addColumnAfterLabel'
  | 'deleteColumnLabel'
  | 'addRowBeforeLabel'
  | 'addRowAfterLabel'
  | 'deleteRowLabel'
  | 'tableSettingsLabel'> {}

const {
  deleteTableLabel,
  addColumnBeforeLabel,
  addColumnAfterLabel,
  deleteColumnLabel,
  addRowBeforeLabel,
  addRowAfterLabel,
  deleteRowLabel,
  tableSettingsLabel
} = defineProps<ToolbarTableSettingsDropdownProps>()

/**
 * Emits events related to table dropdown actions.
 * @emits deleteTable - When the user wants to delete the current table.
 * @emits addColumnBefore - When the user wants to add a column before the current column.
 * @emits addColumnAfter - When the user wants to add a column after the current column.
 * @emits deleteColumn - When the user wants to delete the current column.
 * @emits addRowBefore - When the user wants to add a row before the current row.
 * @emits addRowAfter - When the user wants to add a row after the current row.
 * @emits deleteRow - When the user wants to delete the current row.
 */
const emit = defineEmits<{
  (e: 'deleteTableSelected'): void
  (e: 'addColumnBeforeSelected'): void
  (e: 'addColumnAfterSelected'): void
  (e: 'deleteColumnSelected'): void
  (e: 'addRowBeforeSelected'): void
  (e: 'addRowAfterSelected'): void
  (e: 'deleteRowSelected'): void
}>()

enum ToolbarTableDropdownEvents {
  DELETE_TABLE = 'deleteTable',
  ADD_COLUMN_BEFORE = 'addColumnBefore',
  ADD_COLUMN_AFTER = 'addColumnAfter',
  DELETE_COLUMN = 'deleteColumn',
  ADD_ROW_BEFORE = 'addRowBefore',
  ADD_ROW_AFTER = 'addRowAfter',
  DELETE_ROW = 'deleteRow',
}

const menuItems = computed(() => [
  {
    name: ToolbarTableDropdownEvents.DELETE_TABLE,
    icon: MDI_ICONS.TABLE_REMOVE,
    label: deleteTableLabel,
    iconOnly: true
  },
  {
    name: ToolbarTableDropdownEvents.ADD_COLUMN_BEFORE,
    icon: MDI_ICONS.TABLE_COLUMN_PLUS_BEFORE,
    label: addColumnBeforeLabel,
    iconOnly: true
  },
  {
    name: ToolbarTableDropdownEvents.ADD_COLUMN_AFTER,
    icon: MDI_ICONS.TABLE_COLUMN_PLUS_AFTER,
    label: addColumnAfterLabel,
    iconOnly: true
  },
  {
    name: ToolbarTableDropdownEvents.DELETE_COLUMN,
    icon: MDI_ICONS.TABLE_COLUMN_REMOVE,
    label: deleteColumnLabel,
    iconOnly: true
  },
  {
    name: ToolbarTableDropdownEvents.ADD_ROW_BEFORE,
    icon: MDI_ICONS.TABLE_ROW_PLUS_BEFORE,
    label: addRowBeforeLabel,
    iconOnly: true
  },
  {
    name: ToolbarTableDropdownEvents.ADD_ROW_AFTER,
    icon: MDI_ICONS.TABLE_ROW_PLUS_AFTER,
    label: addRowAfterLabel,
    iconOnly: true
  },
  {
    name: ToolbarTableDropdownEvents.DELETE_ROW,
    icon: MDI_ICONS.TABLE_ROW_REMOVE,
    label: deleteRowLabel,
    iconOnly: true
  },
])

function handleItemSelected (itemName: string) {
  switch (itemName) {
    case ToolbarTableDropdownEvents.DELETE_TABLE:
      emit('deleteTableSelected')
      break
    case ToolbarTableDropdownEvents.ADD_COLUMN_BEFORE:
      emit('addColumnBeforeSelected')
      break
    case ToolbarTableDropdownEvents.ADD_COLUMN_AFTER:
      emit('addColumnAfterSelected')
      break
    case ToolbarTableDropdownEvents.DELETE_COLUMN:
      emit('deleteColumnSelected')
      break
    case ToolbarTableDropdownEvents.ADD_ROW_BEFORE:
      emit('addRowBeforeSelected')
      break
    case ToolbarTableDropdownEvents.ADD_ROW_AFTER:
      emit('addRowAfterSelected')
      break
    case ToolbarTableDropdownEvents.DELETE_ROW:
      emit('deleteRowSelected')
      break
  }
}
</script>

<template>
  <AvDropdown
    :items="menuItems"
    trigger-active
    :trigger-aria-label="tableSettingsLabel"
    :trigger-icon="MDI_ICONS.TABLE_SETTINGS"
    :trigger-small="false"
    :item-small="false"
    trigger-variant="FLAT"
    width="max-content"
    @item-selected="handleItemSelected"
  />
</template>

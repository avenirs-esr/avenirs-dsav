export const ToolbarTableSettingsDropdownStub = defineComponent({
  name: 'ToolbarTableSettingsDropdown',
  props: {
    deleteTableLabel: { type: String, required: true },
    addColumnBeforeLabel: { type: String, required: true },
    addColumnAfterLabel: { type: String, required: true },
    deleteColumnLabel: { type: String, required: true },
    addRowBeforeLabel: { type: String, required: true },
    addRowAfterLabel: { type: String, required: true },
    deleteRowLabel: { type: String, required: true },
    tableSettingsLabel: { type: String, required: true }
  },
  emits: [
    'deleteTableSelected',
    'addColumnBeforeSelected',
    'addColumnAfterSelected',
    'deleteColumnSelected',
    'addRowBeforeSelected',
    'addRowAfterSelected',
    'deleteRowSelected'
  ],
  template: '<div data-testid="toolbar-table-settings-dropdown" />'
})

export const ToolbarLinkPopoverStub = defineComponent({
  name: 'ToolbarLinkPopover',
  props: {
    initialName: {
      type: String,
      required: false,
    },
    linkLabel: String,
    linkNameLabel: String,
    linkNamePlaceholder: String,
    linkUrlLabel: String,
    popoversCancelLabel: String,
    popoversConfirmLabel: String
  },
  emits: {
    confirm: (_payload: { name: string, url: string }) => true
  },
  template: '<div data-testid="toolbar-link-popover" />',
})

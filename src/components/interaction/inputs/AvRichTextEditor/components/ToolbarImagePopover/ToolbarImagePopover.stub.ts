export const ToolbarImagePopoverStub = defineComponent({
  name: 'ToolbarImagePopover',
  props: {
    imageLabel: String,
    imageNameLabel: String,
    imageNamePlaceholder: String,
    imageUrlLabel: String,
    popoversCancelLabel: String,
    popoversConfirmLabel: String
  },
  emits: {
    confirm: (_payload: { name: string, url: string }) => true
  },
  template: '<div data-testid="toolbar-image-popover" />',
})

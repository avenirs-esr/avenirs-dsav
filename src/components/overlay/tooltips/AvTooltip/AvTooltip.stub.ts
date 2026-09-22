export const AvTooltipStub = defineComponent({
  name: 'AvTooltipStub',
  props: {
    content: { type: String, required: true },
    disabled: { type: Boolean, required: false },
    forceFocusable: { type: Boolean, required: false },
    triggerClass: { type: String, required: false },
    triggerAriaLabel: { type: String, required: false },
  },
  template: '<div data-testid="av-tooltip-stub"><slot /></div>',
})

export const AvTooltipStub = defineComponent({
  name: 'AvTooltipStub',
  props: {
    content: { type: String, required: false },
    disabled: { type: Boolean, required: false },
    fullWidth: { type: Boolean, required: false },
    forceFocusable: { type: Boolean, required: false },
    triggerClass: { type: String, required: false },
    triggerAriaLabel: { type: String, required: false },
    paddingRem: { type: Number, required: false },
  },
  template: '<div data-testid="av-tooltip-stub"><slot /></div>',
})

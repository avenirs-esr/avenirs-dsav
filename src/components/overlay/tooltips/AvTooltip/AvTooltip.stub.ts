export const AvTooltipStub = defineComponent({
  name: 'AvTooltipStub',
  props: {
    content: String,
    disabled: Boolean,
    forceFocusable: Boolean,
  },
  template: '<div data-testid="av-tooltip-stub"><slot /></div>',
})

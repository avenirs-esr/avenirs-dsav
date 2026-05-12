export const AvRadioButtonStub = defineComponent({
  name: 'AvRadioButton',
  props: {
    value: String,
    disabled: Boolean,
  },
  template: '<div class="av-radio-button-stub"><slot /></div>',
})

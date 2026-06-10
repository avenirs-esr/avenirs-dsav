export const AvRadioButtonSetStub = defineComponent({
  name: 'AvRadioButtonSet',
  props: {
    modelValue: String,
    name: String,
    inline: Boolean,
    small: Boolean,
    errorMessage: { type: String, required: false },
  },
  emits: ['update:modelValue'],
  template: '<div class="av-radio-button-set-stub" data-testid="av-radio-button-set-stub"><slot /></div>',
})

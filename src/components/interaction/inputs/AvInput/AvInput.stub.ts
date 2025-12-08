export const AvInputStub = defineComponent({
  name: 'AvInput',
  props: {
    modelValue: String,
    label: String,
    labelClass: String,
    placeholder: String,
    isValid: Boolean,
    isTextarea: Boolean,
    labelVisible: Boolean,
    disabled: Boolean,
    required: Boolean,
    maxlength: Number,
    errorMessage: String,
    prefixIcon: String,
    id: String
  },
  emits: ['update:modelValue'],
  template: '<input data-testid="av-input-stub" :value="modelValue" :placeholder="placeholder" :disabled="disabled" :required="required" :maxlength="maxlength" /><slot name="customCaptions" :current-value="modelValue" />'
})

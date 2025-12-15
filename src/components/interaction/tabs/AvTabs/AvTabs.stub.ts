export const AvTabsStub = defineComponent({
  name: 'AvTabs',
  props: {
    modelValue: {
      type: Number,
      required: false
    },
    ariaLabel: {
      type: String,
      required: false
    },
    compact: {
      type: Boolean,
      required: false
    }
  },
  emits: ['update:modelValue'],
  template: '<div class="av-tabs"><slot /></div>'
})

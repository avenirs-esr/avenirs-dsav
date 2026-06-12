export const AvTabStub = defineComponent({
  name: 'AvTab',
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    isLoading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  template: '<div class="av-tab"><slot /></div>'
})

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
    }
  },
  template: '<div class="av-tab"><slot /></div>'
})

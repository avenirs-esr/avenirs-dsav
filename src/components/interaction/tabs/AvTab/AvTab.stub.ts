import { AvInteractivePropsStub } from '@/types/interfaces.stub'

export const AvTabStub = defineComponent({
  name: 'AvTab',
  props: {
    ...AvInteractivePropsStub,
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: false
    },
    isLoading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  template: '<div class="av-tab"><slot /></div>'
})

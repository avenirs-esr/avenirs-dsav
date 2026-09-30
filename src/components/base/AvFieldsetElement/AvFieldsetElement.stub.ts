import { AvInteractivePropsStub } from '@/types/interfaces.stub'

export const AvFieldsetElementStub = defineComponent({
  name: 'AvFieldsetElement',
  props: {
    ...AvInteractivePropsStub,
    disabledOpacity: { type: Number, default: 0.6 }
  },
  template: '<div data-testid="av-fieldset-element-stub"><slot /></div>'
})

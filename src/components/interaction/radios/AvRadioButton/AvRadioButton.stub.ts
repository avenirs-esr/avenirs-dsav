import { AvInteractivePropsStub } from '@/types/interfaces.stub'

export const AvRadioButtonStub = defineComponent({
  name: 'AvRadioButton',
  props: {
    ...AvInteractivePropsStub,
    value: String,
  },
  template: '<div class="av-radio-button-stub"><slot /></div>',
})

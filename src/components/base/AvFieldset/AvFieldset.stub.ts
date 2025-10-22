export const AvFieldsetStub = defineComponent({
  name: 'AvFieldset',
  props: ['id', 'legend', 'legendId', 'class', 'ariaLive'],
  template: `<fieldset><slot /></fieldset>`
})

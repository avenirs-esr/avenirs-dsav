export const AvPopoverStub = defineComponent({
  name: 'AvPopOver',
  props: {
    width: {
      type: String,
      required: false
    },
    padding: {
      type: String,
      required: false
    },
  },
  template: `
    <div data-test-id='av-popover'>
      <slot name="trigger" :toggle="() => {}"></slot>
      <slot name="popover" :close="() => {}"></slot>
    </div>
  `
})

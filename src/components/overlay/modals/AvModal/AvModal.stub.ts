export const AvModalStub = defineComponent({
  name: 'AvModal',
  props: ['opened', 'closeButtonLabel', 'confirmButtonLabel', 'confirmButtonIcon'],
  emits: ['close', 'confirm'],
  template: `
    <div class="av-modal">
      <slot name="header"></slot>
      <slot />
      <slot name="footer"></slot>
    </div>
  `
})

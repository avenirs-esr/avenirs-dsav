export const AvModalStub = defineComponent({
  name: 'AvModal',
  props: [
    'opened',
    'closeButtonLabel',
    'confirmButtonLabel',
    'confirmButtonIcon',
    'isLoading',
    'confirmButtonDisabled'
  ],
  emits: ['close', 'confirm', 'clickOutside'],
  template: `
    <div class="av-modal">
      <slot name="header"></slot>
      <slot />
      <slot name="footer"></slot>
    </div>
  `
})

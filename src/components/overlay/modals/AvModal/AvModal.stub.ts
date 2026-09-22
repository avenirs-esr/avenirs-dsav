export const AvModalStub = defineComponent({
  name: 'AvModal',
  props: [
    'id',
    'opened',
    'isAlert',
    'closeButtonLabel',
    'closeButtonIcon',
    'closeButtonDisabled',
    'closeButtonDisabledTooltip',
    'confirmButtonLabel',
    'confirmButtonIcon',
    'confirmButtonDisabled',
    'confirmButtonDisabledTooltip',
    'isLoading'
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

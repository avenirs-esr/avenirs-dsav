export const AvCancelConfirmButtonsStub = defineComponent({
  name: 'AvCancelConfirmButtons',
  props: [
    'cancelLabel',
    'cancelIcon',
    'confirmLabel',
    'cancelDisabled',
    'cancelIsLoading',
    'confirmIcon',
    'confirmDisabled',
    'confirmIsLoading'
  ],
  emits: ['cancel', 'confirm'],
  template: `
    <div class="av-cancel-confirmation-buttons-stub" >
      <button
        class="cancel"
        @click="$emit(\'cancel\')"
      >
        {{ cancelLabel }}
      </button>
      <button
        class="confirm"
        @click="$emit(\'confirm\')"
      >
        {{ confirmLabel }}
      </button>
    </div>
  `
})

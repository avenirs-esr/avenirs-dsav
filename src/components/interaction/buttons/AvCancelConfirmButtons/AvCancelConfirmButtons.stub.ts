export const AvCancelConfirmButtonsStub = defineComponent({
  name: 'AvCancelConfirmButtons',
  props: [
    'cancelLabel',
    'cancelIcon',
    'cancelDisabled',
    'cancelDisabledTooltip',
    'cancelIsLoading',
    'confirmLabel',
    'confirmIcon',
    'confirmDisabled',
    'confirmDisabledTooltip',
    'confirmIsLoading',
    'iconOnly',
    'form'
  ],
  emits: ['cancel', 'confirm'],
  methods: {
    focusCancel () {},
    focusConfirm () {},
  },
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

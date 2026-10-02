export const AvCancelConfirmButtonsStubDefinition = {
  name: 'AvCancelConfirmButtons',
  props: {
    cancelLabel: String,
    cancelIcon: String,
    cancelDisabled: Boolean,
    cancelDisabledTooltip: String,
    cancelIsLoading: Boolean,
    confirmLabel: String,
    confirmIcon: String,
    confirmDisabled: Boolean,
    confirmDisabledTooltip: String,
    confirmIsLoading: Boolean,
    iconOnly: Boolean,
    form: String
  },
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
}

export const AvCancelConfirmButtonsStub = defineComponent(AvCancelConfirmButtonsStubDefinition)

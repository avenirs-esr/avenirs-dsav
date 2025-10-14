export const AvCancelConfirmButtonsStub = {
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
    <button class="cancel" @click="$emit(\'cancel\')">{{ cancelLabel }}</button>
    <button class="confirm" @click="$emit(\'confirm\')">{{ confirmLabel }}</button>
  `
}

export const AvButtonStub = {
  name: 'AvButton',
  props: ['label', 'variant', 'type', 'disabled', 'isLoading'],
  emits: ['click'],
  template: '<button :disabled="disabled" @click="$emit(\'click\')">{{ label }}</button>'
}

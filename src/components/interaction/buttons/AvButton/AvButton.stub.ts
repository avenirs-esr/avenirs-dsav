export const AvButtonStub = defineComponent({
  name: 'AvButton',
  props: ['label', 'variant', 'type', 'disabled', 'isLoading', 'small'],
  emits: ['click'],
  template: `
    <button
      class="av-button-stub"
      :disabled="disabled"
      @click="$emit(\'click\')"
    >
      {{ label }}
    </button>
  `
})

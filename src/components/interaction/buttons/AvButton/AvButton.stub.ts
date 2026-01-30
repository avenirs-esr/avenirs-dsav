export const AvButtonStub = defineComponent({
  name: 'AvButton',
  props: {
    variant: { type: String, default: 'DEFAULT' },
    theme: { type: String, default: 'PRIMARY' },
    isLoading: { type: Boolean, default: false },
    iconScale: { type: Number },
    noRadius: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    label: { type: String, required: true },
    iconOnly: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
    icon: { type: [String, Object] },
    noSentenceCase: { type: Boolean, default: false },
  },
  emits: ['click'],
  template: `
    <button
      class="av-button-stub"
      :disabled="disabled"
      @click="$emit('click', $event)"
    >
      {{ label }}
    </button>
  `
})

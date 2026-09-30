export const AvToggleStub = defineComponent({
  name: 'AvToggle',
  props: {
    modelValue: { type: Boolean, default: false },
    id: { type: String, default: undefined },
    name: { type: String, default: undefined },
    description: { type: String, default: undefined },
    tooltip: { type: String, default: undefined },
    disabled: { type: Boolean, default: false },
    disabledTooltip: { type: [String, Boolean], default: undefined },
  },
  emits: ['update:modelValue'],
  template: `
    <div class="av-toggle">
      <input
        type="checkbox"
        :id="id"
        :name="name"
        :checked="modelValue"
        :disabled="disabled"
        data-testid="av-toggle"
        @change="$emit('update:modelValue', $event.target.checked)"
      />
      <span class="description">
        {{ description }}
      </span>
      <span class="status">
        <slot :active="modelValue">{{ modelValue ? 'On' : 'Off' }}</slot>
      </span>
    </div>`,
})

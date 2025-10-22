export const AvCheckboxStub = defineComponent({
  name: 'AvCheckbox',
  props: {
    id: { type: String, default: '' },
    name: { type: String, default: 'checkbox' },
    value: { type: [String, Number, Boolean], required: true },
    modelValue: { type: Array, required: true },
    label: { type: String, default: '' }
  },
  emits: ['update:modelValue'],
  template: `
    <div class="av-checkbox-stub">
      <input
        type="checkbox"
        :id="id"
        :name="name"
        :checked="modelValue.includes(value)"
        @change="$emit('update:modelValue', 
          modelValue.includes(value)
            ? modelValue.filter(v => v !== value)
            : [...modelValue, value]
        )"
        :data-testid="'checkbox-' + id"
      />
      <label :for="id">{{ label }}</label>
    </div>
  `
})

import { AvInteractivePropsStub } from '@/types/interfaces.stub'

export const AvCheckboxStub = defineComponent({
  name: 'AvCheckbox',
  props: {
    ...AvInteractivePropsStub,
    id: { type: String, default: '' },
    name: { type: String, default: 'checkbox' },
    value: { type: [String, Number, Boolean], required: true },
    modelValue: { type: Array, required: true },
    label: { type: String, default: '' },
  },
  emits: ['update:modelValue'],
  template: `
    <div class="av-checkbox-stub">
      <input
        type="checkbox"
        :id="id"
        :name="name"
        :checked="modelValue.includes(value)"
        :aria-label="$attrs['aria-label']"
        :aria-checked="$attrs['aria-checked']"
        @change="$emit('update:modelValue', 
          modelValue.includes(value)
            ? modelValue.filter(v => v !== value)
            : [...modelValue, value]
        )"
        :data-testid="'input-checkbox-' + id"
      />
      <label :for="id"><slot name="label">{{ label }}</slot></label>
    </div>
  `
})

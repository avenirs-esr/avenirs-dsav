export const AvCheckboxListItemStub = defineComponent({
  name: 'AvCheckboxListItem',
  props: {
    id: { type: String, required: true },
    listId: { type: String, required: true },
    label: String,
    icon: String,
    disabled: Boolean,
    ariaLabel: String,
    ariaLabelledby: String,
    modelValue: { type: Array, required: true },
  },
  emits: ['update:modelValue'],
  template: `
    <div class="av-checkbox-list-item-stub">
      <input
        type="checkbox"
        :id="id"
        :name="label"
        :checked="modelValue.includes(id)"
        :disabled="disabled"
        @change="$emit('update:modelValue', 
          modelValue.includes(id)
            ? modelValue.filter(v => v !== id)
            : [...modelValue, id]
        )"
        :data-testid="'checkbox-' + id"
      />
      <label :for="id"><slot>{{ label }}</slot></label>
    </div>
  `
})

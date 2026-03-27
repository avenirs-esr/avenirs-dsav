export const AvMultiselectStub = defineComponent({
  name: 'AvMultiselect',
  props: {
    modelValue: Array,
    options: Array,
    label: String,
    placeholder: String,
    selectedText: String,
    dense: Boolean
  },
  emits: ['update:modelValue'],
  template: `
    <div :class="{ 'av-multiselect--dense': dense }">
      <label>{{ label }}</label>
      <select
        multiple
        :value="modelValue.map(o => o.value)"
        @change="$emit(
          'update:modelValue',
          Array.from($event.target.selectedOptions).map(o => ({
            label: o.text,
            value: o.value
          }))
        )"
      >
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
      <p class="av-multiselect__caption">
        {{ modelValue.length
          ? (selectedText || modelValue.length + ' sélection(s)')
          : placeholder
        }}
      </p>
    </div>
  `
})

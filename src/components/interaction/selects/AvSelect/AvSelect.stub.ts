export const AvSelectStub = defineComponent({
  name: 'AvSelect',
  props: {
    modelValue: [String, Number],
    options: Array,
    placeholder: String,
    dense: Boolean,
    required: Boolean,
    disabled: Boolean,
    hint: String,
    errorMessage: String,
    successMessage: String,
  },
  emits: ['update:modelValue'],
  template: `
    <select 
      class="av-select-stub"
      :value="modelValue"
      :disabled="disabled"
      :required="required"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option
        v-if="placeholder !== undefined"
        value=""
      >
        {{ placeholder }}
      </option>
      <option 
        v-for="option in options" 
        :key="option.value" 
        :value="option.value"
      >
        {{ option.text }}
      </option>
      <span v-if="hint">{{ hint }}</span>
      <span v-if="errorMessage">{{ errorMessage }}</span>
      <span v-if="!errorMessage && successMessage">{{ successMessage }}</span>
    </select>
  `
})

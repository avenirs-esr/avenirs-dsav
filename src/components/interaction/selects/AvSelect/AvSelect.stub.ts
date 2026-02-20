import type { SelectOption } from '@/components/interaction/selects/AvSelect/AvSelect.vue'

export const AvSelectStub = defineComponent({
  name: 'AvSelect',
  props: {
    modelValue: [String, Number],
    options: Array as () => SelectOption[],
    placeholder: String,
    label: String,
    dense: Boolean,
    required: Boolean,
    disabled: Boolean,
    hint: String,
    errorMessage: String,
    successMessage: String,
    prefixIcon: String,
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
      <template
        v-for="(option, index) in options"
        :key="index"
      >
        <optgroup
          v-if="option.children && option.children.length > 0"
          :label="option.text"
        >
          <option
            v-for="(childOption, childIndex) in option.children"
            :key="childOption.value"
            :value="childOption.value"
            :disabled="childOption.disabled"
          >
            {{ childOption.text }}
          </option>
        </optgroup>

        <option
          v-else
          :value="option.value"
          :disabled="option.disabled"
        >
          {{ option.text }}
        </option>
      </template>
      <span v-if="hint">{{ hint }}</span>
      <span v-if="errorMessage">{{ errorMessage }}</span>
      <span v-if="!errorMessage && successMessage">{{ successMessage }}</span>
    </select>
  `
})

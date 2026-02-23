import type {
  AvSelectOption,
  AvSelectSelectedOption,
} from '@/components/interaction/selects/AvSelect/AvSelect.vue'

export const AvSelectStub = defineComponent({
  name: 'AvSelect',
  props: {
    selectedItem: Object as () => AvSelectSelectedOption,
    options: Array as () => AvSelectOption[],
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
  emits: ['update:selectedItem'],
  setup (props, { emit }) {
    function buildSelectedItemById (id: string): AvSelectSelectedOption {
      for (const option of props.options ?? []) {
        if (option.children?.length) {
          const selectedChild = option.children.find(child => String(child.id) === id)
          if (selectedChild) {
            return { itemId: selectedChild.id, parentId: option.id }
          }
        }

        if (String(option.id) === id) {
          return { itemId: option.id }
        }
      }

      return { itemId: id }
    }

    function handleChange (event: Event) {
      const id = (event.target as HTMLSelectElement).value
      emit('update:selectedItem', buildSelectedItemById(id))
    }

    return {
      handleChange,
    }
  },
  template: `
    <select 
      class="av-select-stub"
      :value="selectedItem?.itemId || ''"
      :disabled="disabled"
      :required="required"
      @change="handleChange"
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
          :label="option.label"
        >
          <option
            v-for="(childOption, childIndex) in option.children"
            :key="childOption.id"
            :value="childOption.id"
            :disabled="childOption.disabled"
          >
            {{ childOption.label }}
          </option>
        </optgroup>

        <option
          v-else
          :value="option.id"
          :disabled="option.disabled"
        >
          {{ option.label }}
        </option>
      </template>
      <span v-if="hint">{{ hint }}</span>
      <span v-if="errorMessage">{{ errorMessage }}</span>
      <span v-if="!errorMessage && successMessage">{{ successMessage }}</span>
    </select>
  `
})

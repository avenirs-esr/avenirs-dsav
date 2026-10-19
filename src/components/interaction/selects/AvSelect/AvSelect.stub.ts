import type { PropType } from 'vue'
import type { AvSelectItem } from '@/components/interaction/selects/AvSelect/AvSelect.types'
import { AvInteractivePropsStub } from '@/types/interfaces.stub'

export const AvSelectStub = defineComponent({
  name: 'AvSelect',
  props: {
    ...AvInteractivePropsStub,
    modelValue: {
      type: [Array, Object],
      default: null,
    },
    id: {
      type: String,
      required: false,
    },
    hint: {
      type: String,
      required: false,
    },
    collapseHint: {
      type: String,
      required: false,
    },
    label: String,
    labelVisible: {
      type: Boolean,
      default: true,
    },
    labelClass: {
      type: String,
      required: false,
    },
    options: Array as PropType<AvSelectItem[]>,
    successMessage: {
      type: String,
      required: false,
    },
    errorMessage: {
      type: String,
      required: false,
    },
    placeholder: String,
    dense: {
      type: Boolean,
      required: false,
    },
    selectedText: {
      type: String,
      required: false,
    },
    selectAll: {
      type: Boolean,
      required: false,
    },
    selectAllLabel: {
      type: Object as PropType<[string, string]>,
      required: false,
    },
    search: {
      type: Boolean,
      required: false,
    },
    width: {
      type: String,
      required: false,
    },
    height: {
      type: String,
      required: false,
    },
    collapseMaxHeight: {
      type: String,
      required: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      required: false,
    },
    prefixIcon: {
      type: String,
      required: false,
    }
  },
  emits: ['update:modelValue'],
  template: `
    <div :class="{ 'av-multiselect--dense': dense }">
      <label>{{ label }}</label>
      <select
        :multiple="multiple"
        :value="multiple
          ? (Array.isArray(modelValue) ? modelValue.map(o => o.value) : [])
          : (modelValue?.value ?? '')"
        @change="$emit(
          'update:modelValue',
          multiple
            ? Array.from($event.target.selectedOptions).map(o => ({
                label: o.text,
                value: o.value
              }))
            : (
                $event.target.selectedOptions[0]
                  ? {
                      label: $event.target.selectedOptions[0].text,
                      value: $event.target.selectedOptions[0].value
                    }
                  : null
              )
        )"
      >
        <option
          v-if="!multiple"
          value=""
        >
          {{ placeholder }}
        </option>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
          :disabled="option.disabled"
        >
          {{ option.label }}
        </option>
      </select>
      <p class="av-multiselect__caption">
        {{ multiple
          ? (Array.isArray(modelValue) && modelValue.length
              ? (selectedText || modelValue.length + ' sélection(s)')
              : placeholder)
          : (modelValue?.label ?? placeholder)
        }}
      </p>
    </div>
  `,
})

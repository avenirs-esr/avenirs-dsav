import { AvInteractivePropsStub } from '@/types/interfaces.stub'

export const AvSelectStub = defineComponent({
  name: 'AvSelect',
  props: {
    ...AvInteractivePropsStub,
    modelValue: {
      type: [Array, Object],
      default: null,
    },
    options: Array,
    label: String,
    placeholder: String,
    selectedText: String,
    dense: Boolean,
    multiple: {
      type: Boolean,
      default: false,
    },
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

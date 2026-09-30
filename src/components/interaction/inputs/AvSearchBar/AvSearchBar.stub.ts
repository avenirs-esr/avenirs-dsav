import { AvInteractivePropsStub } from '@/types/interfaces.stub'

export const AvSearchBarStub = defineComponent({
  name: 'AvSearchBar',
  props: {
    ...AvInteractivePropsStub,
    id: String,
    label: String,
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: String,
  },
  emits: ['update:modelValue', 'search'],
  template: `
    <div
      role="search"
      data-testid="av-search-bar-stub"
    >
      <input
        :id="id"
        :value="modelValue"
        :placeholder="placeholder"
        :aria-label="label"
        :disabled="disabled"
        @input="$emit('update:modelValue', $event.target.value)"
        @keydown.enter="$emit('search', modelValue)"
      />
      <button
        type="button"
        :disabled="disabled"
        :aria-label="label"
        @click="$emit('search', modelValue)"
      >
        Search
      </button>
    </div>
  `,
})

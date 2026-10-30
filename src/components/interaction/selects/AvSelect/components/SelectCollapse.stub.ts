import type { AvSelectItem, AvSelectSelectedOption } from '@/components/interaction/selects/AvSelect/AvSelect.types'

export const SelectCollapseStub = defineComponent({
  name: 'SelectCollapse',
  props: {
    isVisible: { type: Boolean, default: false },
    selected: {
      type: [Array, Object] as unknown as () => AvSelectSelectedOption[] | AvSelectSelectedOption | null,
      default: null,
    },
    options: {
      type: Array as () => AvSelectItem[],
      default: () => [],
    },
    search: {
      type: Boolean,
      default: false,
    },
    searchPlaceholder: {
      type: String,
      default: 'Rechercher...',
    },
    modelValue: {
      type: Array as () => (string | number)[],
      default: () => [],
    },
    multiple: { type: Boolean, default: false },
    id: { type: String, required: true },
  },
  emits: ['update:modelValue', 'close'],
  template: `
    <div
      v-if="isVisible"
      data-testid="av-select__collapse"
    />
  `,
})

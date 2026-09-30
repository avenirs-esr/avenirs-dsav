import type { PropType } from 'vue'
import { AvInteractivePropsStub } from '@/types/interfaces.stub'

export const AvListItemStub = defineComponent({
  name: 'AvListItem',
  props: {
    ...AvInteractivePropsStub,
    theme: { type: String as PropType<'PRIMARY' | 'SECONDARY' | 'TERTIARY'>, default: 'PRIMARY' },
    selected: { type: Boolean, default: false },
    icon: { type: String, required: false },
    iconSize: { type: Number, default: 1.3125 },
    enableTooltip: { type: Boolean, default: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    clickable: { type: Boolean, default: false },
  },
  emits: ['click'],
  template: `
    <div
      class="av-list-item-stub"
      @click="$emit(\'click\')"
    >
      {{ title }}
      {{ description }}
      <slot />
    </div>`
})

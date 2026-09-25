import type { PropType } from 'vue'
import { Theme } from '@/types'

export const AvListItemStub = defineComponent({
  name: 'AvListItem',
  props: {
    theme: { type: String as PropType<Theme>, default: Theme.PRIMARY },
    selected: { type: Boolean, default: false },
    icon: { type: String, required: false },
    iconSize: { type: String, default: 1.3125 },
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

import type { PropType } from 'vue'
import type { Variant } from '@/components/interaction/buttons/AvButton/AvButton.types'
import type { AvDropdownItem } from '@/components/overlay/dropdowns/AvDropdown/AvDropdown.vue'
import type { Size } from '@/types/size.types'
import type { Theme } from '@/types/theme.types'
import { AvInteractivePropsStub } from '@/types/interfaces.stub'

export const AvDropdownStub = defineComponent({
  name: 'AvDropdown',
  props: {
    ...AvInteractivePropsStub,
    items: { type: Array as PropType<AvDropdownItem[]>, required: true },
    triggerAriaLabel: { type: String, required: true },
    triggerActive: { type: Boolean, required: false },
    triggerIcon: { type: String, required: false },
    triggerLabel: { type: String, required: false },
    triggerVariant: { type: String as PropType<Variant>, required: false },
    triggerSize: { type: String as PropType<Size>, required: false },
    triggerNoSentenceCase: { type: Boolean, required: false },
    width: { type: String, required: false },
    padding: { type: String, required: false },
    itemSize: { type: String as PropType<Size>, required: false },
    itemTheme: { type: String as PropType<Theme>, required: false },
    itemIconScale: { type: Number, required: false },
  },
  emits: ['itemSelected'],
  template: `
    <div class="av-dropdown-stub">
      <button
        v-for="item in items"
        :key="item.name"
        :data-name="item.name"
        :data-disabled-tooltip="item.disabledTooltip"
        :disabled="item.disabled"
        @click="$emit('itemSelected', item.name)"
      >
        {{ item.label }}
      </button>
    </div>
  `
})

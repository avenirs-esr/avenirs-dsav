import type { PropType } from 'vue'
import type { AvSortableListItem } from '@/components/interaction/lists/AvSortableList/AvSortableList.vue'
import { AvInteractivePropsStub } from '@/tests'

export const AvSortableListStub = defineComponent({
  name: 'AvSortableList',
  props: {
    ...AvInteractivePropsStub,
    modelValue: {
      type: Array as PropType<AvSortableListItem[]>,
      default: () => []
    },
    dragLabel: {
      type: String,
      default: 'Déplacer'
    },
    moveUpLabel: {
      type: String,
      default: 'Monter'
    },
    moveUpDisabledTooltip: {
      type: String,
      default: 'Cet élément est déjà en première position'
    },
    moveDownLabel: {
      type: String,
      default: 'Descendre'
    },
    moveDownDisabledTooltip: {
      type: String,
      default: 'Cet élément est déjà en dernière position'
    },
    announcementFormatter: {
      type: Function as PropType<(element: AvSortableListItem, index: number, targetIndex: number) => string>,
      required: false
    },
  },
  emits: ['update:modelValue'],
  template: `
    <div class="av-sortable-list-stub">
      <div
        v-for="(element, index) in modelValue"
        :key="element.id"
        class="av-sortable-list-stub__item"
      >
        <slot
          :element="element"
          :index="index"
        >
          {{ element.label }}
        </slot>
      </div>
    </div>`
})

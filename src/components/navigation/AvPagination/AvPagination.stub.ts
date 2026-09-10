import type { PropType } from 'vue'
import type { Page } from '@/components/navigation/AvPagination/AvPagination.types'

export const AvPaginationStub = defineComponent({
  name: 'AvPagination',
  props: {
    id: String,
    ariaLabel: String,
    compact: Boolean,
    compactCurrentPageLabel: String,
    currentPage: {
      type: Number,
      default: 0,
    },
    firstPageLabel: String,
    lastPageLabel: String,
    nextPageLabel: String,
    pages: {
      type: Array as PropType<Page[]>,
      required: true,
    },
    prevPageLabel: String,
    truncLimit: Number,
  },
  emits: ['update:current-page'],
  template: `
    <div class="av-pagination-stub">
      <button class="av-pagination" @click="$emit('update:current-page', 2)">Page 2</button>
    </div>
  `
})

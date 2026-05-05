<script
  lang="ts"
  setup
  generic="TRow extends object"
>
import {
  createColumnHelper,
  FlexRender,
  getCoreRowModel,
  useVueTable,
} from '@tanstack/vue-table'
import { type Slot, useAttrs } from 'vue'
import AvIcon from '@/components/base/AvIcon/AvIcon.vue'
import { MDI_ICONS } from '@/tokens/icons'

export interface AvTableColumn<T> {
  key: keyof T & string
  label: string
  width?: string
}

export interface AvTableProps<T extends object> {
  columns: AvTableColumn<T>[]
  rows: T[]
  rowKey: keyof T & string
  loading?: boolean
  caption?: string
  textAlign?: 'start' | 'center' | 'end'
}

defineOptions({ inheritAttrs: false })

const {
  columns,
  rows,
  rowKey,
  loading = false,
  caption,
  textAlign = 'start',
} = defineProps<AvTableProps<TRow>>()

const slots = defineSlots<{
  [key: string]: Slot | undefined
  empty?: Slot
  loading?: Slot
}>()

const attrs = useAttrs()

const columnHelper = createColumnHelper<TRow>()

const tableColumns = computed(() =>
  columns.map(col =>
    columnHelper.accessor(col.key as Parameters<typeof columnHelper.accessor>[0], {
      id: col.key,
      header: col.label,
      cell: info => info.getValue(),
    })
  )
)

const table = useVueTable<TRow>({
  get data () { return rows },
  get columns () { return tableColumns.value },
  getCoreRowModel: getCoreRowModel(),
})
</script>

<template>
  <div
    class="av-table-wrapper av-radius-lg av-w-full"
    :aria-busy="loading"
  >
    <table
      v-bind="{ 'aria-label': caption, ...attrs }"
      class="av-table av-w-full"
    >
      <caption
        v-if="caption"
        class="av-table__caption b2-light av-text-text2 av-p-sm"
      >
        {{ caption }}
      </caption>

      <colgroup>
        <col
          v-for="col in columns"
          :key="col.key"
          :style="col.width ? { width: col.width } : undefined"
        >
      </colgroup>

      <thead class="av-table__head">
        <tr
          v-for="headerGroup in table.getHeaderGroups()"
          :key="headerGroup.id"
          class="av-table__row av-table__row--header"
        >
          <th
            v-for="header in headerGroup.headers"
            :key="header.id"
            scope="col"
            class="av-table__cell av-table__cell--header av-p-sm b1-light av-text-text2"
            :style="{ textAlign }"
          >
            <slot
              v-if="slots[`header(${header.column.id})`]"
              :name="`header(${header.column.id})`"
              :column="columns.find(c => c.key === header.column.id)"
              :header="header"
            />
            <FlexRender
              v-else
              :render="header.column.columnDef.header"
              :props="header.getContext()"
            />
          </th>
        </tr>
      </thead>

      <tbody class="av-table__body">
        <template v-if="loading">
          <tr class="av-table__row av-table__row--loading">
            <td
              :colspan="columns.length"
              class="av-table__cell av-table__cell--loading av-p-md b1-light av-text-text2"
              role="status"
              aria-live="polite"
            >
              <slot name="loading">
                <span class="av-table__state-default">
                  <AvIcon
                    :name="MDI_ICONS.LOADING"
                    animation="spin"
                    :size="1.25"
                  />
                </span>
              </slot>
            </td>
          </tr>
        </template>

        <template v-else-if="table.getRowModel().rows.length === 0">
          <tr class="av-table__row av-table__row--empty">
            <td
              :colspan="columns.length"
              class="av-table__cell av-table__cell--empty av-p-md b1-light av-text-text2"
            >
              <slot name="empty">
                <span class="av-table__state-default">
                  <AvIcon
                    :name="MDI_ICONS.INBOX_OUTLINE"
                    :size="2.5"
                  />
                  <span class="caption-light">No data</span>
                </span>
              </slot>
            </td>
          </tr>
        </template>

        <template v-else>
          <tr
            v-for="row in table.getRowModel().rows"
            :key="(row.original[rowKey] as string)"
            class="av-table__row av-table__row--body"
          >
            <td
              v-for="cell in row.getVisibleCells()"
              :key="cell.id"
              class="av-table__cell av-table__cell--body av-p-sm b1-light av-text-text1"
              :style="{ textAlign }"
            >
              <slot
                v-if="slots[`cell(${cell.column.id})`]"
                :name="`cell(${cell.column.id})`"
                :row="row.original"
                :value="cell.getValue()"
                :row-index="row.index"
              />
              <FlexRender
                v-else
                :render="cell.column.columnDef.cell"
                :props="cell.getContext()"
              />
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.av-table-wrapper {
  overflow: hidden;
  border: 1px solid var(--stroke);
  box-shadow: 0 0 0.3125rem rgba(0, 0, 0, 0.1);
}

.av-table {
  border-collapse: collapse;
  border-spacing: 0;

  &__caption {
    text-align: left;
    border-bottom: 1px solid var(--stroke);
  }

  &__head {
    background-color: var(--card2);
  }

  &__row {
    &--body {
      border-top: 1px solid var(--stroke);
      transition: background-color 0.15s ease-in-out;

      &:hover {
        background-color: var(--surface-background);
      }
    }

    &--empty,
    &--loading {
      background-color: var(--card);
      border-top: 1px solid var(--stroke);
    }
  }

  &__cell {
    vertical-align: middle;
    overflow-wrap: anywhere;

    &--header {
      white-space: nowrap;
    }

    &--empty,
    &--loading {
      text-align: center;
      cursor: default;
    }
  }

  &__state-default {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-xs);
    color: var(--icon);
  }
}
</style>

export const AvTableStub = defineComponent({
  name: 'AvTable',
  props: {
    columns: { type: Array, default: () => [] },
    rows: { type: Array, default: () => [] },
    rowKey: { type: String, required: true },
    loading: { type: Boolean, default: false },
    caption: { type: String, default: undefined },
  },
  emits: ['rowClick', 'cellClick'],
  template: `
    <div class="av-table-wrapper">
      <div v-if="loading" class="av-table__state">
        <slot name="loading"><span>Chargement…</span></slot>
      </div>
      <table v-else class="av-table">
        <caption v-if="caption">{{ caption }}</caption>
        <thead class="av-table__head">
          <tr class="av-table__row av-table__row--header">
            <th v-for="col in columns" :key="col.key" scope="col" class="av-table__cell av-table__cell--header">
              <slot :name="'header(' + col.key + ')'">{{ col.label }}</slot>
            </th>
          </tr>
        </thead>
        <tbody class="av-table__body">
          <tr v-if="rows.length === 0" class="av-table__row av-table__row--empty">
            <td :colspan="columns.length" class="av-table__cell av-table__cell--empty">
              <slot name="empty"><span>Aucune donnée disponible.</span></slot>
            </td>
          </tr>
          <tr
            v-for="(row, index) in rows"
            :key="row[rowKey]"
            class="av-table__row av-table__row--body"
            @click="$emit('rowClick', row, index)"
          >
            <td
              v-for="col in columns"
              :key="col.key"
              class="av-table__cell av-table__cell--body"
              @click.stop="$emit('cellClick', row, col, index)"
            >
              <slot :name="'cell(' + col.key + ')'">{{ row[col.key] }}</slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
})

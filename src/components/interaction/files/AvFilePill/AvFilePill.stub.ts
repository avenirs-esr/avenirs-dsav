export const AvFilePillStub = defineComponent({
  name: 'AvFilePill',
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
    id: {
      type: String,
      required: false,
    },
    downloadable: {
      type: Boolean,
      default: false,
    },
    deletable: {
      type: Boolean,
      default: true,
    },
    showDetails: {
      type: Boolean,
      default: false,
    },
    downloadPrefixLabel: {
      type: String,
      required: false,
    },
    deletePrefixLabel: {
      type: String,
      required: false,
    },
  },
  emits: [
    'download',
    'delete',
  ],
  setup (props, { emit }) {
    const realId = props.id ?? 'file-pill-stub'

    return {
      realId,
      emit,
    }
  },
  template: `
    <div class="av-file-pill-stub">
      <span class="file-name">{{ name }}</span>

      <button
        v-if="downloadable"
        data-testid="download-file-button"
        @click="emit('download', realId)"
      >
        Download
      </button>

      <button
        v-if="deletable"
        data-testid="delete-file-button"
        @click="emit('delete', realId)"
      >
        Delete
      </button>
    </div>
  `,
})

export const AvFilePillStub = defineComponent({
  name: 'AvFilePill',
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: false
    },
    type: {
      type: String,
      required: false
    },
    id: {
      type: String,
      required: false
    },
    downloadable: {
      type: Boolean,
      required: false
    },
    deletable: {
      type: Boolean,
      required: false
    },
    showDetails: {
      type: Boolean,
      required: false
    },
  },
  emits: [
    'download',
    'delete'
  ],
  template: `
    <div class="av-file-pill-stub">
      <span class="file-name">{{ name }}</span>
      <button
        data-testid="download-file-button"
        @click="$emit('download', id)"
      >
        Download
      </button>
      <button
        data-testid="delete-file-button"
        @click="$emit('delete', id)"
      >
        Delete
      </button>
    </div>
  `
})

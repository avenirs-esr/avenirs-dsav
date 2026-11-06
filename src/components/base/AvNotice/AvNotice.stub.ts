import type { PropType } from 'vue'

export const AvNoticeStub = defineComponent({
  name: 'AvNoticeStub',
  props: {
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    type: {
      type: String as PropType<'info' | 'warning' | 'alert'>,
      required: true,
    },
    global: {
      type: Boolean,
      default: false,
    }
  },
  template: `
    <div
      data-testid="av-notice-stub"
      :data-title="title"
      :data-text="text"
      :data-type="type"
    />
  `,
})

import type { PropType } from 'vue'

export const AvMessageStub = defineComponent({
  name: 'AvMessage',
  props: {
    type: {
      type: String as PropType<'error' | 'success' | 'info' | 'warning'>,
      required: true
    },
    message: {
      type: Object as PropType<string | string[]>,
      required: true
    }
  },
  template: `
    <div class="av-message" :role="type === 'error' || type === 'warning' ? 'alert' : 'status'">
      <div v-for="(msg, index) in Array.isArray(message) ? message : [message]" :key="index" :class="'av-message--' + type">
        {{ msg }}
      </div>
    </div>
    `
})

import type { PropType } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export const AvButtonStub = defineComponent({
  name: 'AvButton',
  props: {
    variant: { type: String, default: 'DEFAULT' },
    theme: { type: String, default: 'PRIMARY' },
    isLoading: { type: Boolean, default: false },
    iconScale: { type: Number },
    noRadius: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    label: { type: String, required: true },
    iconOnly: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
    icon: { type: [String, Object] },
    noSentenceCase: { type: Boolean, default: false },
    to: { type: [String, Object] as PropType<string | RouteLocationRaw> | undefined, default: undefined },
  },
  emits: ['click'],
  template: `
    <a
      v-if="to"
      data-testid="av-button-stub"
      data-tag="router-link"
      :href="to"
    />
    <button
      v-else
      data-testid="av-button-stub"
      data-tag="button"
      :disabled="disabled"
      @click="$emit('click', $event)"
    >
      {{ label }}
    </button>
  `
})

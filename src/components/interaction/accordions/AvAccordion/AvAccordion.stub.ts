import { registerAccordionKey } from '@/components/interaction/accordions/injection-key'

export const AvAccordionStub = defineComponent({
  name: 'AvAccordion',
  props: ['title', 'icon', 'triggerBorderColor'],
  template: `
    <div class="av-accordion">
      <button
        :ref="setTriggerRef"
        class="av-accordion__trigger"
        type="button"
        @click="expand"
        @keydown="onKeydown"
        :aria-expanded="isActive"
      >
        <slot />
      </button>
    </div>
  `,
  setup (props) {
    const registerAccordion = inject(registerAccordionKey)

    if (!registerAccordion) {
      const isActive = ref(false)
      const expand = () => {
        isActive.value = !isActive.value
      }
      return { isActive, expand, onKeydown: () => {}, setTriggerRef: () => {} }
    }

    const { isActive, expand, onKeydown, setTriggerRef } = registerAccordion(toRef(props, 'title'))
    return { isActive, expand, onKeydown, setTriggerRef }
  },
})

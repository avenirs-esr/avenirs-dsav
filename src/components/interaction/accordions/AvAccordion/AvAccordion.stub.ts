import { registerAccordionKey } from '@/components/interaction/accordions/injection-key'

export const AvAccordionStub = defineComponent({
  name: 'AvAccordion',
  props: ['title', 'icon'],
  template: `
    <div class="av-accordion">
      <button
        class="av-accordion__btn"
        type="button"
        @click="expand"
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
      return { isActive, expand }
    }

    const { isActive, expand } = registerAccordion(toRef(props, 'title'))
    return { isActive, expand }
  },
})

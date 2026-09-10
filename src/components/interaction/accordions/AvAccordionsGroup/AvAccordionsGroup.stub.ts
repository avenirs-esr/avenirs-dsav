import { registerAccordionKey } from '@/components/interaction/accordions/injection-key'

export const AvAccordionsGroupStub = defineComponent({
  name: 'AvAccordionsGroup',
  props: {
    activeAccordion: {
      type: Number,
      required: false
    }
  },
  emits: ['update:activeAccordion'],
  template: '<div class="av-accordions-group"><slot /></div>',

  setup () {
    const activeAccordion = ref(-1)
    let currentId = 0

    provide(registerAccordionKey, () => {
      const myIndex = currentId++
      const isActive = computed(() => myIndex === activeAccordion.value)

      const expand = () => {
        activeAccordion.value
          = activeAccordion.value === myIndex ? -1 : myIndex
      }

      return {
        isActive,
        expand,
        onKeydown: () => {},
        setTriggerRef: () => {},
      }
    })
  },
})

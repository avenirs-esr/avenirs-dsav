import { h } from 'vue'

export const AvTabsStub = defineComponent({
  name: 'AvTabs',
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
    ariaLabel: String,
    compact: Boolean,
    lazyRender: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['update:modelValue'],
  setup (props, { slots, expose }) {
    const activeTab = ref(props.modelValue)

    watch(
      () => props.modelValue,
      value => activeTab.value = value
    )

    const tabItems = computed(() => slots.default?.() ?? [])

    const selectTab = (index: number) => {
      activeTab.value = index
    }

    expose({ selectTab })

    return () => {
      if (props.lazyRender) {
        return h('div', { class: 'av-tabs' }, tabItems.value[activeTab.value] ?? null)
      }

      return h('div', { class: 'av-tabs' }, tabItems.value)
    }
  },
})

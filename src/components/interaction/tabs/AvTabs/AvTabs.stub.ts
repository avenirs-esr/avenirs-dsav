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
  },
  emits: ['update:modelValue'],
  setup (props, { slots }) {
    const tabItems = computed(() => slots.default?.() ?? [])

    const activeTab = computed(() => props.modelValue ?? 0)

    return () => {
      return h('div', { class: 'av-tabs' }, tabItems.value[activeTab.value] ?? null)
    }
  },
})

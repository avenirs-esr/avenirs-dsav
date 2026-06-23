export const AvCardStub = defineComponent({
  name: 'AvCard',
  props: {
    titleOnly: { type: Boolean, default: false },
    backgroundColor: { type: String, default: 'var(--card)' },
    borderColor: { type: String, default: 'var(--stroke)' },
    titleBackground: { type: String, default: 'var(--surface-background)' },
    titleHeight: { type: String },
    collapsible: { type: Boolean, default: false },
    collapsed: { type: Boolean, default: false },
    collapseLabel: { type: String, default: 'Collapse card' },
    expandLabel: { type: String, default: 'Expand card' },
  },
  setup (props, { expose }) {
    const internalCollapsed = ref(props.collapsed)

    watch(() => props.collapsed, (value) => {
      internalCollapsed.value = value
    })

    function toggleCollapsed () {
      if (!props.collapsible) {
        return
      }

      internalCollapsed.value = !internalCollapsed.value
    }

    expose({ toggleCollapsed })

    return {
      internalCollapsed,
    }
  },
  template: `
    <div class="av-card">
      <slot name="title" :collapsed="internalCollapsed" />
      <slot />
      <slot name="body" />
      <slot name="footer" />
    </div>
  `,
})

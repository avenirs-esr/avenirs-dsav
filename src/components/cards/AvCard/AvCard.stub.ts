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
  template: `
    <div class="av-card">
      <slot name="title" :collapsed="collapsed" />
      <slot />
      <slot name="body" />
      <slot name="footer" />
    </div>
  `,
})

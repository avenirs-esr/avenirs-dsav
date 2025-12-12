export const AvCardStub = defineComponent({
  name: 'AvCard',
  props: {
    titleOnly: { type: Boolean, default: false },
    baclgroundColor: { type: String, default: 'var(--card)' },
    borderColor: { type: String, default: 'var(--stroke)' },
    titleBackground: { type: String, default: 'var(--surface-background)' },
    titleHeight: { type: String },
    collapsible: { type: Boolean, default: false },
    collapsed: { type: Boolean, default: false },
  },
  template: '<div class="av-card"><slot name="title" /><slot /></div>',
})

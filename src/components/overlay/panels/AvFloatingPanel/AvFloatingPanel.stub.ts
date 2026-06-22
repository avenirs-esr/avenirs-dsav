export const AvFloatingPanelStub = defineComponent({
  name: 'AvFloatingPanel',
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, required: false },
    icon: { type: String, required: false },
    defaultCollapsed: { type: Boolean, default: true },
    width: { type: String, default: 'var(--dimension-8xl)' },
    collapseLabel: { type: String, default: 'Collapse panel' },
    expandLabel: { type: String, default: 'Expand panel' },
  },
  template: `
    <div
      class="av-floating-panel-stub"
      :style="{ width }"
      :data-collapsed="defaultCollapsed"
    >
      <div class="av-floating-panel-stub__header">
        <span class="av-floating-panel-stub__icon">
          {{ icon ?? MDI_ICONS.CHAT_BUBBLE_OUTLINE }}
        </span>
        <span class="av-floating-panel-stub__title">{{ title }}</span>
        <span v-if="subtitle" class="av-floating-panel-stub__subtitle">{{ subtitle }}</span>
      </div>
      <slot />
    </div>
  `,
})

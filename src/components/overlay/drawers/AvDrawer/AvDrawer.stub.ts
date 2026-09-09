export const AvDrawerStub = defineComponent({
  name: 'AvDrawer',
  props: ['show', 'position', 'width'],
  emits: ['escape-pressed', 'click-outside'],
  template: `
    <div class="av-drawer-stub">
      <slot />
      <slot name="footer" />
    </div>
  `
})

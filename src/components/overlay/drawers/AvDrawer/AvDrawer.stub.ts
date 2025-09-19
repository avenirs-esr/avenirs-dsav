export const AvDrawerStub = {
  name: 'AvDrawer',
  props: ['show', 'position', 'width'],
  emits: ['escape-pressed'],
  template: '<div class="av-drawer-stub"><slot /><slot name="footer" /></div>'
}

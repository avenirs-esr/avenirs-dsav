export const AvSideNavigationStub = defineComponent({
  name: 'AvSideNavigation',
  props: {
    items: Array,
    selectedItem: {
      type: Object as () => { itemId: string, parentId?: string },
      required: true
    },
    isSideMenuCollapsed: Boolean,
    hideContentWhenCollapsed: Boolean,
    collapsedWidth: String,
    sticky: Boolean,
    stickyOffset: String,
    collapseButtonAriaLabel: String,
    expandButtonAriaLabel: String,
  },
  emits: ['update:selectedItem', 'update:isSideMenuCollapsed'],
  template: `
    <div
      class="av-side-navigation-stub"
      @click="$emit(\'update:isSideMenuCollapsed\', !isSideMenuCollapsed)"
    />
  `
})

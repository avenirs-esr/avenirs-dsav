export const AvSideNavigationStub = defineComponent({
  name: 'AvSideNavigation',
  props: {
    items: Array,
    selectedItem: {
      type: Object as () => { itemId: string, parentId?: string },
      required: true
    },
    isSideMenuCollapsed: Boolean,
    collapsedWidth: String
  },
  emits: ['update:selectedItem', 'update:isSideMenuCollapsed'],
  template: `
    <div
      class="av-side-navigation-stub"
      @click="$emit(\'update:isSideMenuCollapsed\', !isSideMenuCollapsed)"
    />
  `
})

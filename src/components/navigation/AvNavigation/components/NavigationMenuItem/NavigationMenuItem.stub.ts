export const NavigationMenuItemStub = defineComponent({
  name: 'NavigationMenuItem',
  props: {
    id: { type: String, required: false },
    active: { type: Boolean, required: false },
  },
  template: `<li class="av-menu__item"><slot /></li>`,
})

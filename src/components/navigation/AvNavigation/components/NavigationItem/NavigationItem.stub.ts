export const NavigationItemStub = defineComponent({
  name: 'NavigationItem',
  props: {
    id: { type: String, required: false },
    active: { type: Boolean, required: false },
  },
  template: `<li class="fr-nav__item"><slot /></li>`,
})

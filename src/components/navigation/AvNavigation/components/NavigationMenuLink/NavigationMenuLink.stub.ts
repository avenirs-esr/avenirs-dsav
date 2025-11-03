export const NavigationMenuLinkStub = defineComponent({
  name: 'NavigationMenuLink',
  props: {
    id: { type: String, required: false },
    activeId: { type: String, required: false },
    to: { type: String, required: false },
    text: { type: String, required: false },
    icon: { type: String, required: false },
    onClick: { type: Function, required: false },
  },
  emits: ['toggleId'],
  template: `<a class="av-nav__link" :href="to" @click.prevent="$emit('toggleId', id); onClick && onClick($event)"><slot /></a>`,
})

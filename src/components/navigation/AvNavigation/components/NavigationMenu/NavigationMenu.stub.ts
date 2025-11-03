export const NavigationMenuStub = defineComponent({
  name: 'NavigationMenu',
  props: {
    id: { type: String, required: false },
    title: { type: String, required: true },
    links: { type: Array, required: false, default: () => [] },
    expandedId: { type: String, required: false },
    active: { type: Boolean, required: false },
  },
  emits: ['toggleId'],
  template: `
    <div>
      <button class="av-nav__btn" @click="$emit('toggleId', id)">
        {{ title }}
      </button>
      <ul class="av-menu__list">
        <li v-for="link in links" :key="link.id || link.text">
          {{ link.text }}
        </li>
      </ul>
    </div>
  `,
})

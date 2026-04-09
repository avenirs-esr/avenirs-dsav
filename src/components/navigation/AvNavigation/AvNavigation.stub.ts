import type { PropType } from 'vue'
import type { NavigationMenuProps } from '@/components/navigation/AvNavigation/components/NavigationMenu/NavigationMenu.vue'
import type { NavigationMenuLinkProps } from '@/components/navigation/AvNavigation/components/NavigationMenuLink/NavigationMenuLink.vue'

export const AvNavigationStub = defineComponent({
  name: 'AvNavigation',
  props: {
    id: { type: String, default: 'nav-stub' },
    label: { type: String, default: 'Menu principal' },
    navItems: { type: Array as PropType<(NavigationMenuLinkProps | NavigationMenuProps)[]>, required: true },
  },
  template: `
    <nav :id="id" :aria-label="label" class="av-nav">
      <ul class="av-nav__list">
        <li
          v-for="(item, index) in navItems"
          :key="index"
          class="av-nav__item"
        >
          <span class="nav-item-text">{{ item.text || item.title }}</span>
          <ul v-if="item.links" class="av-nav__submenu">
            <li
              v-for="(link, linkIndex) in item.links"
              :key="linkIndex"
              class="av-nav__subitem"
            >
              <RouterLink
                :to="link.to"
                class="nav-link"
              >
                {{ link.text }}
              </RouterLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  `,
})

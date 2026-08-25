import type { PropType } from 'vue'
import type { AvSkipLinksProps } from '@/components/navigation/AvSkipLinks/AvSkipLinks.vue'

export const AvSkipLinksStub = defineComponent({
  name: 'AvSkipLinksStub',
  props: {
    skipLinks: {
      type: Array as PropType<AvSkipLinksProps['skipLinks']>,
      default: [],
    },
  },
  template: `
    <nav aria-label="Accès rapide" data-testid="av-skip-links">
      <ul>
        <li v-for="(link, index) in skipLinks" :key="index">
          <a :href="'#' + link.id">{{ link.label }}</a>
        </li>
      </ul>
    </nav>
  `,
})

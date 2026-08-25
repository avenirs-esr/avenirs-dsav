import type { PropType } from 'vue'
import type { SkipLink } from '@/components/navigation/AvSkipLinks/AvSkipLinks.types'

export const AvSkipLinksStub = defineComponent({
  name: 'AvSkipLinksStub',
  props: {
    skipLinks: {
      type: Array as PropType<SkipLink[]>,
      default: [],
    },
  },
  template: `
    <nav aria-label="Accès rapide" data-testid="av-skip-links">
      <ul>
        <li v-for="(link, index) in skipLinks" :key="index">
          <a :href="'#' + link.targetId">{{ link.label }}</a>
        </li>
      </ul>
    </nav>
  `,
})

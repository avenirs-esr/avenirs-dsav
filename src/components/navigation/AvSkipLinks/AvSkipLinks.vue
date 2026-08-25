<script setup lang="ts">
import type { SkipLink } from '@/components/navigation/AvSkipLinks/AvSkipLinks.types'

export interface AvSkipLinksProps {
  /**
   * Skip links configuration for accessibility.
   * @default []
   */
  skipLinks?: SkipLink[]
}

const { skipLinks = [] } = defineProps<AvSkipLinksProps>()
</script>

<template>
  <nav
    v-if="skipLinks.length > 0"
    class="av-col av-skip-links"
    data-testid="skip-links"
  >
    <ul class="av-list-reset av-row av-gap-sm av-px-sm av-py-xs">
      <li
        v-for="link in skipLinks"
        :key="link.targetId"
      >
        <a
          :href="`#${link.targetId}`"
          class="av-button av-button--primary av-button--sm"
        >
          {{ link.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.av-skip-links {
  position: relative;
  z-index: 1000;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s;
}

.av-skip-links:focus-within {
  max-height: var(--dimension-5xl);
}

@media (prefers-reduced-motion: reduce) {
  .av-skip-links { transition: none; }
}
</style>

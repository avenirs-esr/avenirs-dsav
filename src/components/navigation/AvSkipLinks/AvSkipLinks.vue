<script setup lang="ts">
import AvButton from '@/components/interaction/buttons/AvButton/AvButton.vue'

export interface SkipLink {
  /**
   * The ID of the target element to skip to.
   */
  id: string

  /**
   * The label for the skip link.
   */
  label: string
}

export interface AvSkipLinksProps {
  /**
   * Skip links configuration for accessibility.
   * - @type {Array<{ id: string; label: string }>}
   * - @default []
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
        :key="link.id"
      >
        <AvButton
          :label="link.label"
          :to="`#${link.id}`"
        />
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

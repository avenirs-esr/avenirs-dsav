<script lang="ts" setup>
import AvButton from '@/components/interaction/buttons/AvButton/AvButton.vue'

/**
 * AvHeaderMenuLinks component props.
 */
export interface AvHeaderMenuLinksProps {
  /**
   * An array of objects representing quick links.
   * Each link can have an icon, a label, and an onClick function.
   */
  links?: {
    /**
     * Icon name as defined in Iconify.
     */
    icon?: string

    /**
     * Link label.
     */
    label?: string

    /**
     * Function called when the link is clicked.
     * @param event The MouseEvent of the click.
     */
    onClick?: ($event: MouseEvent) => void
  }[]

  /**
   * ARIA label for navigation, useful for accessibility.
   * @default 'Menu secondaire'
   */
  navAriaLabel?: string
}

withDefaults(defineProps<AvHeaderMenuLinksProps>(), {
  navAriaLabel: 'Menu secondaire',
})

/**
 * Events triggered by AvHeaderMenuLinks.
 */
const emit = defineEmits<{
  /**
   * Event triggered when a link is clicked.
   * @event linkClick
   * @param event The MouseEvent of the click.
   */
  linkClick: [event: MouseEvent]
}>()
</script>

<template>
  <nav
    role="navigation"
    :aria-label="navAriaLabel"
  >
    <ul
      class="av-btns-group"
    >
      <li
        v-for="(quickLink, index) in links"
        :key="index"
      >
        <AvButton
          :icon="quickLink.icon"
          :label="quickLink.label ?? ''"
          @click="($event: MouseEvent) => {
            emit('linkClick', $event)
            quickLink.onClick?.($event)
          }"
        />
      </li>
    </ul>
  </nav>
</template>

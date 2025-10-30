<script lang="ts" setup>
import NavigationMenuItem from '@/components/navigation/AvNavigation/components/NavigationMenuItem/NavigationMenuItem.vue'
import NavigationMenuLink, { type NavigationMenuLinkProps } from '@/components/navigation/AvNavigation/components/NavigationMenuLink/NavigationMenuLink.vue'
import { useAvBreakpoints } from '@/composables'
import { useCollapsable } from '@/composables/use-collapsable/use-collapsable'

/**
 * NavigationMenu component props.
 */
export interface NavigationMenuProps {
  /**
   * The unique identifier for the navigation menu.
   * @default `menu-${crypto.randomUUID()}`
   */
  id?: string

  /**
   * The title displayed on the navigation menu button.
   */
  title: string

  /**
   * A table of objects representing the links in the navigation menu.
   */
  links?: NavigationMenuLinkProps[]

  /**
   * The identifier of the currently expanded navigation menu.
   * @default `expanded-${crypto.randomUUID()}`
   */
  expandedId?: string

  /**
   * Indicates if the navigation menu is currently active.
   */
  active?: boolean
}

const {
  id = `menu-${crypto.randomUUID()}`,
  title,
  links,
  expandedId = `expanded-${crypto.randomUUID()}`,
  active,
} = defineProps<NavigationMenuProps>()

/**
 * Emits for NavigationMenu component.
 */
defineEmits<{
  /**
   * Emitted when the navigation menu button is clicked to toggle its expanded state.
   * @param id - The unique identifier of the navigation menu.
   */
  (event: 'toggleId', id: string): void
}>()

const {
  collapse,
  collapsing,
  cssExpanded,
  doExpand,
  onTransitionEnd,
} = useCollapsable()

const expanded = computed(() => id === expandedId)

const { isBelowLg } = useAvBreakpoints()

watch(expanded, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    doExpand(newValue)
  }
})

onMounted(() => {
  if (expanded.value) {
    doExpand(true)
  }
})
</script>

<template>
  <button
    class="fr-nav__btn"
    :class="{
      'av-nav__btn--compact': isBelowLg,
    }"
    :aria-expanded="expanded"
    :aria-current="active || undefined"
    :aria-controls="id"
    @click="$emit('toggleId', id)"
  >
    <span>{{ title }}</span>
  </button>
  <div
    :id="id"
    ref="collapse"
    class="fr-collapse fr-menu"
    data-testid="navigation-menu"
    :class="{ 'fr-collapse--expanded': cssExpanded, 'fr-collapsing': collapsing }"
    @transitionend="onTransitionEnd(expanded)"
  >
    <ul
      class="fr-menu__list"
    >
      <NavigationMenuItem
        v-for="(link, index) of links"
        :key="index"
      >
        <NavigationMenuLink
          v-bind="link"
          @toggle-id="$emit('toggleId', expandedId)"
        />
      </NavigationMenuItem>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.fr-nav__btn {
  border-radius: 1.5rem 1.5rem var(--radius-none) var(--radius-none);
}

.av-nav__btn--compact {
  border-radius: var(--radius-none);
}
</style>

<script lang="ts" setup>
import NavigationMenuItem from '@/components/navigation/AvNavigation/components/NavigationMenuItem/NavigationMenuItem.vue'
import NavigationMenuLink, { type NavigationMenuLinkProps } from '@/components/navigation/AvNavigation/components/NavigationMenuLink/NavigationMenuLink.vue'
import { useCollapsable } from '@/composables/use-collapsable/use-collapsable'
import { ICONS_DATA_URL } from '@/tokens/icons'

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
   */
  expandedId?: string

  /**
   * Indicates if the navigation menu is currently active.
   */
  active?: boolean
}

const {
  id,
  title,
  links,
  expandedId,
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
  (event: 'toggleId', id: string | undefined): void
}>()

const {
  collapse,
  collapsing,
  cssExpanded,
  doExpand,
  onTransitionEnd,
} = useCollapsable()

const realId = computed(() => id ?? `menu-${crypto.randomUUID()}`)
const expanded = computed(() => realId.value === expandedId)

const styleVars = computed(() => ({
  '--icon-path': `url(${ICONS_DATA_URL.MDI_KEYBOARD_ARROW_DOWN})`,
}))

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
    class="av-nav__btn"
    :aria-expanded="expanded"
    :aria-current="active || undefined"
    :aria-controls="realId"
    :style="styleVars"
    @click="$emit('toggleId', realId)"
  >
    <span>{{ title }}</span>
  </button>
  <div
    :id="realId"
    ref="collapse"
    class="av-collapse av-menu"
    data-testid="navigation-menu"
    :class="{ 'av-collapse--expanded': cssExpanded, 'av-collapsing': collapsing }"
    @transitionend="onTransitionEnd(expanded)"
  >
    <ul
      class="av-menu__list"
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
@use '@/styles/settings/breakpoints' as *;

.av-nav__btn {
  border-radius: var(--radius-2xl) var(--radius-2xl) var(--radius-none) var(--radius-none);

  &::after {
    background-color: currentColor;
    content: "";
    display: inline-block;
    flex: 0 0 auto;
    height: var(--dimension-sm);
    margin-left: .5rem;
    margin-right:0;
    -webkit-mask-image: var(--icon-path);
    mask-image: var(--icon-path);
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
    transition: transform .3s;
    vertical-align: calc((.75em - var(--dimension-sm))*.5);
    width: var(--dimension-sm);
  }

  &[aria-current]:not([aria-current=false]) {
    color: var(--dark-background-primary1);

    &::before {
      background-color: var(--dark-background-primary1);
    }
  }

  &[aria-expanded=true] {
    background-color: var(--light-background-primary1);
    color: var(--dark-background-primary1);

    &::after {
      transform: rotate(180deg);
    }

    &:disabled {
      background-color: var(--light-background-neutral);
      color: var(--dark-background-neutral);
    }
  }

  @include max-width(lg) {
    border-radius: var(--radius-none);
  }
}

span {
  color: inherit;
}
</style>

<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'
import { hasInjectionContext } from 'vue'
import { registerNavigationLinkKey } from '@/components/header/AvHeader/injection-key'
import { useAvBreakpoints } from '@/composables'

/**
 * NavigationMenuLink component props.
 */
export interface NavigationMenuLinkProps {
  /**
   * The unique identifier for the navigation menu link.
   * @default `menu-link-${crypto.randomUUID()}`
   */
  id?: string

  /**
   * The active identifier for the navigation menu link.
   */
  activeId?: string

  /**
   * The target route or URL for the navigation menu link.
   * @default `'#'`
   */
  to?: string | RouteLocationRaw

  /**
   * The text displayed for the navigation menu link.
   * @default `''`
   */
  text?: string

  /**
   * The icon associated with the navigation menu link. It must follow the Iconify naming conventions.
   */
  icon?: string

  /**
   * Optional click event handler for the navigation menu link.
   */
  onClick?: ($event: MouseEvent) => void
}

const {
  id,
  to = '#',
  text = '',
  icon,
  onClick = () => undefined,
} = defineProps<NavigationMenuLinkProps>()

/**
 * Emits for NavigationMenuLink component.
 */
defineEmits<{
  /**
   * Emitted when the navigation menu link is clicked, passing the link's unique identifier.
   * @param id - The unique identifier of the navigation menu link.
   */
  (event: 'toggleId', id: string): void
}>()

const { isBelowLg } = useAvBreakpoints()

const realId = computed(() => id ?? `menu-link-${crypto.randomUUID()}`)

const isExternal = computed(() => typeof to === 'string' && to.startsWith('http'))

const useHeader = hasInjectionContext() ? inject(registerNavigationLinkKey)! : undefined
const closeModal = useHeader?.() ?? (() => {})
</script>

<template>
  <a
    v-if="isExternal"
    class="av-nav__link"
    :class="{
      'av-nav__link--active': activeId === realId,
      'av-nav__link--compact': isBelowLg,
    }"
    data-testid="nav-external-link"
    :href="(to as string)"
    @click="$emit('toggleId', realId); onClick($event)"
  >
    <span class="b1-regular">{{ text }}</span>
  </a>
  <RouterLink
    v-else
    class="av-nav__link"
    data-testid="nav-router-link"
    :to="to"
    @click="closeModal(); $emit('toggleId', realId); onClick?.($event)"
  >
    <AvIcon
      v-if="icon"
      :name="icon"
      :size="1.5"
    />
    <span class="b1-regular">{{ text }}</span>
  </RouterLink>
</template>

<style lang="scss" scoped>
.av-nav__link {
  display: flex;
  gap: var(--spacing-xs);
  justify-content: flex-start;
  border-radius: 1.5rem 1.5rem var(--radius-none) var(--radius-none);
}

.av-nav__link--compact {
  border-radius: var(--radius-none);
}

.b1-regular {
  color: inherit;
}
</style>

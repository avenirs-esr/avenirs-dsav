<script setup lang="ts">
import type { Slot } from 'vue'
import AvButton from '@/components/interaction/buttons/AvButton/AvButton.vue'
import { MDI_ICONS } from '@/tokens'

export interface AvSideMenuProps {
  /**
   * Unique identifier for the side-menu
   */
  id?: string
  /**
   * Whether the collapsing feature is enabled
   */
  collapsible?: boolean
  /**
   * Whether the side-menu is collapsed (for v-model usage)
   * @default false
   */
  collapsed?: boolean
  /**
   * Width of the side-menu when expanded
   */
  width?: string
  /**
   * Width of the side-menu when collapsed
   */
  collapsedWidth?: string

  /**
   * Custom padding for the side-menu content
   */
  padding?: string

  /**
   * Whether to hide the content when the menu is collapsed
   * @default false
   */
  hideContentWhenCollapsed?: boolean

  /**
   * Whether the side-menu should be sticky (fixed position)
   * If true, the side-menu will remain visible while scrolling the page.
   * The `stickyOffset` prop can be used to adjust the distance from the top of the viewport when the menu becomes sticky.
   * @default false
   */
  sticky?: boolean

  /**
   * Offset from the top of the viewport when the menu becomes sticky (e.g., '0', '1rem', '50px', var(--spacing-lg), etc.).
   * This prop is only applicable if `sticky` is set to true.
   * @default '0'
   */
  stickyOffset?: string

  /**
   * Aria label for the collapse button.
   * @default 'Collapse button'
   */
  collapseButtonAriaLabel?: string

  /**
   * Aria label for the expand button.
   * @default 'Expand button'
   */
  expandButtonAriaLabel?: string
}

const props = withDefaults(defineProps<AvSideMenuProps>(), {
  collapsible: true,
  collapsed: false,
  width: '16rem',
  collapsedWidth: '5rem',
  padding: '0',
  hideContentWhenCollapsed: false,
  sticky: false,
  stickyOffset: '0',
  collapseButtonAriaLabel: 'Collapse button',
  expandButtonAriaLabel: 'Expand button'
})

/**
 * Events emitted by the component.
 */
defineEmits<{
  /**
   * Emitted when collapsed state changes.
   * @param value Value (boolean`) - New collapsed state
   */
  'update:collapsed': [value: boolean]
}>()

/**
 * Slots available for the component.
 *
 * @slot title - Slot for custom title content.
 * @slot default - Slot for custom content (menu items, etc.).
 */
defineSlots<{
  /**
   * Slot for custom content (menu items, etc.)
   */
  default?: Slot
}>()

const collapsed = defineModel<boolean>('collapsed', { default: false })

const { width, collapsedWidth, stickyOffset } = toRefs(props)

const menuId = props.id ?? crypto.randomUUID()
const ariaLabel = computed(() => `${menuId} navigation`)

const isCollapsed = computed({
  get: () => {
    if (!props.collapsible) {
      return false
    }
    return collapsed.value
  },
  set: (value) => {
    if (!props.collapsible) {
      return
    }
    collapsed.value = value
  }
})

const currentWidth = computed(() => {
  return (props.collapsible && isCollapsed.value) ? collapsedWidth.value : width.value
})

function toggleCollapse () {
  if (props.collapsible) {
    isCollapsed.value = !isCollapsed.value
  }
}
</script>

<template>
  <nav
    :id="menuId"
    class="av-side-menu av-col av-h-full"
    :class="{ 'av-side-menu--collapsed': isCollapsed,
              'av-side-menu--sticky': sticky }"
    :aria-label="ariaLabel"
    data-testid="av-side-menu"
    :data-collapsed="isCollapsed"
  >
    <div
      v-if="collapsible"
      class="av-side-menu__header av-row av-align-center av-justify-end"
      data-testid="av-side-menu-header"
    >
      <AvButton
        :aria-expanded="!isCollapsed"
        :aria-controls="menuId"
        :icon="isCollapsed ? MDI_ICONS.CHEVRON_DOUBLE_RIGHT : MDI_ICONS.CHEVRON_DOUBLE_LEFT"
        class="av-side-menu__collapse-button av-p-xs av-m-xs av-gap-none"
        :label="isCollapsed ? expandButtonAriaLabel : collapseButtonAriaLabel"
        icon-only
        data-testid="side-menu-collapse-button"
        @click="toggleCollapse"
      />
    </div>

    <div
      v-if="!(hideContentWhenCollapsed && collapsed)"
      class="av-side-menu__content av-row av-flex-fill av-py-sm"
      data-testid="av-side-menu-content"
    >
      <slot />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.av-side-menu {
  width: v-bind('currentWidth');
  min-width: v-bind('currentWidth');
  max-width: v-bind('currentWidth');
  background-color: var(--other-background-base);
  transition: width 0.3s ease;
  border-right: 1px solid var(--stroke);
  padding: v-bind('padding');
}

.av-side-menu__header {
  min-height: var(--dimension-4xl);
}

.av-side-menu__content {
  overflow-y: auto;
}

.av-side-menu__collapse-button {
  min-height: var(--dimension-lg);
}

.av-side-menu--sticky {
  position: sticky;
  top: v-bind('stickyOffset');
  align-self: flex-start;
  flex-shrink: 0;
}
</style>

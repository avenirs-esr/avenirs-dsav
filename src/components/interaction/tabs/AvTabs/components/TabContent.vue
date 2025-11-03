<script setup lang="ts">
import { useTabTransition } from '@/components/interaction/tabs/AvTabs/composables/use-tab-transition'

/**
 * TabContent component props.
 */
export interface TabContentProps {
  /**
   * ID of the associated tab panel.
   */
  panelId: string

  /**
   * ID of the tab item.
   */
  tabId: string

  /**
   * Whether the tab content is visible.
   */
  isVisible: boolean

  /**
   * Direction of the tab transition animation.
   * True for ascending (left to right), false for descending (right to left).
   */
  asc: boolean
}
const props = defineProps<TabContentProps>()

defineSlots<{
  /**
   * Default slot for passing tab panel content.
   */
  default: () => unknown
}>()

const { translateValueFrom, translateValueTo } = useTabTransition(toRef(props, 'asc'))
</script>

<template>
  <Transition
    name="slide-fade"
    mode="in-out"
  >
    <div
      v-show="isVisible"
      :id="panelId"
      class="av-tab-content"
      :class="{
        'av-tab-content--selected': isVisible,
      }"
      role="tabpanel"
      :aria-labelledby="tabId"
      :tabindex="isVisible ? 0 : -1"
    >
      <slot />
    </div>
  </Transition>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from {
  transform: translateX(v-bind(translateValueFrom));
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(v-bind(translateValueTo));
  opacity: 0;
}

.av-tab-content {
  padding: var(--spacing-sm) var(--spacing-none) !important;
}
</style>

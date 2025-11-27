<script setup lang="ts">
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
}
defineProps<TabContentProps>()

defineSlots<{
  /**
   * Default slot for passing tab panel content.
   */
  default: () => unknown
}>()
</script>

<template>
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
</template>

<style lang="scss" scoped>
.av-tab-content {
  padding: var(--spacing-sm) var(--spacing-none) !important;
}
</style>

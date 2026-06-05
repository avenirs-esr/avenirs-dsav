<script setup lang="ts">
import type { Slot } from 'vue'
import AvIconText from '@/components/base/AvIconText/AvIconText.vue'
import AvCard from '@/components/cards/AvCard/AvCard.vue'
import { MDI_ICONS } from '@/tokens'

/**
 * AvFloatingPanel component props.
 */
export interface AvFloatingPanelProps {
  /**
   * Title displayed in the panel header.
   */
  title: string

  /**
   * Subtitle displayed in the panel header.
   */
  subtitle?: string

  /**
   * Icon name (MDI or other iconify icon) displayed next to the title.
   */
  icon?: string

  /**
   * Controls the initial collapsed state of the panel.
   * @default true
   */
  defaultCollapsed?: boolean

  /**
   * Width of the panel.
   * @default 'var(--dimension-8xl)'
   */
  width?: string
}

const {
  title,
  subtitle,
  icon,
  defaultCollapsed = true,
  width = 'var(--dimension-8xl)',
} = defineProps<AvFloatingPanelProps>()

/**
 * Slots available in AvFloatingPanel.
 */
defineSlots<{
  /**
   * Main content of the panel.
   */
  default?: Slot
}>()
</script>

<template>
  <div
    class="av-floating-panel av-floating-right"
    data-testid="av-floating-panel"
  >
    <AvCard
      collapsible
      :collapsed="defaultCollapsed"
      role="region"
      :aria-label="title"
      data-testid="av-floating-panel-card"
    >
      <template #title>
        <div
          class="av-row av-gap-sm av-align-end"
          data-testid="av-floating-panel-title"
        >
          <div class="av-flex-fill">
            <AvIconText
              :icon="icon ?? MDI_ICONS.CHAT_BUBBLE_OUTLINE"
              :text="title"
              icon-color="var(--dark-background-primary1)"
              text-color="var(--dark-background-primary1)"
              gap="var(--spacing-sm)"
              typography-class="s1-regular"
            />
          </div>
          <div v-if="subtitle">
            <span
              class="av-max-lines av-text-primary1 s2-light"
              style="--max-lines: 1;"
              data-testid="av-floating-panel-subtitle"
            >
              {{ subtitle }}
            </span>
          </div>
        </div>
      </template>

      <div data-testid="av-floating-panel-content">
        <slot />
      </div>
    </AvCard>
  </div>
</template>

<style lang="scss" scoped>
.av-floating-panel {
  width: v-bind('width');
}
</style>

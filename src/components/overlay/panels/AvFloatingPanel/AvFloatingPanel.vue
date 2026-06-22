<script setup lang="ts">
import type { Slot } from 'vue'
import AvIconText from '@/components/base/AvIconText/AvIconText.vue'
import AvCard from '@/components/cards/AvCard/AvCard.vue'
import AvTooltip from '@/components/overlay/tooltips/AvTooltip/AvTooltip.vue'
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

  /**
   * ARIA label for the collapse button when the panel is expanded.
   * @default 'Collapse panel'
   */
  collapseLabel?: string

  /**
   * ARIA label for the expand button when the panel is collapsed.
   * @default 'Expand panel'
   */
  expandLabel?: string
}

const {
  title,
  subtitle,
  icon,
  defaultCollapsed = true,
  width = 'var(--dimension-8xl)',
  collapseLabel = 'Collapse panel',
  expandLabel = 'Expand panel',
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
      :collapse-label="collapseLabel"
      :expand-label="expandLabel"
      data-testid="av-floating-panel-card"
    >
      <template #title>
        <div
          class="av-row av-gap-sm av-align-center av-flex-fill av-wrap-anywhere"
          data-testid="av-floating-panel-title"
        >
          <div class="av-row">
            <AvIconText
              :icon="icon ?? MDI_ICONS.CHAT_BUBBLE_OUTLINE"
              :text="title"
              icon-color="var(--dark-background-primary1)"
              text-color="var(--dark-background-primary1)"
              gap="var(--spacing-sm)"
              typography-class="n6"
              inline
            />
          </div>
          <div
            v-if="subtitle"
            class="av-flex-fill av-wrap-anywhere"
          >
            <AvTooltip
              :content="subtitle"
              force-focusable
            >
              <span
                class="av-max-lines av-text-primary1 s2-light"
                style="--max-lines: 1;"
                data-testid="av-floating-panel-subtitle"
              >
                {{ subtitle }}
              </span>
            </AvTooltip>
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
@use '@/styles/settings/breakpoints' as *;

@include max-width(md) {
  .av-floating-panel {
    width: 100%;
    bottom: 0 !important;
    left: 0 !important;
    right: 0 !important;
  }
}

@include min-width(md) {
  .av-floating-panel {
    width: v-bind('width');
  }
}
</style>

<script setup lang="ts">
import { nextTick, type Slot, useAttrs } from 'vue'
import { useTooltipPosition } from '@/composables'

/**
 * AvTooltip component props
 */
export interface AvTooltipProps {
  /**
   * Tooltip text content.
   */
  content: string

  /**
   * Indicates if the tooltip is disabled.
   * @default false
   */
  disabled?: boolean

  /**
   * Forces keyboard focusability on the tooltip trigger when slot content is not focusable by default.
   * @default false
   */
  forceFocusable?: boolean
}

const { content, disabled = false, forceFocusable = false } = defineProps<AvTooltipProps>()

defineSlots<{
  /**
   * Trigger content that will reveal the tooltip on hover/focus.
   */
  default: Slot
}>()

const attrs = useAttrs()

const {
  placement,
  tooltipStyle,
  update,
  reset,
} = useTooltipPosition()

const isVisible = ref(false)

const triggerRef = ref<HTMLElement>()
const tooltipRef = ref<HTMLElement>()

async function showTooltip () {
  if (disabled) {
    return
  }

  isVisible.value = true

  await nextTick()

  if (!triggerRef.value || !tooltipRef.value) {
    return
  }

  await update(triggerRef.value, tooltipRef.value)
}

function hideTooltip () {
  isVisible.value = false
  reset()
}

function handleScroll () {
  if (!isVisible.value) {
    return
  }

  hideTooltip()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, true)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll, true)
})
</script>

<template>
  <slot v-if="disabled" />

  <template v-else>
    <span
      v-bind="attrs"
      class="av-tooltip-wrapper"
      data-testid="av-tooltip-wrapper"
      @focusin="showTooltip"
      @focusout="hideTooltip"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
    >
      <span
        ref="triggerRef"
        class="av-tooltip-trigger"
        :tabindex="forceFocusable ? 0 : undefined"
      >
        <slot />
      </span>
    </span>

    <Teleport to="body">
      <span
        v-if="isVisible"
        ref="tooltipRef"
        class="caption-regular av-tooltip av-radius-md"
        :style="tooltipStyle"
        role="tooltip"
        :data-placement="placement"
        data-testid="av-tooltip"
      >
        {{ content }}
      </span>
    </Teleport>
  </template>
</template>

<style scoped>
.av-tooltip-wrapper {
  position: relative;
}

.av-tooltip-trigger {
  display: inline-flex;
  align-items: center;
}

.av-tooltip {
  z-index: 9999;
  width: max-content;
  max-width: min(var(--dimension-8xl), calc(90vw - var(--dimension-lg)));
  padding: var(--spacing-xs) var(--spacing-sm);
  color: var(--dark-background-primary1);
  background: var(--light-background-primary1);
  white-space: normal;
  overflow-wrap: anywhere;
  pointer-events: none;
}

.av-tooltip::after {
  content: '';
  position: absolute;
  left: var(--arrow-left);
  transform: translateX(-50%);
  width: 0;
  height: 0;
}

.av-tooltip[data-placement="top"]::after {
  top: 100%;
  border-left: 0.5rem solid transparent;
  border-right: 0.5rem solid transparent;
  border-top: 0.5rem solid var(--light-background-primary1);
}

.av-tooltip[data-placement="bottom"]::after {
  bottom: 100%;
  border-left: 0.5rem solid transparent;
  border-right: 0.5rem solid transparent;
  border-bottom: 0.5rem solid var(--light-background-primary1);
}
</style>

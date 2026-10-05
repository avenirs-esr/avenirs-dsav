<script setup lang="ts">
import { nextTick, type Slot, useAttrs } from 'vue'
import { useTooltipPosition } from '@/composables/use-tooltip-position/use-tooltip-position'
import { useTooltipVisibilityCoordination } from '@/composables/use-tooltip-visibility-coordination/use-tooltip-visibility-coordination'

/**
 * AvTooltip component props
 */
export interface AvTooltipProps {
  /**
   * Tooltip text content.
   */
  content: string | undefined

  /**
   * Indicates if the tooltip is disabled.
   * @default false
   */
  disabled?: boolean

  /**
   * Makes the tooltip wrapper and trigger fill their available width.
   * @default false
   */
  fullWidth?: boolean

  /**
   * Forces keyboard focusability on the tooltip trigger when slot content is not focusable by default.
   * @default false
   */
  forceFocusable?: boolean

  /**
   * Aria label for the tooltip trigger element.
   */
  triggerAriaLabel?: string

  /**
   * Custom padding for the tooltip content in rem.
   * @default 0.75
   */
  paddingRem?: number
}

const { content, disabled = false, fullWidth = false, forceFocusable = false, paddingRem = 0.75 } = defineProps<AvTooltipProps>()

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

const isTriggered = ref(false)
const { shouldShow } = useTooltipVisibilityCoordination(isTriggered)

function isFocusVisible (event: FocusEvent): boolean {
  const target = event.target

  if (!(target instanceof HTMLElement)) {
    return false
  }

  try {
    return target.matches(':focus-visible')
  }
  catch {
    return true
  }
}

function setTriggered (value: boolean) {
  isTriggered.value = value && !disabled && !!content
}

function handleMouseEnter () {
  setTriggered(true)
}

function handleMouseLeave () {
  setTriggered(false)
}

function handleFocusIn (event: FocusEvent) {
  if (isFocusVisible(event)) {
    setTriggered(true)
  }
}

function handleFocusOut () {
  setTriggered(false)
}

function handleScroll () {
  if (!isVisible.value) {
    return
  }

  setTriggered(false)
}

watch(shouldShow, async (visible) => {
  isVisible.value = visible

  if (!visible) {
    reset()
    return
  }

  await nextTick()

  if (!triggerRef.value || !tooltipRef.value) {
    return
  }

  await update(triggerRef.value, tooltipRef.value, paddingRem)
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll, true)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll, true)
})
</script>

<template>
  <slot v-if="disabled || !content" />

  <template v-else>
    <span
      v-bind="attrs"
      class="av-tooltip-wrapper"
      :class="{ 'av-tooltip-wrapper--full-width': fullWidth }"
      data-testid="av-tooltip-wrapper"
      @focusin="handleFocusIn"
      @focusout="handleFocusOut"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <span
        ref="triggerRef"
        class="av-tooltip-trigger"
        :class="{ 'av-tooltip-trigger--full-width': fullWidth }"
        :aria-label="triggerAriaLabel"
        :tabindex="forceFocusable ? 0 : undefined"
        :role="triggerAriaLabel ? 'img' : undefined"
      >
        <slot />
      </span>
    </span>

    <Teleport to="body">
      <span
        v-if="isVisible"
        ref="tooltipRef"
        class="caption-bold av-tooltip av-radius-md"
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
  display: inline-flex;
  width: fit-content;
}

.av-tooltip-wrapper--full-width {
  display: flex;
  width: 100%;
}

.av-tooltip-trigger {
  display: inline-flex;
  align-items: center;
}

.av-tooltip-trigger--full-width {
  display: flex;
  width: 100%;
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

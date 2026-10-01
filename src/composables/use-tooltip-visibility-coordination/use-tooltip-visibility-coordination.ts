import type { InjectionKey, Ref } from 'vue'

/**
 * Context interface for coordinating the visibility of nested AvTooltip instances.
 * This interface defines the contract for notifying parent tooltips about the active state of their descendants.
 */
interface AvTooltipContext {
  /**
   * Notifies the parent tooltip about the active state of this descendant tooltip.
   * @param active - Whether the descendant tooltip is currently active.
   * @returns void
   */
  notifyActive: (active: boolean) => void
}

const AV_TOOLTIP_CONTEXT_KEY: InjectionKey<AvTooltipContext> = Symbol('av-tooltip-context')

/**
 * Coordinates nested/overlapping AvTooltip instances so that only the most specific
 * (deepest) hovered/focused tooltip is shown at a time. When a descendant tooltip stops
 * being active, ancestor tooltips automatically become visible again if still triggered.
 * @param isTriggered - Whether this tooltip's own trigger is currently hovered or focused.
 * @returns An object containing `shouldShow`, reflecting whether this tooltip should be displayed.
 */
export function useTooltipVisibilityCoordination (isTriggered: Ref<boolean>) {
  const hasActiveDescendant = ref(false)

  const isActive = computed(() => isTriggered.value || hasActiveDescendant.value)
  const shouldShow = computed(() => isTriggered.value && !hasActiveDescendant.value)

  const parentContext = inject(AV_TOOLTIP_CONTEXT_KEY, null)

  watch(isActive, value => parentContext?.notifyActive(value))

  provide(AV_TOOLTIP_CONTEXT_KEY, {
    notifyActive: (active: boolean) => {
      hasActiveDescendant.value = active
    },
  })

  return { shouldShow }
}

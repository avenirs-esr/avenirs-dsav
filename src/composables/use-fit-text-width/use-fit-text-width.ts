import type { MaybeRefOrGetter, Ref } from 'vue'
import { toValue } from 'vue'

export interface UseFitTextWidthOptions {
  /** Element whose width constrains the text. Defaults to the text element's parent. */
  container?: MaybeRefOrGetter<HTMLElement | null | undefined>
  enabled?: MaybeRefOrGetter<boolean>
}

/**
 * Fits a plain-text element to its longest displayed line.
 * Restores its original inline width when disabled, replaced or unmounted.
 * Call refresh when external styles affecting the text or its available width change.
 * The container must have a width independent of the fitted text; provide it
 * explicitly when the parent does not satisfy this requirement.
 *
 * @example Basic usage in a Vue component
 * ```vue
 * <script setup lang="ts">
 * import { ref } from 'vue'
 * import { useFitTextWidth } from '@avenirs-esr/avenirs-dsav'
 *
 * const textRef = ref<HTMLElement>()
 * useFitTextWidth(textRef)
 * </script>
 *
 * <template>
 *   <div>
 *     <span ref="textRef">Text that can wrap onto several lines</span>
 *   </div>
 * </template>
 * ```
 *
 * @example Enable fitting conditionally and refresh after a style change
 * ```ts
 * const fittingEnabled = ref(true)
 * const { refresh } = useFitTextWidth(textRef, {
 *   container: containerRef,
 *   enabled: fittingEnabled,
 * })
 *
 * // After changing styles that affect text layout:
 * refresh()
 * ```
 *
 * @example You can also find a more complex example in AvBadge component
 *
 */
export function useFitTextWidth (
  elementRef: Ref<HTMLElement | null | undefined>,
  options: UseFitTextWidthOptions = {}
) {
  let resizeObserver: ResizeObserver | undefined
  let mutationObserver: MutationObserver | undefined
  let frame: number | undefined
  let observedElement: HTMLElement | null = null
  let originalWidth = ''
  let originalPriority = ''

  function restoreWidth () {
    if (observedElement) {
      if (originalWidth) {
        observedElement.style.setProperty('width', originalWidth, originalPriority)
      }
      else {
        observedElement.style.removeProperty('width')
      }
    }
  }

  function refresh () {
    if (frame !== undefined) {
      cancelAnimationFrame(frame)
    }

    frame = requestAnimationFrame(() => {
      frame = undefined
      const element = observedElement
      if (!element) {
        return
      }

      restoreWidth()
      if (!toValue(options.enabled ?? true)) {
        return
      }

      const range = document.createRange()
      range.selectNodeContents(element)
      const lines = Array.from(range.getClientRects()).filter(rect => rect.width > 0)
      if (lines.length > 1) {
        element.style.width = `${Math.ceil(Math.max(...lines.map(rect => rect.width)))}px`
      }
    })
  }

  function observe () {
    resizeObserver?.disconnect()
    mutationObserver?.disconnect()
    if (observedElement !== elementRef.value) {
      restoreWidth()
      observedElement = elementRef.value ?? null
      originalWidth = observedElement?.style.getPropertyValue('width') ?? ''
      originalPriority = observedElement?.style.getPropertyPriority('width') ?? ''
    }
    if (!observedElement) {
      return
    }

    resizeObserver = new ResizeObserver(refresh)
    const container = options.container === undefined
      ? observedElement.parentElement
      : toValue(options.container)
    if (container) {
      resizeObserver.observe(container)
    }

    mutationObserver = new MutationObserver(refresh)
    mutationObserver.observe(observedElement, { childList: true, characterData: true, subtree: true })
    refresh()
  }

  watch([elementRef, () => toValue(options.container)], observe, { flush: 'post' })
  watch(() => toValue(options.enabled ?? true), refresh, { flush: 'post' })

  onMounted(() => {
    observe()
    window.addEventListener('resize', refresh)
    document.fonts?.addEventListener('loadingdone', refresh)
  })

  onBeforeUnmount(() => {
    resizeObserver?.disconnect()
    mutationObserver?.disconnect()
    window.removeEventListener('resize', refresh)
    document.fonts?.removeEventListener('loadingdone', refresh)
    if (frame !== undefined) {
      cancelAnimationFrame(frame)
    }
    restoreWidth()
  })

  return { refresh }
}

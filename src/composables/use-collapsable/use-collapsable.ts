import type { Ref } from 'vue'

/**
 * Return type of the {@link useCollapsable} composable.
 *
 * This composable provides a reactive API to manage a collapsible section
 * (expand/collapse behavior) in sync with ref CSS-based collapse system.
 *
 * It exposes the current state (`collapsing`, `cssExpanded`),
 * DOM reference (`collapse`), and imperative methods to adjust or toggle
 * the collapsible container.
 */
export interface UseCollapsableReturn {
  /**
   * Reference to the collapsible container element.
   * Should be bound via `ref="collapse"` in the template.
   */
  collapse: Ref<HTMLElement | undefined>

  /**
   * Indicates whether a transition (expand/collapse animation)
   * is currently in progress.
   */
  collapsing: Ref<boolean>

  /**
   * Reflects the final expanded/collapsed CSS state.
   * True if the section is expanded, false if collapsed.
   */
  cssExpanded: Ref<boolean>

  /**
   * Programmatically toggles expansion or collapse of the container.
   *
   * This method updates internal CSS variables and waits for
   * the next `requestAnimationFrame` to ensure transitions are properly triggered.
   *
   * @param {boolean} newValue - `true` to expand, `false` to collapse.
   * @example
   * ```ts
   * const { doExpand } = useCollapsable()
   * doExpand(true) // expands the container
   * ```
   */
  doExpand: (newValue: boolean) => void

  /**
   * Recomputes the current collapsible height and updates
   * the related CSS custom properties.
   *
   * Should be called before starting an animation or when content changes dynamically.
   */
  adjust: () => void

  /**
   * Callback to handle the end of a CSS transition.
   *
   * Typically attached to a `transitionend` event listener
   * to finalize the expand/collapse state.
   *
   * - Resets internal flags.
   * - Optionally focuses the first anchor (`<a>`) when expanded.
   * - Removes collapse height restrictions when fully collapsed.
   *
   * @param {boolean} expanded - Final expanded state (`true` = expanded, `false` = collapsed).
   * @param {boolean} [autoFocus=true] - If true, focus the first anchor after expansion.
   *
   * @example
   * ```ts
   * const { onTransitionEnd } = useCollapsable()
   * collapse.value?.addEventListener('transitionend', () => onTransitionEnd(cssExpanded.value))
   * ```
   */
  onTransitionEnd: (expanded: boolean, autoFocus?: boolean) => void
}

/**
 * Vue composable providing a reactive API for collapsible sections,
 * consistent with ref collapse mechanism.
 *
 * It manages internal CSS variables (`--collapse`, `--collapse-max-height`) and
 * state flags (`collapsing`, `cssExpanded`) to synchronize DOM transitions.
 *
 * @example
 * ```vue
 * <template>
 *   <div ref="collapse" class="fr-collapse" @transitionend="onTransitionEnd(cssExpanded)">
 *     <slot />
 *   </div>
 *   <button @click="doExpand(!cssExpanded)">Toggle</button>
 * </template>
 *
 * <script setup lang="ts">
 * import { useCollapsable } from '@avenirs-esr/avenirs-dsav'
 *
 * const { collapse, cssExpanded, doExpand, onTransitionEnd } = useCollapsable()
 * </script>
 * ```
 *
 * @returns {UseCollapsableReturn} Object exposing the reactive refs and methods
 * to control collapsible elements.
 */
export function useCollapsable (): UseCollapsableReturn {
  const collapse = ref<HTMLElement | undefined>()
  const collapsing = ref(false)
  const cssExpanded = ref(false)

  /**
   * Recalculates and updates the CSS variables
   * @return void
   */
  const adjust = (): void => {
    if (!collapse.value) {
      return
    }
    collapse.value.style.setProperty('--collapser', 'none')
    const height = collapse.value.offsetHeight
    collapse.value.style.setProperty('--collapse', `${-height}px`)
    collapse.value.style.setProperty('--collapser', '')
  }

  /**
   * @param {boolean} newValue
   * @return void
   */
  const doExpand = (newValue: boolean): void => {
    if (!collapse.value) {
      return
    }
    if (newValue === true) {
      // unbound
      collapse.value.style.setProperty('--collapse-max-height', 'none')
    }
    // We need to wait for the next RAF to be sure the CSS variable will be set
    window.requestAnimationFrame(() => {
      collapsing.value = true
      adjust()
      // We need to wait for the next RAF to be sure the animation will be triggered
      window.requestAnimationFrame(() => {
        cssExpanded.value = newValue
      })
    })
  }

  /**
   * Callback to handle the end of a CSS transition.
   * @param {boolean} expanded
   * @param {boolean} autoFocus
   * @return void
   */
  const onTransitionEnd = (expanded: boolean, autoFocus: boolean = true): void => {
    collapsing.value = false
    if (autoFocus) {
      collapse.value?.querySelector('a')?.focus()
    }
    if (collapse.value && expanded === false) {
      collapse.value.style.removeProperty('--collapse-max-height')
    }
  }

  return {
    collapse,
    collapsing,
    cssExpanded,
    doExpand,
    adjust,
    onTransitionEnd,
  }
}

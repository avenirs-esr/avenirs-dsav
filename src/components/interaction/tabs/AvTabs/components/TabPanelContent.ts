import type { PropType, Slots, VNode } from 'vue'

/**
 * Stable renderer for a tab panel slot stored inside an `AvTab` VNode.
 *
 * Why this component exists:
 * - `AvTabs` receives tab items as VNodes and must execute each tab's default slot.
 * - Rendering that slot through a dynamic `component :is` can remount the active panel
 *   when parent headers re-render (for example when a tab header toggles loading state).
 * - Remounting can reset local DOM state (notably input focus).
 *
 * This dedicated renderer keeps a stable component type and returns the tab slot VNodes
 * directly, which preserves the active panel subtree across unrelated header updates.
 */
export default defineComponent({
  name: 'TabPanelContent',
  props: {
    /**
     * Raw `AvTab` VNode containing the panel default slot in `children.default`.
     */
    tab: {
      type: Object as PropType<VNode>,
      required: true,
    }
  },
  setup (props) {
    return () => {
      const tabSlots = props.tab.children as Slots | undefined
      return tabSlots?.default?.() ?? null
    }
  }
})

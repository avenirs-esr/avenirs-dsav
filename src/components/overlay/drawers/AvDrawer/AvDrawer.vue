<script setup lang="ts">
import type { Slot } from 'vue'
import { FocusTrap } from 'focus-trap-vue'
import { useContainedScroll } from '@/composables/use-contained-scroll/use-contained-scroll'

export interface AvDrawerProps {
  /**
   * Controls the visibility of the drawer
   */
  show: boolean
  /**
   * Position of the drawer on the screen
   */
  position?: 'left' | 'right'
  /**
   * Width of the drawer panel
   */
  width?: string
  /**
   * Whether to show the backdrop overlay, default true
   */
  backdrop?: boolean
  /**
   * Padding inside the drawer content area
   */
  padding?: string
  /**
   * ARIA label for accessibility
   * @default 'Menu latéral'
   */
  ariaLabel?: string
}

const props = withDefaults(defineProps<AvDrawerProps>(), {
  position: 'right',
  width: '35rem',
  backdrop: true,
  padding: 'var(--spacing-md)',
  ariaLabel: 'Menu latéral'
})

/**
 * Events triggered by AvDrawer.
 */
const emit = defineEmits<{
  /**
   * Event triggered when escape is pressed.
   * @event escapePressed
   */
  (e: 'escapePressed'): void
}>()

/**
 * Slots available in the AvDrawer component.
 * The default slot contains the main content of the drawer.
 * The slot footer allows to add content under the main scrollable content.
 */
const slots = defineSlots<{
  /**
   * Default slot for main content.
   */
  default?: Slot

  /**
   * Footer slot for content under the main scrollable content.
   */
  footer?: Slot
}>()

const { position, width, padding, show } = toRefs(props)
const { onWheel, onTouchMove, onTouchStart } = useContainedScroll({ scrollableSelector: '.av-drawer__content' })

const drawerRef = ref<HTMLElement | null>(null)
</script>

<template>
  <div v-if="show">
    <div
      v-if="backdrop"
      class="av-drawer-backdrop"
      @wheel.prevent
      @touchmove.prevent
    />
    <FocusTrap
      initial-focus="drawerRef"
      @deactivate="emit('escapePressed')"
    >
      <div
        ref="drawerRef"
        class="av-drawer av-col"
        :class="`av-drawer--${position}`"
        role="dialog"
        aria-modal="true"
        :aria-label="ariaLabel"
        tabindex="-1"
        @wheel="onWheel"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
      >
        <div class="av-drawer__content-wrapper av-col">
          <div class="av-drawer__content">
            <slot />
          </div>
          <div
            v-if="slots.footer"
            class="footer-container av-p-md"
          >
            <slot name="footer" />
          </div>
        </div>
      </div>
    </FocusTrap>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/settings/breakpoints' as *;

.av-drawer-backdrop {
  position: fixed;
  inset: 0;
  background-color: var(--transparency);
  z-index: 999;
}

.av-drawer {
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: var(--dialog);
  border: 0.06rem solid var(--surface-background);
  overflow: hidden;
  z-index: 1000;
  border-radius: var(--radius-hg);
  width: v-bind('width');
  max-width: 90%;
  overscroll-behavior: contain;
  overscroll-behavior-block: contain;

  @include max-width(md) {
    width: 100%;
    max-width: 100%;
    border-radius: 0;
  }
}

.av-drawer--left {
  left: 0;
  border-radius: 0 var(--radius-hg) var(--radius-hg) 0;
  box-shadow: -0.125rem 0 0.625rem 0 #0000001A;

  @include max-width(md) {
    border-radius: 0;
  }
}

.av-drawer--right {
  right: 0;
  border-radius: var(--radius-hg) 0 0 var(--radius-hg);
  box-shadow: 0.125rem 0 0.625rem 0 #0000001A;

  @include max-width(md) {
    border-radius: 0;
  }
}

.av-drawer__content-wrapper {
  flex: 1;
  overflow: hidden;
}

.av-drawer__content {
  flex: 1;
  overflow-y: auto;
  padding: v-bind('padding');
}
</style>

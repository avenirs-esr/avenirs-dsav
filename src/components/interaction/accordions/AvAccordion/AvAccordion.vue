<script lang="ts" setup>
import type { Slot } from 'vue'
import { registerAccordionKey } from '@/components/interaction/accordions/injection-key'
import { useCollapsable } from '@/composables/use-collapsable/use-collapsable'
import { ICONS_DATA_URL } from '@/tokens'

/**
 * AvAccordion component props.
 */
export interface AvAccordionProps {
  /**
   * Accordion id
   * @default `accordion-${crypto.randomUUID()}`
   */
  id?: string

  /**
   * Title of the accordion.
   */
  title: string

  /**
   * Accordion icon
   */
  icon?: string

  /**
   * Heading level for the accordion title.
   * @default 'h3'
   */
  headingLevel?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  /**
   * Whether the overflow of the accordion content should be visible when expanded.
   * @default false
   */
  overflowVisible?: boolean

  /**
   * Border color of the accordion trigger. If set to 'transparent', the trigger will have no border and the arrow will inherit the text color.
   * @default 'transparent'
   */
  triggerBorderColor?: string
}

const { id, title, icon, headingLevel = 'h3', overflowVisible = false, triggerBorderColor = 'transparent' } = defineProps<AvAccordionProps>()

/**
 * Slots available in the AvAccordion component.
 * The default slot contains the content of the accordion.
 */
defineSlots<{
  /**
   * Default slot for accordion content.
   */
  default?: Slot
}>()

const {
  collapse,
  collapsing,
  cssExpanded,
  doExpand,
  onTransitionEnd,
} = useCollapsable()

const accordionHeaderId = id ?? `accordion-${crypto.randomUUID()}`
const accordionPanelId = computed(() => `${accordionHeaderId}-panel`)
const triggerColor = computed(() => triggerBorderColor === 'transparent' ? 'currentColor' : triggerBorderColor)

const isStandaloneActive = ref()
const triggerRef = ref<HTMLElement | null>(null)

const useAccordion = inject(registerAccordionKey)!
const { isActive, expand, onKeydown, setTriggerRef } = useAccordion?.(toRef(() => title)) ?? {
  isActive: isStandaloneActive,
  expand: () => isStandaloneActive.value = !isStandaloneActive.value,
  onKeydown: undefined,
  setTriggerRef: undefined,
}

const styleVars = computed(() => ({
  '--icon-path': `url(${ICONS_DATA_URL.MDI_KEYBOARD_ARROW_DOWN})`,
}))

onMounted(() => {
  setTriggerRef?.(triggerRef.value)

  // Accordion can be expanded by default
  // We need to trigger the expand animation on mounted
  if (isActive.value) {
    doExpand(true)
  }
})

const overflow = computed(() => overflowVisible ? 'visible' : 'hidden')

watch(isActive, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    doExpand(newValue)
  }
})
</script>

<template>
  <section class="av-accordion">
    <component
      :is="headingLevel"
      class="av-accordion__header"
    >
      <button
        :id="accordionHeaderId"
        ref="triggerRef"
        type="button"
        :aria-expanded="isActive"
        :aria-controls="accordionPanelId"
        class="av-accordion__trigger av-row av-align-center av-p-sm av-w-full"
        :style="styleVars"
        @click="expand"
        @keydown="onKeydown"
      >
        <div class="title-container av-row av-gap-sm">
          <AvIcon
            v-if="icon"
            :size="2"
            :name="icon"
            color="var(--icon)"
          />
          <span class="n6">
            {{ title }}
          </span>
        </div>
      </button>
    </component>
    <div
      :id="accordionPanelId"
      ref="collapse"
      role="region"
      :aria-labelledby="accordionHeaderId"
      class="av-accordion__panel av-collapse av-my-none--md av--mx-xxs--md av-px-sm--md"
      :class="{
        'av-collapse--expanded av-py-md': cssExpanded,
        'av-collapsing': collapsing,
      }"
      @transitionend="onTransitionEnd(isActive, false)"
    >
      <div class="accordion-content-container av-pt-sm">
        <slot />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/settings/breakpoints' as *;

.av-accordion {
  position: relative;

  &:focus-within {
    z-index: 1;
  }

  &__trigger {
    max-height: none;
    min-height: var(--dimension-2xl);
    overflow: initial;

    border: 1px solid v-bind(triggerBorderColor);
    color: v-bind(triggerColor);

    &::after, &::before {
      display: block;
    }

    &::after {
      background-color: currentColor;
      content: "";
      display: inline-block;
      flex: 0 0 auto;
      height: var(--dimension-sm);
      margin-left: auto;
      margin-right: var(--spacing-none);
      -webkit-mask-image: var(--icon-path);
      mask-image: var(--icon-path);
      -webkit-mask-size: 100% 100%;
      mask-size: 100% 100%;
      transition: transform .3s;
      vertical-align: calc((.75em - var(--dimension-sm))*.5);
      width: var(--dimension-sm);
    }

    &::before {
      content:none;
    }

    &[aria-expanded=true]::after {
      transform:rotate(-180deg);
    }

    &[aria-expanded=true] {
      background-color:var(--light-background-critical);
    }
  }

  .av-collapse {
    transition:visibility .3s, padding .3s;
  }

  .av-collapse--expanded:not(.av-collapsing) {
    overflow: v-bind(overflow) !important;
  }
}

.accordion-content-container {
  border-top: 1px solid var(--stroke);
}
</style>

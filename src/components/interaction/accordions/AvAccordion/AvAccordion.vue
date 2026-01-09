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
}

const { id, title, icon, headingLevel = 'h3' } = defineProps<AvAccordionProps>()
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

const accordionHeaderId = computed(() => id ?? `accordion-${crypto.randomUUID()}`)
const accordionPanelId = computed(() => `${accordionHeaderId.value}-panel`)

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
      class="av-accordion__panel av-collapse"
      :class="{
        'av-collapse--expanded': cssExpanded, // Need to use a separate data to add/remove the class after a RAF
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

    &--expanded {
      padding-bottom: var(--spacing-md);
      padding-top: var(--spacing-sm);
    }
  }

  @include min-width(md) {
    .av-collapse {
      margin: var(--spacing-none) calc(-1 * var(--spacing-xxs));
      padding-left: var(--spacing-sm);
      padding-right: var(--spacing-sm);
    }
  }
}

.accordion-content-container {
  border-top: 1px solid var(--stroke);
}
</style>

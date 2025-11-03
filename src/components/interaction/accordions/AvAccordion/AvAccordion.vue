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
}

const { id, title, icon } = defineProps<AvAccordionProps>()

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

const realId = computed(() => id ?? `accordion-${crypto.randomUUID()}`)

const isStandaloneActive = ref()

const useAccordion = inject(registerAccordionKey)!
const { isActive, expand } = useAccordion?.(toRef(() => title)) ?? {
  isActive: isStandaloneActive,
  expand: () => isStandaloneActive.value = !isStandaloneActive.value
}

const styleVars = computed(() => ({
  '--icon-path': `url(${ICONS_DATA_URL.MDI_KEYBOARD_ARROW_DOWN})`,
}))

onMounted(() => {
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
    <h3 class="av-accordion__title">
      <button
        class="av-accordion__btn"
        :aria-expanded="isActive"
        :aria-controls="realId"
        type="button"
        :style="styleVars"
        @click="expand"
      >
        <div class="title-container">
          <AvIcon
            v-if="icon"
            :size="2"
            :name="icon"
            color="var(--icon)"
          />
          <h6 class="n6">
            {{ title }}
          </h6>
        </div>
      </button>
    </h3>
    <div
      :id="realId"
      ref="collapse"
      class="av-collapse"
      :class="{
        'av-collapse--expanded': cssExpanded, // Need to use a separate data to add/remove the class after a RAF
        'fr-collapsing': collapsing,
      }"
      @transitionend="onTransitionEnd(isActive, false)"
    >
      <div class="accordion-content-container">
        <slot />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/settings/breakpoints' as *;

.av-accordion {
  position:relative;

  &:focus-within {
    z-index: 1;
  }

  &__title {
    display:block;
    font-size:unset;
    line-height:unset;
    margin:0;
  }

  &__btn {
    align-items:center;
    display:inline-flex;
    flex-direction:row;
    margin:var(--spacing-none);
    max-height:none;
    max-width:100%;
    min-height:var(--dimension-2xl);
    overflow:initial;
    padding: var(--spacing-sm);
    text-align:left;
    width:-moz-fit-content;
    width:fit-content;
    width:100%;

    &::after, &::before {
      display:block;
    }

    &::after {
      background-color:currentColor;
      content:"";
      display:inline-block;
      flex:0 0 auto;
      height:var(--dimension-sm);
      margin-left:auto;
      margin-right: var(--spacing-none);
      -webkit-mask-image: var(--icon-path);
      mask-image: var(--icon-path);
      -webkit-mask-size:100% 100%;
      mask-size:100% 100%;
      transition:transform .3s;
      vertical-align:calc((.75em - var(--dimension-sm))*.5);
      width:var(--dimension-sm);
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

.title-container {
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
}

.accordion-content-container {
  border-top: 1px solid var(--stroke);
  padding-top: var(--spacing-sm);
}
</style>

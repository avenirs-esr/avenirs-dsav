<script lang="ts" setup>
import type { Slot } from 'vue'
import { registerAccordionKey } from '@/components/interaction/accordions/injection-key'
import { useCollapsable } from '@/composables/use-collapsable/use-collapsable'

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
  <section class="av-accordion fr-accordion">
    <h3 class="fr-accordion__title">
      <button
        class="fr-accordion__btn"
        :aria-expanded="isActive"
        :aria-controls="realId"
        type="button"
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
.title-container {
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
}

.fr-accordion::before {
  box-shadow: none;
}

.fr-accordion__btn {
  padding: var(--spacing-sm) !important;
}

.accordion-content-container {
  border-top: 1px solid var(--stroke);
  padding-top: var(--spacing-sm);
}
</style>

<script lang="ts" setup>
import type { Ref, VNode } from 'vue'
import type AvAccordion from '@/components/interaction/accordions/AvAccordion/AvAccordion.vue'
import { registerAccordionKey } from '@/components/interaction/accordions/injection-key'

/**
 * AvAccordionsGroup component props.
 */
export interface AvAccordionsGroupProps {
  /**
   * Index of the currently active accordion.
   */
  activeAccordion?: number
}

const { activeAccordion } = defineProps<AvAccordionsGroupProps>()

const emit = defineEmits<{
  /**
   * Emitted when the active accordion changes.
   */
  'update:activeAccordion': [value: number | undefined]
}>()

/**
 * Slots available in AvAccordions component.
 * Used to inject accordions via `AvAccordion` components.
 */
defineSlots<{
  /**
   * Default slot for passing `AvAccordion` components.
   */
  default?: () => VNode<typeof AvAccordion>[]
}>()

const localActive = ref(activeAccordion ?? -1)

const computedActiveAccordion = computed({
  get: () => localActive.value,
  set (accordionId: number) {
    localActive.value = accordionId
    emit('update:activeAccordion', accordionId)
  },
})
const accordions = ref(new Map<number, string>())
const currentId = ref(0)

provide(registerAccordionKey, (title: Ref<string>) => {
  const myIndex = currentId.value++
  accordions.value.set(myIndex, title.value)

  const isActive = computed(() => myIndex === computedActiveAccordion.value)

  watch(title, () => {
    accordions.value.set(myIndex, title.value)
  })

  function expand (): void {
    if (computedActiveAccordion.value === myIndex) {
      computedActiveAccordion.value = -1
      return
    }
    computedActiveAccordion.value = myIndex
  }

  onUnmounted(() => {
    accordions.value.delete(myIndex)
  })

  return { isActive, expand }
})
</script>

<template>
  <div
    class="av-accordions-group"
    role="group"
    aria-label="Accordion group"
  >
    <slot />
  </div>
</template>

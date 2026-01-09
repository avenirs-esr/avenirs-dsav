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
const triggers = ref<HTMLElement[]>([])

function registerTrigger (el: HTMLElement, index: number) {
  triggers.value[index] = el
}

function focusByIndex (index: number) {
  triggers.value[index]?.focus()
}

function focusByOffset (currentIndex: number, offset: number) {
  const total = triggers.value.length
  if (!total) {
    return
  }

  const nextIndex = (currentIndex + offset + total) % total
  focusByIndex(nextIndex)
}

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

  function onKeydown (event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        focusByOffset(myIndex, +1)
        break
      case 'ArrowUp':
        event.preventDefault()
        focusByOffset(myIndex, -1)
        break
      case 'Home':
        event.preventDefault()
        focusByIndex(0)
        break
      case 'End':
        event.preventDefault()
        focusByIndex(triggers.value.length - 1)
        break
    }
  }

  function setTriggerRef (el: HTMLElement | null) {
    if (el) {
      registerTrigger(el, myIndex)
    }
  }

  onUnmounted(() => {
    accordions.value.delete(myIndex)
  })

  return { isActive, expand, onKeydown, setTriggerRef }
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

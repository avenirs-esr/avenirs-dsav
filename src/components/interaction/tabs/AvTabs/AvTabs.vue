<script lang="ts" setup>
import type AvTab from '@/components/interaction/tabs/AvTab/AvTab.vue'
import { useSlots, type VNode } from 'vue'
import TabContent from '@/components/interaction/tabs/AvTabs/components/TabContent.vue'
import TabItem from '@/components/interaction/tabs/AvTabs/components/TabItem.vue'
import { useTabsStyle } from '@/components/interaction/tabs/AvTabs/composables/use-tabs-style'

/**
 * AvTabs component Props.
 */
export interface AvTabsProps {
  /**
   * Aria label for tab list.
   * Improves accessibility by providing a description for screen readers.
   */
  ariaLabel?: string

  /**
   * Allows compact display:
   * Underline without central pipe.
   * @default 'false'
   */
  compact?: boolean
}

const { ariaLabel, compact = false } = defineProps<AvTabsProps>()

/**
 * Slots available in AvTabs component.
 * Used to inject tabs via `AvTab` components.
 */
defineSlots<{
  /**
   * Default slot for passing `AvTab` components.
   */
  default?: () => VNode<typeof AvTab>[]
}>()

const slots = useSlots()

const tabItems = computed(() => slots.default?.() || [])

const activeTab = defineModel<number>('modelValue', { default: 0 })
const asc = ref(false)

const $el = ref<HTMLElement | null>(null)
const tablist = ref<HTMLUListElement | null>(null)

const generatedIds: Record<string, string> = reactive({})

const { tabsStyle, updateTabsStyle } = useTabsStyle(
  tablist,
  computed(() => Array.from($el.value?.querySelectorAll<HTMLElement>('.av-tab-content') || [])),
  activeTab,
)

function getIdFromIndex (index: number) {
  if (generatedIds[index]) {
    return generatedIds[index]
  }
  const id = `tab-${crypto.randomUUID()}`
  generatedIds[index] = id
  return id
}

function selectTab (offset: number) {
  const totalTabs = tabItems.value.length
  activeTab.value = (activeTab.value + offset + totalTabs) % totalTabs
}

function selectPrevious () {
  asc.value = false
  selectTab(-1)
}

function selectNext () {
  asc.value = true
  selectTab(1)
}

function selectFirst () {
  activeTab.value = 0
}

function selectLast () {
  activeTab.value = tabItems.value.length - 1
}

const resizeObserver = ref<ResizeObserver | null>(null)

onMounted(() => {
  /*
  * Need to use a resize-observer as tab-content height can
    * change according to its inner components.
    */
  if (window.ResizeObserver) {
    resizeObserver.value = new window.ResizeObserver(() => {
      updateTabsStyle()
    })
  }

  $el.value?.querySelectorAll('.av-tab-content').forEach((element) => {
    if (element) {
      resizeObserver.value?.observe(element)
    }
  })
})

onUnmounted(() => {
  $el.value?.querySelectorAll('.av-tab-content').forEach((element) => {
    if (element) {
      resizeObserver.value?.unobserve(element)
    }
  })
  resizeObserver.value?.disconnect()
})

watch(activeTab, (newIndex, lastIndex) => {
  asc.value = newIndex > lastIndex
})
</script>

<template>
  <div
    ref="$el"
    class="av-tabs fr-tabs"
    :class="{
      'av-tabs--compact': compact,
    }"
    :style="tabsStyle"
  >
    <ul
      ref="tablist"
      class="av-tabs__list fr-tabs__list"
      :class="{
        'av-tabs__list--compact': compact,
      }"
      role="tablist"
      :aria-label="ariaLabel ?? 'Liste d’onglets'"
    >
      <TabItem
        v-for="(tab, index) in tabItems"
        :key="index"
        :tab-id="getIdFromIndex(index)"
        :panel-id="`${getIdFromIndex(index)}-panel`"
        :title="tab.props?.title"
        :icon="tab.props?.icon"
        :compact="compact"
        :is-selected="activeTab === index"
        @click="activeTab = index"
        @next="selectNext"
        @previous="selectPrevious"
        @first="selectFirst"
        @last="selectLast"
      />
    </ul>

    <TabContent
      v-for="(tab, index) in tabItems"
      :key="index"
      :panel-id="`${getIdFromIndex(index)}-panel`"
      :tab-id="getIdFromIndex(index)"
      :is-visible="activeTab === index"
      :asc="asc"
    >
      <component :is="(tab.children as Record<string, unknown>).default" />
    </TabContent>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/typography.scss" as typography;

.av-tabs {
  box-shadow: none !important;

  &::before {
    box-shadow: none !important;
  }

  &__list {
    display: flex !important;
    width: 100% !important;
    background: var(--surface-background) !important;
    gap: 0.75rem !important;
    align-items: center !important;

    &--compact {
      width: fit-content !important;
      background: none !important;
    }
  }
}
</style>

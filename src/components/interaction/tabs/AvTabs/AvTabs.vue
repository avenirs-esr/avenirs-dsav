<script lang="ts" setup>
import type AvTab from '@/components/interaction/tabs/AvTab/AvTab.vue'
import { useSlots, type VNode } from 'vue'
import TabContent from '@/components/interaction/tabs/AvTabs/components/TabContent.vue'
import TabItem from '@/components/interaction/tabs/AvTabs/components/TabItem.vue'
import TabPanelContent from '@/components/interaction/tabs/AvTabs/components/TabPanelContent'
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
   * @default false
   */
  compact?: boolean

  /**
   * If false, all tab contents are rendered in the DOM regardless of their active state.
   * @default true
   */
  lazyRender?: boolean
}

const { ariaLabel, compact = false, lazyRender = true } = defineProps<AvTabsProps>()

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

function findFirstEnabledTabIndex (): number {
  for (let i = 0; i < tabItems.value.length; i++) {
    if (!isTabUnavailable(tabItems.value[i])) {
      return i
    }
  }
  return 0
}

function findLastEnabledTabIndex (): number {
  for (let i = tabItems.value.length - 1; i >= 0; i--) {
    if (!isTabUnavailable(tabItems.value[i])) {
      return i
    }
  }
  return tabItems.value.length - 1
}

function isTabUnavailable (tab: (typeof tabItems.value)[number]) {
  const disabled = tab?.props?.disabled
  const loading = tab?.props?.['is-loading'] ?? tab?.props?.isLoading
  return disabled === true || disabled === '' || loading === true || loading === ''
}

function selectTab (offset: number) {
  const totalTabs = tabItems.value.length
  let newIndex = (activeTab.value + offset + totalTabs) % totalTabs
  const startIndex = activeTab.value
  while (isTabUnavailable(tabItems.value[newIndex])) {
    newIndex = (newIndex + offset + totalTabs) % totalTabs
    if (newIndex === startIndex) {
      break
    }
  }
  activeTab.value = newIndex
}

function selectPrevious () {
  selectTab(-1)
}

function selectNext () {
  selectTab(1)
}

function selectFirst () {
  activeTab.value = findFirstEnabledTabIndex()
}

function selectLast () {
  activeTab.value = findLastEnabledTabIndex()
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

  if (isTabUnavailable(tabItems.value[activeTab.value])) {
    activeTab.value = findFirstEnabledTabIndex()
  }
})

onUnmounted(() => {
  $el.value?.querySelectorAll('.av-tab-content').forEach((element) => {
    if (element) {
      resizeObserver.value?.unobserve(element)
    }
  })
  resizeObserver.value?.disconnect()
})
</script>

<template>
  <div
    ref="$el"
    class="av-tabs"
    :class="{
      'av-tabs--compact': compact,
    }"
    :style="tabsStyle"
  >
    <ul
      ref="tablist"
      class="av-tabs__list av-row av-px-xs av-py-none av-align-center av-gap-sm av-list-reset av-radius-lg"
      :class="{
        'av-tabs__list--compact': compact,
        'av-w-full': !compact,
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
        :disabled="tab.props?.disabled"
        :is-loading="tab.props?.['is-loading']"
        :data-testid="tab.props?.['data-testid']"
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
    >
      <TabPanelContent
        v-if="!lazyRender || activeTab === index"
        :tab="tab"
      />
    </TabContent>
  </div>
</template>

<style lang="scss" scoped>
.av-tabs {
  &__list {
    background: var(--surface-background);
    box-sizing: border-box;

    &--compact {
      width: fit-content;
      background: none;
    }
  }
}
</style>

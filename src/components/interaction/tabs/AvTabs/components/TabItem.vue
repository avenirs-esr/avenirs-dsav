<script lang="ts" setup>
import type { AvIcon } from '@/components/base'
import { nextTick } from 'vue'
import { MDI_ICONS } from '@/tokens'

/**
 * TabItem component props.
 */
export interface TabItemProps {
  /**
   * ID of the associated tab panel.
   */
  panelId: string

  /**
   * ID of the tab item.
   */
  tabId: string

  /**
   * Whether the tab is currently selected.
   */
  isSelected: boolean

  /**
   * Title of the tab displayed in the tab bar.
   */
  title: string

  /**
   * Name of the icon to display in the tab.
   */
  icon?: string

  /**
   * Whether the tab is displayed in compact mode.
   * @default false
   */
  compact?: boolean

  /**
   * Whether the tab item is disabled.
   * @default false
   */
  disabled?: boolean

  /**
   * Whether the tab item is in loading state.
   * @default false
   */
  isLoading?: boolean
}

defineOptions({
  inheritAttrs: false
})

const {
  panelId,
  tabId,
  isSelected,
  title,
  icon,
  compact = false,
  disabled = false,
  isLoading = false,
} = defineProps<TabItemProps>()

/**
 * Emits events for tab interactions.
 * @emits click - Emitted when the tab is clicked, passing the tabId.
 * @emits next - Emitted when the user navigates to the next tab.
 * @emits previous - Emitted when the user navigates to the previous tab.
 * @emits first - Emitted when the user navigates to the first tab.
 * @emits last - Emitted when the user navigates to the last tab.
 */
const emit = defineEmits<{
  /**
   * Emitted when the tab is clicked.
   * @param tabId The ID of the clicked tab.
   */
  click: [tabId: string]

  /**
   * Emitted when the user navigates to the next tab.
   */
  next: []

  /**
   * Emitted when the user navigates to the previous tab.
   */
  previous: []

  /**
   * Emitted when the user navigates to the first tab.
   */
  first: []

  /**
   * Emitted when the user navigates to the last tab.
   */
  last: []
}>()

const buttonEl = useTemplateRef('button')
const canFocusSelectedTab = ref(false)

const labelClass = computed(() => {
  return isSelected ? 's2-bold' : 's2-regular'
})

const loadingIcon: InstanceType<typeof AvIcon>['$props'] = { name: MDI_ICONS.LOADING, animation: 'spin' }

const iconToRender = computed(() => {
  if (isLoading) {
    return { ...loadingIcon, size: 2 }
  }
  if (icon) {
    return { name: icon, size: 2 }
  }
  return undefined
})

const keyToEventDict = {
  ArrowRight: 'next',
  ArrowLeft: 'previous',
  Home: 'first',
  End: 'last',
} as const

function onKeyDown (event: KeyboardEvent) {
  const key = event?.key as keyof typeof keyToEventDict
  const eventToEmit = keyToEventDict[key]
  if (eventToEmit) {
    switch (eventToEmit) {
      case 'next':
        emit('next')
        break
      case 'previous':
        emit('previous')
        break
      case 'first':
        emit('first')
        break
      case 'last':
        emit('last')
        break
    }
  }
}

function onClick () {
  if (isSelected || disabled || isLoading) {
    return
  }
  emit('click', tabId)
}

onMounted(() => {
  nextTick(() => {
    canFocusSelectedTab.value = true
  })
})

watch(
  () => isSelected,
  async (selected) => {
    if (!canFocusSelectedTab.value || !selected || disabled || isLoading) {
      return
    }

    await nextTick()
    buttonEl.value?.focus()
  },
  { flush: 'post' }
)
</script>

<template>
  <li
    class="av-tab-item av-py-xs"
    :class="{ 'av-tab-item--compact av-no-before': compact,
              'av-flex-fill av-w-full': !compact,
    }"
    role="presentation"
  >
    <button
      v-bind="$attrs"
      :id="tabId"
      ref="button"
      class="av-tab-item__tab av-row av-gap-xs av-align-center av-justify-center av-text-text2 av-w-full"
      :class="{ 'av-tab-item--compact__tab av-radius-none av-m-none av-py-xs av-px-2xl': compact,
                'av-radius-lg': !compact,
      }"
      :tabindex="isSelected ? 0 : -1"
      role="tab"
      type="button"
      :aria-selected="isSelected"
      :aria-controls="panelId"
      :disabled="disabled || isLoading"
      @click.prevent="onClick"
      @keydown="onKeyDown($event)"
    >
      <AvIcon
        v-if="iconToRender"
        v-bind="iconToRender"
      />
      <span :class="labelClass">
        {{ title }}
      </span>
    </button>
  </li>
</template>

<style lang="scss" scoped>
.av-tab-item {
  &__tab {
    text-align: center;

    &[aria-selected=true]:not(:disabled),
    &[aria-selected=true]:not(:disabled) > * {
      color: var(--dark-background-primary1);
      background: var(--other-background-base) !important;
    }

    &:not([aria-selected=true]:not(:disabled)):hover,
    &:not([aria-selected=true]:not(:disabled)):hover > * {
      color: var(--dark-background-primary1);
    }
  }

  &:not(:first-child) {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: -.375rem;
      top: var(--spacing-xs);
      bottom: var(--spacing-xs);
      width: 0.0625rem;
      background-color: var(--text1);
    }
  }

  &--compact {
    &__tab {
      border-bottom: 3px solid transparent;

      &[aria-selected=true]:not(:disabled) {
        border-color: var(--dark-background-primary1);
      }
    }
  }
}

.av-tab-item__tab[disabled],
.av-tab-item__tab[disabled] > *,
.av-tab-item__tab[disabled]:hover,
.av-tab-item__tab[disabled]:hover > * {
  cursor: not-allowed;
  color: var(--text1) !important;
  opacity: 0.5;
}
</style>

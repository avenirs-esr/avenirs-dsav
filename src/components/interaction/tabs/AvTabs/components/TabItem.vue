<script lang="ts" setup>
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
}

const {
  panelId,
  tabId,
  isSelected,
  title,
  icon,
  compact = false
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

const button = ref<HTMLButtonElement | null>(null)

const buttonEl = useTemplateRef('button')

const labelClass = computed(() => {
  return isSelected ? 's2-bold' : 's2-regular'
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

watch(() => isSelected, () => {
  if (isSelected) {
    buttonEl.value?.focus()
  }
})
</script>

<template>
  <li
    class="av-tab-item"
    :class="{ 'av-tab-item--compact': compact }"
    role="presentation"
  >
    <button
      v-bind="$attrs"
      :id="tabId"
      ref="button"
      :data-testid="`test-${tabId}`"
      class="av-tab-item__tab fr-tabs__tab"
      :class="{ 'av-tab-item--compact__tab': compact }"
      :tabindex="isSelected ? 0 : -1"
      role="tab"
      type="button"
      :aria-selected="isSelected"
      :aria-controls="panelId"
      @click.prevent="$emit('click', tabId)"
      @keydown="onKeyDown($event)"
    >
      <AvIcon
        v-if="icon"
        :name="icon"
        :size="2"
      />
      <span :class="labelClass">
        {{ title }}
      </span>
    </button>
  </li>
</template>

<style lang="scss" scoped>
@use "@/styles/core/_typography.scss";

.av-tab-item {
  width: 100%;
  flex: 1 1 0%;
  padding: var(--spacing-xs) var(--spacing-none);

  &__tab {
    display: flex;
    flex-direction: row;
    gap: var(--spacing-xs);
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: var(--radius-lg);
    width: 100%;
    background: transparent !important;
    border: none;
    box-shadow: none;
    color: var(--text2);

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
      left: var(--spacing-none);
      top: var(--spacing-xs);
      bottom: var(--spacing-xs);
      width: 0.0625rem;
      background-color: var(--text1);
    }
  }

  &--compact {
    &:not(:first-child) {
      &::before {
        display: none;
      }
    }

    &__tab {
      border-radius: var(--radius-none);
      margin: var(--spacing-none);
      padding: var(--spacing-xs) var(--spacing-2xl);
      border-bottom: 3px solid transparent;

      &[aria-selected=true]:not(:disabled) {
        border-color: var(--dark-background-primary1);
      }
    }
  }
}
</style>

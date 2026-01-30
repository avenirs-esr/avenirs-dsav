<script lang="ts" setup>
import { MDI_ICONS } from '@/tokens'

/**
 * AvSearchBar component props.
 */
export interface AvSearchBarProps {
  /**
   * Unique id for the search bar
   * @default `search-bar-${crypto.randomUUID()}`
   */
  id?: string

  /**
   * Label of the search bar
   * @default 'Recherche'
   */
  label?: string

  /**
   * Current value linked to the search bar
   * @default ''
   */
  modelValue?: string

  /**
   * Placeholder for the search bar
   * @default 'Rechercher...'
   */
  placeholder?: string

  /**
   * If `true`, disable the search bar
   * @default false
   */
  disabled?: boolean
}

const {
  id,
  label = 'Recherche',
  modelValue = '',
  placeholder = 'Rechercher...',
  disabled = false
} = defineProps<AvSearchBarProps>()

/**
 * Events emitted by the AvSearchBarProps
 * @event update:modelValue - Emitted when the input value changes
 * @event search - Emitted when the button is clicked or the enter key pressed
 */
const emit = defineEmits<{
  /**
   * Emitted when the input value changes.
   * @param payload Current input value.
   */
  (e: 'update:modelValue', payload: string): void

  /**
   * Emitted when the button is clicked or the enter key pressed.
   * @param payload Current input value.
   */
  (e: 'search', payload: string): void
}>()

const realId = id ?? `search-bar-${crypto.randomUUID()}`
</script>

<template>
  <div
    class="av-search-bar av-row av-align-end"
    role="search"
  >
    <div>
      <AvInput
        :id="realId"
        type="search"
        no-radius
        :placeholder="placeholder"
        :model-value="modelValue"
        :label="label"
        :disabled="disabled"
        :aria-disabled="disabled"
        :label-visible="false"
        @update:model-value="emit('update:modelValue', $event?.toString() ?? '')"
        @keydown.enter="emit('search', modelValue)"
      />
    </div>
    <AvButton
      variant="FLAT"
      :label="label"
      no-radius
      icon-only
      :icon="MDI_ICONS.MAGNIFY"
      :disabled="disabled"
      :aria-disabled="disabled"
      @click="emit('search', modelValue)"
    />
  </div>
</template>

<style lang="scss" scoped>
.av-search-bar {
  box-sizing: border-box;

  :deep(.av-input__input) {
    border-radius: var(--radius-sm) var(--radius-none) var(--radius-none) var(--radius-sm);
    height: var(--dimension-xl);
  }

  .av-button {
    border-radius: var(--radius-none) var(--radius-sm) var(--radius-sm) var(--radius-none);
    flex: 1 0 auto;
    min-height: var(--dimension-xl);
    max-height: var(--dimension-xl);
    max-width: var(--dimension-xl);
  }
}

.av-search-bar .av-input:disabled {
  box-shadow: inset 0 -2px 0 0 var(--border-disabled-grey);
  color: var(--text-disabled-grey);
}
</style>

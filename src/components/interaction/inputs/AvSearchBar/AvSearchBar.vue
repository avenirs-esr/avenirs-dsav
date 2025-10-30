<script lang="ts" setup>
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

const realId = computed(() => id ?? `search-bar-${crypto.randomUUID()}`)
</script>

<template>
  <div
    class="fr-search-bar"
    role="search"
  >
    <AvInput
      :id="realId"
      type="search"
      no-radius
      :placeholder="placeholder"
      :model-value="modelValue"
      :label="label"
      :disabled="disabled"
      :aria-disabled="disabled"
      @update:model-value="emit('update:modelValue', $event?.toString() ?? '')"
      @keydown.enter="emit('search', modelValue)"
    />
    <AvButton
      variant="FLAT"
      size="md"
      :label="label"
      no-radius
      icon-only
      :disabled="disabled"
      :aria-disabled="disabled"
      @click="emit('search', modelValue)"
    />
  </div>
</template>

<style>
.fr-search-bar > .fr-label + .fr-input {
  margin: 0;
}

.fr-search-bar .fr-input:disabled {
  box-shadow: inset 0 -2px 0 0 var(--border-disabled-grey);
  color: var(--text-disabled-grey);
}

input {
  height: var(--dimension-xl) !important;
}
</style>

<script setup lang="ts" generic="T extends AvAutocompleteOption = AvAutocompleteOption">
import type { Slot } from 'vue'
import type { AvAutocompleteOption } from '@/components/interaction/selects/AvAutocomplete/AvAutocomplete.types'
import { debounce } from 'lodash-es'
import AvButton from '@/components/interaction/buttons/AvButton/AvButton.vue'
import AvInput from '@/components/interaction/inputs/AvInput/AvInput.vue'
import { useAutocompleteContext } from '@/components/interaction/selects/AvAutocomplete/AvAutocompleteContext'
import { MDI_ICONS } from '@/tokens'

const emit = defineEmits<{
  search: [query: string]
  clear: []
}>()

const slots = defineSlots<{
  requiredTip?: Slot
}>()

const {
  selectedItems,
  searchQuery,
  isOpen,
  props,
  inputId,
  handleBlur,
  getDisplayLabel
} = useAutocompleteContext<T>()

const inputRef = ref<InstanceType<typeof AvInput>>()

const displayValue = computed(() => {
  if (!props.multiSelect && selectedItems.value.length > 0) {
    return getDisplayLabel(selectedItems.value[0])
  }

  if (props.multiSelect) {
    if (!props.displaySelectionInInput) {
      return searchQuery.value
    }

    if (selectedItems.value.length > 0) {
      if (props.showSelectedSection) {
        return props.selectedItemsCountLabel
      }

      return selectedItems.value.map(getDisplayLabel).join(', ')
    }
  }
  return searchQuery.value
})

const placeholderText = computed(() => {
  return props.inputOptions?.placeholder || 'Search...'
})

const debouncedSearch = debounce((query: string) => {
  searchQuery.value = query
}, props.debounceDelay)

function handleInput (value: string | number | null) {
  debouncedSearch(String(value || ''))
}

function handleFocus () {
  isOpen.value = true
}

function handleClearSearch () {
  searchQuery.value = ''
  debouncedSearch(searchQuery.value)
  emit('clear')
}

onUnmounted(() => {
  debouncedSearch.cancel()
})

defineExpose({
  inputRef,
  searchQuery: computed(() => searchQuery.value)
})
</script>

<template>
  <div class="av-autocomplete-input">
    <AvInput
      :id="inputId"
      ref="inputRef"
      :model-value="displayValue"
      :placeholder="placeholderText"
      v-bind="props.inputOptions"
      @update:model-value="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @click="handleFocus"
    >
      <template
        v-if="slots.requiredTip"
        #requiredTip
      >
        <component :is="slots.requiredTip" />
      </template>

      <template
        v-if="selectedItems.length > 0"
        #suffix
      >
        <AvButton
          :label="props.clearLabel ?? 'Clear search'"
          :icon="MDI_ICONS.CLOSE_CIRCLE_OUTLINE"
          icon-only
          :icon-scale="1.25"
          variant="DEFAULT"
          theme="SECONDARY"
          small
          @click="handleClearSearch"
        />
      </template>
    </AvInput>
  </div>
</template>

<style lang="scss" scoped>
.av-autocomplete-input :deep(input) {
  padding-right: var(--spacing-xl);
}
</style>

<script setup lang="ts" generic="T extends AvAutocompleteOption = AvAutocompleteOption">
import type { Slot } from 'vue'
import { useScroll } from '@vueuse/core'
import { debounce } from 'lodash-es'
import AvIcon from '@/components/base/AvIcon/AvIcon.vue'
import AvList from '@/components/interaction/lists/AvList/AvList.vue'
import AvListItem from '@/components/interaction/lists/AvListItem/AvListItem.vue'
import { type AvAutocompleteOption, DropdownState } from '@/components/interaction/selects/AvAutocomplete/AvAutocomplete.types'
import { useAutocompleteContext } from '@/components/interaction/selects/AvAutocomplete/AvAutocompleteContext'
import { MDI_ICONS } from '@/tokens'

const emit = defineEmits<{
  loadMore: []
}>()

const slots = defineSlots<{
  item?: Slot<{ option: T, isSelected: boolean, toggle: () => void }>
  empty?: Slot
}>()

const {
  selectedItems,
  searchQuery,
  isOpen,
  props,
  getOptionId,
  getDisplayLabel
} = useAutocompleteContext<T>()

const dropdownRef = ref<HTMLElement>()
const listRef = ref<HTMLElement>()
const filteredOptions = computed(() => {
  if (!props.options) {
    return []
  }

  if (props.serverSideFiltering) {
    return props.maxResults ? props.options.slice(0, props.maxResults) : props.options
  }

  const query = searchQuery.value.toLowerCase().trim()

  if (!query) {
    const allOptions = props.options
    return props.maxResults ? allOptions.slice(0, props.maxResults) : allOptions
  }

  let filtered: T[]
  if (props.filterOptions) {
    filtered = props.filterOptions(props.options, query)
  }
  else {
    filtered = props.options.filter((option: T) => {
      const label = getDisplayLabel(option).toLowerCase()
      return label.includes(query)
    })
  }

  return props.maxResults ? filtered.slice(0, props.maxResults) : filtered
})

const dropdownState = computed(() => {
  if (props.loading) {
    return DropdownState.LOADING
  }

  if (isOpen.value && props.options && props.options.length > 0) {
    if (filteredOptions.value.length > 0) {
      return DropdownState.HAS_OPTIONS
    }
  }
  return DropdownState.NO_OPTIONS
})

function isSelected (option: T): boolean {
  return selectedItems.value.some((selected: T) =>
    getOptionId(selected) === getOptionId(option)
  )
}

function toggleOption (option: T) {
  if (option.disabled) {
    return
  }

  if (!props.multiSelect) {
    selectedItems.value = [option]
    isOpen.value = false
    searchQuery.value = ''
    return
  }

  const currentSelection = selectedItems.value
  const optionId = getOptionId(option)
  const isCurrentlySelected = currentSelection.some(
    (selected: T) => getOptionId(selected) === optionId
  )

  if (isCurrentlySelected) {
    selectedItems.value = currentSelection.filter(
      (selected: T) => getOptionId(selected) !== optionId
    )
  }
  else {
    selectedItems.value = [...currentSelection, option]
  }
}

const { arrivedState } = useScroll(listRef, {
  throttle: 100
})

const throttledLoadMore = debounce(() => {
  emit('loadMore')
}, props.loadMoreThrottleDelay)

watch(() => arrivedState.bottom, (hasArrivedBottom) => {
  if (props.enableLoadMore && hasArrivedBottom && isOpen.value) {
    throttledLoadMore()
  }
})

onUnmounted(() => {
  throttledLoadMore.cancel()
})

defineExpose({
  dropdownRef
})
</script>

<template>
  <div
    v-if="isOpen"
    ref="dropdownRef"
    class="av-autocomplete-dropdown av-mt-xxxs av-radius-lg"
    :class="props.dropdownClass"
    :style="{ width: props.dropdownWidth, maxHeight: props.maxDropdownHeight }"
  >
    <div
      v-if="dropdownState === DropdownState.LOADING"
      class="av-row av-align-center av-justify-center av-gap-xs av-p-md av-text-text2"
      data-testid="av-autocomplete-dropdown__loading"
    >
      <AvIcon
        :name="MDI_ICONS.LOADING"
        :size="1.5"
        animation="spin"
      />
      <span class="av-autocomplete-dropdown__loading-text av-text-text2">Loading...</span>
    </div>

    <div
      v-else-if="dropdownState === DropdownState.NO_OPTIONS"
      class="av-autocomplete-dropdown__empty av-p-md"
    >
      <slot
        v-if="slots.empty"
        name="empty"
      />
      <div
        v-else
        class="av-autocomplete-dropdown__empty-text av-text-text2"
      >
        No results found
      </div>
    </div>

    <AvList
      v-else
      ref="listRef"
      v-bind="props.listOptions"
      class="av-autocomplete-dropdown__options"
      :class="props.scrollbarClass"
    >
      <template
        v-for="option in filteredOptions"
        :key="getOptionId(option)"
      >
        <slot
          v-if="slots.item"
          name="item"
          :option="option"
          :is-selected="isSelected(option)"
          :toggle="() => toggleOption(option)"
        />
        <AvListItem
          v-else
          :title="getDisplayLabel(option)"
          :icon="isSelected(option) ? MDI_ICONS.CHECK : undefined"
          :selected="isSelected(option)"
          :disabled="option.disabled"
          hover-background-color="var(--light-background-neutral)"
          color-on-hover="var(--base)"
          @click="() => toggleOption(option)"
        >
          <span
            v-if="option.description"
            class="caption-light"
          >
            {{ option.description }}
          </span>
        </AvListItem>
      </template>
    </AvList>
  </div>
</template>

<style lang="scss" scoped>
.av-autocomplete-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  background-color: var(--other-background-base);
  border: 1px solid var(--dark-background-primary1);
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
  box-sizing: border-box;
}

.av-autocomplete-dropdown__options {
  max-height: inherit;
  overflow-y: auto;
}

.av-autocomplete-dropdown__empty {
  text-align: center;
}

.av-autocomplete-dropdown__empty-text {
  font-size: 0.875rem;
  font-weight: 300;
}

.av-autocomplete-dropdown__loading-text {
  font-size: 0.875rem;
  font-weight: 400;
}
</style>

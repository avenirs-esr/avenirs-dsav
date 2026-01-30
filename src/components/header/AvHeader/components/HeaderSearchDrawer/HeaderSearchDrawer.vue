<script lang="ts" setup>
import type { AvHeaderSearchDrawerEmits } from '@/components/header/AvHeader/AvHeader.types'
import { MDI_ICONS } from '@/tokens/icons'

interface HeaderSearchDrawerProps {
  showDrawer: boolean
  searchLabel?: string
  modelValue?: string
  placeholder?: string
  closeLabel?: string
}

defineProps<HeaderSearchDrawerProps>()

defineEmits<AvHeaderSearchDrawerEmits & {
  (e: 'close'): void
}>()
</script>

<template>
  <AvDrawer
    :show="showDrawer"
    padding="var(--spacing-sm)"
    width="75%"
    data-testid="header-search-drawer"
    @escape-pressed="$emit('close')"
  >
    <div class="av-row av-justify-end">
      <AvCancelConfirmButtons
        :cancel-label="closeLabel"
        :cancel-icon="MDI_ICONS.CLOSE_CIRCLE_OUTLINE"
        icon-only
        @cancel="$emit('close')"
      />
    </div>

    <AvSearchBar
      :model-value="modelValue"
      :label="searchLabel"
      :placeholder="placeholder"
      @update:model-value="$emit('update:modelValue', $event)"
      @search="$emit('search', $event)"
    />
  </AvDrawer>
</template>

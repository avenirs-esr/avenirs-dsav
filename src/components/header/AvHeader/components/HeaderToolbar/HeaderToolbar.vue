<script lang="ts" setup>
import type { Slot } from 'vue'
import type { AvHeaderEmits } from '@/components/header/AvHeader/AvHeader.types'
import AvHeaderMenuLinks, { type AvHeaderMenuLinksProps } from '@/components/header/AvHeaderMenuLinks/AvHeaderMenuLinks.vue'
import AvLanguageSelector, { type AvLanguageSelectorProps } from '@/components/interaction/buttons/AvLanguageSelector/AvLanguageSelector.vue'
import AvSearchBar from '@/components/interaction/inputs/AvSearchBar/AvSearchBar.vue'

interface HeaderToolbarProps {
  modelValue?: string
  placeholder?: string
  quickLinks?: AvHeaderMenuLinksProps['links']
  languageSelectorRef?: AvLanguageSelectorProps
  searchLabel?: string
  quickLinksAriaLabel?: string
  showSearch?: boolean
}

defineProps<HeaderToolbarProps>()

const emit = defineEmits<AvHeaderEmits>()

defineSlots<{
  'before-quick-links': Slot
  'after-quick-links': Slot
}>()
</script>

<template>
  <div class="av-header__tools av-hidden av-unhidden--lg av-align-end--lg av-col--lg av-pl-sm--lg av-pr-md--lg">
    <div class="av-header__tools-links av-row--lg av-justify-end--lg av-align-center--lg av-gap-xs--lg av-pb-sm--lg">
      <slot name="before-quick-links" />
      <AvHeaderMenuLinks
        v-if="quickLinks?.length"
        :links="quickLinks"
        :nav-aria-label="quickLinksAriaLabel"
      />
      <slot name="after-quick-links" />
      <template v-if="languageSelectorRef">
        <AvLanguageSelector
          v-bind="languageSelectorRef"
          @select="emit('languageSelect', $event)"
        />
      </template>
    </div>
    <div
      v-if="showSearch"
      class="av-header__search"
    >
      <AvSearchBar
        :label="searchLabel"
        :model-value="modelValue"
        :placeholder="placeholder"
        @update:model-value="emit('update:modelValue', $event)"
        @search="emit('search', $event)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/settings/breakpoints' as *;

.av-header {
  @include min-width(lg) {
    &__tools {
      flex: 1 0 auto;
      margin-left: auto;
      text-align: right;
    }

    &__search {
      margin-left: auto;
      max-width: 24rem;
    }
  }
}
</style>

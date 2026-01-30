<script lang="ts" setup>
import type { AvHeaderMenuDrawerEmits } from '@/components/header/AvHeader/AvHeader.types'
import type { AvHeaderMenuLinksProps } from '@/components/header/AvHeaderMenuLinks/AvHeaderMenuLinks.vue'
import type { AvLanguageSelectorProps } from '@/components/interaction/buttons/AvLanguageSelector/AvLanguageSelector.vue'
import { MDI_ICONS } from '@/tokens/icons'

interface HeaderMenuDrawerProps {
  showDrawer: boolean
  quickLinks?: AvHeaderMenuLinksProps['links']
  languageSelectorRef?: AvLanguageSelectorProps
  quickLinksAriaLabel?: string
  closeLabel?: string
}

defineProps<HeaderMenuDrawerProps>()

defineEmits<AvHeaderMenuDrawerEmits & {
  (e: 'close'): void
  (e: 'quickLinkClick'): void
}>()
</script>

<template>
  <AvDrawer
    :show="showDrawer"
    padding="var(--spacing-sm)"
    width="75%"
    data-testid="header-menu-drawer"
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

    <div class="av-header__menu-drawer">
      <div class="av-header__menu-drawer-links av-col">
        <template v-if="languageSelectorRef">
          <AvLanguageSelector
            v-bind="languageSelectorRef"
            @select="$emit('languageSelect', $event)"
          />
        </template>
        <slot name="before-quick-links" />
        <AvHeaderMenuLinks
          role="navigation"
          :links="quickLinks"
          :nav-aria-label="quickLinksAriaLabel"
          data-testid="header-menu-drawer-links"
          @link-click="$emit('quickLinkClick')"
        />
        <slot name="after-quick-links" />
      </div>

      <slot name="mainnav" />
    </div>
  </AvDrawer>
</template>

<style lang="scss" scoped>
.av-header {
  &__menu-drawer {
    &-links {
      border-bottom: 1px solid var(--stroke);
    }
  }
}
</style>

<script lang="ts" setup>
import type { Slot } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import AvLogo from '@/components/header/AvLogo.vue'
import AvButton from '@/components/interaction/buttons/AvButton/AvButton.vue'
import { MDI_ICONS } from '@/tokens'

interface HeaderBrandProps {
  homeTo: string | RouteLocationRaw
  title: string
  serviceTitle?: string
  showSearchButton?: boolean
  showSearchLabel: string
  showMenuButton?: boolean
  showMenuLabel: string
}

defineProps<HeaderBrandProps>()

const emit = defineEmits<{
  (e: 'showSearchDrawer'): void
  (e: 'showMenuDrawer'): void
}>()

defineSlots<{
  serviceDescription: Slot
}>()
</script>

<template>
  <div class="av-header__brand av-row av-justify-start av-align-center av-wrap av-px-xxs av-w-full av-nowrap--lg av--my-sm--lg av-px-none--lg">
    <div class="av-header__brand-top av-row av-justify-start av-align-center av-w-full">
      <div class="av-header__logo av-enlarge-link">
        <RouterLink
          :to="homeTo"
          :title="title"
        >
          <AvLogo data-testid="header-logo" />
        </RouterLink>
      </div>
      <div
        v-if="showSearchButton || showMenuButton"
        class="av-header__navbar av-row av-flex-fill av-align-start av-justify-end av-mt-xxs av-p-xxs av-gap-sm av-unhidden av-hidden--lg"
      >
        <AvButton
          v-if="showSearchButton"
          :label="showSearchLabel"
          :aria-label="showSearchLabel"
          :title="showSearchLabel"
          :icon="MDI_ICONS.MAGNIFY"
          icon-only
          data-testid="open-search-btn"
          @click.prevent.stop="emit('showSearchDrawer')"
        />
        <AvButton
          v-if="showMenuButton"
          variant="OUTLINED"
          :icon="MDI_ICONS.HAMBURGER_MENU"
          aria-haspopup="dialog"
          :label="showMenuLabel"
          :aria-label="showMenuLabel"
          :title="showMenuLabel"
          icon-only
          data-testid="open-menu-btn"
          @click.prevent.stop="emit('showMenuDrawer')"
        />
      </div>
    </div>
    <div
      v-if="serviceTitle"
      class="av-col av-gap-xxs av-p-sm"
    >
      <span class="n6">
        {{ serviceTitle }}
      </span>
      <slot name="serviceDescription" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/settings/breakpoints' as *;

.av-header {
  &__brand {
    &-top {
      overflow: hidden;
      border-bottom: 1px solid var(--stroke);
    }

    .av-enlarge-link a[href]::before {
      outline-offset: calc(-1 * var(--dimension-xxxs));
    }
  }

  &__logo {
    flex: 0 0 auto;
    padding: calc(var(--spacing-md) / 2);
  }

  &__navbar {
    align-self: stretch;
  }

  @include min-width(lg) {
    &__brand {
      width: auto;

      &-top {
        width: auto;
        border-bottom: none;
      }
    }
  }
}
</style>

<script lang="ts" setup>
import type { Slot } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import { registerNavigationLinkKey } from '@/components/header/AvHeader/injection-key'
import AvHeaderMenuLinks, { type AvHeaderMenuLinksProps } from '@/components/header/AvHeaderMenuLinks/AvHeaderMenuLinks.vue'
import AvLogo from '@/components/header/AvLogo.vue'
import AvLanguageSelector, { type AvLanguageSelectorElement, type AvLanguageSelectorProps } from '@/components/interaction/buttons/AvLanguageSelector/AvLanguageSelector.vue'
import AvSearchBar from '@/components/interaction/inputs/AvSearchBar/AvSearchBar.vue'
import { useAvBreakpoints } from '@/composables'
import { MDI_ICONS } from '@/tokens'

/**
 * AvHeader component props.
 */
export interface AvHeaderProps {
/**
 * Value of the `id` attribute of the search bar input.
 * @default 'searchbar-header'
 */
  searchbarId?: string

  /**
   * Title of the service displayed in the header.
   */
  serviceTitle?: string

  /**
   * Homepage link.
   * @default '/'
   */
  homeTo?: string | RouteLocationRaw

  /**
   * Value related to the search bar (controlled template).
   * @default ''
   */
  modelValue?: string

  /**
   * Placeholder for the search bar.
   * @default 'Rechercher...'
   */
  placeholder?: string

  /**
   * Quick links to display in the header.
   * @default () => []
   */
  quickLinks?: AvHeaderMenuLinksProps['links']

  /**
   * Language selector properties.
   */
  languageSelector?: AvLanguageSelectorProps

  /**
   * Label for the search bar.
   * @default 'Recherche'
   */
  searchLabel?: string

  /**
   * ARIA label for quick links.
   * @default 'Menu secondaire'
   */
  quickLinksAriaLabel?: string

  /**
   * Whether to display the search bar. * @default false
   */
  showSearch?: boolean

  /**
   * Label of the button to display the search bar.
   * @default 'Recherche'
   */
  showSearchLabel?: string

  /**
   * Label of the main menu.
   * @default 'Menu'
   */
  menuLabel?: string

  /**
   * Label of the menu in modal mode.
   * @default 'Menu'
   */
  menuModalLabel?: string

  /**
   * Label of the button to close the modal menu.
   * @default 'Fermer'
   */
  closeMenuModalLabel?: string

  /**
   * Label of the link to the home page (present in the service title).
   * @default 'Accueil'
   */
  homeLabel?: string
}

const {
  searchbarId = 'searchbar-header',
  languageSelector = undefined,
  serviceTitle = undefined,
  homeTo = '/',
  modelValue = '',
  placeholder = 'Rechercher...',
  quickLinks = [],
  searchLabel = 'Recherche',
  quickLinksAriaLabel = 'Menu secondaire',
  showSearchLabel = 'Recherche',
  menuLabel = 'Menu',
  menuModalLabel = 'Menu',
  closeMenuModalLabel = 'Fermer',
  homeLabel = 'Accueil',
  showSearch
} = defineProps<AvHeaderProps>()

/**
 * Events emitted by AvHeader.
 */
const emit = defineEmits<{
  /**
   * Event emitted when updating the searchbar value.
   * @event update:modelValue
   * @param payload Content of the searchbar.
   */
  (e: 'update:modelValue', payload: string): void

  /**
   * Event emitted when a search is executed.
   * @event search
   * @param payload Content of the searchbar.
   */
  (e: 'search', payload: string): void

  /**
   * Event emitted when the user change the language.
   * @event languageSelect
   * @param payload Selected language.
   */
  (e: 'languageSelect', payload: AvLanguageSelectorElement): void
}>()

const slots = defineSlots<{
  /**
   * Slot for adding content before quicklinks.
   */
  'before-quick-links'?: Slot

  /**
   * Slot for adding content after quicklinks.
   */
  'after-quick-links'?: Slot

  /**
   * Slot for displaying content next to or under the service title.
   */
  'serviceDescription'?: Slot

  /**
   * Slot for the main navigation.
   */
  'mainnav'?: Slot

  /**
   * Slot by default for the header additional content.
   */
  'default'?: Slot
}>()

const { isBelowLg } = useAvBreakpoints()

const languageSelectorRef = toRef(() => languageSelector)

const menuOpened = ref(false)
const searchModalOpened = ref(false)
const modalOpened = ref(false)

function hideModal () {
  modalOpened.value = false
  menuOpened.value = false
  searchModalOpened.value = false
  document.getElementById('button-menu')?.focus()
}

function onKeyDown (e: KeyboardEvent) {
  if (e.key === 'Escape') {
    hideModal()
  }
}

onMounted(() => {
  document.addEventListener('keydown', onKeyDown)
})
onUnmounted(() => {
  document.removeEventListener('keydown', onKeyDown)
})

function showMenu () {
  modalOpened.value = true
  menuOpened.value = true
  searchModalOpened.value = false
  // Without the setTimeout, the focus is not done
  setTimeout(() => {
    document.getElementById('close-button')?.focus()
  })
}

function showSearchModal () {
  modalOpened.value = true
  menuOpened.value = false
  searchModalOpened.value = true
}
const onQuickLinkClick = hideModal

const title = computed(() => [homeLabel, serviceTitle].filter(x => x).join(' - '))

const isWithSlotNav = computed(() => Boolean(slots.mainnav))
provide(registerNavigationLinkKey, () => hideModal)
</script>

<template>
  <header
    role="banner"
    class="av-header"
  >
    <div class="av-header__body">
      <div class="av-container">
        <div class="av-row av-justify-start av-align-center av-py-sm">
          <div class="av-header__brand av-row av-justify-start av-align-center av-wrap av-px-xxs av-w-full av-nowrap--lg av--my-sm--lg av-px-none--lg">
            <div class="av-header__brand-top av-row av-justify-start av-align-center av-w-full">
              <div class="av-header__logo av-enlarge-link">
                <RouterLink
                  :to="homeTo"
                  :title
                >
                  <AvLogo
                    data-testid="header-logo"
                  />
                </RouterLink>
              </div>
              <div
                v-if="showSearch || isWithSlotNav || quickLinks?.length"
                class="av-header__navbar av-row av-flex-fill av-align-start av-justify-end av-mt-xxs av-p-xxs av-gap-sm"
              >
                <AvButton
                  v-if="showSearch"
                  class="search-button"
                  :label="showSearchLabel"
                  aria-controls="header-search"
                  :aria-label="showSearchLabel"
                  :title="showSearchLabel"
                  :icon="MDI_ICONS.MAGNIFY"
                  icon-only
                  @click.prevent.stop="showSearchModal()"
                />
                <AvButton
                  v-if="isWithSlotNav || quickLinks?.length"
                  id="button-menu"
                  variant="OUTLINED"
                  :icon="MDI_ICONS.HAMBURGER_MENU"
                  aria-controls="header-navigation"
                  aria-haspopup="dialog"
                  :label="menuLabel"
                  :aria-label="menuLabel"
                  :title="menuLabel"
                  data-testid="open-menu-btn"
                  icon-only
                  @click.prevent.stop="showMenu()"
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
          <div class="av-header__tools av-hidden av-unhidden--lg av-align-end--lg av-col--lg av-pl-sm--lg av-pr-md--lg">
            <div class="av-header__tools-links av-row--lg av-justify-end--lg av-align-center--lg av-gap-xs--lg">
              <slot name="before-quick-links" />
              <AvHeaderMenuLinks
                v-if="!menuOpened && quickLinks?.length"
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
              class="av-header__search demo-display-none"
            >
              <AvSearchBar
                :id="searchbarId"
                :label="searchLabel"
                :model-value="modelValue"
                :placeholder="placeholder"
                style="justify-content: flex-end"
                @update:model-value="emit('update:modelValue', $event)"
                @search="emit('search', $event)"
              />
            </div>
          </div>
        </div>
        <slot />
      </div>
    </div>
    <div class="av-header__menu av-hidden av-unhidden--lg av-mt-sm">
      <div
        v-if="isWithSlotNav && !modalOpened"
        class="av-container av-header__mainnav"
      >
        <slot
          name="mainnav"
          :hidemodal="hideModal"
        />
      </div>
    </div>

    <AvDrawer
      v-if="isBelowLg && (showSearch || isWithSlotNav || (quickLinks && quickLinks.length) || languageSelectorRef)"
      id="header-navigation"
      :show="modalOpened"
      :aria-label="menuModalLabel"
      role="dialog"
      aria-modal="true"
      padding="var(--spacing-sm)"
      width="75%"
    >
      <div class="av-row av-justify-end">
        <AvCancelConfirmButtons
          :cancel-label="closeMenuModalLabel"
          :cancel-icon="MDI_ICONS.CLOSE_CIRCLE_OUTLINE"
          icon-only
          @cancel="hideModal"
        />
      </div>
      <div class="av-header__menu-modal">
        <div class="av-header__menu-modal-links av-col">
          <template v-if="languageSelectorRef">
            <AvLanguageSelector
              v-bind="languageSelectorRef"
              @select="emit('languageSelect', $event)"
            />
          </template>
          <slot name="before-quick-links" />
          <AvHeaderMenuLinks
            v-if="menuOpened"
            role="navigation"
            :links="quickLinks"
            :nav-aria-label="quickLinksAriaLabel"
            @link-click="onQuickLinkClick"
          />
          <slot name="after-quick-links" />
        </div>

        <template v-if="modalOpened">
          <slot
            name="mainnav"
            :hidemodal="hideModal"
          />
        </template>
        <div
          v-if="searchModalOpened"
          class="flex justify-center items-center demo-display-none"
        >
          <AvSearchBar
            :searchbar-id="searchbarId"
            :model-value="modelValue"
            :placeholder="placeholder"
            @update:model-value="emit('update:modelValue', $event)"
            @search="emit('search', $event)"
          />
        </div>
      </div>
    </AvDrawer>
  </header>
</template>

<style lang="scss" scoped>
@use '@/styles/settings/breakpoints' as *;

.av-header {
  position: relative;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  background-color: var(--other-background-base);

  &__brand {
    z-index: 750;

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
    order: 1;
    padding: calc(var(--spacing-md) / 2);
  }

  &__navbar {
    align-self: stretch;
    order: 3;
    z-index: 1000;
  }

  &__tools {
    &-links {
      display: none;
    }
  }

  &__menu {
    box-shadow:inset 0 1px 0 0 var(--stroke);
  }

  &__menu-modal {
    &-links {
      border-bottom: 1px solid var(--stroke);
    }
  }

  li::marker {
    content: none;
  }

  @include min-width(lg) {
    &__brand {
      width: auto;
      z-index: auto;

      &-top {
        width: auto;
        border-bottom: none;
      }
    }

    &__tools {
      flex: 1 0 auto;
      margin-left: auto;
      text-align: right;
    }

    &__navbar {
      display: none;
    }

    &__search {
      margin-left: auto;
      max-width: 24rem;
    }

    .search-button {
      display: none;
    }
  }
}
</style>

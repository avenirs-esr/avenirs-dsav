<script lang="ts" setup>
import type { Slot } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import type { AvHeaderEmits, DrawerMode } from '@/components/header/AvHeader/AvHeader.types'
import type { AvLanguageSelectorProps } from '@/components/interaction/buttons/AvLanguageSelector/AvLanguageSelector.vue'
import HeaderBrand from '@/components/header/AvHeader/components/HeaderBrand/HeaderBrand.vue'
import HeaderMenuDrawer from '@/components/header/AvHeader/components/HeaderMenuDrawer/HeaderMenuDrawer.vue'
import HeaderSearchDrawer from '@/components/header/AvHeader/components/HeaderSearchDrawer/HeaderSearchDrawer.vue'
import HeaderToolbar from '@/components/header/AvHeader/components/HeaderToolbar/HeaderToolbar.vue'
import { registerNavigationLinkKey } from '@/components/header/AvHeader/injection-key'

/**
 * AvHeader component props.
 */
export interface AvHeaderProps {
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
   * Language selector properties.
   */
  languageSelector?: AvLanguageSelectorProps

  /**
   * Label for the search bar.
   * @default 'Recherche'
   */
  searchLabel?: string

  /**
   * Whether to display the search bar.
   * @default false
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
   * Label of the button to close the search and menu drawers.
   * @default 'Fermer'
   */
  closeDrawerLabel?: string

  /**
   * Label of the link to the home page.
   */
  homeLabel: string
}

const {
  languageSelector = undefined,
  homeTo = '/',
  modelValue = '',
  placeholder = 'Rechercher...',
  searchLabel = 'Recherche',
  showSearchLabel = 'Recherche',
  menuLabel = 'Menu',
  closeDrawerLabel = 'Fermer',
  homeLabel,
  showSearch = false
} = defineProps<AvHeaderProps>()

/**
 * Events emitted by AvHeader.
 */
const emit = defineEmits<AvHeaderEmits>()

const slots = defineSlots<{
  /**
   * Slot for adding content before quicklinks.
   */
  quickLinks?: Slot

  /**
   * Slot for the role context (i.e., user role or context-specific information).
   */
  roleContext?: Slot

  /**
   * Slot for the main navigation.
   */
  mainnav?: Slot

  /**
   * Slot by default for the header additional content.
   */
  default?: Slot
}>()

const languageSelectorRef = toRef(() => languageSelector)

const drawerMode = ref<DrawerMode>('closed')

function hideDrawer () {
  drawerMode.value = 'closed'
}

function onKeyDown (e: KeyboardEvent) {
  if (e.key === 'Escape') {
    hideDrawer()
  }
}

onMounted(() => {
  document.addEventListener('keydown', onKeyDown)
})
onUnmounted(() => {
  document.removeEventListener('keydown', onKeyDown)
})

function showMenuDrawer () {
  drawerMode.value = 'menu'
}

function showSearchDrawer () {
  drawerMode.value = 'search'
}

const isWithSlotNav = computed(() => Boolean(slots.mainnav))
provide(registerNavigationLinkKey, () => hideDrawer)
</script>

<template>
  <header
    role="banner"
    class="av-header"
  >
    <div class="av-header__body">
      <div class="av-container">
        <div class="av-row av-justify-start av-align-center av-pt-sm av-pb-xxs">
          <HeaderBrand
            :home-to="homeTo"
            :title="homeLabel"
            :show-search-button="showSearch"
            :show-search-label="showSearchLabel"
            :show-menu-button="isWithSlotNav"
            :show-menu-label="menuLabel"
            @show-search-drawer="showSearchDrawer"
            @show-menu-drawer="showMenuDrawer"
          >
            <template #roleContext>
              <slot name="roleContext" />
            </template>
          </HeaderBrand>

          <HeaderToolbar
            :model-value="modelValue"
            :placeholder="placeholder"
            :language-selector-ref="languageSelectorRef"
            :search-label="searchLabel"
            :show-search="showSearch"
            @update:model-value="emit('update:modelValue', $event)"
            @search="emit('search', $event)"
            @language-select="emit('languageSelect', $event)"
          >
            <slot name="quickLinks" />
          </HeaderToolbar>
        </div>
        <slot />
      </div>
    </div>
    <div class="av-header__menu av-hidden av-unhidden--lg av-mt-sm">
      <div
        v-if="drawerMode === 'closed'"
        class="av-container av-header__mainnav"
      >
        <slot name="mainnav" />
      </div>
    </div>

    <HeaderSearchDrawer
      :show-drawer="drawerMode === 'search'"
      :search-label="searchLabel"
      :close-label="closeDrawerLabel"
      :model-value="modelValue"
      :placeholder="placeholder"
      data-testid="header-search-drawer"
      @close="hideDrawer"
      @update:model-value="emit('update:modelValue', $event)"
      @search="emit('search', $event)"
    />

    <HeaderMenuDrawer
      :show-drawer="drawerMode === 'menu'"
      :language-selector-ref="languageSelectorRef"
      :close-label="closeDrawerLabel"
      data-testid="header-menu-drawer"
      @close="hideDrawer"
      @quick-link-click="hideDrawer"
      @language-select="emit('languageSelect', $event)"
    >
      <template #quickLinks>
        <slot name="quickLinks" />
      </template>
      <template #mainnav>
        <slot name="mainnav" />
      </template>
    </HeaderMenuDrawer>
  </header>
</template>

<style lang="scss" scoped>
.av-header {
  position: relative;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  background-color: var(--other-background-base);

  &__menu {
    box-shadow: inset 0 1px 0 0 var(--stroke);
  }
}
</style>

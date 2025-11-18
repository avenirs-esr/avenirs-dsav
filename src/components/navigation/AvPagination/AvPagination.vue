<script lang="ts" setup>
import type { Page } from '@/components/navigation/AvPagination/AvPagination.types'
import AvIcon from '@/components/base/AvIcon/AvIcon.vue'
import { MDI_ICONS } from '@/tokens'

/**
 * AvPagination component Props.
 */
export interface AvPaginationProps {
  /**
   * Allows compact display:
   * "Page x of y" with only navigation icons (no text).
   * @default false
   */
  compact?: boolean

  /**
   * List of pages.
   * Each page is an object containing information such as `href` and `label`.
   */
  pages: Page[]

  /**
   * Index of currently selected page (starts at 0).
   * @default 0
   */
  currentPage?: number

  /**
   * Tooltip text for first page link.
   */
  firstPageLabel?: string

  /**
   * Tooltip text for last page link.
   */
  lastPageLabel?: string

  /**
   * Tooltip text for next page link.
   */
  nextPageLabel?: string

  /**
   * Tooltip text for previous page link.
   */
  prevPageLabel?: string

  /**
   * Text for compact current page.
   */
  compactCurrentPageLabel?: string

  /**
   * Maximum number of pages displayed in pagination.
   * @default 2
   */
  truncLimit?: number

  /**
   * ARIA label of pagination for accessibility.
   */
  ariaLabel?: string
}

const {
  compact = false,
  truncLimit = 2,
  currentPage = 0,
  firstPageLabel,
  lastPageLabel,
  nextPageLabel,
  prevPageLabel,
  compactCurrentPageLabel,
  ariaLabel,
  pages,
} = defineProps<AvPaginationProps>()

const emit = defineEmits<{
  /**
   * Événement émis lorsque l'utilisateur change de page.
   * @param payload L'index de la nouvelle page sélectionnée.
   */
  (e: 'update:current-page', payload: number): void
}>()

const startIndex = computed(() => {
  return Math.min(pages.length - 1 - truncLimit, Math.max(currentPage - (truncLimit - truncLimit % 2) / 2, 0))
})
const endIndex = computed(() => {
  return Math.min(pages.length - 1, startIndex.value + truncLimit)
})
const displayedPages = computed(() => {
  return pages.length > truncLimit ? pages.slice(startIndex.value, endIndex.value + 1) : pages
})

const updatePage = (index: number) => emit('update:current-page', index)
const toPage = (index: number) => updatePage(index)
const tofirstPage = () => toPage(0)
const toPreviousPage = () => toPage(Math.max(0, currentPage - 1))
const toNextPage = () => toPage(Math.min(pages.length - 1, currentPage + 1))
const toLastPage = () => toPage(pages.length - 1)
const isCurrentPage = (page: Page) => pages.indexOf(page) === currentPage
</script>

<template>
  <nav
    role="navigation"
    class="av-pagination av-nav"
    :aria-label="ariaLabel"
  >
    <ul class="av-pagination__list">
      <li v-if="compact && !!compactCurrentPageLabel">
        <span class="b2-regular">
          {{ compactCurrentPageLabel }}
        </span>
      </li>
      <li>
        <a
          v-if="!compact"
          :href="pages[0]?.href"
          class="av-pagination__link"
          :title="firstPageLabel"
          :aria-disabled="currentPage === 0 ? true : undefined"
          @click.prevent="tofirstPage()"
        >
          <AvIcon
            :name="MDI_ICONS.PAGE_FIRST"
            :size="1.5"
          />
          <span class="av-sr-only">{{ firstPageLabel }}</span>
        </a>
      </li>
      <li>
        <a
          :href="pages[Math.max(currentPage - 1, 0)]?.href"
          class="av-pagination__link"
          :title="prevPageLabel"
          :aria-disabled="currentPage === 0 ? true : undefined"
          @click.prevent="toPreviousPage()"
        >
          <AvIcon
            :name="MDI_ICONS.NAVIGATE_BEFORE"
            :size="1.5"
          />
          <span
            v-if="!compact"
            class="caption-regular av-hidden av-unhidden-md"
          >
            {{ prevPageLabel }}
          </span>
        </a>
      </li>
      <template v-if="!compact">
        <li
          v-for="(page, idx) in displayedPages"
          :key="idx"
        >
          <a
            :href="page?.href"
            class="av-pagination__link"
            :title="page.title"
            :aria-current="isCurrentPage(page) ? 'page' : undefined"
            @click.prevent="toPage(pages.indexOf(page))"
          >
            <span v-if="displayedPages.indexOf(page) === 0 && startIndex > 0 ">...</span>
            {{ page.label }}
            <span v-if="displayedPages.indexOf(page) === displayedPages.length - 1 && endIndex < pages.length - 1">...</span>
          </a>
        </li>
      </template>
      <li>
        <a
          :href="pages[Math.min(currentPage + 1, pages.length - 1)]?.href"
          class="av-pagination__link"
          :title="nextPageLabel"
          :disabled="currentPage === pages.length - 1 ? true : undefined"
          :aria-disabled="currentPage === pages.length - 1 ? true : undefined"
          @click.prevent="toNextPage()"
        >
          <span
            v-if="!compact"
            class="caption-regular av-hidden av-unhidden-md"
          >
            {{ nextPageLabel }}
          </span>
          <AvIcon
            :name="MDI_ICONS.NAVIGATE_NEXT"
            :size="1.5"
          />
        </a>
      </li>
      <li>
        <a
          v-if="!compact"
          class="av-pagination__link"
          :href="pages[pages.length - 1]?.href"
          :title="lastPageLabel"
          :disabled="currentPage === pages.length - 1 ? true : undefined"
          :aria-disabled="currentPage === pages.length - 1 ? true : undefined"
          @click.prevent="toLastPage()"
        >
          <span class="av-sr-only">{{ lastPageLabel }}</span>
          <AvIcon
            :name="MDI_ICONS.PAGE_LAST"
            :size="1.5"
          />
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.av-pagination {
  &__list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--spacing-sm);
  }

  &__link {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-height: var(--dimension-lg);
    min-width: var(--dimension-lg);
    padding: var(--spacing-xxs) var(--spacing-xs);
    width: -moz-fit-content;
    width: fit-content;
    border-radius: var(--radius-lg);
    gap: var(--spacing-xxs);
    color: var(--dark-background-primary1);

    :deep(.av-icon__icon) {
      background-color: var(--dark-background-primary1);
    }

    & * {
      color: inherit;
    }

    &[aria-disabled="true"],
    &[aria-disabled="true"] * {
      color: var(--dark-background-neutral);
      pointer-events: none;

      :deep(.av-icon__icon) {
        background-color: var(--dark-background-neutral);
      }
    }

    &[aria-current="page"],
    &:hover,
    &:hover * {
      background-color: var(--dark-background-primary1) !important;
      color: var(--other-background-base) !important;

      :deep(.av-icon__icon) {
        background-color: var(--other-background-base) !important;
      }
    }
  }
}
</style>

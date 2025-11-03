import type { Meta, StoryFn } from '@storybook/vue3'
import type { AvPaginationProps } from '@/components/navigation/AvPagination/AvPagination.vue'
import { AvPagination, getPaginationPages } from '@/components/navigation'

/**
 * <h1 class="n1">Pagination - <code>AvPagination</code></h1>
 *
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p class="b2-regular">
 *   The <code>AvPagination</code> is a pagination system compliant with good ergonomic and accessibility practices (ARIA).
 *   It allows easy navigation through multiple pages, with advanced features such as page display limitation and event management.
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <p class="b2-regular">
 *   This component displays links for the first, previous, middle, next, and last pages,
 *   with adaptive controls according to pagination status.
 * </p>
 */

const meta: Meta<AvPaginationProps> = {
  title: 'Components/Navigation/AvPagination',
  component: AvPagination,
  tags: ['autodocs'],
  argTypes: {
    compact: { control: 'boolean' },
    truncLimit: { control: 'number' },
    currentPage: { control: 'number' },
    firstPageLabel: { control: 'text' },
    lastPageLabel: { control: 'text' },
    nextPageLabel: { control: 'text' },
    prevPageLabel: { control: 'text' },
    compactCurrentPageLabel: { control: 'text' },
    ariaLabel: { control: 'text' },
  },
  args: {
    compact: false,
    truncLimit: 5,
    currentPage: 0,
    firstPageLabel: 'First page',
    lastPageLabel: 'Last page',
    nextPageLabel: 'Next page',
    prevPageLabel: 'Previous page',
    compactCurrentPageLabel: 'Page 1',
    ariaLabel: 'Pagination navigation',
    pages: getPaginationPages(ref(10)),
  },
}

export default meta

const Template: StoryFn<AvPaginationProps> = args => ({
  components: { AvPagination },
  setup () {
    return { args }
  },
  template: `<AvPagination v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {}

export const DefaultMiddlePage = Template.bind({})
DefaultMiddlePage.args = {
  currentPage: 4,
}

export const DefaultLastPage = Template.bind({})
DefaultLastPage.args = {
  currentPage: 9,
}

export const DefaultTruncated = Template.bind({})
DefaultTruncated.args = {
  truncLimit: 1,
}

export const Compact = Template.bind({})
Compact.args = {
  compact: true,
}

export const CompactMiddlePage = Template.bind({})
CompactMiddlePage.args = {
  compact: true,
  currentPage: 4,
  compactCurrentPageLabel: 'Page 5',
}

export const CompactLastPage = Template.bind({})
CompactLastPage.args = {
  compact: true,
  currentPage: 9,
  compactCurrentPageLabel: 'Page 10',
}

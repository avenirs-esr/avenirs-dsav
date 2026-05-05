import type { Meta, StoryFn } from '@storybook/vue3'
import AvTable, { type AvTableColumn, type AvTableProps } from '@/components/dataDisplay/AvTable/AvTable.vue'

/**
 * <h1 class="n1">Data Display - <code>AvTable</code></h1>
 *
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvTable</code> component provides tabular display for typed data. It is
 *     headless on the logic side (via <strong>TanStack Table</strong>) while maintaining full control
 *     over HTML/CSS rendering using the design system tokens.
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <ul>
 *   <li><span class="b2-regular">A scrollable <code>div</code> wrapper with horizontal overflow.</span></li>
 *   <li><span class="b2-regular">A semantic <code>table</code> element with <code>caption</code>, <code>thead</code> and <code>tbody</code>.</span></li>
 *   <li><span class="b2-regular">Dynamic slots <code>cell(key)</code> and <code>header(key)</code> per column.</span></li>
 *   <li><span class="b2-regular">Customizable <code>loading</code> and <code>empty</code> states.</span></li>
 * </ul>
 */

interface User {
  id: string
  lastName: string
  firstName: string
  status: string
}

const columns: AvTableColumn<User>[] = [
  { key: 'lastName', label: 'Last name' },
  { key: 'firstName', label: 'First name' },
  { key: 'status', label: 'Status' },
]

const rows: User[] = [
  { id: '1', lastName: 'Dupont', firstName: 'Alice', status: 'Active' },
  { id: '2', lastName: 'Martin', firstName: 'Bob', status: 'Inactive' },
  { id: '3', lastName: 'Bernard', firstName: 'Camille', status: 'Active' },
]

const meta: Meta = {
  title: 'Components/DataDisplay/AvTable',
  component: AvTable as unknown as Meta['component'],
  tags: ['autodocs'],
  argTypes: {
    loading: { control: 'boolean' },
    caption: { control: 'text' },
  },
  args: {
    columns,
    rows,
    rowKey: 'id',
    loading: false,
    caption: 'User list',
  },
}

export default meta

type StoryArgs = AvTableProps<User>

const Template: StoryFn<StoryArgs> = args => ({
  components: { AvTable },
  setup () {
    return { args }
  },
  template: `<AvTable v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {}

export const Empty = Template.bind({})
Empty.args = {
  rows: [],
  caption: 'Empty table',
}

export const Loading = Template.bind({})
Loading.args = {
  loading: true,
  caption: 'Loading',
}

export const WithCustomCellSlot: StoryFn<StoryArgs> = args => ({
  components: { AvTable },
  setup () {
    return { args }
  },
  template: `
    <AvTable v-bind="args">
      <template #cell(status)="{ value }">
        <span
          :style="{
            display: 'inline-block',
            padding: '0.125rem 0.5rem',
            borderRadius: '0.75rem',
            backgroundColor: value === 'Active' ? 'var(--light-background-success)' : 'var(--light-background-neutral)',
            color: value === 'Active' ? 'var(--light-foreground-success)' : 'var(--light-foreground-neutral)',
          }"
        >
          {{ value }}
        </span>
      </template>
    </AvTable>
  `,
})
WithCustomCellSlot.args = {}

export const WithCustomEmptySlot: StoryFn<StoryArgs> = args => ({
  components: { AvTable },
  setup () {
    return { args }
  },
  template: `
    <AvTable v-bind="args">
      <template #empty>
        <span style="color: var(--text2);">No users found for these criteria.</span>
      </template>
    </AvTable>
  `,
})
WithCustomEmptySlot.args = {
  rows: [],
}

import type { VueWrapper } from '@vue/test-utils'
import { expect } from 'vitest'
import AvTable, { type AvTableColumn } from '@/components/dataDisplay/AvTable/AvTable.vue'
import { BddTest, mountWithRouter } from '@/tests/utils'

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
]

BddTest().given('an AvTable component', () => {
  let wrapper: VueWrapper

  BddTest().when('mounted with columns and rows', () => {
    BddTest().then('it should render column headers', async () => {
      wrapper = await mountWithRouter(AvTable, {
        props: { columns, rows, rowKey: 'id' },
      })
      expect(wrapper.find('thead').exists()).toBe(true)
      expect(wrapper.text()).toContain('Last name')
      expect(wrapper.text()).toContain('First name')
      expect(wrapper.text()).toContain('Status')
    })

    BddTest().then('it should render all rows', async () => {
      wrapper = await mountWithRouter(AvTable, {
        props: { columns, rows, rowKey: 'id' },
      })
      expect(wrapper.findAll('.av-table__row--body')).toHaveLength(2)
      expect(wrapper.text()).toContain('Dupont')
      expect(wrapper.text()).toContain('Martin')
    })

    BddTest().then('it should render th elements with scope="col"', async () => {
      wrapper = await mountWithRouter(AvTable, {
        props: { columns, rows, rowKey: 'id' },
      })
      const headers = wrapper.findAll('th')
      headers.forEach((th) => {
        expect(th.attributes('scope')).toBe('col')
      })
    })

    BddTest().then('it should render a caption when provided', async () => {
      wrapper = await mountWithRouter(AvTable, {
        props: { columns, rows, rowKey: 'id', caption: 'User list' },
      })
      const caption = wrapper.find('caption')
      expect(caption.exists()).toBe(true)
      expect(caption.text()).toBe('User list')
    })

    BddTest().then('it should not render a caption when not provided', async () => {
      wrapper = await mountWithRouter(AvTable, {
        props: { columns, rows, rowKey: 'id' },
      })
      expect(wrapper.find('caption').exists()).toBe(false)
    })

    BddTest().then('it should set aria-busy to false when not loading', async () => {
      wrapper = await mountWithRouter(AvTable, {
        props: { columns, rows, rowKey: 'id' },
      })
      expect(wrapper.find('.av-table-wrapper').attributes('aria-busy')).toBe('false')
    })
  })

  BddTest().when('rows is empty', () => {
    BddTest().then('it should display the empty state row', async () => {
      wrapper = await mountWithRouter(AvTable, {
        props: { columns, rows: [], rowKey: 'id' },
      })
      expect(wrapper.find('.av-table__row--empty').exists()).toBe(true)
    })

    BddTest().then('it should render a custom empty slot when provided', async () => {
      wrapper = await mountWithRouter(AvTable, {
        props: { columns, rows: [], rowKey: 'id' },
        slots: { empty: '<span>No results</span>' },
      })
      expect(wrapper.text()).toContain('No results')
    })
  })

  BddTest().when('loading is true', () => {
    BddTest().then('it should keep the table visible and show the loading row', async () => {
      wrapper = await mountWithRouter(AvTable, {
        props: { columns, rows, rowKey: 'id', loading: true },
      })
      expect(wrapper.find('table').exists()).toBe(true)
      expect(wrapper.find('thead').exists()).toBe(true)
      expect(wrapper.find('.av-table__row--loading').exists()).toBe(true)
      expect(wrapper.findAll('.av-table__row--body')).toHaveLength(0)
    })

    BddTest().then('it should set aria-busy to true', async () => {
      wrapper = await mountWithRouter(AvTable, {
        props: { columns, rows, rowKey: 'id', loading: true },
      })
      expect(wrapper.find('.av-table-wrapper').attributes('aria-busy')).toBe('true')
    })

    BddTest().then('it should render a custom loading slot when provided', async () => {
      wrapper = await mountWithRouter(AvTable, {
        props: { columns, rows, rowKey: 'id', loading: true },
        slots: { loading: '<span>Loading…</span>' },
      })
      expect(wrapper.text()).toContain('Loading…')
    })
  })

  BddTest().when('a custom cell slot is provided', () => {
    BddTest().then('it should render the slot content for matching column', async () => {
      wrapper = await mountWithRouter(AvTable, {
        props: { columns, rows, rowKey: 'id' },
        slots: {
          'cell(status)': '<span class="custom-badge">{{ value }}</span>',
        },
      })
      expect(wrapper.find('.custom-badge').exists()).toBe(true)
    })
  })

  BddTest().when('a custom header slot is provided', () => {
    BddTest().then('it should render the slot content for matching column header', async () => {
      wrapper = await mountWithRouter(AvTable, {
        props: { columns, rows, rowKey: 'id' },
        slots: {
          'header(lastName)': '<span class="custom-header">Last name ↕</span>',
        },
      })
      expect(wrapper.find('.custom-header').exists()).toBe(true)
      expect(wrapper.find('.custom-header').text()).toBe('Last name ↕')
    })
  })

  BddTest().when('textAlign is not provided', () => {
    BddTest().then('cells and headers should default to start alignment', async () => {
      wrapper = await mountWithRouter(AvTable, {
        props: { columns, rows, rowKey: 'id' },
      })
      const header = wrapper.find('th')
      const cell = wrapper.find('.av-table__cell--body')
      expect(header.attributes('style')).toContain('text-align: start')
      expect(cell.attributes('style')).toContain('text-align: start')
    })
  })

  BddTest().when('textAlign is set to center', () => {
    BddTest().then('cells and headers should have center alignment', async () => {
      wrapper = await mountWithRouter(AvTable, {
        props: { columns, rows, rowKey: 'id', textAlign: 'center' },
      })
      const header = wrapper.find('th')
      const cell = wrapper.find('.av-table__cell--body')
      expect(header.attributes('style')).toContain('text-align: center')
      expect(cell.attributes('style')).toContain('text-align: center')
    })
  })
})

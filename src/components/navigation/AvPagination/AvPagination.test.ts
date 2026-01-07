import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect } from 'vitest'
import AvPagination from '@/components/navigation/AvPagination/AvPagination.vue'
import { BddTest } from '@/tests/utils'

BddTest().given('an AvPagination', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvPagination>>

  const labelProps = {
    ariaLabel: 'Pagination',
    firstPageLabel: 'Première page',
    lastPageLabel: 'Dernière page',
    nextPageLabel: 'Page suivante',
    prevPageLabel: 'Page précédente',
    compactCurrentPageLabel: 'Page 3 sur 4'
  }

  const pagesMock = [
    { title: '1', label: '1', href: '#page-1' },
    { title: '2', label: '2', href: '#page-2' },
    { title: '3', label: '3', href: '#page-3' },
    { title: '4', label: '4', href: '#page-4' },
  ]

  BddTest().when('the component is mounted', () => {
    beforeEach(() => {
      wrapper = mount(AvPagination, {
        props: {
          currentPage: 1,
          pages: pagesMock,
          compact: false,
          ...labelProps
        }
      })
    })

    BddTest().then('it should render correctly', () => {
      const links = wrapper.findAll('a.av-pagination__link')
      expect(links.length).toBeGreaterThan(0)
      expect(links[0].attributes('href')).toBe('#page-1')

      expect(wrapper.attributes('aria-label')).toBe('Pagination')

      const currentPageLink = links.find(a => a.attributes('aria-current') === 'page')
      expect(currentPageLink?.text()).toContain('2')
    })

    BddTest().and('in compact mode', () => {
      beforeEach(() => {
        wrapper = mount(AvPagination, {
          props: {
            currentPage: 2,
            pages: pagesMock,
            compact: true,
            ...labelProps
          }
        })
      })

      BddTest().then('it should render compact mode text', () => {
        expect(wrapper.text()).toContain('Page 3 sur 4')
        const pageNumberLinks = wrapper.findAll('a.av-pagination__link.av-unhidden-lg')
        expect(pageNumberLinks.length).toBe(0)
      })
    })

    BddTest().and('clicking on navigation', () => {
      BddTest().then('it should emit update:current-page', async () => {
        await wrapper.find('a[title="Page suivante"]').trigger('click')
        expect(wrapper.emitted('update:current-page')).toBeTruthy()
        expect(wrapper.emitted('update:current-page')![0]).toEqual([2])

        await wrapper.find('a[title="Page précédente"]').trigger('click')
        expect(wrapper.emitted('update:current-page')![1]).toEqual([0])

        await wrapper.find('a[title="Première page"]').trigger('click')
        expect(wrapper.emitted('update:current-page')![2]).toEqual([0])

        await wrapper.find('a[title="Dernière page"]').trigger('click')
        expect(wrapper.emitted('update:current-page')![3]).toEqual([pagesMock.length - 1])

        const pageLinks = wrapper.findAll('a.av-pagination__link:not(.av-unhidden-md)')
        const linkToPage2 = pageLinks.find(link => link.text() === '2')
        await linkToPage2!.trigger('click')

        expect(wrapper.emitted('update:current-page')![4]).toEqual([1])
      })
    })
  })

  BddTest().when('on first page', () => {
    beforeEach(() => {
      wrapper = mount(AvPagination, {
        props: {
          currentPage: 0,
          pages: pagesMock,
          ...labelProps
        }
      })
    })

    BddTest().then('it should disable previous navigation buttons', () => {
      expect(wrapper.find('a[title="Page précédente"]').attributes('aria-disabled')).toBe('true')
      expect(wrapper.find('a[title="Première page"]').attributes('aria-disabled')).toBe('true')
    })
  })

  BddTest().when('on last page', () => {
    beforeEach(() => {
      wrapper = mount(AvPagination, {
        props: {
          currentPage: pagesMock.length - 1,
          pages: pagesMock,
          ...labelProps
        }
      })
    })

    BddTest().then('it should disable next navigation buttons', () => {
      expect(wrapper.find('a[title="Page suivante"]').attributes('aria-disabled')).toBe('true')
      expect(wrapper.find('a[title="Dernière page"]').attributes('aria-disabled')).toBe('true')
    })
  })

  BddTest().when('there are no pages', () => {
    beforeEach(() => {
      wrapper = mount(AvPagination, {
        props: {
          currentPage: 0,
          pages: [],
          ...labelProps
        }
      })
    })

    BddTest().then('it should not render the pagination', () => {
      expect(wrapper.find('nav').exists()).toBe(false)
    })
  })
})

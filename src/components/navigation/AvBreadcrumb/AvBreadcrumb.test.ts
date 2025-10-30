import { mount, RouterLinkStub, type VueWrapper } from '@vue/test-utils'
import { beforeEach } from 'vitest'
import AvBreadcrumb, { type AvBreadcrumbProps } from '@/components/navigation/AvBreadcrumb/AvBreadcrumb.vue'
import { BddTest } from '@/tests'

const doExpandSpy = vi.fn()
const onTransitionEndSpy = vi.fn()

vi.mock('@/composables/use-collapsable/use-collapsable', () => ({
  useCollapsable: () => ({
    collapse: ref(),
    collapsing: ref(false),
    cssExpanded: ref(false),
    doExpand: doExpandSpy,
    onTransitionEnd: onTransitionEndSpy,
  }),
}))

const stubs = { RouterLink: RouterLinkStub }

BddTest().given('an AvBreadcrumb component', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvBreadcrumb>>

  BddTest().and('given no links', () => {
    const props: AvBreadcrumbProps = { links: [] }

    BddTest().when('the component is mounted', () => {
      beforeEach(() => {
        wrapper = mount(AvBreadcrumb, { props, global: { stubs } })
      })

      BddTest().then('it should not render the breadcrumb', () => {
        expect(wrapper.find('.av-breadcrumb').exists()).toBe(false)
      })
    })
  })

  BddTest().and('given some links', () => {
    const props: AvBreadcrumbProps = {
      links: [
        { text: 'Home', to: '/home' },
        { text: 'Level 1' },
        { text: 'Level 2', to: { name: 'level-2' } },
        { text: 'Current' }
      ]
    }

    BddTest().when('the component is mounted', () => {
      beforeEach(() => {
        wrapper = mount(AvBreadcrumb, { props, global: { stubs } })
      })

      BddTest().then('it should render the breadcrumb', () => {
        expect(wrapper.find('.av-breadcrumb').exists()).toBe(true)
      })

      BddTest().then('it should render the links items', () => {
        expect(wrapper.findAll('.fr-breadcrumb__item')).toHaveLength(4)
      })

      BddTest().then('it should render one RouterLink', () => {
        expect(wrapper.findAllComponents(RouterLinkStub)).toHaveLength(2)
      })

      BddTest().then('it should render 4 links (2 for RouterLink and 2 for a)', () => {
        expect(wrapper.findAll('a')).toHaveLength(4)
      })

      BddTest().then('it should set aria-current="page" only on the last item', () => {
        const items = wrapper.findAll('.fr-breadcrumb__link')

        const lastItem = items.at(items.length - 1)!
        expect(lastItem.attributes('aria-current')).toBe('page')

        for (let i = 0; i < items.length - 1; i++) {
          expect(items[i].attributes('aria-current')).toBeUndefined()
        }
      })

      BddTest().then('it should render the expand button', () => {
        const button = wrapper.find('.fr-breadcrumb__button')
        expect(button.exists()).toBe(true)
        expect(button.text()).toBe('Voir le fil d’Ariane')
      })

      BddTest().and('when clicking the expand button', () => {
        beforeEach(async () => {
          const button = wrapper.find('.fr-breadcrumb__button')
          await button.trigger('click')
        })

        BddTest().then('it should call doExpand', () => {
          expect(doExpandSpy).toHaveBeenCalled()
        })
      })
    })

    BddTest().when('transitionend is triggered', () => {
      beforeEach(() => {
        wrapper = mount(AvBreadcrumb, { props, global: { stubs } })
      })

      BddTest().then('it should call onTransitionEnd with current isActive and false', async () => {
        await wrapper.find('.av-collapse').trigger('transitionend')
        expect(onTransitionEndSpy).toHaveBeenCalledWith(false)
      })
    })
  })

  BddTest().and('given a router link as last breadcrumb item', () => {
    const props: AvBreadcrumbProps = {
      links: [
        { text: 'Home', to: '/home' },
        { text: 'Current', to: { name: 'current' } }
      ]
    }

    BddTest().when('the component is mounted', () => {
      beforeEach(() => {
        wrapper = mount(AvBreadcrumb, { props, global: { stubs } })
      })

      BddTest().then('it should set aria-current="page" on the last RouterLink item', () => {
        const items = wrapper.findAll('.fr-breadcrumb__link')

        const lastItem = items.at(items.length - 1)!
        expect(lastItem.attributes('aria-current')).toBe('page')

        const firstItem = items.at(0)!
        expect(firstItem.attributes('aria-current')).toBeUndefined()
      })
    })
  })

  BddTest().and('given custom labels', () => {
    const props: AvBreadcrumbProps = {
      links: [
        { text: 'Home', to: '/home' },
        { text: 'Current' }
      ],
      navigationLabel: 'Custom navigation label',
      showBreadcrumbLabel: 'Custom show breadcrumb label',
    }

    BddTest().when('the component is mounted', () => {
      beforeEach(() => {
        wrapper = mount(AvBreadcrumb, { props, global: { stubs } })
      })

      BddTest().then('it should render the custom navigation label', () => {
        expect(wrapper.find('nav').attributes('aria-label')).toBe('Custom navigation label')
      })

      BddTest().then('it should render the custom show breadcrumb label', () => {
        const button = wrapper.find('.fr-breadcrumb__button')
        expect(button.text()).toBe('Custom show breadcrumb label')
      })
    })
  })
})

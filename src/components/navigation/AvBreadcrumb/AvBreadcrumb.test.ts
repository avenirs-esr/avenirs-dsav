import { mount, type VueWrapper } from '@vue/test-utils'
import AvBreadcrumb, { type AvBreadcrumbProps } from '@/components/navigation/AvBreadcrumb/AvBreadcrumb.vue'
import { BddTest } from '@/tests'
import { DsfrBreadcrumbStub } from '@/tests/stubs'

const stubs = { DsfrBreadcrumb: DsfrBreadcrumbStub }

BddTest().given('an AvBreadcrumb component', () => {
  BddTest().when('the component is mounted with given props', () => {
    let wrapper: VueWrapper<InstanceType<typeof AvBreadcrumb>>

    const props: AvBreadcrumbProps = {
      links: [{ text: '/' }],
      navigationLabel: 'navigation-label',
      showBreadcrumbLabel: 'show-breacrumb-label'
    }

    beforeEach(() => {
      wrapper = mount(AvBreadcrumb, { props, global: { stubs } })
    })

    BddTest().then('it should pass these props to DsfrBreadcrumb', () => {
      const breadcrumb = wrapper.findComponent({ name: 'DsfrBreadcrumb' })

      expect(breadcrumb.props('links')).toStrictEqual(props.links)
      expect(breadcrumb.props('navigationLabel')).toBe(props.navigationLabel)
      expect(breadcrumb.props('showBreadcrumbLabel')).toBe(props.showBreadcrumbLabel)
    })
  })
})

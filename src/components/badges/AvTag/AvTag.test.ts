import { mount, type VueWrapper } from '@vue/test-utils'
import AvTag, { type AvTagProps } from '@/components/badges/AvTag/AvTag.vue'
import { BddTest } from '@/tests'
import { DsfrTagStub } from '@/tests/stubs'

const stubs = { DsfrTag: DsfrTagStub }

BddTest().given('an AvBreadcrumb component', () => {
  BddTest().when('the component is mounted with given props', () => {
    let wrapper: VueWrapper<InstanceType<typeof AvTag>>

    const props: AvTagProps = {
      label: 'test-label',
      disabled: false,
      icon: 'mdi:home',
      iconOnly: false,
      link: '#',
      selectable: true,
      selected: false,
      small: false,
      tagName: 'button',
      value: '1'
    }

    beforeEach(() => {
      wrapper = mount(AvTag, { props, global: { stubs } })
    })

    BddTest().then('it should pass these props to DsfrTag', () => {
      const tag = wrapper.findComponent({ name: 'DsfrTag' })

      expect(tag.props('label')).toBe(props.label)
      expect(tag.props('disabled')).toBe(props.disabled)
      expect(tag.props('icon')).toBe(props.icon)
      expect(tag.props('iconOnly')).toBe(props.iconOnly)
      expect(tag.props('link')).toBe(props.link)
      expect(tag.props('selectable')).toBe(props.selectable)
      expect(tag.props('selected')).toBe(props.selected)
      expect(tag.props('small')).toBe(props.small)
      expect(tag.props('tagName')).toBe(props.tagName)
      expect(tag.props('value')).toBe(props.value)
    })
  })
})

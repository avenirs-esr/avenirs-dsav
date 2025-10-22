import { mount, type VueWrapper } from '@vue/test-utils'
import AvIcon from '@/components/base/AvIcon/AvIcon.vue'
import { BddTest } from '@/tests/utils'

vi.mock('@iconify/vue', () => ({
  Icon: {
    name: 'Icon',
    props: ['icon', 'style', 'title', 'class', 'ariaLabel', 'flip', 'ssr'],
    template: `<svg :title="title" />`
  }
}))

const stubs = {
  Icon: {
    name: 'Icon',
    props: ['icon', 'style', 'title', 'class', 'ariaLabel', 'flip', 'ssr'],
    template: `<svg :title="title" />`
  }
}

BddTest().given('an AvIcon component', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvIcon>>

  BddTest().when('it is mounted with default props', () => {
    beforeEach(() => {
      wrapper = mount(AvIcon, {
        props: { name: 'mdi:test' },
        global: { stubs }
      })
    })

    BddTest().then('it should render the icon component', () => {
      const icon = wrapper.findComponent({ name: 'Icon' })
      expect(icon.exists()).toBe(true)
      expect(icon.props('icon')).toBe('mdi:test')
    })
  })

  BddTest().when('it is mounted with flip="both"', () => {
    beforeEach(() => {
      wrapper = mount(AvIcon, {
        props: { name: 'mdi:test', flip: 'both' },
        global: { stubs }
      })
    })

    BddTest().then('it should set flip prop to "horizontal,vertical"', () => {
      const icon = wrapper.findComponent({ name: 'Icon' })
      expect(icon.props('flip')).toBe('horizontal,vertical')
    })
  })

  BddTest().when('it is mounted with title undefined', () => {
    beforeEach(() => {
      wrapper = mount(AvIcon, {
        props: { name: 'mdi:test', title: undefined },
        global: { stubs }
      })
    })

    BddTest().then('it should not have a title element', async () => {
      const icon = wrapper.findComponent({ name: 'Icon' })
      await wrapper.vm.$nextTick()
      const svgEl = icon.element as SVGElement
      const titleEl = svgEl.querySelector('title')
      expect(titleEl).toBeNull()
    })
  })
})

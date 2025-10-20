import { mount, type VueWrapper } from '@vue/test-utils'
import AvTag, { type AvTagProps } from '@/components/badges/AvTag/AvTag.vue'
import { AvIconStub, BddTest } from '@/tests'

BddTest().given('an AvTag component', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvTag>>

  const props: AvTagProps = {
    label: 'A super tag'
  }

  const stubs = { AvIcon: AvIconStub }

  BddTest().when('the component is mounted with default props', () => {
    BddTest().and('given default props', () => {
      beforeEach(() => {
        wrapper = mount(AvTag, { props })
      })

      BddTest().then('it should render the tag with default props', () => {
        const tag = wrapper.find('p')
        expect(tag.exists()).toBe(true)
        expect(tag.text()).toBe(props.label)
        expect(wrapper.find('button').exists()).toBe(false)
        expect(wrapper.find('a').exists()).toBe(false)
        expect(wrapper.find('routerlink').exists()).toBe(false)
      })
    })

    BddTest().and('given a button tagName', () => {
      const newProps: AvTagProps = { ...props, tagName: 'button' }

      beforeEach(() => {
        wrapper = mount(AvTag, { props: newProps })
      })

      BddTest().then('it should render the tag as a button', () => {
        const tag = wrapper.find('button')
        expect(tag.exists()).toBe(true)
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('a').exists()).toBe(false)
        expect(wrapper.find('routerlink').exists()).toBe(false)
      })
    })

    BddTest().and('given an icon', () => {
      const newProps: AvTagProps = { ...props, icon: 'mdi:home' }

      beforeEach(() => {
        wrapper = mount(AvTag, { props: newProps, global: { stubs } })
      })

      BddTest().then('it should render the icon', () => {
        const icon = wrapper.find('.av-tag').findComponent({ name: 'AvIcon' })
        expect(icon.exists()).toBe(true)
        expect(icon.props('name')).toBe(newProps.icon)
        expect(icon.props('size')).toBe(0.9)
      })
    })

    BddTest().and('given the small prop', () => {
      const newProps: AvTagProps = { ...props, small: true, icon: 'mdi:home' }

      beforeEach(() => {
        wrapper = mount(AvTag, { props: newProps, global: { stubs } })
      })

      BddTest().then('it should render the icon', () => {
        const tag = wrapper.find('.av-tag')
        expect(tag.classes()).toContain('fr-tag--sm')

        const icon = tag.findComponent({ name: 'AvIcon' })
        expect(icon.exists()).toBe(true)
        expect(icon.props('name')).toBe(newProps.icon)
        expect(icon.props('size')).toBe(0.65)
      })
    })

    BddTest().and('given an external link', () => {
      const newProps: AvTagProps = { ...props, link: 'https://avenirs-esr.github.io/avenirs-dsav/' }

      beforeEach(() => {
        wrapper = mount(AvTag, { props: newProps })
      })

      BddTest().then('it should render the tag as a link', () => {
        const tag = wrapper.find('a')
        expect(tag.exists()).toBe(true)
        expect(wrapper.find('routerlink').exists()).toBe(false)
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('button').exists()).toBe(false)
        expect(tag.attributes('href')).toBe(newProps.link)
        expect(tag.attributes('to')).toBeUndefined()
      })
    })

    BddTest().and('given an internal link', () => {
      const newProps: AvTagProps = { ...props, link: '#' }

      beforeEach(() => {
        wrapper = mount(AvTag, { props: newProps })
      })

      BddTest().then('it should render the tag as a routerlink', () => {
        const tag = wrapper.find('routerlink')
        expect(tag.exists()).toBe(true)
        expect(wrapper.find('a').exists()).toBe(false)
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('button').exists()).toBe(false)
        expect(tag.attributes('to')).toBe(newProps.link)
        expect(tag.attributes('href')).toBeUndefined()
      })
    })

    BddTest().and('given the disabled prop', () => {
      const newProps: AvTagProps = { ...props, disabled: true }

      beforeEach(() => {
        wrapper = mount(AvTag, { props: newProps })
      })

      BddTest().then('it should render the tag as a button in disabled state', () => {
        const tag = wrapper.find('button')
        expect(tag.exists()).toBe(true)
        expect(tag.attributes('disabled')).toBeDefined()
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('a').exists()).toBe(false)
        expect(wrapper.find('routerlink').exists()).toBe(false)
      })
    })

    BddTest().and('given the icon only prop', () => {
      const newProps: AvTagProps = { ...props, icon: 'mdi:home', iconOnly: true }

      beforeEach(() => {
        wrapper = mount(AvTag, { props: newProps, global: { stubs } })
      })

      BddTest().then('it should render the tag without its label in text', () => {
        const tag = wrapper.find('p')
        expect(tag.text()).not.toContain(newProps.label)
        const icon = wrapper.findComponent({ name: 'AvIcon' })
        expect(icon.attributes('label')).toBe(newProps.label)
      })
    })

    BddTest().and('given the selectable prop', () => {
      const newProps: AvTagProps = { ...props, selectable: true }

      beforeEach(() => {
        wrapper = mount(AvTag, { props: newProps })
      })

      BddTest().then('it should render the tag as a button', () => {
        const tag = wrapper.find('button')
        expect(tag.exists()).toBe(true)
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('a').exists()).toBe(false)
        expect(wrapper.find('routerlink').exists()).toBe(false)
      })
    })

    BddTest().and('given the selectable and selected props', () => {
      const newProps: AvTagProps = { ...props, selectable: true, selected: true }

      beforeEach(() => {
        wrapper = mount(AvTag, { props: newProps })
      })

      BddTest().then('it should render the tag as a button with aria-pressed', () => {
        const tag = wrapper.find('button')
        expect(tag.exists()).toBe(true)
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('a').exists()).toBe(false)
        expect(wrapper.find('routerlink').exists()).toBe(false)
        expect(tag.attributes('aria-pressed')).toBeDefined()
      })
    })

    BddTest().and('given the selectable prop and is clicked', () => {
      const newProps: AvTagProps = { ...props, selectable: true, selected: undefined, value: '1' }

      beforeEach(() => {
        wrapper = mount(AvTag, { props: newProps })
      })

      BddTest().then('it should emit select', async () => {
        await wrapper.find('button').trigger('click')
        expect(wrapper.emitted('select')).toBeTruthy()
        expect(wrapper.emitted('select')?.[0][0]).toEqual([newProps.value, false])
      })
    })

    BddTest().and('given the selectable and selected props and is clicked', () => {
      const newProps: AvTagProps = { ...props, selectable: true, selected: true, value: '1' }

      beforeEach(() => {
        wrapper = mount(AvTag, { props: newProps })
      })

      BddTest().then('it should emit select', async () => {
        await wrapper.find('button').trigger('click')
        expect(wrapper.emitted('select')).toBeTruthy()
        expect(wrapper.emitted('select')?.[0][0]).toEqual([newProps.value, newProps.selected])
      })
    })
  })
})

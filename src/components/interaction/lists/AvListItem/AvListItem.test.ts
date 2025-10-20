import { type DOMWrapper, mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect, vi } from 'vitest'
import AvListItem from '@/components/interaction/lists/AvListItem/AvListItem.vue'
import { BddTest } from '@/tests/utils'

BddTest().given('an AvListItem component', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvListItem>>
  let avListItem: DOMWrapper<Element>

  const stubs = {
    AvIcon: {
      name: 'AvIcon',
      props: ['name', 'color', 'size'],
      template: '<div class="av-vicon-stub" />'
    }
  }

  beforeEach(() => {
    wrapper = mount(AvListItem, {
      global: {
        stubs
      }
    })
    avListItem = wrapper.find('.av-list-item')
  })

  BddTest().when('the component is mounted', () => {
    BddTest().then('it should render with default props', () => {
      expect(avListItem.exists()).toBe(true)
      expect(avListItem.element.tagName.toLowerCase()).toBe('div')
      expect(avListItem.classes()).not.toContain('av-list-item--clickable')
      expect(avListItem.classes()).not.toContain('av-list-item--disabled')
      expect(avListItem.classes()).not.toContain('av-list-item--selected')
    })

    BddTest().then('it should not have tabindex when not clickable', () => {
      expect(avListItem.attributes('tabindex')).toBeUndefined()
    })

    BddTest().then('it should not have aria-label when not clickable', () => {
      expect(avListItem.attributes('aria-label')).toBeUndefined()
    })
  })

  BddTest().when('title prop is provided', () => {
    beforeEach(async () => {
      await wrapper.setProps({ title: 'Test Title' })
      avListItem = wrapper.find('.av-list-item')
    })

    BddTest().then('it should display the title', () => {
      const titleElement = avListItem.find('.av-list-item__title')
      expect(titleElement.exists()).toBe(true)
      expect(titleElement.text()).toBe('Test Title')
    })
  })

  BddTest().when('description prop is provided', () => {
    beforeEach(async () => {
      await wrapper.setProps({ description: 'Test Description' })
      avListItem = wrapper.find('.av-list-item')
    })

    BddTest().then('it should display the description', () => {
      const descriptionElement = avListItem.find('.av-list-item__description')
      expect(descriptionElement.exists()).toBe(true)
      expect(descriptionElement.text()).toBe('Test Description')
    })
  })

  BddTest().when('icon prop is provided', () => {
    beforeEach(async () => {
      await wrapper.setProps({ icon: 'mdi:test-icon' })
      avListItem = wrapper.find('.av-list-item')
    })

    BddTest().then('it should render the icon', () => {
      const iconContainer = avListItem.find('.av-list-item__icon')
      const iconComponent = avListItem.findComponent({ name: 'AvIcon' })

      expect(iconContainer.exists()).toBe(true)
      expect(iconComponent.exists()).toBe(true)
      expect(iconComponent.props('name')).toBe('mdi:test-icon')
    })

    BddTest().then('it should pass correct props to icon', () => {
      const iconComponent = avListItem.findComponent({ name: 'AvIcon' })
      expect(iconComponent.props('color')).toBe('var(--text1)')
      expect(iconComponent.props('size')).toBe(1.3125)
    })
  })

  BddTest().when('clickable prop is true', () => {
    beforeEach(async () => {
      await wrapper.setProps({ clickable: true })
      avListItem = wrapper.find('.av-list-item')
    })

    BddTest().then('it should apply clickable class', () => {
      expect(avListItem.classes()).toContain('av-list-item--clickable')
    })

    BddTest().then('it should use button tag by default', () => {
      expect(avListItem.element.tagName.toLowerCase()).toBe('button')
    })

    BddTest().then('it should have tabindex 0', () => {
      expect(avListItem.attributes('tabindex')).toBe('0')
    })

    BddTest().then('it should handle click events when clicked', async () => {
      const clickSpy = vi.fn()
      await wrapper.setProps({ onClick: clickSpy })

      await avListItem.trigger('click')
      expect(clickSpy).toHaveBeenCalled()
    })

    BddTest().then('it should call onClick prop when clicked', async () => {
      const onClickMock = vi.fn()
      await wrapper.setProps({ onClick: onClickMock })

      await avListItem.trigger('click')
      expect(onClickMock).toHaveBeenCalled()
    })
  })

  BddTest().when('disabled prop is true', () => {
    beforeEach(async () => {
      await wrapper.setProps({ disabled: true, clickable: true })
      avListItem = wrapper.find('.av-list-item')
    })

    BddTest().then('it should apply disabled class', () => {
      expect(avListItem.classes()).toContain('av-list-item--disabled')
    })

    BddTest().then('it should have aria-disabled attribute', () => {
      expect(avListItem.attributes('aria-disabled')).toBe('true')
    })

    BddTest().then('it should have disabled attribute when button', () => {
      expect(avListItem.attributes('disabled')).toBe('')
    })

    BddTest().then('it should not emit click when clicked', async () => {
      const onClickMock = vi.fn()
      await wrapper.setProps({ onClick: onClickMock })

      await avListItem.trigger('click')
      expect(onClickMock).not.toHaveBeenCalled()
    })
  })

  BddTest().when('selected prop is true', () => {
    beforeEach(async () => {
      await wrapper.setProps({ selected: true })
      avListItem = wrapper.find('.av-list-item')
    })

    BddTest().then('it should apply selected class', () => {
      expect(avListItem.classes()).toContain('av-list-item--selected')
    })
  })

  BddTest().when('tag prop is set to anchor', () => {
    beforeEach(async () => {
      await wrapper.setProps({
        clickable: true,
        tag: 'a',
        href: 'https://example.com',
        target: '_blank',
        rel: 'noopener'
      })
      avListItem = wrapper.find('.av-list-item')
    })

    BddTest().then('it should render as anchor tag', () => {
      expect(avListItem.element.tagName.toLowerCase()).toBe('a')
    })

    BddTest().then('it should have href attribute', () => {
      expect(avListItem.attributes('href')).toBe('https://example.com')
    })

    BddTest().then('it should have target attribute', () => {
      expect(avListItem.attributes('target')).toBe('_blank')
    })

    BddTest().then('it should have rel attribute', () => {
      expect(avListItem.attributes('rel')).toBe('noopener')
    })
  })

  BddTest().when('tag prop is set to div with clickable', () => {
    beforeEach(async () => {
      await wrapper.setProps({
        clickable: true,
        tag: 'div'
      })
      avListItem = wrapper.find('.av-list-item')
    })

    BddTest().then('it should render as div tag', () => {
      expect(avListItem.element.tagName.toLowerCase()).toBe('div')
    })
  })

  BddTest().when('keyboard events are triggered', () => {
    beforeEach(async () => {
      await wrapper.setProps({ clickable: true })
      avListItem = wrapper.find('.av-list-item')
    })

    BddTest().then('it should call onClick on Enter key', async () => {
      const onClickMock = vi.fn()
      await wrapper.setProps({ onClick: onClickMock })

      await avListItem.trigger('keydown', { key: 'Enter' })
      expect(onClickMock).toHaveBeenCalled()
    })

    BddTest().then('it should call onClick on Space key', async () => {
      const onClickMock = vi.fn()
      await wrapper.setProps({ onClick: onClickMock })

      await avListItem.trigger('keydown', { key: ' ' })
      expect(onClickMock).toHaveBeenCalled()
    })

    BddTest().then('it should not call onClick on other keys', async () => {
      const onClickMock = vi.fn()
      await wrapper.setProps({ onClick: onClickMock })

      await avListItem.trigger('keydown', { key: 'Tab' })
      expect(onClickMock).not.toHaveBeenCalled()
    })

    BddTest().then('it should not call onClick when disabled', async () => {
      const onClickMock = vi.fn()
      await wrapper.setProps({ onClick: onClickMock, disabled: true })

      await avListItem.trigger('keydown', { key: 'Enter' })
      expect(onClickMock).not.toHaveBeenCalled()
    })
  })

  BddTest().when('aria-label is provided', () => {
    beforeEach(async () => {
      await wrapper.setProps({
        clickable: true,
        ariaLabel: 'Custom aria label'
      })
      avListItem = wrapper.find('.av-list-item')
    })

    BddTest().then('it should use the custom aria-label', () => {
      expect(avListItem.attributes('aria-label')).toBe('Custom aria label')
    })
  })

  BddTest().when('computed aria-label from title and description', () => {
    beforeEach(async () => {
      await wrapper.setProps({
        clickable: true,
        title: 'Test Title',
        description: 'Test Description'
      })
      avListItem = wrapper.find('.av-list-item')
    })

    BddTest().then('it should combine title and description for aria-label', () => {
      expect(avListItem.attributes('aria-label')).toBe('Test Title, Test Description')
    })
  })

  BddTest().when('only title is provided for aria-label', () => {
    beforeEach(async () => {
      await wrapper.setProps({
        clickable: true,
        title: 'Test Title'
      })
      avListItem = wrapper.find('.av-list-item')
    })

    BddTest().then('it should use title as aria-label', () => {
      expect(avListItem.attributes('aria-label')).toBe('Test Title')
    })
  })

  BddTest().when('ariaDescribedby is provided', () => {
    beforeEach(async () => {
      await wrapper.setProps({ ariaDescribedby: 'description-id' })
      avListItem = wrapper.find('.av-list-item')
    })

    BddTest().then('it should have aria-describedby attribute', () => {
      expect(avListItem.attributes('aria-describedby')).toBe('description-id')
    })
  })

  BddTest().when('custom colors are provided', () => {
    beforeEach(async () => {
      await wrapper.setProps({
        color: '#ff0000',
        descriptionColor: '#00ff00',
        hoverBackgroundColor: '#0000ff',
        colorOnHover: '#ffff00'
      })
      avListItem = wrapper.find('.av-list-item')
    })

    BddTest().then('it should accept custom color props', () => {
      expect(wrapper.props('color')).toBe('#ff0000')
      expect(wrapper.props('descriptionColor')).toBe('#00ff00')
      expect(wrapper.props('hoverBackgroundColor')).toBe('#0000ff')
      expect(wrapper.props('colorOnHover')).toBe('#ffff00')
    })
  })

  BddTest().when('slot content is provided', () => {
    beforeEach(() => {
      wrapper = mount(AvListItem, {
        slots: {
          default: '<div class="custom-content">Custom Content</div>'
        },
        global: { stubs }
      })
      avListItem = wrapper.find('.av-list-item')
    })

    BddTest().then('it should render the slot content', () => {
      const customContent = avListItem.find('.custom-content')

      expect(customContent.exists()).toBe(true)
      expect(customContent.text()).toBe('Custom Content')
    })
  })

  BddTest().when('iconSize is customized', () => {
    beforeEach(async () => {
      await wrapper.setProps({
        icon: 'mdi:test-icon',
        iconSize: 2.5
      })
      avListItem = wrapper.find('.av-list-item')
    })

    BddTest().then('it should pass custom size to icon', () => {
      const iconComponent = avListItem.findComponent({ name: 'AvIcon' })
      expect(iconComponent.props('size')).toBe(2.5)
    })
  })
})

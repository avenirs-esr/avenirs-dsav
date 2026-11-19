import type { DOMWrapper, VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { beforeEach, expect, vi } from 'vitest'
import { AvIconStub } from '@/components/base/AvIcon/AvIcon.stub'
import AvListItem from '@/components/interaction/lists/AvListItem/AvListItem.vue'
import { AvTooltipStub } from '@/components/overlay/tooltips/AvTooltip/AvTooltip.stub'
import { AvNumberIndicatorStub } from '@/tests'
import { BddTest } from '@/tests/utils'

const mockIsTruncated = ref(false)

vi.mock('@/composables/use-text-truncation/use-text-truncation', () => ({
  useTextTruncation: () => ({ isTruncated: mockIsTruncated }),
}))

BddTest().given('an AvListItem component', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvListItem>>
  let avListItem: DOMWrapper<Element>

  const stubs = {
    AvIcon: AvIconStub,
    AvTooltip: AvTooltipStub,
    AvNumberIndicator: AvNumberIndicatorStub,
  }

  beforeEach(() => {
    mockIsTruncated.value = false

    wrapper = mount(AvListItem, {
      global: { stubs },
    })

    avListItem = wrapper.find('.av-list-item')
  })

  BddTest().when('the component is mounted', () => {
    BddTest().then('it should render with default props', () => {
      expect(avListItem.exists()).toBe(true)
      expect(avListItem.element.tagName.toLowerCase()).toBe('div')
      expect(avListItem.attributes('data-tag')).toBe('div')
      expect(wrapper.find('.av-list-mainitem').exists()).toBe(true)
      expect(avListItem.classes()).toContain('av-list-item--theme-primary')
      expect(avListItem.classes()).not.toContain('av-list-item--clickable')
      expect(avListItem.classes()).not.toContain('av-list-item--disabled')
      expect(avListItem.classes()).not.toContain('av-list-item--selected')
    })

    BddTest().then('it should have listitem role by default', () => {
      expect(wrapper.find('[role="listitem"]').exists()).toBe(true)
    })

    BddTest().then('it should not have tabindex when not clickable', () => {
      expect(avListItem.attributes('tabindex')).toBeUndefined()
    })

    BddTest().then('it should not have aria-label when not clickable', () => {
      expect(avListItem.attributes('aria-label')).toBeUndefined()
    })

    BddTest().then('it should not render the index by default', () => {
      expect(wrapper.find('[data-testid="av-list-item-index"]').text()).toBe('')
    })

    BddTest().then('it should disable the tooltip by default', () => {
      expect(wrapper.findComponent(AvTooltipStub).props('disabled')).toBe(true)
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

    BddTest().then('it should not display the description', () => {
      expect(avListItem.find('.av-list-item__description').exists()).toBe(false)
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

    BddTest().then('it should pass the default size to the icon', () => {
      expect(avListItem.findComponent({ name: 'AvIcon' }).props('size')).toBe(1.3125)
    })
  })

  BddTest().when('index prop is provided', () => {
    beforeEach(async () => {
      await wrapper.setProps({ index: 1 })
    })

    BddTest().then('it should display the index', () => {
      const indexElement = wrapper.find('[data-testid="av-list-item-index"]')

      expect(indexElement.exists()).toBe(true)
      expect(indexElement.text()).toBe('1')
    })

    BddTest().then('it should apply bold typography for main items', () => {
      expect(wrapper.find('[data-testid="av-list-item-index"]').classes()).toContain('b2-bold')
    })

    BddTest().then('it should pass the index to AvNumberIndicator', () => {
      expect(wrapper.findComponent(AvNumberIndicatorStub).props('value')).toBe(1)
    })
  })

  BddTest().when('type prop is provided', () => {
    beforeEach(async () => {
      await wrapper.setProps({
        type: 'sub',
        index: 2,
      })
      avListItem = wrapper.find('.av-list-item')
    })

    BddTest().then('it should apply the sub item class', () => {
      expect(wrapper.find('.av-list-subitem').exists()).toBe(true)
    })

    BddTest().then('it should apply regular typography to the index', () => {
      expect(wrapper.find('[data-testid="av-list-item-index"]').classes()).toContain('b2-regular')
    })

    BddTest().then('it should apply regular typography to the title', async () => {
      await wrapper.setProps({ title: 'Test Title' })

      expect(wrapper.find('.av-list-item__title').classes()).toContain('b2-regular')
    })

    BddTest().then('it should apply regular typography to the description', async () => {
      await wrapper.setProps({ description: 'Test Description' })

      expect(wrapper.find('.av-list-item__description').classes()).toContain('b1-regular')
    })
  })

  BddTest().when('titleMaxLines prop is provided', () => {
    beforeEach(async () => {
      await wrapper.setProps({
        title: 'Test Title',
        titleMaxLines: 2,
      })
    })

    BddTest().then('it should apply the max lines class to the title', () => {
      expect(wrapper.find('.av-list-item__title').classes()).toContain('av-max-lines')
    })
  })

  BddTest().when('onClick prop is defined', () => {
    const clickSpy = vi.fn()

    beforeEach(async () => {
      await wrapper.setProps({ onClick: clickSpy })
      avListItem = wrapper.find('.av-list-item')
    })

    BddTest().then('it should apply clickable class', () => {
      expect(avListItem.classes()).toContain('av-list-item--clickable')
    })

    BddTest().then('it should render as a button', () => {
      expect(avListItem.element.tagName.toLowerCase()).toBe('button')
      expect(avListItem.attributes('data-tag')).toBe('button')
    })

    BddTest().then('it should have tabindex 0', () => {
      expect(avListItem.attributes('tabindex')).toBe('0')
    })

    BddTest().then('it should have button type', () => {
      expect(avListItem.attributes('type')).toBe('button')
    })

    BddTest().then('it should call onClick when clicked', async () => {
      await avListItem.trigger('click')

      expect(clickSpy).toHaveBeenCalledOnce()
      expect(clickSpy).toHaveBeenCalledWith(expect.any(MouseEvent))
    })
  })

  BddTest().when('disabled prop is true', () => {
    const onClickMock = vi.fn()

    beforeEach(async () => {
      await wrapper.setProps({
        disabled: true,
        onClick: onClickMock,
      })
      avListItem = wrapper.find('.av-list-item')
    })

    BddTest().then('it should apply disabled class', () => {
      expect(avListItem.classes()).toContain('av-list-item--disabled')
    })

    BddTest().then('it should have aria-disabled attribute', () => {
      expect(avListItem.attributes('aria-disabled')).toBe('true')
    })

    BddTest().then('it should have disabled attribute', () => {
      expect(avListItem.attributes('disabled')).toBe('')
    })

    BddTest().then('it should not call onClick when clicked', async () => {
      await avListItem.trigger('click')

      expect(onClickMock).not.toHaveBeenCalled()
    })

    BddTest().then('it should not have tabindex', () => {
      expect(avListItem.attributes('tabindex')).toBeUndefined()
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

  BddTest().when('href prop is provided', () => {
    beforeEach(async () => {
      await wrapper.setProps({
        href: 'https://example.com',
        target: '_blank',
        rel: 'noopener',
      })
      avListItem = wrapper.find('.av-list-item')
    })

    BddTest().then('it should render as an anchor', () => {
      expect(avListItem.element.tagName.toLowerCase()).toBe('a')
      expect(avListItem.attributes('data-tag')).toBe('a')
    })

    BddTest().then('it should have the correct href', () => {
      expect(avListItem.attributes('href')).toBe('https://example.com')
    })

    BddTest().then('it should have the correct target', () => {
      expect(avListItem.attributes('target')).toBe('_blank')
    })

    BddTest().then('it should have the correct rel', () => {
      expect(avListItem.attributes('rel')).toBe('noopener')
    })

    BddTest().then('it should have tabindex 0', () => {
      expect(avListItem.attributes('tabindex')).toBe('0')
    })
  })

  BddTest().when('target or rel prop is provided without href', () => {
    BddTest().then('it should render as an anchor', async () => {
      await wrapper.setProps({ target: '_blank' })

      expect(wrapper.find('.av-list-item').element.tagName.toLowerCase()).toBe('a')
    })
  })

  BddTest().when('keyboard events are triggered', () => {
    const onClickMock = vi.fn()

    beforeEach(async () => {
      await wrapper.setProps({ onClick: onClickMock })
      avListItem = wrapper.find('.av-list-item')
    })

    BddTest().then('it should call onClick on Enter key', async () => {
      await avListItem.trigger('keydown', { key: 'Enter' })

      expect(onClickMock).toHaveBeenCalledOnce()
      expect(onClickMock).toHaveBeenCalledWith(expect.any(MouseEvent))
    })

    BddTest().then('it should call onClick on Space key', async () => {
      await avListItem.trigger('keydown', { key: ' ' })

      expect(onClickMock).toHaveBeenCalledOnce()
    })

    BddTest().then('it should not call onClick on other keys', async () => {
      await avListItem.trigger('keydown', { key: 'Tab' })

      expect(onClickMock).not.toHaveBeenCalled()
    })

    BddTest().then('it should not call onClick when disabled', async () => {
      await wrapper.setProps({ disabled: true })

      await avListItem.trigger('keydown', { key: 'Enter' })

      expect(onClickMock).not.toHaveBeenCalled()
    })
  })

  BddTest().when('keyboard events are triggered on a link', () => {
    const onClickMock = vi.fn()

    beforeEach(async () => {
      await wrapper.setProps({
        href: 'https://example.com',
        onClick: onClickMock,
      })
      avListItem = wrapper.find('.av-list-item')
    })

    BddTest().then('it should call onClick on Enter key', async () => {
      await avListItem.trigger('keydown', { key: 'Enter' })

      expect(onClickMock).toHaveBeenCalledOnce()
    })

    BddTest().then('it should not call onClick on Space key', async () => {
      await avListItem.trigger('keydown', { key: ' ' })

      expect(onClickMock).not.toHaveBeenCalled()
    })
  })

  BddTest().when('ariaLabel prop is provided', () => {
    beforeEach(async () => {
      await wrapper.setProps({
        ariaLabel: 'Custom aria label',
        onClick: vi.fn(),
      })
      avListItem = wrapper.find('.av-list-item')
    })

    BddTest().then('it should use the custom aria-label', () => {
      expect(avListItem.attributes('aria-label')).toBe('Custom aria label')
    })
  })

  BddTest().when('title and description are provided', () => {
    beforeEach(async () => {
      await wrapper.setProps({
        title: 'Test Title',
        description: 'Test Description',
        onClick: vi.fn(),
      })
    })

    BddTest().then('it should pass the computed aria label to AvTooltip', () => {
      expect(wrapper.findComponent(AvTooltipStub).props('content')).toBe('Test Title, Test Description')
    })

    BddTest().then('it should not set aria-label on the button by default', () => {
      expect(wrapper.find('.av-list-item').attributes('aria-label')).toBeUndefined()
    })
  })

  BddTest().when('only title is provided', () => {
    beforeEach(async () => {
      await wrapper.setProps({
        title: 'Test Title',
        onClick: vi.fn(),
      })
    })

    BddTest().then('it should use the title as tooltip content', () => {
      expect(wrapper.findComponent(AvTooltipStub).props('content')).toBe('Test Title')
    })
  })

  BddTest().when('ariaDescribedby prop is provided', () => {
    beforeEach(async () => {
      await wrapper.setProps({ ariaDescribedby: 'description-id' })
      avListItem = wrapper.find('.av-list-item')
    })

    BddTest().then('it should have aria-describedby attribute', () => {
      expect(avListItem.attributes('aria-describedby')).toBe('description-id')
    })
  })

  BddTest().when('role prop is provided', () => {
    BddTest().then('it should apply the custom role', async () => {
      await wrapper.setProps({ role: 'option' })

      expect(wrapper.find('[role="option"]').exists()).toBe(true)
    })

    BddTest().then('it should not render a role when null is provided', async () => {
      await wrapper.setProps({ role: null })

      expect(wrapper.find('[role="listitem"]').exists()).toBe(false)
    })
  })

  BddTest().when('theme prop is provided', () => {
    const themes = ['PRIMARY', 'SECONDARY', 'TERTIARY'] as const

    BddTest().then('it should apply the corresponding theme class', async () => {
      for (const theme of themes) {
        await wrapper.setProps({ theme })

        expect(wrapper.find('.av-list-item').classes()).toContain(
          `av-list-item--theme-${theme.toLowerCase()}`,
        )
      }
    })
  })

  BddTest().when('slot content is provided', () => {
    beforeEach(() => {
      wrapper = mount(AvListItem, {
        slots: {
          default: '<div class="custom-content">Custom Content</div>',
        },
        global: { stubs },
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
        iconSize: 2.5,
      })
      avListItem = wrapper.find('.av-list-item')
    })

    BddTest().then('it should pass the custom size to AvIcon', () => {
      expect(avListItem.findComponent({ name: 'AvIcon' }).props('size')).toBe(2.5)
    })

    BddTest().then('it should disable the tooltip when there is no tooltip content', () => {
      expect(wrapper.findComponent(AvTooltipStub).props('disabled')).toBe(true)
    })
  })

  BddTest().when('enableTooltip is true', () => {
    beforeEach(async () => {
      await wrapper.setProps({
        title: 'Test Title',
        enableTooltip: true,
      })
    })

    BddTest().then('it should enable the tooltip', () => {
      expect(wrapper.findComponent(AvTooltipStub).props('disabled')).toBe(false)
    })

    BddTest().then('it should set the computed aria-label on the clickable element', async () => {
      await wrapper.setProps({ onClick: vi.fn() })

      expect(wrapper.find('.av-list-item').attributes('aria-label')).toBe('Test Title')
    })

    BddTest().then('it should pass the computed aria label to the tooltip', () => {
      expect(wrapper.findComponent(AvTooltipStub).props('content')).toBe('Test Title')
    })
  })

  BddTest().when('the title or description is truncated', () => {
    beforeEach(async () => {
      mockIsTruncated.value = true

      await wrapper.setProps({
        title: 'Test Title',
      })
    })

    BddTest().then('it should enable the tooltip', () => {
      expect(wrapper.findComponent(AvTooltipStub).props('disabled')).toBe(false)
    })

    BddTest().then('it should make the tooltip focusable', () => {
      expect(wrapper.findComponent(AvTooltipStub).props('forceFocusable')).toBe(true)
    })
  })

  BddTest().when('the list item is disabled with a tooltip message', () => {
    beforeEach(async () => {
      wrapper = mount(AvListItem, {
        props: {
          title: 'Unavailable item',
          disabled: true,
          disabledTooltip: 'Item unavailable',
        },
        global: { stubs },
      })
    })

    BddTest().then('it should enable AvTooltip with the disabled message', () => {
      const tooltip = wrapper.findComponent(AvTooltipStub)

      expect(tooltip.props('content')).toBe('Item unavailable')
      expect(tooltip.props('disabled')).toBe(false)
      expect(tooltip.props('forceFocusable')).toBe(true)
    })
  })
})

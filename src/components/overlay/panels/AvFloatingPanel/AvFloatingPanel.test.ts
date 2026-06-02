import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect } from 'vitest'
import AvFloatingPanel, { type AvFloatingPanelProps } from '@/components/overlay/panels/AvFloatingPanel/AvFloatingPanel.vue'
import { AvCardStub, AvIconTextStub } from '@/tests'
import { BddTest } from '@/tests/utils'

BddTest().given('an AvFloatingPanel', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvFloatingPanel>>

  const baseProps: AvFloatingPanelProps = {
    title: 'Contextual help',
  }

  const stubs = {
    AvCard: AvCardStub,
    AvIconText: AvIconTextStub,
  }

  BddTest().when('the component is mounted', () => {
    BddTest().and('with the minimum props', () => {
      beforeEach(() => {
        wrapper = mount(AvFloatingPanel, {
          props: baseProps,
          slots: {
            default: '<p>Panel content</p>',
          },
          global: {
            stubs,
          },
        })
      })

      BddTest().then('it should render the title and the default slot content', () => {
        const iconText = wrapper.findComponent(AvIconTextStub)

        expect(iconText.props('text')).toBe(baseProps.title)
        expect(wrapper.text()).toContain('Panel content')
      })

      BddTest().then('it should use the default icon and collapsed state', () => {
        const iconText = wrapper.findComponent(AvIconTextStub)
        const card = wrapper.findComponent(AvCardStub)

        expect(iconText.props()).toMatchObject({
          icon: 'mdi:chat-bubble-outline',
          text: baseProps.title,
          iconColor: 'var(--dark-background-primary1)',
          textColor: 'var(--dark-background-primary1)',
        })
        expect(card.props('collapsible')).toBe(true)
        expect(card.props('collapsed')).toBe(true)
        expect(card.attributes('aria-label')).toBe(baseProps.title)
      })
    })

    BddTest().and('with a subtitle and custom configuration', () => {
      beforeEach(() => {
        wrapper = mount(AvFloatingPanel, {
          props: {
            ...baseProps,
            subtitle: 'Updated 2 minutes ago',
            icon: 'mdi:information-outline',
            defaultCollapsed: false,
            width: '24rem',
          },
          global: {
            stubs,
          },
        })
      })

      BddTest().then('it should render the subtitle', () => {
        expect(wrapper.text()).toContain('Updated 2 minutes ago')
      })

      BddTest().then('it should forward the custom icon and width', () => {
        const iconText = wrapper.findComponent(AvIconTextStub)

        expect(iconText.props('icon')).toBe('mdi:information-outline')
        expect(wrapper.props('width')).toBe('24rem')
      })

      BddTest().then('it should forward the initial collapsed state to the card', () => {
        const card = wrapper.findComponent(AvCardStub)

        expect(card.props('collapsed')).toBe(false)
      })
    })
  })
})

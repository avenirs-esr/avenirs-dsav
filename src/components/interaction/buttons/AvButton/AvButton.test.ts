import { mount, RouterLinkStub, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect, type MockInstance, vi } from 'vitest'
import AvButton, { type AvButtonProps } from '@/components/interaction/buttons/AvButton/AvButton.vue'
import { AvIconStub, AvTooltipStub } from '@/tests'
import { BddTest } from '@/tests/utils'
import { MDI_ICONS } from '@/tokens'

BddTest().given('an AvButton', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvButton>>

  const stubs = {
    AvIcon: AvIconStub,
    AvTooltip: AvTooltipStub,
    RouterLink: RouterLinkStub,
  }

  BddTest().and('default props', () => {
    beforeEach(() => {
      wrapper = mount(AvButton, {
        props: { label: 'test' },
        global: { stubs },
      })
    })

    BddTest().when('component is mounted', () => {
      BddTest().then('it should render the label', () => {
        expect(wrapper.text()).toContain('Test')
      })

      BddTest().then('it should render the default button classes', () => {
        const button = wrapper.find('button')

        expect(button.classes()).toContain('av-button')
        expect(button.classes()).toContain('av-button--md')
        expect(button.classes()).toContain('av-button--variant-default')
        expect(button.classes()).toContain('av-button--theme-primary')
        expect(button.classes()).toContain('av-px-xs')
        expect(button.classes()).toContain('av-py-xxs')
        expect(button.classes()).toContain('av-radius-md')

        expect(button.classes()).not.toContain('av-button--sm')
        expect(button.classes()).not.toContain('av-button--lg')
        expect(button.classes()).not.toContain('av-button--variant-outlined')
        expect(button.classes()).not.toContain('av-button--variant-flat')
        expect(button.classes()).not.toContain('av-button--theme-secondary')
        expect(button.classes()).not.toContain('av-button--theme-tertiary')
        expect(button.classes()).not.toContain('av-radius-none')
      })

      BddTest().then('it should render the default label typography', () => {
        expect(wrapper.find('span').classes()).toContain('b2-regular')
      })

      BddTest().then('it should not render the icon', () => {
        expect(wrapper.findComponent({ name: 'AvIcon' }).exists()).toBe(false)
      })

      BddTest().then('it should not render the disabled state', () => {
        const button = wrapper.find('button')

        expect(button.attributes('disabled')).toBeUndefined()
        expect(button.attributes('aria-disabled')).toBe('false')
        expect(button.classes()).not.toContain('av-button--disabled')
      })

      BddTest().then('it should use the button data tag', () => {
        expect(wrapper.find('button').attributes('data-tag')).toBe('button')
      })
    })
  })

  BddTest().and('specific props', () => {
    const props: AvButtonProps = {
      label: 'Click me',
      variant: 'OUTLINED',
      size: 'SM',
      icon: { name: 'test-icon' },
      disabled: true,
    }

    beforeEach(() => {
      wrapper = mount(AvButton, {
        props,
        global: { stubs },
      })
    })

    BddTest().then('it should render the expected button classes', () => {
      const button = wrapper.find('button')

      expect(button.classes()).toContain('av-button')
      expect(button.classes()).toContain('av-button--sm')
      expect(button.classes()).toContain('av-button--variant-outlined')
      expect(button.classes()).toContain('av-button--theme-primary')
      expect(button.classes()).toContain('av-button--disabled')
      expect(button.classes()).toContain('av-px-xs')
      expect(button.classes()).toContain('av-py-xxs')
      expect(button.classes()).toContain('av-radius-md')

      expect(button.classes()).not.toContain('av-button--md')
      expect(button.classes()).not.toContain('av-button--lg')
      expect(button.classes()).not.toContain('av-button--variant-default')
      expect(button.classes()).not.toContain('av-button--variant-flat')
    })

    BddTest().then('it should render the icon', () => {
      const icon = wrapper.findComponent({ name: 'AvIcon' })

      expect(icon.exists()).toBe(true)
      expect(icon.props('name')).toBe('test-icon')
      expect(icon.props('size')).toBe(0.9)
    })

    BddTest().then('it should render the disabled state', () => {
      const button = wrapper.find('button')

      expect(button.attributes('disabled')).toBeDefined()
      expect(button.attributes('aria-disabled')).toBe('true')
    })

    BddTest().then('it should render the small label typography', () => {
      expect(wrapper.find('span').classes()).toContain('caption-regular')
    })
  })

  BddTest().and('size is provided', () => {
    BddTest().when('size is SM', () => {
      beforeEach(() => {
        wrapper = mount(AvButton, {
          props: {
            label: 'test',
            size: 'SM',
          },
          global: { stubs },
        })
      })

      BddTest().then('it should render the small size classes', () => {
        const button = wrapper.find('button')

        expect(button.classes()).toContain('av-button--sm')
        expect(button.classes()).toContain('av-px-xs')
        expect(button.classes()).toContain('av-py-xxs')
        expect(button.classes()).toContain('av-radius-md')
      })

      BddTest().then('it should render the caption typography', () => {
        expect(wrapper.find('span').classes()).toContain('caption-regular')
      })
    })

    BddTest().when('size is MD', () => {
      beforeEach(() => {
        wrapper = mount(AvButton, {
          props: {
            label: 'test',
            size: 'MD',
          },
          global: { stubs },
        })
      })

      BddTest().then('it should render the medium size classes', () => {
        const button = wrapper.find('button')

        expect(button.classes()).toContain('av-button--md')
        expect(button.classes()).toContain('av-px-xs')
        expect(button.classes()).toContain('av-py-xxs')
        expect(button.classes()).toContain('av-radius-md')
      })

      BddTest().then('it should render the body typography', () => {
        expect(wrapper.find('span').classes()).toContain('b2-regular')
      })
    })

    BddTest().when('size is LG', () => {
      beforeEach(() => {
        wrapper = mount(AvButton, {
          props: {
            label: 'test',
            size: 'LG',
          },
          global: { stubs },
        })
      })

      BddTest().then('it should render the large size classes', () => {
        const button = wrapper.find('button')

        expect(button.classes()).toContain('av-button--lg')
        expect(button.classes()).toContain('av-px-sm')
        expect(button.classes()).toContain('av-py-xs')
        expect(button.classes()).toContain('av-radius-lg')
      })

      BddTest().then('it should render the large typography', () => {
        expect(wrapper.find('span').classes()).toContain('b1-regular')
      })
    })
  })

  BddTest().and('iconOnly is true', () => {
    const props: AvButtonProps = {
      label: 'This is a test label',
      icon: 'mdi:home-variant-outline',
      iconOnly: true,
    }

    beforeEach(() => {
      wrapper = mount(AvButton, {
        props,
        global: { stubs },
      })
    })

    BddTest().then('it should not render the label as text', () => {
      expect(wrapper.text()).not.toContain(props.label)
    })

    BddTest().then('it should render the icon', () => {
      const icon = wrapper.findComponent({ name: 'AvIcon' })

      expect(icon.exists()).toBe(true)
      expect(icon.props('name')).toBe('mdi:home-variant-outline')
      expect(icon.props('size')).toBe(1)
    })

    BddTest().then('it should set the label as AvTooltip content', () => {
      expect(wrapper.findComponent(AvTooltipStub).props('content')).toBe(props.label)
    })

    BddTest().then('it should enable the tooltip', () => {
      expect(wrapper.findComponent(AvTooltipStub).props('disabled')).toBe(false)
    })

    BddTest().then('it should set the aria-label', () => {
      expect(wrapper.find('button').attributes('aria-label')).toBe(props.label)
    })

    BddTest().then('it should use icon-only padding', () => {
      const button = wrapper.find('button')

      expect(button.classes()).toContain('av-px-xxs')
      expect(button.classes()).toContain('av-py-xxs')
    })
  })

  BddTest().and('iconOnly is true with a large size', () => {
    beforeEach(() => {
      wrapper = mount(AvButton, {
        props: {
          label: 'Large icon button',
          icon: 'mdi:home',
          iconOnly: true,
          size: 'LG',
        },
        global: { stubs },
      })
    })

    BddTest().then('it should use large icon-only padding', () => {
      const button = wrapper.find('button')

      expect(button.classes()).toContain('av-px-xs')
      expect(button.classes()).toContain('av-py-xs')
    })

    BddTest().then('it should use the large icon size', () => {
      expect(wrapper.findComponent({ name: 'AvIcon' }).props('size')).toBe(1.5)
    })
  })

  BddTest().and('disabledTooltip is provided on a disabled button', () => {
    const props: AvButtonProps = {
      label: 'Save',
      disabled: true,
      disabledTooltip: 'You cannot save yet',
    }

    beforeEach(() => {
      wrapper = mount(AvButton, {
        props,
        global: { stubs },
      })
    })

    BddTest().then('it should set the disabled tooltip label as AvTooltip content', () => {
      expect(wrapper.findComponent(AvTooltipStub).props('content')).toBe(props.disabledTooltip)
    })

    BddTest().then('it should enable the tooltip', () => {
      expect(wrapper.findComponent(AvTooltipStub).props('disabled')).toBe(false)
    })

    BddTest().then('it should force focusability for the disabled tooltip', () => {
      expect(wrapper.findComponent(AvTooltipStub).props('forceFocusable')).toBe(true)
    })
  })

  BddTest().and('disabledTooltip is provided on an enabled button', () => {
    const props: AvButtonProps = {
      label: 'Save',
      disabledTooltip: 'You cannot save yet',
    }

    beforeEach(() => {
      wrapper = mount(AvButton, {
        props,
        global: { stubs },
      })
    })

    BddTest().then('it should keep the regular label as AvTooltip content', () => {
      expect(wrapper.findComponent(AvTooltipStub).props('content')).toBe('Save')
    })

    BddTest().then('it should keep the tooltip disabled', () => {
      expect(wrapper.findComponent(AvTooltipStub).props('disabled')).toBe(true)
    })
  })

  BddTest().and('noRadius prop is true', () => {
    beforeEach(() => {
      wrapper = mount(AvButton, {
        props: {
          label: 'test',
          noRadius: true,
        },
        global: { stubs },
      })
    })

    BddTest().then('the button should have av-radius-none class', () => {
      const button = wrapper.find('button')

      expect(button.classes()).toContain('av-radius-none')
      expect(button.classes()).not.toContain('av-radius-md')
      expect(button.classes()).not.toContain('av-radius-lg')
    })
  })

  BddTest().and('size is LG without noRadius', () => {
    beforeEach(() => {
      wrapper = mount(AvButton, {
        props: {
          label: 'test',
          size: 'LG',
        },
        global: { stubs },
      })
    })

    BddTest().then('the button should have the large radius class', () => {
      expect(wrapper.find('button').classes()).toContain('av-radius-lg')
    })
  })

  BddTest().and('isLoading is true', () => {
    beforeEach(() => {
      wrapper = mount(AvButton, {
        props: {
          label: 'test',
          isLoading: true,
          icon: { name: 'other-icon' },
          size: 'LG',
        },
        global: { stubs },
      })
    })

    BddTest().when('component is mounted', () => {
      BddTest().then('it should render the loading icon', () => {
        const icon = wrapper.findComponent({ name: 'AvIcon' })

        expect(icon.exists()).toBe(true)
        expect(icon.props('name')).toBe(MDI_ICONS.LOADING)
        expect(icon.props('animation')).toBe('spin')
        expect(icon.props('size')).toBe(1.5)
      })

      BddTest().then('it should render the disabled state', () => {
        const button = wrapper.find('button')

        expect(button.attributes('disabled')).toBeDefined()
        expect(button.attributes('aria-disabled')).toBe('true')
        expect(button.classes()).toContain('av-button--disabled')
      })
    })
  })

  BddTest().and('isLoading is true while disabled is false', () => {
    beforeEach(() => {
      wrapper = mount(AvButton, {
        props: {
          label: 'test',
          isLoading: true,
          disabled: false,
        },
        global: { stubs },
      })
    })

    BddTest().then('it should render the loading icon', () => {
      const icon = wrapper.findComponent({ name: 'AvIcon' })

      expect(icon.props('name')).toBe(MDI_ICONS.LOADING)
      expect(icon.props('animation')).toBe('spin')
    })
  })

  BddTest().and('isLoading is true and disabled is true', () => {
    beforeEach(() => {
      wrapper = mount(AvButton, {
        props: {
          label: 'test',
          isLoading: true,
          disabled: true,
          icon: 'mdi:home',
        },
        global: { stubs },
      })
    })

    BddTest().then('it should render the provided icon instead of the loading icon', () => {
      const icon = wrapper.findComponent({ name: 'AvIcon' })

      expect(icon.props('name')).toBe('mdi:home')
      expect(icon.props('animation')).toBeUndefined()
    })

    BddTest().then('it should still render the disabled state', () => {
      expect(wrapper.find('button').attributes('disabled')).toBeDefined()
    })
  })

  BddTest().and('iconScale is provided', () => {
    beforeEach(() => {
      wrapper = mount(AvButton, {
        props: {
          label: 'test',
          icon: 'mdi:home-variant-outline',
          iconScale: 3,
          size: 'SM',
        },
        global: { stubs },
      })
    })

    BddTest().then('it should use iconScale instead of the size-based value', () => {
      expect(wrapper.findComponent({ name: 'AvIcon' }).props('size')).toBe(3)
    })
  })

  BddTest().and('iconScale is NaN', () => {
    beforeEach(() => {
      wrapper = mount(AvButton, {
        props: {
          label: 'test',
          icon: 'mdi:home-variant-outline',
          iconScale: Number.NaN,
          size: 'LG',
        },
        global: { stubs },
      })
    })

    BddTest().then('the icon size falls back to the size-based value', () => {
      expect(wrapper.findComponent({ name: 'AvIcon' }).props('size')).toBe(1.5)
    })
  })

  BddTest().and('an icon is provided as a string', () => {
    beforeEach(() => {
      wrapper = mount(AvButton, {
        props: {
          label: 'test',
          icon: 'mdi:home',
        },
        global: { stubs },
      })
    })

    BddTest().then('it should render the icon with the provided name', () => {
      const icon = wrapper.findComponent({ name: 'AvIcon' })

      expect(icon.exists()).toBe(true)
      expect(icon.props('name')).toBe('mdi:home')
    })
  })

  BddTest().and('an icon configuration is provided', () => {
    beforeEach(() => {
      wrapper = mount(AvButton, {
        props: {
          label: 'test',
          icon: {
            name: 'mdi:home',
            animation: 'spin',
          },
        },
        global: { stubs },
      })
    })

    BddTest().then('it should preserve the icon configuration', () => {
      const icon = wrapper.findComponent({ name: 'AvIcon' })

      expect(icon.props('name')).toBe('mdi:home')
      expect(icon.props('animation')).toBe('spin')
      expect(icon.props('size')).toBe(1)
    })
  })

  BddTest().and('an external href is provided', () => {
    const props: AvButtonProps = {
      label: 'Open docs',
      href: 'https://example.com/docs',
      variant: 'OUTLINED',
    }

    beforeEach(() => {
      wrapper = mount(AvButton, {
        props,
        global: { stubs },
      })
    })

    BddTest().then('it should render an anchor with the expected href', () => {
      const anchor = wrapper.find('a')

      expect(anchor.exists()).toBe(true)
      expect(anchor.attributes('href')).toBe(props.href)
      expect(anchor.attributes('data-tag')).toBe('link')
      expect(wrapper.find('button').exists()).toBe(false)
      expect(wrapper.findComponent(RouterLinkStub).exists()).toBe(false)
    })

    BddTest().then('it should render the external link icon', () => {
      const icon = wrapper.findComponent({ name: 'AvIcon' })

      expect(icon.exists()).toBe(true)
      expect(icon.props('name')).toBe(MDI_ICONS.EXTERNAL_LINK)
      expect(icon.props('size')).toBe(1)
    })

    BddTest().then('it should open the external link in a new tab', () => {
      const anchor = wrapper.find('a')

      expect(anchor.attributes('target')).toBe('_blank')
      expect(anchor.attributes('rel')).toBe('noopener noreferrer')
    })

    BddTest().then('it should force the default variant class', () => {
      const anchor = wrapper.find('a')

      expect(anchor.classes()).toContain('av-button--variant-default')
      expect(anchor.classes()).not.toContain('av-button--variant-outlined')
    })

    BddTest().then('it should not emit a click event', async () => {
      await wrapper.find('a').trigger('click')

      expect(wrapper.emitted('click')).toBeUndefined()
    })
  })

  BddTest().and('an external href is provided with a custom icon', () => {
    beforeEach(() => {
      wrapper = mount(AvButton, {
        props: {
          label: 'Open docs',
          href: 'https://example.com/docs',
          icon: 'mdi:home',
        },
        global: { stubs },
      })
    })

    BddTest().then('it should prioritize the external link icon', () => {
      expect(wrapper.findComponent({ name: 'AvIcon' }).props('name')).toBe(MDI_ICONS.EXTERNAL_LINK)
    })
  })

  BddTest().and('an external href is provided but disabled is true', () => {
    beforeEach(() => {
      wrapper = mount(AvButton, {
        props: {
          label: 'Disabled external link',
          href: 'https://example.com',
          disabled: true,
        },
        global: { stubs },
      })
    })

    BddTest().then('it should render a disabled button instead of an anchor', () => {
      const button = wrapper.find('button')

      expect(button.exists()).toBe(true)
      expect(button.attributes('disabled')).toBeDefined()
      expect(button.attributes('data-tag')).toBe('button')
      expect(wrapper.find('a').exists()).toBe(false)
    })

    BddTest().then('it should not render the external link icon', () => {
      expect(wrapper.findComponent({ name: 'AvIcon' }).exists()).toBe(false)
    })
  })

  BddTest().and('an internal anchor href is provided', () => {
    const props: AvButtonProps = {
      label: 'Go to section',
      href: '#section1',
      variant: 'OUTLINED',
    }

    beforeEach(() => {
      wrapper = mount(AvButton, {
        props,
        global: { stubs },
      })
    })

    BddTest().then('it should render an anchor with the expected href', () => {
      const anchor = wrapper.find('a')

      expect(anchor.exists()).toBe(true)
      expect(anchor.attributes('href')).toBe('#section1')
      expect(anchor.attributes('data-tag')).toBe('link')
      expect(wrapper.find('button').exists()).toBe(false)
      expect(wrapper.findComponent(RouterLinkStub).exists()).toBe(false)
    })

    BddTest().then('it should not render the external link icon', () => {
      expect(wrapper.findComponent({ name: 'AvIcon' }).exists()).toBe(false)
    })

    BddTest().then('it should force the default variant class', () => {
      const anchor = wrapper.find('a')

      expect(anchor.classes()).toContain('av-button--variant-default')
      expect(anchor.classes()).not.toContain('av-button--variant-outlined')
    })

    BddTest().then('it should not set target or rel', () => {
      const anchor = wrapper.find('a')

      expect(anchor.attributes('target')).toBeUndefined()
      expect(anchor.attributes('rel')).toBeUndefined()
    })

    BddTest().then('it should not emit a click event', async () => {
      await wrapper.find('a').trigger('click')

      expect(wrapper.emitted('click')).toBeUndefined()
    })
  })

  BddTest().and('a to prop is provided', () => {
    const props: AvButtonProps = {
      label: 'Go to profile',
      to: '/profile',
      variant: 'OUTLINED',
    }

    beforeEach(() => {
      wrapper = mount(AvButton, {
        props,
        global: { stubs },
      })
    })

    BddTest().then('it should render a RouterLink with the expected target', () => {
      const link = wrapper.findComponent(RouterLinkStub)

      expect(link.exists()).toBe(true)
      expect(link.props('to')).toBe('/profile')
      expect(wrapper.find('button').exists()).toBe(false)
    })

    BddTest().then('it should force the default variant class when rendered as a link', () => {
      const link = wrapper.findComponent(RouterLinkStub)

      expect(link.classes()).toContain('av-button--variant-default')
      expect(link.classes()).not.toContain('av-button--variant-outlined')
      expect(link.attributes('data-tag')).toBe('routerlink')
    })

    BddTest().then('it should set aria-label when iconOnly is false', () => {
      const link = wrapper.findComponent(RouterLinkStub)

      expect(link.attributes('aria-label')).toBeUndefined()
    })

    BddTest().when('the RouterLink is clicked', () => {
      beforeEach(async () => {
        await wrapper.findComponent(RouterLinkStub).trigger('click')
      })

      BddTest().then('it should not emit a click event', () => {
        expect(wrapper.emitted('click')).toBeUndefined()
      })
    })

    BddTest().when('calling the exposed focus method', () => {
      let focusSpy: MockInstance

      beforeEach(() => {
        const link = wrapper.findComponent(RouterLinkStub)

        focusSpy = vi.spyOn(link.element as HTMLElement, 'focus')
        wrapper.vm.focus()
      })

      BddTest().then('it should call focus on the underlying RouterLink element', () => {
        expect(focusSpy).toHaveBeenCalled()
      })
    })
  })

  BddTest().and('a to prop is provided with iconOnly', () => {
    beforeEach(() => {
      wrapper = mount(AvButton, {
        props: {
          label: 'Go to profile',
          to: '/profile',
          icon: 'mdi:home',
          iconOnly: true,
        },
        global: { stubs },
      })
    })

    BddTest().then('it should set aria-label to the label', () => {
      expect(wrapper.findComponent(RouterLinkStub).attributes('aria-label')).toBe('Go to profile')
    })
  })

  BddTest().and('a to prop is provided but disabled is true', () => {
    beforeEach(() => {
      wrapper = mount(AvButton, {
        props: {
          label: 'Disabled link',
          to: '/profile',
          disabled: true,
        },
        global: { stubs },
      })
    })

    BddTest().then('it should render a disabled button instead of a RouterLink', () => {
      const button = wrapper.find('button')

      expect(button.exists()).toBe(true)
      expect(button.attributes('disabled')).toBeDefined()
      expect(button.attributes('data-tag')).toBe('button')
      expect(wrapper.findComponent(RouterLinkStub).exists()).toBe(false)
    })
  })

  BddTest().and('a to prop is provided with isLoading', () => {
    beforeEach(() => {
      wrapper = mount(AvButton, {
        props: {
          label: 'Loading link',
          to: '/profile',
          isLoading: true,
        },
        global: { stubs },
      })
    })

    BddTest().then('it should render a disabled button instead of a RouterLink', () => {
      expect(wrapper.find('button').exists()).toBe(true)
      expect(wrapper.findComponent(RouterLinkStub).exists()).toBe(false)
    })

    BddTest().then('it should render the loading icon', () => {
      expect(wrapper.findComponent({ name: 'AvIcon' }).props('name')).toBe(MDI_ICONS.LOADING)
    })
  })

  BddTest().and('the button is clicked', () => {
    beforeEach(async () => {
      wrapper = mount(AvButton, {
        props: { label: 'test' },
        global: { stubs },
      })

      await wrapper.find('button').trigger('click')
    })

    BddTest().then('it should emit a click event', () => {
      expect(wrapper.emitted('click')).toBeDefined()
      expect(wrapper.emitted('click')!.length).toBe(1)
    })
  })

  BddTest().and('the button is clicked while loading', () => {
    beforeEach(async () => {
      wrapper = mount(AvButton, {
        props: {
          label: 'test',
          isLoading: true,
        },
        global: { stubs },
      })

      await wrapper.find('button').trigger('click')
    })

    BddTest().then('it should not emit a click event', () => {
      expect(wrapper.emitted('click')).toBeUndefined()
    })
  })

  BddTest().and('noSentenceCase is true', () => {
    beforeEach(() => {
      wrapper = mount(AvButton, {
        props: {
          label: 'save my profile',
          noSentenceCase: true,
        },
        global: { stubs },
      })
    })

    BddTest().then('it should preserve the original label', () => {
      expect(wrapper.find('span').text()).toBe('save my profile')
    })
  })

  BddTest().and('noSentenceCase is false', () => {
    beforeEach(() => {
      wrapper = mount(AvButton, {
        props: {
          label: 'save my profile',
        },
        global: { stubs },
      })
    })

    BddTest().then('it should transform the label to sentence case', () => {
      expect(wrapper.find('span').text()).toBe('Save my profile')
    })
  })

  BddTest().and('theme is provided', () => {
    beforeEach(() => {
      wrapper = mount(AvButton, {
        props: {
          label: 'test',
          theme: 'SECONDARY',
        },
        global: { stubs },
      })
    })

    BddTest().then('it should render the secondary theme class', () => {
      const button = wrapper.find('button')

      expect(button.classes()).toContain('av-button--theme-secondary')
      expect(button.classes()).not.toContain('av-button--theme-primary')
    })
  })

  BddTest().and('flat variant is provided', () => {
    beforeEach(() => {
      wrapper = mount(AvButton, {
        props: {
          label: 'test',
          variant: 'FLAT',
        },
        global: { stubs },
      })
    })

    BddTest().then('it should render the flat variant class', () => {
      const button = wrapper.find('button')

      expect(button.classes()).toContain('av-button--variant-flat')
      expect(button.classes()).not.toContain('av-button--variant-default')
      expect(button.classes()).not.toContain('av-button--variant-outlined')
    })
  })

  BddTest().and('the focus method is called', () => {
    let focusSpy: MockInstance

    beforeEach(() => {
      wrapper = mount(AvButton, {
        props: { label: 'test' },
        global: { stubs },
      })

      const btnEl = wrapper.find('button').element as HTMLButtonElement
      focusSpy = vi.spyOn(btnEl, 'focus')

      wrapper.vm.focus()
    })

    BddTest().then('it should call focus on the button element', () => {
      expect(focusSpy).toHaveBeenCalled()
    })
  })
})

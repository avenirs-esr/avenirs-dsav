import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, expect, type MockInstance, vi } from 'vitest'
import AvButton, { type AvButtonProps } from '@/components/interaction/buttons/AvButton/AvButton.vue'
import { AvIconStub } from '@/tests'
import { BddTest } from '@/tests/utils'
import { MDI_ICONS } from '@/tokens'

BddTest().given('an AvButton', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvButton>>

  const stubs = { AvIcon: AvIconStub }

  BddTest().and('default props', () => {
    beforeEach(() => {
      wrapper = mount(AvButton, {
        props: { label: 'test' },
        global: { stubs }
      })
    })

    BddTest().when('component is mounted', () => {
      BddTest().then('it should render the label', () => {
        expect(wrapper.text()).toContain('Test')
      })

      BddTest().then('it should render the button default classes', () => {
        const button = wrapper.find('button')
        expect(button.classes()).toContain('av-button')
        expect(button.classes()).not.toContain('av-button--sm')
        expect(button.classes()).not.toContain('reverse')
        expect(button.classes()).not.toContain('justify-center')
        expect(button.classes()).not.toContain('av-button--no-radius')
        expect(button.classes()).toContain('av-button--variant-default')
        expect(button.classes()).not.toContain('av-button--variant-outlined')
        expect(button.classes()).not.toContain('av-button--variant-flat')
        expect(button.classes()).toContain('av-button--theme-primary')
        expect(button.classes()).not.toContain('av-button--theme-secondary')
      })

      BddTest().then('it should not render the icon', () => {
        expect(wrapper.findComponent({ name: 'AvIcon' }).exists()).toBe(false)
      })

      BddTest().then('it should not render the disabled state', () => {
        const button = wrapper.find('button')
        expect(button.attributes('disabled')).toBeUndefined()
      })
    })
  })

  BddTest().and('specific props', () => {
    const props: AvButtonProps = {
      label: 'Click me',
      variant: 'OUTLINED',
      small: true,
      icon: { name: 'test-icon' },
      disabled: true,
    }

    beforeEach(() => {
      wrapper = mount(AvButton, { props, global: { stubs } })
    })

    BddTest().then('it should render the button default classes', () => {
      const button = wrapper.find('button')
      expect(button.classes()).toContain('av-button')
      expect(button.classes()).toContain('av-button--sm')
      expect(button.classes()).not.toContain('reverse')
      expect(button.classes()).not.toContain('justify-center')
      expect(button.classes()).not.toContain('av-button--no-radius')
      expect(button.classes()).not.toContain('av-button--variant-default')
      expect(button.classes()).toContain('av-button--variant-outlined')
      expect(button.classes()).not.toContain('av-button--variant-flat')
      expect(button.classes()).toContain('av-button--theme-primary')
      expect(button.classes()).not.toContain('av-button--theme-secondary')
    })

    BddTest().then('it should render the icon', () => {
      const icon = wrapper.findComponent({ name: 'AvIcon' })
      expect(icon.exists()).toBe(true)
      expect(icon.props('name')).toBe('test-icon')
    })

    BddTest().then('it should render the disabled state', () => {
      const button = wrapper.find('button')
      expect(button.attributes('disabled')).toBeDefined()
    })
  })

  BddTest().and('isLoading is true', () => {
    beforeEach(() => {
      wrapper = mount(AvButton, {
        props: {
          label: 'test',
          isLoading: true,
          icon: { name: 'other-icon' },
        },
        global: { stubs }
      })
    })

    BddTest().when('component is mounted', () => {
      BddTest().then('it should render the icon', () => {
        const icon = wrapper.findComponent({ name: 'AvIcon' })
        expect(icon.exists()).toBe(true)
        expect(icon.props('name')).toBe(MDI_ICONS.LOADING_OUTLINE)
        expect(icon.props('animation')).toBe('spin')
      })

      BddTest().then('it should render the disabled state', () => {
        const button = wrapper.find('button')
        expect(button.attributes('disabled')).toBeDefined()
      })
    })
  })

  BddTest().and('iconOnly is true', () => {
    const props: AvButtonProps = { label: 'This is a test label', icon: 'mdi:home', iconOnly: true }

    beforeEach(() => {
      wrapper = mount(AvButton, {
        props,
        global: { stubs }
      })
    })

    BddTest().then('it should not render the label as text', () => {
      expect(wrapper.text()).not.toContain(props.label)
    })

    BddTest().then('it should the label as icon title', () => {
      expect(wrapper.find('.av-button').attributes('title')).toBe(props.label)
    })

    BddTest().then('it should add a specific style', () => {
      expect(wrapper.attributes('style')).toContain('padding-inline: var(--spacing-xs);')
    })
  })

  BddTest().and('noRadius prop is true', () => {
    beforeEach(() => {
      wrapper = mount(AvButton, {
        props: { label: 'test', noRadius: true },
        global: { stubs }
      })
    })

    BddTest().when('component is mounted', () => {
      BddTest().then('the button should have av-button--no-radius class', () => {
        expect(wrapper.classes()).toContain('av-button--no-radius')
      })
    })
  })

  BddTest().and('a click handler is passed', () => {
    const onClick = vi.fn()

    beforeEach(() => {
      wrapper = mount(AvButton, {
        props: { label: 'test', onClick },
        global: { stubs }
      })
    })

    BddTest().when('the button is clicked', () => {
      BddTest().then('the handler should be called', async () => {
        const btn = wrapper.find('button')
        await btn.trigger('click')
        expect(onClick).toHaveBeenCalled()
      })
    })
  })

  BddTest().and('svg size calculation', () => {
    describe.each([
      [true, 1],
      [false, 1.5],
    ] as [AvButtonProps['small'], number][])(
      'when small is %s',
      (small, expectedIconSize) => {
        beforeEach(() => {
          wrapper = mount(AvButton, {
            props: { label: 'test', icon: 'mdi:home', small },
            global: { stubs }
          })
        })

        BddTest().then('computedSvgScale should be ', () => {
          expect(wrapper.findComponent({ name: 'AvIcon' }).props('size')).toBe(expectedIconSize)
        })
      }
    )

    BddTest().when('iconScale is a valid number', () => {
      beforeEach(() => {
        wrapper = mount(AvButton, {
          props: { label: 'test', icon: 'mdi:home', iconScale: 3 },
          global: { stubs }
        })
      })

      BddTest().then('computedSvgScale returns iconScale value', () => {
        expect(wrapper.findComponent({ name: 'AvIcon' }).props('size')).toBe(3)
      })
    })

    BddTest().when('iconScale is NaN', () => {
      beforeEach(() => {
        wrapper = mount(AvButton, {
          props: { label: 'test', icon: 'mdi:home', iconScale: Number.NaN, small: false },
          global: { stubs }
        })
      })

      BddTest().then('the icon size falls back to size based value', () => {
        expect(wrapper.findComponent({ name: 'AvIcon' }).props('size')).toBe(1.5)
      })
    })
  })

  BddTest().and('focus method', () => {
    let wrapper: VueWrapper<InstanceType<typeof AvButton>>
    let focusSpy: MockInstance

    beforeEach(() => {
      wrapper = mount(AvButton, {
        props: { label: 'test' },
        global: { stubs }
      })

      const btnEl = wrapper.find('button').element as HTMLButtonElement
      focusSpy = vi.spyOn(btnEl, 'focus')
    })

    BddTest().when('calling the exposed focus method', () => {
      beforeEach(() => {
        wrapper.vm.focus()
      })

      BddTest().then('it should call focus on the button element', () => {
        expect(focusSpy).toHaveBeenCalled()
      })
    })
  })
})

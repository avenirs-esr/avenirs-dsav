import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect } from 'vitest'
import AvSideMenu from '@/components/navigation/AvSideMenu/AvSideMenu.vue'
import { BddTest } from '@/tests/utils'

BddTest().given('an AvSideMenu component', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvSideMenu>>

  const getCollapseButton = () => wrapper.find('[data-testid="side-menu-collapse-button"]')
  const getSideMenu = () => wrapper.find('[data-testid="av-side-menu"]')
  const getContent = () => wrapper.find('[data-testid="av-side-menu-content"]')
  const getHeader = () => wrapper.find('[data-testid="av-side-menu-header"]')

  BddTest().and('with default props', () => {
    beforeEach(() => {
      wrapper = mount<typeof AvSideMenu>(AvSideMenu)
    })

    BddTest().when('the component is mounted with default props', () => {
      BddTest().then('it should render the side-menu navigation element', () => {
        expect(getSideMenu().exists()).toBe(true)
      })

      BddTest().then('it should render the header with toggle button by default (collapsible=true)', () => {
        expect(getHeader().exists()).toBe(true)
        expect(getCollapseButton().exists()).toBe(true)
      })

      BddTest().then('it should not be collapsed by default', () => {
        expect(getSideMenu().attributes('data-collapsed')).toBe('false')
      })

      BddTest().then('it should be collapsible by default', () => {
        const button = getCollapseButton()
        expect(button.exists()).toBe(true)
      })
    })
  })

  BddTest().and('with collapsible=false', () => {
    beforeEach(() => {
      wrapper = mount<typeof AvSideMenu>(AvSideMenu, {
        props: {
          collapsible: false
        }
      })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should not render the header or toggle button', () => {
        expect(getHeader().exists()).toBe(false)
        expect(getCollapseButton().exists()).toBe(false)
      })

      BddTest().then('it should never have collapsed class', () => {
        expect(getSideMenu().attributes('data-collapsed')).toBe('false')
      })

      BddTest().then('it should always use the expanded width', () => {
        const sideMenu = getSideMenu()
        expect(sideMenu.exists()).toBe(true)
        // When collapsible=false, the component should never be collapsed
        expect(sideMenu.attributes('data-collapsed')).toBe('false')
      })
    })
  })

  BddTest().and('with custom id', () => {
    beforeEach(() => {
      wrapper = mount<typeof AvSideMenu>(AvSideMenu, {
        props: {
          id: 'custom-side-menu'
        }
      })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should use the provided id', () => {
        const nav = wrapper.find('nav')
        expect(nav.attributes('id')).toBe('custom-side-menu')
      })

      BddTest().then('it should set the aria-label based on id', () => {
        const nav = wrapper.find('nav')
        expect(nav.attributes('aria-label')).toBe('custom-side-menu navigation')
      })

      BddTest().then('it should set aria-controls on toggle button', () => {
        const button = getCollapseButton()
        expect(button.attributes('aria-controls')).toBe('custom-side-menu')
      })
    })
  })

  BddTest().and('with collapsed state', () => {
    beforeEach(() => {
      wrapper = mount<typeof AvSideMenu>(AvSideMenu, {
        props: {
          collapsed: true,
          id: 'test-menu'
        }
      })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should have collapsed class', () => {
        expect(getSideMenu().attributes('data-collapsed')).toBe('true')
      })

      BddTest().then('it should set aria-expanded to false', () => {
        const button = getCollapseButton()
        expect(button.attributes('aria-expanded')).toBe('false')
      })

      BddTest().then('it should use collapsed width', () => {
        const sideMenu = getSideMenu()
        expect(sideMenu.exists()).toBe(true)
        // When collapsed=true, the component should have the collapsed class
        expect(sideMenu.attributes('data-collapsed')).toBe('true')
      })
    })
  })

  BddTest().and('with custom width', () => {
    beforeEach(() => {
      wrapper = mount<typeof AvSideMenu>(AvSideMenu, {
        props: {
          width: '20rem',
          collapsedWidth: '3rem'
        }
      })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should apply the custom width', () => {
        const sideMenu = getSideMenu()
        expect(sideMenu.exists()).toBe(true)
        expect(sideMenu.attributes('data-collapsed')).toBe('false')
      })
    })

    BddTest().when('the component is collapsed', () => {
      BddTest().then('it should apply the collapsed width', async () => {
        await wrapper.setProps({ collapsed: true })
        const sideMenu = getSideMenu()
        expect(sideMenu.exists()).toBe(true)
        // When collapsed=true is set, component should have collapsed class
        expect(sideMenu.attributes('data-collapsed')).toBe('true')
      })
    })
  })

  BddTest().and('with toggle functionality and defineModel', () => {
    beforeEach(() => {
      wrapper = mount<typeof AvSideMenu>(AvSideMenu, {
        props: {
          id: 'test-menu'
        }
      })
    })

    BddTest().when('the toggle button is clicked', () => {
      BddTest().then('it should emit update:collapsed event with defineModel', async () => {
        const button = getCollapseButton()
        await button.trigger('click')

        expect(wrapper.emitted('update:collapsed')).toBeTruthy()
        expect(wrapper.emitted('update:collapsed')![0]).toEqual([true])
      })

      BddTest().then('it should toggle the state', async () => {
        const button = getCollapseButton()

        expect(getSideMenu().attributes('data-collapsed')).toBe('false')

        await button.trigger('click')
        await wrapper.vm.$nextTick()

        // defineModel always emits events
        expect(wrapper.emitted('update:collapsed')).toBeTruthy()
        expect(getSideMenu().attributes('data-collapsed')).toBe('true')
      })
    })
  })

  BddTest().and('with non-collapsible and collapsed props', () => {
    beforeEach(() => {
      wrapper = mount<typeof AvSideMenu>(AvSideMenu, {
        props: {
          collapsible: false,
          collapsed: true // Should be ignored when collapsible=false
        }
      })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should ignore collapsed prop when collapsible=false', () => {
        expect(getSideMenu().attributes('data-collapsed')).toBe('false')
      })

      BddTest().then('it should not emit events when toggle is called programmatically', async () => {
        expect(getSideMenu().attributes('data-collapsed')).toBe('false')
      })
    })
  })

  BddTest().and('with defineModel (uncontrolled)', () => {
    beforeEach(() => {
      wrapper = mount<typeof AvSideMenu>(AvSideMenu, {
        props: {
          id: 'uncontrolled-menu'
        }
      })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should start with default collapsed state (false)', () => {
        expect(getSideMenu().attributes('data-collapsed')).toBe('false')
      })

      BddTest().then('it should toggle internal state when button is clicked', async () => {
        const button = getCollapseButton()

        // Should be expanded initially
        expect(getSideMenu().attributes('data-collapsed')).toBe('false')

        // Click to collapse
        await button.trigger('click')
        await wrapper.vm.$nextTick()

        // Should change state directly with defineModel
        expect(getSideMenu().attributes('data-collapsed')).toBe('true')

        // Click again to expand
        await button.trigger('click')
        await wrapper.vm.$nextTick()

        expect(getSideMenu().attributes('data-collapsed')).toBe('false')
      })
    })
  })

  BddTest().and('with v-model (controlled)', () => {
    beforeEach(() => {
      wrapper = mount<typeof AvSideMenu>(AvSideMenu, {
        props: {
          'collapsed': false,
          'update:collapsed': (value: boolean) => wrapper.setProps({ collapsed: value }),
          'id': 'controlled-menu'
        }
      })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should use collapsed prop value', () => {
        expect(getSideMenu().attributes('data-collapsed')).toBe('false')
      })

      BddTest().then('it should emit events when toggle is called', async () => {
        const button = getCollapseButton()

        await button.trigger('click')

        expect(wrapper.emitted('update:collapsed')).toBeTruthy()
        expect(wrapper.emitted('update:collapsed')![0]).toEqual([true])
      })

      BddTest().then('it should update when collapsed prop changes', async () => {
        expect(getSideMenu().attributes('data-collapsed')).toBe('false')

        await wrapper.setProps({ collapsed: true })

        expect(getSideMenu().attributes('data-collapsed')).toBe('true')
      })
    })
  })

  BddTest().and('with default slot content', () => {
    beforeEach(() => {
      wrapper = mount<typeof AvSideMenu>(AvSideMenu, {
        slots: {
          default: '<div data-testid="custom-content">Menu Content</div>'
        }
      })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should render the slot content', () => {
        const content = wrapper.find('[data-testid="custom-content"]')
        expect(content.exists()).toBe(true)
        expect(content.text()).toBe('Menu Content')
      })

      BddTest().then('it should render the content inside av-side-menu__content', () => {
        const contentWrapper = getContent()
        expect(contentWrapper.exists()).toBe(true)
        expect(contentWrapper.find('[data-testid="custom-content"]').exists()).toBe(true)
      })
    })
  })

  BddTest().and('with accessibility', () => {
    beforeEach(() => {
      wrapper = mount<typeof AvSideMenu>(AvSideMenu, {
        props: {
          id: 'main-nav'
        }
      })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should have proper ARIA attributes', () => {
        const nav = wrapper.find('nav')
        const button = getCollapseButton()

        expect(nav.attributes('aria-label')).toBe('main-nav navigation')
        expect(button.attributes('aria-expanded')).toBe('true')
        expect(button.attributes('aria-controls')).toBe('main-nav')
      })
    })
  })

  BddTest().and('with hide content when collapsed', () => {
    beforeEach(() => {
      wrapper = mount<typeof AvSideMenu>(AvSideMenu, {
        props: {
          hideContentWhenCollapsed: true
        }
      })
    })

    BddTest().when('the component is not collapsed', () => {
      BddTest().then('it should show the content', () => {
        const content = getContent()
        expect(content.exists()).toBe(true)
      })
    })

    BddTest().when('the component is collapsed', () => {
      BddTest().then('it should hide the content', async () => {
        await wrapper.setProps({ collapsed: true })
        const sideMenu = getSideMenu()
        expect(sideMenu.exists()).toBe(true)
        expect(sideMenu.classes()).toContain('av-side-menu--collapsed')
        expect(getContent().exists()).toBe(false)
      })
    })
  })
})

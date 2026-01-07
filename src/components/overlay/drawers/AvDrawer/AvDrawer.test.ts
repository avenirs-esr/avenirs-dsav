import { mount } from '@vue/test-utils'
import { beforeEach, expect, vi } from 'vitest'
import AvDrawer from '@/components/overlay/drawers/AvDrawer/AvDrawer.vue'
import { BddTest } from '@/tests/utils'

const mockOnWheel = vi.fn()
const mockOnTouchStart = vi.fn()
const mockOnTouchMove = vi.fn()

vi.mock('@/composables/use-contained-scroll/use-contained-scroll', () => ({
  useContainedScroll: vi.fn(() => ({
    onWheel: mockOnWheel,
    onTouchStart: mockOnTouchStart,
    onTouchMove: mockOnTouchMove,
  })),
}))

BddTest().given('a drawer component', () => {
  let wrapper: ReturnType<typeof mount<typeof AvDrawer>>

  beforeEach(() => {
    wrapper = mount(AvDrawer, {
      props: {
        show: true,
      },
    })
  })

  BddTest().when('the drawer is mounted with default props', () => {
    BddTest().then('it should render the drawer', () => {
      expect(wrapper.find('.av-drawer').exists()).toBe(true)
    })

    BddTest().then('it should have right position by default', () => {
      expect(wrapper.find('.av-drawer--right').exists()).toBe(true)
    })

    BddTest().then('it should show backdrop by default', () => {
      expect(wrapper.find('.av-drawer-backdrop').exists()).toBe(true)
    })

    BddTest().then('it should render the drawer content', () => {
      expect(wrapper.find('.av-drawer__content').exists()).toBe(true)
    })
  })

  BddTest().when('the drawer is closed', () => {
    beforeEach(() => {
      wrapper = mount(AvDrawer, {
        props: {
          show: false,
        },
      })
    })

    BddTest().then('it should not render the drawer', () => {
      expect(wrapper.find('.av-drawer').exists()).toBe(false)
    })

    BddTest().then('it should not render the backdrop', () => {
      expect(wrapper.find('.av-drawer-backdrop').exists()).toBe(false)
    })
  })

  BddTest().when('the drawer has left position', () => {
    beforeEach(() => {
      wrapper = mount(AvDrawer, {
        props: {
          show: true,
          position: 'left',
        },
      })
    })

    BddTest().then('it should have left position class', () => {
      expect(wrapper.find('.av-drawer--left').exists()).toBe(true)
    })

    BddTest().then('it should not have right position class', () => {
      expect(wrapper.find('.av-drawer--right').exists()).toBe(false)
    })
  })

  BddTest().when('the drawer has custom width', () => {
    beforeEach(() => {
      wrapper = mount(AvDrawer, {
        props: {
          show: true,
          width: '31.25rem',
        },
      })
    })

    BddTest().then('it should render the drawer with custom width prop', () => {
      expect(wrapper.find('.av-drawer').exists()).toBe(true)
      expect(wrapper.vm.width).toBe('31.25rem')
    })
  })

  BddTest().when('the drawer has custom padding', () => {
    beforeEach(() => {
      wrapper = mount(AvDrawer, {
        props: {
          show: true,
          padding: '2rem',
        },
      })
    })

    BddTest().then('it should render the drawer with custom padding prop', () => {
      expect(wrapper.find('.av-drawer__content').exists()).toBe(true)
      expect(wrapper.vm.padding).toBe('2rem')
    })
  })

  BddTest().when('backdrop is disabled', () => {
    beforeEach(() => {
      wrapper = mount(AvDrawer, {
        props: {
          show: true,
          backdrop: false,
        },
      })
    })

    BddTest().then('it should not render the backdrop', () => {
      expect(wrapper.find('.av-drawer-backdrop').exists()).toBe(false)
    })

    BddTest().then('it should still render the drawer', () => {
      expect(wrapper.find('.av-drawer').exists()).toBe(true)
    })
  })

  BddTest().when('backdrop is enabled', () => {
    beforeEach(() => {
      wrapper = mount(AvDrawer, {
        props: {
          show: true,
          backdrop: true,
        },
      })
    })

    BddTest().then('it should render the backdrop', () => {
      expect(wrapper.find('.av-drawer-backdrop').exists()).toBe(true)
    })
  })

  BddTest().when('slot content is provided', () => {
    beforeEach(() => {
      wrapper = mount(AvDrawer, {
        props: {
          show: true,
        },
        slots: {
          default: '<div class="test-content">Test Content</div>',
        },
      })
    })

    BddTest().then('it should render the slot content', () => {
      expect(wrapper.find('.test-content').exists()).toBe(true)
      expect(wrapper.find('.test-content').text()).toBe('Test Content')
    })
  })

  BddTest().when('footer slot content is provided', () => {
    beforeEach(() => {
      wrapper = mount(AvDrawer, {
        props: {
          show: true,
        },
        slots: {
          footer: '<div class="test-content">Test Content</div>',
        },
      })
    })

    BddTest().then('it should render the slot content', () => {
      expect(wrapper.find('.test-content').exists()).toBe(true)
      expect(wrapper.find('.test-content').text()).toBe('Test Content')
    })
  })

  BddTest().when('all props are provided', () => {
    beforeEach(() => {
      wrapper = mount(AvDrawer, {
        props: {
          show: true,
          position: 'left',
          width: '25rem',
          backdrop: false,
          padding: '1rem',
        },
      })
    })

    BddTest().then('it should apply all props correctly', () => {
      expect(wrapper.find('.av-drawer--left').exists()).toBe(true)
      expect(wrapper.find('.av-drawer-backdrop').exists()).toBe(false)
      expect(wrapper.find('.av-drawer').exists()).toBe(true)
      expect(wrapper.find('.av-drawer__content').exists()).toBe(true)
      expect(wrapper.vm.width).toBe('25rem')
      expect(wrapper.vm.padding).toBe('1rem')
      expect(wrapper.vm.position).toBe('left')
      expect(wrapper.vm.backdrop).toBe(false)
    })
  })

  BddTest().when('the drawer is visible', () => {
    beforeEach(() => {
      wrapper = mount(AvDrawer, {
        props: {
          show: true,
        },
      })
    })

    BddTest().then('it should emit escapePressed event on escape key press', async () => {
      const event = new KeyboardEvent('keydown', { key: 'Escape' })
      window.dispatchEvent(event)
      await wrapper.vm.$nextTick()
      expect(wrapper.emitted('escapePressed')).toBeTruthy()
      expect(wrapper.emitted('escapePressed')?.length).toBe(1)
    })
  })

  BddTest().when('a custom ariaLabel is provided', () => {
    const ariaLabel = 'Custom Aria Label'
    beforeEach(() => {
      wrapper = mount(AvDrawer, {
        props: {
          show: true,
          ariaLabel,
        },
      })
    })

    BddTest().then('it should set the aria-label attribute correctly', () => {
      expect(wrapper.find('.av-drawer').attributes('aria-label')).toBe(ariaLabel)
    })
  })

  BddTest().when('no ariaLabel is provided', () => {
    beforeEach(() => {
      wrapper = mount(AvDrawer, {
        props: {
          show: true,
        },
      })
    })

    BddTest().then('it should have a default aria-label', () => {
      expect(wrapper.find('.av-drawer').attributes('aria-label')).toBe('Menu latéral')
    })
  })

  BddTest().when('the drawer is scrolled', () => {
    beforeEach(() => {
      wrapper = mount(AvDrawer, {
        props: {
          show: true,
        },
      })
      const drawerContent = wrapper.find('.av-drawer__content')
      drawerContent.trigger('wheel')
    })

    BddTest().then('it should call the onWheel handler from useContainedScroll', () => {
      expect(mockOnWheel).toHaveBeenCalled()
    })
  })

  BddTest().when('touch events occur on the drawer', () => {
    beforeEach(() => {
      wrapper = mount(AvDrawer, {
        props: {
          show: true,
        },
      })
      const drawerContent = wrapper.find('.av-drawer__content')
      drawerContent.trigger('touchstart')
      drawerContent.trigger('touchmove')
    })

    BddTest().then('it should call the onTouchStart and onTouchMove handlers from useContainedScroll', () => {
      expect(mockOnTouchStart).toHaveBeenCalled()
      expect(mockOnTouchMove).toHaveBeenCalled()
    })
  })
})

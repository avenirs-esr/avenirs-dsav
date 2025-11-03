import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect, vi } from 'vitest'
import AvTabs from '@/components/interaction/tabs/AvTabs/AvTabs.vue'
import { AvIconStub } from '@/tests'
import { BddTest } from '@/tests/utils'

function getLastEmittedUpdate (wrapper: VueWrapper<InstanceType<typeof AvTabs>>) {
  const updates = wrapper.emitted('update:modelValue')
  if (!updates || updates.length === 0) {
    return null
  }
  return updates[updates.length - 1][0]
}

const observeMock = vi.fn()
const unobserveMock = vi.fn()
const disconnectMock = vi.fn()

vi.stubGlobal('ResizeObserver', class {
  constructor (cb: ResizeObserverCallback) {
    this.cb = cb
  }

  observe (el?: Element) {
    observeMock(el)
  }

  unobserve (el?: Element) {
    unobserveMock(el)
  }

  disconnect () {
    disconnectMock()
  }

  cb: ResizeObserverCallback
})

BddTest().given('a tab switcher ', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvTabs>>

  const tabSlots = [
    '<AvTab title="Tab 1" icon="icon-1">Content 1</AvTab>',
    '<AvTab title="Tab 2" icon="icon-2">Content 2</AvTab>',
    '<AvTab title="Tab 3">Content 3</AvTab>',
  ]

  const props = { modelValue: 0 }
  const slots = { default: tabSlots.join('') }
  const stubs = {
    AvIcon: AvIconStub,
    AvTab: {
      name: 'AvTab',
      template: '<div />'
    }
  }

  BddTest().and('with multiple tabs', () => {
    beforeEach(() => {
      wrapper = mount(AvTabs, { props, slots, global: { stubs } })
    })

    BddTest().when('the tab switcher is mounted', () => {
      BddTest().then('it should render all tabs', () => {
        expect(wrapper.findAll('.av-tab-item')).toHaveLength(3)
        expect(wrapper.findAll('.av-tab-item__tab')).toHaveLength(3)
      })

      BddTest().then('it should render icons for tabs with icons', () => {
        const tabItems = wrapper.findAll('.av-tab-item')
        expect(tabItems[0].findComponent({ name: 'AvIcon' }).exists()).toBe(true)
        expect(tabItems[1].findComponent({ name: 'AvIcon' }).exists()).toBe(true)
        expect(tabItems[2].findComponent({ name: 'AvIcon' }).exists()).toBe(false)
      })

      BddTest().then('it should render all tab contents', () => {
        expect(wrapper.findAll('.av-tab-content')).toHaveLength(3)
      })

      BddTest().then('it should not render compact classes', () => {
        expect(wrapper.find('.av-tabs--compact').exists()).toBe(false)
        expect(wrapper.find('.av-tabs__list--compact').exists()).toBe(false)
        expect(wrapper.find('.av-tab-item--compact').exists()).toBe(false)
        expect(wrapper.find('.av-tab-item--compact__tab').exists()).toBe(false)
      })

      BddTest().then('it should instantiate the ResizeObserver', () => {
        expect(observeMock).toHaveBeenCalled()
      })

      BddTest().and('the compact prop is passed', () => {
        beforeEach(() => {
          wrapper = mount(AvTabs, {
            props: { ...props, compact: true },
            slots,
            global: { stubs }
          })
        })

        BddTest().then('it should render compact elements', () => {
          expect(wrapper.find('.av-tabs--compact').exists()).toBe(true)
          expect(wrapper.find('.av-tabs__list--compact').exists()).toBe(true)
          expect(wrapper.find('.av-tab-item--compact').exists()).toBe(true)
          expect(wrapper.find('.av-tab-item--compact__tab').exists()).toBe(true)
        })
      })

      BddTest().and('the ResizeObserver callback is triggered', () => {
        beforeEach(() => {
          const resizeObserverInstance = (wrapper.vm as any).resizeObserver
          resizeObserverInstance.cb()
        })

        BddTest().then('it should update the tabs style', () => {
          const tabsStyle = (wrapper.vm as any).tabsStyle
          expect(tabsStyle).toHaveProperty('--tabs-height')
        })
      })
    })

    BddTest().when('the tab switcher is unmounted', () => {
      beforeEach(() => {
        wrapper.unmount()
      })

      BddTest().then('it should disconnect the ResizeObserver', () => {
        expect(disconnectMock).toHaveBeenCalled()
      })
    })

    BddTest().when('the first tab is active', () => {
      beforeEach(() => {
        wrapper = mount(AvTabs, { props: { modelValue: 0 }, slots, global: { stubs } })
      })

      BddTest().and('the modelValue prop is updated to the second tab', () => {
        beforeEach(async () => {
          (wrapper.vm as any).activeTab = 1
          await wrapper.vm.$nextTick()
        })

        BddTest().then('it should update the active tab', () => {
          expect(wrapper.findAll('.av-tab-item__tab')[1].attributes('aria-selected')).toBe('true')
        })
      })

      BddTest().and('the second tab is clicked', () => {
        beforeEach(async () => {
          await wrapper.findAll('.av-tab-item__tab')[1].trigger('click')
        })

        BddTest().then('it should emit an update to the second tab', async () => {
          expect(getLastEmittedUpdate(wrapper)).toBe(1)
        })
      })

      BddTest().and('the right arrow key is pressed', () => {
        beforeEach(async () => {
          await wrapper.findAll('.av-tab-item__tab')[0].trigger('keydown', { key: 'ArrowRight' })
        })

        BddTest().then('it should emit an update to the second tab', async () => {
          expect(getLastEmittedUpdate(wrapper)).toBe(1)
        })
      })

      BddTest().and('the left arrow key is pressed', () => {
        beforeEach(async () => {
          await wrapper.findAll('.av-tab-item__tab')[0].trigger('keydown', { key: 'ArrowLeft' })
        })

        BddTest().then('it should emit an update to the last tab', async () => {
          expect(getLastEmittedUpdate(wrapper)).toBe(2)
        })
      })

      BddTest().and('the home key is pressed', () => {
        beforeEach(async () => {
          await wrapper.findAll('.av-tab-item__tab')[0].trigger('keydown', { key: 'Home' })
        })

        BddTest().then('it should not emit an update', async () => {
          expect(wrapper.emitted('update:modelValue')).toBeUndefined()
        })
      })

      BddTest().and('the end key is pressed', () => {
        beforeEach(async () => {
          await wrapper.findAll('.av-tab-item__tab')[0].trigger('keydown', { key: 'End' })
        })

        BddTest().then('it should emit an update to the last tab', async () => {
          expect(getLastEmittedUpdate(wrapper)).toBe(2)
        })
      })
    })

    BddTest().when('the second tab is active', () => {
      beforeEach(() => {
        wrapper = mount(AvTabs, { props: { modelValue: 1 }, slots, global: { stubs } })
      })

      BddTest().and('the right arrow key is pressed', () => {
        beforeEach(async () => {
          await wrapper.findAll('.av-tab-item__tab')[1].trigger('keydown', { key: 'ArrowRight' })
        })

        BddTest().then('it should emit an update to the third tab', async () => {
          expect(getLastEmittedUpdate(wrapper)).toBe(2)
        })
      })

      BddTest().and('the left arrow key is pressed', () => {
        beforeEach(async () => {
          await wrapper.findAll('.av-tab-item__tab')[1].trigger('keydown', { key: 'ArrowLeft' })
        })

        BddTest().then('it should emit an update to the first tab', async () => {
          expect(getLastEmittedUpdate(wrapper)).toBe(0)
        })
      })

      BddTest().and('the home key is pressed', () => {
        beforeEach(async () => {
          await wrapper.findAll('.av-tab-item__tab')[1].trigger('keydown', { key: 'Home' })
        })

        BddTest().then('it should emit an update to the first tab', async () => {
          expect(getLastEmittedUpdate(wrapper)).toBe(0)
        })
      })

      BddTest().and('the end key is pressed', () => {
        beforeEach(async () => {
          await wrapper.findAll('.av-tab-item__tab')[1].trigger('keydown', { key: 'End' })
        })

        BddTest().then('it should emit an update to the last tab', async () => {
          expect(getLastEmittedUpdate(wrapper)).toBe(2)
        })
      })
    })

    BddTest().when('the last tab is active', () => {
      beforeEach(() => {
        wrapper = mount(AvTabs, { props: { modelValue: 2 }, slots, global: { stubs } })
      })

      BddTest().and('the right arrow key is pressed', () => {
        beforeEach(async () => {
          await wrapper.findAll('.av-tab-item__tab')[2].trigger('keydown', { key: 'ArrowRight' })
        })

        BddTest().then('it should emit an update to the first tab', async () => {
          expect(getLastEmittedUpdate(wrapper)).toBe(0)
        })
      })

      BddTest().and('the left arrow key is pressed', () => {
        beforeEach(async () => {
          await wrapper.findAll('.av-tab-item__tab')[2].trigger('keydown', { key: 'ArrowLeft' })
        })

        BddTest().then('it should emit an update to the second tab', async () => {
          expect(getLastEmittedUpdate(wrapper)).toBe(1)
        })
      })

      BddTest().and('the home key is pressed', () => {
        beforeEach(async () => {
          await wrapper.findAll('.av-tab-item__tab')[2].trigger('keydown', { key: 'Home' })
        })

        BddTest().then('it should emit an update to the first tab', async () => {
          expect(getLastEmittedUpdate(wrapper)).toBe(0)
        })
      })

      BddTest().and('the end key is pressed', () => {
        beforeEach(async () => {
          await wrapper.findAll('.av-tab-item__tab')[2].trigger('keydown', { key: 'End' })
        })

        BddTest().then('it should not emit an update', async () => {
          expect(wrapper.emitted('update:modelValue')).toBeUndefined()
        })
      })
    })
  })

  BddTest().and('with no slot provided', () => {
    beforeEach(() => {
      wrapper = mount(AvTabs, { props })
    })

    BddTest().when('the tab switcher is mounted', () => {
      BddTest().then('it should not render any tab', () => {
        const tabs = wrapper.findAll('.av-tab-item')
        expect(tabs.length).toBe(0)
      })
    })
  })
})

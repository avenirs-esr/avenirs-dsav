import { mount } from '@vue/test-utils'
import { beforeEach, expect, vi } from 'vitest'
import AvTooltip from '@/components/overlay/tooltips/AvTooltip/AvTooltip.vue'
import { BddTest } from '@/tests/utils'

BddTest().given('an AvTooltip component', () => {
  let wrapper: ReturnType<typeof mount<typeof AvTooltip>>

  beforeEach(() => {
    wrapper = mount(AvTooltip, {
      props: {
        content: 'Tooltip text',
      },
      slots: {
        default: '<button type="button">Trigger</button>'
      },
      attachTo: document.body
    })
  })

  BddTest().when('it is rendered', () => {
    BddTest().then('it should not display the tooltip by default', () => {
      expect(wrapper.find('[role="tooltip"]').exists()).toBe(false)
    })

    BddTest().and('the trigger is hovered', () => {
      beforeEach(async () => {
        await wrapper.find('.av-tooltip-wrapper').trigger('mouseenter')
      })

      BddTest().then('it should display the tooltip content', () => {
        const tooltip = document.body.querySelector('[role="tooltip"]')
        expect(tooltip).not.toBeNull()
        expect(tooltip?.textContent).toBe('Tooltip text')
      })

      BddTest().and('the pointer leaves the trigger', () => {
        beforeEach(async () => {
          await wrapper.find('.av-tooltip-wrapper').trigger('mouseleave')
        })

        BddTest().then('it should hide the tooltip', () => {
          expect(wrapper.find('[role="tooltip"]').exists()).toBe(false)
        })
      })

      BddTest().and('a scroll event occurs', () => {
        beforeEach(async () => {
          window.dispatchEvent(new Event('scroll'))
          await wrapper.vm.$nextTick()
        })

        BddTest().then('it should hide the tooltip', () => {
          expect(wrapper.find('[role="tooltip"]').exists()).toBe(false)
        })
      })
    })
  })

  BddTest().when('forceFocusable is enabled with a non-focusable trigger', () => {
    beforeEach(() => {
      wrapper.unmount()
      wrapper = mount(AvTooltip, {
        props: {
          content: 'Tooltip text',
          forceFocusable: true,
        },
        slots: {
          default: '<span>Trigger</span>'
        },
        attachTo: document.body
      })
    })

    BddTest().then('it should add tabindex to the trigger container', () => {
      expect(wrapper.find('.av-tooltip-trigger').attributes('tabindex')).toBe('0')
    })

    BddTest().and('the trigger receives focus', () => {
      beforeEach(async () => {
        const trigger = wrapper.find('.av-tooltip-trigger').element as HTMLElement
        vi.spyOn(trigger, 'matches').mockImplementation((selector: string) => selector === ':focus-visible')
        await wrapper.find('.av-tooltip-trigger').trigger('focusin')
      })

      BddTest().then('it should display the tooltip', () => {
        const tooltip = document.body.querySelector('[role="tooltip"]')
        expect(tooltip).not.toBeNull()
      })
    })
  })

  BddTest().when('the tooltip is disabled', () => {
    beforeEach(() => {
      wrapper.unmount()
      document.body.querySelectorAll('[role="tooltip"]').forEach(node => node.remove())

      wrapper = mount(AvTooltip, {
        props: {
          content: 'Tooltip text',
          disabled: true,
        },
        slots: {
          default: '<button type="button">Trigger</button>'
        },
        attachTo: document.body
      })
    })

    BddTest().then('it should not render tooltip wrapper', () => {
      expect(wrapper.find('.av-tooltip-wrapper').exists()).toBe(false)
    })

    BddTest().and('the trigger is hovered', () => {
      beforeEach(async () => {
        await wrapper.find('button').trigger('mouseenter')
      })

      BddTest().then('it should not display tooltip content', () => {
        const tooltip = document.body.querySelector('[role="tooltip"]')
        expect(tooltip).toBeNull()
      })
    })
  })
})

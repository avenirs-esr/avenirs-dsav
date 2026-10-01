import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, expect, vi } from 'vitest'
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

    BddTest().and('fullWidth is enabled', () => {
      beforeEach(() => {
        wrapper.unmount()
        wrapper = mount(AvTooltip, {
          props: {
            content: 'Tooltip text',
            fullWidth: true,
          },
          slots: {
            default: '<button type="button">Trigger</button>'
          },
          attachTo: document.body
        })
      })

      BddTest().then('it should make the wrapper and trigger full width', () => {
        expect(wrapper.find('.av-tooltip-wrapper').classes()).toContain('av-tooltip-wrapper--full-width')
        expect(wrapper.find('.av-tooltip-trigger').classes()).toContain('av-tooltip-trigger--full-width')
      })
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
  BddTest().when('nested AvTooltip instances overlap', () => {
    let nestedWrapper: ReturnType<typeof mount>

    function getTooltipTexts (): (string | null)[] {
      return Array.from(document.body.querySelectorAll('[role="tooltip"]')).map(node => node.textContent)
    }

    beforeEach(() => {
      document.body.querySelectorAll('[role="tooltip"]').forEach(node => node.remove())

      nestedWrapper = mount({
        components: { AvTooltip },
        template: `
          <AvTooltip content="Parent tooltip">
            <div class="parent-area">
              <AvTooltip content="Child tooltip">
                <button type="button">
                  Child trigger
                </button>
              </AvTooltip>
            </div>
          </AvTooltip>
        `
      }, { attachTo: document.body })
    })

    afterEach(() => {
      nestedWrapper.unmount()
      document.body.querySelectorAll('[role="tooltip"]').forEach(node => node.remove())
    })

    BddTest().and('the parent trigger is hovered', () => {
      beforeEach(async () => {
        const [parentWrapper] = nestedWrapper.findAll('.av-tooltip-wrapper')
        await parentWrapper.trigger('mouseenter')
      })

      BddTest().then('it should display the parent tooltip', () => {
        expect(getTooltipTexts()).toEqual(['Parent tooltip'])
      })

      BddTest().and('the child trigger is also hovered', () => {
        beforeEach(async () => {
          const [, childWrapper] = nestedWrapper.findAll('.av-tooltip-wrapper')
          await childWrapper.trigger('mouseenter')
        })

        BddTest().then('it should hide the parent tooltip and display only the child tooltip', () => {
          expect(getTooltipTexts()).toEqual(['Child tooltip'])
        })

        BddTest().and('the pointer leaves the child trigger while staying over the parent', () => {
          beforeEach(async () => {
            const [, childWrapper] = nestedWrapper.findAll('.av-tooltip-wrapper')
            await childWrapper.trigger('mouseleave')
          })

          BddTest().then('it should display the parent tooltip again', () => {
            expect(getTooltipTexts()).toEqual(['Parent tooltip'])
          })
        })
      })
    })
  })
  BddTest().when('a trigger aria label is provided', () => {
    beforeEach(() => {
      wrapper.unmount()
      wrapper = mount(AvTooltip, {
        props: {
          content: 'Tooltip text',
          triggerAriaLabel: 'Informations',
        },
        slots: {
          default: '<span>Trigger</span>'
        },
      })
    })

    BddTest().then('it should apply the label to the trigger', () => {
      const trigger = wrapper.find('.av-tooltip-trigger')

      expect(trigger.attributes('role')).toBe('img')
      expect(trigger.attributes('aria-label')).toBe('Informations')
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

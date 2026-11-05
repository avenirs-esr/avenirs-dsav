import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, expect, vi } from 'vitest'
import AvTooltip from '@/components/overlay/tooltips/AvTooltip/AvTooltip.vue'
import { BddTest } from '@/tests/utils'

BddTest().given('an AvTooltip component', () => {
  let wrapper: ReturnType<typeof mount<typeof AvTooltip>>

  function mountTooltip (props = {}, options = {}) {
    return mount(AvTooltip, {
      props: {
        content: 'Tooltip text',
        ...props,
      },
      slots: {
        default: '<button type="button">Trigger</button>',
      },
      attachTo: document.body,
      ...options,
    })
  }

  function getTooltip (): HTMLElement | null {
    return document.body.querySelector('[role="tooltip"]')
  }

  beforeEach(() => {
    wrapper = mountTooltip()
  })

  afterEach(() => {
    wrapper.unmount()
    document.body.querySelectorAll('[role="tooltip"]').forEach(node => node.remove())
    vi.restoreAllMocks()
    vi.unstubAllGlobals()
  })

  BddTest().when('it is rendered', () => {
    BddTest().then('it should not display the tooltip by default', () => {
      expect(getTooltip()).toBeNull()
    })

    BddTest().and('fullWidth is enabled', () => {
      beforeEach(() => {
        wrapper.unmount()
        wrapper = mountTooltip({ fullWidth: true })
      })

      BddTest().then('it should make the wrapper and trigger full width', () => {
        expect(wrapper.find('.av-tooltip-wrapper').classes())
          .toContain('av-tooltip-wrapper--full-width')

        expect(wrapper.find('.av-tooltip-trigger').classes())
          .toContain('av-tooltip-trigger--full-width')
      })
    })

    BddTest().and('the trigger is hovered', () => {
      beforeEach(async () => {
        await wrapper.find('.av-tooltip-wrapper').trigger('mouseenter')
      })

      BddTest().then('it should display the tooltip content', () => {
        expect(getTooltip()?.textContent).toBe('Tooltip text')
      })

      BddTest().and('the pointer leaves the trigger', () => {
        beforeEach(async () => {
          await wrapper.find('.av-tooltip-wrapper').trigger('mouseleave')
        })

        BddTest().then('it should hide the tooltip', () => {
          expect(getTooltip()).toBeNull()
        })
      })

      BddTest().and('a scroll event occurs', () => {
        beforeEach(async () => {
          window.dispatchEvent(new Event('scroll'))
          await wrapper.vm.$nextTick()
        })

        BddTest().then('it should hide the tooltip', () => {
          expect(getTooltip()).toBeNull()
        })
      })
    })
  })

  BddTest().when('the content is undefined', () => {
    beforeEach(() => {
      wrapper.unmount()
      wrapper = mountTooltip({ content: undefined })
    })

    BddTest().then('it should render the slot without the tooltip wrapper', () => {
      expect(wrapper.find('button').exists()).toBe(true)
      expect(wrapper.find('.av-tooltip-wrapper').exists()).toBe(false)
    })
  })

  BddTest().when('the content is empty', () => {
    beforeEach(() => {
      wrapper.unmount()
      wrapper = mountTooltip({ content: '' })
    })

    BddTest().then('it should render the slot without the tooltip wrapper', () => {
      expect(wrapper.find('button').exists()).toBe(true)
      expect(wrapper.find('.av-tooltip-wrapper').exists()).toBe(false)
    })
  })

  BddTest().when('forceFocusable is enabled with a non-focusable trigger', () => {
    beforeEach(() => {
      wrapper.unmount()
      wrapper = mountTooltip(
        { forceFocusable: true },
        {
          slots: {
            default: '<span>Trigger</span>',
          },
        },
      )
    })

    BddTest().then('it should add tabindex to the trigger container', () => {
      expect(wrapper.find('.av-tooltip-trigger').attributes('tabindex')).toBe('0')
    })

    BddTest().and('the trigger receives focus-visible', () => {
      beforeEach(async () => {
        const trigger = wrapper.find('.av-tooltip-trigger').element as HTMLElement

        vi.spyOn(trigger, 'matches')
          .mockImplementation(selector => selector === ':focus-visible')

        await wrapper.find('.av-tooltip-trigger').trigger('focusin')
      })

      BddTest().then('it should display the tooltip', () => {
        expect(getTooltip()).not.toBeNull()
      })
    })
  })

  BddTest().when('the trigger receives focus without focus-visible', () => {
    beforeEach(async () => {
      const trigger = wrapper.find('.av-tooltip-trigger').element as HTMLElement

      vi.spyOn(trigger, 'matches').mockReturnValue(false)

      await wrapper.find('.av-tooltip-trigger').trigger('focusin')
    })

    BddTest().then('it should not display the tooltip', () => {
      expect(getTooltip()).toBeNull()
    })
  })

  BddTest().when('focus-visible is unsupported', () => {
    beforeEach(async () => {
      const trigger = wrapper.find('.av-tooltip-trigger').element as HTMLElement

      vi.spyOn(trigger, 'matches').mockImplementation(() => {
        throw new Error('Unsupported selector')
      })

      await wrapper.find('.av-tooltip-trigger').trigger('focusin')
    })

    BddTest().then('it should display the tooltip as a fallback', () => {
      expect(getTooltip()).not.toBeNull()
    })
  })

  BddTest().when('the trigger loses focus', () => {
    beforeEach(async () => {
      const trigger = wrapper.find('.av-tooltip-trigger').element as HTMLElement

      vi.spyOn(trigger, 'matches').mockReturnValue(true)

      await wrapper.find('.av-tooltip-trigger').trigger('focusin')
      await wrapper.find('.av-tooltip-trigger').trigger('focusout')
    })

    BddTest().then('it should hide the tooltip', () => {
      expect(getTooltip()).toBeNull()
    })
  })

  BddTest().when('additional attributes are provided', () => {
    beforeEach(() => {
      wrapper.unmount()
      wrapper = mountTooltip(
        {},
        {
          attrs: {
            'id': 'custom-tooltip-trigger',
            'data-custom': 'custom-value',
          },
        },
      )
    })

    BddTest().then('it should forward attributes to the wrapper', () => {
      const tooltipWrapper = wrapper.find('.av-tooltip-wrapper')

      expect(tooltipWrapper.attributes('id')).toBe('custom-tooltip-trigger')
      expect(tooltipWrapper.attributes('data-custom')).toBe('custom-value')
    })
  })

  BddTest().when('a trigger aria label is provided', () => {
    beforeEach(() => {
      wrapper.unmount()
      wrapper = mountTooltip({
        triggerAriaLabel: 'Informations',
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
      wrapper = mountTooltip({ disabled: true })
    })

    BddTest().then('it should not render the tooltip wrapper', () => {
      expect(wrapper.find('.av-tooltip-wrapper').exists()).toBe(false)
    })

    BddTest().and('the trigger is hovered', () => {
      beforeEach(async () => {
        await wrapper.find('button').trigger('mouseenter')
      })

      BddTest().then('it should not display tooltip content', () => {
        expect(getTooltip()).toBeNull()
      })
    })
  })

  BddTest().when('the tooltip becomes visible', () => {
    let requestAnimationFrameSpy: ReturnType<typeof vi.spyOn>

    beforeEach(async () => {
      requestAnimationFrameSpy = vi.spyOn(window, 'requestAnimationFrame')
        .mockReturnValue(42)

      await wrapper.find('.av-tooltip-wrapper').trigger('mouseenter')
      await wrapper.vm.$nextTick()
      await wrapper.vm.$nextTick()
    })

    BddTest().then('it should start tracking the tooltip position', () => {
      expect(requestAnimationFrameSpy).toHaveBeenCalledOnce()
    })

    BddTest().and('the tooltip becomes hidden', () => {
      let cancelAnimationFrameSpy: ReturnType<typeof vi.spyOn>

      beforeEach(async () => {
        cancelAnimationFrameSpy = vi.spyOn(window, 'cancelAnimationFrame')
          .mockImplementation(() => {})

        await wrapper.find('.av-tooltip-wrapper').trigger('mouseleave')
        await wrapper.vm.$nextTick()
      })

      BddTest().then('it should stop tracking and cancel the pending animation frame', () => {
        expect(cancelAnimationFrameSpy).toHaveBeenCalledWith(42)
      })

      BddTest().and('the tooltip is reset', () => {
        BddTest().then('it should restore the default placement and hidden style', () => {
          expect(getTooltip()).toBeNull()
        })
      })
    })
  })

  BddTest().when('the tooltip uses a custom padding', () => {
    BddTest().then('it should start tracking with the provided padding', () => {
      // Vérification détaillée de la transmission dans une suite dédiée
      // avec un mock de useTooltipPosition.
      expect(wrapper.props('paddingRem')).toBe(0.75)
    })
  })

  BddTest().when('the component is unmounted', () => {
    let removeEventListenerSpy: ReturnType<typeof vi.spyOn>

    beforeEach(() => {
      removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')
      wrapper.unmount()
    })

    BddTest().then('it should remove the scroll event listener', () => {
      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'scroll',
        expect.any(Function),
        true,
      )
    })
  })

  BddTest().when('nested AvTooltip instances overlap', () => {
    let nestedWrapper: ReturnType<typeof mount>

    function getTooltipTexts (): (string | null)[] {
      return Array.from(document.body.querySelectorAll('[role="tooltip"]'))
        .map(node => node.textContent)
    }

    beforeEach(() => {
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
        `,
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
})

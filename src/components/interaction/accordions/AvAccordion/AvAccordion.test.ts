import type { VueWrapper } from '@vue/test-utils'
import type { Mock } from 'vitest'
import type { AvAccordionProps } from '@/components/interaction/accordions/AvAccordion/AvAccordion.vue'
import { mount } from '@vue/test-utils'
import { beforeEach, expect, vi } from 'vitest'
import { nextTick } from 'vue'
import AvAccordion from '@/components/interaction/accordions/AvAccordion/AvAccordion.vue'
import { AvIconTextStub, AvNumberIndicatorStub } from '@/tests'
import { BddTest } from '@/tests/utils'

vi.mock('vue', async (importOriginal) => {
  const actual = await importOriginal<typeof import('vue')>()
  return {
    ...actual,
    inject: vi.fn().mockReturnValue(undefined),
  }
})

const doExpandSpy = vi.fn()
const onTransitionEndSpy = vi.fn()
const onKeydownSpy = vi.fn()

vi.mock('@/composables/use-collapsable/use-collapsable', () => ({
  useCollapsable: () => ({
    collapse: ref(),
    collapsing: ref(false),
    cssExpanded: ref(false),
    doExpand: doExpandSpy,
    onTransitionEnd: onTransitionEndSpy,
  }),
}))

BddTest().given('an AvAccordion', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvAccordion>>

  const props: AvAccordionProps = { title: 'Accordion test' }
  const slots = {
    default: '<div class="slot-content">Slot Content</div>',
  }

  const stubs = { AvIconText: AvIconTextStub, AvNumberIndicator: AvNumberIndicatorStub }

  const mountAccordion = (newProps: AvAccordionProps = props) => {
    wrapper = mount(AvAccordion, {
      props: newProps,
      slots,
      global: { stubs },
    })
  }

  const getAvIconText = () => wrapper.findComponent(AvIconTextStub)
  const getAvNumberIndicator = () => wrapper.findComponent(AvNumberIndicatorStub)

  BddTest().when('the accordion is mounted with required props', () => {
    beforeEach(() => {
      vi.clearAllMocks()
      ;(inject as Mock).mockReturnValue(undefined)
      mountAccordion()
    })

    BddTest().then('it should render the title', () => {
      expect(wrapper.find('.n6').text()).toBe(props.title)
    })

    BddTest().then('it should render the slot content', () => {
      expect(wrapper.find('.av-accordion__panel').text()).toContain('Slot Content')
    })

    BddTest().then('it should render the default heading level', () => {
      expect(wrapper.find('h3.av-accordion__header').exists()).toBe(true)
    })

    BddTest().then('it should render the accordion trigger with the expected accessibility attributes', () => {
      const trigger = wrapper.find('[data-testid="av-accordion-trigger"]')

      expect(trigger.exists()).toBe(true)
      expect(trigger.attributes('type')).toBe('button')
      expect(trigger.attributes('aria-controls')).toBe(`${trigger.attributes('id')}-panel`)
    })

    BddTest().then('it should render the content panel as a region labelled by the trigger', () => {
      const trigger = wrapper.find('[data-testid="av-accordion-trigger"]')
      const panel = wrapper.find('.av-accordion__panel')

      expect(panel.attributes('role')).toBe('region')
      expect(panel.attributes('aria-labelledby')).toBe(trigger.attributes('id'))
      expect(panel.attributes('id')).toBe(trigger.attributes('aria-controls'))
    })
  })

  BddTest().when('the accordion is mounted with an explicit id', () => {
    const newProps: AvAccordionProps = {
      ...props,
      id: 'custom-accordion-id',
    }

    beforeEach(() => {
      vi.clearAllMocks()
      ;(inject as Mock).mockReturnValue(undefined)
      mountAccordion(newProps)
    })

    BddTest().then('it should use the provided id for the trigger', () => {
      expect(wrapper.find('[data-testid="av-accordion-trigger"]').attributes('id')).toBe(newProps.id)
    })

    BddTest().then('it should derive the panel id from the provided id', () => {
      expect(wrapper.find('.av-accordion__panel').attributes('id')).toBe(`${newProps.id}-panel`)
    })
  })

  BddTest().when('the accordion is mounted with an optional icon prop', () => {
    const newProps: AvAccordionProps = {
      ...props,
      icon: 'test-icon',
    }

    beforeEach(() => {
      vi.clearAllMocks()
      ;(inject as Mock).mockReturnValue(undefined)
      mountAccordion(newProps)
    })

    BddTest().then('it should display the icon and title through AvIconText', () => {
      const iconText = getAvIconText()

      expect(iconText.exists()).toBe(true)
      expect(iconText.props('icon')).toBe(newProps.icon)
      expect(iconText.props('text')).toBe(newProps.title)
    })

    BddTest().then('it should not render the standalone title', () => {
      expect(wrapper.find('span.n6').exists()).toBe(false)
    })
  })

  BddTest().when('the accordion is mounted without an icon prop', () => {
    beforeEach(() => {
      vi.clearAllMocks()
      ;(inject as Mock).mockReturnValue(undefined)
      mountAccordion()
    })

    BddTest().then('it should render the title as a span', () => {
      expect(wrapper.find('span.n6').text()).toBe(props.title)
    })

    BddTest().then('it should not render AvIconText', () => {
      expect(getAvIconText().exists()).toBe(false)
    })
  })

  BddTest().when('the accordion is mounted with a numberIndicator', () => {
    const newProps: AvAccordionProps = {
      ...props,
      numberIndicator: 3,
    }

    beforeEach(() => {
      vi.clearAllMocks()
      ;(inject as Mock).mockReturnValue(undefined)
      mountAccordion(newProps)
    })

    BddTest().then('it should render the number indicator with the provided value', () => {
      const numberIndicator = getAvNumberIndicator()

      expect(numberIndicator.exists()).toBe(true)
      expect(numberIndicator.props('value')).toBe(newProps.numberIndicator)
    })

    BddTest().then('it should apply the expected typography class to the number indicator', () => {
      expect(getAvNumberIndicator().classes()).toContain('b2-bold')
    })
  })

  BddTest().when('the accordion is mounted without numberIndicator', () => {
    beforeEach(() => {
      vi.clearAllMocks()
      ;(inject as Mock).mockReturnValue(undefined)
      mountAccordion()
    })

    BddTest().then('it should not render the number indicator', () => {
      expect(getAvNumberIndicator().exists()).toBe(false)
    })
  })

  BddTest().when('the accordion is mounted with a custom heading level', () => {
    const newProps: AvAccordionProps = {
      ...props,
      headingLevel: 'h2',
    }

    beforeEach(() => {
      vi.clearAllMocks()
      ;(inject as Mock).mockReturnValue(undefined)
      mountAccordion(newProps)
    })

    BddTest().then('it should render the title with the provided heading level', () => {
      expect(wrapper.find('h2.av-accordion__header').exists()).toBe(true)
    })
  })

  BddTest().when('the accordion is mounted without accordion injection', () => {
    beforeEach(() => {
      vi.clearAllMocks()
      ;(inject as Mock).mockReturnValue(undefined)
      mountAccordion()
    })

    BddTest().then('it should use the standalone state', () => {
      const trigger = wrapper.find('[data-testid="av-accordion-trigger"]')

      expect(trigger.attributes('aria-expanded')).toBeUndefined()
    })
  })

  BddTest().when('the accordion is mounted in standalone mode', () => {
    beforeEach(() => {
      vi.clearAllMocks()
      ;(inject as Mock).mockReturnValue(undefined)
      mountAccordion()
    })

    BddTest().then('it should initialize the standalone state as undefined', () => {
      const vm = wrapper.vm as unknown as { isStandaloneActive: boolean | undefined }

      expect(vm.isStandaloneActive).toBeUndefined()
    })

    BddTest().and('the trigger is clicked', () => {
      BddTest().then('it should toggle the expanded state', async () => {
        const trigger = wrapper.find('[data-testid="av-accordion-trigger"]')

        await trigger.trigger('click')
        expect(trigger.attributes('aria-expanded')).toBe('true')

        await trigger.trigger('click')
        expect(trigger.attributes('aria-expanded')).toBe('false')
      })
    })
  })

  BddTest().when('the accordion is mounted with an active accordion injection', () => {
    beforeEach(() => {
      vi.clearAllMocks()
      ;(inject as Mock).mockReturnValue(() => ({
        isActive: ref(true),
        expand: vi.fn(),
        onKeydown: onKeydownSpy,
        setTriggerRef: vi.fn(),
      }))

      mountAccordion()
    })

    BddTest().then('it should call doExpand with true on mount', () => {
      expect(doExpandSpy).toHaveBeenCalledWith(true)
    })

    BddTest().and('the trigger receives focus', () => {
      beforeEach(async () => {
        await wrapper.find('button').trigger('focus')
      })

      BddTest().then('it should not call onKeydown', () => {
        expect(onKeydownSpy).not.toHaveBeenCalled()
      })

      BddTest().and('a keydown event is triggered', () => {
        beforeEach(async () => {
          await wrapper.find('button').trigger('keydown', { key: 'ArrowDown' })
        })

        BddTest().then('it should call onKeydown', () => {
          expect(onKeydownSpy).toHaveBeenCalled()
        })
      })
    })
  })

  BddTest().when('the injected isActive state changes', () => {
    const isActive = ref(false)

    beforeEach(async () => {
      vi.clearAllMocks()
      ;(inject as Mock).mockReturnValue(() => ({
        isActive,
        expand: vi.fn(),
        onKeydown: onKeydownSpy,
        setTriggerRef: vi.fn(),
      }))

      mountAccordion()

      isActive.value = true
      await nextTick()
    })

    BddTest().then('it should call doExpand with the new active state', () => {
      expect(doExpandSpy).toHaveBeenCalledWith(true)
    })
  })

  BddTest().when('the trigger is clicked with an accordion injection', () => {
    const expandSpy = vi.fn()

    beforeEach(() => {
      vi.clearAllMocks()
      ;(inject as Mock).mockReturnValue(() => ({
        isActive: ref(false),
        expand: expandSpy,
        onKeydown: onKeydownSpy,
        setTriggerRef: vi.fn(),
      }))
    })

    BddTest().then('it should call the injected expand function', async () => {
      mountAccordion()

      await wrapper.find('[data-testid="av-accordion-trigger"]').trigger('click')

      expect(expandSpy).toHaveBeenCalledOnce()
    })
  })

  BddTest().when('the accordion panel receives a transitionend event', () => {
    beforeEach(() => {
      vi.clearAllMocks()
      ;(inject as Mock).mockReturnValue(undefined)
      mountAccordion()
    })

    BddTest().then('it should call onTransitionEnd with the current active state and false', async () => {
      await wrapper.find('.av-accordion__panel').trigger('transitionend')

      expect(onTransitionEndSpy).toHaveBeenCalledWith(undefined, false)
    })
  })
})

import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect, type Mock } from 'vitest'
import { nextTick, type Ref } from 'vue'
import AvAccordion, { type AvAccordionProps } from '@/components/interaction/accordions/AvAccordion/AvAccordion.vue'
import { AvIconStub } from '@/tests'
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

  const stubs = { AvIcon: AvIconStub }

  BddTest().when('the accordion is mounted with required props', () => {
    beforeEach(() => {
      vi.clearAllMocks()
      wrapper = mount(AvAccordion, {
        props,
        slots,
      })
    })

    BddTest().then('it should render the title', () => {
      expect(wrapper.find('.n6').text()).toBe(props.title)
    })

    BddTest().then('it should render the slot content', () => {
      expect(wrapper.find('.av-accordion__panel').text()).toBe('Slot Content')
    })
  })

  BddTest().when('the accordion is mounted with optional icon prop', () => {
    const newProps: AvAccordionProps = { ...props, icon: 'test-icon' }

    beforeEach(() => {
      vi.clearAllMocks()
      wrapper = mount(AvAccordion, {
        props: newProps,
        slots,
        global: { stubs }
      })
    })

    BddTest().then('it should display the icon', () => {
      const icon = wrapper.findComponent({ name: 'AvIcon' })
      expect(icon.exists()).toBe(true)
      expect(icon.exists()).toBe(true)
    })
  })

  BddTest().when('the accordion is mounted without accordion injection', () => {
    beforeEach(() => {
      vi.clearAllMocks()
      wrapper = mount(AvAccordion, { props, slots })
    })

    BddTest().then('it should use the standalone state', () => {
      const vm = wrapper.vm as unknown as { isActive: Ref<boolean>, isStandaloneActive: Ref<boolean> }
      expect(vm.isActive).toBe(vm.isStandaloneActive)
    })
  })

  BddTest().when('the accordion is mounted in standalone mode', () => {
    beforeEach(() => {
      vi.clearAllMocks()
      wrapper = mount(AvAccordion, { props, slots })
    })

    BddTest().then('isStandaloneActive should be undefined initially', () => {
      const vm = wrapper.vm as unknown as { isStandaloneActive: boolean }
      expect(vm.isStandaloneActive).toBeUndefined()
    })

    BddTest().and('the button is clicked', () => {
      BddTest().then('it should toggle isStandaloneActive', async () => {
        const vm = wrapper.vm as unknown as { isStandaloneActive: boolean }

        await wrapper.find('button').trigger('click')
        expect(vm.isStandaloneActive).toBe(true)

        await wrapper.find('button').trigger('click')
        expect(vm.isStandaloneActive).toBe(false)
      })
    })
  })

  BddTest().when('isActive is true on mount', () => {
    beforeEach(() => {
      (inject as Mock).mockReturnValue(() => ({
        isActive: ref(true),
        expand: vi.fn(),
        onKeydown: onKeydownSpy,
        setTriggerRef: vi.fn(),
      }))

      wrapper = mount(AvAccordion, { props, slots })
    })

    BddTest().then('it should call doExpand(true)', () => {
      expect(doExpandSpy).toHaveBeenCalledWith(true)
    })

    BddTest().and('the header button is focused', () => {
      beforeEach(async () => {
        await wrapper.find('button').trigger('focus')
      })

      BddTest().then('it should not call onKeydown yet', () => {
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

  BddTest().and('when isActive changes', () => {
    const isActive = ref(false)

    beforeEach(async () => {
      (inject as Mock).mockReturnValue(() => ({
        isActive,
        expand: vi.fn(),
        onKeydown: onKeydownSpy,
        setTriggerRef: vi.fn(),
      }))
      wrapper = mount(AvAccordion, { props, slots })

      isActive.value = true
      await nextTick()
    })

    BddTest().then('it should call doExpand with newValue', () => {
      expect(doExpandSpy).toHaveBeenCalledWith(true)
    })
  })

  BddTest().when('the button is clicked', () => {
    const expandSpy = vi.fn()

    beforeEach(() => {
      (inject as Mock).mockReturnValue(() => ({
        isActive: ref(false),
        expand: expandSpy,
        onKeydown: onKeydownSpy,
        setTriggerRef: vi.fn(),
      }))
    })

    BddTest().then('it should call expand', async () => {
      wrapper = mount(AvAccordion, { props, slots })
      await wrapper.find('button').trigger('click')
      expect(expandSpy).toHaveBeenCalled()
    })
  })

  BddTest().when('transitionend is triggered', () => {
    beforeEach(() => {
      wrapper = mount(AvAccordion, { props, slots })
    })

    BddTest().then('it should call onTransitionEnd with current isActive and false', async () => {
      await wrapper.find('.av-collapse').trigger('transitionend')
      expect(onTransitionEndSpy).toHaveBeenCalledWith(expect.anything(), false)
    })
  })
})

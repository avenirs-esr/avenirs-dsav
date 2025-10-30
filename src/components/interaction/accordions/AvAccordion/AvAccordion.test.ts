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

  BddTest().and('with required props', () => {
    beforeEach(() => {
      vi.clearAllMocks()
      wrapper = mount(AvAccordion, {
        props,
        slots,
      })
    })

    BddTest().when('the accordion is mounted', () => {
      BddTest().then('it should render the title', () => {
        expect(wrapper.find('.n6').text()).toBe(props.title)
      })

      BddTest().then('it should render the slot content', () => {
        expect(wrapper.find('.accordion-content-container').text()).toBe('Slot Content')
      })
    })
  })

  BddTest().and('with optional icon prop', () => {
    const newProps: AvAccordionProps = { ...props, icon: 'test-icon' }

    beforeEach(() => {
      vi.clearAllMocks()
      wrapper = mount(AvAccordion, {
        props: newProps,
        slots,
        global: { stubs }
      })
    })

    BddTest().when('the accordion is mounted', () => {
      BddTest().then('it should display the icon', () => {
        const icon = wrapper.findComponent({ name: 'AvIcon' })
        expect(icon.exists()).toBe(true)
        expect(icon.exists()).toBe(true)
      })
    })
  })

  BddTest().and('when no accordion injection is provided', () => {
    beforeEach(() => {
      vi.clearAllMocks()
      wrapper = mount(AvAccordion, { props, slots })
    })

    BddTest().then('it should use the standalone state', () => {
      const vm = wrapper.vm as unknown as { isActive: Ref<boolean>, isStandaloneActive: Ref<boolean> }
      expect(vm.isActive).toBe(vm.isStandaloneActive)
    })
  })

  BddTest().and('in standalone mode', () => {
    beforeEach(() => {
      vi.clearAllMocks()
      wrapper = mount(AvAccordion, { props, slots })
    })

    BddTest().when('the button is clicked', () => {
      BddTest().then('it should toggle isStandaloneActive', async () => {
        const vm = wrapper.vm as unknown as { isStandaloneActive: boolean }
        expect(vm.isStandaloneActive).toBeUndefined()

        await wrapper.find('button').trigger('click')
        expect(vm.isStandaloneActive).toBe(true)

        await wrapper.find('button').trigger('click')
        expect(vm.isStandaloneActive).toBe(false)
      })
    })
  })

  BddTest().and('when isActive is true on mount', () => {
    beforeEach(() => {
      (inject as Mock).mockReturnValue(() => ({
        isActive: ref(true),
        expand: vi.fn(),
      }))

      wrapper = mount(AvAccordion, { props, slots })
    })

    BddTest().then('it should call doExpand(true)', () => {
      expect(doExpandSpy).toHaveBeenCalledWith(true)
    })
  })

  BddTest().and('when isActive changes', () => {
    const isActive = ref(false)

    beforeEach(async () => {
      (inject as Mock).mockReturnValue(() => ({
        isActive,
        expand: vi.fn(),
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

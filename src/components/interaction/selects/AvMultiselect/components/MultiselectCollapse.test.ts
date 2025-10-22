import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect, vi } from 'vitest'
import { AvFieldsetStub } from '@/components/base/AvFieldset/AvFieldset.stub'
import { AvCheckboxStub } from '@/components/interaction/checkboxes/AvCheckbox/AvCheckbox.stub'
import MultiselectCollapse, { type MultiselectCollapseProps } from '@/components/interaction/selects/AvMultiselect/components/MultiselectCollapse.vue'
import { AvButtonStub } from '@/tests'
import { BddTest } from '@/tests/utils'

const defaultOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' }
]

const defaultProps: MultiselectCollapseProps = {
  isVisible: true,
  selected: [],
  options: defaultOptions,
  id: 'test-collapse',
  useCollapsableReturn: {
    collapse: ref(undefined),
    collapsing: ref(false),
    cssExpanded: ref(false),
    doExpand: vi.fn(),
    onTransitionEnd: vi.fn()
  }
}

function mountWithProps (props: Partial<MultiselectCollapseProps> = {}):
VueWrapper<InstanceType<typeof MultiselectCollapse>> {
  return mount<typeof MultiselectCollapse>(MultiselectCollapse, {
    props: { modelValue: [], ...defaultProps, ...props },
    global: {
      stubs: {
        AvButton: AvButtonStub,
        AvCheckbox: AvCheckboxStub,
        AvFieldset: AvFieldsetStub,
        transition: false
      }
    },
    attachTo: document.body
  })
}

BddTest().given('a MultiselectCollapse component', () => {
  let wrapper: VueWrapper<InstanceType<typeof MultiselectCollapse>>
  const removeSpy = vi.spyOn(document, 'removeEventListener')

  BddTest().and('default props', () => {
    beforeEach(() => {
      vi.clearAllMocks()
      wrapper = mountWithProps()
    })

    BddTest().when('the collapse is visible', () => {
      BddTest().then('it should render all checkboxes', () => {
        const checkboxes = wrapper.findAllComponents({ name: 'AvCheckbox' })
        expect(checkboxes.length).toBe(defaultOptions.length)
      })

      BddTest().and('select all button is enabled', () => {
        beforeEach(async () => {
          await wrapper.setProps({ selectAll: true })
        })

        BddTest().then('it should show the select all button', () => {
          const btn = wrapper.findComponent({ name: 'AvButton' })
          expect(btn.exists()).toBe(true)
          expect(btn.text()).toContain('Tout sélectionner')
        })

        BddTest().then('clicking select all should select all options', async () => {
          const btn = wrapper.findComponent({ name: 'AvButton' })
          await btn.trigger('click')
          expect((wrapper.vm as unknown as { model: unknown }).model).toEqual(defaultOptions.map(o => o.value))
        })
      })

      BddTest().and('filtering options with search', () => {
        beforeEach(async () => {
          await wrapper.setProps({ search: true })
          const input = wrapper.find('input')
          await input.setValue('Option 2')
        })

        BddTest().then('it should only show filtered options', () => {
          const checkboxes = wrapper.findAllComponents({ name: 'AvCheckbox' })
          expect(checkboxes.length).toBe(1)
          expect(checkboxes[0].props('label')).toBe('Option 2')
        })
      })

      BddTest().and('keyboard escape pressed', () => {
        beforeEach(() => {
          const vm = wrapper.vm as unknown as { handleKeyDownEscape: (e: KeyboardEvent) => void }
          vm.handleKeyDownEscape({ key: 'Escape' } as KeyboardEvent)
        })

        BddTest().then('it should emit close', () => {
          expect(wrapper.emitted('close')).toBeTruthy()
        })
      })
    })

    BddTest().when('no results for search', () => {
      beforeEach(async () => {
        await wrapper.setProps({ search: true })
        const input = wrapper.find('input')
        await input.setValue('Nothing')
      })

      BddTest().then('it should display the no results slot', () => {
        expect(wrapper.text()).toContain('Pas de résultat')
      })
    })

    BddTest().when('the component is unmounted', () => {
      beforeEach(() => {
        wrapper.unmount()
      })

      BddTest().then('it should call clean', () => {
        expect(removeSpy).toHaveBeenCalledWith('click', expect.any(Function))
        expect(removeSpy).toHaveBeenCalledWith('keydown', expect.any(Function))
      })
    })

    BddTest().when('focusing the first checkbox', () => {
      beforeEach(() => {
        const event = new KeyboardEvent('keydown')
        const vm = wrapper.vm as unknown as { handleFocusFirstCheckbox: (e: KeyboardEvent) => void }
        vm.handleFocusFirstCheckbox(event)
      })

      BddTest().then('the first checkbox should be focused', () => {
        const checkboxes = wrapper.findAll('input[type="checkbox"]')
        expect(document.activeElement).toStrictEqual(checkboxes[0].element)
      })
    })

    BddTest().when('pressing arrow down to focus next checkbox', () => {
      beforeEach(() => {
        const checkboxes = wrapper.findAll('input[type="checkbox"]')
        const checkboxEl = checkboxes[0].element as HTMLElement
        checkboxEl.focus()
        const event = new KeyboardEvent('keydown')
        const vm = wrapper.vm as unknown as { handleFocusNextCheckbox: (e: KeyboardEvent) => void }
        vm.handleFocusNextCheckbox(event)
      })

      BddTest().then('the second checkbox should be focused', () => {
        const checkboxes = wrapper.findAll('input[type="checkbox"]')
        expect(document.activeElement).toBe(checkboxes[1].element)
      })
    })

    BddTest().when('pressing arrow up to focus previous checkbox', () => {
      beforeEach(() => {
        const checkboxes = wrapper.findAll('input[type="checkbox"]')
        const checkboxEl = checkboxes[0].element as HTMLElement
        checkboxEl.focus()
        const event = new KeyboardEvent('keydown')
        const vm = wrapper.vm as unknown as { handleFocusPreviousCheckbox: (e: KeyboardEvent) => void }
        vm.handleFocusPreviousCheckbox(event)
      })

      BddTest().then('the last checkbox should be focused (wrap around)', () => {
        const checkboxes = wrapper.findAll('input[type="checkbox"]')
        expect(document.activeElement).toStrictEqual(checkboxes[checkboxes.length - 1].element)
      })
    })

    BddTest().when('tab is pressed on the last checkbox', () => {
      beforeEach(() => {
        const vm = wrapper.vm as unknown as {
          handleFocusNextElementUsingTab: (e: KeyboardEvent) => void
          host: { value: unknown }
        }
        vm.host = { value: wrapper.element }

        const checkboxes = wrapper.findAll('input[type="checkbox"]')
        const checkboxEl = checkboxes[checkboxes.length - 1].element as HTMLElement
        checkboxEl.focus()
        const event = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: false })
        vm.handleFocusNextElementUsingTab(event)
      })

      BddTest().then('it should emit close', () => {
        expect(wrapper.emitted('close')).toBeTruthy()
      })
    })

    BddTest().when('all options are selected', () => {
      beforeEach(() => {
        wrapper.setProps({ selected: defaultOptions })
      })

      BddTest().then('isAllSelected should be true', () => {
        const vm = wrapper.vm as unknown as { isAllSelected: boolean }
        expect(vm.isAllSelected).toBe(true)
      })
    })
  })
})

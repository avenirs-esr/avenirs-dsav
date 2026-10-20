import type { VueWrapper } from '@vue/test-utils'
import type {
  AvSelectItem,
  AvSelectOption,
  AvSelectSelectedOption,
} from '@/components/interaction/selects/AvSelect/AvSelect.types'
import type { AvSelectProps } from '@/components/interaction/selects/AvSelect/AvSelect.vue'
import { mount } from '@vue/test-utils'
import { afterAll, beforeAll, beforeEach, expect, vi } from 'vitest'
import { nextTick } from 'vue'
import { AvCheckboxStub } from '@/components/interaction/checkboxes/AvCheckbox/AvCheckbox.stub'
import AvSelect from '@/components/interaction/selects/AvSelect/AvSelect.vue'
import { SelectCollapseStub } from '@/components/interaction/selects/AvSelect/components/SelectCollapse.stub'
import { AvButtonStub, AvMessageStub } from '@/tests'
import { BddTest } from '@/tests/utils'

const defaultOptions: AvSelectOption[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
]

const groupedOptions: AvSelectItem[] = [
  {
    id: 'group-1',
    label: 'Groupe 1',
    children: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
  },
  {
    id: 'group-2',
    label: 'Groupe 2',
    children: [
      { label: 'Option 3', value: '3' },
    ],
  },
  { label: 'Option indépendante', value: '4' },
]

const defaultProps: AvSelectProps & {
  modelValue: AvSelectSelectedOption[] | AvSelectSelectedOption | null
} = {
  modelValue: null,
  id: 'test-select',
  label: 'Choisissez une option',
  placeholder: 'Sélectionnez une option',
  options: defaultOptions,
  multiple: false,
  selectAll: false,
}

class ResizeObserverStub implements ResizeObserver {
  constructor (_callback: ResizeObserverCallback) {}

  disconnect () {}

  observe (_target: Element, _options?: ResizeObserverOptions) {}

  unobserve (_target: Element) {}
}

beforeAll(() => {
  vi.stubGlobal('ResizeObserver', ResizeObserverStub)
})

afterAll(() => {
  vi.unstubAllGlobals()
})

function mountWithProps (
  props: Partial<AvSelectProps & {
    modelValue: AvSelectSelectedOption[] | AvSelectSelectedOption | null
  }> = {},
  attrs: Record<string, unknown> = {},
): VueWrapper<InstanceType<typeof AvSelect>> {
  return mount(AvSelect, {
    props: { ...defaultProps, ...props },
    attrs,
    global: {
      stubs: {
        AvButton: AvButtonStub,
        AvCheckbox: AvCheckboxStub,
        AvMessage: AvMessageStub,
        SelectCollapse: SelectCollapseStub,
        transition: false,
      },
    },
  })
}

BddTest().given('an AvSelect component', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvSelect>>
  let updateModelValue = vi.fn()

  const removeSpy = vi.spyOn(document, 'removeEventListener')
  const getButton = () => wrapper.find('button.av-select')
  const getCollapse = () => wrapper.find('[data-testid="av-select__collapse"]')
  const getCollapseComponent = () => wrapper.findComponent(SelectCollapseStub)

  const selectValues = async (values: (string | number)[]) => {
    getCollapseComponent().vm.$emit('update:modelValue', values)
    await nextTick()
  }

  BddTest().and('given default props', () => {
    beforeEach(() => {
      vi.clearAllMocks()
      updateModelValue = vi.fn()

      wrapper = mountWithProps({}, {
        'onUpdate:modelValue': updateModelValue,
      })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should display the placeholder and unselected state', () => {
        expect(getButton().exists()).toBe(true)
        expect(getButton().text()).toContain('Sélectionnez une option')
        expect(getButton().classes()).toContain('av-select--unselected')
      })

      BddTest().then('it should render the button in large size', () => {
        expect(wrapper.findComponent(AvButtonStub).props('size')).toBe('LG')
      })

      BddTest().and('the Escape key is pressed after opening the select', () => {
        beforeEach(async () => {
          await getButton().trigger('click')
          document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
          await nextTick()
        })

        BddTest().then('it should close the collapse', () => {
          expect(getCollapse().exists()).toBe(false)
        })
      })
    })

    BddTest().when('the user opens the select', () => {
      beforeEach(async () => {
        await getButton().trigger('click')
        await nextTick()
      })

      BddTest().then('the collapse should be visible', () => {
        expect(getCollapse().exists()).toBe(true)
        expect(getCollapse().isVisible()).toBe(true)
      })

      BddTest().and('the user selects an option', () => {
        beforeEach(async () => {
          await selectValues(['1'])
        })

        BddTest().then('it should emit the selected option object', async () => {
          await vi.waitFor(() => {
            expect(updateModelValue).toHaveBeenCalledWith({
              label: 'Option 1',
              value: '1',
            })
          })
        })

        BddTest().then('it should close the collapse in single-selection mode', async () => {
          await vi.waitFor(() => {
            expect(getCollapse().exists()).toBe(false)
          })
        })
      })
    })

    BddTest().when('the component is unmounted', () => {
      beforeEach(() => {
        wrapper.unmount()
      })

      BddTest().then('it should remove the keydown event listener', () => {
        expect(removeSpy).toHaveBeenCalledWith('keydown', expect.any(Function))
      })
    })
  })

  BddTest().and('given a preselected value', () => {
    beforeEach(() => {
      wrapper = mountWithProps({
        modelValue: { label: 'Option 2', value: '2' },
      })
    })

    BddTest().then('it should render the selected option label', () => {
      expect(getButton().classes()).toContain('av-select--selected')
      expect(getButton().text()).toContain('Option 2')
    })

    BddTest().then('it should pass the selected option to the collapse', () => {
      expect(getCollapseComponent().props('selected')).toEqual([
        { label: 'Option 2', value: '2' },
      ])
    })
  })

  BddTest().and('given no preselected value', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ modelValue: null })
    })

    BddTest().then('it should render the placeholder', () => {
      expect(getButton().text()).toContain(defaultProps.placeholder)
    })
  })

  BddTest().and('given a selected value that is deselected', () => {
    beforeEach(async () => {
      updateModelValue = vi.fn()

      wrapper = mountWithProps(
        { modelValue: { label: 'Option 1', value: '1' } },
        { 'onUpdate:modelValue': updateModelValue },
      )

      await selectValues([])
    })

    BddTest().then('it should emit null', async () => {
      await vi.waitFor(() => {
        expect(updateModelValue).toHaveBeenCalledWith(null)
      })
    })
  })

  BddTest().and('given grouped options', () => {
    BddTest().when('the user selects a child option', () => {
      beforeEach(async () => {
        updateModelValue = vi.fn()

        wrapper = mountWithProps(
          { options: groupedOptions },
          { 'onUpdate:modelValue': updateModelValue },
        )

        await selectValues(['1'])
      })

      BddTest().then('it should emit the selected child with its parentId', async () => {
        await vi.waitFor(() => {
          expect(updateModelValue).toHaveBeenCalledWith({
            label: 'Option 1',
            value: '1',
            parentId: 'group-1',
          })
        })
      })

      BddTest().then('it should close the collapse in single-selection mode', async () => {
        await vi.waitFor(() => {
          expect(getCollapse().exists()).toBe(false)
        })
      })
    })

    BddTest().when('a grouped child is already selected', () => {
      beforeEach(() => {
        wrapper = mountWithProps({
          options: groupedOptions,
          modelValue: {
            label: 'Option 2',
            value: '2',
            parentId: 'group-1',
          },
        })
      })

      BddTest().then('it should display the selected child label', () => {
        expect(getButton().classes()).toContain('av-select--selected')
        expect(getButton().text()).toContain('Option 2')
      })

      BddTest().then('it should pass the parentId to the collapse', () => {
        expect(getCollapseComponent().props('selected')).toEqual([
          {
            label: 'Option 2',
            value: '2',
            parentId: 'group-1',
          },
        ])
      })
    })

    BddTest().when('a preselected grouped child has no parentId', () => {
      beforeEach(() => {
        wrapper = mountWithProps({
          options: groupedOptions,
          modelValue: {
            label: 'Option 2',
            value: '2',
          },
        })
      })

      BddTest().then('it should resolve the parentId from the available options', () => {
        expect(getCollapseComponent().props('selected')).toEqual([
          {
            label: 'Option 2',
            value: '2',
            parentId: 'group-1',
          },
        ])
      })
    })

    BddTest().when('selectedText is defined and user selects multiple children from different groups', async () => {
      beforeEach(async () => {
        wrapper = mountWithProps({
          options: groupedOptions,
          multiple: true,
          selectedText: 'Options sélectionnées',
        })

        await selectValues(['1', '3'])
      })

      BddTest().then('it should display the labels from modelValue as selected text', () => {
        expect(getButton().text()).toContain('Options sélectionnées')
      })

      BddTest().then('it should emit the selected options with their parent IDs', () => {
        expect(wrapper.emitted('update:modelValue')?.at(-1)?.[0]).toEqual([
          { label: 'Option 1', value: '1', parentId: 'group-1' },
          { label: 'Option 3', value: '3', parentId: 'group-2' },
        ])
      })
    })

    BddTest().when('the user selects multiple children from different groups', async () => {
      beforeEach(async () => {
        wrapper = mountWithProps({
          options: groupedOptions,
          multiple: true,
        })

        await selectValues(['1', '3'])
      })

      BddTest().then('it should display the labels from modelValue as selected text', () => {
        expect(getButton().text()).toContain('Option 1, Option 3')
      })

      BddTest().then('it should emit the selected options with their parent IDs', () => {
        expect(wrapper.emitted('update:modelValue')?.at(-1)?.[0]).toEqual([
          { label: 'Option 1', value: '1', parentId: 'group-1' },
          { label: 'Option 3', value: '3', parentId: 'group-2' },
        ])
      })
    })

    BddTest().when('the user selects an ungrouped option', () => {
      beforeEach(async () => {
        updateModelValue = vi.fn()

        wrapper = mountWithProps(
          { options: groupedOptions },
          { 'onUpdate:modelValue': updateModelValue },
        )

        await selectValues(['4'])
      })

      BddTest().then('it should emit the option without a parentId', async () => {
        await vi.waitFor(() => {
          expect(updateModelValue).toHaveBeenCalledWith({
            label: 'Option indépendante',
            value: '4',
          })
        })
      })
    })

    BddTest().when('multiple grouped options are preselected', () => {
      beforeEach(() => {
        wrapper = mountWithProps({
          options: groupedOptions,
          multiple: true,
          modelValue: [
            { label: 'Option 1', value: '1', parentId: 'group-1' },
            { label: 'Option 3', value: '3', parentId: 'group-2' },
          ],
        })
      })

      BddTest().then('it should pass every parentId to the collapse', () => {
        expect(getCollapseComponent().props('selected')).toEqual([
          { label: 'Option 1', value: '1', parentId: 'group-1' },
          { label: 'Option 3', value: '3', parentId: 'group-2' },
        ])
      })
    })
  })

  BddTest().and('given multiple selected values', () => {
    beforeEach(() => {
      wrapper = mountWithProps({
        multiple: true,
        modelValue: [
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
        ],
      })
    })

    BddTest().then('it should display the labels from modelValue as selected text', () => {
      expect(getButton().text()).toContain('Option 1, Option 2')
    })

    BddTest().then('it should pass all selected options to the collapse', () => {
      expect(getCollapseComponent().props('selected')).toEqual([
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
      ])
    })
  })

  BddTest().and('given a disabled tooltip message', () => {
    beforeEach(() => {
      wrapper = mountWithProps({
        disabled: true,
        disabledTooltip: 'Select unavailable',
      })
    })

    BddTest().then('it should forward the message to the trigger button', () => {
      expect(
        wrapper.findComponent(AvButtonStub).props('disabledTooltip'),
      ).toBe('Select unavailable')
    })
  })

  BddTest().and('given the required prop', () => {
    beforeEach(() => {
      wrapper = mountWithProps({}, { required: true })
    })

    BddTest().then('it should render the required indicator', () => {
      expect(wrapper.find('.required').exists()).toBe(true)
    })
  })

  BddTest().and('given a hint', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ hint: 'This is the hint' })
    })

    BddTest().then('it should render the hint', () => {
      const hint = wrapper.find('.av-hint-text')

      expect(hint.exists()).toBe(true)
      expect(hint.text()).toContain('This is the hint')
    })
  })

  BddTest().and('given dense mode', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ dense: true })
    })

    BddTest().then('it should render the button in medium size', () => {
      expect(wrapper.findComponent(AvButtonStub).props('size')).toBe('MD')
    })
  })

  BddTest().and('given an error message', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ errorMessage: 'Erreur test' })
    })

    BddTest().then('it should display the error message and error class', () => {
      const errorText = wrapper.find('.av-message--error')

      expect(errorText.exists()).toBe(true)
      expect(errorText.text()).toBe('Erreur test')
      expect(wrapper.find('.av-select-group').classes()).toContain(
        'av-select-group--error',
      )
    })
  })

  BddTest().and('given a success message', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ successMessage: 'C’est bon !' })
    })

    BddTest().then('it should display the success message', () => {
      const successText = wrapper.find('.av-message--success')

      expect(successText.exists()).toBe(true)
      expect(successText.text()).toBe('C’est bon !')
    })
  })
})

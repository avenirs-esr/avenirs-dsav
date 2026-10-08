import type { AvMultiselectOption } from '@/components/interaction/selects/AvMultiselect/AvMultiselect.types'
import { mount, type VueWrapper } from '@vue/test-utils'
import { afterAll, beforeAll, beforeEach, expect, vi } from 'vitest'
import { nextTick } from 'vue'
import { AvCheckboxStub } from '@/components/interaction/checkboxes/AvCheckbox/AvCheckbox.stub'
import AvMultiselect, { type AvMultiselectProps } from '@/components/interaction/selects/AvMultiselect/AvMultiselect.vue'
import { AvButtonStub, AvMessageStub } from '@/tests'
import { BddTest } from '@/tests/utils'

const defaultOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' }
]

const defaultProps = {
  modelValue: [],
  id: 'test-multiselect',
  label: 'Choisissez des options',
  placeholder: 'Sélectionnez une option',
  options: defaultOptions,
  selectAll: false,
  selectedText: 'Options sélectionnées'
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

function mountWithProps (props: Partial<AvMultiselectProps & { modelValue: AvMultiselectOption[] }> = {}, attrs: Record<string, unknown> = {}) {
  return mount(AvMultiselect, {
    props: { ...defaultProps, ...props },
    attrs: { ...attrs },
    global: {
      stubs: {
        AvButton: AvButtonStub,
        AvCheckbox: AvCheckboxStub,
        AvMessage: AvMessageStub,
        transition: false
      }
    }
  })
}

BddTest().given('an AvMultiselect component', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvMultiselect>>
  let updateModelValue = vi.fn()
  const removeSpy = vi.spyOn(document, 'removeEventListener')

  BddTest().and('given default props', () => {
    beforeEach(() => {
      vi.clearAllMocks()
      updateModelValue = vi.fn()
      wrapper = mountWithProps({}, { 'onUpdate:modelValue': updateModelValue })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should display the unselected state and placeholder text', async () => {
        const button = wrapper.find('button.av-multiselect')
        expect(button.exists()).toBe(true)
        expect(button.text()).toContain('Sélectionnez une option')
        expect(button.classes()).toContain('av-multiselect--unselected')
      })

      BddTest().then('it should render the button in large size', () => {
        expect(wrapper.findComponent({ name: 'AvButton' }).props('size')).toBe('LG')
      })

      BddTest().and('Escape key is pressed', () => {
        beforeEach(async () => {
          await wrapper.find('button.av-multiselect').trigger('click')
          document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
          await nextTick()
        })

        BddTest().then('it should close the collapse', () => {
          expect(wrapper.find('[data-testid="av-multiselect__collapse"]').exists()).toBe(false)
        })
      })
    })

    BddTest().when('the component is unmounted', () => {
      beforeEach(() => {
        wrapper.unmount()
      })

      BddTest().then('it should remove the event listeners', () => {
        expect(removeSpy).toHaveBeenCalledWith('keydown', expect.any(Function))
      })
    })

    BddTest().when('the user opens the multiselect', () => {
      beforeEach(async () => {
        await wrapper.find('button.av-multiselect').trigger('click')
        await nextTick()
      })

      BddTest().then('the collapse should be visible', () => {
        const collapse = wrapper.find('[data-testid="av-multiselect__collapse"]')
        expect(collapse.exists()).toBe(true)
        expect(collapse.isVisible()).toBe(true)
      })

      BddTest().and('the user selects an option', () => {
        beforeEach(async () => {
          const checkbox = wrapper.find('[data-testid="input-checkbox-multiselect-collapse-options-list-1-checkbox"]')
          await checkbox.setValue(true)
        })

        BddTest().then('it should emit update:modelValue with the selected option', async () => {
          await vi.waitFor(() => {
            expect(updateModelValue).toHaveBeenCalledWith([{ label: 'Option 1', value: '1' }])
          })
        })
      })
    })
  })

  BddTest().and('given grouped options', () => {
    beforeEach(() => {
      updateModelValue = vi.fn()
      wrapper = mountWithProps({
        options: [
          {
            label: 'Group 1',
            children: [
              { label: 'Option 1', value: '1' },
              { label: 'Option 2', value: '2' },
            ],
          },
          { label: 'Option 3', value: '3' },
        ],
      }, { 'onUpdate:modelValue': updateModelValue })
    })

    BddTest().when('the user selects a group', () => {
      beforeEach(async () => {
        await wrapper.find('button.av-multiselect').trigger('click')
        await wrapper.find('[data-testid="input-checkbox-test-multiselect-group-0"]').setValue(true)
      })

      BddTest().then('it should emit all group options as selected values', async () => {
        await vi.waitFor(() => {
          expect(updateModelValue).toHaveBeenCalledWith([
            { label: 'Option 1', value: '1' },
            { label: 'Option 2', value: '2' },
          ])
        })
      })
    })
  })

  BddTest().and('given a disabled tooltip message', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ disabled: true, disabledTooltip: 'Select unavailable' })
    })

    BddTest().when('the multiselect is mounted', () => {
      BddTest().then('it should forward the message to the trigger button', () => {
        const button = wrapper.findComponent(AvButtonStub)
        expect(button.props('disabledTooltip')).toBe('Select unavailable')
      })
    })
  })

  BddTest().and('given a preselected value', () => {
    beforeEach(() => {
      wrapper = mountWithProps({
        modelValue: [{ label: 'Option 2', value: '2' }]
      })
    })

    BddTest().then('it should render in selected state with correct text', () => {
      const button = wrapper.find('button.av-multiselect')
      expect(button.text()).toBe(defaultProps.selectedText)
      expect(button.classes()).toContain('av-multiselect--selected')
    })
  })

  BddTest().and('given two preselected values', () => {
    beforeEach(() => {
      wrapper = mountWithProps({
        modelValue: [{ label: 'Option 2', value: '2' }, { label: 'Option 3', value: '3' }]
      })
    })

    BddTest().then('it should render in selected state with plural text', () => {
      const button = wrapper.find('button.av-multiselect')
      expect(button.text()).toBe(defaultProps.selectedText)
    })
  })

  BddTest().and('given a preselected value with selected text defined', () => {
    beforeEach(() => {
      wrapper = mountWithProps({
        modelValue: [{ label: 'Option 2', value: '2' }],
        selectedText: 'Vous avez fait un choix !',
      })
    })

    BddTest().then('it should render in selected state with correct text', () => {
      const button = wrapper.find('button.av-multiselect')
      expect(button.text()).toContain('Vous avez fait un choix !')
    })
  })

  BddTest().and('given required attr', () => {
    beforeEach(() => {
      wrapper = mountWithProps({}, { required: true })
    })

    BddTest().then('it should render the required class', () => {
      expect(wrapper.find('.required').exists()).toBe(true)
    })
  })

  BddTest().and('given hint', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ hint: 'This is the hint' })
    })

    BddTest().then('it should render the hint', () => {
      const hint = wrapper.find('.av-hint-text')
      expect(hint.exists()).toBe(true)
      expect(hint.text()).toContain('This is the hint')
    })
  })

  BddTest().and('given dense prop', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ dense: true })
    })

    BddTest().then('it should render the button in medium size', () => {
      expect(wrapper.findComponent({ name: 'AvButton' }).props('size')).toBe('MD')
    })
  })

  BddTest().and('given error message', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ errorMessage: 'Erreur test' })
    })

    BddTest().then('it should display the error message and error class', () => {
      const errorText = wrapper.find('.av-message--error')
      expect(errorText.exists()).toBe(true)
      expect(errorText.text()).toBe('Erreur test')

      const group = wrapper.find('.av-select-group')
      expect(group.classes()).toContain('av-select-group--error')
    })
  })

  BddTest().and('given success message', () => {
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

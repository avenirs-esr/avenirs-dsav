import { flushPromises, mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect } from 'vitest'
import { nextTick } from 'vue'
import { AvCheckboxStub } from '@/components/interaction/checkboxes/AvCheckbox/AvCheckbox.stub'
import AvMultiselect, { type AvMultiselectProps } from '@/components/interaction/selects/AvMultiselect/AvMultiselect.vue'
import { AvButtonStub } from '@/tests'
import { BddTest } from '@/tests/utils'

interface VmType {
  handleKeyDownEscape: (e: KeyboardEvent) => void
}

const defaultOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' }
]

const defaultProps = {
  id: 'test-multiselect',
  modelValue: [],
  label: 'Choisissez des options',
  defaultUnselectedText: 'Sélectionnez une option',
  options: defaultOptions,
  selectAll: false
}

function mountWithProps (props: Partial<AvMultiselectProps> = {}, attrs: Record<string, unknown> = {}) {
  return mount(AvMultiselect, {
    props: { ...defaultProps, ...props },
    attrs: { ...attrs },
    global: {
      stubs: {
        AvButton: AvButtonStub,
        AvCheckbox: AvCheckboxStub,
        transition: false
      }
    }
  })
}

BddTest().given('an AvMultiselect component', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvMultiselect>>
  const removeSpy = vi.spyOn(document, 'removeEventListener')

  BddTest().and('given default props', () => {
    beforeEach(() => {
      vi.clearAllMocks()
      wrapper = mountWithProps()
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should display the unselected state and placeholder text', async () => {
        const button = wrapper.find('button.fr-multiselect')
        expect(button.exists()).toBe(true)
        expect(button.text()).toContain('Sélectionnez une option')
        expect(wrapper.classes()).toContain('fr-multiselect--unselected')
      })

      BddTest().then('it should render the button in medium size', () => {
        expect(wrapper.findComponent({ name: 'AvButton' }).props('size')).toBe('md')
      })

      BddTest().and('Escape key is pressed', () => {
        beforeEach(() => {
          (wrapper.vm as unknown as VmType)
            .handleKeyDownEscape({ key: 'Escape' } as KeyboardEvent)
        })

        BddTest().then('it should call clean', () => {
          expect(removeSpy).toHaveBeenCalledWith('click', expect.any(Function))
          expect(removeSpy).toHaveBeenCalledWith('keydown', expect.any(Function))
        })
      })
    })

    BddTest().when('the component is unmounted', () => {
      beforeEach(() => {
        wrapper.unmount()
      })

      BddTest().then('it should remove the event listeners', () => {
        expect(removeSpy).toHaveBeenCalledWith('click', expect.any(Function))
        expect(removeSpy).toHaveBeenCalledWith('keydown', expect.any(Function))
      })
    })

    BddTest().when('the user opens the multiselect', () => {
      beforeEach(async () => {
        await wrapper.find('button.fr-multiselect').trigger('click')
        await nextTick()
      })

      BddTest().then('the collapse should be visible', () => {
        const collapse = wrapper.find('.fr-collapse')
        expect(collapse.exists()).toBe(true)
        expect(collapse.isVisible()).toBe(true)
      })

      BddTest().and('the user selects an option', () => {
        beforeEach(async () => {
          const checkbox = wrapper.findComponent({ name: 'AvCheckbox' })
          await checkbox.find('input').setValue(true)
          await flushPromises()
        })

        BddTest().then('it should emit update:modelValue with the selected option', () => {
          const emitted = wrapper.emitted('update:modelValue')
          expect(emitted).toBeTruthy()
          const last = emitted![emitted!.length - 1][0]
          expect(last).toEqual([{ label: 'Option 1', value: '1' }])
        })
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
      const button = wrapper.find('button.fr-multiselect')
      expect(button.text()).toContain('1 option sélectionnée')
      expect(wrapper.classes()).toContain('fr-multiselect--selected')
    })
  })

  BddTest().and('given two preselected values', () => {
    beforeEach(() => {
      wrapper = mountWithProps({
        modelValue: [{ label: 'Option 2', value: '2' }, { label: 'Option 3', value: '3' }]
      })
    })

    BddTest().then('it should render in selected state with plural text', () => {
      const button = wrapper.find('button.fr-multiselect')
      expect(button.text()).toContain('2 options sélectionnées')
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
      const button = wrapper.find('button.fr-multiselect')
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
      const hint = wrapper.find('.fr-hint-text')
      expect(hint.exists()).toBe(true)
      expect(hint.text()).toContain('This is the hint')
    })
  })

  BddTest().and('given dense prop', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ dense: true })
    })

    BddTest().then('it should render the button in small size', () => {
      expect(wrapper.findComponent({ name: 'AvButton' }).props('size')).toBe('sm')
    })
  })

  BddTest().and('given error message', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ errorMessage: 'Erreur test' })
    })

    BddTest().then('it should display the error message and error class', () => {
      const errorText = wrapper.find('.fr-error-text')
      expect(errorText.exists()).toBe(true)
      expect(errorText.text()).toBe('Erreur test')

      const group = wrapper.find('.fr-select-group')
      expect(group.classes()).toContain('fr-select-group--error')
    })
  })

  BddTest().and('given success message', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ successMessage: 'C’est bon !' })
    })

    BddTest().then('it should display the success message', () => {
      const successText = wrapper.find('.fr-valid-text')
      expect(successText.exists()).toBe(true)
      expect(successText.text()).toBe('C’est bon !')
    })
  })
})

import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect, type MockInstance } from 'vitest'
import AvInput from '@/components/interaction/inputs/AvInput/AvInput.vue'
import { isDateInputType, SUPPORTED_DATE_INPUT_TYPES } from '@/components/interaction/inputs/AvInput/utils'
import { BddTest } from '@/tests/utils'
import { MDI_ICONS } from '@/tokens'

BddTest().given('an AvInput', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvInput>>

  BddTest().when('the component is mountedwith default props', () => {
    beforeEach(() => {
      wrapper = mount<typeof AvInput>(AvInput)
    })

    BddTest().then('it should render an input element', () => {
      expect(wrapper.find('input').exists()).toBe(true)
    })

    BddTest().then('it should render with the base wrapper class', () => {
      expect(wrapper.find('.av-input').exists()).toBe(true)
    })

    BddTest().then('it should default to text type', () => {
      const input = wrapper.find('input')
      expect(input.attributes('type')).toBe('text')
    })

    BddTest().then('it should generate a unique id', () => {
      const input = wrapper.find('input')
      expect(input.attributes('id')).toBeDefined()
    })
  })

  BddTest().when('the component is mounted with a given label', () => {
    beforeEach(() => {
      wrapper = mount<typeof AvInput>(AvInput, {
        props: {
          label: 'Test Label'
        }
      })
    })

    BddTest().then('it should render the label', () => {
      const label = wrapper.find('label')
      expect(label.exists()).toBe(true)
      expect(label.text()).toBe('Test Label')
    })

    BddTest().then('it should link the label to the input', () => {
      const label = wrapper.find('label')
      const input = wrapper.find('input')
      expect(label.attributes('for')).toBe(input.attributes('id'))
    })
  })

  BddTest().when('the component is mounted with a custom id', () => {
    beforeEach(() => {
      wrapper = mount<typeof AvInput>(AvInput, {
        props: {
          id: 'custom-id',
          label: 'Test Label'
        }
      })
    })

    BddTest().then('it should use the provided id', () => {
      const input = wrapper.find('input')
      expect(input.attributes('id')).toBe('custom-id')
    })

    BddTest().then('it should link the label to the custom id', () => {
      const label = wrapper.find('label')
      expect(label.attributes('for')).toBe('custom-id')
    })
  })

  BddTest().when('the component is mounted with a hint', () => {
    beforeEach(() => {
      wrapper = mount<typeof AvInput>(AvInput, {
        props: {
          hint: 'Test hint'
        }
      })
    })

    BddTest().then('it should render the hint text', () => {
      const hint = wrapper.find('.av-hint-text')
      expect(hint.exists()).toBe(true)
      expect(hint.text()).toBe('Test hint')
    })
  })

  BddTest().when('the component is mounted with textarea mode', () => {
    beforeEach(() => {
      wrapper = mount<typeof AvInput>(AvInput, {
        props: {
          isTextarea: true
        }
      })
    })

    BddTest().then('it should render a textarea element', () => {
      expect(wrapper.find('textarea').exists()).toBe(true)
    })

    BddTest().then('it should not render an input element', () => {
      expect(wrapper.find('input').exists()).toBe(false)
    })
  })

  BddTest().when('the component is mounted with placeholder', () => {
    beforeEach(() => {
      wrapper = mount<typeof AvInput>(AvInput, {
        props: {
          placeholder: 'Test placeholder'
        }
      })
    })

    BddTest().then('it should set the placeholder attribute', () => {
      const input = wrapper.find('input')
      expect(input.attributes('placeholder')).toBe('Test placeholder')
    })
  })

  BddTest().when('the component is mounted with disabled state', () => {
    beforeEach(() => {
      wrapper = mount<typeof AvInput>(AvInput, {
        props: {
          disabled: true
        }
      })
    })

    BddTest().then('it should set the disabled attribute', () => {
      const input = wrapper.find('input')
      expect(input.attributes('disabled')).toBeDefined()
    })
  })

  BddTest().when('the component is mounted with required state', () => {
    beforeEach(() => {
      wrapper = mount<typeof AvInput>(AvInput, {
        props: {
          required: true
        }
      })
    })

    BddTest().then('it should set the required attribute', () => {
      const input = wrapper.find('input')
      expect(input.attributes('required')).toBeDefined()
    })
  })

  BddTest().when('the component is mounted with length constraints', () => {
    beforeEach(() => {
      wrapper = mount<typeof AvInput>(AvInput, {
        props: {
          maxlength: 50,
          minlength: 5
        }
      })
    })

    BddTest().then('it should set the maxlength attribute', () => {
      const input = wrapper.find('input')
      expect(input.attributes('maxlength')).toBe('50')
    })

    BddTest().then('it should set the minlength attribute', () => {
      const input = wrapper.find('input')
      expect(input.attributes('minlength')).toBe('5')
    })
  })

  const inputTypes = ['text', 'email', 'password', 'number', 'tel', 'url', 'search', ...SUPPORTED_DATE_INPUT_TYPES] as const

  inputTypes.forEach((type) => {
    BddTest().when(`the component is mounted with type "${type}"`, () => {
      beforeEach(() => {
        wrapper = mount<typeof AvInput>(AvInput, {
          props: {
            type
          }
        })
      })

      BddTest().then(`it should set the type attribute to "${type}"`, () => {
        const input = wrapper.find('input')
        expect(input.attributes('type')).toBe(type)
      })

      if (isDateInputType(type)) {
        BddTest().then('it should render two inputs', () => {
          const inputs = wrapper.findAll('input')
          expect(inputs).toHaveLength(2)
        })

        BddTest().then('the first input should be the true input', () => {
          const inputs = wrapper.findAll('input')
          const trueInput = inputs[0]
          expect(trueInput.attributes('type')).toBe(type)
        })

        BddTest().then('the true input should be visually hidden', () => {
          const inputs = wrapper.findAll('input')
          const trueInput = inputs[0]
          expect(trueInput.classes()).toContain('av-sr-only')
        })

        BddTest().then('the displayed input should be of type text', () => {
          const inputs = wrapper.findAll('input')
          const displayedInput = inputs[1]
          expect(displayedInput.attributes('type')).toBe('text')
        })

        BddTest().then('the second input should be the displayed input', () => {
          const inputs = wrapper.findAll('input')
          const displayedInput = inputs[1]
          expect(displayedInput.classes()).not.toContain('av-sr-only')
        })
      }
    })
  })

  BddTest().when('the component is mounted with error message', () => {
    beforeEach(() => {
      wrapper = mount<typeof AvInput>(AvInput, {
        props: {
          errorMessage: 'Test error message'
        }
      })
    })

    BddTest().then('it should render the error message', () => {
      const error = wrapper.find('.av-message--error')
      expect(error.exists()).toBe(true)
      expect(error.text()).toBe('Test error message')
    })

    BddTest().then('it should set role="alert" on error container', () => {
      const error = wrapper.find('.av-message')
      expect(error.attributes('role')).toBe('alert')
    })
  })

  BddTest().when('the component is mounted with multiple error messages', () => {
    const errorMessages = ['Error 1', 'Error 2', 'Error 3']

    beforeEach(() => {
      wrapper = mount<typeof AvInput>(AvInput, {
        props: {
          errorMessage: errorMessages
        }
      })
    })

    BddTest().then('it should render all error messages', () => {
      const errorElements = wrapper.findAll('.av-message--error')
      expect(errorElements).toHaveLength(3)
      expect(errorElements[0].text()).toBe('Error 1')
      expect(errorElements[1].text()).toBe('Error 2')
      expect(errorElements[2].text()).toBe('Error 3')
    })
  })

  BddTest().when('the component is mounted with valid message', () => {
    beforeEach(() => {
      wrapper = mount<typeof AvInput>(AvInput, {
        props: {
          validMessage: 'Test valid message'
        }
      })
    })

    BddTest().then('it should render the valid message', () => {
      const valid = wrapper.find('.av-message--success')
      expect(valid.exists()).toBe(true)
      expect(valid.text()).toBe('Test valid message')
    })
  })

  BddTest().when('the component is mounted with multiple valid messages', () => {
    const validMessages = ['Valid 1', 'Valid 2']

    beforeEach(() => {
      wrapper = mount<typeof AvInput>(AvInput, {
        props: {
          validMessage: validMessages
        }
      })
    })

    BddTest().then('it should render all valid messages', () => {
      const validElements = wrapper.findAll('.av-message--success')
      expect(validElements).toHaveLength(2)
      expect(validElements[0].text()).toBe('Valid 1')
      expect(validElements[1].text()).toBe('Valid 2')
    })
  })

  BddTest().when('the component is mounted with prefix icon', () => {
    beforeEach(() => {
      wrapper = mount<typeof AvInput>(AvInput, {
        props: {
          prefixIcon: 'mdi:magnify'
        }
      })
    })

    BddTest().then('it should render the prefix icon container', () => {
      const prefixIcon = wrapper.find('.av-input__prefix')
      expect(prefixIcon.exists()).toBe(true)
    })

    BddTest().then('it should render the AvIcon component with correct props', () => {
      const iconComponent = wrapper.findComponent({ name: 'AvIcon' })
      expect(iconComponent.exists()).toBe(true)
      expect(iconComponent.props('name')).toBe('mdi:magnify')
      expect(iconComponent.props('size')).toBe(1.2)
    })
  })

  BddTest().when('the component is mounted without prefix icon', () => {
    beforeEach(() => {
      wrapper = mount<typeof AvInput>(AvInput)
    })

    BddTest().then('it should not render the prefix icon container', () => {
      const prefixIcon = wrapper.find('.av-input__prefix')
      expect(prefixIcon.exists()).toBe(false)
    })
  })

  BddTest().when('the component is mounted with prefix icon and validation', () => {
    beforeEach(() => {
      wrapper = mount<typeof AvInput>(AvInput, {
        props: {
          prefixIcon: 'mdi:email-outline',
          errorMessage: 'Invalid email'
        }
      })
    })

    BddTest().then('it should render both prefix icon and error message', () => {
      const prefixIcon = wrapper.find('.av-input__prefix')
      const errorMessage = wrapper.find('.av-message--error')

      expect(prefixIcon.exists()).toBe(true)
      expect(errorMessage.exists()).toBe(true)
      expect(errorMessage.text()).toBe('Invalid email')
    })
  })

  BddTest().when('the component is mounted with custom label class', () => {
    beforeEach(() => {
      wrapper = mount<typeof AvInput>(AvInput, {
        props: {
          label: 'Test Label',
          labelClass: 'custom-label'
        }
      })
    })

    BddTest().then('it should apply the custom label class', () => {
      const label = wrapper.find('label')
      expect(label.find('span').classes()).toContain('custom-label')
    })
  })

  BddTest().when('the component is mounted with v-model', () => {
    beforeEach(() => {
      wrapper = mount<typeof AvInput>(AvInput, {
        props: {
          modelValue: 'initial value'
        }
      })
    })

    BddTest().and('the user types in the input', () => {
      beforeEach(async () => {
        const input = wrapper.find('input')
        await input.setValue('new value')
      })

      BddTest().then('it should emit update:modelValue event', async () => {
        expect(wrapper.emitted('update:modelValue')).toBeTruthy()
        expect(wrapper.emitted('update:modelValue')![0]).toEqual(['new value'])
      })
    })
  })

  BddTest().when('the component is mounted with prefix icon and textarea', () => {
    beforeEach(() => {
      wrapper = mount<typeof AvInput>(AvInput, {
        props: {
          prefixIcon: MDI_ICONS.CHAT_BUBBLE_OUTLINE,
          isTextarea: true
        }
      })
    })

    BddTest().then('it should render both prefix icon and textarea', () => {
      const prefixIcon = wrapper.find('.av-input__prefix')
      const textarea = wrapper.find('textarea')

      expect(prefixIcon.exists()).toBe(true)
      expect(textarea.exists()).toBe(true)
    })
  })

  BddTest().when('the component is mounted with prefix icon and disabled state', () => {
    beforeEach(() => {
      wrapper = mount<typeof AvInput>(AvInput, {
        props: {
          prefixIcon: MDI_ICONS.MAGNIFY,
          disabled: true
        }
      })
    })

    BddTest().then('it should render prefix icon with disabled input', () => {
      const prefixIcon = wrapper.find('.av-input__prefix')
      const input = wrapper.find('input')

      expect(prefixIcon.exists()).toBe(true)
      expect(input.attributes('disabled')).toBeDefined()
    })
  })

  BddTest().when('the component is mounted with a date type, a defined minDate and an undefined maxDate', () => {
    beforeEach(() => {
      wrapper = mount(AvInput, { props: {
        type: 'date',
        minDate: new Date(),
        maxDate: undefined
      } })
    })

    BddTest().then('it should pass min to input', () => {
      const input = wrapper.find('input')
      expect(input.attributes('min')).toBeDefined()
    })

    BddTest().then('it should not pass max to input', () => {
      const input = wrapper.find('input')
      expect(input.attributes('max')).toBeUndefined()
    })
  })

  BddTest().when('exposed focus is called', () => {
    let focusSpy: MockInstance

    beforeEach(() => {
      wrapper = mount(AvInput)
      const inputEl = wrapper.find('input').element
      focusSpy = vi.spyOn(inputEl, 'focus')
      wrapper.vm.focus()
    })

    BddTest().then('it should call focus on input', () => {
      expect(focusSpy).toHaveBeenCalledTimes(1)
    })
  })
})

BddTest().given('multiple AvInput components', () => {
  let wrapper1: ReturnType<typeof mount<typeof AvInput>>
  let wrapper2: ReturnType<typeof mount<typeof AvInput>>

  BddTest().when('both components are mounted', () => {
    beforeEach(() => {
      wrapper1 = mount<typeof AvInput>(AvInput)
      wrapper2 = mount<typeof AvInput>(AvInput)
    })

    BddTest().then('they should have unique ids', () => {
      const input1 = wrapper1.find('input')
      const input2 = wrapper2.find('input')

      expect(input1.attributes('id')).toBeDefined()
      expect(input2.attributes('id')).toBeDefined()
      expect(input1.attributes('id')).not.toBe(input2.attributes('id'))
    })
  })
})

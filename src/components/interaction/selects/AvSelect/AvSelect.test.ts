import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect } from 'vitest'
import AvSelect from '@/components/interaction/selects/AvSelect/AvSelect.vue'
import { AvIconStub, BddTest } from '@/tests'
import { MDI_ICONS } from '@/tokens/icons'

const options = [
  { value: '1', text: 'Option 1' },
  { value: '2', text: 'Option 2' },
  { value: '3', text: 'Option 3', disabled: true }
]

const defaultProps = {
  modelValue: undefined,
  placeholder: 'Select an option',
  options
}

function mountWithProps (props = {}) {
  return mount(AvSelect, {
    props: { ...defaultProps, ...props },
  })
}

BddTest().given('a select component', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvSelect>>

  BddTest().and('with default props', () => {
    beforeEach(() => {
      wrapper = mountWithProps()
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should render the default title', () => {
        expect(wrapper.find('select').attributes('title')).toBe('Select an option')
      })

      BddTest().then('it should display all available options', () => {
        expect(wrapper.text()).toContain('Option 1')
        expect(wrapper.text()).toContain('Option 2')
        expect(wrapper.text()).toContain('Option 3')
      })
    })

    BddTest().when('the user selects a new value (changes via select)', () => {
      BddTest().then('it should emit update:modelValue with new value', async () => {
        await wrapper.find('select').setValue('1')
        expect(wrapper.emitted('update:modelValue')).toBeTruthy()
        expect(wrapper.emitted('update:modelValue')![0]).toEqual(['1'])
      })
    })
  })

  BddTest().and('with a valid modelValue', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ modelValue: '2' })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should use the matching option as title', () => {
        expect(wrapper.find('select').attributes('title')).toBe('Option 2')
      })
    })
  })

  BddTest().and('with an unknown modelValue', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ modelValue: '999' })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should fallback to placeholder', () => {
        expect(wrapper.find('select').attributes('title')).toBe('Select an option')
      })
    })
  })

  BddTest().and('with a disabled option selected', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ modelValue: '3' })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should use the matching option as title', () => {
        expect(wrapper.find('select').attributes('title')).toBe('Option 3')
      })
    })
  })

  BddTest().and('with dense prop set to true', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ dense: true })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should have the dense class', () => {
        expect(wrapper.find('.av-select--dense').exists()).toBe(true)
      })
    })
  })

  BddTest().and('with dense prop set to false', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ dense: false })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should not have the dense class', () => {
        expect(wrapper.find('.av-select--dense').exists()).toBe(false)
      })
    })
  })

  BddTest().and('with a custom placeholder', () => {
    const customText = 'Please choose'
    beforeEach(() => {
      wrapper = mountWithProps({ placeholder: customText })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should use the custom text in title', () => {
        expect(wrapper.find('select').attributes('title')).toBe(customText)
      })
    })
  })

  BddTest().and('with required prop set to true', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ required: true })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should have the required attribute', () => {
        expect(wrapper.find('select').attributes('required')).toBeDefined()
      })

      BddTest().then('it should have the aria-required attribute', () => {
        expect(wrapper.find('select').attributes('aria-required')).toBe('true')
      })

      BddTest().then('it should display the asterisk in the label', () => {
        expect(wrapper.find('label').text()).toContain('*')
        expect(wrapper.find('label').find('.required').exists()).toBe(true)
      })
    })
  })

  BddTest().and('with required prop set to false', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ required: false })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should not have the required attribute', () => {
        expect(wrapper.find('select').attributes('required')).toBeUndefined()
      })

      BddTest().then('it should not have the aria-required attribute', () => {
        expect(wrapper.find('select').attributes('aria-required')).toBe(false.toString())
      })

      BddTest().then('it should not display the asterisk in the label', () => {
        expect(wrapper.find('label').text()).not.toContain('*')
        expect(wrapper.find('label').find('.required').exists()).toBe(false)
      })
    })
  })

  BddTest().and('with disabled prop set to true', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ disabled: true })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should have the disabled attribute', () => {
        expect(wrapper.find('select').attributes('disabled')).toBeDefined()
      })

      BddTest().then('it should have the aria-disabled attribute', () => {
        expect(wrapper.find('select').attributes('aria-disabled')).toBe('true')
      })
    })
  })

  BddTest().and('with disabled prop set to false', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ disabled: false })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should not have the disabled attribute', () => {
        expect(wrapper.find('select').attributes('disabled')).toBeUndefined()
      })

      BddTest().then('it should not have the aria-disabled attribute', () => {
        expect(wrapper.find('select').attributes('aria-disabled')).toBe(false.toString())
      })
    })
  })

  BddTest().and('with a numeric modelValue', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ modelValue: 2 })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should use the matching option as title', () => {
        expect(wrapper.find('select').attributes('title')).toBe('Option 2')
      })
    })
  })

  BddTest().and('with a hint prop', () => {
    const hintText = 'This is a hint'
    beforeEach(() => {
      wrapper = mountWithProps({ hint: hintText })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should display the hint text', () => {
        expect(wrapper.find('.av-hint-text').exists()).toBe(true)
        expect(wrapper.find('.av-hint-text').text()).toBe(hintText)
      })
    })
  })

  BddTest().and('with only successMessage prop', () => {
    const successMessage = 'This is a success'
    beforeEach(() => {
      wrapper = mountWithProps({ successMessage })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should display the success message', () => {
        expect(wrapper.find('.av-message--success').exists()).toBe(true)
        expect(wrapper.find('.av-message--success').text()).toBe(successMessage)
      })
    })
  })

  BddTest().and('with only errorMessage prop', () => {
    const errorMessage = 'This is an error'
    beforeEach(() => {
      wrapper = mountWithProps({ errorMessage })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should display the error message', () => {
        expect(wrapper.find('.av-message--error').exists()).toBe(true)
        expect(wrapper.find('.av-message--error').text()).toBe(errorMessage)
      })
    })
  })

  BddTest().and('with errorMessage and successMessage props', () => {
    const errorMessage = 'This is an error'
    const successMessage = 'This is a success'
    beforeEach(() => {
      wrapper = mountWithProps({ errorMessage, successMessage })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should display the error message', () => {
        expect(wrapper.find('.av-message--error').exists()).toBe(true)
        expect(wrapper.find('.av-message--error').text()).toBe(errorMessage)
      })

      BddTest().then('it not should display the success message', () => {
        expect(wrapper.find('.av-message--success').exists()).toBe(false)
      })
    })
  })

  BddTest().and('with empty options array', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ options: [] })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should only render the placeholder option', () => {
        expect(wrapper.findAll('option').length).toBe(1)
        expect(wrapper.find('option').text()).toBe('Select an option')
      })
    })
  })

  BddTest().and('with options set to undefined', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ options: undefined })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should only render the placeholder option', () => {
        expect(wrapper.findAll('option').length).toBe(1)
        expect(wrapper.find('option').text()).toBe('Select an option')
      })
    })
  })

  BddTest().and('with a name prop', () => {
    const name = 'my-select'
    beforeEach(() => {
      wrapper = mountWithProps({ name })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should set the name attribute on the select element', () => {
        expect(wrapper.find('select').attributes('name')).toBe(name)
      })
    })
  })

  BddTest().and('with a prefixIcon prop', () => {
    beforeEach(() => {
      wrapper = mount(AvSelect, {
        props: { ...defaultProps, prefixIcon: MDI_ICONS.ACCOUNT_CIRCLE_OUTLINE },
        global: {
          stubs: {
            AvIcon: AvIconStub,
          },
        },
      })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should render the prefix icon container', () => {
        expect(wrapper.find('.av-select-prefix').exists()).toBe(true)
      })

      BddTest().then('it should render the AvIcon component', () => {
        expect(wrapper.findComponent(AvIconStub).exists()).toBe(true)
      })

      BddTest().then('it should add the with-prefix class to the select', () => {
        expect(wrapper.find('select').classes()).toContain('av-select--with-prefix')
      })
    })
  })

  BddTest().and('without a prefixIcon prop', () => {
    beforeEach(() => {
      wrapper = mountWithProps()
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should not render the prefix icon container', () => {
        expect(wrapper.find('.av-select-prefix').exists()).toBe(false)
      })

      BddTest().then('it should not add the with-prefix class to the select', () => {
        expect(wrapper.find('select').classes()).not.toContain('av-select--with-prefix')
      })
    })
  })
})

import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect } from 'vitest'
import AvSelect, { type AvSelectProps, type AvSelectSelectedOption } from '@/components/interaction/selects/AvSelect/AvSelect.vue'
import { AvIconStub, BddTest } from '@/tests'
import { MDI_ICONS } from '@/tokens/icons'

const options = [
  { id: '1', label: 'Option 1' },
  { id: '2', label: 'Option 2' },
  { id: '3', label: 'Option 3', disabled: true }
]

const defaultProps: AvSelectProps = {
  placeholder: 'Select an option',
  options
}

function mountWithProps (props: Partial<AvSelectProps> = {}) {
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

      BddTest().then('it should fallback to placeholder when selectedItem.itemId is undefined', () => {
        const wrapperWithUndefinedItemId = mount(AvSelect, {
          props: {
            ...defaultProps,
            selectedItem: {} as AvSelectSelectedOption
          },
        })

        expect(wrapperWithUndefinedItemId.find('select').attributes('title')).toBe('Select an option')
      })

      BddTest().then('it should fallback to placeholder when selectedItem.itemId does not match any option', () => {
        const wrapperWithUnknownItemId = mount(AvSelect, {
          props: {
            ...defaultProps,
            selectedItem: { itemId: 'unknown-id' }
          },
        })

        expect(wrapperWithUnknownItemId.find('select').attributes('title')).toBe('Select an option')
      })
    })

    BddTest().when('the user selects a new value (changes via select)', () => {
      BddTest().then('it should emit update:selectedItem with new value', async () => {
        await wrapper.find('select').setValue('1')
        expect(wrapper.emitted('update:selectedItem')).toBeTruthy()
        expect(wrapper.emitted('update:selectedItem')![0]).toEqual([{ itemId: '1' }])
      })

      BddTest().then('it should fallback to itemId only when selected value is empty', async () => {
        await wrapper.find('select').setValue('')

        expect(wrapper.emitted('update:selectedItem')).toBeTruthy()
        expect(wrapper.emitted('update:selectedItem')![0]).toEqual([{ itemId: '' }])
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

  BddTest().and('labelVisible is set to false', () => {
    beforeEach(() => {
      wrapper = mountWithProps({ label: 'Visible label', labelVisible: false })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should hide the label visually', () => {
        expect(wrapper.find('label').classes()).toContain('av-sr-only')
      })

      BddTest().then('it should still keep the label text in the DOM', () => {
        expect(wrapper.find('label').text()).toContain('Visible label')
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

  BddTest().and('with optgroup options', () => {
    const optgroupOptions = [
      { id: '1', label: 'Option 1' },
      {
        id: 'group1',
        label: 'Group 1',
        children: [
          { id: '2', label: 'Option 2' },
          { id: '3', label: 'Option 3' }
        ]
      }
    ]

    beforeEach(() => {
      wrapper = mountWithProps({ options: optgroupOptions })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should render the optgroup element', () => {
        expect(wrapper.find('optgroup').exists()).toBe(true)
        expect(wrapper.find('optgroup').attributes('label')).toBe('Group 1')
      })

      BddTest().then('it should render the child options within the optgroup', () => {
        const options = wrapper.findAll('option')
        expect(options.length).toBe(4)
        expect(options[2].text()).toBe('Option 2')
        expect(options[3].text()).toBe('Option 3')
      })

      BddTest().then('it should use selected child label as title when selectedItem points to an optgroup child', () => {
        const wrapperWithSelectedChild = mount(AvSelect, {
          props: {
            ...defaultProps,
            options: optgroupOptions,
            selectedItem: { itemId: '2' }
          },
        })

        expect(wrapperWithSelectedChild.find('select').attributes('title')).toBe('Option 2')
      })
    })

    BddTest().when('the user selects a child option in an optgroup', () => {
      BddTest().then('it should emit update:selectedItem with itemId and parentId', async () => {
        await wrapper.find('select').setValue('2')

        expect(wrapper.emitted('update:selectedItem')).toBeTruthy()
        expect(wrapper.emitted('update:selectedItem')![0]).toEqual([{ itemId: '2', parentId: 'group1' }])
      })
    })
  })
})

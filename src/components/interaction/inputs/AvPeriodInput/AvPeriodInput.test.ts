import { mount, type VueWrapper } from '@vue/test-utils'
import { parseISO } from 'date-fns'
import { beforeEach } from 'vitest'
import AvPeriodInput, { type AvPeriodInputProps } from '@/components/interaction/inputs/AvPeriodInput/AvPeriodInput.vue'
import { AvRadioButtonStub } from '@/components/interaction/radios/AvRadioButton/AvRadioButton.stub'
import { AvRadioButtonSetStub } from '@/components/interaction/radios/AvRadioButtonSet/AvRadioButtonSet.stub'
import { AvInputStub, BddTest } from '@/tests'

BddTest().given('a period input', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvPeriodInput>>

  const stubs = {
    AvInput: AvInputStub,
    AvRadioButtonSet: AvRadioButtonSetStub,
    AvRadioButton: AvRadioButtonStub,
  }

  const requiredProps: AvPeriodInputProps = {
    label: 'Period'
  }

  function toLocalDateOnly (date?: Date) {
    if (!date) {
      return undefined
    }
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  function findStartInput () {
    const inputs = wrapper.findAllComponents({ name: 'AvInput' })
    return inputs.find(input => input.attributes('data-testid') === 'start-date-input') ?? inputs[0]
  }

  function findEndInput () {
    const inputs = wrapper.findAllComponents({ name: 'AvInput' })
    return inputs.find(input => input.attributes('data-testid') === 'end-date-input') ?? inputs[1]
  }

  function findCommonLabel () {
    return wrapper.find('[data-testid="common-label"]')
  }

  BddTest().and('given required props', () => {
    BddTest().when('the component is mounted', () => {
      beforeEach(() => {
        wrapper = mount(AvPeriodInput, { props: requiredProps, global: { stubs } })
      })

      BddTest().then('it should render with default props', () => {
        const label = findCommonLabel()
        expect(label.exists()).toBe(true)
        expect(label.text()).toBe('Period')
        expect(label.classes()).contain('b2-light')

        const inputs = wrapper.findAllComponents({ name: 'AvInput' })
        expect(inputs).toHaveLength(2)

        const startInput = inputs[0]
        const endInput = inputs[1]

        expect(startInput.props('type')).toBe('date')
        expect(endInput.props('type')).toBe('date')

        expect(startInput.props('modelValue')).toBe('')
        expect(endInput.props('modelValue')).toBe('')

        expect(startInput.props('disabled')).toBe(false)
        expect(endInput.props('disabled')).toBe(false)

        expect(startInput.props('labelVisible')).toBe(false)
        expect(endInput.props('labelVisible')).toBe(false)
      })

      BddTest().and('a start date is typed', () => {
        const newStartValue = '2026-01-10'

        beforeEach(async () => {
          await findStartInput().setValue(newStartValue)
        })

        BddTest().then('it should emit update:startModelValue', () => {
          expect(wrapper.emitted('update:startModelValue')).toBeTruthy()
          expect(wrapper.emitted('update:startModelValue')![0][0]).toEqual(newStartValue)
        })

        BddTest().then('it should emit change with start and current end', () => {
          expect(wrapper.emitted('change')).toBeTruthy()
          expect(wrapper.emitted('change')![0][0]).toEqual({ start: newStartValue, end: '' })
        })
      })

      BddTest().and('an end date is typed', () => {
        const newEndValue = '2026-02-01'

        beforeEach(async () => {
          await findEndInput().setValue(newEndValue)
        })

        BddTest().then('it should emit update:endModelValue', () => {
          expect(wrapper.emitted('update:endModelValue')).toBeTruthy()
          expect(wrapper.emitted('update:endModelValue')![0][0]).toEqual(newEndValue)
        })

        BddTest().then('it should emit change with current start and end', () => {
          expect(wrapper.emitted('change')).toBeTruthy()
          expect(wrapper.emitted('change')![0][0]).toEqual({ start: '', end: newEndValue })
        })
      })

      BddTest().and('a start date update is undefined', () => {
        const newStartValue = undefined

        beforeEach(async () => {
          await findStartInput().setValue(newStartValue)
        })

        BddTest().then('it should emit update:startModelValue with an empty string', () => {
          expect(wrapper.emitted('update:startModelValue')).toBeTruthy()
          expect(wrapper.emitted('update:startModelValue')![0][0]).toEqual('')
        })
      })

      BddTest().and('an end date update is undefined', () => {
        const newEndValue = undefined

        beforeEach(async () => {
          await findEndInput().setValue(newEndValue)
        })

        BddTest().then('it should emit update:endModelValue with an empty string', () => {
          expect(wrapper.emitted('update:endModelValue')).toBeTruthy()
          expect(wrapper.emitted('update:endModelValue')![0][0]).toEqual('')
        })
      })
    })
  })

  BddTest().and('given custom props', () => {
    const startMaxDate = parseISO('2026-01-20')
    const endMinDate = parseISO('2026-01-10')

    const props: AvPeriodInputProps = {
      id: 'my-period',
      label: 'Custom period',
      startModelValue: '2026-01-10',
      endModelValue: '2026-01-20',
      startDateDisabled: true,
      endDateDisabled: true,
      width: '14.875rem',
      startMaxDate,
      endMinDate,
      stacked: true,
      separatorSpacing: '1.5rem',
    }

    beforeEach(() => {
      wrapper = mount(AvPeriodInput, { props, global: { stubs } })
    })

    BddTest().then('it should render the label and bind props to both inputs', () => {
      const label = findCommonLabel()
      expect(label.exists()).toBe(true)
      expect(label.text()).toBe(props.label)

      const inputs = wrapper.findAllComponents({ name: 'AvInput' })
      expect(inputs).toHaveLength(2)

      const startInput = findStartInput()
      const endInput = findEndInput()

      expect(startInput.props('id')).toBe('my-period__start')
      expect(endInput.props('id')).toBe('my-period__end')

      expect(startInput.props('type')).toBe('date')
      expect(endInput.props('type')).toBe('date')

      expect(startInput.props('modelValue')).toBe(props.startModelValue)
      expect(endInput.props('modelValue')).toBe(props.endModelValue)

      expect(startInput.props('disabled')).toBe(true)
      expect(endInput.props('disabled')).toBe(true)

      expect(startInput.props('width')).toBe(props.width)

      expect(toLocalDateOnly(startInput.props('maxDate'))).toEqual('2026-01-20')
      expect(toLocalDateOnly(endInput.props('minDate'))).toEqual('2026-01-10')

      expect(startInput.props('label')).toBe(props.startLabel)
      expect(endInput.props('label')).toBe(props.endLabel)
      expect(startInput.props('labelVisible')).toBe(false)
      expect(endInput.props('labelVisible')).toBe(false)
    })

    BddTest().then('it should apply stacked layout and use vertical spacing', () => {
      const container = wrapper.find('.av-period-input')
      expect(container.classes()).toContain('av-period-input--stacked')

      const separator = wrapper.find('.av-period-input__row')
      expect(separator.exists()).toBe(true)
      expect(wrapper.props('separatorSpacing')).toBe('1.5rem')
    })
  })

  BddTest().and('given separatorSpacing and not stacked', () => {
    const props: AvPeriodInputProps = {
      id: 'my-period',
      label: 'Custom period',
      startLabel: 'Start',
      endLabel: 'End',
      separatorSpacing: '2rem',
      stacked: false,
    }

    beforeEach(() => {
      wrapper = mount(AvPeriodInput, { props, global: { stubs } })
    })

    BddTest().then('it should render the separator and apply the spacing width style', () => {
      const separator = wrapper.find('.av-period-input__row')
      expect(separator.exists()).toBe(true)
      expect(wrapper.props('separatorSpacing')).toBe('2rem')
    })
  })

  BddTest().and('given startDateDisabled is true', () => {
    const props: AvPeriodInputProps = {
      ...requiredProps,
      startDateDisabled: true,
    }

    beforeEach(() => {
      wrapper = mount(AvPeriodInput, { props, global: { stubs } })
    })

    BddTest().then('it should disable only the start date input', () => {
      const startInput = findStartInput()
      const endInput = findEndInput()

      expect(startInput.props('disabled')).toBe(true)
      expect(endInput.props('disabled')).toBe(false)
    })
  })

  BddTest().and('given endDateDisabled is true', () => {
    const props: AvPeriodInputProps = {
      ...requiredProps,
      endDateDisabled: true,
    }

    beforeEach(() => {
      wrapper = mount(AvPeriodInput, { props, global: { stubs } })
    })

    BddTest().then('it should disable only the end date input', () => {
      const startInput = findStartInput()
      const endInput = findEndInput()

      expect(startInput.props('disabled')).toBe(false)
      expect(endInput.props('disabled')).toBe(true)
    })
  })

  BddTest().and('given endDateDisabled is true and ongoingLabel is provided', () => {
    const props: AvPeriodInputProps = {
      ...requiredProps,
      endDateDisabled: true,
      ongoingLabel: 'Ongoing',
    }

    beforeEach(() => {
      wrapper = mount(AvPeriodInput, { props, global: { stubs } })
    })

    BddTest().then('it should render the radio button set instead of the end date input', () => {
      expect(wrapper.find('[data-testid="av-radio-button-set-stub"]').exists()).toBe(true)
      expect(wrapper.find('[data-testid="end-date-input"]').exists()).toBe(false)
      expect(wrapper.find('.b2-regular').text()).toBe('Ongoing')
    })
  })

  BddTest().and('given type is datetime-local', () => {
    const props: AvPeriodInputProps = {
      ...requiredProps,
      type: 'datetime-local',
    }

    beforeEach(() => {
      wrapper = mount(AvPeriodInput, { props, global: { stubs } })
    })

    BddTest().then('it should pass the type to both inputs', () => {
      const startInput = findStartInput()
      const endInput = findEndInput()

      expect(startInput.props('type')).toBe('datetime-local')
      expect(endInput.props('type')).toBe('datetime-local')
    })
  })

  BddTest().and('given type is month', () => {
    const props: AvPeriodInputProps = {
      ...requiredProps,
      type: 'month',
    }

    beforeEach(() => {
      wrapper = mount(AvPeriodInput, { props, global: { stubs } })
    })

    BddTest().then('it should pass the type to both inputs', () => {
      const startInput = findStartInput()
      const endInput = findEndInput()

      expect(startInput.props('type')).toBe('month')
      expect(endInput.props('type')).toBe('month')
    })
  })

  BddTest().and('given labelVisible is false', () => {
    const props: AvPeriodInputProps = {
      ...requiredProps,
      labelVisible: false,
    }

    beforeEach(() => {
      wrapper = mount(AvPeriodInput, { props, global: { stubs } })
    })

    BddTest().then('it should hide the common label', () => {
      const label = findCommonLabel()
      expect(label.exists()).toBe(true)
      expect(label.classes()).toContain('av-sr-only')
    })
  })

  BddTest().and('given labelVisible is true (default)', () => {
    beforeEach(() => {
      wrapper = mount(AvPeriodInput, { props: requiredProps, global: { stubs } })
    })

    BddTest().then('it should show the common label without av-hidden class', () => {
      const label = findCommonLabel()
      expect(label.exists()).toBe(true)
      expect(label.classes()).not.toContain('av-hidden')
    })
  })

  BddTest().and('given showEachInputLabel is true', () => {
    const props: AvPeriodInputProps = {
      ...requiredProps,
      showEachInputLabel: true,
      startLabel: 'Start',
      endLabel: 'End',
    }

    beforeEach(() => {
      wrapper = mount(AvPeriodInput, { props, global: { stubs } })
    })

    BddTest().then('it should not render the common label and show individual input labels', () => {
      const label = findCommonLabel()
      expect(label.exists()).toBe(false)

      const startInput = findStartInput()
      const endInput = findEndInput()

      expect(startInput.props('labelVisible')).toBe(true)
      expect(endInput.props('labelVisible')).toBe(true)
    })
  })

  BddTest().and('given startErrorMessage and endErrorMessage', () => {
    const props: AvPeriodInputProps = {
      ...requiredProps,
      startErrorMessage: 'Start date is required',
      endErrorMessage: 'End date is required',
    }

    beforeEach(() => {
      wrapper = mount(AvPeriodInput, { props, global: { stubs } })
    })

    BddTest().then('it should pass error messages to the respective inputs', () => {
      const startInput = findStartInput()
      const endInput = findEndInput()

      expect(startInput.props('errorMessage')).toBe('Start date is required')
      expect(endInput.props('errorMessage')).toBe('End date is required')
    })
  })
})

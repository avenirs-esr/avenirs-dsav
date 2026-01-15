import { mount, type VueWrapper } from '@vue/test-utils'
import { parseISO } from 'date-fns'
import { beforeEach } from 'vitest'
import AvPeriodInput, { type AvPeriodInputProps } from '@/components/interaction/inputs/AvPeriodInput/AvPeriodInput.vue'
import { AvInputStub, BddTest } from '@/tests'

BddTest().given('a period input', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvPeriodInput>>

  const stubs = {
    AvInput: AvInputStub,
  }

  const requiredProps: AvPeriodInputProps = {
    label: 'Period',
    startLabel: 'Start',
    endLabel: 'End',
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

  BddTest().and('given required props', () => {
    BddTest().when('the component is mounted', () => {
      beforeEach(() => {
        wrapper = mount(AvPeriodInput, { props: requiredProps, global: { stubs } })
      })

      BddTest().then('it should render with default props', () => {
        const label = wrapper.find('label.av-period-input__label')
        expect(label.exists()).toBe(true)
        expect(label.text()).toBe('Period')

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

        const separator = wrapper.find('.av-period-input__separator')
        expect(separator.exists()).toBe(true)
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
      startLabel: 'Start',
      endLabel: 'End',
      disabled: true,
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
      const label = wrapper.find('label.av-period-input__label')
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

      const separator = wrapper.find('.av-period-input__separator')
      expect(separator.exists()).toBe(true)
      expect(separator.attributes('style')).toContain('height: 1.5rem')
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
      const separator = wrapper.find('.av-period-input__separator')
      expect(separator.exists()).toBe(true)
      expect(separator.attributes('style')).toContain('width: 2rem')
    })
  })
})

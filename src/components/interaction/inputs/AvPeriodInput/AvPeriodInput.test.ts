import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach } from 'vitest'
import AvPeriodInput, { type AvPeriodInputProps } from '@/components/interaction/inputs/AvPeriodInput/AvPeriodInput.vue'
import { BddTest } from '@/tests'

BddTest().given('a period input', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvPeriodInput>>

  const stubs = {
    AvInput: {
      name: 'AvInput',
      props: {
        id: String,
        type: String,
        modelValue: String,
        label: String,
        labelVisible: Boolean,
        disabled: Boolean,
        ariaDisabled: Boolean,
        width: String,
        minDate: Object,
        maxDate: Object,
      },
      emits: ['update:modelValue'],
      template: `
        <input
          class="av-input"
          :data-id="id"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
        />
      `,
    },
  }

  function findStartInput () {
    const startId = wrapper.vm.$props.id
      ? `${wrapper.vm.$props.id}__start`
      : undefined

    const inputs = wrapper.findAllComponents({ name: 'AvInput' })
    if (startId) {
      return inputs.find(i => i.props('id') === startId) ?? inputs[0]
    }
    return inputs[0]
  }

  function findEndInput () {
    const endId = wrapper.vm.$props.id
      ? `${wrapper.vm.$props.id}__end`
      : undefined

    const inputs = wrapper.findAllComponents({ name: 'AvInput' })
    if (endId) {
      return inputs.find(i => i.props('id') === endId) ?? inputs[1]
    }
    return inputs[1]
  }

  BddTest().and('given no props', () => {
    BddTest().when('the component is mounted', () => {
      beforeEach(() => {
        wrapper = mount(AvPeriodInput, { global: { stubs } })
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
    const startMaxDate = new Date('2026-01-20')
    const endMinDate = new Date('2026-01-10')

    const props: AvPeriodInputProps = {
      id: 'my-period',
      label: 'Custom period',
      startModelValue: '2026-01-10',
      endModelValue: '2026-01-20',
      startLabel: 'Start',
      endLabel: 'End',
      disabled: true,
      startWidth: '14.875rem',
      endWidth: '14.875rem',
      startMaxDate,
      endMinDate,
      stacked: true,
      separatorSpacing: '1.5rem',
    } as any

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

      expect(startInput.props('width')).toBe(props.startWidth)
      expect(endInput.props('width')).toBe(props.endWidth)

      expect(startInput.props('maxDate')).toEqual(startMaxDate)
      expect(endInput.props('minDate')).toEqual(endMinDate)

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
      separatorSpacing: '2rem',
      stacked: false,
    } as any

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

import { mount, type VueWrapper } from '@vue/test-utils'
import { enGB } from 'date-fns/locale/en-GB'
import { enUS } from 'date-fns/locale/en-US'
import { fr } from 'date-fns/locale/fr'
import { beforeEach, expect, vi } from 'vitest'
import { AvMessageStub } from '@/components/base/AvMessage/AvMessage.stub'
import AvDatePicker, { type AvDatePickerProps } from '@/components/interaction/inputs/AvDatePicker/AvDatePicker.vue'
import { BddTest } from '@/tests/utils'

const VueDatePickerStub = vi.hoisted(() => ({
  name: 'VueDatePicker',
  props: {
    modelValue: { type: [Date, Object, Array], default: null },
    monthPicker: Boolean,
    timePicker: Boolean,
    weekPicker: Boolean,
    range: Boolean,
    minDate: [Date, String, Number],
    maxDate: [Date, String, Number],
    disabled: Boolean,
    formats: Object,
    placeholder: String,
    locale: [String, Object],
    autoApply: Boolean,
    timeConfig: Object,
    inputAttrs: Object,
    ui: Object,
  },
  emits: ['update:modelValue'],
  methods: {
    clear () {},
  },
  template: '<div data-testid="vue-date-picker-stub"><slot name="clear-icon" :clear="clear" /></div>',
}))

vi.mock('@vuepic/vue-datepicker', () => ({ VueDatePicker: VueDatePickerStub }))

const stubs = {
  AvMessage: AvMessageStub,
  VueDatePicker: VueDatePickerStub,
}

BddTest().given('an AvDatePicker', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvDatePicker>>

  function findDatePicker () {
    return wrapper.findComponent(VueDatePickerStub)
  }

  BddTest().when('the component is mounted with default props', () => {
    beforeEach(() => {
      wrapper = mount(AvDatePicker, {
        global: { stubs },
        props: { modelValue: null },
      })
    })

    BddTest().then('it should render the label and date picker', () => {
      expect(wrapper.find('.av-date-picker').exists()).toBe(true)
      expect(wrapper.find('label').exists()).toBe(true)
      expect(findDatePicker().exists()).toBe(true)
    })

    BddTest().then('it should use the default date picker configuration', () => {
      const datePicker = findDatePicker()
      expect(datePicker.props('modelValue')).toBeNull()
      expect(datePicker.props('monthPicker')).toBe(false)
      expect(datePicker.props('timePicker')).toBe(false)
      expect(datePicker.props('weekPicker')).toBe(false)
      expect(datePicker.props('range')).toBe(false)
      expect(datePicker.props('autoApply')).toBe(true)
      expect(datePicker.props('formats')).toEqual({
        input: 'P',
        preview: 'P',
      })
      expect(datePicker.props('locale')).toEqual(fr)
      expect(datePicker.props('timeConfig')).toEqual({ enableTimePicker: false })
      expect(datePicker.props('inputAttrs')).toMatchObject({
        autocomplete: 'off',
        clearable: true,
        hideInputIcon: false,
        inputmode: 'text',
        required: false,
      })
    })

    BddTest().then('it should render the clear button with the default label', () => {
      expect(wrapper.findComponent({ name: 'AvButton' }).props('label')).toBe('clear')
    })

    BddTest().then('it should link the label to the generated input id', () => {
      const label = wrapper.find('label')
      const inputAttrs = findDatePicker().props('inputAttrs') as Record<string, unknown>
      expect(label.attributes('for')).toBe(inputAttrs.id)
    })
  })

  BddTest().when('the component is mounted with custom props', () => {
    const formats = { input: 'dd.MM.yyyy' }
    const inputAttrs = { 'aria-label': 'Custom date', 'clearable': false, 'inputmode': 'numeric' as const }
    const minDate = new Date('2026-01-01')
    const maxDate = new Date('2026-12-31')

    const props: AvDatePickerProps = {
      id: 'custom-date',
      autoApply: false,
      clearLabel: 'Effacer',
      disabled: true,
      formats,
      inputAttrs,
      label: 'Custom label',
      locale: 'fr-FR',
      maxDate,
      minDate,
      modelValue: new Date('2026-06-15'),
      placeholder: 'Select a date',
      type: 'datetime-local',
      width: '20rem',
    }

    beforeEach(() => {
      wrapper = mount(AvDatePicker, {
        global: { stubs },
        props,
      })
    })

    BddTest().then('it should render custom label and width', () => {
      expect(wrapper.find('label').text()).toBe('Custom label')
      expect(wrapper.find('.av-date-picker').attributes('style')).toContain('width: 20rem')
    })

    BddTest().then('it should forward custom props to VueDatePicker', () => {
      const datePicker = findDatePicker()
      expect(datePicker.props('modelValue')).toEqual(props.modelValue)
      expect(datePicker.props('minDate')).toBe(minDate)
      expect(datePicker.props('maxDate')).toBe(maxDate)
      expect(datePicker.props('disabled')).toBe(true)
      expect(datePicker.props('formats')).toEqual({
        preview: 'P, HH:mm',
        ...formats,
      })
      expect(datePicker.props('placeholder')).toBe('Select a date')
      expect(datePicker.props('locale')).toEqual(fr)
      expect(datePicker.props('autoApply')).toBe(false)
      expect(wrapper.findComponent({ name: 'AvButton' }).props('label')).toBe('Effacer')
      expect(datePicker.props('inputAttrs')).toMatchObject({
        'id': 'custom-date',
        'aria-label': 'Custom date',
        'clearable': false,
        'inputmode': 'numeric',
      })
    })

    BddTest().then('it should enable the datetime time picker', () => {
      const datePicker = findDatePicker()
      expect(datePicker.props('timeConfig')).toEqual({ enableTimePicker: true })
    })
  })

  const localeScenariosData = [
    { expectedLocale: fr, locale: 'fr' },
    { expectedLocale: fr, locale: 'fr-FR' },
    { expectedLocale: enUS, locale: 'en' },
    { expectedLocale: enUS, locale: 'en-US' },
    { expectedLocale: enGB, locale: 'en-GB' },
  ] as const

  localeScenariosData.forEach(({ expectedLocale, locale }) => {
    BddTest().when(`the component is mounted with ${locale} locale`, () => {
      beforeEach(() => {
        wrapper = mount(AvDatePicker, {
          global: { stubs },
          props: { locale, modelValue: null },
        })
      })

      BddTest().then('it should forward the matching date-fns locale object', () => {
        expect(findDatePicker().props('locale')).toEqual(expectedLocale)
      })
    })
  })

  BddTest().when('the component is mounted with an unsupported locale string', () => {
    beforeEach(() => {
      wrapper = mount(AvDatePicker, {
        global: { stubs },
        props: { locale: 'es-ES', modelValue: null },
      })
    })

    BddTest().then('it should fall back to the French locale object', () => {
      expect(findDatePicker().props('locale')).toEqual(fr)
    })
  })

  const formatScenariosData = [
    {
      expectedFormats: {
        input: 'P',
        preview: 'P',
      },
      type: 'date',
    },
    {
      expectedFormats: {
        input: 'MM/yyyy',
        preview: 'MM/yyyy',
      },
      type: 'month',
    },
    {
      expectedFormats: {
        input: 'HH:mm',
        preview: 'HH:mm',
      },
      type: 'time',
    },
    {
      expectedFormats: undefined,
      type: 'week',
    },
    {
      expectedFormats: {
        input: 'P',
        preview: 'P',
      },
      type: 'range',
    },
  ] as const

  formatScenariosData.forEach(({ expectedFormats, type }) => {
    BddTest().when(`the component is mounted with ${type} type`, () => {
      beforeEach(() => {
        wrapper = mount(AvDatePicker, {
          global: { stubs },
          props: { modelValue: null, type },
        })
      })

      BddTest().then('it should enable only the matching picker mode', () => {
        const datePicker = findDatePicker()
        expect(datePicker.props('monthPicker')).toBe(type === 'month')
        expect(datePicker.props('timePicker')).toBe(type === 'time')
        expect(datePicker.props('weekPicker')).toBe(type === 'week')
        expect(datePicker.props('range')).toBe(type === 'range')
        expect(datePicker.props('formats')).toEqual(expectedFormats)
        expect(datePicker.props('timeConfig')).toEqual({
          enableTimePicker: type === 'time',
        })
      })
    })
  })

  BddTest().when('VueDatePicker emits a model update', () => {
    const selectedDate = new Date('2026-06-15')

    beforeEach(async () => {
      wrapper = mount(AvDatePicker, {
        global: { stubs },
        props: { modelValue: null },
      })
      findDatePicker().vm.$emit('update:modelValue', selectedDate)
      await wrapper.vm.$nextTick()
    })

    BddTest().then('it should emit update:modelValue and change', () => {
      expect(wrapper.emitted('update:modelValue')).toEqual([[selectedDate]])
      expect(wrapper.emitted('change')).toEqual([[selectedDate]])
    })
  })

  BddTest().when('the component is mounted with an error message', () => {
    beforeEach(() => {
      wrapper = mount(AvDatePicker, {
        global: { stubs },
        props: {
          errorMessage: 'Date is required',
          modelValue: null,
        },
      })
    })

    BddTest().then('it should apply the error class and render the message', () => {
      expect(wrapper.find('.av-date-picker--error').exists()).toBe(true)
      expect(wrapper.findComponent({ name: 'AvMessage' }).props('message')).toBe('Date is required')
    })
  })
})

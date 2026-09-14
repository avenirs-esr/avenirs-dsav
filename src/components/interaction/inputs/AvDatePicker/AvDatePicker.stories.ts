import type { Meta, StoryFn } from '@storybook/vue3'
import AvDatePicker, { type AvDatePickerProps } from '@/components/interaction/inputs/AvDatePicker/AvDatePicker.vue'

/**
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvDatePicker</code> component renders a single date input with an
 *     associated label, built on top of VueDatePicker.
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <p>
 *   <span class="b2-regular">The date picker is composed of:</span>
 * </p>
 *
 * <ul>
 *   <li><span class="b2-regular">a label</span></li>
 *   <li><span class="b2-regular">a date input</span></li>
 *   <li><span class="b2-regular">an optional error message</span></li>
 * </ul>
 *
 * <p>
 *   <span class="b2-regular">
 *     Locale shortcuts are mapped for common French and English locales. The list is
 *     not exhaustive; use the <code>formats</code> prop for custom display/parsing formats.
 *   </span>
 * </p>
 */
const meta: Meta<AvDatePickerProps> = {
  title: 'Components/Interaction/Inputs/AvDatePicker',
  component: AvDatePicker,
  tags: ['autodocs'],
  decorators: [() => ({
    template: '<div style="min-height: 25rem;"><story /></div>',
  })],
  argTypes: {
    autoApply: { control: 'boolean' },
    clearLabel: { control: 'text' },
    disabled: { control: 'boolean' },
    errorMessage: { control: 'text' },
    formats: { control: 'object' },
    id: { control: 'text' },
    inputAttrs: { control: 'object' },
    label: { control: 'text' },
    labelClass: { control: 'text' },
    labelVisible: { control: 'boolean' },
    locale: { control: 'text' },
    maxDate: { control: 'object' },
    minDate: { control: 'object' },
    placeholder: { control: 'text' },
    timeConfig: { control: 'object' },
    type: {
      control: 'select',
      options: ['date', 'datetime-local', 'month', 'time', 'week', 'range'],
    },
    width: { control: 'text' },
  },
  args: {
    autoApply: true,
    clearLabel: 'clear',
    disabled: false,
    label: 'Date',
    labelVisible: true,
    type: 'date',
  },
}

export default meta

const Template: StoryFn<AvDatePickerProps> = args => ({
  components: { AvDatePicker },
  setup () {
    const onUpdate = (value: AvDatePickerProps['modelValue']) => {
      args.modelValue = value
    }

    return { args, onUpdate }
  },
  template: `
    <AvDatePicker
      v-bind="args"
      @update:model-value="onUpdate"
    />
  `,
})

export const Default = Template.bind({})
Default.args = {
  modelValue: null,
}

export const Prefilled = Template.bind({})
Prefilled.args = {
  modelValue: new Date('2026-01-10'),
}

export const Disabled = Template.bind({})
Disabled.args = {
  modelValue: new Date('2026-01-10'),
  disabled: true,
}

export const WithError = Template.bind({})
WithError.args = {
  modelValue: null,
  errorMessage: 'This date is required.',
}

export const HiddenLabel = Template.bind({})
HiddenLabel.args = {
  modelValue: null,
  labelVisible: false,
}

export const WithMinMaxDate = Template.bind({})
WithMinMaxDate.args = {
  modelValue: null,
  minDate: new Date('2026-01-01'),
  maxDate: new Date('2026-12-31'),
}

export const WithCustomFormat = Template.bind({})
WithCustomFormat.args = {
  modelValue: new Date('2026-01-10'),
  formats: {
    input: 'dd.MM.yyyy',
    preview: 'dd.MM.yyyy',
  },
}

export const MonthType = Template.bind({})
MonthType.args = {
  type: 'month',
  modelValue: { month: 0, year: 2026 },
}

export const TimeType = Template.bind({})
TimeType.args = {
  type: 'time',
  modelValue: { hours: 9, minutes: 0, seconds: 0 },
}

export const WeekType = Template.bind({})
WeekType.args = {
  type: 'week',
  modelValue: null,
}

export const RangeType = Template.bind({})
RangeType.args = {
  type: 'range',
  modelValue: null,
}

export const DateTimeLocalType = Template.bind({})
DateTimeLocalType.args = {
  type: 'datetime-local',
  modelValue: new Date('2026-01-10T09:00'),
}

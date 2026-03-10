import type { Meta, StoryFn } from '@storybook/vue3'
import AvPeriodInput, { type AvPeriodInputProps } from '@/components/interaction/inputs/AvPeriodInput/AvPeriodInput.vue'

/**
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvPeriodInput</code> component allows users to select a period
 *     by choosing a start date and an end date.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">It supports two label modes:</span>
 * </p>
 *
 * <ul>
 *   <li><span class="b2-regular"><strong>Single label</strong> (default): one label is displayed above both inputs via the <code>label</code> prop.</span></li>
 *   <li><span class="b2-regular"><strong>Separated labels</strong>: each input has its own label via <code>startLabel</code> and <code>endLabel</code>, enabled with <code>showEachInputLabel</code>.</span></li>
 * </ul>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <p>
 *   <span class="b2-regular">The period input is composed of:</span>
 * </p>
 *
 * <ul>
 *   <li><span class="b2-regular">a wrapper label (single mode) or individual input labels (separated mode)</span></li>
 *   <li><span class="b2-regular">a start date input</span></li>
 *   <li><span class="b2-regular">a spacer separator</span></li>
 *   <li><span class="b2-regular">an end date input</span></li>
 * </ul>
 *
 * <h2 class="n2">🔁 Built-in range behavior</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     Selecting a start date automatically constrains the end date minimum, and selecting
 *     an end date automatically constrains the start date maximum.
 *   </span>
 * </p>
 */
const meta: Meta<AvPeriodInputProps> = {
  title: 'Components/Interaction/Inputs/AvPeriodInput',
  component: AvPeriodInput,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    label: { control: 'text' },
    labelClass: { control: 'text' },
    labelVisible: { control: 'boolean' },

    startModelValue: { control: 'text' },
    endModelValue: { control: 'text' },

    startErrorMessage: { control: 'text' },
    endErrorMessage: { control: 'text' },

    showEachInputLabel: { control: 'boolean' },
    startLabel: { control: 'text' },
    endLabel: { control: 'text' },

    startDateDisabled: { control: 'boolean' },
    endDateDisabled: { control: 'boolean' },

    width: { control: 'text' },

    startMinDate: { control: 'object' },
    startMaxDate: { control: 'object' },
    endMinDate: { control: 'object' },
    endMaxDate: { control: 'object' },

    stacked: { control: 'boolean' },
    separatorSpacing: { control: 'text' },

    type: {
      control: 'select',
      options: ['date', 'datetime-local', 'month', 'time', 'week'],
    },
  },
  args: {
    label: 'Period',
    startModelValue: '',
    endModelValue: '',
    startErrorMessage: '',
    endErrorMessage: '',
    showEachInputLabel: false,
    startDateDisabled: false,
    endDateDisabled: false,
    stacked: false,
    separatorSpacing: 'var(--spacing-sm)',
    type: 'date',
    labelVisible: true,
  },
}

export default meta

const Template: StoryFn<AvPeriodInputProps> = args => ({
  components: { AvPeriodInput },
  setup () {
    const onStartUpdate = (value: string) => {
      args.startModelValue = value
    }

    const onEndUpdate = (value: string) => {
      args.endModelValue = value
    }

    const onChange = (payload: { start: string, end: string }) => {
      args.startModelValue = payload.start
      args.endModelValue = payload.end
    }

    return { args, onStartUpdate, onEndUpdate, onChange }
  },
  template: `
    <AvPeriodInput
      v-bind="args"
      @update:startModelValue="onStartUpdate"
      @update:endModelValue="onEndUpdate"
      @change="onChange"
    />
  `,
})

export const Default = Template.bind({})
Default.args = {}

export const Prefilled = Template.bind({})
Prefilled.args = {
  startModelValue: '2026-01-10',
  endModelValue: '2026-01-20',
}

export const WithWidth = Template.bind({})
WithWidth.args = {
  width: '14.875rem',
}

export const WithCustomSpacing = Template.bind({})
WithCustomSpacing.args = {
  width: '14.875rem',
  separatorSpacing: '1rem',
}

export const BothDisabled = Template.bind({})
BothDisabled.args = {
  startDateDisabled: true,
  endDateDisabled: true,
  startModelValue: '2026-01-10',
  endModelValue: '2026-01-20',
  width: '14.875rem',
}

export const Stacked = Template.bind({})
Stacked.args = {
  stacked: true,
  width: '14.875rem',
  separatorSpacing: '1rem',
}

export const WithExternalBounds = Template.bind({})
WithExternalBounds.args = {
  width: '14.875rem',
  startMinDate: new Date('2026-01-01'),
  endMaxDate: new Date('2026-12-31'),
}

export const WithRangeBehavior = Template.bind({})
WithRangeBehavior.args = {
  startModelValue: '2026-01-10',
  endModelValue: '2026-01-20',
  width: '14.875rem',
}

export const StartDateDisabled = Template.bind({})
StartDateDisabled.args = {
  startDateDisabled: true,
  startModelValue: '2026-01-10',
  endModelValue: '2026-01-20',
  width: '14.875rem',
}

export const EndDateDisabled = Template.bind({})
EndDateDisabled.args = {
  endDateDisabled: true,
  startModelValue: '2026-01-10',
  endModelValue: '2026-01-20',
  width: '14.875rem',
}

export const MonthType = Template.bind({})
MonthType.args = {
  type: 'month',
  startModelValue: '2026-01',
  endModelValue: '2026-06',
  width: '14.875rem',
}

export const DateTimeLocalType = Template.bind({})
DateTimeLocalType.args = {
  type: 'datetime-local',
  startModelValue: '2026-01-10T09:00',
  endModelValue: '2026-01-10T17:00',
  width: '14.875rem',
}

export const HiddenLabel = Template.bind({})
HiddenLabel.args = {
  labelVisible: false,
  width: '14.875rem',
}

export const WithEachInputLabel = Template.bind({})
WithEachInputLabel.args = {
  showEachInputLabel: true,
  startLabel: 'Start date',
  endLabel: 'End date',
  width: '14.875rem',
}

export const WithEachInputLabelAndErrors = Template.bind({})
WithEachInputLabelAndErrors.args = {
  showEachInputLabel: true,
  startLabel: 'Start date',
  endLabel: 'End date',
  startModelValue: '2026-01-20',
  endModelValue: '2026-01-10',
  startErrorMessage: '',
  endErrorMessage: 'The end date cannot be before the start date.',
  width: '14.875rem',
}

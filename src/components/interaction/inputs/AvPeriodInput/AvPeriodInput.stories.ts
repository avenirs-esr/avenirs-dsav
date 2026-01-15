import type { Meta, StoryFn } from '@storybook/vue3'
import AvPeriodInput, { type AvPeriodInputProps } from '@/components/interaction/inputs/AvPeriodInput/AvPeriodInput.vue'

/**
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvPeriodInput</code> component allows users to select a period
 *     by choosing a start date and an end date under a single label.
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <p>
 *   <span class="b2-regular">The period input is composed of:</span>
 * </p>
 *
 * <ul>
 *   <li><span class="b2-regular">a wrapper label</span></li>
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
    label: { control: 'text', required: true },
    labelClass: { control: 'text' },

    startModelValue: { control: 'text' },
    endModelValue: { control: 'text' },

    startLabel: { control: 'text', required: true },
    endLabel: { control: 'text', required: true },

    disabled: { control: 'boolean' },

    width: { control: 'text' },

    startMinDate: { control: 'object' },
    startMaxDate: { control: 'object' },
    endMinDate: { control: 'object' },
    endMaxDate: { control: 'object' },

    stacked: { control: 'boolean' },
    separatorSpacing: { control: 'text' },
  },
  args: {
    label: 'Period',
    startLabel: 'Start',
    endLabel: 'End',
    startModelValue: '',
    endModelValue: '',
    disabled: false,
    stacked: false,
    separatorSpacing: 'var(--spacing-sm)',
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

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
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

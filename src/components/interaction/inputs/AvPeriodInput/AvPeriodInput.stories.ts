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
 */
const meta: Meta<AvPeriodInputProps> = {
  title: 'Components/Interaction/Inputs/AvPeriodInput',
  component: AvPeriodInput,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    label: { control: 'text' },

    startModelValue: { control: 'text' },
    endModelValue: { control: 'text' },

    startLabel: { control: 'text' },
    endLabel: { control: 'text' },

    disabled: { control: 'boolean' },

    startWidth: { control: 'text' },
    endWidth: { control: 'text' },

    separatorSpacing: { control: 'text' },

    startMinDate: { control: 'object' },
    startMaxDate: { control: 'object' },
    endMinDate: { control: 'object' },
    endMaxDate: { control: 'object' },

    stacked: { control: 'boolean' },
  },
  args: {
    label: 'Period',
    startModelValue: '',
    endModelValue: '',
    disabled: false,
    stacked: false,
    separatorSpacing: 'var(--spacing-3)',
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

export const WithCustomSpacing = Template.bind({})
WithCustomSpacing.args = {
  separatorSpacing: '1.5rem',
}

export const TightSpacing = Template.bind({})
TightSpacing.args = {
  separatorSpacing: '0.5rem',
}

export const Prefilled = Template.bind({})
Prefilled.args = {
  startModelValue: '2026-01-10',
  endModelValue: '2026-01-20',
}

export const WithWidths = Template.bind({})
WithWidths.args = {
  startWidth: '14.875rem',
  endWidth: '14.875rem',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  startModelValue: '2026-01-10',
  endModelValue: '2026-01-20',
}

export const Stacked = Template.bind({})
Stacked.args = {
  stacked: true,
  startWidth: '14.875rem',
  endWidth: '14.875rem',
}

export const WithConstraints = Template.bind({})
WithConstraints.args = {
  startModelValue: '2026-01-10',
  endModelValue: '2026-01-20',
  separatorSpacing: '1rem',
  startMaxDate: new Date('2026-01-20'),
  endMinDate: new Date('2026-01-10'),
}

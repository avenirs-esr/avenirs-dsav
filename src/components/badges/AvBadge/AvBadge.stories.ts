import type { Meta, StoryFn } from '@storybook/vue3'
import AvBadge, { type AvBadgeProps } from '@/components/badges/AvBadge/AvBadge.vue'
import { ICONS_DATA_URL } from '@/tokens'
import { iconMappingWithDataUrl, iconOptionsWithDataUrl } from '@/utils/storybook'

/**
 * <h1 class="n1">Badges - <code>AvBadge</code></h1>
 *
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvBadge</code> is ideal for displaying short, important information, such as categories, labels, or statuses.
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <ul>
 *   <li>
 *     <span class="b2-regular">The component is a <code>p</code> element with the <code>av-badge</code> class.</span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">Props allow you to modify the badge appearance according to the props: color, icon presence, size, and handling of overly long text.</span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">The <code>label</code> is displayed inside a <code>span</code>, potentially with the <code>ellipsis</code> prop and a defined or maximum size to handle truncated text.</span>
 *   </li>
 * </ul>
 */
const meta: Meta<AvBadgeProps> = {
  title: 'Components/Badges/AvBadge',
  component: AvBadge,
  tags: ['autodocs'],
  argTypes: {
    label: {
      type: { name: 'string', required: true },
      control: 'text',
    },
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    icon: {
      control: 'select',
      options: ['', ...iconOptionsWithDataUrl],
      mapping: {
        '': '',
        ...iconMappingWithDataUrl,
      },
    },
    small: { control: 'boolean' },
    ellipsis: { control: 'boolean' },
  },
  args: {
    label: 'A super badge',
    color: 'var(--dark-background-primary1)',
    backgroundColor: 'var(--light-background-primary2)',
    borderColor: '',
    icon: iconOptionsWithDataUrl[0],
    small: false,
    ellipsis: false,
  },
}

export default meta

const Template: StoryFn<AvBadgeProps> = args => ({
  components: { AvBadge },
  setup () {
    return { args }
  },
  template: `
    <AvBadge v-bind="args" />
  `,
})

const TemplateWithWidth: StoryFn<AvBadgeProps> = args => ({
  components: { AvBadge },
  setup () {
    return { args }
  },
  template: `
    <div style="width: 150px">
      <AvBadge v-bind="args" />
    </div>
  `,
})

export const Default = Template.bind({})
Default.args = {}

export const WithoutIcon = Template.bind({})
WithoutIcon.args = {
  icon: undefined,
}

export const SmallEllipsis = TemplateWithWidth.bind({})
SmallEllipsis.args = {
  label: 'This is a very long badge label that will be truncated',
  ellipsis: true,
  small: true,
}

export const StatusNotStarted = Template.bind({})
StatusNotStarted.args = {
  label: 'Not started',
  color: 'var(--text2)',
  backgroundColor: 'var(--other-background-base)',
  borderColor: 'var(--other-border-skill-card)',
  icon: ICONS_DATA_URL.MDI_CALENDAR_CLOCK_OUTLINE
}

export const StatusInProgress = Template.bind({})
StatusInProgress.args = {
  label: 'In progress',
  color: 'var(--dark-background-primary1)',
  backgroundColor: 'var(--light-background-primary2)',
  icon: ICONS_DATA_URL.MDI_CALENDAR_RANGE_OUTLINE
}

export const StatusSubmitted = Template.bind({})
StatusSubmitted.args = {
  label: 'Submitted for evaluation',
  color: 'var(--light-foreground-primary1)',
  backgroundColor: 'var(--light-background-critical)',
  icon: ICONS_DATA_URL.MDI_DOTS_HORIZONTAL_CIRCLE_OUTLINE
}

export const StatusCompleted = Template.bind({})
StatusCompleted.args = {
  label: 'Completed',
  color: 'var(--light-foreground-neutral)',
  backgroundColor: 'var(--light-background-neutral)',
  icon: ICONS_DATA_URL.MDI_CALENDAR_CHECK_OUTLINE
}

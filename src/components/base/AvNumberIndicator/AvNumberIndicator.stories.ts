import type { Meta, StoryFn } from '@storybook/vue3'
import type { AvNumberIndicatorProps } from '@/components/base/AvNumberIndicator/AvNumberIndicator.vue'
import AvNumberIndicator from '@/components/base/AvNumberIndicator/AvNumberIndicator.vue'

/**
 * <h1 class="n1">Number Indicator - <code>AvNumberIndicator</code></h1>
 *
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvNumberIndicator</code> component displays a non-negative integer value inside a circular
 *     visual element.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     It is designed to highlight or identify an item within a collection, sequence, or structured content.
 *     It can be used independently or integrated into other components, such as <code>AvListItem</code> or
 *     <code>AvAccordion</code>.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     The component inherits the text color from its parent and automatically adjusts its width to
 *     accommodate the displayed value.
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The component consists of a single <code>span</code> element, inside an <code>av-row</code> div,
 *     containing:
 *   </span>
 * </p>
 *
 * <ul>
 *   <li>
 *     <span class="b2-regular">
 *       The numeric value.
 *     </span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">
 *       A circular border.
 *     </span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">
 *       Centered text.
 *     </span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">
 *       Consistent minimum dimensions.
 *     </span>
 *   </li>
 * </ul>
 *
 * <p>
 *   <span class="b2-regular">
 *     The component is only rendered when the provided value is a non-negative integer.
 *   </span>
 * </p>
 */
const meta: Meta<AvNumberIndicatorProps> = {
  title: 'Components/Base/AvNumberIndicator',
  component: AvNumberIndicator,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'number' }
  },
  args: {
    value: 1
  },
}

export default meta

const Template: StoryFn<AvNumberIndicatorProps> = args => ({
  components: { AvNumberIndicator },
  setup () {
    return { args }
  },
  template: `
    <AvNumberIndicator v-bind="args" />
  `,
})

const WithParentColorTemplate: StoryFn<AvNumberIndicatorProps> = args => ({
  components: { AvNumberIndicator },
  setup () {
    return { args }
  },
  template: `
    <div style="color: red;">
      <AvNumberIndicator v-bind="args" />
    </div>
  `,
})

export const Default = Template.bind({})
Default.args = {}

export const WithParentColor = WithParentColorTemplate.bind({})
WithParentColor.args = {
  value: 1
}

export const ZeroValue = Template.bind({})
ZeroValue.args = {
  value: 0
}

export const NegativeValue = Template.bind({})
NegativeValue.args = {
  value: -1
}

export const NonIntegerValue = Template.bind({})
NonIntegerValue.args = {
  value: 1.5
}

export const TwoDigits = Template.bind({})
TwoDigits.args = {
  value: 12
}

export const ThreeDigits = Template.bind({})
ThreeDigits.args = {
  value: 123
}

export const FourDigits = Template.bind({})
FourDigits.args = {
  value: 1234
}

export const FiveDigits = Template.bind({})
FiveDigits.args = {
  value: 12345
}

export const SixDigits = Template.bind({})
SixDigits.args = {
  value: 123456
}

export const SevenDigits = Template.bind({})
SevenDigits.args = {
  value: 1234567
}

export const EightDigits = Template.bind({})
EightDigits.args = {
  value: 12345678
}

export const NineDigits = Template.bind({})
NineDigits.args = {
  value: 123456789
}

export const TenDigits = Template.bind({})
TenDigits.args = {
  value: 1234567890
}

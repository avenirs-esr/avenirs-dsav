import type { Meta, StoryFn } from '@storybook/vue3'
import { AvCheckbox } from '@/components/interaction/checkboxes'
import AvCheckboxesGroup, { type AvCheckboxesGroupProps } from '@/components/interaction/checkboxes/AvCheckboxesGroup/AvCheckboxesGroup.vue'

/**
 * <h1 class="n1">Checkboxes groups - <code>AvCheckboxesGroup</code></h1>
 *
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p class="b2-regular">
 *   The <code>AvCheckboxesGroup</code> allows you to manage a set of <code>AvCheckbox</code>.
 *   It consists of a label (legend), individual options represented by the <code>AvCheckbox</code> component,
 *   and a global information, error, or validation message.
 * </p>
 *
 * <p class="b2-regular">
 *   Checkboxes can be used alone or in a list. Avoid lists with more than 5 items,
 *   and when you want to restrict the choice to a single item, use radio buttons
 *   (see <code>AvRadioButton</code>).
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <p class="b2-regular">
 *   The <code>AvCheckboxesGroup</code> component consists of the following elements:
 *   <ul>
 *     <li>a <code>&lt;fieldset&gt;</code> element containing all the checkboxes,</li>
 *     <li>a legend defined by the <code>legend</code> prop and customizable with the <code>legend</code> slot,</li>
 *     <li>a group of individual checkboxes rendered by the <code>AvCheckbox</code> component,</li>
 *     <li>an information, error, or validation message displayed below the group of checkboxes.</li>
 *   </ul>
 * </p>
 */
const meta: Meta<AvCheckboxesGroupProps> = {
  title: 'Components/Interaction/Checkboxes/AvCheckboxesGroup',
  component: AvCheckboxesGroup,
  tags: ['autodocs'],
  argTypes: {
    legend: { control: 'text' },
    legendId: { control: 'text' },
    errorMessage: { control: 'text' },
    successMessage: { control: 'text' },
    hint: { control: 'text' },
    inline: { control: 'boolean' },
  },
  args: {
    legend: 'Checkboxes group legend',
    legendId: 'checkboxes-group-legend',
    errorMessage: '',
    successMessage: '',
    hint: '',
    inline: false,
  },
}

export default meta

const Template: StoryFn<AvCheckboxesGroupProps> = args => ({
  components: { AvCheckboxesGroup, AvCheckbox },
  setup () {
    const model = ref<(string | number)[]>([])
    return { args, model }
  },
  template: `<AvCheckboxesGroup v-bind="args">
    <AvCheckbox
      v-for="i in 3"
      :key="i"
      v-model="model"
      :name="\`checkbox-\${i}\`"
      :label="\`Checkbox \${i}\`"
      :value="i"
    />
  </AvCheckboxesGroup>`,
})

export const Default = Template.bind({})
Default.args = {}

export const Inline = Template.bind({})
Inline.args = {
  inline: true,
}

export const WithErrorMessage = Template.bind({})
WithErrorMessage.args = {
  errorMessage: 'This is an error message.',
}

export const InlineWithSuccessMessage = Template.bind({})
InlineWithSuccessMessage.args = {
  inline: true,
  successMessage: 'This is a success message.',
}

export const WithHint = Template.bind({})
WithHint.args = {
  hint: 'This is a hint message.',
}

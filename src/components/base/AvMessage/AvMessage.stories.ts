import type { Meta, StoryFn } from '@storybook/vue3'
import AvMessage, { type AvMessageProps } from './AvMessage.vue'

/**
 * <h1 class="n1">Messages - <code>AvMessage</code></h1>
 *
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p class="b2-regular">
 *   The <code>AvMessage</code> component allows you to display short texts accompanied by an icon on the left,
 *   depending on the type of information. This component is useful for displaying contextual feedback messages,
 *   such as errors or successes, to the user.
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <ul>
 *   <li>The component is based on an <code>AvIconText</code> element.</li>
 *   <li>The icon and color are automatically adjusted according to the <code>type</code> prop.</li>
 *   <li>Common types include <code>error</code> and <code>success</code>.</li>
 * </ul>
 */
const meta: Meta<AvMessageProps> = {
  title: 'Components/Base/AvMessage',
  component: AvMessage,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
    message: { control: 'object' },
  },
  args: {
    type: 'info',
    message: 'This is an info message',
  },
}

export default meta

const Template: StoryFn<AvMessageProps> = args => ({
  components: { AvMessage },
  setup () {
    return { args }
  },
  template: `
    <AvMessage v-bind="args" />
  `,
})

export const Info = Template.bind({})
Info.args = {}

export const Success = Template.bind({})
Success.args = {
  type: 'success',
  message: 'This is a success message',
}

export const Warning = Template.bind({})
Warning.args = {
  type: 'warning',
  message: 'This is a warning message',
}

export const Error = Template.bind({})
Error.args = {
  type: 'error',
  message: 'This is an error message',
}

export const MultipleMessages = Template.bind({})
MultipleMessages.args = {
  message: ['This is the first message', 'This is the second message', 'This is the third message'],
}

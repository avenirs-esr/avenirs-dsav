import type { Meta, StoryFn } from '@storybook/vue3'
import AvAlert, { type AvAlertProps } from '@/components/feedback/AvAlert/AvAlert.vue'

/**
 * <h1 class="n1">Alerts - <code>AvAlert</code></h1>
 *
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p class="b2-regular">
 *   The <code>AvAlert</code> component is intended for use in the <code>AvToaster</code> component.
 *   Alerts draw the user attention to information without interrupting their current task.
 * </p>
 *
 * <p class="b2-regular">
 *   The alert is available in two sizes:
 *   <ul>
 *     <li>medium size (MD, by default, if the <code>small</code> prop is absent or set to <code>false</code>)</li>
 *     <li>small size (SM) if the <code>small</code> prop is set to <code>true</code>)</li>
 *   </ul>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <p class="b2-regular">
 *   The alert consists of the following elements:
 *   <ul>
 *     <li>a title (prop <code>title</code>, of type <code>string</code>):
 *       <ul>
 *         <li>mandatory on the MD version (if the <code>small</code> prop is absent or set to <code>false</code>)</li>
 *         <li>optional on the SM version (if the <code>small</code> prop is set to <code>true</code>)</li>
 *       </ul>
 *     </li>
 *     <li>an icon and a color determined by the <code>type</code> prop:
 *       <ul>
 *         <li><code>info</code> (default if <code>type</code> is absent)</li>
 *         <li><code>success</code></li>
 *         <li><code>warning</code></li>
 *         <li><code>error</code></li>
 *       </ul>
 *     </li>
 *     <li>a description text (prop <code>description</code>, of type <code>string</code>):
 *       <ul>
 *         <li>optional on the MD version</li>
 *         <li>mandatory on the SM version</li>
 *         <li>the default <code>slot</code> can be used as a description</li>
 *       </ul>
 *     </li>
 *     <li>a closing cross if the <code>closeable</code> prop is set to <code>true</code></li>
 *   </ul>
 * </p>
 *
 * <p class="b2-regular">
 *   Other props:
 *   <ul>
 *     <li><code>closed</code> indicates whether the alert should be present (<code>false</code>) or not (<code>true</code>) in the DOM</li>
 *     <li><code>closeButtonLabel</code> specifies the label and aria-label of the alert close button; default is <code>Close</code></li>
 *   </ul>
 * </p>
 */
const meta: Meta<AvAlertProps> = {
  title: 'Components/Feedback/AvAlert',
  component: AvAlert,
  tags: ['autodocs'],
  argTypes: {
    alert: { control: 'boolean' },
    closed: { control: 'boolean' },
    closeable: { control: 'boolean' },
    id: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    small: { control: 'boolean' },
    type: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
    closeButtonLabel: { control: 'text' },
  },
  args: {
    alert: false,
    closed: false,
    closeable: false,
    title: 'Alert Title',
    description: 'This is an alert description.',
    small: false,
    type: 'info',
    closeButtonLabel: 'Close',
  },
}

export default meta

const Template: StoryFn<AvAlertProps> = args => ({
  components: { AvAlert },
  setup () {
    return { args }
  },
  template: `
    <AvAlert v-bind="args" />
  `,
})

const MultipleTemplate: StoryFn<{ alerts: AvAlertProps[] }> = args => ({
  components: { AvAlert },
  setup () {
    return { alerts: args.alerts }
  },
  template: `
    <div>
      <AvAlert
        v-for="(alert, index) in alerts"
        :key="index"
        v-bind="alert"
      />
    </div>
  `,
})

export const Default = Template.bind({})
Default.args = {}

export const Closeable = Template.bind({})
Closeable.args = {
  closeable: true,
}

export const Small = Template.bind({})
Small.args = {
  small: true,
}

export const SuccessAlert = Template.bind({})
SuccessAlert.args = {
  type: 'success',
  title: 'Success Alert',
  description: 'This is a success alert.',
  closeable: true,
}

export const ErrorAlert = Template.bind({})
ErrorAlert.args = {
  type: 'error',
  title: 'Error Alert',
  description: 'This is an error alert.',
  closeable: true,
}

export const WarningAlert = Template.bind({})
WarningAlert.args = {
  type: 'warning',
  title: 'Warning Alert',
  description: 'This is a warning alert.',
  closeable: true,
}

export const MultipleAlerts = MultipleTemplate.bind({})
MultipleAlerts.args = {
  alerts: [
    {
      type: 'info',
      title: 'Info Alert',
      description: 'This is an info alert.',
      closeable: true,
    },
    {
      type: 'success',
      title: 'Success Alert',
      description: 'This is a success alert.',
      small: true,
    },
    {
      type: 'error',
      title: 'Error Alert',
      description: 'This is an error alert.',
      closeable: true,
    },
    {
      type: 'warning',
      title: 'Warning Alert',
      description: 'This is a warning alert.',
      closeable: true,
      small: true,
    },
  ],
}

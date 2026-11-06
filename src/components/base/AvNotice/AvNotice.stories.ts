import type { Meta, StoryFn } from '@storybook/vue3'
import type { AvNoticeProps } from '@/components/base/AvNotice/AvNotice.vue'
import AvNotice from '@/components/base/AvNotice/AvNotice.vue'

/**
 * <h1 class="n1">Important information banner - <code>AvNotice</code></h1>
 *
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvNotice</code> component is an important information banner that allows users to view or
 *     access important and temporary information.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     It is displayed on all pages, on both desktop and mobile devices. It is intended for important and
 *     urgent information; overuse may cause users to overlook the banner.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     The text supports plain text or HTML and is sanitized to prevent XSS attacks.
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The notice consists of the following elements:
 *   </span>
 * </p>
 *
 * <ul>
 *   <li>
 *     <span class="b2-regular">
 *       A title, provided by the <code>title</code> prop (<code>string</code>), which is optional and defaults
 *       to <code>''</code>.
 *     </span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">
 *       A text, provided by the <code>text</code> prop (<code>string</code>), which is optional and defaults
 *       to <code>''</code>.
 *     </span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">
 *       A pictogram and a color determined by the <code>type</code> prop, which accepts one of the following
 *       values:
 *     </span>
 *     <ul>
 *       <li><code>'info'</code></li>
 *       <li><code>'warning'</code></li>
 *       <li><code>'alert'</code></li>
 *     </ul>
 *   </li>
 *   <li>
 *     <span class="b2-regular">
 *       An information icon.
 *     </span>
 *   </li>
 * </ul>
 */
const meta: Meta<AvNoticeProps> = {
  title: 'Components/Base/AvNotice',
  component: AvNotice,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    text: { control: 'text' },
    type: {
      control: 'radio',
      options: ['info', 'warning', 'alert'],
      description: 'The type of notice',
    },
    global: { control: 'boolean' },
  },
  args: {
    title: 'Attention',
    text: 'Please <b>read carefully</b> the instructions.',
    type: 'warning',
    global: false,
  },
}

export default meta

const Template: StoryFn<AvNoticeProps> = args => ({
  components: { AvNotice },
  setup () {
    return { args }
  },
  template: `<AvNotice v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {}

export const InfoNotice = Template.bind({})
InfoNotice.args = {
  title: 'Information',
  text: 'This is an <b>informative message</b> with bolded parts.',
  type: 'info',
}

export const AlertNotice = Template.bind({})
AlertNotice.args = {
  title: 'Critical alert',
  text: '<b>Immediate action</b> is required.',
  type: 'alert',
}

export const WithoutTitle = Template.bind({})
WithoutTitle.args = {
  title: undefined,
  text: 'This is an informative message <b>without title</b> and you must pay attention to it.',
  type: 'info',
}

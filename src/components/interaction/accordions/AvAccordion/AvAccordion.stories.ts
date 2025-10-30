import type { Meta, StoryFn } from '@storybook/vue3'
import AvAccordion, { type AvAccordionProps } from '@/components/interaction/accordions/AvAccordion/AvAccordion.vue'

/**
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvAccordion</code> allows users to show and hide sections of content presented on a page.
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <p>
 *   <span class="b2-regular">An accordion consists of the following elements:</span>
 * </p>
 *
 * <ul>
 *   <li><span class="b2-regular">a header (<code>title</code> prop, of type <code>string</code>), corresponding to the section title - mandatory.</span></li>
 *   <li><span class="b2-regular">an icon, indicating when the panel is closed and when it is open.</span></li>
 *   <li><span class="b2-regular">a separator</span></li>
 *   <li><span class="b2-regular">a content area, hidden by default, that can contain any type of element; the default <code>slot</code> is designed for this.</span></li>
 * </ul>
 */
const meta: Meta<AvAccordionProps> = {
  title: 'Components/Interaction/Accordions/AvAccordion',
  component: AvAccordion,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', required: true },
    icon: { control: 'text' },
  },
  args: {
    title: 'Accordion 1',
    icon: 'mdi:home',
  },
}

export default meta

const Template: StoryFn<AvAccordionProps> = args => ({
  components: { AvAccordion },
  setup () {
    return { args }
  },
  template: `<AvAccordion v-bind="args"><span>Some content</span></AvAccordion>`,
})

export const Default = Template.bind({})
Default.args = {}

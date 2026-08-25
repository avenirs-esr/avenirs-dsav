import type { Meta, StoryFn } from '@storybook/vue3'
import AvSkipLinks, { type AvSkipLinksProps } from '@/components/navigation/AvSkipLinks/AvSkipLinks.vue'

/**
 * <h1 class="n1">Navigation - <code>AvSkipLinks</code></h1>
 *
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvSkipLinks</code> component provides skip links to improve navigation and accessibility.
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <ul>
 *   <li>
 *     <span class="b2-regular">
 *       The component is a <code>nav</code> element with the <code>av-skip-links</code> class.
 *     </span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">
 *       Props allow you to define the skip links with their labels (`label` prop) and target IDs (`id` prop).
 *     </span>
 *   </li>
 * </ul>
 */
const meta: Meta<AvSkipLinksProps> = {
  title: 'Components/Navigation/AvSkipLinks',
  component: AvSkipLinks,
  tags: ['autodocs'],
  argTypes: {
    skipLinks: {
      control: 'object',
    },
  },
  args: {
    skipLinks: [
      { label: 'Go to main content', id: 'main' },
      { label: 'Go to footer', id: 'footer' },
    ],
  },
}

export default meta

const Template: StoryFn<AvSkipLinksProps> = args => ({
  components: { AvSkipLinks },
  setup () {
    return { args }
  },
  template: `
    <AvSkipLinks v-bind="args" />
    <p>Press tab to navigate through the skip links.</p>
  `,
})

export const Default = Template.bind({})
Default.args = {}

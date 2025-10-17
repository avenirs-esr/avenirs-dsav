import type { Meta, StoryFn } from '@storybook/vue3'
import AvBreadcrumb, { type AvBreadcrumbProps } from '@/components/navigation/AvBreadcrumb/AvBreadcrumb.vue'

/**
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvBreadcrumb</code> guides users through the different levels of your application.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     The breadcrumb is a secondary navigation system that allows users to see where they are
 *     on the site they are visiting.
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <p>
 *   <span class="b2-regular">It consists of the following elements:</span>
 * </p>
 *
 * <ul>
 *   <li>
 *     <span class="b2-regular">
 *       A link to the root of the site (home page) — <strong>mandatory</strong>.
 *     </span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">
 *       Links to pages separating the root of the site from the current page —
 *       <strong>mandatory</strong> if the site hierarchy has more than one level.
 *     </span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">
 *       The current page, the only non-clickable element — <strong>mandatory</strong>.
 *     </span>
 *   </li>
 * </ul>
 */
const meta: Meta<AvBreadcrumbProps> = {
  title: 'Components/Navigation/AvBreadcrumb',
  component: AvBreadcrumb,
  tags: ['autodocs'],
  argTypes: {
    navigationLabel: { control: 'text' },
    showBreadcrumbLabel: { control: 'text' },
  },
  args: {
    links: [
      {
        text: 'Home',
        to: '#home',
      },
      {
        text: 'Second level',
        to: '#second-level',
      },
      {
        text: 'Current level',
      },
    ],
  },
}

export default meta

const Template: StoryFn<AvBreadcrumbProps> = args => ({
  components: { AvBreadcrumb },
  setup () {
    return { args }
  },
  template: `<AvBreadcrumb v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {}

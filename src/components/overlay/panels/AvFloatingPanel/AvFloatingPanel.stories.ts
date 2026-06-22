import type { Meta, StoryFn } from '@storybook/vue3'
import AvFloatingPanel, { type AvFloatingPanelProps } from '@/components/overlay/panels/AvFloatingPanel/AvFloatingPanel.vue'
import { MDI_ICONS } from '@/tokens'

/**
 * <h1 class="n1">Floating Panel - <code>AvFloatingPanel</code></h1>
 *
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvFloatingPanel</code> component is a fixed panel anchored at the bottom-right
 *     of the viewport.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     It wraps an <code>AvCard</code> in collapsible mode and is intended for contextual content
 *     that must remain available without interrupting the user's current page.
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <ul>
 *   <li>
 *     <span class="b2-regular">
 *       A fixed container positioned in the bottom-right corner of the viewport.
 *     </span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">
 *       A header area containing an icon and a title.
 *     </span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">
 *       An optional subtitle displayed on the same header line.
 *     </span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">
 *       A collapsible <code>AvCard</code> used to render the panel body.
 *     </span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">
 *       A <code>default</code> slot used to display the panel content.
 *     </span>
 *   </li>
 * </ul>
 */
const meta: Meta<AvFloatingPanelProps> = {
  title: 'Components/Overlay/FloatingPanel/AvFloatingPanel',
  component: AvFloatingPanel,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    icon: { control: 'text' },
    defaultCollapsed: { control: 'boolean' },
    width: { control: 'text' },
    collapseLabel: { control: 'text' },
    expandLabel: { control: 'text' },
  },
  args: {
    title: 'Contextual help',
    subtitle: '',
    icon: MDI_ICONS.INFORMATION_OUTLINE,
    defaultCollapsed: true,
    width: 'var(--dimension-8xl)',
    collapseLabel: 'Collapse panel',
    expandLabel: 'Expand panel',
  },
  parameters: {
    docs: {
      story: {
        height: '28rem',
      },
    },
    layout: 'fullscreen',
  },
}

export default meta

const Template: StoryFn<AvFloatingPanelProps> = args => ({
  components: { AvFloatingPanel },
  setup () {
    return { args, MDI_ICONS }
  },
  template: `
    <AvFloatingPanel v-bind="args">
      <ul style="display: flex; flex-direction: column; gap: var(--spacing-sm); margin: 0; list-style: none;">
        <li class="b3-regular">You need to submit your application on 01/06/2026</li>
        <li class="b3-regular">Interview scheduled on 10/06/2026</li>
        <li class="b3-regular">Complete file</li>
      </ul>
    </AvFloatingPanel>
  `,
})

export const Default = Template.bind({})

export const Expanded = Template.bind({})
Expanded.args = {
  defaultCollapsed: false,
}

export const WithSubtitle = Template.bind({})
WithSubtitle.args = {
  title: 'Project overview',
  subtitle: 'Updated 2 minutes ago',
}

export const WithSubtitleAndFitContent = Template.bind({})
WithSubtitleAndFitContent.args = {
  title: 'Project overview',
  subtitle: 'Updated 2 minutes ago',
  width: 'fit-content'
}

export const WithouIcon = Template.bind({})
WithouIcon.args = {
  icon: undefined,
}

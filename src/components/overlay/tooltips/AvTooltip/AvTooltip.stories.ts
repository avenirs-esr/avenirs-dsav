import type { Meta, StoryFn } from '@storybook/vue3'
import AvIcon from '@/components/base/AvIcon/AvIcon.vue'
import AvTooltip, { type AvTooltipProps } from '@/components/overlay/tooltips/AvTooltip/AvTooltip.vue'

/**
 * <h1 class="n1">Tooltips - <code>AvTooltip</code></h1>
 *
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvTooltip</code> component replaces the native <code>title</code> attribute with a custom tooltip
 *     that can be styled and positioned consistently with the DSAV design system.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     It appears on hover and keyboard focus, making it a more accessible and consistent alternative to the browser
 *     default tooltip.
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <ul>
 *   <li>
 *     <span class="b2-regular">
 *       A trigger element provided via the <code>default</code> slot.
 *     </span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">
 *       A tooltip content element displayed on hover or focus.
 *     </span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">
 *       The tooltip content is defined through the <code>content</code> prop.
 *     </span>
 *   </li>
 * </ul>
 */
const meta: Meta<AvTooltipProps & { justify: 'start' | 'center' | 'end' }> = {
  title: 'Components/Overlay/Tooltips/AvTooltip',
  component: AvTooltip,
  tags: ['autodocs'],
  argTypes: {
    content: {
      type: { name: 'string', required: true },
      control: 'text',
    },
    disabled: { control: 'boolean' },
    forceFocusable: { control: 'boolean' },
    justify: {
      control: { type: 'radio' },
      options: ['start', 'center', 'end'],
      description: 'Storybook prop for demonstration purposes, allowing to adjust the trigger alignment within the container.',
    },
  },
  args: {
    content: 'Tooltip with some long text to demonstrate the max width and wrapping behavior of the tooltip content. Reduce the window width and scroll to see how it behaves on smaller screens and near edges.',
    disabled: false,
    forceFocusable: true,
    justify: 'center',
  },
}

export default meta

const Template: StoryFn<AvTooltipProps & { justify: 'start' | 'center' | 'end' }> = args => ({
  components: { AvTooltip, AvIcon },
  setup () {
    const justifyClass = computed(() => `av-justify-${args.justify}`)
    const tooltipArgs = computed(() => ({
      content: args.content,
      disabled: args.disabled,
      forceFocusable: args.forceFocusable,
    }))

    return { tooltipArgs, justifyClass }
  },
  template: `
    <div style="height: 420px;">
      <div :class="['av-row', 'av-w-full', justifyClass, 'av-pt-xl']">
        <AvTooltip v-bind="tooltipArgs">
          <AvIcon name="mdi:information-outline" :size="3" />
        </AvTooltip>
      </div>
    </div>
  `,
})

export const Default = Template.bind({})
Default.args = {}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}

export const JustifyLeft = Template.bind({})
JustifyLeft.args = {
  justify: 'start',
}

export const JustifyCenter = Template.bind({})
JustifyCenter.args = {
  justify: 'center',
}

export const JustifyRight = Template.bind({})
JustifyRight.args = {
  justify: 'end',
}

export const ShortContent = Template.bind({})
ShortContent.args = {
  content: 'Quick hint',
}

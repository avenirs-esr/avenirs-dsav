import type { Meta, StoryFn } from '@storybook/vue3'
import AvIcon, { type AvIconProps } from '@/components/base/AvIcon/AvIcon.vue'
import { MDI_ICONS } from '@/tokens'
import { iconMapping, iconOptions } from '@/utils/storybook'

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
const meta: Meta<AvIconProps> = {
  title: 'Components/Base/AvIcon',
  component: AvIcon,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'select', options: iconOptions, mapping: iconMapping },
    size: {
      control: { type: 'range', min: 0.5, max: 5, step: 0.25 },
      description: 'Size in rem of the container and icon scale',
    },
    animation: {
      control: 'select',
      options: ['spin', 'wrench', 'pulse', 'spin-pulse', 'flash', 'float', 'ring', undefined],
    },
    speed: {
      control: 'radio',
      options: ['fast', 'slow', undefined],
    },
    flip: {
      control: 'radio',
      options: ['horizontal', 'vertical', 'both', undefined],
    },
    color: { control: 'color' },
    title: { control: 'text' },
  },
  args: {
    name: iconOptions[0],
    size: 2,
    animation: undefined,
    speed: undefined,
    flip: undefined,
    color: 'var(--text1)',
    title: 'Some icon',
  },
}

export default meta

const Template: StoryFn<AvIconProps> = args => ({
  components: { AvIcon },
  setup () {
    return { args }
  },
  template: `<AvIcon v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {}

export const Animated = Template.bind({})
Animated.args = {
  name: MDI_ICONS.LOADING,
  animation: 'spin',
  speed: 'fast',
  title: 'Loading',
}

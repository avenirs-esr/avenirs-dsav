import type { Meta, StoryFn } from '@storybook/vue3'
import AvIcon, { type AvIconProps } from '@/components/base/AvIcon/AvIcon.vue'
import { MDI_ICONS } from '@/tokens'
import { iconMapping, iconOptions } from '@/utils/storybook'

/**
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvIcon</code> component places an <code>Icon</code>
 *     (see <a href="https://iconify.design/docs/icon-components/vue/" target="_blank">Icon component from Iconify</a>)
 *     in a square <code>div</code> of configurable size.
 *     It is a Vue.js component for displaying icons with a wide range of customization options,
 *     including animations, colors, and sizes.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     It's designed to be flexible and performant, with support for various display options,
 *     flip options, and accessible titles.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     It has exactly the same API as <code>OhVueIcon</code>, and uses <code>@iconify/vue</code> under the hood.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     <strong>⚠️ Icon names must be those from </strong>
 *     <a href="https://icon-sets.iconify.design/" target="_blank" rel="noopener noreferrer">Iconify-vue</a>
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The icon is composed of a square <code>div</code> of configurable size containing the <code>Icon</code> component.
 *   </span>
 * </p>
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

import type { Meta, StoryFn } from '@storybook/vue3'
import AvSearchBar, { type AvSearchBarProps } from '@/components/interaction/inputs/AvSearchBar/AvSearchBar.vue'

/**
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvSearchBar</code> is a navigation system that allows users
 *     to quickly access content by searching for a keyword or phrase.
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <p>
 *   <span class="b2-regular">The search bar is composed by:</span>
 * </p>
 *
 * <ul>
 *   <li><span class="b2-regular">an input</span></li>
 *   <li><span class="b2-regular">a button</span></li>
 * </ul>
 */
const meta: Meta<AvSearchBarProps> = {
  title: 'Components/Interaction/Inputs/AvSearchBar',
  component: AvSearchBar,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    label: { conrtol: 'text' },
    modelValue: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' }
  },
  args: {
    id: crypto.randomUUID(),
    label: 'Search',
    modelValue: '',
    placeholder: 'Search...',
    disabled: false
  },
}

export default meta

const Template: StoryFn<AvSearchBarProps> = args => ({
  components: { AvSearchBar },
  setup () {
    return { args }
  },
  template: `<AvSearchBar v-bind="args" v-model="args.modelValue" />`,
})

export const Default = Template.bind({})
Default.args = {}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true
}

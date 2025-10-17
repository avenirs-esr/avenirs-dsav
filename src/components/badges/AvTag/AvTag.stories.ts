import type { Meta, StoryFn } from '@storybook/vue3'
import AvTag, { type AvTagProps } from '@/components/badges/AvTag/AvTag.vue'

/**
 * <h1 class="n1">Tags - <code>AvTag</code></h1>
 *
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvTag</code> categorizes, classifies, and organizes content using keywords.
 *     They help users easily search for and find information.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     The tag can be used as a filter (for example, on a search results page). In this case, it can be:
 *   </span>
 * </p>
 *
 * <ul>
 *   <li>
 *     <span class="b2-regular">Activated as a filter to be selected or deselected.</span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">
 *       Deleted; serves as a reminder of a filter that has been checked in a sidebar or drop-down list.
 *     </span>
 *   </li>
 * </ul>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <p><span class="b2-regular">It consists of the following elements:</span></p>
 *
 * <ul>
 *   <li><span class="b2-regular">A mandatory label, using the <code>label</code> prop.</span></li>
 *   <li><span class="b2-regular">An optional icon, using an <code>@iconify/vue</code> icon name.</span></li>
 * </ul>
 */
const meta: Meta<AvTagProps> = {
  title: 'Components/Badges/AvTag',
  component: AvTag,
  tags: ['autodocs'],
  argTypes: {
    label: {
      type: { name: 'string', required: true },
      control: 'text',
    },
    link: { control: 'text' },
    tagName: {
      control: 'select',
      options: ['p', 'button'],
    },
    icon: { control: 'text' },
    disabled: { control: 'boolean' },
    small: { control: 'boolean' },
    iconOnly: { control: 'boolean' },
    selectable: { control: 'boolean' },
    selected: { control: 'boolean' },
    value: { control: 'text' }
  },
  args: {
    label: 'A super tag',
    tagName: 'p',
    icon: 'mdi:home',
    disabled: false,
    small: false,
    iconOnly: false,
    selectable: false,
  },
}

export default meta

const Template: StoryFn<AvTagProps> = args => ({
  components: { AvTag },
  setup () {
    return { args }
  },
  template: `
    <AvTag v-bind="args" />
  `,
})

export const Default = Template.bind({})
Default.args = {}

export const Small = Template.bind({})
Small.args = { small: true }

export const WithLink = Template.bind({})
WithLink.args = { link: '#' }

export const IconOnly = Template.bind({})
IconOnly.args = { iconOnly: true }

export const WithoutIcon = Template.bind({})
WithoutIcon.args = { icon: undefined }

export const Selectable = Template.bind({})
Selectable.args = {
  selectable: true,
  tagName: 'button'
}

export const SelectableSelected = Template.bind({})
SelectableSelected.args = {
  selectable: true,
  selected: true,
  tagName: 'button'
}

export const SelectableUnselected = Template.bind({})
SelectableUnselected.args = {
  selectable: true,
  selected: false,
  tagName: 'button'
}

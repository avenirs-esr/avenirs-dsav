import type { Meta, StoryFn } from '@storybook/vue3'
import AvCheckboxListItem from '@/components/interaction/lists/AvCheckboxListItem/AvCheckboxListItem.vue'
import AvList, { type AvListProps } from '@/components/interaction/lists/AvList/AvList.vue'
import AvListItem from '@/components/interaction/lists/AvListItem/AvListItem.vue'
import { MDI_ICONS } from '@/tokens'

/**
 * <h1 class="n1">Lists - <code>AvList</code></h1>
 *
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The AvList component is a flexible and accessible container for displaying collections of items.
 *     It provides a structured way to present data in a vertical list format with extensive customization options for styling, sizing, and accessibility.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvList</code> component is designed to work seamlessly with <code>AvListItem</code> components, offering consistent spacing, styling, and interaction patterns.
 *     It supports various visual configurations including borders, dividers, different sizes, and full accessibility compliance.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     It features flexible sizing system for different use cases, optional visual enhancements, and full accessibility support with ARIA attributes
 *     while maintaining visual consistency with the design system's styling tokens.
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <p><span class="b2-regular">The list component consists of the following elements:</span></p>
 *
 * <ul>
 *   <li><span class="b2-regular">the <strong>Container:</strong> (mandatory) Main wrapper that contains all list items with proper semantic structure</span></li>
 *   <li><span class="b2-regular">the <strong>List Items:</strong> (mandatory) Individual items rendered within the list, typically <code>AvListItem</code> components</span></li>
 * </ul>
 *
 * <p><span class="b2-regular">The list integrates:</span></p>
 *
 * <ul>
 *   <li><span class="b2-regular">Flexible sizing system for different use cases</span></li>
 *   <li><span class="b2-regular">Optional visual enhancements (borders, dividers)</span></li>
 *   <li><span class="b2-regular">Full accessibility support with ARIA attributes</span></li>
 *   <li><span class="b2-regular">Customizable styling through CSS custom properties</span></li>
 * </ul>
 */
const meta: Meta<AvListProps> = {
  title: 'Components/Interaction/Lists/AvList',
  component: AvList,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xsmall', 'small', 'medium', 'large']
    },
    role: {
      control: 'select',
      options: ['list', 'menu', 'listbox', 'group']
    },
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    borderRadius: { control: 'text' },
    padding: { control: 'text' },
    bordered: { control: 'boolean' },
    divided: { control: 'boolean' },
    ariaLabel: { control: 'text' },
    ariaLabelledby: { control: 'text' },
    ariaDescribedby: { control: 'text' }
  },
  args: {
    size: 'small',
    role: 'list',
    backgroundColor: 'transparent',
    borderColor: 'var(--stroke)',
    borderRadius: '0',
    padding: '0',
    bordered: false,
    divided: false
  }
}

export default meta

const Template: StoryFn<AvListProps> = args => ({
  components: { AvList, AvListItem },
  setup () {
    return {
      args,
      MDI_ICONS
    }
  },
  template: `
    <AvList v-bind="args">
      <AvListItem title="First Item" />
      <AvListItem title="Second Item" />
      <AvListItem title="Third Item" />
    </AvList>
  `
})

export const Default = Template.bind({})
Default.args = {}

export const Bordered = Template.bind({})
Bordered.args = {
  size: 'medium',
  bordered: true,
  borderRadius: 'var(--radius-md)',
  backgroundColor: 'var(--surface-alt)'
}
Bordered.render = args => ({
  components: { AvList, AvListItem },
  setup () {
    return { args }
  },
  template: `
    <AvList v-bind="args">
      <AvListItem title="Dashboard" clickable />
      <AvListItem title="Analytics" clickable />
      <AvListItem title="Reports" clickable />
    </AvList>
  `
})

export const DividedList = Template.bind({})
DividedList.args = {
  size: 'large',
  divided: true,
  padding: 'var(--spacing-sm)'
}
DividedList.render = args => ({
  components: { AvList, AvListItem },
  setup () {
    return { args }
  },
  template: `
    <AvList v-bind="args">
      <AvListItem title="Item 1" description="Description for item 1" />
      <AvListItem title="Item 2" description="Description for item 2" />
      <AvListItem title="Item 3" description="Description for item 3" />
      <AvListItem title="Item 4" description="Description for item 4" />
    </AvList>
  `
})

export const CustomStyling = Template.bind({})
CustomStyling.args = {
  backgroundColor: '#f0f9ff',
  borderColor: '#0ea5e9',
  borderRadius: '1rem',
  bordered: true,
  divided: true,
  size: 'large',
  padding: '1rem',
  ariaLabel: 'Custom styled list'
}
CustomStyling.render = args => ({
  components: { AvList, AvListItem },
  setup () {
    return { args, MDI_ICONS }
  },
  template: `
    <AvList v-bind="args">
      <AvListItem title="Custom Item 1" :icon="MDI_ICONS.STARS" />
      <AvListItem title="Custom Item 2" :icon="MDI_ICONS.STAR_CHECK_OUTLINE" />
      <AvListItem title="Custom Item 3" :icon="MDI_ICONS.STAR_SHOOTING_OUTLINE" />
    </AvList>
  `
})

export const SmallSize = Template.bind({})
SmallSize.args = {
  size: 'small'
}

export const MediumSize = Template.bind({})
MediumSize.args = {
  size: 'medium'
}

export const LargeSize = Template.bind({})
LargeSize.args = {
  size: 'large'
}

const TemplateCheckboxList: StoryFn<AvListProps> = args => ({
  components: { AvList, AvCheckboxListItem },
  setup () {
    const model = ref<(string | number)[]>([])

    return {
      args,
      model,
      MDI_ICONS
    }
  },
  template: `
    <AvList v-bind="args">
      <AvCheckboxListItem v-model="model" list-id="checkbox-list" id="first-item" label="First Item" />
      <AvCheckboxListItem v-model="model" list-id="checkbox-list" id="second-item" label="Second Item" :icon="MDI_ICONS.STAR" />
      <AvCheckboxListItem v-model="model" list-id="checkbox-list" id="third-item" label="Third Item (disabled)" :disabled="true" />
    </AvList>
  `
})

export const CheckboxList = TemplateCheckboxList.bind({})
CheckboxList.args = {
  size: 'xsmall',
  bordered: true,
  borderRadius: 'var(--radius-md)',
  backgroundColor: 'var(--surface-alt)'
}

const TemplateCheckboxListCustom: StoryFn<AvListProps> = args => ({
  components: { AvList, AvCheckboxListItem },
  setup () {
    const model = ref<(string | number)[]>([])

    return {
      args,
      model,
      MDI_ICONS
    }
  },
  template: `
    <AvList v-bind="args">
      <AvCheckboxListItem v-model="model" list-id="checkbox-list" id="first-item">
        <span class="b2-bold">Custom item <span class="caption-light">with caption light description</span></span>
      </AvCheckboxListItem>
      <AvCheckboxListItem v-model="model" list-id="checkbox-list" id="second-item" label="Basic item with icon" :icon="MDI_ICONS.STAR" />
      <AvCheckboxListItem v-model="model" list-id="checkbox-list" id="third-item" :icon="MDI_ICONS.STAR">
        <div class="av-col"><span>Custom item on two lines</span><span>and with icon in props</span></div>
      </AvCheckboxListItem>
    </AvList>
  `
})

export const CheckboxListCustomItems = TemplateCheckboxListCustom.bind({})
CheckboxListCustomItems.args = {
  size: 'xsmall',
  bordered: true,
  borderRadius: 'var(--radius-md)',
  backgroundColor: 'var(--surface-alt)'
}

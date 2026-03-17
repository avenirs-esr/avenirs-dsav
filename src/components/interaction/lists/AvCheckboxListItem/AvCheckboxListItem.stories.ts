import type { Meta, StoryFn } from '@storybook/vue3'
import AvCheckboxListItem, { type AvCheckboxListItemProps } from '@/components/interaction/lists/AvCheckboxListItem/AvCheckboxListItem.vue'
import AvList from '@/components/interaction/lists/AvList/AvList.vue'
import { MDI_ICONS } from '@/tokens'
import { iconMappingWithDataUrl, iconOptionsWithDataUrl } from '@/utils/storybook'

/**
 * <h1 class="n1">Lists - <code>AvCheckboxListItem</code></h1>
 *
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvCheckboxListItem</code> component represents an individual checkbox item within a list container.
 *     It provides a flexible and accessible way to display content with optional icons, titles, descriptions,
 *     and interactive capabilities while maintaining consistent styling and behavior patterns.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     It is designed to work seamlessly within <code>AvList</code> containers, offering extensive customization
 *     for various use cases such as navigation menus, content lists, action items, and interactive elements.
 *     It ensures full accessibility compliance with proper ARIA attributes and keyboard navigation.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     The component supports multiple interaction states (hover, focus, active, disabled, selected),
 *     a flexible content structure with slots, and dynamic tag rendering for different semantic contexts,
 *     while maintaining visual consistency with the design system.
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <ul>
 *   <li>
 *     <span class="b2-regular">
 *       The <code>AvListItem</code> wrapper.
 *     </span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">
 *       An optional icon displayed between the checkbox and the content.
 *     </span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">
 *       A mandatory content area containing the label and/or custom content.
 *     </span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">
 *       An optional custom content slot allowing insertion of any custom elements within the content area.
 *     </span>
 *   </li>
 * </ul>
 *
 * <p>
 *   <span class="b2-regular">
 *     The component integrates full accessibility support (ARIA attributes and keyboard navigation),
 *     comprehensive interaction states, and a flexible content structure with icon, label, and slot support.
 *   </span>
 * </p>
 */
const meta: Meta<AvCheckboxListItemProps> = {
  title: 'Components/Interaction/Lists/AvCheckboxListItem',
  component: AvCheckboxListItem,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    listId: { control: 'text' },
    label: { control: 'text' },
    icon: {
      control: 'select',
      options: ['', ...iconOptionsWithDataUrl],
      mapping: {
        '': '',
        ...iconMappingWithDataUrl,
      },
    },
    disabled: { control: 'boolean' },
    ariaLabel: { control: 'text' },
    ariaDescribedby: { control: 'text' }
  },
  args: {
    id: 'checkbox-list-item',
    listId: 'checkbox-list',
  }
}

export default meta

const Template: StoryFn<AvCheckboxListItemProps> = args => ({
  components: { AvList, AvCheckboxListItem },
  setup () {
    const selected = ref<string[]>([])
    return {
      args,
      selected,
      MDI_ICONS
    }
  },
  template: `
    <div style="max-width: 20rem;">
      <AvList>
        <AvCheckboxListItem v-bind="args" v-model="selected" />
      </AvList>
    </div>
  `
})

export const Default = Template.bind({})
Default.args = {
  label: 'Default List Item',
  id: 'default-item',
  listId: 'default-list',
}

const TemplateCheckboxListItemCustom: StoryFn<AvCheckboxListItemProps> = args => ({
  components: { AvList, AvCheckboxListItem },
  setup () {
    const selected = ref<(string | number)[]>([])

    return {
      args,
      selected,
      MDI_ICONS
    }
  },
  template: `
    <AvList>
      <AvCheckboxListItem v-model="selected" v-bind="args">
        <span class="b2-bold">Custom item <span class="caption-light">with caption light description</span></span>
      </AvCheckboxListItem>
    </AvList>
  `
})

export const WithCustomContent = TemplateCheckboxListItemCustom.bind({})
WithCustomContent.args = {
  label: 'Custom Content',
  icon: MDI_ICONS.DOTS_VERTICAL,
  id: 'custom-content-item',
  listId: 'custom-content-list'
}

const TemplateAccessibility: StoryFn<AvCheckboxListItemProps> = args => ({
  components: { AvList, AvCheckboxListItem },
  setup () {
    const selected = ref<(string | number)[]>([])

    return {
      args,
      selected,
      MDI_ICONS
    }
  },
  template: `
    <div style="max-width: 20rem;">
      <AvList>
        <AvCheckboxListItem v-bind="args" v-model="selected" />
      </AvList>
      <p id="helper-text" style="margin-top: 0.5rem; font-size: 0.875rem; color: #6b7280;">
        This text provides additional context for screen readers
      </p>
    </div>
  `
})

export const WithAccessibility = TemplateAccessibility.bind({})
WithAccessibility.args = {
  label: 'Accessible Item',
  icon: MDI_ICONS.INFORMATION_OUTLINE,
  ariaLabel: 'Custom accessible label for screen readers',
  ariaDescribedby: 'helper-text',
  id: 'accessible-item',
  listId: 'accessible-list'
}

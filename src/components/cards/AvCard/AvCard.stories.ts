import type { Meta, StoryFn } from '@storybook/vue3'
import AvCard, { type AvCardProps } from '@/components/cards/AvCard/AvCard.vue'

/**
 * <h1 class="n1">Cards - <code>AvCard</code></h1>
 *
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvCard</code> component is used to create customizable, styled containers.
 *     It provides a structured layout with optional sections and can include collapsible behavior
 *     for advanced interactions.
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <ul>
 *   <li>
 *     <span class="b2-regular">A main wrapper <code>div</code>.</span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">A title area rendered through the <code>title</code> slot.</span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">A <code>default</code> slot for general content.</span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">A body section rendered through the <code>body</code> slot.</span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">A footer section rendered through the <code>footer</code> slot.</span>
 *   </li>
 * </ul>
 *
 * <p>
 *   <span class="b2-regular">
 *     When the <code>collapsible</code> prop is enabled, the card displays only the
 *     <code>title</code> slot along with a toggle button that expands or collapses
 *     the rest of the content.
 *   </span>
 * </p>
 */
const meta: Meta<AvCardProps> = {
  title: 'Components/Cards/AvCard',
  component: AvCard,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    titleBackground: { control: 'color' },
    titleHeight: { control: 'text' },
    collapsible: { control: 'boolean' },
    collapsed: { control: 'boolean' },
  },
  args: {
    backgroundColor: 'var(--card)',
    borderColor: 'var(--stroke)',
    titleBackground: 'var(--surface-background)',
    titleHeight: undefined,
    collapsible: false,
    collapsed: false
  },
}

export default meta

const Template: StoryFn<AvCardProps> = args => ({
  components: { AvCard },
  setup () {
    return { args }
  },
  template: `
    <AvCard v-bind="args">
      <template #title>
        <h3 class="n3" style="margin: 0;">Card Title</h3>
      </template>
      <template #body>
        <p class="b2-regular">This is the card body. You can put any content here.</p>
        <button>Click Me</button>
      </template>
      <template #footer>
        <small class="caption-regular">Footer content</small>
      </template>
    </AvCard>
  `,
})

const TemplateDefaultSlot: StoryFn<AvCardProps> = args => ({
  components: { AvCard },
  setup () {
    return { args }
  },
  template: `
    <AvCard v-bind="args">
      <p class="b2-regular">This card uses only the default slot.</p>
    </AvCard>
  `,
})

export const Default = Template.bind({})
Default.args = {}

export const WithCustomColors = Template.bind({})
WithCustomColors.args = {
  backgroundColor: 'var(--surface-background)',
  borderColor: 'var(--other-border-skill-card)',
  titleBackground: 'var(--light-background-primary1)',
  titleHeight: 'var(--dimension-5xl)',
}

export const WithOnlyDefaultSlot = TemplateDefaultSlot.bind({})
WithOnlyDefaultSlot.args = {
  backgroundColor: '#fff4e5',
  borderColor: '#ff9900',
}

export const Collapsible = Template.bind({})
Collapsible.args = {
  collapsible: true,
}

export const CollapsedByDefault = Template.bind({})
CollapsedByDefault.args = {
  collapsible: true,
  collapsed: true,
}

export const TitleOnly = Template.bind({})
TitleOnly.args = {
  titleOnly: true,
}

const TemplateDynamicTitle: StoryFn<AvCardProps> = args => ({
  components: { AvCard },
  setup () {
    return { args }
  },
  template: `
    <AvCard v-bind="args">
      <template #title="{ collapsed }">
        <h3 class="n3" style="margin: 0;">{{ collapsed ? 'Collapsed state' : 'Expanded state' }}</h3>
      </template>
      <template #body>
        <p class="b2-regular">Click the card title area or the toggle button to see the title text update.</p>
      </template>
    </AvCard>
  `,
})

export const CollapsibleWithDynamicTitle = TemplateDynamicTitle.bind({})
CollapsibleWithDynamicTitle.args = {
  collapsible: true,
  collapsed: false,
}

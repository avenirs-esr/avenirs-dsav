import type { Meta, StoryFn } from '@storybook/vue3'
import AvNavigation, { type AvNavigationProps } from '@/components/navigation/AvNavigation/AvNavigation.vue'

/**
 * <h1 class="n1">Navigation - <code>AvNavigation</code></h1>
 *
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvNavigation</code> is the main navigation therefore the central navigation system within a site.
 *     It guides the user through the site main and secondary sections.
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <p><span class="b2-regular">The navigation component can be used to create a navigation bar with different types of navigation items:</span></p>
 *
 * <ul>
 *   <li><span class="b2-regular">direct link</span></li>
 *   <li><span class="b2-regular">submenu</span></li>
 * </ul>
 */
const meta: Meta<AvNavigationProps> = {
  title: 'Components/Navigation/AvNavigation',
  component: AvNavigation,
  tags: ['autodocs'],
  args: {
    navItems: [
      {
        text: 'Direct link',
        to: '#home',
        icon: 'mdi:home-variant-outline',
      },
      {
        title: 'Menu 1',
        active: true,
        links: [
          { text: 'Link 1', to: '#menu-link1' },
          { text: 'Link 2', to: '#menu-link2' },
          { text: 'Link 3', to: '#menu-link3' },
          { text: 'Link 4', to: '#menu-link4' },
          { text: 'Link 5', to: '#menu-link5' },
        ]
      },
      {
        title: 'Menu 2',
        links: [
          { text: 'Link 1', to: '#menu-link1' },
          { text: 'Link 2', to: '#menu-link2' },
          { text: 'Link 3', to: '#menu-link3' },
          { text: 'Link 4', to: '#menu-link4' },
          { text: 'Link 5', to: '#menu-link5' },
        ]
      },
    ],
  },
}

export default meta

const Template: StoryFn<AvNavigationProps> = args => ({
  components: { AvNavigation },
  setup () {
    return { args }
  },
  template: `<AvNavigation v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  docs: {
    story: {
      height: '420px',
    },
  },
}

export const WithHighlight = Template.bind({})
WithHighlight.args = {
  navItems: [
    {
      text: 'Direct link',
      to: '#home',
      icon: 'mdi:home-variant-outline',
    },
    {
      title: 'Menu 1',
      active: true,
      links: [
        { text: 'Link 1', to: '#menu-link1' },
        { text: 'Link 2', to: '#menu-link2', highlight: true },
        { text: 'Link 3', to: '#menu-link3' },
        { text: 'Link 4', to: '#menu-link4' },
        { text: 'Link 5', to: '#menu-link5' },
      ]
    },
    {
      title: 'Menu 2',
      links: [
        { text: 'Link 1', to: '#menu-link1' },
        { text: 'Link 2', to: '#menu-link2' },
        { text: 'Link 3', to: '#menu-link3' },
        { text: 'Link 4', to: '#menu-link4' },
        { text: 'Link 5', to: '#menu-link5' },
      ]
    },
  ],
}
WithHighlight.parameters = {
  docs: {
    story: {
      height: '420px',
    },
  },
}

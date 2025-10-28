import type { Meta, StoryFn } from '@storybook/vue3'
import AvTab from '@/components/interaction/tabs/AvTab/AvTab.vue'
import AvTabs, { type AvTabsProps } from '@/components/interaction/tabs/AvTabs/AvTabs.vue'
import TabContent from '@/components/interaction/tabs/AvTabs/components/TabContent.vue'
import TabItem from '@/components/interaction/tabs/AvTabs/components/TabItem.vue'

/**
 * <h1 class="n1">Tabs - <code>AvTabs</code></h1>
 *
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvTabs</code> automatically manages the addition of <code>AvTab</code>
 *     according to the <code>AvTab</code> present in the <code>default</code> slot.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     The tab component allows users to navigate different content sections within the same page.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     The tab system helps to group different contents together in a limited space, and allows dense content to be divided into individually accessible sections to make reading easier for the user.
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <p><span class="b2-regular">Each tab consists of the following elements:</span></p>
 *
 * <ul>
 *   <li><span class="b2-regular">an icon to the left of the title - optional.</span></li>
 *   <li><span class="b2-regular">a clickable title - mandatory: displays the associated content zone.</span></li>
 * </ul>
 *
 * <p>
 *   <span class="b2-regular">
 *     If the number of tabs exceeds the width of the container, a horizontal scroll allows you to navigate between the different tabs.
 *   </span>
 * </p>
 */
const meta: Meta<AvTabsProps> = {
  title: 'Components/Interaction/Tabs/AvTabs',
  component: AvTabs,
  tags: ['autodocs'],
  argTypes: {
    ariaLabel: { control: 'text' },
    modelValue: {
      type: { name: 'number', required: true },
      control: 'number',
    },
    compact: { control: 'boolean' },
  },
  args: {
    ariaLabel: 'Tabs switcher',
    compact: false,
  },
}

export default meta

const Template: StoryFn<AvTabsProps> = args => ({
  components: { AvTabs, AvTab, TabContent, TabItem },
  setup () {
    const activeTab = ref(0)
    return { args, activeTab }
  },
  template: `
    <AvTabs v-bind="args" v-model="activeTab">
      <AvTab
        title="Tab 1"
        icon="mdi:format-list-bulleted"
      >
        <span>First tab content</span>
      </AvTab>
      <AvTab
        title="Tab 2"
        icon="mdi:calendar-month-outline"
      >
        <span>Second tab content</span>
      </AvTab>
    </AvTabs>
  `,
})

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  docs: {
    source: {
      code: `
        <AvTabs v-model="activeTab">
          <AvTab
            title="Tab 1"
            icon="mdi:format-list-bulleted"
          >
            <span>First tab content</span>
          </AvTab>
          <AvTab
            title="Tab 2"
            icon="mdi:calendar-month-outline"
          >
            <span>Second tab content</span>
          </AvTab>
        </AvTabs>
      `
    }
  }
}

export const Compact = Template.bind({})
Compact.args = {
  compact: true,
}
Compact.parameters = {
  docs: {
    source: {
      code: `
        <AvTabs compact v-model="activeTab">
          <AvTab
            title="Tab 1"
            icon="mdi:format-list-bulleted"
          >
            <span>First tab content</span>
          </AvTab>
          <AvTab
            title="Tab 2"
            icon="mdi:calendar-month-outline"
          >
            <span>Second tab content</span>
          </AvTab>
        </AvTabs>
      `
    }
  }
}

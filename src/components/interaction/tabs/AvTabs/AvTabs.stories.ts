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
    compact: { control: 'boolean' },
    lazyRender: { control: 'boolean' },
  },
  args: {
    ariaLabel: 'Tabs switcher',
    compact: false,
    lazyRender: true,
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

const TemplateWithDisabled: StoryFn<AvTabsProps & { disabledTab?: number }> = args => ({
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
        :disabled="args.disabledTab === 0"
      >
        <span>First tab content</span>
      </AvTab>
      <AvTab
        title="Tab 2"
        icon="mdi:calendar-month-outline"
        :disabled="args.disabledTab === 1"
      >
        <span>Second tab content</span>
      </AvTab>
      <AvTab
        title="Tab 3"
        icon="mdi:bell-notification"
        :disabled="args.disabledTab === 2"
      >
        <span>Third tab content</span>
      </AvTab>
    </AvTabs>
  `,
})

export const WithFirstTabDisabled = TemplateWithDisabled.bind({})
WithFirstTabDisabled.args = { disabledTab: 0 }

export const WithSecondTabDisabled = TemplateWithDisabled.bind({})
WithSecondTabDisabled.args = { disabledTab: 1 }

export const WithLastTabDisabled = TemplateWithDisabled.bind({})
WithLastTabDisabled.args = { disabledTab: 2 }

const TemplateWithLoading: StoryFn<AvTabsProps> = args => ({
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
        is-loading
      >
        <span>Second tab content</span>
      </AvTab>
      <AvTab
        title="Tab 3"
        icon="mdi:bell-notification"
      >
        <span>Third tab content</span>
      </AvTab>
    </AvTabs>
  `,
})

export const WithLoadingTab = TemplateWithLoading.bind({})
WithLoadingTab.args = {}
WithLoadingTab.parameters = {
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
            is-loading
          >
            <span>Second tab content</span>
          </AvTab>
          <AvTab
            title="Tab 3"
            icon="mdi:bell-notification"
          >
            <span>Third tab content</span>
          </AvTab>
        </AvTabs>
      `
    }
  }
}

export const CompactWithDisabledTab = TemplateWithDisabled.bind({})
CompactWithDisabledTab.args = {
  compact: true,
  disabledTab: 1,
}

export const CompactWithLoadingTab = TemplateWithLoading.bind({})
CompactWithLoadingTab.args = {
  compact: true,
}

import type { Meta, StoryFn } from '@storybook/vue3'
import type { AvTabsProps } from '@/components/interaction/tabs/AvTabs/AvTabs.vue'
import AvTab from '@/components/interaction/tabs/AvTab/AvTab.vue'
import AvTabs from '@/components/interaction/tabs/AvTabs/AvTabs.vue'
import TabContent from '@/components/interaction/tabs/AvTabs/components/TabContent.vue'
import TabItem from '@/components/interaction/tabs/AvTabs/components/TabItem.vue'
import { MDI_ICONS, MS_ICONS } from '@/tokens'

/**
 * <h1 class="n1">Tabs - <code>AvTabs</code></h1>
 *
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvTabs</code> component automatically manages the addition of <code>AvTab</code> components
 *     provided through its <code>default</code> slot.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     It supports both statically declared tabs and dynamically generated tabs using directives such as
 *     <code>v-for</code>.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     The tab system allows users to navigate between different content sections within the same page.
 *     Individual <code>AvTab</code> entries can be disabled, display a loading state, and provide a
 *     <code>disabledTooltip</code> message; see the <code>AvTab</code> props.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     Tabs help group different content sections within a limited space. This allows dense content to be
 *     divided into individually accessible sections, making it easier to read.
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     Each tab consists of the following elements:
 *   </span>
 * </p>
 *
 * <ul>
 *   <li>
 *     <span class="b2-regular">
 *       An optional icon to the left of the title.
 *     </span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">
 *       A mandatory, clickable title that displays the associated content section.
 *     </span>
 *   </li>
 * </ul>
 *
 * <p>
 *   <span class="b2-regular">
 *     If the number of tabs exceeds the width of the container, horizontal scrolling allows users to
 *     navigate between them.
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
        disabled-tooltip="This tab is disabled"
      >
        <span>First tab content</span>
      </AvTab>
      <AvTab
        title="Tab 2"
        icon="mdi:calendar-month-outline"
        :disabled="args.disabledTab === 1"
        disabled-tooltip="This tab is disabled"
      >
        <span>Second tab content</span>
      </AvTab>
      <AvTab
        title="Tab 3"
        icon="mdi:bell-notification"
        :disabled="args.disabledTab === 2"
        disabled-tooltip="This tab is disabled"
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

const TemplateWithDynamicTabs: StoryFn<AvTabsProps> = args => ({
  components: { AvTabs, AvTab, MDI_ICONS, MS_ICONS },
  setup () {
    const activeTab = ref(0)

    const tabs = [
      {
        title: 'National tools',
        icon: MS_ICONS.GLOBE_LOCATION_PIN_ROUNDED,
        content: 'National tools content',
      },
      {
        title: 'Regional tools',
        icon: MDI_ICONS.LAND_PLOTS_MARKER,
        content: 'Regional tools content',
      },
      {
        title: 'Local tools',
        icon: MDI_ICONS.OFFICE_BUILDING_MARKER_OUTLINE,
        content: 'Local tools content',
      },
    ]

    return { args, activeTab, tabs }
  },
  template: `
    <AvTabs v-bind="args" v-model="activeTab">
      <AvTab
        v-for="tab in tabs"
        :key="tab.title"
        :title="tab.title"
        :icon="tab.icon"
      >
        <span>{{ tab.content }}</span>
      </AvTab>
    </AvTabs>
  `,
})

export const WithDynamicTabs = TemplateWithDynamicTabs.bind({})
WithDynamicTabs.args = {}

import type { Meta, StoryFn } from '@storybook/vue3'
import AvHeader, { type AvHeaderProps } from '@/components/header/AvHeader/AvHeader.vue'
import AvButton from '@/components/interaction/buttons/AvButton/AvButton.vue'

/**
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvHeader</code> component is an ultra-flexible header component. It integrates a search bar and quick links.
 *     It also allows the addition of a main navigation in the <code>mainnav</code> slot and a language selector via the <code>language-selector</code> prop.
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <p>
 *   <span class="b2-regular">The header consists of:</span>
 * </p>
 *
 * <ul>
 *   <li><span class="b2-regular">the Cofolio brand block.</span></li>
 *   <li><span class="b2-regular">the service name.</span></li>
 *   <li><span class="b2-regular">a baseline (description) below the site name.</span></li>
 *   <li><span class="b2-regular">an optional functional section - offering quick access and/or a search bar and/or a language selector - adapted to the specific needs of each site.</span></li>
 * </ul>
 */
const meta: Meta<AvHeaderProps> = {
  title: 'Components/Header/AvHeader',
  component: AvHeader,
  tags: ['autodocs'],
  argTypes: {
    serviceTitle: { control: false },
    homeTo: { control: false },
    modelValue: { control: false },
    placeholder: { control: false },
    quickLinks: { control: false },
    languageSelector: { control: false },
    searchLabel: { control: false },
    quickLinksAriaLabel: { control: false },
    showSearch: { control: false },
    showSearchLabel: { control: false },
    menuLabel: { control: false },
    homeLabel: { control: false },
  },
  args: {
    serviceTitle: 'Student Cofolio',
    homeTo: '#',
    modelValue: '',
    placeholder: 'Rechercher...',
    quickLinks: [],
    searchLabel: 'Recherche',
    quickLinksAriaLabel: 'Menu secondaire',
    showSearchLabel: 'Recherche',
    menuLabel: 'Menu',
    homeLabel: 'Accueil',
    showSearch: true,
    languageSelector: {
      id: 'language-selector',
      languages: [
        { label: 'Français', codeIso: 'fr' },
        { label: 'English', codeIso: 'en' },
        { label: 'Español', codeIso: 'es' },
      ],
      currentLanguage: 'en',
    }
  },
  parameters: {
    docs: {
      story: {
        height: '30rem',
      },
    },
  }
}

export default meta

const Template: StoryFn<AvHeaderProps> = args => ({
  components: { AvHeader, AvButton },
  setup () {
    return { args }
  },
  template: `
    <AvHeader v-bind="args">
      <template #before-quick-links>
        <ul class="av-btns-group av-list-reset">
          <li class="demo-display-none">
            <AvButton
              label="Mailbox"
              icon="mdi:chat-bubble-outline"
            />
          </li>
          <li>
            <AvButton 
              label="J. Moulin"
              icon="mdi:account-circle-outline"
            />
          </li>
        </ul>
      </template>
      <template #serviceDescription>
        <AvButton
          label="Switch universe"
          icon="mdi:swap-horizontal"
        />
      </template>
      <template #mainnav>
        <AvButton
          label="Navigation link 1"
          icon="mdi:home-variant-outline"
        />
      </template>
    </AvHeader>
  `,
})

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  docs: {
    source: {
      code: `
        <AvHeader
          closeMenuModalLabel="Fermer"
          homeLabel="Accueil"
          homeTo="#"
          menuLabel="Menu"
          menuModalLabel="Menu"
          placeholder="Rechercher..."
          :quickLinks="[]"
          quickLinksAriaLabel="Menu secondaire"
          searchbarId="searchbar-header"
          searchLabel="Recherche"
          serviceTitle="Student Cofolio"
          showSearch
          showSearchLabel="Recherche"
        >
          <template #before-quick-links>
            <ul class="av-btns-group">
              <li>
                <AvButton
                  label="Mailbox"
                  icon="mdi:chat-bubble-outline"
                />
              </li>
              <li>
                <AvButton
                  label="Notifications"
                  icon="mdi:bell-notification"
                />
              </li>
              <li>
                <AvButton 
                  label="J. Moulin"
                  icon="mdi:account-circle-outline"
                />
              </li>
            </ul>
          </template>
          <template #serviceDescription>
            <AvButton
              label="Switch universe"
              icon="mdi:swap-horizontal"
            />
          </template>
        </AvHeader>
      `,
    },
  },
}

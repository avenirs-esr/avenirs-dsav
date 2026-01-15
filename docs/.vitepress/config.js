import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Avenirs DSAV',
  description: 'Technical documentation of Avenir(s) design system',
  base: '/avenirs-dsav/',

  themeConfig: {
    logo: '/avenirs-esr-logo.png',
    outline: {
      level: [2, 4],
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/' },
      { text: 'Tokens', link: '/tokens/' },
      { text: 'Icons', link: '/icons/' },
      { text: 'DSAV CSS', link: '/styles/' },
      { text: 'Storybook', link: '/storybook/', target: '_blank' }
    ],
    sidebar: {
      '/': [
        { text: 'Home', link: '/' },
        {
          text: 'Components',
          link: '/components/',
          items: [
            {
              text: 'Badges',
              items: [
                { text: 'AvBadge', link: '/components/badges/AvBadge/AvBadge.md' },
                { text: 'AvTag', link: '/components/badges/AvTag/AvTag.md' },
              ],
              collapsed: true
            },
            {
              text: 'Base',
              items: [
                { text: 'AvFieldset', link: '/components/base/AvFieldset/AvFieldset.md' },
                { text: 'AvIcon', link: '/components/base/AvIcon/AvIcon.md' },
                { text: 'AvIconText', link: '/components/base/AvIconText/AvIconText.md' },
                { text: 'AvNotice', link: '/components/base/AvNotice/AvNotice.md' },
              ],
              collapsed: true
            },
            {
              text: 'Cards',
              items: [
                { text: 'AvCard', link: '/components/cards/AvCard/AvCard.md' },
              ],
              collapsed: true
            },
            {
              text: 'Feedback',
              items: [
                { text: 'AvAlert', link: '/components/feedback/AvAlert/AvAlert.md' },
                { text: 'AvToaster', link: '/components/feedback/AvToaster/AvToaster.md' },
              ],
              collapsed: true
            },
            {
              text: 'Header',
              items: [
                { text: 'AvHeader', link: '/components/header/AvHeader/AvHeader.md' },
                { text: 'AvHeaderMenuLinks', link: '/components/header/AvHeaderMenuLinks/AvHeaderMenuLinks.md' },
              ],
              collapsed: true
            },
            {
              text: 'Interaction',
              items: [
                {
                  text: 'Accordions',
                  items: [
                    { text: 'AvAccordion', link: '/components/interaction/accordions/AvAccordion/AvAccordion.md' },
                    { text: 'AvAccordionsGroup', link: '/components/interaction/accordions/AvAccordionsGroup/AvAccordionsGroup.md' },
                  ],
                  collapsed: true
                },
                {
                  text: 'Buttons',
                  items: [
                    { text: 'AvButton', link: '/components/interaction/buttons/AvButton/AvButton.md' },
                    { text: 'AvCancelConfirmButtons', link: '/components/interaction/buttons/AvCancelConfirmButtons/AvCancelConfirmButtons.md' },
                    { text: 'AvLanguageSelector', link: '/components/interaction/buttons/AvLanguageSelector/AvLanguageSelector.md' },
                    { text: 'AvRichButton', link: '/components/interaction/buttons/AvRichButton/AvRichButton.md' },
                  ]
                },
                {
                  text: 'Checkboxes',
                  items: [
                    { text: 'AvCheckbox', link: '/components/interaction/checkboxes/AvCheckbox/AvCheckbox.md' },
                    { text: 'AvCheckboxesGroup', link: '/components/interaction/checkboxes/AvCheckboxesGroup/AvCheckboxesGroup.md' },
                  ],
                  collapsed: true
                },
                {
                  text: 'Files',
                  items: [
                    { text: 'AvFileUpload', link: '/components/interaction/files/AvFileUpload/AvFileUpload.md' },
                  ],
                  collapsed: true
                },
                {
                  text: 'Inputs',
                  items: [
                    { text: 'AvInput', link: '/components/interaction/inputs/AvInput/AvInput.md' },
                    { text: 'AvPeriodInput', link: '/components/interaction/inputs/AvPeriodInput/AvPeriodInput.md' },
                    { text: 'AvSearchBar', link: '/components/interaction/inputs/AvSearchBar/AvSearchBar.md' },
                  ],
                  collapsed: true
                },
                {
                  text: 'Lists',
                  items: [
                    { text: 'AvList', link: '/components/interaction/lists/AvList/AvList.md' },
                    { text: 'AvListItem', link: '/components/interaction/lists/AvListItem/AvListItem.md' },
                  ],
                  collapsed: true
                },
                {
                  text: 'Pickers',
                  items: [
                    { text: 'AvPageSizePicker', link: '/components/interaction/pickers/AvPageSizePicker/AvPageSizePicker.md' },
                    { text: 'AvTagPicker', link: '/components/interaction/pickers/AvTagPicker/AvTagPicker.md' },
                  ],
                  collapsed: true
                },
                {
                  text: 'Radios',
                  items: [
                    { text: 'AvRadioButton', link: '/components/interaction/radios/AvRadioButton/AvRadioButton.md' },
                    { text: 'AvRadioButtonSet', link: '/components/interaction/radios/AvRadioButtonSet/AvRadioButtonSet.md' },
                  ],
                  collapsed: true
                },
                {
                  text: 'Selects',
                  items: [
                    { text: 'AvAutocomplete', link: '/components/interaction/selects/AvAutocomplete/AvAutocomplete.md' },
                    { text: 'AvMultiselect', link: '/components/interaction/selects/AvMultiselect/AvMultiselect.md' },
                    { text: 'AvSelect', link: '/components/interaction/selects/AvSelect/AvSelect.md' },
                  ],
                  collapsed: true
                },
                {
                  text: 'Tabs',
                  items: [
                    { text: 'AvTab', link: '/components/interaction/tabs/AvTab/AvTab.md' },
                    { text: 'AvTabs', link: '/components/interaction/tabs/AvTabs/AvTabs.md' },
                  ],
                  collapsed: true
                },
                {
                  text: 'Toggles',
                  items: [
                    { text: 'AvToggle', link: '/components/interaction/toggles/AvToggle/AvToggle.md' },
                  ],
                  collapsed: true
                },
              ],
              collapsed: true
            },
            {
              text: 'Navigation',
              items: [
                { text: 'AvBreadcrumb', link: '/components/navigation/AvBreadcrumb/AvBreadcrumb.md' },
                { text: 'AvNavigation', link: '/components/navigation/AvNavigation/AvNavigation.md' },
                { text: 'AvPagination', link: '/components/navigation/AvPagination/AvPagination.md' },
                { text: 'AvSideMenu', link: '/components/navigation/AvSideMenu/AvSideMenu.md' },
                { text: 'AvSideNavigation', link: '/components/navigation/AvSideNavigation/AvSideNavigation.md' },
                { text: 'AvStepper', link: '/components/navigation/AvStepper/AvStepper.md' },
              ],
              collapsed: true
            },
            {
              text: 'Overlay',
              items: [
                {
                  text: 'Drawers',
                  items: [
                    { text: 'AvDrawer', link: '/components/overlay/drawers/AvDrawer/AvDrawer.md' },
                  ],
                  collapsed: true
                },
                {
                  text: 'Dropdowns',
                  items: [
                    { text: 'AvDropdown', link: '/components/overlay/dropdowns/AvDropdown/AvDropdown.md' },
                  ],
                  collapsed: true
                },
                {
                  text: 'Modals',
                  items: [
                    { text: 'AvModal', link: '/components/overlay/modals/AvModal/AvModal.md' },
                  ],
                  collapsed: true
                },
                {
                  text: 'Popovers',
                  items: [
                    { text: 'AvPopover', link: '/components/overlay/popovers/AvPopover/AvPopover.md' },
                  ],
                  collapsed: true
                },
              ],
              collapsed: true
            },
          ],
          collapsed: true
        },
        { text: 'Tokens', link: '/tokens/' },
        { text: 'Icons', link: '/icons/' },
        {
          text: 'DSAV CSS',
          link: '/styles/',
          items: [
            { text: 'Layout', link: '/styles/utilities/_layout.md' },
            { text: 'Spacing', link: '/styles/utilities/_spacing.md' }
          ],
          collapsed: true
        },
        { text: 'SCSS Mixins', link: '/scss/' },
        { text: 'Storybook', link: '/storybook/', target: '_blank' },
      ]
    }
  },

  // Ajout du CSS personnalisé
  vite: {
    css: {
      preprocessorOptions: {
        css: './styles/custom.css'
      }
    }
  }
})

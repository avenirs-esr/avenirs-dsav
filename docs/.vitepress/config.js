import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Avenirs DSAV',
  description: 'Technical documentation of Avenir(s) design system',
  base: '/avenirs-dsav/',

  themeConfig: {
    logo: '/avenirs-esr-logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/' },
      { text: 'Tokens', link: '/tokens/' },
      { text: 'Icons', link: '/icons/' },
      { text: 'Storybook', link: '/storybook/' }
    ],
    sidebar: {
      '/components/': [
        {
          text: 'Badges',
          items: [
            { text: 'AvBadge', link: '/components/badges/AvBadge/AvBadge.md' },
            { text: 'AvTag', link: '/components/badges/AvTag/AvTag.md' },
          ]
        },
        {
          text: 'Base',
          items: [
            { text: 'AvIconText', link: '/components/base/AvIconText/AvIconText.md' },
            { text: 'AvNotice', link: '/components/base/AvNotice/AvNotice.md' },
            { text: 'AvVIcon', link: '/components/base/AvVIcon/AvVIcon.md' },
          ]
        },
        {
          text: 'Cards',
          items: [
            { text: 'AvCard', link: '/components/cards/AvCard/AvCard.md' },
          ]
        },
        {
          text: 'Feedback',
          items: [
            { text: 'AvAlert', link: '/components/feedback/AvAlert/AvAlert.md' },
            { text: 'AvToaster', link: '/components/feedback/AvToaster/AvToaster.md' },
          ]
        },
        {
          text: 'Header',
          items: [
            { text: 'AvHeader', link: '/components/header/AvHeader/AvHeader.md' },
            { text: 'AvHeaderMenuLinks', link: '/components/header/AvHeaderMenuLinks/AvHeaderMenuLinks.md' },
          ]
        },
        {
          text: 'Interaction',
          items: [
            {
              text: 'Accordions',
              items: [
                { text: 'AvAccordion', link: '/components/interaction/accordions/AvAccordion/AvAccordion.md' },
                { text: 'AvAccordionsGroup', link: '/components/interaction/accordions/AvAccordionsGroup/AvAccordionsGroup.md' },
              ]
            },
            {
              text: 'Buttons',
              items: [
                { text: 'AvButton', link: '/components/interaction/buttons/AvButton/AvButton.md' },
                { text: 'AvCancelConfirmButtons', link: '/components/interaction/buttons/AvCancelConfirmButtons/AvCancelConfirmButtons.md' },
                { text: 'AvRichButton', link: '/components/interaction/buttons/AvRichButton/AvRichButton.md' },
              ]
            },
            {
              text: 'Files',
              items: [
                { text: 'AvFileUpload', link: '/components/interaction/files/AvFileUpload/AvFileUpload.md' },
              ]
            },
            {
              text: 'Inputs',
              items: [
                { text: 'AvInput', link: '/components/interaction/inputs/AvInput/AvInput.md' },
              ]
            },
            {
              text: 'Lists',
              items: [
                { text: 'AvList', link: '/components/interaction/lists/AvList/AvList.md' },
                { text: 'AvListItem', link: '/components/interaction/lists/AvListItem/AvListItem.md' },
              ]
            },
            {
              text: 'Pickers',
              items: [
                { text: 'AvPageSizePicker', link: '/components/interaction/pickers/AvPageSizePicker/AvPageSizePicker.md' },
                { text: 'AvTagPicker', link: '/components/interaction/pickers/AvTagPicker/AvTagPicker.md' },
              ]
            },
            {
              text: 'Radios',
              items: [
                { text: 'AvRadioButton', link: '/components/interaction/radios/AvRadioButton/AvRadioButton.md' },
                { text: 'AvRadioButtonSet', link: '/components/interaction/radios/AvRadioButtonSet/AvRadioButtonSet.md' },
              ]
            },
            {
              text: 'Selects',
              items: [
                { text: 'AvAutocomplete', link: '/components/interaction/selects/AvAutocomplete/AvAutocomplete.md' },
                { text: 'AvMultiselect', link: '/components/interaction/selects/AvMultiselect/AvMultiselect.md' },
                { text: 'AvSelect', link: '/components/interaction/selects/AvSelect/AvSelect.md' },
              ]
            },
            {
              text: 'Tabs',
              items: [
                { text: 'AvTab', link: '/components/interaction/tabs/AvTab/AvTab.md' },
                { text: 'AvTabs', link: '/components/interaction/tabs/AvTabs/AvTabs.md' },
              ]
            },
            {
              text: 'Toggles',
              items: [
                { text: 'AvToggle', link: '/components/interaction/toggles/AvToggle/AvToggle.md' },
              ]
            },
          ]
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
          ]
        },
        {
          text: 'Overlay',
          items: [
            {
              text: 'Drawers',
              items: [
                { text: 'AvDrawer', link: '/components/interaction/drawers/AvDrawer/AvDrawer.md' },
              ]
            },
            {
              text: 'Modals',
              items: [
                { text: 'AvModal', link: '/components/interaction/modals/AvModal/AvModal.md' },
              ]
            },
            {
              text: 'Popovers',
              items: [
                { text: 'AvPopover', link: '/components/interaction/popovers/AvPopover/AvPopover.md' },
              ]
            },
          ]
        },
      ],
      '/': [
        { text: 'Home', link: '/' },
        { text: 'Components', link: '/components/' },
        { text: 'Tokens', link: '/tokens/' },
        { text: 'Icons', link: '/icons/' },
        { text: 'Storybook', link: '/storybook/' }
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

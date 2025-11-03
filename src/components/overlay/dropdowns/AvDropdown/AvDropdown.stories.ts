import type { Meta, StoryFn } from '@storybook/vue3'
import AvDropdown, { type AvDropdownProps } from '@/components/overlay/dropdowns/AvDropdown/AvDropdown.vue'
import { MDI_ICONS } from '@/tokens/icons'

/**
 * <h1 class="n1">Dropdowns - <code>AvDropdown</code></h1>
 *
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvDropdown</code> is a contextual menu component that displays a list of actionable items in a popover.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvDropdown</code> is built on top of <code>AvPopover</code> and <code>AvButton</code> components,
 *     providing a convenient way to create dropdown menus with customizable trigger buttons and menu items.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     Each menu item can have an optional icon and emits an event when clicked, making it perfect for settings menus,
 *     action lists, or contextual operations.
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <p><span class="b2-regular">The dropdown consists of:</span></p>
 *
 * <ul>
 *   <li>
 *     <span class="b2-regular">
 *       A trigger button - mandatory, configured via <code>trigger*</code> props;
 *     </span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">
 *       A list of menu items - mandatory, defined via the <code>items</code> prop, each with a name, label, and optional icon;
 *     </span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">
 *       A popover container - automatically managed, with customizable width and padding.
 *     </span>
 *   </li>
 * </ul>
 */
const meta: Meta<AvDropdownProps> = {
  title: 'Components/Overlay/Dropdowns/AvDropdown',
  component: AvDropdown,
  argTypes: {
    items: {
      control: 'object',
    },
    triggerAriaLabel: {
      control: 'text',
    },
    triggerIcon: { control: 'text' },
    triggerLabel: { control: 'text' },
    triggerVariant: {
      control: { type: 'radio' },
      options: ['DEFAULT', 'OUTLINED', 'FLAT'],
    },
    triggerSmall: { control: 'boolean' },
    width: { control: 'text' },
    padding: { control: 'text' },
    itemSmall: { control: 'boolean' },
    itemTheme: {
      control: { type: 'radio' },
      options: ['PRIMARY', 'SECONDARY'],
    },
    itemIconScale: { control: 'number' },
  },
  args: {
    items: [
      { name: 'edit', label: 'Edit', icon: MDI_ICONS.PENCIL_OUTLINE },
      { name: 'delete', label: 'Delete', icon: MDI_ICONS.TRASH_CAN_OUTLINE },
      { name: 'share', label: 'Share', icon: MDI_ICONS.LINK }
    ],
    triggerAriaLabel: 'Actions menu',
    triggerIcon: MDI_ICONS.DOTS_VERTICAL,
    triggerLabel: undefined,
    triggerVariant: 'OUTLINED',
    triggerSmall: true,
    width: '15rem',
    padding: 'var(--spacing-xs)',
    itemSmall: true,
    itemTheme: 'SECONDARY',
    itemIconScale: 1.3,
  },
}

export default meta

const Template: StoryFn<AvDropdownProps> = args => ({
  components: { AvDropdown },
  setup () {
    return { args, MDI_ICONS }
  },
  template: `<AvDropdown v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {}

export const WithLabel = Template.bind({})
WithLabel.args = {
  triggerLabel: 'Actions',
}

export const FlatTrigger = Template.bind({})
FlatTrigger.args = {
  triggerVariant: 'FLAT',
}

export const DefaultTrigger = Template.bind({})
DefaultTrigger.args = {
  triggerVariant: 'DEFAULT',
}

export const LargeTrigger = Template.bind({})
LargeTrigger.args = {
  triggerSmall: false,
}

export const WideMenu = Template.bind({})
WideMenu.args = {
  width: '20rem',
}

export const LargeItems = Template.bind({})
LargeItems.args = {
  itemSmall: false,
}

export const PrimaryItems = Template.bind({})
PrimaryItems.args = {
  itemTheme: 'PRIMARY',
}

export const WithoutIcons = Template.bind({})
WithoutIcons.args = {
  items: [
    { name: 'edit', label: 'Edit' },
    { name: 'delete', label: 'Delete' },
    { name: 'share', label: 'Share' }
  ],
}

export const SettingsMenu = Template.bind({})
SettingsMenu.args = {
  items: [
    { name: 'update', label: 'Modifier ma compétence', icon: MDI_ICONS.PENCIL_OUTLINE },
    { name: 'deleteAssociation', label: 'Supprimer une association', icon: MDI_ICONS.TRASH_CAN_OUTLINE },
    { name: 'delete', label: 'Supprimer ma compétence', icon: MDI_ICONS.TRASH_CAN_OUTLINE }
  ],
  triggerAriaLabel: 'Paramètres de la compétence déclarée',
}

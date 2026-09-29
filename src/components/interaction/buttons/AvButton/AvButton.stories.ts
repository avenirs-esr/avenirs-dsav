import type { Meta, StoryFn } from '@storybook/vue3'
import AvButton, { type AvButtonProps } from '@/components/interaction/buttons/AvButton/AvButton.vue'
import { iconMapping, iconOptions } from '@/utils/storybook'

/**
 * <h1 class="n1">Buttons - <code>AvButton</code></h1>
 *
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvButton</code> is an interaction element with an interface enabling the user to perform an action.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvButton</code> is an elegant, reusable Vue component designed to simplify the creation of custom buttons.
 *     It features adjustable sizes ('SM', 'MD', 'LG'), an optional icon and a click manager.
 *     It's easy to use, with the flexibility to adapt to different contexts.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     The button allows three variants (<code>DEFAULT</code> without border, <code>OUTLINED</code> with border
 *     and <code>FLAT</code> with filled background) and three themes
 *     (<code>PRIMARY</code> blue, <code>SECONDARY</code> grey and <code>TERTIARY</code> white).
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <p><span class="b2-regular">Buttons consist of :</span></p>
 *
 * <ul>
 *   <li>
 *     <span class="b2-regular">
 *       A label - mandatory, using the <code>label</code> prop, enables label display when <code>iconOnly</code> is <code>false</code>,
 *       also enables connection to <code>title</code> and <code>aria-label</code>;
 *     </span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">
 *       An icon, which can be modified (see available icons) - optional.
 *     </span>
 *   </li>
 * </ul>
 */
const meta: Meta<AvButtonProps> = {
  title: 'Components/Interaction/Buttons/AvButton',
  component: AvButton,
  argTypes: {
    label: {
      type: { name: 'string', required: true },
      control: 'text',
    },
    icon: { control: 'select', options: iconOptions, mapping: iconMapping },
    variant: {
      control: { type: 'radio' },
      options: ['DEFAULT', 'OUTLINED', 'FLAT'],
    },
    theme: {
      control: { type: 'radio' },
      options: ['PRIMARY', 'SECONDARY', 'TERTIARY'],
    },
    size: { control: { type: 'radio' }, options: ['SM', 'MD', 'LG'] },
    iconOnly: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    iconScale: { control: 'number' },
    noRadius: { control: 'boolean' },
    disabled: { control: 'boolean' },
    disabledTooltip: { control: 'text' },
    noSentenceCase: { control: 'boolean' },
    href: { control: 'text' },
    to: { control: 'text' }
  },
  args: {
    label: 'Click me',
    icon: '',
    variant: 'DEFAULT',
    theme: 'PRIMARY',
    size: 'MD',
    iconOnly: false,
    isLoading: false,
    iconScale: undefined,
    noRadius: false,
    disabled: false,
    disabledTooltip: undefined,
    noSentenceCase: false,
    href: undefined,
    to: undefined
  },
}

export default meta

const darkBackgroundDecorators = [
  () => ({
    template: `
      <div style="background: var(--dark-background-primary1); padding: 24px; display: inline-block;">
        <story />
      </div>
    `,
  }),
]

const Template: StoryFn<AvButtonProps> = args => ({
  components: { AvButton },
  setup () {
    return { args }
  },
  template: `<AvButton v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {}

export const Small = Template.bind({})
Small.args = {
  size: 'SM',
}

export const Large = Template.bind({})
Large.args = {
  size: 'LG',
}

const iconOnlyArgs: Partial<AvButtonProps> = {
  iconOnly: true,
  icon: 'mdi:home-variant-outline',
  label: 'Settings',
}

export const DefaultIconOnly = Template.bind({})
DefaultIconOnly.args = iconOnlyArgs

export const SmallIconOnly = Template.bind({})
SmallIconOnly.args = {
  ...iconOnlyArgs,
  size: 'SM',
}

export const LargeIconOnly = Template.bind({})
LargeIconOnly.args = {
  ...iconOnlyArgs,
  size: 'LG',
}

const isLoadingArgs: Partial<AvButtonProps> = {
  isLoading: true,
}

export const DefaultLoading = Template.bind({})
DefaultLoading.args = isLoadingArgs

export const SmallLoading = Template.bind({})
SmallLoading.args = {
  ...isLoadingArgs,
  ...isLoadingArgs,
  size: 'SM',
}

export const LargeLoading = Template.bind({})
LargeLoading.args = {
  ...isLoadingArgs,
  size: 'LG',
}

const disabledArgs: Partial<AvButtonProps> = {
  disabled: true,
}

export const DefaultDisabled = Template.bind({})
DefaultDisabled.args = disabledArgs

export const SmallDisabled = Template.bind({})
SmallDisabled.args = {
  ...disabledArgs,
  size: 'SM',
}

export const LargeDisabled = Template.bind({})
LargeDisabled.args = {
  ...disabledArgs,
  size: 'LG',
}

const disabledWithTooltipArgs: Partial<AvButtonProps> = {
  disabled: true,
  disabledTooltip: 'This action is not available yet',
}

export const DefaultDisabledWithTooltip = Template.bind({})
DefaultDisabledWithTooltip.args = disabledWithTooltipArgs

export const SmallDisabledWithTooltip = Template.bind({})
SmallDisabledWithTooltip.args = {
  ...disabledWithTooltipArgs,
  size: 'SM',
}

export const LargeDisabledWithTooltip = Template.bind({})
LargeDisabledWithTooltip.args = {
  ...disabledWithTooltipArgs,
  size: 'LG',
}

const noRadiusArgs: Partial<AvButtonProps> = {
  noRadius: true,
}

export const DefaultNoRadius = Template.bind({})
DefaultNoRadius.args = noRadiusArgs

export const SmallNoRadius = Template.bind({})
SmallNoRadius.args = {
  ...noRadiusArgs,
  size: 'SM',
}

export const LargeNoRadius = Template.bind({})
LargeNoRadius.args = {
  ...noRadiusArgs,
  size: 'LG',
}

const secondaryArgs: Partial<AvButtonProps> = {
  theme: 'SECONDARY',
}

export const DefaultSecondary = Template.bind({})
DefaultSecondary.args = secondaryArgs

export const SmallSecondary = Template.bind({})
SmallSecondary.args = {
  ...secondaryArgs,
  size: 'SM',
}

export const LargeSecondary = Template.bind({})
LargeSecondary.args = {
  ...secondaryArgs,
  size: 'LG',
}

const tertiaryOnDarkBackgroundArgs: Partial<AvButtonProps> = {
  theme: 'TERTIARY',
}

export const TertiaryOnDarkBackground = Template.bind({})
TertiaryOnDarkBackground.args = tertiaryOnDarkBackgroundArgs
TertiaryOnDarkBackground.decorators = darkBackgroundDecorators

export const SmallTertiaryOnDarkBackground = Template.bind({})
SmallTertiaryOnDarkBackground.args = {
  ...tertiaryOnDarkBackgroundArgs,
  size: 'SM',
}
SmallTertiaryOnDarkBackground.decorators = darkBackgroundDecorators

export const LargeTertiaryOnDarkBackground = Template.bind({})
LargeTertiaryOnDarkBackground.args = {
  ...tertiaryOnDarkBackgroundArgs,
  size: 'LG',
}
LargeTertiaryOnDarkBackground.decorators = darkBackgroundDecorators

const outlinedArgs: Partial<AvButtonProps> = {
  variant: 'OUTLINED',
}

export const Outlined = Template.bind({})
Outlined.args = outlinedArgs

export const SmallOutlined = Template.bind({})
SmallOutlined.args = {
  ...outlinedArgs,
  size: 'SM',
}

export const LargeOutlined = Template.bind({})
LargeOutlined.args = {
  ...outlinedArgs,
  size: 'LG',
}

const outlinedIconOnlyArgs: Partial<AvButtonProps> = {
  variant: 'OUTLINED',
  iconOnly: true,
  icon: 'mdi:home-variant-outline',
  label: 'Settings',
}

export const OutlinedIconOnly = Template.bind({})
OutlinedIconOnly.args = outlinedIconOnlyArgs

export const SmallOutlinedIconOnly = Template.bind({})
SmallOutlinedIconOnly.args = {
  ...outlinedIconOnlyArgs,
  size: 'SM',
}

export const LargeOutlinedIconOnly = Template.bind({})
LargeOutlinedIconOnly.args = {
  ...outlinedIconOnlyArgs,
  size: 'LG',
}

const outlinedLoadingArgs: Partial<AvButtonProps> = {
  variant: 'OUTLINED',
  isLoading: true,
}

export const OutlinedLoading = Template.bind({})
OutlinedLoading.args = outlinedLoadingArgs

export const SmallOutlinedLoading = Template.bind({})
SmallOutlinedLoading.args = {
  ...outlinedLoadingArgs,
  size: 'SM',
}

export const LargeOutlinedLoading = Template.bind({})
LargeOutlinedLoading.args = {
  ...outlinedLoadingArgs,
  size: 'LG',
}

const outlinedDisabledArgs: Partial<AvButtonProps> = {
  variant: 'OUTLINED',
  disabled: true,
}

export const OutlinedDisabled = Template.bind({})
OutlinedDisabled.args = outlinedDisabledArgs

export const SmallOutlinedDisabled = Template.bind({})
SmallOutlinedDisabled.args = {
  ...outlinedDisabledArgs,
  size: 'SM',
}

export const LargeOutlinedDisabled = Template.bind({})
LargeOutlinedDisabled.args = {
  ...outlinedDisabledArgs,
  size: 'LG',
}

const outlinedNoRadiusArgs: Partial<AvButtonProps> = {
  variant: 'OUTLINED',
  noRadius: true,
}

export const OutlinedNoRadius = Template.bind({})
OutlinedNoRadius.args = outlinedNoRadiusArgs

export const SmallOutlinedNoRadius = Template.bind({})
SmallOutlinedNoRadius.args = {
  ...outlinedNoRadiusArgs,
  size: 'SM',
}

export const LargeOutlinedNoRadius = Template.bind({})
LargeOutlinedNoRadius.args = {
  ...outlinedNoRadiusArgs,
  size: 'LG',
}

const outlinedSecondaryArgs: Partial<AvButtonProps> = {
  variant: 'OUTLINED',
  theme: 'SECONDARY',
}

export const OutlinedSecondary = Template.bind({})
OutlinedSecondary.args = outlinedSecondaryArgs

export const SmallOutlinedSecondary = Template.bind({})
SmallOutlinedSecondary.args = {
  ...outlinedSecondaryArgs,
  size: 'SM',
}

export const LargeOutlinedSecondary = Template.bind({})
LargeOutlinedSecondary.args = {
  ...outlinedSecondaryArgs,
  size: 'LG',
}

const outlinedTertiaryOnDarkBackgroundArgs: Partial<AvButtonProps> = {
  variant: 'OUTLINED',
  theme: 'TERTIARY',
}

export const OutlinedTertiaryOnDarkBackground = Template.bind({})
OutlinedTertiaryOnDarkBackground.args = outlinedTertiaryOnDarkBackgroundArgs
OutlinedTertiaryOnDarkBackground.decorators = darkBackgroundDecorators

export const SmallOutlinedTertiaryOnDarkBackground = Template.bind({})
SmallOutlinedTertiaryOnDarkBackground.args = {
  ...outlinedTertiaryOnDarkBackgroundArgs,
  size: 'SM',
}
SmallOutlinedTertiaryOnDarkBackground.decorators = darkBackgroundDecorators

export const LargeOutlinedTertiaryOnDarkBackground = Template.bind({})
LargeOutlinedTertiaryOnDarkBackground.args = {
  ...outlinedTertiaryOnDarkBackgroundArgs,
  size: 'LG',
}
LargeOutlinedTertiaryOnDarkBackground.decorators = darkBackgroundDecorators

const flatArgs: Partial<AvButtonProps> = {
  variant: 'FLAT',
}

export const Flat = Template.bind({})
Flat.args = flatArgs

export const SmallFlat = Template.bind({})
SmallFlat.args = {
  ...flatArgs,
  size: 'SM',
}

export const LargeFlat = Template.bind({})
LargeFlat.args = {
  ...flatArgs,
  size: 'LG',
}

const flatIconOnlyArgs: Partial<AvButtonProps> = {
  variant: 'FLAT',
  iconOnly: true,
  icon: 'mdi:home-variant-outline',
  label: 'Settings',
}

export const FlatIconOnly = Template.bind({})
FlatIconOnly.args = flatIconOnlyArgs

export const SmallFlatIconOnly = Template.bind({})
SmallFlatIconOnly.args = {
  ...flatIconOnlyArgs,
  size: 'SM',
}

export const LargeFlatIconOnly = Template.bind({})
LargeFlatIconOnly.args = {
  ...flatIconOnlyArgs,
  size: 'LG',
}

const flatLoadingArgs: Partial<AvButtonProps> = {
  variant: 'FLAT',
  isLoading: true,
}

export const FlatLoading = Template.bind({})
FlatLoading.args = flatLoadingArgs

export const SmallFlatLoading = Template.bind({})
SmallFlatLoading.args = {
  ...flatLoadingArgs,
  size: 'SM',
}

export const LargeFlatLoading = Template.bind({})
LargeFlatLoading.args = {
  ...flatLoadingArgs,
  size: 'LG',
}

const flatDisabledArgs: Partial<AvButtonProps> = {
  variant: 'FLAT',
  disabled: true,
}

export const FlatDisabled = Template.bind({})
FlatDisabled.args = flatDisabledArgs

export const SmallFlatDisabled = Template.bind({})
SmallFlatDisabled.args = {
  ...flatDisabledArgs,
  size: 'SM',
}

export const LargeFlatDisabled = Template.bind({})
LargeFlatDisabled.args = {
  ...flatDisabledArgs,
  size: 'LG',
}

const flatNoRadiusArgs: Partial<AvButtonProps> = {
  variant: 'FLAT',
  noRadius: true,
}

export const FlatNoRadius = Template.bind({})
FlatNoRadius.args = flatNoRadiusArgs

export const SmallFlatNoRadius = Template.bind({})
SmallFlatNoRadius.args = {
  ...flatNoRadiusArgs,
  size: 'SM',
}

export const LargeFlatNoRadius = Template.bind({})
LargeFlatNoRadius.args = {
  ...flatNoRadiusArgs,
  size: 'LG',
}

const flatSecondaryArgs: Partial<AvButtonProps> = {
  variant: 'FLAT',
  theme: 'SECONDARY',
}

export const FlatSecondary = Template.bind({})
FlatSecondary.args = flatSecondaryArgs

export const SmallFlatSecondary = Template.bind({})
SmallFlatSecondary.args = {
  ...flatSecondaryArgs,
  size: 'SM',
}

export const LargeFlatSecondary = Template.bind({})
LargeFlatSecondary.args = {
  ...flatSecondaryArgs,
  size: 'LG',
}

const flatTertiaryOnDarkBackgroundArgs: Partial<AvButtonProps> = {
  variant: 'FLAT',
  theme: 'TERTIARY',
}

export const FlatTertiaryOnDarkBackground = Template.bind({})
FlatTertiaryOnDarkBackground.args = flatTertiaryOnDarkBackgroundArgs
FlatTertiaryOnDarkBackground.decorators = darkBackgroundDecorators

export const SmallFlatTertiaryOnDarkBackground = Template.bind({})
SmallFlatTertiaryOnDarkBackground.args = {
  ...flatTertiaryOnDarkBackgroundArgs,
  size: 'SM',
}
SmallFlatTertiaryOnDarkBackground.decorators = darkBackgroundDecorators

export const LargeFlatTertiaryOnDarkBackground = Template.bind({})
LargeFlatTertiaryOnDarkBackground.args = {
  ...flatTertiaryOnDarkBackgroundArgs,
  size: 'LG',
}
LargeFlatTertiaryOnDarkBackground.decorators = darkBackgroundDecorators

const externalLinkButtonArgs: Partial<AvButtonProps> = {
  href: 'https://example.com',
  label: 'Go to external site',
  variant: 'DEFAULT',
  theme: 'PRIMARY',
}

export const ExternalLinkButton = Template.bind({})
ExternalLinkButton.args = externalLinkButtonArgs

export const SmallExternalLinkButton = Template.bind({})
SmallExternalLinkButton.args = {
  ...externalLinkButtonArgs,
  size: 'SM',
}

export const LargeExternalLinkButton = Template.bind({})
LargeExternalLinkButton.args = {
  ...externalLinkButtonArgs,
  size: 'LG',
}

const linkButtonArgs: Partial<AvButtonProps> = {
  to: '/some-route',
  label: 'Go to some route',
  variant: 'DEFAULT',
  theme: 'PRIMARY',
}

export const LinkButton = Template.bind({})
LinkButton.args = linkButtonArgs

export const SmallLinkButton = Template.bind({})
SmallLinkButton.args = {
  ...linkButtonArgs,
  size: 'SM',
}

export const LargeLinkButton = Template.bind({})
LargeLinkButton.args = {
  ...linkButtonArgs,
  size: 'LG',
}

const linkButtonOutlinedArgs: Partial<AvButtonProps> = {
  to: '/some-route',
  label: 'Go to some route',
  variant: 'OUTLINED',
  theme: 'PRIMARY',
}

export const LinkButtonOutlined = Template.bind({})
LinkButtonOutlined.args = linkButtonOutlinedArgs

export const SmallLinkButtonOutlined = Template.bind({})
SmallLinkButtonOutlined.args = {
  ...linkButtonOutlinedArgs,
  size: 'SM',
}

export const LargeLinkButtonOutlined = Template.bind({})
LargeLinkButtonOutlined.args = {
  ...linkButtonOutlinedArgs,
  size: 'LG',
}

const linkButtonSecondaryArgs: Partial<AvButtonProps> = {
  to: '/some-route',
  label: 'Go to some route',
  variant: 'DEFAULT',
  theme: 'SECONDARY',
}

export const LinkButtonSecondary = Template.bind({})
LinkButtonSecondary.args = linkButtonSecondaryArgs

export const SmallLinkButtonSecondary = Template.bind({})
SmallLinkButtonSecondary.args = {
  ...linkButtonSecondaryArgs,
  size: 'SM',
}

export const LargeLinkButtonSecondary = Template.bind({})
LargeLinkButtonSecondary.args = {
  ...linkButtonSecondaryArgs,
  size: 'LG',
}

const linkButtonIconOnlyArgs: Partial<AvButtonProps> = {
  to: '/some-route',
  iconOnly: true,
  icon: 'mdi:home-variant-outline',
  label: 'Go to some route',
  variant: 'DEFAULT',
  theme: 'PRIMARY',
}

export const LinkButtonIconOnly = Template.bind({})
LinkButtonIconOnly.args = linkButtonIconOnlyArgs

export const SmallLinkButtonIconOnly = Template.bind({})
SmallLinkButtonIconOnly.args = {
  ...linkButtonIconOnlyArgs,
  size: 'SM',
}

export const LargeLinkButtonIconOnly = Template.bind({})
LargeLinkButtonIconOnly.args = {
  ...linkButtonIconOnlyArgs,
  size: 'LG',
}

const externalLinkButtonIconOnlyArgs: Partial<AvButtonProps> = {
  href: 'https://example.com',
  iconOnly: true,
  icon: 'mdi:home-variant-outline',
  label: 'Go to external site',
  variant: 'DEFAULT',
  theme: 'PRIMARY',
}

export const ExternalLinkButtonIconOnly = Template.bind({})
ExternalLinkButtonIconOnly.args = externalLinkButtonIconOnlyArgs

export const SmallExternalLinkButtonIconOnly = Template.bind({})
SmallExternalLinkButtonIconOnly.args = {
  ...externalLinkButtonIconOnlyArgs,
  size: 'SM',
}

export const LargeExternalLinkButtonIconOnly = Template.bind({})
LargeExternalLinkButtonIconOnly.args = {
  ...externalLinkButtonIconOnlyArgs,
  size: 'LG',
}

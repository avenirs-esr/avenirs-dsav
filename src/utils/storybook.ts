import { EOS_ICONS, ICONS_DATA_URL, MDI_ICONS, RI_ICONS } from '@/tokens'

const mdiIconOptions = Object.keys(MDI_ICONS).map(key => `MDI_ICON.${key}`)
const mdIconMapping = Object.fromEntries(
  Object.entries(MDI_ICONS).map(([key, value]) => [`MDI_ICON.${key}`, value])
)
const riIconsOptions = Object.keys(RI_ICONS).map(key => `RI_ICON.${key}`)
const riIconMapping = Object.fromEntries(
  Object.entries(RI_ICONS).map(([key, value]) => [`RI_ICON.${key}`, value])
)
const eosIconsOptions = Object.keys(EOS_ICONS).map(key => `EOS_ICON.${key}`)
const eosIconMapping = Object.fromEntries(
  Object.entries(EOS_ICONS).map(([key, value]) => [`EOS_ICON.${key}`, value])
)
const dataUrlIconsOptions = Object.keys(ICONS_DATA_URL).map(key => `DATA_URL_ICON.${key}`)
const dataUrlIconMapping = Object.fromEntries(
  Object.entries(ICONS_DATA_URL).map(([key, value]) => [`DATA_URL_ICON.${key}`, value])
)

export const iconOptions = [...mdiIconOptions, ...riIconsOptions, ...eosIconsOptions]
export const iconMapping = {
  ...mdIconMapping,
  ...riIconMapping,
  ...eosIconMapping,
}

export const iconOptionsWithDataUrl = [...iconOptions, ...dataUrlIconsOptions]
export const iconMappingWithDataUrl = {
  ...iconMapping,
  ...dataUrlIconMapping,
}

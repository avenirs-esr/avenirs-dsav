import { ICONS_DATA_URL, MDI_ICONS, RI_ICONS } from '@/tokens'

const mdiIconOptions = Object.keys(MDI_ICONS).map(key => `MDI_ICON.${key}`)
const mdIconMapping = Object.fromEntries(
  Object.entries(MDI_ICONS).map(([key, value]) => [`MDI_ICON.${key}`, value])
)
const riIconsOptions = Object.keys(RI_ICONS).map(key => `RI_ICON.${key}`)
const riIconMapping = Object.fromEntries(
  Object.entries(RI_ICONS).map(([key, value]) => [`RI_ICON.${key}`, value])
)
const dataUrlIconsOptions = Object.keys(ICONS_DATA_URL).map(key => `DATA_URL_ICON.${key}`)
const dataUrlIconMapping = Object.fromEntries(
  Object.entries(ICONS_DATA_URL).map(([key, value]) => [`DATA_URL_ICON.${key}`, value])
)

export const iconOptions = [...mdiIconOptions, ...riIconsOptions]
export const iconMapping = {
  ...mdIconMapping,
  ...riIconMapping,
}

export const iconOptionsWithDataUrl = [...iconOptions, ...dataUrlIconsOptions]
export const iconMappingWithDataUrl = {
  ...iconMapping,
  ...dataUrlIconMapping,
}

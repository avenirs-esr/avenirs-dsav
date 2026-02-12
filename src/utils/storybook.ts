import { CUIDA_ICONS, EOS_ICONS, FLUENT_ICONS, ICONS_DATA_URL, MDI_ICONS, RI_ICONS } from '@/tokens'

export const cuidaIcons = Object.entries(CUIDA_ICONS).map(([key, icon]) => [`CUIDA_ICONS.${key}`, icon])
export const eosIcons = Object.entries(EOS_ICONS).map(([key, icon]) => [`EOS_ICONS.${key}`, icon])
export const fluentIcons = Object.entries(FLUENT_ICONS).map(([key, icon]) => [`FLUENT_ICONS.${key}`, icon])
export const mdiIcons = Object.entries(MDI_ICONS).map(([key, icon]) => [`MDI_ICONS.${key}`, icon])
export const riIcons = Object.entries(RI_ICONS).map(([key, icon]) => [`RI_ICONS.${key}`, icon])
export const dataUrlIcons = Object.entries(ICONS_DATA_URL).map(([key, icon]) => [`ICONS_DATA_URL.${key}`, icon])

const cuidaIconsOptions = Object.keys(CUIDA_ICONS).map(key => `CUIDA_ICONS.${key}`)
const cuidaIconMapping = Object.fromEntries(cuidaIcons)

const eosIconsOptions = Object.keys(EOS_ICONS).map(key => `EOS_ICONS.${key}`)
const eosIconMapping = Object.fromEntries(eosIcons)

const fluentIconsOptions = Object.keys(FLUENT_ICONS).map(key => `FLUENT_ICONS.${key}`)
const fluentIconMapping = Object.fromEntries(fluentIcons)

const mdiIconOptions = Object.keys(MDI_ICONS).map(key => `MDI_ICONS.${key}`)
const mdIconMapping = Object.fromEntries(mdiIcons)

const riIconsOptions = Object.keys(RI_ICONS).map(key => `RI_ICONS.${key}`)
const riIconMapping = Object.fromEntries(riIcons)

const dataUrlIconsOptions = Object.keys(ICONS_DATA_URL).map(key => `ICONS_DATA_URL.${key}`)
const dataUrlIconMapping = Object.fromEntries(dataUrlIcons)

export const iconOptions = [...cuidaIconsOptions, ...eosIconsOptions, ...fluentIconsOptions, ...mdiIconOptions, ...riIconsOptions]
export const iconMapping = {
  ...cuidaIconMapping,
  ...eosIconMapping,
  ...fluentIconMapping,
  ...mdIconMapping,
  ...riIconMapping,
}

export const iconOptionsWithDataUrl = [...iconOptions, ...dataUrlIconsOptions]
export const iconMappingWithDataUrl = {
  ...iconMapping,
  ...dataUrlIconMapping,
}

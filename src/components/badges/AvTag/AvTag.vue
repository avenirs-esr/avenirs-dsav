<script setup lang="ts">
import { DsfrTag } from '@gouvminint/vue-dsfr'

/**
 * AvTag component props.
 */
export type AvTagProps<T = string> = {
  /**
   * Displayed tag label.
   */
  label: string

  /**
   * URL for external link. Also determines the tag type (`a` or `RouterLink`).
   */
  link?: string

  /**
   * Tag name used for the tag (should be 'p' ou 'button').
   * @default 'p' (DSFR default)
   */
  tagName?: 'p' | 'button'

  /**
   * Icon to display in the tag. Can be a name or an icon configuration.
   */
  icon?: string

  /**
   * Disabled the tag if it is a button.
   */
  disabled?: boolean

  /**
   * Display the tag in a small version.
   */
  small?: boolean

  /**
   * Display the tag in icon only version.
   */
  iconOnly?: boolean
} & ({
  /**
   * Make the tag selectable.
   */
  selectable: true

  /**
   * Indicated if the tag is selected.
   * @available if selectable is true
   */
  selected?: boolean

  /**
   * Tag value (useful in a selectable tags list).
   * @available if selectable is true
   */
  value?: T
} | {
  /**
   * Indicated if the tag is selected.
   */
  selectable?: false
})

const props = defineProps<AvTagProps>()
</script>

<template>
  <DsfrTag
    v-bind="props"
  />
</template>

<style lang="scss" scoped></style>

<script setup lang="ts">
import type { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric } from 'vue-router'
import { DsfrBreadcrumb } from '@gouvminint/vue-dsfr'

/**
 * AvBreadcrumb component props.
 */
export interface AvBreadcrumbProps {
  /**
   * A table of objects representing the links in the breadcrumb. Each object can
   * have a ‘text’ property and, optionally, a ‘to’ property for routes.
   */
  links?: {
    to?: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | undefined
    text: string
  }[] | undefined

  /**
   * Displayed label on the breadcrumb `nav` tag.
   */
  navigationLabel?: string

  /**
   * Displayed breadcrumb button label.
   */
  showBreadcrumbLabel?: string
}

const props = defineProps<AvBreadcrumbProps>()
</script>

<template>
  <DsfrBreadcrumb v-bind="props" />
</template>

<style lang="scss" scoped></style>

<script lang="ts" setup>
/**
 * AvCheckboxesGroup component props
 */
export interface AvCheckboxesGroupProps {
  /**
   * Unique ID of the component
   * @default `checkboxes-group-${crypto.randomUUID()}`
   */
  id?: string

  /**
   * Fieldset caption
   * @default ''
   */
  legend?: string

  /**
   * `<legend>` tag id
   * @default ''
   */
  legendId?: string

  /**
   * Error message to be displayed under the checkboxes
   * @default ''
   */
  errorMessage?: string

  /**
   * Success message to be displayed under the checkboxes
   * @default ''
   */
  successMessage?: string

  /**
   * Hint to be displayed under the checkboxes
   * @default ''
   */
  hint?: string

  /**
   * Display checkboxes inline
   * @default false
   */
  inline?: boolean
}

const {
  id,
  legend = '',
  legendId = '',
  errorMessage = '',
  successMessage = '',
  hint = '',
  inline = false
} = defineProps<AvCheckboxesGroupProps>()

const realId = computed(() => id ?? `checkboxes-group-${crypto.randomUUID()}`)
</script>

<template>
  <AvFieldset
    :id="realId"
    :legend="legend"
    :legend-id="legendId"
    :hint="hint"
    :error-message="errorMessage"
    :success-message="successMessage"
    :inline="inline"
    aria-live="polite"
  >
    <div
      class="av-checkboxes-group av-gap-sm"
      :class="{
        'av-checkboxes-group--inline av-row av-row-wrap': inline,
        'av-col': !inline,
      }"
    >
      <slot />
    </div>
  </AvFieldset>
</template>

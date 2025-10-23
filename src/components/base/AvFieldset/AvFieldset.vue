<script lang="ts" setup>
import type { Slot } from 'vue'

/**
 * AvFieldset component props.
 */
export interface AvFieldsetProps {
  /**
   * Fieldset caption
   * @default ''
   */
  legend?: string

  /**
   * `<legend>` tag class
   * @default ''
   */
  legendClass?: string

  /**
   * `<legend>` tag id
   * @default ''
   */
  legendId?: string

  /**
   * Hint placed above the fieldset
   * @default ''
   */
  hint?: string

  /**
   * Class for the hint
   * @default ''
   */
  hintClass?: string
}

const {
  legend = '',
  legendId = '',
  legendClass = '',
  hint = '',
  hintClass = ''
} = defineProps<AvFieldsetProps>()

/**
 * Slots available in the AvFieldset component.
 *
 * @slot default - Default slot for the content of the fieldset.
 * @slot legend - Slot for the content of the title of the `fieldset`.
 * @slot hint - Slot for the content of the hint.
 */
const slots = defineSlots<{
  /**
   * Slot by default for the content of the fieldset
   * (will be inside `<div class="fr-fieldset__element">`)
   */
  default?: Slot

  /**
   * Slot for the content of the title of the `fieldset`
   * (will be inside `<legend class="fr-fieldset__legend">`).
   * A `legend` prop can be used for simple text.
   */
  legend?: Slot

  /**
   * Slot for the content of the hint.
   * (will be inside `<span class="fr-hint-text">` that will be inside `</legend>`).
   * A `hint` prop can be used for simple text.
   */
  hint?: Slot
}>()
</script>

<template>
  <fieldset class="fr-fieldset">
    <legend
      v-if="legend || slots.legend"
      :id="legendId"
      class="fr-fieldset__legend"
      :class="legendClass"
    >
      {{ legend }}
      <slot name="legend" />
    </legend>
    <div
      v-if="hint || slots.hint"
      class="fr-fieldset__element"
    >
      <span
        class="fr-hint-text"
        :class="hintClass"
      >
        {{ hint }}
        <slot name="hint" />
      </span>
    </div>
    <div class="fr-fieldset__element">
      <slot />
    </div>
  </fieldset>
</template>

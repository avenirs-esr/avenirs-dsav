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
   * @default 'caption-regular'
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

  /**
   * Error message to be displayed under the fieldset
   * @default ''
   */
  errorMessage?: string

  /**
   * Success message to be displayed under the fieldset
   * @default ''
   */
  successMessage?: string

  /**
   * Displays the fieldset in its inline version
   * @default false
   */
  inline?: boolean

  /**
   * Indicates if the fieldset is required
   * @default false
   */
  required?: boolean
}

const {
  legend = '',
  legendId = '',
  legendClass = 'caption-regular',
  hint = '',
  hintClass = '',
  errorMessage = '',
  successMessage = '',
  inline = false,
  required = false,
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
   * (must be components with AvFieldsetElement as root element).
   */
  default?: Slot

  /**
   * Slot for the content of the title of the `fieldset`
   * (will be inside `<legend class="av-fieldset__legend">`).
   * A `legend` prop can be used for simple text.
   */
  legend?: Slot

  /**
   * Slot for the content of the hint.
   * (will be inside `<span class="av-hint-text">` that will be inside `</legend>`).
   * A `hint` prop can be used for simple text.
   */
  hint?: Slot
}>()

const message = computed(() => errorMessage || successMessage)
</script>

<template>
  <fieldset
    class="av-fieldset"
    :class="{
      'av-fieldset--error': errorMessage,
      'av-fieldset--success': successMessage && !errorMessage,
      'av-fieldset--inline': inline,
    }"
  >
    <div>
      <legend
        v-if="legend || slots.legend"
        :id="legendId"
        class="av-fieldset__legend"
        :class="legendClass"
      >
        {{ legend }}
        <slot name="legend" />
      </legend>
      <div
        v-if="hint || slots.hint"
        class="av-fieldset__element"
      >
        <span
          class="av-hint-text"
          :class="hintClass"
        >
          {{ hint }}
          <slot name="hint" />
        </span>
        <span
          v-if="required"
          class="caption-regular required"
        >&nbsp;*</span>
      </div>
      <div class="av-fieldset__content">
        <slot />
      </div>
      <AvMessage
        :type="errorMessage ? 'error' : 'success'"
        :message="message"
      />
    </div>
  </fieldset>
</template>

<style lang="scss" scoped>
@use '@/styles/core/_typography.scss';

.av-fieldset {
  display: flex;
  flex-direction: column;
  border: none;

  &__legend {
    width: 100%;
    padding-bottom: var(--spacing-xs);
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  &--inline {
    .av-fieldset__content {
      flex-direction: row;
      justify-content: flex-start;
      flex-wrap: wrap;
    }
  }

  &--error,
  &--info,
  &--success {
    background-position: 0 -2.25rem;
    background-repeat: no-repeat;
    background-size: 2px calc(100% + 1.25rem);
  }

  &--error {
    background-image: linear-gradient(0deg, var(--dark-background-error), var(--dark-background-error));
  }

  &--success {
    background-image: linear-gradient(0deg, var(--dark-background-success), var(--dark-background-success));
  }
}
</style>

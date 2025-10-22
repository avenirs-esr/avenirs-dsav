<script lang="ts" setup>
import { MDI_ICONS } from '@/tokens/icons'

export interface AvCheckboxProps {
  id?: string
  icon?: string
  name: string
  required?: boolean
  value: string | number | boolean
  checked?: boolean
  small?: boolean
  inline?: boolean
  readonly?: boolean
  readonlyOpacity?: number
  label?: string
  errorMessage?: string
  validMessage?: string
  hint?: string
}

defineOptions({
  inheritAttrs: false,
})

const {
  id = `checkbox-${crypto.randomUUID()}`,
  icon,
  name,
  required,
  value,
  small,
  inline,
  readonly,
  readonlyOpacity,
  label,
  errorMessage,
  validMessage,
  hint
} = defineProps<AvCheckboxProps>()

const message = computed(() => errorMessage || validMessage)
const messageId = computed(() => message.value ? `message-${id}` : undefined)

const additionalMessageClass = computed(() => errorMessage ? 'fr-error-text' : 'fr-valid-text')
const modelValue = defineModel<(string | number | boolean | undefined)[]>({ required: true })

const isChecked = computed(() => modelValue.value.includes(value))

const checkboxIconName = computed(() => {
  return isChecked.value ? MDI_ICONS.CHECKBOX_MARKED : MDI_ICONS.CHECKBOX_BLANK_OUTLINE
})

const iconColor = computed(() => {
  return isChecked.value ? 'var(--dark-background-primary1)' : 'var(--icon)'
})

const labelClass = computed(() => {
  return isChecked.value ? 'b2-bold' : 'b2-regular'
})
</script>

<template>
  <div
    class="fr-fieldset__element"
    :class="{ 'fr-fieldset__element--inline': inline, readonly }"
  >
    <div
      class="fr-checkbox-group"
      :class="{
        'fr-checkbox-group--error': errorMessage,
        'fr-checkbox-group--valid': !errorMessage && validMessage,
        'fr-checkbox-group--sm': small,
      }"
    >
      <input
        :id="id"
        v-model="modelValue"
        :name="name"
        type="checkbox"
        :value="value"
        :checked="isChecked"
        :required
        v-bind="$attrs"
        :data-testid="`input-checkbox-${id}`"
        :data-test="`input-checkbox-${id}`"
        :tabindex="readonly ? -1 : undefined"
        :aria-describedby="messageId"
      >
      <label
        :for="id"
        class="fr-label"
      >
        <div class="label-container">
          <AvIcon
            class="option-checkbox"
            :name="checkboxIconName"
            :color="iconColor"
            :size="1.5"
          />
          <AvIcon
            v-if="icon"
            class="option-icon"
            :name="icon"
            :color="iconColor"
            :size="1.5"
          />
          <span :class="labelClass">{{ label }}</span>
          <slot name="required-tip">
            <span
              v-if="required"
              class="required"
            >&nbsp;*</span>
          </slot>
        </div>
        <span
          v-if="hint"
          class="fr-hint-text"
        >
          {{ hint }}
        </span>
      </label>
      <div
        v-if="message"
        :id="messageId"
        class="fr-messages-group"
        aria-live="assertive"
        role="alert"
      >
        <p
          class="fr-message--info  flex  items-center"
          :class="additionalMessageClass"
        >
          {{ message }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.label-container {
  display: flex;
  flex-direction: row;
  gap: var(--spacing-xs);
  align-items: center;
  margin-left: -1.5rem;
}

.fr-fieldset__element.readonly {
  pointer-events: none;
  cursor: not-allowed;
  opacity: v-bind('readonlyOpacity');
}
</style>

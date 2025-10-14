<script lang="ts" setup>
import { DsfrMultiselect } from '@gouvminint/vue-dsfr'
import { MDI_ICONS } from '@/tokens'

/**
 * AvMultiselect option props.
 */
export interface AvMultiselectOption {
  /**
   * Displayed label of the option
   */
  label: string

  /**
   * Name of the icon option
   */
  icon?: string

  /**
   * Value of the option
   */
  value: string | number
}

/**
 * AvMultiselect component props.
 */
export interface AvMultiselectProps {
  /**
   * Indicated if the select is disabled.
   */
  disabled?: boolean

  /**
   * Unique id for the select. Used for the accessibility.
   */
  selectId?: string

  /**
   * Field name.
   */
  name?: string

  /**
   * Hint for guidance.
   */
  hint?: string

  /**
   * Selected option(s) value(s).
   */
  modelValue: AvMultiselectOption[]

  /**
   * Select text label.
   */
  label: string

  /**
   * Selectable options.
   */
  options?: AvMultiselectOption[]

  /**
   * If set, display a success message.
   */
  successMessage?: string

  /**
   * If set, display an error message.
   */
  errorMessage?: string

  /**
   * Placeholder text.
   */
  defaultUnselectedText: string

  /**
   * dense mode
   */
  dense?: boolean

  /**
   * Displayed text when options are selected.
   */
  selectedText?: string

  /**
   * Displays the select all items button
   */
  selectAll?: boolean

  /**
   * Update the select all items button label
   * @default
   * ["Tout sélectionner", "Tout désélectionner"]
   */
  selectAllLabel?: [string, string]

  /**
   * Displays the search bar
   */
  search?: boolean

  /**
   * Fixes the width of the multiselect
   */
  width?: string
}

const props = defineProps<AvMultiselectProps>()

/**
 * Events emitted by the component.
 */
const emit = defineEmits<{
  /**
   * Emitted when an option is selected or unselected.
   * @param value Values (`AvMultiselectOption[]`) of the current selected options.
   */
  (e: 'update:modelValue', value: AvMultiselectOption[]): void
}>()

const modelValue = computed(() => props.modelValue.map(selected => selected.value))

const title = computed(() => {
  if (!props.modelValue || props.modelValue.length === 0) {
    return props.defaultUnselectedText
  }

  if (props.selectedText) {
    return props.selectedText
  }

  const pluralChoice = props.modelValue.length > 1 ? 's' : ''

  return `${props.modelValue.length} option${pluralChoice} sélectionnée${pluralChoice}`
})

function isOptionSelected (option: AvMultiselectOption) {
  return props.modelValue.some(selected => selected.value === option.value)
}

function getIconName (option: AvMultiselectOption) {
  return isOptionSelected(option)
    ? MDI_ICONS.CHECKBOX_MARKED
    : MDI_ICONS.CHECKBOX_BLANK_OUTLINE
}

function getIconColor (option: AvMultiselectOption) {
  return isOptionSelected(option)
    ? 'var(--dark-background-primary1)'
    : 'var(--icon)'
}

function getLabelClass (option: AvMultiselectOption) {
  return isOptionSelected(option)
    ? 'b2-bold'
    : 'b2-regular'
}

function onUpdateModelValue (values: (string | number)[]) {
  const selectedOptions = props.options?.filter(option =>
    values.includes(option.value)
  ) ?? []

  emit('update:modelValue', selectedOptions)
}
</script>

<template>
  <div
    :class="{
      'fr-multiselect--dense': props.dense,
      'fr-multiselect--unselected': props.modelValue.length === 0,
      'fr-multiselect--selected': props.modelValue.length > 0,
    }"
  >
    <DsfrMultiselect
      v-bind="props"
      :model-value="modelValue"
      :title="title"
      :button-label="title"
      id-key="value"
      :filtering-keys="['label']"
      @update:model-value="onUpdateModelValue($event)"
    >
      <template #checkbox-label="{ option }">
        <div class="item-container">
          <AvVIcon
            class="option-checkbox"
            :name="getIconName(option)"
            :color="getIconColor(option)"
            :size="1.5"
          />
          <AvVIcon
            v-if="option.icon"
            class="option-icon"
            :name="option.icon"
            :color="getIconColor(option)"
            :size="1.5"
          />
          <span :class="getLabelClass(option)">{{ option.label }}</span>
        </div>
      </template>
    </DsfrMultiselect>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/typography.scss" as typography;

:deep(.fr-select) {
  background-color: var(--other-background-base);
  border: 1px solid var(--stroke);
  color: var(--text1);
  box-shadow: none;
  border-radius: var(--radius-md);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: var(--spacing-none);
  width: v-bind('width');
}

.fr-multiselect--dense :deep(.fr-select) {
  padding-top: .1rem !important;
  padding-bottom: .1rem !important;
}

:deep(.fr-select:not([aria-disabled=true]):hover) {
  background-color: var(--dark-background-primary1);
  color: var(--other-background-base);
}

:deep(.fr-select:hover) option {
  color: var(--text1);
  background-color: var(--other-background-base);
}

.item-container {
  display: flex;
  flex-direction: row;
  gap: var(--spacing-xs);
  align-items: center;
  margin-left: -1.5rem;
}

:deep(.fr-label) {
  @extend .b2-light;
  color: var(--text1);
  padding-bottom: var(--spacing-xxs);

  &::before {
    display: none !important;
  }
}

:deep(.fr-multiselect__collapse) {
  width: auto !important;
}

.fr-multiselect--unselected :deep(button span) {
  @extend .caption-regular;
  font-style: italic;
  color: inherit;
}

.b2-bold {
  color: var(--dark-background-primary1);
}
</style>

<script setup lang="ts">
import type { ComputedRef } from 'vue'
import AvTag from '@/components/badges/AvTag/AvTag.vue'
import { MDI_ICONS } from '@/tokens'
import { removeDuplicates } from '@/utils'

/**
 * Represents an option in the AvTagPicker component.
 */
export interface AvTagPickerOption {
  /**
   * Label displayed for the option.
   */
  label: string

  /**
   * Value associated with the option.
   */
  value: string
}

/**
 * Basic props common to AvTagPicker in single or multiple mode.
 */
interface AvTagPickerBaseProps {
  /**
   * List of options available in the picker.
   */
  options: AvTagPickerOption[]

  /**
   * Label displayed above the picker.
   */
  label?: string

  /**
   * Label color.
   * @default 'var(--text2)'
   */
  labelColor?: string

  /**
   * Typography class applied to label.
   * @default 'b2-regular'
   */
  labelTypographyClass?: string
}

/**
 * AvTagPicker component props in single selection mode.
 */
interface AvTagPickerSingleProps extends AvTagPickerBaseProps {
  /**
   * Multiple mode disabled.
   * @default false
   */
  multiple?: false

  /**
   * Option selected.
   */
  selected?: AvTagPickerOption

  /**
   * Method called when changing selection.
   * @param selected The selected option.
   */
  handleSelectChange: (selected: AvTagPickerOption) => void
}

/**
 * AvTagPicker component props in multiple selection mode.
 */
interface AvTagPickerMultipleProps extends AvTagPickerBaseProps {
  /**
   * Enables multiple selection mode.
   */
  multiple: true

  /**
   * Options selected.
   */
  selected?: AvTagPickerOption[]

  /**
   * Method called when changing selection.
   * @param selected The selected options.
   */
  handleSelectChange: (selected: AvTagPickerOption[]) => void
}

/**
 * AvTagPicker component props which can be in single or multiple mode.
 */
export type AvTagPickerProps = AvTagPickerSingleProps | AvTagPickerMultipleProps

const props = withDefaults(defineProps<AvTagPickerProps>(), {
  labelColor: 'var(--text2)',
  labelTypographyClass: 'b2-regular',
})

const {
  label,
  labelColor,
  labelTypographyClass,
  selected,
  multiple,
  handleSelectChange
} = props

const renderedOptions: ComputedRef<AvTagPickerOption[]> = computed(() => removeDuplicates<AvTagPickerOption>(props.options))

function getSelectedOptions (selected?: AvTagPickerOption | AvTagPickerOption[]): AvTagPickerOption[] {
  if (!selected) {
    return []
  }
  if (Array.isArray(selected)) {
    return selected
  }
  return [selected]
}

const selectedOptions = ref<AvTagPickerOption[]>(getSelectedOptions(selected))

function isOptionSelected (option: AvTagPickerOption): boolean {
  return selectedOptions.value.some(selectedOption => selectedOption.value === option.value)
}

function toggleOption (option: AvTagPickerOption): void {
  if (multiple) {
    const isSelected = isOptionSelected(option)
    if (isSelected) {
      selectedOptions.value = selectedOptions.value.filter(
        selectedOption => selectedOption.value !== option.value
      )
    }
    else {
      selectedOptions.value.push(option)
    }
    handleSelectChange([...selectedOptions.value])
  }
  else {
    selectedOptions.value = [option]
    handleSelectChange(option)
  }
}

function getIcon (option: AvTagPickerOption): string | undefined {
  return isOptionSelected(option) ? MDI_ICONS.CHECK : undefined
}

function getDisabled (option: AvTagPickerOption): boolean {
  return isOptionSelected(option) && !multiple
}

watch(() => props.selected, (newSelected) => {
  selectedOptions.value = getSelectedOptions(newSelected)
}, { immediate: true })
</script>

<template>
  <div class="av-tag-picker av-row av-gap-xs">
    <span
      v-if="label"
      class="av-tag-picker__label av-row av-align-center"
      :class="[labelTypographyClass]"
    >
      {{ label }}
    </span>

    <div
      v-for="option in renderedOptions"
      :key="option.value"
      class="tag-wrapper av-row av-flex-fill"
    >
      <AvTag
        class="av-row av-align-center av-justify-center av-flex-fill av-py-xxs av-px-xs av-radius-md av-no-before av-no-after av-border-width-sm av-border-style-solid"
        :class="{
          'av-tag--selected': isOptionSelected(option),
          'av-tag--disabled': getDisabled(option),
        }"
        :label="option.label"
        :icon="getIcon(option)"
        :disabled="getDisabled(option)"
        selectable
        :selected="isOptionSelected(option)"
        @select="() => toggleOption(option)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.av-tag-picker__label {
  color: v-bind('labelColor');
}

:deep() {
  .av-tag {
    border-color: var(--divider);
    color: var(--text2) !important;
    background: var(--other-background-base) !important;
    text-align: center !important;

    &:hover {
      border-color: var(--dark-background-primary1);
      color: var(--other-background-base) !important;
      background: var(--dark-background-primary1) !important;
    }

    &--selected {
      border-color: var(--dark-background-primary1);
      color: var(--dark-background-primary1) !important;
      background: var(--other-background-base) !important;

      &:hover {
        border-color: var(--dark-background-primary1);
        color: var(--dark-background-primary1) !important;
        background: var(--other-background-base) !important;
      }
    }

    &--disabled {
      pointer-events: none;
    }
  }
}
</style>

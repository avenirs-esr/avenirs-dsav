import type { AvSelectItem, AvSelectModelValue, AvSelectOption, AvSelectOptionGroup, AvSelectSelectedOption } from '@/components/interaction/selects/AvSelect/AvSelect.types'

/**
 * Check if the given option is a group.
 * @param option The option to check.
 * @returns True if the option is a group, false otherwise.
 */
export function isOptionGroup (
  option: AvSelectItem,
): option is AvSelectOptionGroup {
  return 'children' in option && Array.isArray(option.children)
}

/**
 * Find the parent ID of an option by its value.
 * @param options The list of options to search within.
 * @param value The value of the option.
 * @returns An object containing the parent ID if found, otherwise an empty object.
 */
export function findParentId (options: AvSelectItem[], value: string | number): { parentId?: string } {
  const parent = options.find(option => isOptionGroup(option)
    && option.children.some(child => String(child.value) === String(value)),
  )

  return parent && isOptionGroup(parent)
    ? { parentId: String(parent.id) }
    : {}
}

/**
 * Find an option by its value within a list of options, including nested groups.
 * @param options The list of options to search within.
 * @param value The value of the option to find.
 * @returns The option matching the given value, or undefined if not found.
 */
export function findOptionByValue (
  options: AvSelectItem[],
  value: string | number,
): AvSelectOption | undefined {
  const availableOptions = options.flatMap(option =>
    isOptionGroup(option) ? option.children : [option],
  )

  return availableOptions.find(option => String(option.value) === String(value))
}

/**
 * Build a selected option object by its value, including the parent ID if the option is part of a group.
 * @param options The list of options to search within.
 * @param value The value of the option to find.
 * @returns The selected option with its parent ID if applicable, or undefined if not found.
 */
export function buildSelectedOptionByValue (
  options: AvSelectItem[],
  value: string | number,
): AvSelectSelectedOption | undefined {
  for (const option of options) {
    if (isOptionGroup(option)) {
      const selectedChild = option.children.find(
        child => String(child.value) === String(value),
      )

      if (selectedChild) {
        return {
          ...selectedChild,
          parentId: String(option.id),
        }
      }
    }
    else if (String(option.value) === String(value)) {
      return option
    }
  }
}

/**
 * Get the selected options from the given value, handling both single and array values.
 * @param value The value representing the selected option(s).
 * @returns An array of selected options if available, or null if no selection is available.
 */
export function getAvSelectSelectedOptions (value: AvSelectModelValue): AvSelectSelectedOption[] | null {
  if (Array.isArray(value)) {
    return value.length > 0 ? value : null
  }

  return value ? [value] : null
}

/**
 * Get the selected option from the given value, handling both single and array values.
 * @param value The value representing the selected option(s).
 * @returns The first selected option if the value is an array, the value itself if it's a single option, or null if no selection is available.
 */
export function getAvSelectSelectedOption (value: AvSelectModelValue): AvSelectSelectedOption | null {
  return getAvSelectSelectedOptions(value)?.[0] ?? null
}

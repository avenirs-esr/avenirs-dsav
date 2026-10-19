import type { AvInteractiveProps } from '@/types/interfaces.types'

/**
 * AvSelect option props.
 */
export interface AvSelectOption extends AvInteractiveProps {
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

export interface AvSelectOptionGroup {
  id: string
  label: string
  children: AvSelectOption[]
}

export interface AvSelectSelectedOption extends AvSelectOption {
  parentId?: string
}

export type AvSelectItem = AvSelectOption | AvSelectOptionGroup

export type AvSelectModelValue = AvSelectSelectedOption | AvSelectSelectedOption[] | null

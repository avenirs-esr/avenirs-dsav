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
  label: string
  children: AvSelectOption[]
}

export type AvSelectItem = AvSelectOption | AvSelectOptionGroup

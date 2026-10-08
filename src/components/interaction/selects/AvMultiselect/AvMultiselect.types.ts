import type { AvInteractiveProps } from '@/types/interfaces.types'

/**
 * AvMultiselect option props.
 */
export interface AvMultiselectOption extends AvInteractiveProps {
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

export interface AvMultiselectOptionGroup {
  label: string
  children: AvMultiselectOption[]
}

export type AvMultiselectItem = AvMultiselectOption | AvMultiselectOptionGroup

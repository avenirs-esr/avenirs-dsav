import type { AvInputProps } from '@/components/interaction/inputs/AvInput/AvInput.vue'
import { format, isValid, parseISO } from 'date-fns'
import { MDI_ICONS } from '@/tokens'

/** Supported date input types */
export const SUPPORTED_DATE_INPUT_TYPES = [
  'date',
  'datetime-local',
  'month',
  'time',
  'week',
] as const

/** Supported date input type */
export type DateInputType = (typeof SUPPORTED_DATE_INPUT_TYPES)[number]

/** Mapping of date input types to their corresponding date-fns format strings */
export const FORMAT_BY_TYPE: Record<DateInputType, string> = {
  'date': 'yyyy-MM-dd',
  'datetime-local': 'yyyy-MM-dd\'T\'HH:mm',
  'month': 'yyyy-MM',
  'time': 'HH:mm',
  'week': 'yyyy-\'W\'II',
}

/**
 * Type guard to check if a value is a DateInputType
 * @param value The value to check
 * @returns True if the value is a DateInputType, false otherwise
 */
export function isDateInputType (value: string | undefined): value is DateInputType {
  return !!value && SUPPORTED_DATE_INPUT_TYPES.includes(value as DateInputType)
}

/**
 * Formats a date according to the input type
 * @param type The type of the input
 * @param date The date to format
 * @returns The formatted date string or undefined if invalid
 */
export function formatDateForInputType (type: AvInputProps['type'], date: Date | undefined) {
  if (!date || !isValid(date) || !isDateInputType(type)) {
    return undefined
  }
  return format(date, FORMAT_BY_TYPE[type])
}

/**
 * Formats the displayed date based on the input type and model value
 * @param type The type of the input
 * @param dateValue The model value of the input
 * @param formatStr Optional custom format string
 * @returns The formatted displayed date string
 */
export function formatDisplayedDate (type: AvInputProps['type'], dateValue: AvInputProps['modelValue'], formatStr?: string): string {
  if (!dateValue || !isDateInputType(type) || typeof dateValue !== 'string') {
    return ''
  }

  const date = parseISO(dateValue)

  if (!isValid(date)) {
    return ''
  }

  if (formatStr) {
    try {
      if (type === 'week') {
        const startOfWeek = format(date, formatStr)
        const endOfWeek = format(new Date(date.getTime() + 6 * 24 * 60 * 60 * 1000), formatStr)
        return `${startOfWeek} - ${endOfWeek}`
      }

      return format(date, formatStr)
    }
    catch {
      console.warn(`[formatDisplayedDate] Invalid format string: ${formatStr}. Falling back to default format for type "${type}".`)
    }
  }

  switch (type) {
    case 'date':
      return format(date, 'dd/MM/yyyy')
    case 'datetime-local':
      return format(date, 'dd/MM/yyyy hh:mm')
    case 'month':
      return format(date, 'MM/yyyy')
    case 'time':
      return format(date, 'p')
    case 'week': {
      const startOfWeek = format(date, 'dd/MM/yyyy')
      const endOfWeek = format(new Date(date.getTime() + 6 * 24 * 60 * 60 * 1000), 'dd/MM/yyyy')
      return `${startOfWeek} - ${endOfWeek}`
    }
  }
}

/**
 * Returns the placeholder string for date input types
 * @param type The type of the input
 * @returns The placeholder string
 */
export function getDateInputPlaceholder (type: AvInputProps['type']): string {
  switch (type) {
    case 'date':
      return 'dd/mm/yyyy'
    case 'datetime-local':
      return 'dd/mm/yyyy --:--'
    case 'month':
      return 'mm/yyyy'
    case 'time':
      return '--:--'
    case 'week':
      return 'dd/mm/yyyy - dd/mm/yyyy'
    default:
      return ''
  }
}

export function getDateInputPrefixIcon (type: AvInputProps['type']): string | undefined {
  switch (type) {
    case 'date':
      return MDI_ICONS.CALENDAR_BLANK_OUTLINE
    case 'datetime-local':
      return MDI_ICONS.CALENDAR_TIME
    case 'month':
      return MDI_ICONS.CALENDAR_MONTH_OUTLINE
    case 'week':
      return MDI_ICONS.CALENDAR_WEEK_OUTLINE
    case 'time':
      return MDI_ICONS.CLOCK_OUTLINE
    default:
      return undefined
  }
}

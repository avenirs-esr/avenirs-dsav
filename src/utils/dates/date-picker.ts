import type { RootProps } from '@vuepic/vue-datepicker'
import type {
  AvDatePickerModel,
  AvDatePickerMonthModel,
  AvDatePickerTimeModel
} from '@/components/interaction/inputs/AvDatePicker/AvDatePicker.types'
import { isValid } from 'date-fns'

export type AvDatePickerType = 'date' | 'datetime-local' | 'month' | 'time' | 'week'

export type AvDatePickerFormatsByType = Record<AvDatePickerType, RootProps['formats']>

export function createDatePickerFormat (format: string): NonNullable<RootProps['formats']> {
  return {
    input: format,
    preview: format,
  }
}

export const AV_DATE_PICKER_FORMATS_BY_TYPE: AvDatePickerFormatsByType = {
  'date': createDatePickerFormat('P'),
  'datetime-local': createDatePickerFormat('P, HH:mm'),
  'month': createDatePickerFormat('MM/yyyy'),
  'time': createDatePickerFormat('HH:mm'),
  'week': undefined,
}

export function isDate (value: unknown): value is Date {
  return value instanceof Date
}

export function isMonthModel (value: AvDatePickerModel): value is AvDatePickerMonthModel {
  return Boolean(value && typeof value === 'object' && !Array.isArray(value) && 'month' in value && 'year' in value)
}

export function isTimeModel (value: AvDatePickerModel): value is AvDatePickerTimeModel {
  return Boolean(value && typeof value === 'object' && !Array.isArray(value) && 'hours' in value && 'minutes' in value)
}

export function isDateRange (value: AvDatePickerModel): value is [Date, Date] {
  return Array.isArray(value) && value.length === 2 && value.every(date => date instanceof Date)
}

export function isMonthRange (value: AvDatePickerModel): value is [AvDatePickerMonthModel, AvDatePickerMonthModel] {
  return Array.isArray(value) && value.length === 2 && value.every(isMonthModel)
}

export function isTimeRange (value: AvDatePickerModel): value is [AvDatePickerTimeModel, AvDatePickerTimeModel] {
  return Array.isArray(value) && value.length === 2 && value.every(isTimeModel)
}

export function toDate (value: AvDatePickerModel): Date | null {
  if (isDate(value)) {
    return value
  }

  if (isMonthModel(value)) {
    const date = new Date(Number(value.year), Number(value.month), 1)
    return isValid(date) ? date : null
  }

  return null
}

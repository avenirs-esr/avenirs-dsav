import type { MonthModel, RootProps, TimeModel } from '@vuepic/vue-datepicker'
import type { AvDatePickerModel } from '@/components/interaction/inputs/AvDatePicker/AvDatePicker.types'
import { isValid, parse } from 'date-fns'

export type AvDatePickerType = 'date' | 'datetime-local' | 'month' | 'time' | 'week' | 'range'

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
  'range': createDatePickerFormat('P'),
  'time': createDatePickerFormat('HH:mm'),
  'week': undefined,
}

export function isDate (value: AvDatePickerModel): value is Date {
  return value instanceof Date
}

export function isMonthModel (value: AvDatePickerModel): value is MonthModel {
  return Boolean(value && !Array.isArray(value) && 'month' in value && 'year' in value)
}

export function isTimeModel (value: AvDatePickerModel): value is TimeModel {
  return Boolean(value && !Array.isArray(value) && 'hours' in value && 'minutes' in value)
}

export function isDateRange (value: AvDatePickerModel): value is [Date, Date] {
  return Array.isArray(value) && value.length === 2 && value.every(date => date instanceof Date)
}

export function toDate (value: AvDatePickerModel): Date | null {
  if (isDate(value)) {
    return value
  }

  if (isMonthModel(value)) {
    const date = parse(`${value.year}-${Number(value.month) + 1}-1`, 'yyyy-M-d', new Date())
    return isValid(date) ? date : null
  }

  return null
}

import type { MonthModel, TimeModel } from '@vuepic/vue-datepicker'

export type AvDatePickerMonthModel = MonthModel
export type AvDatePickerTimeModel = TimeModel
export type AvDatePickerModel = Date | [Date] | [Date, Date] | AvDatePickerMonthModel | [AvDatePickerMonthModel] | [AvDatePickerMonthModel, AvDatePickerMonthModel] | AvDatePickerTimeModel | [AvDatePickerTimeModel] | [AvDatePickerTimeModel, AvDatePickerTimeModel] | null

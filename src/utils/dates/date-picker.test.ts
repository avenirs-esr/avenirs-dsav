import { expect } from 'vitest'
import { BddTest } from '@/tests/utils'
import { AV_DATE_PICKER_FORMATS_BY_TYPE, createDatePickerFormat, isDate, isDateRange, isMonthModel, isMonthRange, isTimeModel, isTimeRange, toDate } from '@/utils/dates/date-picker'

BddTest().given('the createDatePickerFormat helper', () => {
  BddTest().when('a format is provided', () => {
    BddTest().then('it should use the format for input and preview', () => {
      expect(createDatePickerFormat('dd/MM/yyyy')).toEqual({
        input: 'dd/MM/yyyy',
        preview: 'dd/MM/yyyy',
      })
    })
  })
})

BddTest().given('the AV_DATE_PICKER_FORMATS_BY_TYPE configuration', () => {
  BddTest().then('it should expose the default formats by picker type', () => {
    expect(AV_DATE_PICKER_FORMATS_BY_TYPE).toEqual({
      'date': {
        input: 'P',
        preview: 'P',
      },
      'datetime-local': {
        input: 'P, HH:mm',
        preview: 'P, HH:mm',
      },
      'month': {
        input: 'MM/yyyy',
        preview: 'MM/yyyy',
      },
      'time': {
        input: 'HH:mm',
        preview: 'HH:mm',
      },
      'week': undefined,
    })
  })
})

BddTest().given('the isDate helper', () => {
  BddTest().when('the value is a Date instance', () => {
    BddTest().then('it should return true', () => {
      expect(isDate(new Date('2026-01-10'))).toBe(true)
    })
  })

  BddTest().when('the value is a month model', () => {
    BddTest().then('it should return false', () => {
      expect(isDate({ month: 0, year: 2026 })).toBe(false)
    })
  })

  BddTest().when('the value is a time model', () => {
    BddTest().then('it should return false', () => {
      expect(isDate({ hours: 9, minutes: 0, seconds: 0 })).toBe(false)
    })
  })

  BddTest().when('the value is a date range', () => {
    BddTest().then('it should return false', () => {
      expect(isDate([new Date('2026-01-10'), new Date('2026-01-20')])).toBe(false)
    })
  })

  BddTest().when('the value is null', () => {
    BddTest().then('it should return false', () => {
      expect(isDate(null)).toBe(false)
    })
  })
})

BddTest().given('the isMonthModel helper', () => {
  BddTest().when('the value has month and year properties', () => {
    BddTest().then('it should return true', () => {
      expect(isMonthModel({ month: 5, year: 2026 })).toBe(true)
    })
  })

  BddTest().when('the value is a Date instance', () => {
    BddTest().then('it should return false', () => {
      expect(isMonthModel(new Date('2026-01-10'))).toBe(false)
    })
  })

  BddTest().when('the value is a time model', () => {
    BddTest().then('it should return false', () => {
      expect(isMonthModel({ hours: 9, minutes: 0, seconds: 0 })).toBe(false)
    })
  })

  BddTest().when('the value is a date range', () => {
    BddTest().then('it should return false', () => {
      expect(isMonthModel([new Date('2026-01-10'), new Date('2026-01-20')])).toBe(false)
    })
  })

  BddTest().when('the value is null', () => {
    BddTest().then('it should return false', () => {
      expect(isMonthModel(null)).toBe(false)
    })
  })
})

BddTest().given('the isTimeModel helper', () => {
  BddTest().when('the value has hours and minutes properties', () => {
    BddTest().then('it should return true', () => {
      expect(isTimeModel({ hours: 9, minutes: 30, seconds: 0 })).toBe(true)
    })
  })

  BddTest().when('the value is a Date instance', () => {
    BddTest().then('it should return false', () => {
      expect(isTimeModel(new Date('2026-01-10'))).toBe(false)
    })
  })

  BddTest().when('the value is a month model', () => {
    BddTest().then('it should return false', () => {
      expect(isTimeModel({ month: 0, year: 2026 })).toBe(false)
    })
  })

  BddTest().when('the value is a date range', () => {
    BddTest().then('it should return false', () => {
      expect(isTimeModel([new Date('2026-01-10'), new Date('2026-01-20')])).toBe(false)
    })
  })

  BddTest().when('the value is null', () => {
    BddTest().then('it should return false', () => {
      expect(isTimeModel(null)).toBe(false)
    })
  })
})

BddTest().given('the isDateRange helper', () => {
  BddTest().when('the value is an array of two dates', () => {
    BddTest().then('it should return true', () => {
      expect(isDateRange([new Date('2026-01-10'), new Date('2026-01-20')])).toBe(true)
    })
  })

  BddTest().when('the value is an array with one date', () => {
    BddTest().then('it should return false', () => {
      expect(isDateRange([new Date('2026-01-10')] as unknown as [Date, Date])).toBe(false)
    })
  })

  BddTest().when('the value is an array containing a non-date item', () => {
    BddTest().then('it should return false', () => {
      expect(isDateRange([new Date('2026-01-10'), 'invalid'] as unknown as [Date, Date])).toBe(false)
    })
  })

  BddTest().when('the value is a Date instance', () => {
    BddTest().then('it should return false', () => {
      expect(isDateRange(new Date('2026-01-10'))).toBe(false)
    })
  })

  BddTest().when('the value is null', () => {
    BddTest().then('it should return false', () => {
      expect(isDateRange(null)).toBe(false)
    })
  })
})

BddTest().given('the isMonthRange helper', () => {
  BddTest().when('the value is an array of two month models', () => {
    BddTest().then('it should return true', () => {
      expect(isMonthRange([{ month: 0, year: 2026 }, { month: 5, year: 2026 }])).toBe(true)
    })
  })

  BddTest().when('the value is an array with one month model', () => {
    BddTest().then('it should return false', () => {
      expect(isMonthRange([{ month: 0, year: 2026 }] as unknown as [{ month: number, year: number }, { month: number, year: number }])).toBe(false)
    })
  })

  BddTest().when('the value is a single month model', () => {
    BddTest().then('it should return false', () => {
      expect(isMonthRange({ month: 0, year: 2026 })).toBe(false)
    })
  })

  BddTest().when('the value is a date range', () => {
    BddTest().then('it should return false', () => {
      expect(isMonthRange([new Date('2026-01-10'), new Date('2026-01-20')])).toBe(false)
    })
  })

  BddTest().when('the value is null', () => {
    BddTest().then('it should return false', () => {
      expect(isMonthRange(null)).toBe(false)
    })
  })
})

BddTest().given('the isTimeRange helper', () => {
  BddTest().when('the value is an array of two time models', () => {
    BddTest().then('it should return true', () => {
      expect(isTimeRange([{ hours: 9, minutes: 0, seconds: 0 }, { hours: 17, minutes: 0, seconds: 0 }])).toBe(true)
    })
  })

  BddTest().when('the value is an array with one time model', () => {
    BddTest().then('it should return false', () => {
      expect(isTimeRange([{ hours: 9, minutes: 0, seconds: 0 }] as unknown as [{ hours: number, minutes: number }, { hours: number, minutes: number }])).toBe(false)
    })
  })

  BddTest().when('the value is a single time model', () => {
    BddTest().then('it should return false', () => {
      expect(isTimeRange({ hours: 9, minutes: 0, seconds: 0 })).toBe(false)
    })
  })

  BddTest().when('the value is a date range', () => {
    BddTest().then('it should return false', () => {
      expect(isTimeRange([new Date('2026-01-10'), new Date('2026-01-20')])).toBe(false)
    })
  })

  BddTest().when('the value is null', () => {
    BddTest().then('it should return false', () => {
      expect(isTimeRange(null)).toBe(false)
    })
  })
})

BddTest().given('the toDate helper', () => {
  BddTest().when('the value is a Date instance', () => {
    BddTest().then('it should return the same date', () => {
      const date = new Date('2026-01-10')
      expect(toDate(date)).toBe(date)
    })
  })

  BddTest().when('the value is a valid month model', () => {
    BddTest().then('it should return the first day of the given month and year', () => {
      const result = toDate({ month: 0, year: 2026 })
      expect(result).toEqual(new Date(2026, 0, 1))
    })
  })

  BddTest().when('the value is an invalid month model', () => {
    BddTest().then('it should return null', () => {
      expect(toDate({ month: Number.NaN, year: 2026 })).toBeNull()
    })
  })

  BddTest().when('the value is a time model', () => {
    BddTest().then('it should return null', () => {
      expect(toDate({ hours: 9, minutes: 0, seconds: 0 })).toBeNull()
    })
  })

  BddTest().when('the value is a date range', () => {
    BddTest().then('it should return null', () => {
      expect(toDate([new Date('2026-01-10'), new Date('2026-01-20')])).toBeNull()
    })
  })

  BddTest().when('the value is null', () => {
    BddTest().then('it should return null', () => {
      expect(toDate(null)).toBeNull()
    })
  })
})

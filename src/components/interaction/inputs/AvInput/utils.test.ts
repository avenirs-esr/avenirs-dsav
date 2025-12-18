import type { AvInputProps } from '@/components/interaction/inputs/AvInput/AvInput.vue'
import { beforeEach, expect } from 'vitest'
import { formatDateForInputType, formatDisplayedDate, getDateInputPlaceholder, getDateInputPrefixIcon, isDateInputType, SUPPORTED_DATE_INPUT_TYPES } from '@/components/interaction/inputs/AvInput/utils'
import { BddTest } from '@/tests/utils'
import { MDI_ICONS } from '@/tokens'

const UNSUPPORTED_DATE_INPUT_TYPES: AvInputProps['type'][] = ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'color', 'file', 'hidden', 'range', undefined]
const FALSE_AND_UNSUPPORTED_DATE_INPUT_TYPES = [...UNSUPPORTED_DATE_INPUT_TYPES, 'invalid-type']

BddTest().given('an isDateInputType method', () => {
  SUPPORTED_DATE_INPUT_TYPES.forEach((type: string | undefined) => {
    BddTest().when(`the type is '${type}'`, () => {
      let result: boolean

      beforeEach(() => {
        result = isDateInputType(type)
      })

      BddTest().then(`it should return true`, () => {
        expect(result).toBe(true)
      })
    })
  })

  FALSE_AND_UNSUPPORTED_DATE_INPUT_TYPES.forEach((type: string | undefined) => {
    BddTest().when(`the type is '${type}'`, () => {
      let result: boolean

      beforeEach(() => {
        result = isDateInputType(type)
      })

      BddTest().then(`it should return true`, () => {
        expect(result).toBe(false)
      })
    })
  })
})

BddTest().given('a formatDateForInputType method', () => {
  SUPPORTED_DATE_INPUT_TYPES.forEach((type) => {
    BddTest().when(`the type is '${type}' and the date is valid`, () => {
      let result: string | undefined

      beforeEach(() => {
        result = formatDateForInputType(type, new Date('2024-06-15T12:30:00'))
      })

      BddTest().then(`it should return the formatted date string`, () => {
        const expectedFormats: Record<string, string> = {
          'date': '2024-06-15',
          'datetime-local': '2024-06-15T12:30',
          'month': '2024-06',
          'time': '12:30',
          'week': '2024-W24',
        }
        expect(result).toBe(expectedFormats[type])
      })
    })

    BddTest().when(`the type is '${type}' and the date is invalid`, () => {
      let result: string | undefined

      beforeEach(() => {
        result = formatDateForInputType(type, new Date('invalid-date'))
      })

      BddTest().then(`it should return undefined`, () => {
        expect(result).toBeUndefined()
      })
    })

    BddTest().when(`the type is '${type}' and the date is undefined`, () => {
      let result: string | undefined

      beforeEach(() => {
        result = formatDateForInputType(type, undefined)
      })

      BddTest().then(`it should return undefined`, () => {
        expect(result).toBeUndefined()
      })
    })
  })

  UNSUPPORTED_DATE_INPUT_TYPES.forEach((type) => {
    BddTest().when(`the type is '${type}' and the date is valid`, () => {
      let result: string | undefined

      beforeEach(() => {
        result = formatDateForInputType(type, new Date('2024-06-15T12:30:00'))
      })

      BddTest().then(`it should return undefined`, () => {
        expect(result).toBeUndefined()
      })
    })

    BddTest().when(`the type is '${type}' and the date is invalid`, () => {
      let result: string | undefined

      beforeEach(() => {
        result = formatDateForInputType(type, new Date('invalid-date'))
      })

      BddTest().then(`it should return undefined`, () => {
        expect(result).toBeUndefined()
      })
    })

    BddTest().when(`the type is '${type}' and the date is undefined`, () => {
      let result: string | undefined

      beforeEach(() => {
        result = formatDateForInputType(type, undefined)
      })

      BddTest().then(`it should return undefined`, () => {
        expect(result).toBeUndefined()
      })
    })
  })
})

BddTest().given('a formatDisplayedDate method', () => {
  SUPPORTED_DATE_INPUT_TYPES.forEach((type) => {
    BddTest().when(`the type is '${type}' and the dateValue is a valid date string`, () => {
      let result: string

      beforeEach(() => {
        result = formatDisplayedDate(type, '2024-06-15T12:30:00')
      })

      BddTest().then(`it should return the formatted displayed date string`, () => {
        const expectedDisplays: Record<string, string> = {
          'date': '15/06/2024',
          'datetime-local': '15/06/2024 12:30',
          'month': '06/2024',
          'time': '12:30 PM',
          'week': '15/06/2024 - 21/06/2024',
        }
        expect(result).toBe(expectedDisplays[type])
      })
    })

    BddTest().when(`the type is '${type}', the dateValue is a valid date string and the formatStr is provided`, () => {
      let result: string

      beforeEach(() => {
        result = formatDisplayedDate(type, '2024-06-15T12:30:00', 'dd/MM/yyyy')
      })

      BddTest().then(`it should return the formatted displayed date string using the custom format`, () => {
        const expectedDisplaysWithFormat: Record<string, string> = {
          'date': '15/06/2024',
          'datetime-local': '15/06/2024',
          'month': '15/06/2024',
          'time': '15/06/2024',
          'week': '15/06/2024 - 21/06/2024',
        }
        expect(result).toBe(expectedDisplaysWithFormat[type])
      })
    })

    BddTest().when(`the type is '${type}', the dateValue is a valid date string and a wrong formatStr is provided`, () => {
      let result: string

      beforeEach(() => {
        result = formatDisplayedDate(type, '2024-06-15T12:30:00', 'invalid-format')
      })

      BddTest().then(`it should return the formatted displayed date string using the fallback format`, () => {
        const fallbackDisplays: Record<string, string> = {
          'date': '15/06/2024',
          'datetime-local': '15/06/2024 12:30',
          'month': '06/2024',
          'time': '12:30 PM',
          'week': '15/06/2024 - 21/06/2024',
        }
        expect(result).toBe(fallbackDisplays[type])
      })
    })

    BddTest().when(`the type is '${type}' and the dateValue is an invalid date string`, () => {
      let result: string

      beforeEach(() => {
        result = formatDisplayedDate(type, 'invalid-date-string')
      })

      BddTest().then(`it should return an empty string`, () => {
        expect(result).toBe('')
      })
    })

    BddTest().when(`the type is '${type}', the dateValue is an invalid date string and the formatStr is provided`, () => {
      let result: string

      beforeEach(() => {
        result = formatDisplayedDate(type, 'invalid-date-string', 'dd-MM-yyyy')
      })

      BddTest().then(`it should return an empty string`, () => {
        expect(result).toBe('')
      })
    })

    BddTest().when(`the type is '${type}' and the dateValue is undefined`, () => {
      let result: string

      beforeEach(() => {
        result = formatDisplayedDate(type, undefined)
      })

      BddTest().then(`it should return an empty string`, () => {
        expect(result).toBe('')
      })
    })
  })

  UNSUPPORTED_DATE_INPUT_TYPES.forEach((type) => {
    BddTest().when(`the type is '${type}' and the dateValue is a valid date string`, () => {
      let result: string

      beforeEach(() => {
        result = formatDisplayedDate(type, '2024-06-15T12:30:00')
      })

      BddTest().then(`it should return an empty string`, () => {
        expect(result).toBe('')
      })
    })

    BddTest().when(`the type is '${type}' and the dateValue is an invalid date string`, () => {
      let result: string

      beforeEach(() => {
        result = formatDisplayedDate(type, 'invalid-date-string')
      })

      BddTest().then(`it should return an empty string`, () => {
        expect(result).toBe('')
      })
    })

    BddTest().when(`the type is '${type}' and the dateValue is undefined`, () => {
      let result: string

      beforeEach(() => {
        result = formatDisplayedDate(type, undefined)
      })

      BddTest().then(`it should return an empty string`, () => {
        expect(result).toBe('')
      })
    })
  })
})

BddTest().given('a getDateInputPlaceholder method', () => {
  SUPPORTED_DATE_INPUT_TYPES.forEach((type) => {
    BddTest().when(`the type is '${type}'`, () => {
      let result: string

      beforeEach(() => {
        result = getDateInputPlaceholder(type)
      })

      BddTest().then(`it should return the correct placeholder`, () => {
        const expectedPlaceholders: Record<string, string> = {
          'date': 'dd/mm/yyyy',
          'datetime-local': 'dd/mm/yyyy --:--',
          'month': 'mm/yyyy',
          'time': '--:--',
          'week': 'dd/mm/yyyy - dd/mm/yyyy',
        }
        expect(result).toBe(expectedPlaceholders[type])
      })
    })
  })

  UNSUPPORTED_DATE_INPUT_TYPES.forEach((type) => {
    BddTest().when(`the type is '${type}'`, () => {
      let result: string

      beforeEach(() => {
        result = getDateInputPlaceholder(type)
      })

      BddTest().then(`it should return an empty string`, () => {
        expect(result).toBe('')
      })
    })
  })
})

BddTest().given('a getDateInputPrefixIcon method', () => {
  const typeToIconMap: Record<string, string | undefined> = {
    'date': MDI_ICONS.CALENDAR_BLANK_OUTLINE,
    'datetime-local': MDI_ICONS.CALENDAR_TIME,
    'month': MDI_ICONS.CALENDAR_MONTH_OUTLINE,
    'time': MDI_ICONS.CLOCK_OUTLINE,
    'week': MDI_ICONS.CALENDAR_WEEK_OUTLINE,
  }

  SUPPORTED_DATE_INPUT_TYPES.forEach((type) => {
    BddTest().when(`the type is '${type}'`, () => {
      let result: string | undefined

      beforeEach(() => {
        result = getDateInputPrefixIcon(type)
      })

      BddTest().then(`it should return the '${typeToIconMap[type]}' prefix icon`, () => {
        expect(result).toBe(typeToIconMap[type])
      })
    })
  })

  UNSUPPORTED_DATE_INPUT_TYPES.forEach((type) => {
    BddTest().when(`the type is '${type}'`, () => {
      let result: string | undefined

      beforeEach(() => {
        result = getDateInputPrefixIcon(type)
      })

      BddTest().then(`it should return undefined`, () => {
        expect(result).toBeUndefined()
      })
    })
  })
})

import { beforeEach, expect } from 'vitest'
import { BddTest } from '@/test-utils'
import { bytesToMegabytes, remToPx } from '@/utils/units/units'

BddTest().given('a rem to px conversion utility', () => {
  BddTest().and('a number input', () => {
    let result: number

    beforeEach(() => {
      result = remToPx(2)
    })

    BddTest().when('the function is called with a number', () => {
      BddTest().then('it should return the correct pixel value', () => {
        const fontSize = Number.parseFloat(getComputedStyle(document.documentElement).fontSize)
        expect(result).toBe(2 * fontSize)
      })
    })
  })

  BddTest().and('a string input with rem unit', () => {
    let result: number

    beforeEach(() => {
      result = remToPx('3rem')
    })

    BddTest().when('the function is called with a rem string', () => {
      BddTest().then('it should return the correct pixel value', () => {
        const fontSize = Number.parseFloat(getComputedStyle(document.documentElement).fontSize)
        expect(result).toBe(3 * fontSize)
      })
    })
  })

  BddTest().and('an invalid string input', () => {
    let result: number

    beforeEach(() => {
      result = remToPx('invalid')
    })

    BddTest().when('the function is called with an invalid string', () => {
      BddTest().then('it should return 0', () => {
        expect(result).toBe(0)
      })
    })
  })

  BddTest().and('an invalid string input with rem unit', () => {
    let result: number

    beforeEach(() => {
      result = remToPx('a12brem')
    })

    BddTest().then('it should return 0', () => {
      expect(result).toBe(0)
    })
  })
})

BddTest().given('the file size helper', () => {
  BddTest().when('a file size in bytes is provided', () => {
    BddTest().then('it should return the size in Mo rounded to two decimals', () => {
      expect(bytesToMegabytes(5123456)).toBe(4.89)
    })
  })

  BddTest().when('the file size is less than one Mo', () => {
    BddTest().then('it should return the size in Mo rounded to two decimals', () => {
      expect(bytesToMegabytes(500000)).toBe(0.48)
    })
  })

  BddTest().when('the file size is exactly one Mo', () => {
    BddTest().then('it should return 1', () => {
      expect(bytesToMegabytes(1024 * 1024)).toBe(1)
    })
  })

  BddTest().when('a custom decimal precision is provided', () => {
    BddTest().then('it should return the size in Mo rounded to the specified decimals', () => {
      expect(bytesToMegabytes(5123456, 3)).toBe(4.886)
    })
  })
})

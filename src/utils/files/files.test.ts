import { expect } from 'vitest'
import { BddTest } from '@/test-utils'
import { formatFileSize, getFileExtension } from '@/utils/files/files'

BddTest().given('the file extension helper', () => {
  BddTest().when('the file name has a single extension', () => {
    BddTest().then('it should return the uppercase extension', () => {
      expect(getFileExtension('report.pdf')).toBe('PDF')
    })
  })

  BddTest().when('the file name has several dots', () => {
    BddTest().then('it should return the last segment', () => {
      expect(getFileExtension('report.final.v2.docx')).toBe('DOCX')
    })
  })

  BddTest().when('the file name has no extension', () => {
    BddTest().then('it should return an empty string', () => {
      expect(getFileExtension('archive')).toBe('')
    })
  })

  BddTest().when('the file name is a dotfile', () => {
    BddTest().then('it should return an empty string', () => {
      expect(getFileExtension('.gitignore')).toBe('')
    })
  })

  BddTest().when('the file name is empty', () => {
    BddTest().then('it should return an empty string', () => {
      expect(getFileExtension('')).toBe('')
    })
  })
})

BddTest().given('the file size formatting helper', () => {
  BddTest().when('the size is zero', () => {
    BddTest().then('it should return 0 B', () => {
      expect(formatFileSize(0)).toBe('0 B')
    })
  })

  BddTest().when('the size is negative or invalid', () => {
    BddTest().then('it should return 0 B', () => {
      expect(formatFileSize(-42)).toBe('0 B')
      expect(formatFileSize(Number.NaN)).toBe('0 B')
    })
  })

  BddTest().when('the size is below one kilobyte', () => {
    BddTest().then('it should return the size in bytes', () => {
      expect(formatFileSize(820)).toBe('820 B')
    })
  })

  BddTest().when('the size is in the kilobyte range', () => {
    BddTest().then('it should return the size in kilobytes', () => {
      expect(formatFileSize(2048)).toBe('2 KB')
    })
  })

  BddTest().when('the size is in the megabyte range', () => {
    BddTest().then('it should return the size in megabytes', () => {
      expect(formatFileSize(5123456)).toBe('4.89 MB')
    })
  })

  BddTest().when('the size is in the gigabyte range', () => {
    BddTest().then('it should return the size in gigabytes', () => {
      expect(formatFileSize(3 * 1024 ** 3)).toBe('3 GB')
    })
  })

  BddTest().when('a decimal precision is provided', () => {
    BddTest().then('it should round to that precision', () => {
      expect(formatFileSize(5123456, 1)).toBe('4.9 MB')
      expect(formatFileSize(5123456, 0)).toBe('5 MB')
    })
  })
})

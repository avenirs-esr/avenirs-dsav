import { expect } from 'vitest'
import { BddTest } from '@/tests/utils'
import { isValidLink } from '@/utils'

BddTest().given('a valid link check', () => {
  BddTest().when('providing an HTTPS URL', () => {
    BddTest().then('it should return true', () => {
      expect(isValidLink('https://example.com')).toBe(true)
    })
  })

  BddTest().when('providing an HTTP URL', () => {
    BddTest().then('it should return true', () => {
      expect(isValidLink('http://example.com/path')).toBe(true)
    })
  })

  BddTest().when('providing an undefined value', () => {
    BddTest().then('it should return false', () => {
      expect(isValidLink(undefined)).toBe(false)
    })
  })

  BddTest().when('providing an empty value', () => {
    BddTest().then('it should return false', () => {
      expect(isValidLink('')).toBe(false)
    })
  })

  BddTest().when('providing an invalid URL format', () => {
    BddTest().then('it should return false', () => {
      expect(isValidLink('hello world')).toBe(false)
    })
  })

  BddTest().when('providing an unsupported protocol', () => {
    BddTest().then('it should return false', () => {
      expect(isValidLink('javascript:alert(1)')).toBe(false)
    })
  })

  BddTest().when('providing a relative link', () => {
    BddTest().then('it should return false', () => {
      expect(isValidLink('/my-page')).toBe(false)
    })
  })

  BddTest().when('providing a hostname without TLD', () => {
    BddTest().then('it should return false', () => {
      expect(isValidLink('http://w')).toBe(false)
    })
  })

  BddTest().when('providing a URL with a one-letter TLD', () => {
    BddTest().then('it should return false', () => {
      expect(isValidLink('http://w.e')).toBe(false)
    })
  })

  BddTest().when('providing a URL with www and only two labels', () => {
    BddTest().then('it should return false', () => {
      expect(isValidLink('http://www.example')).toBe(false)
    })
  })

  BddTest().when('providing a URL with www but without final suffix', () => {
    BddTest().then('it should return false', () => {
      expect(isValidLink('http://www.something')).toBe(false)
    })
  })

  BddTest().when('providing a URL with www and three labels', () => {
    BddTest().then('it should return true', () => {
      expect(isValidLink('http://www.example.com')).toBe(true)
    })
  })

  BddTest().when('providing an URL containing surrounding spaces', () => {
    BddTest().then('it should return false', () => {
      expect(isValidLink(' https://example.com ')).toBe(false)
    })
  })
})

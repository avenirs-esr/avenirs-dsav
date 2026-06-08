/**
 * Returns the link validation status.
 * Only absolute HTTP/HTTPS URLs are accepted.
 * The input must not contain spaces, the hostname must include at least one dot,
 * and the final TLD must contain only letters with a length between 2 and 63.
 * Hostnames starting with "www" must include at least 3 labels (e.g. www.example.com).
 *
 * @param {string} link - The URL string to validate.
 * @returns {boolean} True if the link is valid, false otherwise.
 *
 * @example
 * isValidLink('https://example.com') // returns true
 * isValidLink('https://www.example.com') // returns true
 * isValidLink('http://www.example') // returns false
 * isValidLink('http://example.com/path') // returns true
 * isValidLink('') // returns false
 * isValidLink('hello world') // returns false
 * isValidLink(' https://example.com ') // returns false
 * isValidLink('https://example .com ') // returns false
 * isValidLink('javascript:alert(1)') // returns false
 * isValidLink('http://w.e') // returns false
 * isValidLink('/my-page') // returns false (relative URL not allowed by default)
 *
 * @remarks
 * The function uses the URL constructor for validation and then applies additional
 * hostname/TLD checks to reject incomplete or malformed domains.
 */
export function isValidLink (link?: string): boolean {
  if (!link || link.includes(' ')) {
    return false
  }

  try {
    const url = new URL(link)

    if (!['http:', 'https:'].includes(url.protocol)) {
      return false
    }

    const labels = url.hostname.toLowerCase().split('.')

    if (labels.length < 2) {
      return false
    }

    if (labels[0] === 'www' && labels.length < 3) {
      return false
    }

    if (labels.includes('')) {
      return false
    }

    const tld = labels.at(-1) ?? ''

    return /^[a-z]{2,63}$/.test(tld)
  }
  catch {
    return false
  }
}

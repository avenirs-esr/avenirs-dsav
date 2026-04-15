/**
 * Returns the link validation status.
 * By default, only absolute HTTP/HTTPS URLs are accepted.
 *
 * @param {string} link - The URL string to validate.
 * @returns {boolean} True if the link is valid, false otherwise.
 *
 * @example
 * isValidLink('https://example.com') // returns true
 * isValidLink('http://example.com/path') // returns true
 * isValidLink('') // returns false
 * isValidLink('hello world') // returns false
 * isValidLink('javascript:alert(1)') // returns false
 * isValidLink('/my-page') // returns false (relative URL not allowed by default)
 *
 * @remarks
 * The function uses the URL constructor for validation, which ensures that the link is well-formed.
 * It also checks that the protocol is either 'http:' or 'https:' to prevent potentially dangerous links (e.g., 'javascript:').
 */
export function isValidLink (link?: string): boolean {
  const trimmedLink = link?.trim() ?? ''

  if (!trimmedLink) {
    return false
  }

  try {
    const url = new URL(trimmedLink)

    return ['http:', 'https:'].includes(url.protocol.toLowerCase())
  }
  catch {
    return false
  }
}

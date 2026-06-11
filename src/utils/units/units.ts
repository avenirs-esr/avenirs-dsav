/**
 * Convert rem units to pixels according to the root font size.
 * @param rem The value in rem units (string with 'rem' suffix or number).
 * @returns The equivalent value in pixels.
 */
export function remToPx (rem: string | number) {
  if (typeof rem === 'number') {
    return rem * Number.parseFloat(getComputedStyle(document.documentElement).fontSize)
  }

  if (typeof rem === 'string' && rem.endsWith('rem')) {
    const remValue = Number.parseFloat(rem)

    if (Number.isNaN(remValue)) {
      return 0
    }

    const fontSize = Number.parseFloat(getComputedStyle(document.documentElement).fontSize)
    return remValue * fontSize
  }
  return 0
}

/**
 * Convert bytes to megabytes with specified decimal precision.
 * @param bytes The value in bytes to convert.
 * @param decimals The number of decimal places to round to (default is 2).
 * @returns The equivalent value in megabytes, rounded to the specified decimals.
 * @example
 * bytesToMegabytes(5123456) // returns 4.89
 * bytesToMegabytes(500000) // returns 0.48
 * bytesToMegabytes(1024 * 1024) // returns 1
 * bytesToMegabytes(5123456, 3) // returns 4.894
 */
export function bytesToMegabytes (bytes: number, decimals = 2): number {
  const factor = 10 ** decimals
  return Math.round((bytes / 1024 / 1024) * factor) / factor
}

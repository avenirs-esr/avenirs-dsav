const FILE_SIZE_UNITS = ['B', 'KB', 'MB', 'GB'] as const

/**
 * Extract the uppercase extension of a file name, without the leading dot.
 * @param fileName The name of the file.
 * @returns The uppercase extension, or an empty string when the file has none.
 * @example
 * getFileExtension('report.final.pdf') // returns 'PDF'
 * getFileExtension('archive') // returns ''
 * getFileExtension('.gitignore') // returns ''
 */
export function getFileExtension (fileName: string): string {
  const lastDotIndex = fileName.lastIndexOf('.')

  if (lastDotIndex <= 0) {
    return ''
  }
  return fileName.slice(lastDotIndex + 1).toUpperCase()
}

/**
 * Format a size in bytes into a human readable string, using a 1024 base.
 * @param bytes The size in bytes.
 * @param decimals The number of decimal places to round to (default is 2).
 * @returns The formatted size, suffixed with its unit.
 * @example
 * formatFileSize(0) // returns '0 B'
 * formatFileSize(820) // returns '820 B'
 * formatFileSize(5123456) // returns '4.89 MB'
 * formatFileSize(5123456, 1) // returns '4.9 MB'
 */
export function formatFileSize (bytes: number, decimals = 2): string {
  if (!Number.isFinite(bytes) || bytes <= 0) {
    return `0 ${FILE_SIZE_UNITS[0]}`
  }

  const exponent = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), FILE_SIZE_UNITS.length - 1)
  const factor = 10 ** decimals
  const value = Math.round((bytes / 1024 ** exponent) * factor) / factor

  return `${value} ${FILE_SIZE_UNITS[exponent]}`
}

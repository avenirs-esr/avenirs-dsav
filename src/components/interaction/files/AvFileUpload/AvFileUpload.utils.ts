import type { AvFileMaxSizeMb } from '@/components/interaction/files/AvFileUpload/AvFileUpload.types'

export function isFileAccepted (file: File, acceptTypes: string | undefined): boolean {
  if (!acceptTypes) {
    return true
  }

  const acceptedTypes = acceptTypes.split(',').map(type => type.trim().toLowerCase())

  return acceptedTypes.some((type) => {
    if (type.startsWith('.')) {
      return file.name.toLowerCase().endsWith(type)
    }
    else if (type.includes('/')) {
      return file.type === type || file.type.startsWith(`${type.split('/')[0]}/`)
    }
    return false
  })
}

export function isFileSizeAccepted (file: File, maxFileSizeMb: AvFileMaxSizeMb | undefined): boolean {
  const limit = typeof maxFileSizeMb === 'function' ? maxFileSizeMb(file) : maxFileSizeMb
  if (limit === undefined || limit <= 0) {
    return true
  }

  return file.size <= limit * 1024 * 1024
}

export function getRemainingSlots (enableMultiple: boolean, maxFiles: number | undefined, currentFilesCount: number): number {
  if (!enableMultiple) {
    return 1
  }

  if (maxFiles === undefined || maxFiles <= 0) {
    return Infinity
  }

  return Math.max(maxFiles - currentFilesCount, 0)
}

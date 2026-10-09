import type { AvFileMaxSizeMb, AvFileUploadValidationError } from '@/components/interaction/files/AvFileUpload/AvFileUpload.types'

interface IsFileAcceptedParams {
  file: File
  acceptTypes: string | undefined
}

/**
 * Checks if a file is accepted based on the provided accepted types.
 * @param param0 Object containing the file and accepted types.
 * @param param0.file The file to check.
 * @param param0.acceptTypes The accepted file types as a string.
 * @returns True if the file is accepted based on the accepted types, false otherwise.
 */
function isFileAccepted ({ file, acceptTypes }: IsFileAcceptedParams): boolean {
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

interface IsFileSizeAcceptedParams {
  file: File
  maxFileSizeMb: AvFileMaxSizeMb | undefined
}

/**
 * Checks if a file size is within the allowed limit.
 * @param param0 Object containing the file and the maximum allowed file size.
 * @param param0.file The file to check.
 * @param param0.maxFileSizeMb The maximum allowed file size in megabytes.
 * @returns True if the file size is within the allowed limit, false otherwise.
 */
function isFileSizeAccepted ({ file, maxFileSizeMb }: IsFileSizeAcceptedParams): boolean {
  const limit = typeof maxFileSizeMb === 'function' ? maxFileSizeMb(file) : maxFileSizeMb
  if (limit === undefined || limit <= 0) {
    return true
  }

  return file.size <= limit * 1024 * 1024
}

interface GetRemainingSlotsParams {
  enableMultiple: boolean
  maxFiles: number | undefined
  currentFilesCount: number
}

/**
 * Calculates the remaining slots for file uploads based on the current state and configuration.
 * @param param0 Object containing the multiple upload flag, maximum files, and current files count.
 * @param param0.enableMultiple Flag indicating if multiple file uploads are allowed.
 * @param param0.maxFiles The maximum number of files allowed.
 * @param param0.currentFilesCount The current number of uploaded files.
 * @returns The number of remaining slots available for file uploads.
 */
function getRemainingSlots ({ enableMultiple, maxFiles, currentFilesCount }: GetRemainingSlotsParams): number {
  if (!enableMultiple) {
    return 1
  }

  if (maxFiles === undefined || maxFiles <= 0) {
    return Infinity
  }

  return Math.max(maxFiles - currentFilesCount, 0)
}

interface ValidateFilesParams {
  files: File[]
  acceptTypes: string | undefined
  maxFileSizeMb: AvFileMaxSizeMb | undefined
  enableMultiple: boolean
  maxFiles: number | undefined
  currentFilesCount: number
}

/**
 * Validates a list of files against the accepted types, maximum file size, and upload constraints.
 * @param param0 Object containing the files and validation parameters.
 * @param param0.files The list of files to validate.
 * @param param0.acceptTypes The accepted file types as a string.
 * @param param0.maxFileSizeMb The maximum allowed file size in megabytes.
 * @param param0.enableMultiple Flag indicating if multiple file uploads are allowed.
 * @param param0.maxFiles The maximum number of files allowed.
 * @param param0.currentFilesCount The current number of uploaded files.
 * @returns An object containing the files that can be added and an array of validation errors.
 */
export function validateFiles ({
  files,
  acceptTypes,
  maxFileSizeMb,
  enableMultiple,
  maxFiles,
  currentFilesCount
}: ValidateFilesParams): { toAdd: File[], errors: AvFileUploadValidationError[] } {
  const errors: AvFileUploadValidationError[] = []

  const acceptedTypeFiles = files.filter(file => isFileAccepted({ file, acceptTypes }))
  if (acceptedTypeFiles.length < files.length) {
    errors.push('acceptTypeError')
  }

  const acceptedFiles = acceptedTypeFiles.filter(file => isFileSizeAccepted({ file, maxFileSizeMb }))
  if (acceptedFiles.length < acceptedTypeFiles.length) {
    errors.push('fileSizeError')
  }

  const toAdd = acceptedFiles.slice(0, getRemainingSlots({ enableMultiple, maxFiles, currentFilesCount }))
  if (toAdd.length < acceptedFiles.length) {
    errors.push('maxFilesError')
  }

  return { toAdd, errors }
}

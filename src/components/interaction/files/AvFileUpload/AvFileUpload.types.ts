export type AvFileMaxSizeMb = number | ((file: File) => number | undefined)

export type AvFileUploadValidationError = 'acceptTypeError' | 'fileSizeError' | 'maxFilesError'

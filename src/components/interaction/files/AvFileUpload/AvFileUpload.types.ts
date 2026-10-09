type MaybeArray<T> = T | T[]
type MaybePromise<T> = T | Promise<T>

/**
 * Represents the validation errors returned by a validator for a single file.
 */
export type AvFileUploadFileValidationErrors<TError extends string> =
  | MaybeArray<TError>
  | void

/**
 * Validates a single file.
 */
export type AvFileUploadFileValidator<TError extends string> = (file: File) => MaybePromise<AvFileUploadFileValidationErrors<TError>>

/**
 * Associates validation errors with a specific file.
 */
export interface AvFileUploadFileValidationResult<TError extends string> {
  file: File
  errors: MaybeArray<TError>
}

/**
 * Represents the result returned by a validator for a collection of files.
 */
export type AvFileUploadFilesValidationResult<TError extends string> =
  | TError
  | AvFileUploadFileValidationResult<TError>[]
  | void

/**
 * Validates a collection of files.
 */
export type AvFileUploadFilesValidator<TError extends string> = (files: File[]) => MaybePromise<AvFileUploadFilesValidationResult<TError>>

/**
 * Represents a file rejected during validation and its error codes.
 */
export interface AvFileUploadFileRejection<TError extends string> {
  file: File
  errors: TError[]
}

/**
 * Represents the validation errors emitted by the `filesRejected` event.
 */
export type AvFileUploadFilesRejections<TError extends string> =
  | TError
  | AvFileUploadFileRejection<TError>[]

/**
 * Gets the error message associated with a validation error.
 */
export type AvFileUploadErrorMessageGetter<TError extends string> = (error: TError) => string | void

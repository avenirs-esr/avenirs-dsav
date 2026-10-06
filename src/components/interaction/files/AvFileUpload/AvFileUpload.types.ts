import type { AvInteractiveProps } from '@/types'

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

/**
 * AvFileUpload component props.
 */
export interface AvFileUploadProps<TError extends string = string> extends AvInteractiveProps {
  /**
   * Unique identifier for the file upload component.
   * If not specified, a random ID is generated.
   *
   * @default `file-upload-${crypto.randomUUID()}`
   */
  id?: string

  /**
   * Title of the file upload section.
   */
  title: string

  /**
   * Description of the file upload section.
   */
  description: string

  /**
   * ARIA label for file upload button.
   *
   * @default ''
   */
  ariaLabel?: string

  /**
   * Currently selected files.
   * With `enableMultiple`, newly selected files are appended to the list;
   * otherwise, they replace the current selection.
   *
   * @default []
   */
  modelValue?: File[]

  /**
   * File name to display instead of the name of the selected file(s).
   * Useful for displaying a persisted file that is not available as a `File` object.
   *
   * @default undefined
   */
  fileName?: string

  /**
   * Accepted file types, specified as a string (like HTML `accept` attribute)
   * or an array of strings (which will be transformed into a string).
   *
   * @default undefined
   */
  accept?: string | string[]

  /**
   * Whether the file upload is disabled.
   * When disabled, files cannot be added or deleted.
   *
   * @default false
   */
  disabled?: boolean

  /**
   * Displays the current file(s) in preview mode without allowing additional files to be added.
   *
   * In single-file, non-compact mode, preview mode is automatically enabled once a file is selected.
   * Set this prop to `true` to force preview mode in other cases, such as when displaying existing
   * files in multi-file mode or a persisted file through `fileName`.
   *
   * @default false
   */
  isPreview?: boolean

  /**
   * Whether files can be deleted.
   * When false, files can still be added but existing files cannot be deleted.
   *
   * @default true
   */
  deletable?: boolean

  /**
   * Enable multiple file uploads.
   * When enabled, newly selected files are appended to the existing files.
   *
   * @default false
   */
  enableMultiple?: boolean

  /**
   * Validates each file individually.
   *
   * Can be used alone or together with `validateFiles` to apply file-level validation
   * in addition to collection-level validation.
   * When both validators reject the same file, their errors are merged.
   *
   * @example
   * ```ts
   * validateFile: file => file.size > MAX_FILE_SIZE ? 'file-too-large' : undefined
   * ```
   *
   * @default undefined
   */
  validateFile?: AvFileUploadFileValidator<TError>

  /**
   * Validates the files being added as a collection.
   * Files already present in `modelValue` are not provided.
   *
   * A single error rejects the whole selection and skips `validateFile`.
   * An array associates errors with specific files and is combined with `validateFile` results.
   *
   * @example
   * ```ts
   * validateFiles: files => files.length > MAX_FILES ? 'too-many-files' : undefined
   * ```
   *
   * @example
   * ```ts
   * validateFiles: files => files
   *   .filter(file => file.name === 'existing.pdf')
   *   .map(file => ({ file, errors: 'duplicate-file' }))
   * ```
   *
   * @default undefined
   */
  validateFiles?: AvFileUploadFilesValidator<TError>

  /**
   * Function to get the error message associated with a validation error.
   *
   * The returned message is displayed automatically for validation errors when neither
   * `errorMessage` nor `validMessage` is defined.
   * Returning `void` prevents the validation error from being displayed.
   *
   * @default undefined
   */
  getErrorMessage?: AvFileUploadErrorMessageGetter<TError>

  /**
   * Error message to display.
   * When defined, takes precedence over the message returned by `getErrorMessage`.
   *
   * @default undefined
   */
  errorMessage?: string

  /**
   * Success message to display.
   * When defined, takes precedence over the message returned by `getErrorMessage`.
   *
   * @default undefined
   */
  validMessage?: string

  /**
   * Display in compact mode with file pills.
   *
   * @default false
   */
  compact?: boolean

  /**
   * Max width of the component.
   *
   * @default undefined
   */
  maxWidth?: string

  /**
   * Delete button label.
   *
   * @default 'Delete'
   */
  deleteButtonLabel?: string

  /**
   * Prefix for the download button label in `AvFilePill`.
   *
   * @default 'Download'
   */
  filePillDownloadPrefixLabel?: string

  /**
   * Prefix for the delete button label in `AvFilePill`.
   *
   * @default 'Delete'
   */
  filePillDeletePrefixLabel?: string
}

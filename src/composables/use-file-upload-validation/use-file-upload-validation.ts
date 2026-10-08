import type { MaybeRefOrGetter, Ref } from 'vue'
import type { AvFileUploadBeforeAdd } from '@/components/interaction/files/AvFileUpload/AvFileUpload.types'
import { toValue } from 'vue'

type MaybeArray<T> = T | T[]

/**
 * Validation error codes produced by the built-in rules of {@link useFileUploadValidation}.
 */
export type FileUploadBuiltInError = 'invalid-file-type' | 'file-too-large' | 'too-many-files'

/**
 * Options of the {@link useFileUploadValidation} composable.
 */
export interface UseFileUploadValidationOptions<TError extends string = never> {
  /**
   * Accepted file types, with the same syntax as the HTML `accept` attribute
   * (extensions, MIME types and wildcards such as `image/*`).
   */
  accept?: string | string[]

  /**
   * Maximum size of a file, in bytes.
   */
  maxSize?: number

  /**
   * Maximum number of files, including the ones already selected (see `files`).
   * When exceeded, the whole selection is rejected.
   */
  maxFiles?: number

  /**
   * Files already selected, typically the `v-model` of `AvFileUpload`.
   * Used by `maxFiles`.
   */
  files?: MaybeRefOrGetter<File[]>

  /**
   * Custom validation of a single file.
   * Returns the error code(s) of the file, or nothing when the file is valid.
   */
  validate?: (file: File) => MaybeArray<TError> | void | Promise<MaybeArray<TError> | void>

  /**
   * Gets the message associated with an error code.
   * Returning `undefined` prevents the error from being displayed.
   */
  getErrorMessage?: (error: TError | FileUploadBuiltInError) => string | undefined
}

/**
 * Return type of the {@link useFileUploadValidation} composable.
 */
export interface UseFileUploadValidationReturn {
  /**
   * To bind to the `beforeAdd` prop of `AvFileUpload`.
   */
  beforeAdd: AvFileUploadBeforeAdd

  /**
   * To bind to the `errorMessage` prop of `AvFileUpload`.
   */
  errorMessage: Ref<string | undefined>

  /**
   * Clears the error message.
   */
  reset: () => void
}

function matchesAccept (file: File, accept: string[]): boolean {
  const fileName = file.name.toLowerCase()
  const fileType = file.type.toLowerCase()

  return accept.some((rule) => {
    const normalized = rule.trim().toLowerCase()

    if (normalized.startsWith('.')) {
      return fileName.endsWith(normalized)
    }

    if (normalized.endsWith('/*')) {
      return fileType.startsWith(normalized.slice(0, -1))
    }

    return fileType === normalized
  })
}

/**
 * Provides validation for `AvFileUpload`.
 *
 * Files with errors are not added. With `maxFiles`, an excess selection is rejected as a whole.
 *
 * @example
 * ```ts
 * const files = ref<File[]>([])
 * const { beforeAdd, errorMessage, reset } = useFileUploadValidation({
 *   files,
 *   accept: ['.pdf', 'image/*'],
 *   maxSize: 5 * 1024 * 1024,
 *   getErrorMessage: error => t(`file-upload.errors.${error}`),
 * })
 * ```
 * ```vue
 * <AvFileUpload
 *   v-model="files"
 *   :before-add="beforeAdd"
 *   :error-message="errorMessage"
 *   @update:error-message="reset"
 * />
 * ```
 */
export function useFileUploadValidation<TError extends string = never> (
  options: UseFileUploadValidationOptions<TError> = {},
): UseFileUploadValidationReturn {
  const errorMessage = ref<string>()

  const acceptRules = computed(() => {
    const { accept } = options

    if (!accept) {
      return []
    }

    return (Array.isArray(accept) ? accept : accept.split(',')).filter(rule => rule.trim())
  })

  function reset () {
    errorMessage.value = undefined
  }

  function toMessages (errors: (TError | FileUploadBuiltInError)[]): string[] {
    return [...new Set(errors)]
      .map(error => options.getErrorMessage?.(error))
      .filter((message): message is string => !!message)
  }

  async function getFileErrors (file: File): Promise<(TError | FileUploadBuiltInError)[]> {
    const errors: (TError | FileUploadBuiltInError)[] = []

    if (acceptRules.value.length && !matchesAccept(file, acceptRules.value)) {
      errors.push('invalid-file-type')
    }

    if (options.maxSize !== undefined && file.size > options.maxSize) {
      errors.push('file-too-large')
    }

    const customErrors = await options.validate?.(file)

    if (customErrors) {
      errors.push(...(typeof customErrors === 'string' ? [customErrors] : customErrors))
    }

    return errors
  }

  const beforeAdd: AvFileUploadBeforeAdd = async (files) => {
    reset()

    const currentCount = toValue(options.files)?.length ?? 0

    if (options.maxFiles !== undefined && currentCount + files.length > options.maxFiles) {
      errorMessage.value = toMessages(['too-many-files']).join('\n') || undefined

      return []
    }

    const results = await Promise.all(files.map(async file => ({
      file,
      errors: await getFileErrors(file),
    })))

    const messages = results
      .map(({ file, errors }) => {
        const fileMessages = toMessages(errors)

        return fileMessages.length ? `${file.name}: ${fileMessages.join(', ')}` : undefined
      })
      .filter((message): message is string => !!message)

    errorMessage.value = messages.join('\n') || undefined

    return results.filter(({ errors }) => !errors.length).map(({ file }) => file)
  }

  return {
    beforeAdd,
    errorMessage,
    reset,
  }
}

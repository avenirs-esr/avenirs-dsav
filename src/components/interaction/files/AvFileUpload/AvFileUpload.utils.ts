import type { AvFileUploadErrorMessageGetter, AvFileUploadFilesRejections, AvFileUploadFilesValidator, AvFileUploadFileValidator } from '@/components/interaction/files/AvFileUpload/AvFileUpload.types'
import { type MaybeRefOrGetter, type Ref, toValue } from 'vue'

/**
 * Adds one or more validation errors to a file's existing errors.
 *
 * Errors are merged and deduplicated so a file is rejected only once
 * for each distinct validation error.
 */
export function handleFileErrors<TError extends string> (
  rejections: Map<File, TError[]>,
  file: File,
  errors: TError | TError[]
) {
  const currentErrors = typeof errors === 'string'
    ? [errors]
    : errors

  if (currentErrors.length) {
    const previousErrors = rejections.get(file) ?? []
    const mergedErrors = [...new Set([...previousErrors, ...currentErrors])]

    rejections.set(file, mergedErrors)
  }
}

/**
 * Converts validation errors into displayable messages.
 *
 * Returns undefined when no message getter is provided or when
 * none of the validation errors produces a message.
 */
export function getValidationErrorMessages<TError extends string> (
  rejections: AvFileUploadFilesRejections<TError>,
  getErrorMessage?: AvFileUploadErrorMessageGetter<TError>
): string[] | undefined {
  if (!getErrorMessage) {
    return undefined
  }

  if (typeof rejections === 'string') {
    const message = getErrorMessage(rejections)

    return message ? [message] : undefined
  }

  const messages = rejections
    .map(({ file, errors }) => {
      const errorMessages = errors
        .map(getErrorMessage)
        .filter((message): message is string => !!message)

      return errorMessages.length
        ? `${file.name}: ${errorMessages.join(', ')}`
        : undefined
    })
    .filter((message): message is string => !!message)

  return messages.length ? messages : undefined
}

/**
 * Splits the current files into files to delete and files to keep.
 *
 * Entries in `filesToDelete` can be either file references or indexes
 * from the current `files` array.
 */
export function getFilesToDelete (
  files: File[],
  filesToDelete?: (File | number)[],
): {
    toBeDeleted: File[]
    remainingFiles: File[]
  } {
  const toBeDeleted = filesToDelete
    ? filesToDelete
        .map(file => typeof file === 'number' ? files[file] : file)
        .filter((file): file is File => file !== undefined && files.includes(file))
    : files

  const remainingFiles = filesToDelete
    ? files.filter(file => !toBeDeleted.includes(file))
    : []

  return {
    toBeDeleted,
    remainingFiles,
  }
}

/**
 * Validates the files being added with `validateFiles`, then with `validateFile`.
 *
 * A single error returned by `validateFiles` rejects the whole selection (`globalError`)
 * and skips `validateFile`.
 * Otherwise, file-level errors from both validators are merged so that each file is
 * rejected only once and duplicate errors are removed.
 */
export async function validateFilesToAdd<TError extends string> (
  files: File[],
  enableMultiple: boolean,
  validateFile?: AvFileUploadFileValidator<TError>,
  validateFiles?: AvFileUploadFilesValidator<TError>,
): Promise<{
    globalError?: TError
    fileRejections: Map<File, TError[]>
  }> {
  const fileRejections = new Map<File, TError[]>()

  if (validateFiles) {
    const rejections = await validateFiles(files)

    if (rejections) {
      if (typeof rejections === 'string') {
        return {
          globalError: rejections,
          fileRejections,
        }
      }

      for (const rejection of rejections) {
        handleFileErrors(fileRejections, rejection.file, rejection.errors)
      }
    }
  }

  if (validateFile) {
    const rejections = await Promise.all(
      files.map(async file => ({
        file,
        errors: await validateFile(file),
      })),
    )

    for (const rejection of rejections) {
      if (rejection.errors) {
        handleFileErrors(fileRejections, rejection.file, rejection.errors)
      }
    }

    if (fileRejections.size && !enableMultiple) {
      const firstError = fileRejections.values().next().value?.[0]

      return {
        globalError: firstError,
        fileRejections,
      }
    }
  }

  return {
    fileRejections,
  }
}

/**
 * Handles the drag-and-drop state of a drop zone.
 *
 * Spread `dropHandlers` on the drop target and use `isDragging` to style it.
 */
export function useFileDropZone (
  canDrop: MaybeRefOrGetter<boolean>,
  onFiles: (files: File[]) => void | Promise<void>
): {
    isDragging: Ref<boolean>
    dropHandlers: {
      onDragover: (event: DragEvent) => void
      onDrop: (event: DragEvent) => Promise<void>
      onDragleave: () => void
    }
  } {
  const isDragging = ref(false)

  const dropHandlers = {
    onDragover (event: DragEvent) {
      event.preventDefault()

      if (toValue(canDrop)) {
        isDragging.value = true
      }
    },

    async onDrop (event: DragEvent) {
      event.preventDefault()
      isDragging.value = false

      await onFiles(Array.from(event.dataTransfer?.files ?? []))
    },

    onDragleave () {
      isDragging.value = false
    },
  }

  return {
    isDragging,
    dropHandlers,
  }
}

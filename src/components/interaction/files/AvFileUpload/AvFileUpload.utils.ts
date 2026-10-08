import { type MaybeRefOrGetter, type Ref, toValue } from 'vue'

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

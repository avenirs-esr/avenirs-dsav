import type { Ref } from 'vue'

interface UseAvFileUploadDeleteOptions {
  modelValue: Ref<File[] | null | undefined>
  confirmDelete: Ref<boolean>
  fileName: Ref<string | undefined>
  emitDeleteFile: (file?: File | number) => void
  emitValidMessageUpdate: (message: string | null) => void
  emitErrorUpdate: (error: string | null) => void
  emitChange: (files: FileList | File[]) => void
}

export function useAvFileUploadDelete ({
  modelValue,
  confirmDelete,
  fileName,
  emitDeleteFile,
  emitValidMessageUpdate,
  emitErrorUpdate,
  emitChange,
}: UseAvFileUploadDeleteOptions) {
  function clearFiles (file?: File | number) {
    if (file !== undefined) {
      const newFiles = typeof file === 'number'
        ? (modelValue.value ?? []).filter((_, index) => index !== file)
        : (modelValue.value ?? []).filter(currentFile => currentFile !== file)
      modelValue.value = newFiles.length > 0 ? newFiles : null
    }
    else {
      modelValue.value = null
    }

    emitDeleteFile(file)
    emitValidMessageUpdate(null)
    emitErrorUpdate(null)
    emitChange([])
  }

  const isDeleteConfirmationOpen = ref(false)
  const pendingDelete = ref<File | number>()

  const pendingDeleteFiles = computed<(File | { name: string })[]>(() => {
    const files = modelValue.value ?? []

    if (pendingDelete.value === undefined) {
      return files.length ? files : fileName.value ? [{ name: fileName.value }] : []
    }

    const file = typeof pendingDelete.value === 'number'
      ? files[pendingDelete.value]
      : pendingDelete.value

    return file ? [file] : []
  })

  function onClear (file?: File | number) {
    if (confirmDelete.value) {
      pendingDelete.value = file
      isDeleteConfirmationOpen.value = true
      return
    }

    clearFiles(file)
  }

  function cancelDelete () {
    isDeleteConfirmationOpen.value = false
    pendingDelete.value = undefined
  }

  function confirmPendingDelete () {
    isDeleteConfirmationOpen.value = false
    clearFiles(pendingDelete.value)
    pendingDelete.value = undefined
  }

  return {
    isDeleteConfirmationOpen,
    pendingDeleteFiles,
    onClear,
    cancelDelete,
    confirmDelete: confirmPendingDelete,
  }
}

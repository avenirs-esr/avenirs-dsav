import type { ComputedRef, Ref } from 'vue'
import type { AvFileMaxSizeMb } from '@/components/interaction/files/AvFileUpload/AvFileUpload.types'
import { nextTick } from 'vue'
import { validateFiles } from '@/components/interaction/files/AvFileUpload/AvFileUpload.utils'

interface UseAvFileUploadFilesOptions {
  acceptTypes: ComputedRef<string | undefined>
  maxFileSizeMb: Ref<AvFileMaxSizeMb | undefined>
  enableMultiple: Ref<boolean>
  maxFiles: Ref<number | undefined>
  disabled: Ref<boolean>
  modelValue: Ref<File[] | null | undefined>
  emitChange: (files: FileList | File[]) => void
  emitAcceptTypeError: () => void
  emitFileSizeError: () => void
  emitMaxFilesError: () => void
}

export function useAvFileUploadFiles ({
  acceptTypes,
  maxFileSizeMb,
  enableMultiple,
  maxFiles,
  disabled,
  modelValue,
  emitChange,
  emitAcceptTypeError,
  emitFileSizeError,
  emitMaxFilesError,
}: UseAvFileUploadFilesOptions) {
  const isDragging = ref(false)

  function handleFiles (files: File[]) {
    const { toAdd, errors } = validateFiles({
      files,
      acceptTypes: acceptTypes.value,
      maxFileSizeMb: maxFileSizeMb.value,
      enableMultiple: enableMultiple.value,
      maxFiles: maxFiles.value,
      currentFilesCount: modelValue.value?.length ?? 0,
    })

    if (toAdd.length) {
      if (enableMultiple.value) {
        modelValue.value = [...(modelValue.value ?? []), ...toAdd]
      }
      else {
        modelValue.value = [toAdd[0]!]
      }
      emitChange(toAdd)
    }

    if (errors.includes('acceptTypeError')) {
      emitAcceptTypeError()
    }
    if (errors.includes('fileSizeError')) {
      emitFileSizeError()
    }
    if (errors.includes('maxFilesError')) {
      emitMaxFilesError()
    }
  }

  async function onDrop (event: DragEvent) {
    event.preventDefault()
    isDragging.value = false

    if (disabled.value || !event.dataTransfer?.files?.length) {
      return
    }

    const files = Array.from(event.dataTransfer.files)
    await nextTick()

    handleFiles(files)
  }

  function onDragOver (event: DragEvent) {
    event.preventDefault()
    if (!disabled.value) {
      isDragging.value = true
    }
  }

  function onDragLeave () {
    isDragging.value = false
  }

  function onChange (event: InputEvent) {
    const fileList = (event.target as HTMLInputElement).files

    if (!fileList || !fileList.length) {
      return
    }

    handleFiles(Array.from(fileList))
  }

  return {
    isDragging,
    onChange,
    onDragOver,
    onDragLeave,
    onDrop,
  }
}

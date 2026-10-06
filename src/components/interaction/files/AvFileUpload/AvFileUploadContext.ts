import type { ComputedRef, InjectionKey, Ref } from 'vue'
import type { AvMessageProps } from '@/components/base'

export interface AvFileUploadContext {
  id: Ref<string>
  title: Ref<string>
  description: Ref<string>
  modelValue: Ref<File[]>
  fileName: Ref<string | undefined>
  disabled: Ref<boolean>
  enableMultiple: Ref<boolean>
  maxWidth: Ref<string | undefined>
  deleteButtonLabel: Ref<string>
  filePillDownloadPrefixLabel: Ref<string>
  filePillDeletePrefixLabel: Ref<string>
  acceptTypes: ComputedRef<string | undefined>
  isPreview: ComputedRef<boolean>
  canAddFiles: ComputedRef<boolean>
  canDeleteFiles: ComputedRef<boolean>
  uploadLabelAttrs: ComputedRef<Record<string, unknown>>
  messageAttrs: ComputedRef<AvMessageProps | undefined>
}

export const AvFileUploadContextKey: InjectionKey<AvFileUploadContext> = Symbol('AvFileUploadContext')

export function useFileUploadContext (): AvFileUploadContext {
  const context = inject<AvFileUploadContext>(AvFileUploadContextKey)

  if (!context) {
    throw new Error('useFileUploadContext must be used within AvFileUpload component')
  }
  return context
}

import type { ComputedRef, InjectionKey, Ref } from 'vue'
import type { AvFileUploadProps } from '@/components/interaction/files/AvFileUpload/AvFileUpload.vue'

export interface AvFileUploadContext {
  props: AvFileUploadProps
  modelValue: Ref<File[] | null | undefined>
  realId: string
  acceptTypes: ComputedRef<string | undefined>
  uploadLabelAttrs: ComputedRef<Record<string, unknown>>
  onChange: (event: InputEvent) => void
  onClear: (file?: File | number) => void
}

export const AvFileUploadContextKey: InjectionKey<AvFileUploadContext> = Symbol('AvFileUploadContext')

export function useFileUploadContext (): AvFileUploadContext {
  const context = inject<AvFileUploadContext>(AvFileUploadContextKey)

  if (!context) {
    throw new Error('useFileUploadContext must be used within AvFileUpload component')
  }
  return context
}

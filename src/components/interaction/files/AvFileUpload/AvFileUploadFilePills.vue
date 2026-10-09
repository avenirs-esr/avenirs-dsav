<script lang="ts" setup>
import { useFileUploadContext } from '@/components/interaction/files/AvFileUpload/AvFileUploadContext'
import { getFileExtension } from '@/utils/files/files'

const { props, modelValue, onClear } = useFileUploadContext()

const files = computed(() => {
  if (modelValue.value?.length) {
    return modelValue.value.map(file => ({
      name: file.name,
      size: file.size,
      type: getFileExtension(file.name),
    }))
  }
  return props.fileName ? [{ name: props.fileName, size: undefined, type: undefined }] : []
})
</script>

<template>
  <div
    v-if="files.length > 0 && props.enableMultiple"
    class="av-compact-files-list av-col av-gap-xxs av-mb-xs"
  >
    <AvFilePill
      v-for="(file, idx) in files"
      :key="`${file.name}-${idx}`"
      :name="file.name"
      :size="file.size"
      :type="file.type"
      :deletable="!props.disabled"
      :download-prefix-label="props.filePillDownloadPrefixLabel"
      :delete-prefix-label="props.filePillDeletePrefixLabel"
      @delete="() => onClear(modelValue?.length ? modelValue[idx] : idx)"
    />
  </div>
</template>

<style lang="scss" scoped>
.av-compact-files-list {
  max-height: calc(3 * var(--dimension-2xl));
  overflow-y: auto;
}
</style>

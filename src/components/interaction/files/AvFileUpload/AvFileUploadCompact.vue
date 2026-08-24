<script setup lang="ts">
import type { Slot } from 'vue'
import AvIcon from '@/components/base/AvIcon/AvIcon.vue'
import AvFilePill from '@/components/interaction/files/AvFilePill/AvFilePill.vue'
import { useFileUploadContext } from '@/components/interaction/files/AvFileUpload/AvFileUploadContext'
import { MDI_ICONS } from '@/tokens'
import { getFileExtension } from '@/utils'

defineSlots<{
  hint?: Slot
}>()

const { props, modelValue, realId, acceptTypes, uploadLabelAttrs, onChange, onClear } = useFileUploadContext()

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
  <div class="av-compact-upload">
    <div
      v-if="files.length > 0"
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

    <label
      v-bind="uploadLabelAttrs"
      class="av-compact-add-pill av-row av-align-center av-gap-xs av-p-xs av-radius-md av-border-width-sm av-border-style-dashed av-border-stroke"
    >
      <AvIcon
        :size="1.5"
        :name="MDI_ICONS.ATTACHMENT_PLUS"
        color="var(--dark-background-primary1)"
      />
      <span class="b2-regular">{{ props.title }}</span>
      <input
        :id="realId"
        class="av-upload"
        type="file"
        :aria-describedby="props.error || props.validMessage ? `${realId}-desc` : ''"
        :disabled="props.disabled"
        :aria-disabled="props.disabled"
        :accept="acceptTypes"
        :multiple="props.enableMultiple"
        @change="onChange($event as InputEvent)"
      >
    </label>

    <AvMessage
      :type="props.error ? 'error' : 'success'"
      :message="props.error ? props.error : props.validMessage"
    />
    <span class="caption-light">
      <slot name="hint" />
    </span>
  </div>
</template>

<style lang="scss" scoped>
.av-compact-upload {
  max-width: v-bind('props.maxWidth');
}

.av-compact-add-pill {
  background-color: var(--surface-background);
  cursor: pointer;
  transition: background-color 0.2s ease;

  &.av-upload-group--disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &.drag-over {
    background-color: var(--light-background-primary1);
    border-color: var(--dark-background-primary1);
  }
}
</style>

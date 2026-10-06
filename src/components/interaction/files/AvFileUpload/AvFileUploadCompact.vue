<script setup lang="ts">
import type { Slot } from 'vue'
import AvIcon from '@/components/base/AvIcon/AvIcon.vue'
import AvFilePill from '@/components/interaction/files/AvFilePill/AvFilePill.vue'
import { useFileUploadContext } from '@/components/interaction/files/AvFileUpload/AvFileUploadContext'
import { MDI_ICONS } from '@/tokens'
import { getFileExtension } from '@/utils'

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
  (e: 'change', event: Event): void
  (e: 'deleteFiles', index: number): void
}>()

defineSlots<{
  hint?: Slot
}>()

const {
  id,
  title,
  modelValue,
  fileName,
  disabled,
  enableMultiple,
  maxWidth,
  filePillDownloadPrefixLabel,
  filePillDeletePrefixLabel,
  acceptTypes,
  isPreview,
  canDeleteFiles,
  uploadLabelAttrs,
  messageAttrs,
} = useFileUploadContext()

const files = computed(() => {
  if (fileName.value) {
    return [{
      name: fileName.value,
      size: undefined,
      type: undefined,
    }]
  }

  return modelValue.value.map(file => ({
    name: file.name,
    size: file.size,
    type: getFileExtension(file.name),
  }))
})
</script>

<template>
  <div class="av-compact-upload">
    <div
      v-if="files.length"
      class="av-compact-files-list av-col av-gap-xxs av-mb-xs"
    >
      <AvFilePill
        v-for="(file, idx) in files"
        :key="`${file.name}-${idx}`"
        :name="file.name"
        :size="file.size"
        :type="file.type"
        :deletable="canDeleteFiles"
        :download-prefix-label="filePillDownloadPrefixLabel"
        :delete-prefix-label="filePillDeletePrefixLabel"
        @delete="emit('deleteFiles', idx)"
      />
    </div>

    <label
      v-if="!isPreview"
      v-bind="uploadLabelAttrs"
      class="av-compact-add-pill av-row av-align-center av-gap-xs av-p-xs av-radius-md av-border-width-sm av-border-style-dashed av-border-stroke"
    >
      <AvIcon
        :size="1.5"
        :name="MDI_ICONS.ATTACHMENT_PLUS"
        color="var(--dark-background-primary1)"
      />

      <span class="b2-regular">
        {{ title }}
      </span>

      <input
        :id="id"
        class="av-upload"
        type="file"
        :aria-describedby="messageAttrs ? `${id}-desc` : ''"
        :disabled="disabled"
        :aria-disabled="disabled"
        :accept="acceptTypes"
        :multiple="enableMultiple"
        @click="emit('click', $event)"
        @change="emit('change', $event)"
      >
    </label>

    <AvMessage
      v-if="messageAttrs"
      v-bind="messageAttrs"
    />

    <span class="caption-light">
      <slot name="hint" />
    </span>
  </div>
</template>

<style lang="scss" scoped>
.av-compact-upload {
  max-width: v-bind('maxWidth');
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

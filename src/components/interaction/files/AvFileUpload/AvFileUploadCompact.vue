<script setup lang="ts">
import type { Slot } from 'vue'
import AvIcon from '@/components/base/AvIcon/AvIcon.vue'
import { useFileUploadContext } from '@/components/interaction/files/AvFileUpload/AvFileUploadContext'
import { MDI_ICONS } from '@/tokens'

defineSlots<{
  hint?: Slot
}>()

const { props, realId, acceptTypes, uploadLabelAttrs, onChange } = useFileUploadContext()
</script>

<template>
  <div class="av-compact-upload">
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
      v-if="props.validMessage"
      type="success"
      :message="props.validMessage"
    />
    <AvMessage
      v-if="props.error"
      type="error"
      :message="props.error"
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

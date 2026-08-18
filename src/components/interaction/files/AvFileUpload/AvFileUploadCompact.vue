<script setup lang="ts">
import type { Slot } from 'vue'
import AvIcon from '@/components/base/AvIcon/AvIcon.vue'
import AvButton from '@/components/interaction/buttons/AvButton/AvButton.vue'
import { useFileUploadContext } from '@/components/interaction/files/AvFileUpload/AvFileUploadContext'
import { MDI_ICONS } from '@/tokens'

defineSlots<{
  hint?: Slot
}>()

const { props, modelValue, realId, acceptTypes, uploadLabelAttrs, onChange, onClear } = useFileUploadContext()
</script>

<template>
  <div class="av-compact-upload">
    <div
      v-if="(modelValue && modelValue.length > 0) || props.fileName"
      class="av-compact-files-list av-col av-gap-xxs av-mb-xs"
    >
      <div
        v-for="(name, idx) in modelValue && modelValue.length > 0 ? modelValue.map((f: File) => f.name) : [props.fileName]"
        :key="`${name}-${idx}`"
        class="av-compact-file-pill av-row av-align-center av-gap-xs av-p-xs av-radius-md av-border-width-sm av-border-style-solid av-border-stroke av-background-card"
      >
        <AvIcon
          :size="1.5"
          :name="MDI_ICONS.ATTACH_FILE"
          color="var(--icon)"
        />
        <span class="b2-regular av-ellipsis av-compact-file-name">{{ name }}</span>
        <AvButton
          v-if="!props.disabled"
          :label="`Delete ${name}`"
          :icon="MDI_ICONS.TRASH_CAN_OUTLINE"
          icon-only
          small
          @click="() => onClear(modelValue && modelValue.length > 0 ? modelValue[idx] : idx)"
        />
      </div>
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

.av-compact-file-pill {
  position: relative;
}

.av-compact-file-name {
  flex: 1 1 auto;
  min-width: 0;
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

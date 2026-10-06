<script setup lang="ts">
import type { Slot } from 'vue'
import AvIcon from '@/components/base/AvIcon/AvIcon.vue'
import AvButton from '@/components/interaction/buttons/AvButton/AvButton.vue'
import { useFileUploadContext } from '@/components/interaction/files/AvFileUpload/AvFileUploadContext'
import { MDI_ICONS } from '@/tokens'

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
  (e: 'change', event: Event): void
  (e: 'deleteFiles'): void
}>()

defineSlots<{
  left?: Slot
  hint?: Slot
}>()

const {
  id,
  title,
  description,
  modelValue,
  fileName,
  disabled,
  enableMultiple,
  deleteButtonLabel,
  acceptTypes,
  isPreview,
  canAddFiles,
  canDeleteFiles,
  uploadLabelAttrs,
  messageAttrs,
} = useFileUploadContext()

const displayedFileName = computed(() => fileName.value || modelValue.value.map(file => file.name).join(', '))
</script>

<template>
  <div class="av-default-upload">
    <component
      :is="isPreview ? 'div' : 'label'"
      v-bind="isPreview ? {} : uploadLabelAttrs"
      :class="isPreview ? 'file-preview-container av-radius-lg av-p-xs' : ''"
    >
      <div
        :class="isPreview ? '' : 'file-upload-container av-radius-lg av-p-xs'"
      >
        <div class="av-row av-align-center av-gap-xs">
          <div
            class="left-content-container av-row av-align-center av-justify-center av-radius-md"
          >
            <slot name="left">
              <AvIcon
                :size="2.5"
                :name="MDI_ICONS.ATTACHMENT_PLUS"
                color="var(--icon)"
              />
            </slot>
          </div>

          <div class="content-container av-col">
            <div v-if="isPreview">
              <span class="b2-bold">
                {{ displayedFileName }}
              </span>
            </div>

            <div
              v-else
              class="av-col av-gap-xxs"
            >
              <span class="b2-regular">
                {{ title }}
              </span>

              <span class="caption-light">
                {{ description }}
              </span>
            </div>

            <AvMessage
              v-if="messageAttrs"
              v-bind="messageAttrs"
            />
          </div>

          <div
            v-if="canDeleteFiles || canAddFiles"
            class="av-px-xs"
          >
            <AvButton
              v-if="canDeleteFiles"
              :label="deleteButtonLabel"
              theme="SECONDARY"
              size="LG"
              @click.prevent.stop="emit('deleteFiles')"
            />

            <AvIcon
              v-else
              :size="1.5"
              :name="MDI_ICONS.TRAY_UPLOAD"
              color="var(--dark-background-primary1)"
            />
          </div>

          <input
            v-if="!isPreview"
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
        </div>
      </div>
    </component>

    <span class="caption-light">
      <slot name="hint" />
    </span>
  </div>
</template>

<style lang="scss" scoped>
.file-preview-container {
  border: 1px solid var(--divider);
}

.file-upload-container {
  border: 1px dashed var(--divider);
}

.file-upload-container:focus-within {
  outline: 2px solid #005fcc;
  outline-offset: 2px;
}

.drag-over .file-upload-container {
  background-color: var(--light-background-primary1);
  border-color: var(--dark-background-primary1);
}

.left-content-container {
  flex: 0 0 auto;
  height: var(--dimension-4xl);
  width: var(--dimension-4xl);
  overflow: hidden;
}

.content-container {
  flex: 1 1 auto;
  min-width: 0;
}
</style>

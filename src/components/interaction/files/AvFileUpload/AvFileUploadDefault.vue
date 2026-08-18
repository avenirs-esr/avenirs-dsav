<script setup lang="ts">
import type { Slot } from 'vue'
import AvIcon from '@/components/base/AvIcon/AvIcon.vue'
import AvButton from '@/components/interaction/buttons/AvButton/AvButton.vue'
import { useFileUploadContext } from '@/components/interaction/files/AvFileUpload/AvFileUploadContext'
import { MDI_ICONS } from '@/tokens'

defineSlots<{
  left?: Slot
  hint?: Slot
}>()

const { props, modelValue, realId, acceptTypes, uploadLabelAttrs, onChange, onClear } = useFileUploadContext()

const isPreview = computed(() => !!props.fileName || (modelValue.value && modelValue.value.length > 0))
</script>

<template>
  <div class="av-default-upload">
    <component
      :is="isPreview ? 'div' : 'label'"
      v-bind="isPreview ? {} : uploadLabelAttrs"
      :class="isPreview ? 'file-preview-container av-radius-lg av-p-xs' : ''"
    >
      <div :class="isPreview ? '' : 'file-upload-container av-radius-lg av-p-xs'">
        <div class="av-row av-align-center av-gap-xs">
          <div class="left-content-container av-row av-align-center av-justify-center av-radius-md">
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
              <span class="b2-bold">{{ props.fileName || modelValue?.map(f => f.name).join(', ') }}</span>
            </div>
            <div
              v-else
              class="av-col av-gap-xxs"
            >
              <span class="b2-regular">{{ props.title }}</span>
              <span class="caption-light">{{ props.description }}</span>
            </div>

            <AvMessage
              :type="props.error ? 'error' : 'success'"
              :message="props.error ? props.error : props.validMessage"
            />
          </div>

          <div
            v-if="!props.disabled"
            class="av-px-xs"
          >
            <AvButton
              v-if="isPreview"
              :label="props.deleteButtonLabel ?? 'Remove'"
              theme="SECONDARY"
              @click="() => onClear()"
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
  height: var(--dimension-4xl);
  width: var(--dimension-4xl);
  overflow: hidden;
}

.content-container {
  flex: 1 1 auto;
  min-width: 0;
}

.left-content-container, .right-icon-container {
  flex: 0 0 auto;
}
</style>

<script setup lang="ts">
import type { AvRichTextEditorLabels } from '@/components/interaction/inputs/AvRichTextEditor/AvRichTextEditor.types'
import AvInput from '@/components/interaction/inputs/AvInput/AvInput.vue'
import { MDI_ICONS } from '@/tokens/icons'

export interface ToolbarImagePopoverProps extends Pick<AvRichTextEditorLabels, 'imageLabel'
  | 'imageNameLabel'
  | 'imageNamePlaceholder'
  | 'imageUrlLabel'
  | 'popoversCancelLabel'
  | 'popoversConfirmLabel'> {}

defineProps<ToolbarImagePopoverProps>()

const emit = defineEmits<{
  /**
   * Emitted when the user confirms the image URL.
   * @param name The display name of the image.
   * @param url The URL of the image to insert.
   */
  (e: 'confirm', { name, url }: { name: string, url: string }): void
}>()

const imageName = ref('')
const imageUrl = ref('')
</script>

<template>
  <AvPopover padding="var(--spacing-md)">
    <template #trigger="{ toggle }">
      <AvButton
        :label="imageLabel"
        :icon="MDI_ICONS.IMAGE_OUTLINE"
        icon-only
        variant="FLAT"
        data-testid="insert-image-button"
        @click="toggle"
      />
    </template>
    <template #popover="{ close }">
      <div
        class="av-col av-gap-md"
        data-testid="image-inputs-container"
      >
        <AvInput
          v-model="imageName"
          :label="imageNameLabel"
          :placeholder="imageNamePlaceholder"
        />
        <AvInput
          v-model="imageUrl"
          :label="imageUrlLabel"
          placeholder="https://example.com/image.jpg"
        />
        <div class="av-row av-justify-end">
          <AvCancelConfirmButtons
            :cancel-label="popoversCancelLabel"
            :confirm-label="popoversConfirmLabel"
            :confirm-disabled="!imageName || !imageUrl"
            @cancel="close"
            @confirm="() => { emit('confirm', { name: imageName, url: imageUrl }); close(); }"
          />
        </div>
      </div>
    </template>
  </AvPopover>
</template>

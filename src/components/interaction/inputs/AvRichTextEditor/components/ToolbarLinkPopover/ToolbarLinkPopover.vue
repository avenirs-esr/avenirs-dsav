<script setup lang="ts">
import type { AvRichTextEditorLabels } from '@/components/interaction/inputs/AvRichTextEditor/AvRichTextEditor.types'
import AvInput from '@/components/interaction/inputs/AvInput/AvInput.vue'
import { MS_ICONS } from '@/tokens/icons'

export interface ToolbarLinkPopoverProps extends Pick<AvRichTextEditorLabels, 'linkLabel'
  | 'linkNameLabel'
  | 'linkNamePlaceholder'
  | 'linkUrlLabel'
  | 'popoversCancelLabel'
  | 'popoversConfirmLabel'> {
  /**
   * The initial name to populate the link input with.
   * Usually the selected text in the editor, if any. This allows users to easily create a link with the selected text as the display name.
   */
  initialName?: string
}

const { initialName } = defineProps<ToolbarLinkPopoverProps>()

const emit = defineEmits<{
  /**
   * Emitted when the user confirms the link URL.
   * @param name The display name of the link.
   * @param url The URL of the link to insert.
   */
  (e: 'confirm', { name, url }: { name: string, url: string }): void
}>()

const linkName = ref(initialName ?? '')
const linkUrl = ref('')

function onConfirm () {
  emit('confirm', { name: linkName.value ? linkName.value : linkUrl.value, url: linkUrl.value })
}

watchEffect(() => {
  if (typeof initialName === 'string') {
    linkName.value = initialName
  }
})
</script>

<template>
  <AvPopover padding="var(--spacing-md)">
    <template #trigger="{ toggle }">
      <AvButton
        :label="linkLabel"
        :icon="MS_ICONS.LINK_ROUNDED"
        icon-only
        variant="FLAT"
        data-testid="insert-link-button"
        @click="toggle"
      />
    </template>
    <template #popover="{ close }">
      <div
        class="av-col av-gap-md"
        data-testid="link-inputs-container"
      >
        <AvInput
          v-model="linkName"
          :label="linkNameLabel"
          :placeholder="linkNamePlaceholder"
        />
        <AvInput
          v-model="linkUrl"
          :label="linkUrlLabel"
          placeholder="https://example.com"
        />
        <div class="av-row av-justify-end">
          <AvCancelConfirmButtons
            :cancel-label="popoversCancelLabel"
            :confirm-label="popoversConfirmLabel"
            :confirm-disabled="!linkUrl"
            @cancel="close"
            @confirm="() => { close(); onConfirm(); }"
          />
        </div>
      </div>
    </template>
  </AvPopover>
</template>

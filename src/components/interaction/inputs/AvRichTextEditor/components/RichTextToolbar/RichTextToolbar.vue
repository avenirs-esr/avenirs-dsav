<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3'
import type { AvRichTextEditorLabels } from '@/components/interaction/inputs/AvRichTextEditor/AvRichTextEditor.types'
import AvButton from '@/components/interaction/buttons/AvButton/AvButton.vue'
import ToolbarImagePopover from '@/components/interaction/inputs/AvRichTextEditor/components/ToolbarImagePopover/ToolbarImagePopover.vue'
import ToolbarLinkPopover from '@/components/interaction/inputs/AvRichTextEditor/components/ToolbarLinkPopover/ToolbarLinkPopover.vue'
import ToolbarTableSettingsDropdown from '@/components/interaction/inputs/AvRichTextEditor/components/ToolbarTableSettingsDropdown/ToolbarTableSettingsDropdown.vue'
import { useRichTextToolbar } from '@/components/interaction/inputs/AvRichTextEditor/composables/use-rich-text-toolbar/use-rich-text-toolbar'
import { MDI_ICONS, MS_ICONS } from '@/tokens'

export interface RichTextToolbarProps extends Omit<AvRichTextEditorLabels, 'editorLabel'> {
  /**
   * The Tiptap editor instance to control with the toolbar.
   */
  editor: Editor | null | undefined
}

const props = defineProps<RichTextToolbarProps>()
const { editor } = toRefs(props)

const {
  undo,
  redo,
  setParagraph,
  setHeading,
  toggleBold,
  toggleItalic,
  toggleUnderline,
  setLink,
  unsetLink,
  setImage,
  removeImage,
  insertTable,
  deleteTable,
  addColumnBefore,
  addColumnAfter,
  deleteColumn,
  addRowBefore,
  addRowAfter,
  deleteRow,
  setTextAlign,
  toggleBulletList,
  toggleOrderedList,
  decreaseIndent,
  increaseIndent
} = useRichTextToolbar(editor)

const selectedText = computed(() => {
  if (!editor.value) {
    return ''
  }

  const { from, to } = editor.value.state.selection
  return editor.value.state.doc.textBetween(from, to)
})

const headings = computed(() => {
  return [1, 2, 3].map(level => ({
    level: level as 1 | 2 | 3,
    label: `${props.headingLabel} ${level}`,
    icon: MDI_ICONS[`FORMAT_HEADING_${level}` as keyof typeof MDI_ICONS]
  }))
})
</script>

<template>
  <div
    role="toolbar"
    class="toolbar av-row av-wrap av-gap-xs av-px-md av-py-xs"
  >
    <AvButton
      :label="undoLabel"
      :disabled="!editor?.can().chain().focus().undo().run()"
      :icon="MS_ICONS.UNDO"
      icon-only
      :variant="!!editor?.can().chain().focus().undo().run() ? 'FLAT' : 'DEFAULT'"
      data-testid="undo-button"
      @click="undo"
    />

    <AvButton
      :label="redoLabel"
      :disabled="!editor?.can().chain().focus().redo().run()"
      :icon="MS_ICONS.REDO"
      icon-only
      :variant="!!editor?.can().chain().focus().redo().run() ? 'FLAT' : 'DEFAULT'"
      data-testid="redo-button"
      @click="redo"
    />

    <div class="vertical-separator av-my-xxs" />

    <AvButton
      :label="paragraphLabel"
      :aria-pressed="editor?.isActive('paragraph')"
      :icon="MDI_ICONS.FORMAT_PARAGRAPH"
      icon-only
      variant="FLAT"
      data-testid="set-paragraph-button"
      @click="setParagraph()"
    />

    <AvButton
      v-for="heading in headings"
      :key="heading.level"
      :label="heading.label"
      :aria-pressed="editor?.isActive('heading', { level: heading.level })"
      :icon="heading.icon"
      icon-only
      variant="FLAT"
      :data-testid="`set-h${heading.level}-button`"
      @click="setHeading(heading.level)"
    />

    <div class="vertical-separator av-my-xxs" />

    <AvButton
      :label="boldLabel"
      :aria-pressed="editor?.isActive('bold')"
      :icon="MDI_ICONS.FORMAT_BOLD"
      icon-only
      variant="FLAT"
      data-testid="bold-button"
      @click="toggleBold"
    />

    <AvButton
      :label="italicLabel"
      :aria-pressed="editor?.isActive('italic')"
      :icon="MDI_ICONS.FORMAT_ITALIC"
      icon-only
      variant="FLAT"
      data-testid="italic-button"
      @click="toggleItalic"
    />

    <AvButton
      :label="underlineLabel"
      :aria-pressed="editor?.isActive('underline')"
      :icon="MDI_ICONS.FORMAT_UNDERLINE"
      icon-only
      variant="FLAT"
      data-testid="underline-button"
      @click="toggleUnderline"
    />

    <div class="vertical-separator av-my-xxs" />

    <AvButton
      v-if="editor?.isActive('link')"
      :label="unsetLinkLabel"
      :icon="MS_ICONS.LINK_OFF_ROUNDED"
      icon-only
      active
      variant="FLAT"
      data-testid="unset-link-button"
      @click="unsetLink()"
    />

    <ToolbarLinkPopover
      v-else
      :initial-name="selectedText"
      :link-label="linkLabel"
      :link-name-label="linkNameLabel"
      :link-name-placeholder="linkNamePlaceholder"
      :link-url-label="linkUrlLabel"
      :popovers-cancel-label="popoversCancelLabel"
      :popovers-confirm-label="popoversConfirmLabel"
      @confirm="({ url, name }) => setLink({ url, name })"
    />

    <AvButton
      v-if="editor?.isActive('image')"
      :label="removeImageLabel"
      :aria-pressed="editor?.isActive('image')"
      :icon="MDI_ICONS.IMAGE_REMOVE_OUTLINE"
      icon-only
      variant="FLAT"
      data-testid="remove-image-button"
      @click="removeImage"
    />

    <ToolbarImagePopover
      v-else
      :image-label="imageLabel"
      :image-name-label="imageNameLabel"
      :image-name-placeholder="imageNamePlaceholder"
      :image-url-label="imageUrlLabel"
      :popovers-cancel-label="popoversCancelLabel"
      :popovers-confirm-label="popoversConfirmLabel"
      @confirm="({ url, name }) => setImage({ url, name })"
    />

    <ToolbarTableSettingsDropdown
      v-if="editor?.isActive('table')"
      :table-settings-label="tableSettingsLabel"
      :delete-table-label="deleteTableLabel"
      :add-column-before-label="addColumnBeforeLabel"
      :add-column-after-label="addColumnAfterLabel"
      :delete-column-label="deleteColumnLabel"
      :add-row-before-label="addRowBeforeLabel"
      :add-row-after-label="addRowAfterLabel"
      :delete-row-label="deleteRowLabel"
      @delete-table-selected="deleteTable"
      @add-column-before-selected="addColumnBefore"
      @add-column-after-selected="addColumnAfter"
      @delete-column-selected="deleteColumn"
      @add-row-before-selected="addRowBefore"
      @add-row-after-selected="addRowAfter"
      @delete-row-selected="deleteRow"
    />

    <AvButton
      v-else
      :label="insertTableLabel"
      :icon="MDI_ICONS.TABLE_PLUS"
      icon-only
      variant="FLAT"
      data-testid="insert-table-button"
      @click="insertTable"
    />

    <div class="vertical-separator av-my-xxs" />

    <AvButton
      :label="alignLeftLabel"
      :aria-pressed="editor?.isActive({ textAlign: 'left' })"
      :icon="MDI_ICONS.FORMAT_ALIGN_LEFT"
      icon-only
      variant="FLAT"
      data-testid="align-left-button"
      @click="() => setTextAlign('left')"
    />

    <AvButton
      :label="alignCenterLabel"
      :aria-pressed="editor?.isActive({ textAlign: 'center' })"
      :icon="MDI_ICONS.FORMAT_ALIGN_CENTER"
      icon-only
      variant="FLAT"
      data-testid="align-center-button"
      @click="() => setTextAlign('center')"
    />

    <AvButton
      :label="alignRightLabel"
      :aria-pressed="editor?.isActive({ textAlign: 'right' })"
      :icon="MDI_ICONS.FORMAT_ALIGN_RIGHT"
      icon-only
      variant="FLAT"
      data-testid="align-right-button"
      @click="() => setTextAlign('right')"
    />

    <AvButton
      :label="alignJustifyLabel"
      :aria-pressed="editor?.isActive({ textAlign: 'justify' })"
      :icon="MDI_ICONS.FORMAT_ALIGN_JUSTIFY"
      icon-only
      variant="FLAT"
      data-testid="align-justify-button"
      @click="() => setTextAlign('justify')"
    />

    <div class="vertical-separator av-my-xxs" />

    <AvButton
      :label="bulletListLabel"
      :aria-pressed="editor?.isActive('bulletList')"
      :icon="MDI_ICONS.FORMAT_LIST_BULLETED"
      icon-only
      variant="FLAT"
      data-testid="bullet-list-button"
      @click="toggleBulletList"
    />

    <AvButton
      :label="orderedListLabel"
      :aria-pressed="editor?.isActive('orderedList')"
      :icon="MDI_ICONS.FORMAT_LIST_NUMBERED"
      icon-only
      variant="FLAT"
      data-testid="ordered-list-button"
      @click="toggleOrderedList"
    />

    <AvButton
      :label="decreaseIndentLabel"
      :disabled="!editor?.can().chain().focus().liftListItem('listItem').run()"
      :icon="MDI_ICONS.FORMAT_INDENT_DECREASE"
      icon-only
      :variant="!!editor?.can().chain().focus().liftListItem('listItem').run() ? 'FLAT' : 'DEFAULT'"
      data-testid="decrease-indent-button"
      @click="decreaseIndent"
    />

    <AvButton
      :label="increaseIndentLabel"
      :disabled="!editor?.can().chain().focus().sinkListItem('listItem').run()"
      :icon="MDI_ICONS.FORMAT_INDENT_INCREASE"
      icon-only
      :variant="!!editor?.can().chain().focus().sinkListItem('listItem').run() ? 'FLAT' : 'DEFAULT'"
      data-testid="increase-indent-button"
      @click="increaseIndent"
    />
  </div>
</template>

<style lang="scss" scoped>
.toolbar {
  background-color: var(--dark-background-primary1);
}

.vertical-separator {
  width: 1px;
  background-color: var(--other-background-base);
}

:deep() {
  .av-button[aria-disabled='true'] {
    color: var(--other-background-base) !important;
    opacity: 0.7;
  }
}
</style>

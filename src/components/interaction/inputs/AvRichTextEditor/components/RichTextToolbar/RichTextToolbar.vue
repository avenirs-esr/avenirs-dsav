<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3'
import type { AvButtonProps } from '@/components/interaction/buttons/AvButton/AvButton.vue'
import type { AvRichTextEditorHeaderLevels, AvRichTextEditorLabels } from '@/components/interaction/inputs/AvRichTextEditor/AvRichTextEditor.types'
import type { AvInteractiveProps } from '@/types'
import AvIcon from '@/components/base/AvIcon/AvIcon.vue'
import AvButton from '@/components/interaction/buttons/AvButton/AvButton.vue'
import { getToolbarButtonProps } from '@/components/interaction/inputs/AvRichTextEditor/AvRichTextEditor.utils'
import ToolbarImagePopover from '@/components/interaction/inputs/AvRichTextEditor/components/ToolbarImagePopover/ToolbarImagePopover.vue'
import ToolbarLinkPopover from '@/components/interaction/inputs/AvRichTextEditor/components/ToolbarLinkPopover/ToolbarLinkPopover.vue'
import ToolbarTableSettingsDropdown from '@/components/interaction/inputs/AvRichTextEditor/components/ToolbarTableSettingsDropdown/ToolbarTableSettingsDropdown.vue'
import { useRichTextToolbar } from '@/components/interaction/inputs/AvRichTextEditor/composables/use-rich-text-toolbar/use-rich-text-toolbar'
import { MDI_ICONS, MS_ICONS } from '@/tokens'

export interface RichTextToolbarProps extends Omit<AvRichTextEditorLabels, 'editorLabel'>, AvInteractiveProps {
  /**
   * The Tiptap editor instance to control with the toolbar.
   */
  editor: Editor | null | undefined

  /**
   * The allowed header levels for the toolbar.
   */
  allowedHeadersLevels: AvRichTextEditorHeaderLevels[]
}

const props = defineProps<RichTextToolbarProps>()
const { editor, allowedHeadersLevels, disabled, disabledTooltip, isLoading } = toRefs(props)

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
  return allowedHeadersLevels.value.map(level => ({
    level: level as AvRichTextEditorHeaderLevels,
    label: `${props.headingLabel} ${level}`,
    icon: MDI_ICONS[`FORMAT_HEADING_${level}` as keyof typeof MDI_ICONS]
  }))
})

function getAvButtonProps ({
  id,
  localDisabled = false
}: { id: string, localDisabled?: boolean }): Partial<AvButtonProps & { dataTestid: string }> {
  return getToolbarButtonProps({
    id,
    localDisabled,
    disabled: disabled.value,
    disabledTooltip: disabledTooltip.value,
    isLoading: isLoading.value
  })
}

function canUndo () {
  return editor.value?.can().chain().focus().undo().run() ?? false
}

function canRedo () {
  return editor.value?.can().chain().focus().redo().run() ?? false
}

function canDecreaseIndent () {
  return editor.value?.can().chain().focus().liftListItem('listItem').run() ?? false
}

function canIncreaseIndent () {
  return editor.value?.can().chain().focus().sinkListItem('listItem').run() ?? false
}
</script>

<template>
  <div
    role="toolbar"
    :aria-label="toolbarLabel"
    :aria-disabled="disabled || isLoading"
    class="toolbar av-row av-wrap av-align-center av-gap-xs av-px-md av-py-xs"
  >
    <AvIcon
      v-if="isLoading"
      :name="MDI_ICONS.LOADING"
      :size="1.5"
      color="var(--other-background-base)"
      animation="spin"
      data-testid="loader"
    />

    <AvButton
      v-bind="getAvButtonProps({ id: 'undo', localDisabled: !canUndo() })"
      :label="undoLabel"
      :icon="MS_ICONS.UNDO"
      @click="undo"
    />

    <AvButton
      v-bind="getAvButtonProps({ id: 'redo', localDisabled: !canRedo() })"
      :label="redoLabel"
      :icon="MS_ICONS.REDO"
      @click="redo"
    />

    <div class="vertical-separator av-my-xxs" />

    <AvButton
      v-bind="getAvButtonProps({ id: 'set-paragraph' })"
      :label="paragraphLabel"
      :aria-pressed="editor?.isActive('paragraph')"
      :icon="MDI_ICONS.FORMAT_PARAGRAPH"
      @click="setParagraph()"
    />

    <AvButton
      v-for="heading in headings"
      v-bind="getAvButtonProps({ id: `set-h${heading.level}` })"
      :key="heading.level"
      :label="heading.label"
      :aria-pressed="editor?.isActive('heading', { level: heading.level })"
      :icon="heading.icon"
      @click="setHeading(heading.level)"
    />

    <div class="vertical-separator av-my-xxs" />

    <AvButton
      v-bind="getAvButtonProps({ id: 'bold' })"
      :label="boldLabel"
      :aria-pressed="editor?.isActive('bold')"
      :icon="MDI_ICONS.FORMAT_BOLD"
      @click="toggleBold"
    />

    <AvButton
      v-bind="getAvButtonProps({ id: 'italic' })"
      :label="italicLabel"
      :aria-pressed="editor?.isActive('italic')"
      :icon="MDI_ICONS.FORMAT_ITALIC"
      @click="toggleItalic"
    />

    <AvButton
      v-bind="getAvButtonProps({ id: 'underline' })"
      :label="underlineLabel"
      :aria-pressed="editor?.isActive('underline')"
      :icon="MDI_ICONS.FORMAT_UNDERLINE"
      @click="toggleUnderline"
    />

    <div class="vertical-separator av-my-xxs" />

    <AvButton
      v-if="editor?.isActive('link')"
      v-bind="getAvButtonProps({ id: 'unset-link' })"
      :label="unsetLinkLabel"
      :icon="MS_ICONS.LINK_OFF_ROUNDED"
      active
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
      :disabled="disabled"
      :is-loading="isLoading"
      :disabled-tooltip="disabledTooltip"
      @confirm="({ url, name }) => setLink({ url, name })"
    />

    <AvButton
      v-if="editor?.isActive('image')"
      v-bind="getAvButtonProps({ id: 'remove-image' })"
      :label="removeImageLabel"
      :aria-pressed="editor?.isActive('image')"
      :icon="MDI_ICONS.IMAGE_REMOVE_OUTLINE"
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
      :disabled="disabled"
      :is-loading="isLoading"
      :disabled-tooltip="disabledTooltip"
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
      :disabled="disabled"
      :is-loading="isLoading"
      :disabled-tooltip="disabledTooltip"
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
      v-bind="getAvButtonProps({ id: 'insert-table' })"
      :label="insertTableLabel"
      :icon="MDI_ICONS.TABLE_PLUS"
      @click="insertTable"
    />

    <div class="vertical-separator av-my-xxs" />

    <AvButton
      v-bind="getAvButtonProps({ id: 'align-left' })"
      :label="alignLeftLabel"
      :aria-pressed="editor?.isActive({ textAlign: 'left' })"
      :icon="MDI_ICONS.FORMAT_ALIGN_LEFT"
      @click="() => setTextAlign('left')"
    />

    <AvButton
      v-bind="getAvButtonProps({ id: 'align-center' })"
      :label="alignCenterLabel"
      :aria-pressed="editor?.isActive({ textAlign: 'center' })"
      :icon="MDI_ICONS.FORMAT_ALIGN_CENTER"
      @click="() => setTextAlign('center')"
    />

    <AvButton
      v-bind="getAvButtonProps({ id: 'align-right' })"
      :label="alignRightLabel"
      :aria-pressed="editor?.isActive({ textAlign: 'right' })"
      :icon="MDI_ICONS.FORMAT_ALIGN_RIGHT"
      @click="() => setTextAlign('right')"
    />

    <AvButton
      v-bind="getAvButtonProps({ id: 'align-justify' })"
      :label="alignJustifyLabel"
      :aria-pressed="editor?.isActive({ textAlign: 'justify' })"
      :icon="MDI_ICONS.FORMAT_ALIGN_JUSTIFY"
      @click="() => setTextAlign('justify')"
    />

    <div class="vertical-separator av-my-xxs" />

    <AvButton
      v-bind="getAvButtonProps({ id: 'bullet-list' })"
      :label="bulletListLabel"
      :aria-pressed="editor?.isActive('bulletList')"
      :icon="MDI_ICONS.FORMAT_LIST_BULLETED"
      @click="toggleBulletList"
    />

    <AvButton
      v-bind="getAvButtonProps({ id: 'ordered-list' })"
      :label="orderedListLabel"
      :aria-pressed="editor?.isActive('orderedList')"
      :icon="MDI_ICONS.FORMAT_LIST_NUMBERED"
      @click="toggleOrderedList"
    />

    <AvButton
      v-bind="getAvButtonProps({ id: 'decrease-indent', localDisabled: !canDecreaseIndent() })"
      :label="decreaseIndentLabel"
      :icon="MDI_ICONS.FORMAT_INDENT_DECREASE"
      @click="decreaseIndent"
    />

    <AvButton
      v-bind="getAvButtonProps({ id: 'increase-indent', localDisabled: !canIncreaseIndent() })"
      :label="increaseIndentLabel"
      :icon="MDI_ICONS.FORMAT_INDENT_INCREASE"
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

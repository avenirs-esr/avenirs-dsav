<script setup lang="ts">
import type { Slot } from 'vue'
import type { AvRichTextEditorLabels } from '@/components/interaction/inputs/AvRichTextEditor/AvRichTextEditor.types'
import { EditorContent } from '@tiptap/vue-3'
import RichTextToolbar from '@/components/interaction/inputs/AvRichTextEditor/components/RichTextToolbar/RichTextToolbar.vue'
import { useRichTextEditor } from '@/components/interaction/inputs/AvRichTextEditor/composables/use-rich-text-editor/use-rich-text-editor'

export interface AvRichTextEditorProps extends AvRichTextEditorLabels {
  /**
   * Maximum length of input
   */
  maxlength?: number

  /**
   * Whether to allow exceeding the maxlength or not
   * @default true
   */
  allowExceedMaxlength?: boolean
}

const { editorLabel, maxlength, allowExceedMaxlength = true, ...labels } = defineProps<AvRichTextEditorProps>()

defineSlots<{
  /**
   * Slot for max length caption to display the current length / max length
   */
  maxLengthCaption?: Slot<{ currentValue?: number, maxlength?: number }>
}>()

const model = defineModel<string>()
const charCount = defineModel<number>('charCount')

const editor = useRichTextEditor({
  content: model.value,
  onUpdate: (editorInstance) => {
    model.value = editorInstance.getHTML()
    charCount.value = editorInstance.storage.characterCount.characters()
  },
  maxlength,
  allowExceedMaxlength
})

watch(
  () => editor.value,
  (editorInstance) => {
    if (editorInstance && charCount.value === undefined) {
      charCount.value = editorInstance.storage.characterCount.characters()
    }
  },
  { immediate: true }
)

watch(
  () => model.value,
  (value) => {
    if (!editor.value) {
      return
    }

    if (editor.value.getHTML() !== value) {
      editor.value.commands.setContent(value ?? '', { emitUpdate: false })
    }
  }
)
</script>

<template>
  <div
    class="av-rich-text-editor av-col av-gap-xxs av-w-full"
    data-testid="av-rich-text-editor"
  >
    <div class="av-rich-text-editor-wrapper">
      <RichTextToolbar
        v-bind="labels"
        :editor="editor"
      />
      <div class="av-px-sm">
        <EditorContent
          :editor="editor"
          role="textbox"
          aria-multiline="true"
          :aria-label="editorLabel"
        />
      </div>
    </div>
    <slot
      name="maxLengthCaption"
      :current-value="charCount"
      :maxlength="maxlength"
    >
      <span
        v-if="maxlength"
        class="caption-light"
        :class="{
          'av-text-text1': (charCount ?? 0) <= (maxlength ?? 0),
          'av-text-error': (charCount ?? 0) > (maxlength ?? 0),
        }"
        data-testid="maxlength-caption"
      >
        {{ charCount }} / {{ maxlength }}
      </span>
    </slot>
  </div>
</template>

<style lang="scss" scoped>
.av-rich-text-editor {
  min-width: 0;
}

.av-rich-text-editor-wrapper {
  min-width: 0;
  max-width: 100%;
  border: 1px solid var(--stroke);
  border-radius: var(--radius-2xl) var(--radius-2xl) var(--radius-lg) var(--radius-lg);
  overflow: hidden;

  :deep() {
    .ProseMirror {
      min-height: var(--dimension-7xl);
      height: var(--dimension-7xl);
      overflow: auto;
      background-color: var(--other-background-base);
      resize: vertical;
      overflow-wrap: anywhere;
      word-break: break-word;
    }

    a {
      color: var(--dark-background-primary1);
      text-decoration: underline;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      table-layout: fixed;

      p {
        background-color: transparent !important;
      }
    }

    th, td {
      border: 1px solid var(--stroke) !important;
      padding: var(--spacing-xxs) !important;
    }

    th {
      background-color: var(--stroke) !important;
      font-weight: var(--font-weight-semibold) !important;
    }

    .image-resizer {
      display: inline-block;
      resize: horizontal;
      overflow: auto;
      max-width: 100%;
      min-width: 100px;
    }

    .image-resizer img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
}
</style>

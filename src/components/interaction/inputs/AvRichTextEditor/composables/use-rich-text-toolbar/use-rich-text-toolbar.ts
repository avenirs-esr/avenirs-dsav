import type { Editor } from '@tiptap/vue-3'
import type { Ref } from 'vue'
import type { AvRichTextEditorHeaderLevels } from '@/components/interaction/inputs/AvRichTextEditor/AvRichTextEditor.types'

export function useRichTextToolbar (editor: Ref<Editor | null | undefined>) {
  const undo = () => editor.value?.chain().focus().undo().run()

  const redo = () => editor.value?.chain().focus().redo().run()

  const toggleBold = () => editor.value?.chain().focus().toggleBold().run()

  const toggleItalic = () => editor.value?.chain().focus().toggleItalic().run()

  const toggleUnderline = () => editor.value?.chain().focus().toggleUnderline().run()

  const setLink = ({ url, name }: { url: string, name: string }) => editor.value?.chain()
    .focus()
    .extendMarkRange('link')
    .setLink({ href: url, title: url })
    .insertContent(name)
    .unsetMark('link')
    .run()

  const unsetLink = () => editor.value?.chain().focus().extendMarkRange('link').unsetLink().run()

  const setImage = ({ url, name }: { url: string, name: string }) => editor.value?.chain().focus().setImage({ src: url, alt: name, title: name }).run()

  const removeImage = () => editor.value?.chain().focus().deleteSelection().run()

  const insertTable = () => editor.value?.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()

  const deleteTable = () => editor.value?.chain().focus().deleteTable().run()

  const addColumnBefore = () => editor.value?.chain().focus().addColumnBefore().run()

  const addColumnAfter = () => editor.value?.chain().focus().addColumnAfter().run()

  const deleteColumn = () => editor.value?.chain().focus().deleteColumn().run()

  const addRowBefore = () => editor.value?.chain().focus().addRowBefore().run()

  const addRowAfter = () => editor.value?.chain().focus().addRowAfter().run()

  const deleteRow = () => editor.value?.chain().focus().deleteRow().run()

  const setTextAlign = (alignment: 'left' | 'center' | 'right' | 'justify') => editor.value?.chain().focus().setTextAlign(alignment).run()

  const toggleBulletList = () => editor.value?.chain().focus().toggleBulletList().run()

  const toggleOrderedList = () => editor.value?.chain().focus().toggleOrderedList().run()

  const decreaseIndent = () => editor.value?.chain().focus().liftListItem('listItem').run()

  const increaseIndent = () => editor.value?.chain().focus().sinkListItem('listItem').run()

  const setParagraph = () => editor.value?.chain().focus().setParagraph().run()

  const setHeading = (level: AvRichTextEditorHeaderLevels) => editor.value?.chain().focus().toggleHeading({ level }).run()

  return {
    undo,
    redo,
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
    increaseIndent,
    setParagraph,
    setHeading,
  }
}

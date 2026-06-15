import type { Editor } from '@tiptap/core'
import CharacterCount from '@tiptap/extension-character-count'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import { Table, TableCell, TableHeader, TableRow } from '@tiptap/extension-table'
import TextAlign from '@tiptap/extension-text-align'
import StarterKit from '@tiptap/starter-kit'
import { useEditor } from '@tiptap/vue-3'

interface UseRichTextEditorOptions {
  content?: string
  maxlength?: number
  allowExceedMaxlength?: boolean
  onUpdate?: (editor: Editor) => void
}

export const ResizableImage = Image.extend({
  renderHTML ({ HTMLAttributes }) {
    return [
      'div',
      { class: 'image-resizer' },
      ['img', HTMLAttributes],
    ]
  },
})

export function useRichTextEditor ({ content, maxlength, allowExceedMaxlength = true, onUpdate }: UseRichTextEditorOptions) {
  return useEditor({
    extensions: [
      StarterKit.configure({ link: false }),
      CharacterCount.configure({ limit: allowExceedMaxlength ? undefined : maxlength }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { rel: 'noopener noreferrer', target: '_blank' },
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      ResizableImage
    ],
    content,
    onUpdate: ({ editor }) => onUpdate?.(editor),
    editorProps: {
      attributes: { class: 'av--mx-sm av-px-sm av-py-xxs' },
      handleClick: (view, pos, event) => {
        const { schema } = view.state
        const $pos = view.state.doc.resolve(pos)
        const linkMark = $pos.marks().find(mark => mark.type === schema.marks.link)
        if (linkMark) {
          if (event.ctrlKey || event.metaKey) {
            window.open(linkMark.attrs.href, '_blank')
          }
          return true
        }
        return false
      },
      handleKeyDown: (view, event) => {
        if (
          !allowExceedMaxlength
          && maxlength
          && view.state.doc.textContent.length >= maxlength
          && (event.key === 'Enter' || event.key === 'Return')
        ) {
          event.preventDefault()
          return true
        }
        return false
      },
    },
  })
}

import type { Editor } from '@tiptap/vue-3'
import type { Ref } from 'vue'
import { useRichTextToolbar } from '@/components/interaction/inputs/AvRichTextEditor/composables/use-rich-text-toolbar/use-rich-text-toolbar'
import { BddTest } from '@/tests'
import { mountComposable } from '@/tests/utils'

const run = vi.fn()
const focus = vi.fn(() => ({
  undo: () => ({ run }),
  redo: () => ({ run }),
  toggleBold: () => ({ run }),
  toggleItalic: () => ({ run }),
  toggleUnderline: () => ({ run }),
  extendMarkRange: (_mark: string) => ({
    setLink: (_options: { href: string, title: string }) => ({
      insertContent: (_content: string) => ({
        unsetMark: (_mark: string) => ({ run })
      })
    }),
    unsetLink: () => ({ run })
  }),
  unsetLink: () => ({ run }),
  setImage: (_options: { src: string, alt: string, title: string }) => ({ run }),
  deleteSelection: () => ({ run }),
  insertTable: (_options: { rows: number, cols: number, withHeaderRow: boolean }) => ({ run }),
  deleteTable: () => ({ run }),
  addColumnBefore: () => ({ run }),
  addColumnAfter: () => ({ run }),
  deleteColumn: () => ({ run }),
  addRowBefore: () => ({ run }),
  addRowAfter: () => ({ run }),
  deleteRow: () => ({ run }),
  setTextAlign: (_align: string) => ({ run }),
  toggleBulletList: () => ({ run }),
  toggleOrderedList: () => ({ run }),
  liftListItem: (_type: string) => ({ run }),
  sinkListItem: (_type: string) => ({ run }),
  setParagraph: () => ({ run }),
  toggleHeading: (_options: { level: number }) => ({ run })
}))
const chain = vi.fn(() => ({ focus }))
const editorMock = { chain }

BddTest().given('a useRichTextToolbar composable', () => {
  let composableResult: ReturnType<typeof useRichTextToolbar>

  BddTest().when('the composable is used with a valid editor', () => {
    beforeEach(() => {
      const editorRef = toRef(editorMock)
      const result = mountComposable(() => useRichTextToolbar(editorRef as unknown as Ref<Editor | undefined>))
      composableResult = result.result
    })

    BddTest().and('calling undo', () => {
      beforeEach(() => {
        composableResult.undo()
      })

      BddTest().then('it should call editor.chain().focus().undo().run()', () => {
        expect(editorMock.chain).toHaveBeenCalled()
        expect(editorMock.chain().focus).toHaveBeenCalled()
        expect(editorMock.chain().focus().undo).toBeDefined()
        expect(editorMock.chain().focus().undo().run).toHaveBeenCalled()
      })
    })

    BddTest().and('calling redo', () => {
      beforeEach(() => {
        composableResult.redo()
      })

      BddTest().then('it should call editor.chain().focus().redo().run()', () => {
        expect(editorMock.chain).toHaveBeenCalled()
        expect(editorMock.chain().focus).toHaveBeenCalled()
        expect(editorMock.chain().focus().redo).toBeDefined()
        expect(editorMock.chain().focus().redo().run).toHaveBeenCalled()
      })
    })

    BddTest().and('calling toggleBold', () => {
      beforeEach(() => {
        composableResult.toggleBold()
      })

      BddTest().then('it should call editor.chain().focus().toggleBold().run()', () => {
        expect(editorMock.chain).toHaveBeenCalled()
        expect(editorMock.chain().focus).toHaveBeenCalled()
        expect(editorMock.chain().focus().toggleBold).toBeDefined()
        expect(editorMock.chain().focus().toggleBold().run).toHaveBeenCalled()
      })
    })

    BddTest().and('calling toggleItalic', () => {
      beforeEach(() => {
        composableResult.toggleItalic()
      })

      BddTest().then('it should call editor.chain().focus().toggleItalic().run()', () => {
        expect(editorMock.chain).toHaveBeenCalled()
        expect(editorMock.chain().focus).toHaveBeenCalled()
        expect(editorMock.chain().focus().toggleItalic).toBeDefined()
        expect(editorMock.chain().focus().toggleItalic().run).toHaveBeenCalled()
      })
    })

    BddTest().and('calling toggleUnderline', () => {
      beforeEach(() => {
        composableResult.toggleUnderline()
      })

      BddTest().then('it should call editor.chain().focus().toggleUnderline().run()', () => {
        expect(editorMock.chain).toHaveBeenCalled()
        expect(editorMock.chain().focus).toHaveBeenCalled()
        expect(editorMock.chain().focus().toggleUnderline).toBeDefined()
        expect(editorMock.chain().focus().toggleUnderline().run).toHaveBeenCalled()
      })
    })

    BddTest().and('calling setLink', () => {
      const url = 'https://example.com'
      const name = 'Example'

      beforeEach(() => {
        composableResult.setLink({ url, name })
      })

      BddTest().then('it should call editor.chain().focus().extendMarkRange("link").setLink({ href: url, title: name }).insertContent(name).unsetMark("link").run()', () => {
        expect(editorMock.chain).toHaveBeenCalled()
        expect(editorMock.chain().focus).toHaveBeenCalled()
        expect(editorMock.chain().focus().extendMarkRange).toBeDefined()
        expect(editorMock.chain().focus().extendMarkRange('link').setLink({ href: url, title: name })).toBeDefined()
        expect(editorMock.chain().focus().extendMarkRange('link').setLink({ href: url, title: name }).insertContent(name)).toBeDefined()
        expect(editorMock.chain().focus().extendMarkRange('link').setLink({ href: url, title: name }).insertContent(name).unsetMark('link')).toBeDefined()
        expect(editorMock.chain().focus().extendMarkRange('link').setLink({ href: url, title: name }).insertContent(name).unsetMark('link').run).toHaveBeenCalled()
      })
    })

    BddTest().and('calling unsetLink', () => {
      beforeEach(() => {
        composableResult.unsetLink()
      })

      BddTest().then('it should call editor.chain().focus().extendMarkRange("link").unsetLink().run()', () => {
        expect(editorMock.chain).toHaveBeenCalled()
        expect(editorMock.chain().focus).toHaveBeenCalled()
        expect(editorMock.chain().focus().extendMarkRange).toBeDefined()
        expect(editorMock.chain().focus().extendMarkRange('link').unsetLink).toBeDefined()
        expect(editorMock.chain().focus().extendMarkRange('link').unsetLink().run).toHaveBeenCalled()
      })
    })

    BddTest().and('calling setImage', () => {
      const url = 'https://example.com/image.jpg'
      const name = 'Example Image'

      beforeEach(() => {
        composableResult.setImage({ url, name })
      })

      BddTest().then('it should call editor.chain().focus().setImage({ src: url, alt: name, title: name }).run()', () => {
        expect(editorMock.chain).toHaveBeenCalled()
        expect(editorMock.chain().focus).toHaveBeenCalled()
        expect(editorMock.chain().focus().setImage).toBeDefined()
        expect(editorMock.chain().focus().setImage({ src: url, alt: name, title: name })).toBeDefined()
        expect(editorMock.chain().focus().setImage({ src: url, alt: name, title: name }).run).toHaveBeenCalled()
      })
    })

    BddTest().and('calling removeImage', () => {
      beforeEach(() => {
        composableResult.removeImage()
      })

      BddTest().then('it should call editor.chain().focus().deleteSelection().run()', () => {
        expect(editorMock.chain).toHaveBeenCalled()
        expect(editorMock.chain().focus).toHaveBeenCalled()
        expect(editorMock.chain().focus().deleteSelection).toBeDefined()
        expect(editorMock.chain().focus().deleteSelection().run).toHaveBeenCalled()
      })
    })

    BddTest().and('calling insertTable', () => {
      beforeEach(() => {
        composableResult.insertTable()
      })

      BddTest().then('it should call editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()', () => {
        expect(editorMock.chain).toHaveBeenCalled()
        expect(editorMock.chain().focus).toHaveBeenCalled()
        expect(editorMock.chain().focus().insertTable).toBeDefined()
        expect(editorMock.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true })).toBeDefined()
        expect(editorMock.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run).toHaveBeenCalled()
      })
    })

    BddTest().and('calling deleteTable', () => {
      beforeEach(() => {
        composableResult.deleteTable()
      })

      BddTest().then('it should call editor.chain().focus().deleteTable().run()', () => {
        expect(editorMock.chain).toHaveBeenCalled()
        expect(editorMock.chain().focus).toHaveBeenCalled()
        expect(editorMock.chain().focus().deleteTable).toBeDefined()
        expect(editorMock.chain().focus().deleteTable().run).toHaveBeenCalled()
      })
    })

    BddTest().and('calling addColumnBefore', () => {
      beforeEach(() => {
        composableResult.addColumnBefore()
      })

      BddTest().then('it should call editor.chain().focus().addColumnBefore().run()', () => {
        expect(editorMock.chain).toHaveBeenCalled()
        expect(editorMock.chain().focus).toHaveBeenCalled()
        expect(editorMock.chain().focus().addColumnBefore).toBeDefined()
        expect(editorMock.chain().focus().addColumnBefore().run).toHaveBeenCalled()
      })
    })

    BddTest().and('calling addColumnAfter', () => {
      beforeEach(() => {
        composableResult.addColumnAfter()
      })

      BddTest().then('it should call editor.chain().focus().addColumnAfter().run()', () => {
        expect(editorMock.chain).toHaveBeenCalled()
        expect(editorMock.chain().focus).toHaveBeenCalled()
        expect(editorMock.chain().focus().addColumnAfter).toBeDefined()
        expect(editorMock.chain().focus().addColumnAfter().run).toHaveBeenCalled()
      })
    })

    BddTest().and('calling deleteColumn', () => {
      beforeEach(() => {
        composableResult.deleteColumn()
      })

      BddTest().then('it should call editor.chain().focus().deleteColumn().run()', () => {
        expect(editorMock.chain).toHaveBeenCalled()
        expect(editorMock.chain().focus).toHaveBeenCalled()
        expect(editorMock.chain().focus().deleteColumn).toBeDefined()
        expect(editorMock.chain().focus().deleteColumn().run).toHaveBeenCalled()
      })
    })

    BddTest().and('calling addRowBefore', () => {
      beforeEach(() => {
        composableResult.addRowBefore()
      })

      BddTest().then('it should call editor.chain().focus().addRowBefore().run()', () => {
        expect(editorMock.chain).toHaveBeenCalled()
        expect(editorMock.chain().focus).toHaveBeenCalled()
        expect(editorMock.chain().focus().addRowBefore).toBeDefined()
        expect(editorMock.chain().focus().addRowBefore().run).toHaveBeenCalled()
      })
    })

    BddTest().and('calling addRowAfter', () => {
      beforeEach(() => {
        composableResult.addRowAfter()
      })

      BddTest().then('it should call editor.chain().focus().addRowAfter().run()', () => {
        expect(editorMock.chain).toHaveBeenCalled()
        expect(editorMock.chain().focus).toHaveBeenCalled()
        expect(editorMock.chain().focus().addRowAfter).toBeDefined()
        expect(editorMock.chain().focus().addRowAfter().run).toHaveBeenCalled()
      })
    })

    BddTest().and('calling deleteRow', () => {
      beforeEach(() => {
        composableResult.deleteRow()
      })

      BddTest().then('it should call editor.chain().focus().deleteRow().run()', () => {
        expect(editorMock.chain).toHaveBeenCalled()
        expect(editorMock.chain().focus).toHaveBeenCalled()
        expect(editorMock.chain().focus().deleteRow).toBeDefined()
        expect(editorMock.chain().focus().deleteRow().run).toHaveBeenCalled()
      })
    })

    BddTest().and('calling setTextAlign with "left"', () => {
      beforeEach(() => {
        composableResult.setTextAlign('left')
      })

      BddTest().then('it should call editor.chain().focus().setTextAlign("left").run()', () => {
        expect(editorMock.chain).toHaveBeenCalled()
        expect(editorMock.chain().focus).toHaveBeenCalled()
        expect(editorMock.chain().focus().setTextAlign).toBeDefined()
        expect(editorMock.chain().focus().setTextAlign('left')).toBeDefined()
        expect(editorMock.chain().focus().setTextAlign('left').run).toHaveBeenCalled()
      })
    })

    BddTest().and('calling toggleBulletList', () => {
      beforeEach(() => {
        composableResult.toggleBulletList()
      })

      BddTest().then('it should call editor.chain().focus().toggleBulletList().run()', () => {
        expect(editorMock.chain).toHaveBeenCalled()
        expect(editorMock.chain().focus).toHaveBeenCalled()
        expect(editorMock.chain().focus().toggleBulletList).toBeDefined()
        expect(editorMock.chain().focus().toggleBulletList().run).toHaveBeenCalled()
      })
    })

    BddTest().and('calling toggleOrderedList', () => {
      beforeEach(() => {
        composableResult.toggleOrderedList()
      })

      BddTest().then('it should call editor.chain().focus().toggleOrderedList().run()', () => {
        expect(editorMock.chain).toHaveBeenCalled()
        expect(editorMock.chain().focus).toHaveBeenCalled()
        expect(editorMock.chain().focus().toggleOrderedList).toBeDefined()
        expect(editorMock.chain().focus().toggleOrderedList().run).toHaveBeenCalled()
      })
    })

    BddTest().and('calling decreaseIndent', () => {
      beforeEach(() => {
        composableResult.decreaseIndent()
      })

      BddTest().then('it should call editor.chain().focus().liftListItem("listItem").run()', () => {
        expect(editorMock.chain).toHaveBeenCalled()
        expect(editorMock.chain().focus).toHaveBeenCalled()
        expect(editorMock.chain().focus().liftListItem).toBeDefined()
        expect(editorMock.chain().focus().liftListItem('listItem')).toBeDefined()
        expect(editorMock.chain().focus().liftListItem('listItem').run).toHaveBeenCalled()
      })
    })

    BddTest().and('calling increaseIndent', () => {
      beforeEach(() => {
        composableResult.increaseIndent()
      })

      BddTest().then('it should call editor.chain().focus().sinkListItem("listItem").run()', () => {
        expect(editorMock.chain).toHaveBeenCalled()
        expect(editorMock.chain().focus).toHaveBeenCalled()
        expect(editorMock.chain().focus().sinkListItem).toBeDefined()
        expect(editorMock.chain().focus().sinkListItem('listItem')).toBeDefined()
        expect(editorMock.chain().focus().sinkListItem('listItem').run).toHaveBeenCalled()
      })
    })

    BddTest().and('calling setParagraph', () => {
      beforeEach(() => {
        composableResult.setParagraph()
      })

      BddTest().then('it should call editor.chain().focus().setParagraph().run()', () => {
        expect(editorMock.chain).toHaveBeenCalled()
        expect(editorMock.chain().focus).toHaveBeenCalled()
        expect(editorMock.chain().focus().setParagraph).toBeDefined()
        expect(editorMock.chain().focus().setParagraph().run).toHaveBeenCalled()
      })
    })

    BddTest().and('calling setHeading', () => {
      const level = 2

      beforeEach(() => {
        composableResult.setHeading(level)
      })

      BddTest().then('it should call editor.chain().focus().toggleHeading({ level }).run()', () => {
        expect(editorMock.chain).toHaveBeenCalled()
        expect(editorMock.chain().focus).toHaveBeenCalled()
        expect(editorMock.chain().focus().toggleHeading).toBeDefined()
        expect(editorMock.chain().focus().toggleHeading({ level })).toBeDefined()
        expect(editorMock.chain().focus().toggleHeading({ level }).run).toHaveBeenCalled()
      })
    })
  })
})

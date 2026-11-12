import type { Editor } from '@tiptap/core'
import type { VueWrapper } from '@vue/test-utils'
import type { AvRichTextEditorProps } from '@/components/interaction/inputs/AvRichTextEditor/AvRichTextEditor.vue'
import { mount } from '@vue/test-utils'
import { beforeEach, expect, vi } from 'vitest'
import { nextTick } from 'vue'
import AvRichTextEditor from '@/components/interaction/inputs/AvRichTextEditor/AvRichTextEditor.vue'
import { RichTextToolbarStub } from '@/components/interaction/inputs/AvRichTextEditor/components/RichTextToolbar/RichTextToolbar.stub'
import { useRichTextEditor } from '@/components/interaction/inputs/AvRichTextEditor/composables/use-rich-text-editor/use-rich-text-editor'
import { BddTest } from '@/tests'

const mocks = vi.hoisted(() => ({
  editor: {
    storage: {
      characterCount: {
        characters: vi.fn()
      }
    },
    getHTML: vi.fn(),
    commands: {
      setContent: vi.fn()
    },
    setEditable: vi.fn()
  }
}))

vi.mock('@/components/interaction/inputs/AvRichTextEditor/composables/use-rich-text-editor/use-rich-text-editor', () => ({
  useRichTextEditor: vi.fn()
}))

const mockedUseRichTextEditor = vi.mocked(useRichTextEditor)

describe('avRichTextEditor', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvRichTextEditor>>
  const editorRef = ref(mocks.editor as unknown as Editor)

  const props: AvRichTextEditorProps = {
    editorLabel: 'Rich text editor',
    toolbarLabel: 'Rich text editor toolbar',
    undoLabel: 'Undo (CTRL + Z)',
    redoLabel: 'Redo (CTRL + Y)',
    paragraphLabel: 'Paragraph',
    headingLabel: 'Heading',
    boldLabel: 'Bold (CTRL + B)',
    italicLabel: 'Italic (CTRL + I)',
    underlineLabel: 'Underline (CTRL + U)',
    linkLabel: 'Link (CTRL + K)',
    linkNameLabel: 'Link Name',
    linkNamePlaceholder: 'Example Link',
    unsetLinkLabel: 'Remove Link',
    imageLabel: 'Image',
    imageNameLabel: 'Nom de l\'image',
    imageNamePlaceholder: 'Entrez le nom de l\'image',
    imageUrlLabel: 'URL de l\'image',
    removeImageLabel: 'Supprimer l\'image',
    insertTableLabel: 'Insérer un tableau',
    tableSettingsLabel: 'Paramètres du tableau',
    deleteTableLabel: 'Supprimer le tableau',
    addColumnBeforeLabel: 'Ajouter une colonne avant',
    addColumnAfterLabel: 'Ajouter une colonne après',
    deleteColumnLabel: 'Supprimer la colonne',
    addRowBeforeLabel: 'Ajouter une ligne avant',
    addRowAfterLabel: 'Ajouter une ligne après',
    deleteRowLabel: 'Supprimer la ligne',
    alignLeftLabel: 'Aligner à gauche',
    alignCenterLabel: 'Aligner au centre',
    alignRightLabel: 'Aligner à droite',
    alignJustifyLabel: 'Justifier',
    bulletListLabel: 'Liste à puces',
    orderedListLabel: 'Liste numérotée',
    decreaseIndentLabel: 'Diminuer le retrait',
    increaseIndentLabel: 'Augmenter le retrait',
    linkUrlLabel: 'URL du lien',
    popoversCancelLabel: 'Annuler',
    popoversConfirmLabel: 'Confirmer'
  }

  const EditorContentStub = defineComponent({
    name: 'EditorContent',
    props: {
      editor: {
        type: Object,
        default: null
      }
    },
    template: '<div data-testid="editor-content"></div>'
  })

  const stubs = {
    EditorContent: EditorContentStub,
    RichTextToolbar: RichTextToolbarStub
  }

  beforeEach(() => {
    vi.clearAllMocks()
    editorRef.value = mocks.editor as unknown as Editor

    mocks.editor.storage.characterCount.characters.mockReturnValue(12)
    mocks.editor.getHTML.mockReturnValue('<p>Initial content</p>')

    mockedUseRichTextEditor.mockReturnValue(editorRef as never)
  })

  BddTest().given('a rich text editor', () => {
    BddTest().when('the component is mounted without maxlength', () => {
      beforeEach(() => {
        wrapper = mount(AvRichTextEditor, {
          props,
          global: { stubs }
        })
      })

      BddTest().then('it should render the toolbar', () => {
        expect(wrapper.findComponent(RichTextToolbarStub).exists()).toBe(true)
      })

      BddTest().then('it should render the editor content', () => {
        expect(wrapper.findComponent(EditorContentStub).exists()).toBe(true)
      })

      BddTest().then('it should not render the maxlength caption', () => {
        expect(wrapper.find('[data-testid="maxlength-caption"]').exists()).toBe(false)
      })

      BddTest().then('it should initialize the character count', () => {
        expect(wrapper.emitted('update:charCount')?.[0]).toEqual([12])
      })

      BddTest().then('it should initialize the editor as editable', () => {
        expect(mocks.editor.setEditable).toHaveBeenCalledWith(true)
      })

      BddTest().then('it should use the default allowed header levels', () => {
        expect(mockedUseRichTextEditor).toHaveBeenCalledWith(expect.objectContaining({
          maxlength: undefined,
          allowExceedMaxlength: true,
          editorLabel: props.editorLabel
        }))

        expect(wrapper.findComponent(RichTextToolbarStub).props('allowedHeadersLevels')).toEqual([1, 2, 3])
      })
    })

    BddTest().when('the component is mounted with maxlength', () => {
      const maxlength = 100

      beforeEach(() => {
        wrapper = mount(AvRichTextEditor, {
          props: { ...props, maxlength },
          global: { stubs }
        })
      })

      BddTest().then('it should render the maxlength caption', () => {
        const caption = wrapper.find('[data-testid="maxlength-caption"]')

        expect(caption.exists()).toBe(true)
        expect(caption.text()).toContain(`/ ${maxlength}`)
      })

      BddTest().then('it should display the current character count', () => {
        expect(wrapper.find('[data-testid="maxlength-caption"]').text()).toContain('12')
      })
    })

    BddTest().when('the component receives a maxLengthCaption slot', () => {
      beforeEach(() => {
        wrapper = mount(AvRichTextEditor, {
          props: { ...props, maxlength: 100 },
          slots: {
            maxLengthCaption: '<span data-testid="custom-maxlength-caption">Custom caption</span>'
          },
          global: { stubs }
        })
      })

      BddTest().then('it should render the custom caption instead of the default one', () => {
        expect(wrapper.find('[data-testid="custom-maxlength-caption"]').exists()).toBe(true)
        expect(wrapper.find('[data-testid="maxlength-caption"]').exists()).toBe(false)
      })
    })

    BddTest().when('the component is mounted as disabled', () => {
      beforeEach(() => {
        wrapper = mount(AvRichTextEditor, {
          props: { ...props, disabled: true },
          global: { stubs }
        })
      })

      BddTest().then('it should disable the editor', () => {
        expect(mocks.editor.setEditable).toHaveBeenCalledWith(false)
      })

      BddTest().then('it should forward the disabled prop to the toolbar', () => {
        expect(wrapper.findComponent(RichTextToolbarStub).props('disabled')).toBe(true)
      })
    })

    BddTest().when('the component is mounted while loading', () => {
      beforeEach(() => {
        wrapper = mount(AvRichTextEditor, {
          props: { ...props, isLoading: true },
          global: { stubs }
        })
      })

      BddTest().then('it should disable the editor', () => {
        expect(mocks.editor.setEditable).toHaveBeenCalledWith(false)
      })

      BddTest().then('it should forward the loading prop to the toolbar', () => {
        expect(wrapper.findComponent(RichTextToolbarStub).props('isLoading')).toBe(true)
      })
    })

    BddTest().when('the component is mounted with custom allowed header levels', () => {
      const allowedHeadersLevels = [1, 2] as const

      beforeEach(() => {
        wrapper = mount(AvRichTextEditor, {
          props: { ...props, allowedHeadersLevels: [...allowedHeadersLevels] },
          global: { stubs }
        })
      })

      BddTest().then('it should forward the allowed header levels to the toolbar', () => {
        expect(wrapper.findComponent(RichTextToolbarStub).props('allowedHeadersLevels')).toEqual([1, 2])
      })
    })

    BddTest().when('the editor content is updated', () => {
      beforeEach(() => {
        wrapper = mount(AvRichTextEditor, {
          props,
          global: { stubs }
        })
      })

      BddTest().then('it should update the model and character count', async () => {
        const editorInstance = {
          storage: {
            characterCount: {
              characters: () => 25
            }
          },
          getHTML: () => '<p>Updated content</p>'
        } as unknown as Editor

        const options = mockedUseRichTextEditor.mock.calls[0][0]

        options.onUpdate?.(editorInstance)

        await nextTick()

        expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual(['<p>Updated content</p>'])
        expect(wrapper.emitted('update:charCount')?.at(-1)).toEqual([25])
      })
    })

    BddTest().when('the external model changes', () => {
      beforeEach(() => {
        wrapper = mount(AvRichTextEditor, {
          props: {
            ...props,
            modelValue: '<p>Initial content</p>'
          },
          global: { stubs }
        })
      })

      BddTest().then('it should update the editor content when it differs from the model', async () => {
        await wrapper.setProps({ modelValue: '<p>New content</p>' })

        expect(mocks.editor.commands.setContent).toHaveBeenCalledWith(
          '<p>New content</p>',
          { emitUpdate: false }
        )
      })

      BddTest().then('it should not update the editor when the content is unchanged', async () => {
        mocks.editor.getHTML.mockReturnValue('<p>New content</p>')

        await wrapper.setProps({ modelValue: '<p>New content</p>' })

        expect(mocks.editor.commands.setContent).not.toHaveBeenCalled()
      })
    })

    BddTest().when('the editor is not initialized', () => {
      beforeEach(() => {
        editorRef.value = null as unknown as Editor

        wrapper = mount(AvRichTextEditor, {
          props,
          global: { stubs }
        })
      })

      BddTest().then('it should not attempt to update the editor content', async () => {
        await wrapper.setProps({ modelValue: '<p>New content</p>' })

        expect(mocks.editor.commands.setContent).not.toHaveBeenCalled()
      })
    })
  })
})

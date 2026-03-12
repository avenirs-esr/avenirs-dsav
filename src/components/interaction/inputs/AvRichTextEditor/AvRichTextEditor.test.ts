import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect } from 'vitest'
import AvRichTextEditor, { type AvRichTextEditorProps } from '@/components/interaction/inputs/AvRichTextEditor/AvRichTextEditor.vue'
import { RichTextToolbarStub } from '@/components/interaction/inputs/AvRichTextEditor/components/RichTextToolbar/RichTextToolbar.stub'
import { BddTest } from '@/tests'

BddTest().given('a rich text editor', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvRichTextEditor>>

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
    template: `<div data-test-id="editor-content"></div>`
  })

  const stubs = {
    EditorContent: EditorContentStub,
    RichTextToolbar: RichTextToolbarStub
  }

  BddTest().when('the component is mounted without maxlength', () => {
    beforeEach(() => {
      wrapper = mount(AvRichTextEditor, { props, global: { stubs } })
    })

    BddTest().then('it should render the toolbar', () => {
      const toolbar = wrapper.findComponent(RichTextToolbarStub)
      expect(toolbar.exists()).toBe(true)
    })

    BddTest().then('it should render the editor content', () => {
      const editorContent = wrapper.findComponent(EditorContentStub)
      expect(editorContent.exists()).toBe(true)
    })

    BddTest().then('it should not render the maxlength caption', () => {
      const maxlengthCaption = wrapper.find('[data-testid="maxlength-caption"]')
      expect(maxlengthCaption.exists()).toBe(false)
    })
  })

  BddTest().when('the component is mounted with maxlength', () => {
    const maxlength = 100

    beforeEach(() => {
      wrapper = mount(AvRichTextEditor, { props: { ...props, maxlength }, global: { stubs } })
    })

    BddTest().then('it should render the maxlength caption', () => {
      const maxlengthCaption = wrapper.find('[data-testid="maxlength-caption"]')
      expect(maxlengthCaption.exists()).toBe(true)
      expect(maxlengthCaption.text()).toContain(`/ ${maxlength}`)
    })
  })

  BddTest().when('the component is mounted with a maxLengthCaption slot', () => {
    const maxlength = 100
    const maxLengthCaption = '<span data-testid="custom-maxlength-caption">Custom max length caption</span>'

    beforeEach(() => {
      wrapper = mount(AvRichTextEditor, {
        props: { ...props, maxlength },
        slots: { maxLengthCaption },
        global: { stubs }
      })
    })

    BddTest().then('it should render the custom maxlength caption', () => {
      const customMaxlengthCaption = wrapper.find('[data-testid="custom-maxlength-caption"]')
      expect(customMaxlengthCaption.exists()).toBe(true)
    })
  })
})

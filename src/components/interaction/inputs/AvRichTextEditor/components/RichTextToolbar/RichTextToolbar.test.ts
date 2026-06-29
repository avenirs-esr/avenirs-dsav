import type { Editor } from '@tiptap/vue-3'
import type { AvRichTextEditorHeaderLevels } from '@/components/interaction/inputs/AvRichTextEditor/AvRichTextEditor.types'
import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect, vi } from 'vitest'
import RichTextToolbar, { type RichTextToolbarProps } from '@/components/interaction/inputs/AvRichTextEditor/components/RichTextToolbar/RichTextToolbar.vue'
import { ToolbarImagePopoverStub } from '@/components/interaction/inputs/AvRichTextEditor/components/ToolbarImagePopover/ToolbarImagePopover.stub'
import { ToolbarLinkPopoverStub } from '@/components/interaction/inputs/AvRichTextEditor/components/ToolbarLinkPopover/ToolbarLinkPopover.stub'
import { ToolbarTableSettingsDropdownStub } from '@/components/interaction/inputs/AvRichTextEditor/components/ToolbarTableSettingsDropdown/ToolbarTableSettingsDropdown.stub'
import { AvButtonStub, BddTest } from '@/tests'

const undo = vi.fn()
const redo = vi.fn()
const setParagraph = vi.fn()
const setHeading = vi.fn()
const toggleBold = vi.fn()
const toggleItalic = vi.fn()
const toggleUnderline = vi.fn()
const setLink = vi.fn()
const unsetLink = vi.fn()
const setImage = vi.fn()
const removeImage = vi.fn()
const insertTable = vi.fn()
const deleteTable = vi.fn()
const addColumnBefore = vi.fn()
const addColumnAfter = vi.fn()
const deleteColumn = vi.fn()
const addRowBefore = vi.fn()
const addRowAfter = vi.fn()
const deleteRow = vi.fn()
const setTextAlign = vi.fn()
const toggleBulletList = vi.fn()
const toggleOrderedList = vi.fn()
const decreaseIndent = vi.fn()
const increaseIndent = vi.fn()

vi.mock('@/components/interaction/inputs/AvRichTextEditor/composables/use-rich-text-toolbar/use-rich-text-toolbar', () => ({
  useRichTextToolbar: () => ({
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
  })
}))

const isUndoActive = ref(false)
const isRedoActive = ref(false)
const isLiftListItemActive = ref(false)
const isSinkListItemActive = ref(false)
const textBetweenMock = vi.fn().mockReturnValue('')

const EditorStub = {
  can: () => ({
    chain: () => ({
      focus: () => ({
        undo: () => ({ run: () => isUndoActive.value }),
        redo: () => ({ run: () => isRedoActive.value }),
        liftListItem: () => ({ run: () => isLiftListItemActive.value }),
        sinkListItem: () => ({ run: () => isSinkListItemActive.value }),
      }),
    }),
  }),
  isActive: vi.fn().mockReturnValue(false),
  state: {
    selection: { from: 0, to: 0 },
    doc: { textBetween: textBetweenMock }
  }
}

BddTest().given('a rich text toolbar', () => {
  let wrapper: VueWrapper<InstanceType<typeof RichTextToolbar>>

  const props: RichTextToolbarProps = {
    editor: EditorStub as unknown as Editor,
    allowedHeadersLevels: [1, 2, 3] as AvRichTextEditorHeaderLevels[],
    toolbarLabel: 'Rich text editor toolbar',
    paragraphLabel: 'Paragraph',
    headingLabel: 'Heading',
    undoLabel: 'Undo (CTRL + Z)',
    redoLabel: 'Redo (CTRL + Y)',
    boldLabel: 'Gras',
    italicLabel: 'Italique',
    underlineLabel: 'Souligné',
    linkLabel: 'Lien',
    linkNameLabel: 'Nom du lien',
    linkNamePlaceholder: 'Exemple de lien',
    linkUrlLabel: 'URL du lien',
    unsetLinkLabel: 'Supprimer le lien',
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
    orderedListLabel: 'Liste ordonnée',
    decreaseIndentLabel: 'Diminuer le retrait',
    increaseIndentLabel: 'Augmenter le retrait',
    popoversCancelLabel: 'Annuler',
    popoversConfirmLabel: 'Confirmer',
  }

  const stubs = {
    AvButton: AvButtonStub,
    ToolbarLinkPopover: ToolbarLinkPopoverStub,
    ToolbarImagePopover: ToolbarImagePopoverStub,
    ToolbarTableSettingsDropdown: ToolbarTableSettingsDropdownStub
  }

  const tableSettingsScenarios = [
    { name: 'delete table', action: 'deleteTableSelected', method: deleteTable },
    { name: 'add column before', action: 'addColumnBeforeSelected', method: addColumnBefore },
    { name: 'add column after', action: 'addColumnAfterSelected', method: addColumnAfter },
    { name: 'delete column', action: 'deleteColumnSelected', method: deleteColumn },
    { name: 'add row before', action: 'addRowBeforeSelected', method: addRowBefore },
    { name: 'add row after', action: 'addRowAfterSelected', method: addRowAfter },
    { name: 'delete row', action: 'deleteRowSelected', method: deleteRow }
  ]

  const getUndoButton = () => wrapper.findAllComponents(AvButtonStub).find(button => button.attributes('data-testid') === 'undo-button')
  const getRedoButton = () => wrapper.findAllComponents(AvButtonStub).find(button => button.attributes('data-testid') === 'redo-button')
  const getParagraphButton = () => wrapper.findAllComponents(AvButtonStub).find(button => button.attributes('data-testid') === 'set-paragraph-button')
  const getHeading1Button = () => wrapper.findAllComponents(AvButtonStub).find(button => button.attributes('data-testid') === 'set-h1-button')
  const getHeading2Button = () => wrapper.findAllComponents(AvButtonStub).find(button => button.attributes('data-testid') === 'set-h2-button')
  const getHeading3Button = () => wrapper.findAllComponents(AvButtonStub).find(button => button.attributes('data-testid') === 'set-h3-button')
  const getBoldButton = () => wrapper.findAllComponents(AvButtonStub).find(button => button.attributes('data-testid') === 'bold-button')
  const getItalicButton = () => wrapper.findAllComponents(AvButtonStub).find(button => button.attributes('data-testid') === 'italic-button')
  const getUnderlineButton = () => wrapper.findAllComponents(AvButtonStub).find(button => button.attributes('data-testid') === 'underline-button')
  const getToolbarLinkPopover = () => wrapper.findComponent(ToolbarLinkPopoverStub)
  const getUnsetLinkButton = () => wrapper.findAllComponents(AvButtonStub).find(button => button.attributes('data-testid') === 'unset-link-button')
  const getToolbarImagePopover = () => wrapper.findComponent(ToolbarImagePopoverStub)
  const getRemoveImageButton = () => wrapper.findAllComponents(AvButtonStub).find(button => button.attributes('data-testid') === 'remove-image-button')
  const getToolbarTableSettingsDropdown = () => wrapper.findComponent(ToolbarTableSettingsDropdownStub)
  const getInsertTableButton = () => wrapper.findAllComponents(AvButtonStub).find(button => button.attributes('data-testid') === 'insert-table-button')
  const getAlignLeftButton = () => wrapper.findAllComponents(AvButtonStub).find(button => button.attributes('data-testid') === 'align-left-button')
  const getAlignCenterButton = () => wrapper.findAllComponents(AvButtonStub).find(button => button.attributes('data-testid') === 'align-center-button')
  const getAlignRightButton = () => wrapper.findAllComponents(AvButtonStub).find(button => button.attributes('data-testid') === 'align-right-button')
  const getAlignJustifyButton = () => wrapper.findAllComponents(AvButtonStub).find(button => button.attributes('data-testid') === 'align-justify-button')
  const getBulletListButton = () => wrapper.findAllComponents(AvButtonStub).find(button => button.attributes('data-testid') === 'bullet-list-button')
  const getOrderedListButton = () => wrapper.findAllComponents(AvButtonStub).find(button => button.attributes('data-testid') === 'ordered-list-button')
  const getDecreaseIndentButton = () => wrapper.findAllComponents(AvButtonStub).find(button => button.attributes('data-testid') === 'decrease-indent-button')
  const getIncreaseIndentButton = () => wrapper.findAllComponents(AvButtonStub).find(button => button.attributes('data-testid') === 'increase-indent-button')

  BddTest().when('the component is mounted', () => {
    beforeEach(() => {
      vi.clearAllMocks()
      wrapper = mount(RichTextToolbar, { props, global: { stubs } })
    })

    BddTest().then('it should render the undo button in disabled state', () => {
      const undoButton = getUndoButton()
      expect(undoButton?.exists()).toBe(true)
      expect(undoButton!.text()).toBe(props.undoLabel)
      expect(undoButton!.props('disabled')).toBe(true)
      expect(undoButton!.props('variant')).toBe('DEFAULT')
    })

    BddTest().then('it should render the redo button in disabled state and DEFAULT variant', () => {
      const redoButton = getRedoButton()
      expect(redoButton?.exists()).toBe(true)
      expect(redoButton!.text()).toBe(props.redoLabel)
      expect(redoButton!.props('disabled')).toBe(true)
      expect(redoButton!.props('variant')).toBe('DEFAULT')
    })

    BddTest().then('it should render the paragraph button', () => {
      const paragraphButton = getParagraphButton()
      expect(paragraphButton?.exists()).toBe(true)
      expect(paragraphButton!.text()).toBe(props.paragraphLabel)
    })

    BddTest().then('it should render the heading buttons', () => {
      const heading1Button = getHeading1Button()
      const heading2Button = getHeading2Button()
      const heading3Button = getHeading3Button()

      expect(heading1Button?.exists()).toBe(true)
      expect(heading1Button!.text()).toBe(`${props.headingLabel} 1`)

      expect(heading2Button?.exists()).toBe(true)
      expect(heading2Button!.text()).toBe(`${props.headingLabel} 2`)

      expect(heading3Button?.exists()).toBe(true)
      expect(heading3Button!.text()).toBe(`${props.headingLabel} 3`)
    })

    BddTest().then('it should render the bold button', () => {
      const boldButton = getBoldButton()
      expect(boldButton?.exists()).toBe(true)
      expect(boldButton!.text()).toBe(props.boldLabel)
    })

    BddTest().then('it should render the italic button', () => {
      const italicButton = getItalicButton()
      expect(italicButton?.exists()).toBe(true)
      expect(italicButton!.text()).toBe(props.italicLabel)
    })

    BddTest().then('it should render the underline button', () => {
      const underlineButton = getUnderlineButton()
      expect(underlineButton?.exists()).toBe(true)
      expect(underlineButton!.text()).toBe(props.underlineLabel)
    })

    BddTest().then('it should render the link popover with correct labels', () => {
      const linkPopover = getToolbarLinkPopover()
      expect(linkPopover.exists()).toBe(true)
      expect(linkPopover.props('linkNameLabel')).toBe(props.linkNameLabel)
      expect(linkPopover.props('linkNamePlaceholder')).toBe(props.linkNamePlaceholder)
      expect(linkPopover.props('linkUrlLabel')).toBe(props.linkUrlLabel)
    })

    BddTest().then('it should not render the unset link button', () => {
      const unsetLinkButton = getUnsetLinkButton()
      expect(unsetLinkButton).toBeUndefined()
    })

    BddTest().then('it should render the image popover with correct labels', () => {
      const imagePopover = getToolbarImagePopover()
      expect(imagePopover.exists()).toBe(true)
      expect(imagePopover.props('imageNameLabel')).toBe(props.imageNameLabel)
      expect(imagePopover.props('imageNamePlaceholder')).toBe(props.imageNamePlaceholder)
      expect(imagePopover.props('imageUrlLabel')).toBe(props.imageUrlLabel)
    })

    BddTest().then('it should not render the remove image button', () => {
      const removeImageButton = getRemoveImageButton()
      expect(removeImageButton).toBeUndefined()
    })

    BddTest().then('it should render the insert table button', () => {
      const insertTableButton = getInsertTableButton()
      expect(insertTableButton?.exists()).toBe(true)
      expect(insertTableButton!.text()).toBe(props.insertTableLabel)
    })

    BddTest().then('it should not render the table settings dropdown', () => {
      const tableSettingsDropdown = getToolbarTableSettingsDropdown()
      expect(tableSettingsDropdown.exists()).toBe(false)
    })

    BddTest().then('it should render the text align buttons', () => {
      const alignLeftButton = getAlignLeftButton()
      const alignCenterButton = getAlignCenterButton()
      const alignRightButton = getAlignRightButton()
      const alignJustifyButton = getAlignJustifyButton()
      expect(alignLeftButton?.exists()).toBe(true)
      expect(alignLeftButton!.text()).toBe(props.alignLeftLabel)
      expect(alignCenterButton?.exists()).toBe(true)
      expect(alignCenterButton!.text()).toBe(props.alignCenterLabel)
      expect(alignRightButton?.exists()).toBe(true)
      expect(alignRightButton!.text()).toBe(props.alignRightLabel)
      expect(alignJustifyButton?.exists()).toBe(true)
      expect(alignJustifyButton!.text()).toBe(props.alignJustifyLabel)
    })

    BddTest().then('it should render the list buttons', () => {
      const bulletListButton = getBulletListButton()
      const orderedListButton = getOrderedListButton()
      expect(bulletListButton?.exists()).toBe(true)
      expect(bulletListButton!.text()).toBe(props.bulletListLabel)
      expect(orderedListButton?.exists()).toBe(true)
      expect(orderedListButton!.text()).toBe(props.orderedListLabel)
    })

    BddTest().then('it should render the indent buttons in disabled state and DEFAULT variant', () => {
      const decreaseIndentButton = getDecreaseIndentButton()
      const increaseIndentButton = getIncreaseIndentButton()
      expect(decreaseIndentButton?.exists()).toBe(true)
      expect(decreaseIndentButton!.text()).toBe(props.decreaseIndentLabel)
      expect(decreaseIndentButton!.props('disabled')).toBe(true)
      expect(decreaseIndentButton!.props('variant')).toBe('DEFAULT')
      expect(increaseIndentButton?.exists()).toBe(true)
      expect(increaseIndentButton!.text()).toBe(props.increaseIndentLabel)
      expect(increaseIndentButton!.props('disabled')).toBe(true)
      expect(increaseIndentButton!.props('variant')).toBe('DEFAULT')
    })

    BddTest().and('the user makes an actions that enables the undo and redo buttons', () => {
      beforeEach(() => {
        isUndoActive.value = true
        isRedoActive.value = true
        wrapper.vm.$forceUpdate()
      })

      BddTest().then('the undo and redo buttons should be enabled and in FLAT variant', () => {
        const undoButton = getUndoButton()
        const redoButton = getRedoButton()
        expect(undoButton!.props('disabled')).toBe(false)
        expect(redoButton!.props('disabled')).toBe(false)
        expect(undoButton!.props('variant')).toBe('FLAT')
        expect(redoButton!.props('variant')).toBe('FLAT')
      })

      BddTest().and('the user clicks the undo button', () => {
        beforeEach(() => {
          const undoButton = getUndoButton()
          undoButton!.trigger('click')
        })

        BddTest().then('the undo method should be called', () => {
          expect(undo).toHaveBeenCalled()
        })
      })

      BddTest().and('the user clicks the redo button', () => {
        beforeEach(() => {
          const redoButton = getRedoButton()
          redoButton!.trigger('click')
        })

        BddTest().then('the redo method should be called', () => {
          expect(redo).toHaveBeenCalled()
        })
      })
    })

    BddTest().and('the user clicks the paragraph button', () => {
      beforeEach(() => {
        const paragraphButton = getParagraphButton()
        paragraphButton!.trigger('click')
      })

      BddTest().then('the setParagraph method should be called', () => {
        expect(setParagraph).toHaveBeenCalled()
      })
    })

    BddTest().and('the user clicks the heading 1 button', () => {
      beforeEach(() => {
        const heading1Button = getHeading1Button()
        heading1Button!.trigger('click')
      })

      BddTest().then('the setHeading method should be called with level 1', () => {
        expect(setHeading).toHaveBeenCalledWith(1)
      })
    })

    BddTest().and('the user clicks the heading 2 button', () => {
      beforeEach(() => {
        const heading2Button = getHeading2Button()
        heading2Button!.trigger('click')
      })

      BddTest().then('the setHeading method should be called with level 2', () => {
        expect(setHeading).toHaveBeenCalledWith(2)
      })
    })

    BddTest().and('the user clicks the heading 3 button', () => {
      beforeEach(() => {
        const heading3Button = getHeading3Button()
        heading3Button!.trigger('click')
      })

      BddTest().then('the setHeading method should be called with level 3', () => {
        expect(setHeading).toHaveBeenCalledWith(3)
      })
    })

    BddTest().and('the user clicks the bold button', () => {
      beforeEach(() => {
        const boldButton = getBoldButton()
        boldButton!.trigger('click')
      })

      BddTest().then('the toggleBold method should be called', () => {
        expect(toggleBold).toHaveBeenCalled()
      })
    })

    BddTest().and('the user clicks the italic button', () => {
      beforeEach(() => {
        const italicButton = getItalicButton()
        italicButton!.trigger('click')
      })

      BddTest().then('the toggleItalic method should be called', () => {
        expect(toggleItalic).toHaveBeenCalled()
      })
    })

    BddTest().and('the user clicks the underline button', () => {
      beforeEach(() => {
        const underlineButton = getUnderlineButton()
        underlineButton!.trigger('click')
      })

      BddTest().then('the toggleUnderline method should be called', () => {
        expect(toggleUnderline).toHaveBeenCalled()
      })
    })

    BddTest().and('the user inserts a link in the editor', () => {
      const testLinkData = { name: 'Example link', url: 'https://example.com' }

      beforeEach(() => {
        wrapper.findComponent(ToolbarLinkPopoverStub).vm.$emit('confirm', testLinkData)
      })

      BddTest().then('the setLink method should be called with the link data', () => {
        expect(setLink).toHaveBeenCalledWith(testLinkData)
      })
    })

    BddTest().and('the user focuses a link in the editor', () => {
      beforeEach(() => {
        EditorStub.isActive.mockImplementation(format => format === 'link')
        wrapper.vm.$forceUpdate()
      })

      BddTest().then('the link popover should not be rendered', () => {
        const linkPopover = getToolbarLinkPopover()
        expect(linkPopover.exists()).toBe(false)
      })

      BddTest().then('the unset link button should be rendered', () => {
        const unsetLinkButton = getUnsetLinkButton()
        expect(unsetLinkButton?.exists()).toBe(true)
        expect(unsetLinkButton!.text()).toBe(props.unsetLinkLabel)
      })

      BddTest().and('the user clicks the unset link button', () => {
        beforeEach(() => {
          const unsetLinkButton = getUnsetLinkButton()
          unsetLinkButton!.trigger('click')
        })

        BddTest().then('the setLink method should be called', () => {
          expect(unsetLink).toHaveBeenCalled()
        })
      })
    })

    BddTest().and('the user selects some text in the editor that is not a link', () => {
      beforeEach(() => {
        EditorStub.isActive.mockReturnValue(false)
        EditorStub.state.selection = { from: 1, to: 5 }
        textBetweenMock.mockReturnValue('Test')
        wrapper.vm.$forceUpdate()
      })

      BddTest().then('the unset link button should not be rendered', () => {
        const unsetLinkButton = getUnsetLinkButton()
        expect(unsetLinkButton).toBeUndefined()
      })

      BddTest().then('the link popover should have the initialName prop', () => {
        const linkPopover = getToolbarLinkPopover()
        expect(linkPopover.exists()).toBe(true)
        expect(linkPopover.props('initialName')).toBe('Test')
      })
    })

    BddTest().and('the user inserts an image in the editor', () => {
      const testImageData = { name: 'Example image', url: 'https://example.com/image.png' }

      beforeEach(() => {
        wrapper.findComponent(ToolbarImagePopoverStub).vm.$emit('confirm', testImageData)
      })

      BddTest().then('the setImage method should be called with the image data', () => {
        expect(setImage).toHaveBeenCalledWith(testImageData)
      })
    })

    BddTest().and('the user focuses an image in the editor', () => {
      beforeEach(() => {
        EditorStub.isActive.mockImplementation(format => format === 'image')
        wrapper.vm.$forceUpdate()
      })

      BddTest().then('the image popover should not be rendered', () => {
        const imagePopover = getToolbarImagePopover()
        expect(imagePopover.exists()).toBe(false)
      })

      BddTest().then('the remove image button should be rendered', () => {
        const removeImageButton = getRemoveImageButton()
        expect(removeImageButton?.exists()).toBe(true)
        expect(removeImageButton!.text()).toBe(props.removeImageLabel)
      })

      BddTest().and('the user clicks the remove image button', () => {
        beforeEach(() => {
          const removeImageButton = getRemoveImageButton()
          removeImageButton!.trigger('click')
        })

        BddTest().then('the removeImage method should be called', () => {
          expect(removeImage).toHaveBeenCalled()
        })
      })
    })

    BddTest().and('the user focuses a table in the editor', () => {
      beforeEach(() => {
        EditorStub.isActive.mockImplementation(format => format === 'table')
        wrapper.vm.$forceUpdate()
      })

      BddTest().then('the table settings dropdown should be rendered', () => {
        const tableSettingsDropdown = getToolbarTableSettingsDropdown()
        expect(tableSettingsDropdown.exists()).toBe(true)
        expect(tableSettingsDropdown.props('deleteTableLabel')).toBe(props.deleteTableLabel)
        expect(tableSettingsDropdown.props('addColumnBeforeLabel')).toBe(props.addColumnBeforeLabel)
        expect(tableSettingsDropdown.props('addColumnAfterLabel')).toBe(props.addColumnAfterLabel)
        expect(tableSettingsDropdown.props('deleteColumnLabel')).toBe(props.deleteColumnLabel)
        expect(tableSettingsDropdown.props('addRowBeforeLabel')).toBe(props.addRowBeforeLabel)
        expect(tableSettingsDropdown.props('addRowAfterLabel')).toBe(props.addRowAfterLabel)
        expect(tableSettingsDropdown.props('deleteRowLabel')).toBe(props.deleteRowLabel)
      })

      tableSettingsScenarios.forEach(({ name, action, method }) => {
        BddTest().and(`the user clicks the ${name} option`, () => {
          beforeEach(() => {
            const tableSettingsDropdown = getToolbarTableSettingsDropdown()
            tableSettingsDropdown.vm.$emit(action)
          })

          BddTest().then(`the ${method.name} method should be called`, () => {
            expect(method).toHaveBeenCalled()
          })
        })
      })
    })

    BddTest().and('the user cicks the align left button', () => {
      beforeEach(() => {
        const alignLeftButton = getAlignLeftButton()
        alignLeftButton!.trigger('click')
      })

      BddTest().then('the setTextAlign method should be called with left alignment', () => {
        expect(setTextAlign).toHaveBeenCalledWith('left')
      })
    })

    BddTest().and('the user clicks the align center button', () => {
      beforeEach(() => {
        const alignCenterButton = getAlignCenterButton()
        alignCenterButton!.trigger('click')
      })

      BddTest().then('the setTextAlign method should be called with center alignment', () => {
        expect(setTextAlign).toHaveBeenCalledWith('center')
      })
    })

    BddTest().and('the user clicks the align right button', () => {
      beforeEach(() => {
        const alignRightButton = getAlignRightButton()
        alignRightButton!.trigger('click')
      })

      BddTest().then('the setTextAlign method should be called with right alignment', () => {
        expect(setTextAlign).toHaveBeenCalledWith('right')
      })
    })

    BddTest().and('the user clicks the align justify button', () => {
      beforeEach(() => {
        const alignJustifyButton = getAlignJustifyButton()
        alignJustifyButton!.trigger('click')
      })

      BddTest().then('the setTextAlign method should be called with justify alignment', () => {
        expect(setTextAlign).toHaveBeenCalledWith('justify')
      })
    })

    BddTest().and('the user clicks the bullet list button', () => {
      beforeEach(() => {
        const bulletListButton = getBulletListButton()
        bulletListButton!.trigger('click')
      })

      BddTest().then('the toggleBulletList method should be called', () => {
        expect(toggleBulletList).toHaveBeenCalled()
      })
    })

    BddTest().and('the user clicks the ordered list button', () => {
      beforeEach(() => {
        const orderedListButton = getOrderedListButton()
        orderedListButton!.trigger('click')
      })

      BddTest().then('the toggleOrderedList method should be called', () => {
        expect(toggleOrderedList).toHaveBeenCalled()
      })
    })

    BddTest().and('the user makes an actions that enables the decrease and increase indent buttons', () => {
      beforeEach(() => {
        isLiftListItemActive.value = true
        isSinkListItemActive.value = true
        wrapper.vm.$forceUpdate()
      })

      BddTest().then('the decrease and increase indent buttons should be enabled and in FLAT variant', () => {
        const decreaseIndentButton = getDecreaseIndentButton()
        const increaseIndentButton = getIncreaseIndentButton()
        expect(decreaseIndentButton!.props('disabled')).toBe(false)
        expect(increaseIndentButton!.props('disabled')).toBe(false)
        expect(decreaseIndentButton!.props('variant')).toBe('FLAT')
        expect(increaseIndentButton!.props('variant')).toBe('FLAT')
      })

      BddTest().and('the user clicks the decrease indent button', () => {
        beforeEach(() => {
          const decreaseIndentButton = getDecreaseIndentButton()
          decreaseIndentButton!.trigger('click')
        })

        BddTest().then('the decreaseIndent method should be called', () => {
          expect(decreaseIndent).toHaveBeenCalled()
        })
      })

      BddTest().and('the user clicks the increase indent button', () => {
        beforeEach(() => {
          const increaseIndentButton = getIncreaseIndentButton()
          increaseIndentButton!.trigger('click')
        })

        BddTest().then('the increaseIndent method should be called', () => {
          expect(increaseIndent).toHaveBeenCalled()
        })
      })
    })
  })

  BddTest().when('the component is mounted with a null editor', () => {
    beforeEach(() => {
      wrapper = mount(RichTextToolbar, { props: { ...props, editor: null }, global: { stubs } })
    })

    BddTest().then('the link popover should have an empty initialName prop', () => {
      const linkPopover = getToolbarLinkPopover()
      expect(linkPopover.exists()).toBe(true)
      expect(linkPopover.props('initialName')).toBe('')
    })
  })
})

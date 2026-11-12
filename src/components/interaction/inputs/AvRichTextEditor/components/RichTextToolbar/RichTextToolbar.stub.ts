import type { PropType } from 'vue'
import type { AvRichTextEditorHeaderLevels } from '@/components/interaction/inputs/AvRichTextEditor/AvRichTextEditor.types'
import { AvInteractivePropsStub } from '@/types/interfaces.stub'

export const RichTextToolbarStub = defineComponent({
  name: 'RichTextToolbarStub',
  props: {
    ...AvInteractivePropsStub,
    undoLabel: String,
    redoLabel: String,
    paragraphLabel: String,
    headingLabel: String,
    boldLabel: String,
    italicLabel: String,
    underlineLabel: String,
    linkLabel: String,
    unlinkLabel: String,
    imageLabel: String,
    deleteImageLabel: String,
    tableLabel: String,
    deleteTableLabel: String,
    addColumnBeforeLabel: String,
    addColumnAfterLabel: String,
    deleteColumnLabel: String,
    addRowBeforeLabel: String,
    addRowAfterLabel: String,
    deleteRowLabel: String,
    textAlignLeftLabel: String,
    textAlignCenterLabel: String,
    textAlignRightLabel: String,
    textAlignJustifyLabel: String,
    bulletListLabel: String,
    orderedListLabel: String,
    decreaseIndentLabel: String,
    increaseIndentLabel: String,
    linkUrlLabel: String,
    imageUrlLabel: String,
    popoversCancelLabel: String,
    popoversConfirmLabel: String,
    allowedHeadersLevels: Array as PropType<readonly AvRichTextEditorHeaderLevels[]>
  },
  template: '<div data-testid="rich-text-toolbar" />'
})

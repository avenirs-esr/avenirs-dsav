export interface AvRichTextEditorLabels {
  /**
   * Label for the rich text editor, used for accessibility purposes.
   * @example "Rich text editor"
   */
  editorLabel: string

  /**
   * Label for the toolbar, used for accessibility purposes.
   * @example "Rich text editor toolbar"
   */
  toolbarLabel: string

  /**
   * Label for the undo button in the toolbar.
   * @example "Undo (CTRL + Z)"
   */
  undoLabel: string

  /**
   * Label for the redo button in the toolbar.
   * @example "Redo (CTRL + Y)"
   */
  redoLabel: string

  /**
   * Label for the button to set a paragraph in the toolbar.
   * @example "Paragraph"
   */
  paragraphLabel: string

  /**
   * Label for the buttons to set a heading in the toolbar.
   * @example "Heading"
   * @note The numbers are added dynamically based on the heading level (1-3).
   */
  headingLabel: string

  /**
   * Label for the bold button in the toolbar.
   * @example "Bold (CTRL + B)"
   */
  boldLabel: string

  /**
   * Label for the italic button in the toolbar.
   * @example "Italic (CTRL + I)"
   */
  italicLabel: string

  /**
   * Label for the underline button in the toolbar.
   * @example "Underline (CTRL + U)"
   */
  underlineLabel: string

  /**
   * Label for the link button in the toolbar.
   * @example "Link (CTRL + K)"
   */
  linkLabel: string

  /**
   * Label for the link name input in the link popover.
   * @example "Link Name"
   */
  linkNameLabel: string

  /**
   * Placeholder for the link name input in the link popover.
   * @example "Example Link"
   */
  linkNamePlaceholder: string

  /**
   * Label for the link URL input in the link popover.
   * @example "Link URL"
   */
  linkUrlLabel: string

  /**
   * Label for the button to remove a link in the toolbar.
   * @example "Unlink (CTRL + SHIFT + K)"
   */
  unsetLinkLabel: string

  /**
   * Label for the image button in the toolbar.
   * @example "Image (CTRL + SHIFT + I)"
   */
  imageLabel: string

  /**
   * Label for the image name input in the image popover.
   * @example "Image Name"
   */
  imageNameLabel: string

  /**
   * Placeholder for the image name input in the image popover.
   * @example "Example Image"
   */
  imageNamePlaceholder: string

  /**
   * Label for the image URL input in the image popover.
   * @example "Image URL"
   */
  imageUrlLabel: string

  /**
   * Label for the button to remove an image in the toolbar.
   * @example "Remove image"
   */
  removeImageLabel: string

  /**
   * Label for the button to insert a table in the toolbar.
   * @example "Insert table"
   */
  insertTableLabel: string

  /**
   * Label for the button to open the table options dropdown in the toolbar.
   * @example "Table options"
   */
  tableSettingsLabel: string

  /**
   * Label for the button to delete a table in the toolbar.
   * @example "Delete table"
   */
  deleteTableLabel: string

  /**
   * Label for the button to add a column before in the toolbar.
   * @example "Add column before"
   */
  addColumnBeforeLabel: string

  /**
   * Label for the button to add a column after in the toolbar.
   * @example "Add column after"
   */
  addColumnAfterLabel: string

  /**
   * Label for the button to delete a column in the toolbar.
   * @example "Delete column"
   */
  deleteColumnLabel: string

  /**
   * Label for the button to add a row before in the toolbar.
   * @example "Add row before"
   */
  addRowBeforeLabel: string

  /**
   * Label for the button to add a row after in the toolbar.
   * @example "Add row after"
   */
  addRowAfterLabel: string

  /**
   * Label for the button to delete a row in the toolbar.
   * @example "Delete row"
   */
  deleteRowLabel: string

  /**
   * Label for the button to align text to the left in the toolbar.
   * @example "Align left (CTRL + SHIFT + L)"
   */
  alignLeftLabel: string

  /**
   * Label for the button to align text to the center in the toolbar.
   * @example "Align center (CTRL + SHIFT + E)"
   */
  alignCenterLabel: string

  /**
   * Label for the button to align text to the right in the toolbar.
   * @example "Align right (CTRL + SHIFT + R)"
   */
  alignRightLabel: string

  /**
   * Label for the button to justify text in the toolbar.
   * @example "Justify (CTRL + SHIFT + J)"
   */
  alignJustifyLabel: string

  /**
   * Label for the button to insert a bullet list in the toolbar.
   * @example "Bullet list (CTRL + SHIFT + 8)"
   */
  bulletListLabel: string

  /**
   * Label for the button to insert a numbered list in the toolbar.
   * @example "Numbered list (CTRL + SHIFT + 7)"
   */
  orderedListLabel: string

  /**
   * Label for the button to decrease indent in the toolbar.
   * @example "Decrease indent (CTRL + [)"
   */
  decreaseIndentLabel: string

  /**
   * Label for the button to increase indent in the toolbar.
   * @example "Increase indent (CTRL + ])"
   */
  increaseIndentLabel: string

  /**
   * Label for the cancel button in the popovers.
   * @example "Cancel"
   */
  popoversCancelLabel: string

  /**
   * Label for the confirm button in the popovers.
   * @example "Confirm"
   */
  popoversConfirmLabel: string
}

export type AvRichTextEditorHeaderLevels = 1 | 2 | 3 | 4 | 5 | 6

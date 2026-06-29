import type { Meta, StoryFn } from '@storybook/vue3'
import AvRichTextEditor, { type AvRichTextEditorProps } from '@/components/interaction/inputs/AvRichTextEditor/AvRichTextEditor.vue'

/**
 * <h1 class="n1">Inputs - <code>AvRichTextEditor</code></h1>
 *
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvRichTextEditor</code> component is a flexible and accessible rich text editor
 *     that provides a standardized way to collect formatted user input in forms and interfaces.
 *     It supports various formatting options, validation states, and accessibility features to
 *     ensure a consistent user experience.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     It adds rich text editing capabilities, character count tracking, and custom styling.
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <ul>
 *   <li>
 *     <span class="b2-regular">
 *       a <strong>Wrapper</strong>: container that manages the overall layout and positioning.
 *     </span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">
 *       a <strong>Toolbar</strong>: contains buttons for text formatting options (for example bold,
 *       italic, lists, etc.).
 *     </span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">
 *       a <strong>Editable Area</strong>: the main <code>contenteditable</code> element where users
 *       can input and format their text.
 *     </span>
 *   </li>
 *   <li>
 *     <span class="b2-regular">
 *       a <strong>Caption</strong>: optional helper text displayed below the label.
 *     </span>
 *   </li>
 * </ul>
 *
 * <p>
 *   <span class="b2-regular">
 *     The component integrates focus management, proper ARIA attributes, and responsive design patterns.
 *   </span>
 * </p>
 */

const meta: Meta<AvRichTextEditorProps> = {
  title: 'Components/Interaction/Inputs/AvRichTextEditor',
  component: AvRichTextEditor,
  tags: ['autodocs'],
  argTypes: {
    maxlength: { control: 'number', required: false },
    editorLabel: { control: 'text' },
    toolbarLabel: { control: 'text' },
    undoLabel: { control: 'text' },
    redoLabel: { control: 'text' },
    paragraphLabel: { control: 'text' },
    headingLabel: { control: 'text' },
    boldLabel: { control: 'text' },
    italicLabel: { control: 'text' },
    underlineLabel: { control: 'text' },
    linkLabel: { control: 'text' },
    linkNameLabel: { control: 'text' },
    linkNamePlaceholder: { control: 'text' },
    linkUrlLabel: { control: 'text' },
    unsetLinkLabel: { control: 'text' },
    imageLabel: { control: 'text' },
    imageNameLabel: { control: 'text' },
    imageNamePlaceholder: { control: 'text' },
    imageUrlLabel: { control: 'text' },
    removeImageLabel: { control: 'text' },
    insertTableLabel: { control: 'text' },
    tableSettingsLabel: { control: 'text' },
    deleteTableLabel: { control: 'text' },
    addColumnBeforeLabel: { control: 'text' },
    addColumnAfterLabel: { control: 'text' },
    deleteColumnLabel: { control: 'text' },
    addRowBeforeLabel: { control: 'text' },
    addRowAfterLabel: { control: 'text' },
    deleteRowLabel: { control: 'text' },
    alignLeftLabel: { control: 'text' },
    alignCenterLabel: { control: 'text' },
    alignRightLabel: { control: 'text' },
    alignJustifyLabel: { control: 'text' },
    bulletListLabel: { control: 'text' },
    orderedListLabel: { control: 'text' },
    decreaseIndentLabel: { control: 'text' },
    increaseIndentLabel: { control: 'text' },
    popoversCancelLabel: { control: 'text' },
    popoversConfirmLabel: { control: 'text' },
    allowExceedMaxlength: { control: 'boolean', required: false },
    allowedHeadersLevels: {
      control: { type: 'multi-select' },
      options: [1, 2, 3, 4, 5, 6],
    },
  },
  args: {
    editorLabel: 'Rich Text Editor',
    toolbarLabel: 'Rich Text Editor Toolbar',
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
    linkUrlLabel: 'Link URL',
    unsetLinkLabel: 'Unlink (CTRL + SHIFT + K)',
    imageLabel: 'Image (CTRL + SHIFT + I)',
    imageNameLabel: 'Image Name',
    imageNamePlaceholder: 'Example Image',
    imageUrlLabel: 'Image URL',
    removeImageLabel: 'Remove image',
    insertTableLabel: 'Insert table',
    tableSettingsLabel: 'Table settings',
    deleteTableLabel: 'Delete table',
    addColumnBeforeLabel: 'Add column before',
    addColumnAfterLabel: 'Add column after',
    deleteColumnLabel: 'Delete column',
    addRowBeforeLabel: 'Add row before',
    addRowAfterLabel: 'Add row after',
    deleteRowLabel: 'Delete row',
    alignLeftLabel: 'Align left (CTRL + SHIFT + L)',
    alignCenterLabel: 'Align center (CTRL + SHIFT + E)',
    alignRightLabel: 'Align right (CTRL + SHIFT + R)',
    alignJustifyLabel: 'Justify (CTRL + SHIFT + J)',
    bulletListLabel: 'Bullet list (CTRL + SHIFT + 8)',
    orderedListLabel: 'Numbered list (CTRL + SHIFT + 7)',
    decreaseIndentLabel: 'Decrease indent (CTRL + [)',
    increaseIndentLabel: 'Increase indent (CTRL + ])',
    popoversCancelLabel: 'Cancel',
    popoversConfirmLabel: 'Confirm',
    allowExceedMaxlength: true,
    allowedHeadersLevels: [1, 2, 3]
  }
}

export default meta

const Template: StoryFn<AvRichTextEditorProps> = args => ({
  components: { AvRichTextEditor },
  setup () {
    const content = ref('')
    const charCount = ref(0)

    return {
      args,
      content,
      charCount
    }
  },
  template: `
    <div class="av-col av-container">
      <AvRichTextEditor
        v-model="content"
        v-model:char-count="charCount"
        v-bind="args"
      />

      <p>Character count: {{ charCount }}</p>
      <p>HTML Content count: {{ content.length }}</p>
      <p>HTML Content: {{ content }}</p>
    </div>
  `
})

export const Default = Template.bind({})
Default.args = {}

export const MaxLength = Template.bind({})
MaxLength.args = {
  maxlength: 8,
  allowExceedMaxlength: false
}

export const ExceedableMaxLength = Template.bind({})
ExceedableMaxLength.args = {
  maxlength: 8,
  allowExceedMaxlength: true
}

const TemplateWithMaxLengthCaptionSlot: StoryFn<AvRichTextEditorProps> = args => ({
  components: { AvRichTextEditor },
  setup () {
    const content = ref('')
    const charCount = ref(0)

    return {
      args,
      content,
      charCount
    }
  },
  template: `
    <div class="av-col av-container">
      <AvRichTextEditor
        v-model="content"
        v-model:char-count="charCount"
        v-bind="args"
      >
        <template #maxLengthCaption="{ currentValue, maxlength }">
          <span class="b2-regular">{{ currentValue }} / {{ maxlength }} characters</span>
        </template>
      </AvRichTextEditor>

      <p>Character count: {{ charCount }}</p>
      <p>HTML Content count: {{ content.length }}</p>
      <p>HTML Content: {{ content }}</p>
    </div>
  `
})

export const MaxLengthCaptionSlot = TemplateWithMaxLengthCaptionSlot.bind({})
MaxLengthCaptionSlot.args = {
  maxlength: 4000
}

export const AllAllowedHeadersLevels = Template.bind({})
AllAllowedHeadersLevels.args = {
  allowedHeadersLevels: [1, 2, 3, 4, 5, 6]
}

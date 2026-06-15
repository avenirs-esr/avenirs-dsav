export const AvRichTextEditorStub = defineComponent({
  name: 'AvRichTextEditor',
  props: ['modelValue', 'charCount', 'maxlength', 'allowExceedMaxlength'],
  template: `<div class="av-rich-text-editor">
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value); $emit('update:charCount', $event.target.value.length)"
    />
    <span data-test="char-count">{{ charCount }}</span>
  </div>`
})

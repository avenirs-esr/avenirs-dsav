import type { VueWrapper } from '@vue/test-utils'
import { EditorContent } from '@tiptap/vue-3'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, expect } from 'vitest'
import { nextTick } from 'vue'
import { richTextEditorTestProps } from '@/components/interaction/inputs/AvRichTextEditor/AvRichTextEditor.test-fixtures'
import AvRichTextEditor from '@/components/interaction/inputs/AvRichTextEditor/AvRichTextEditor.vue'
import { RichTextToolbarStub } from '@/components/interaction/inputs/AvRichTextEditor/components/RichTextToolbar/RichTextToolbar.stub'
import { BddTest } from '@/tests'

BddTest().given('a rich text editor with a real TipTap editor', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvRichTextEditor>>

  beforeEach(async () => {
    wrapper = mount(AvRichTextEditor, {
      props: { ...richTextEditorTestProps, modelValue: '' },
      global: { stubs: { RichTextToolbar: RichTextToolbarStub } }
    })
    await nextTick()
  })

  afterEach(() => {
    wrapper.unmount()
  })

  function getEditor () {
    const editor = wrapper.getComponent(EditorContent).props('editor')
    if (!editor) {
      throw new Error('TipTap editor was not initialized')
    }
    return editor
  }

  BddTest().when('the editor is mounted', () => {
    BddTest().then('it should not emit a content update', () => {
      expect(getEditor().isEditable).toBe(true)
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })
  })

  BddTest().when('the disabled and loading states change', () => {
    BddTest().then('it should update editability without emitting a content update', async () => {
      const editor = getEditor()

      await wrapper.setProps({ disabled: true })
      expect(editor.isEditable).toBe(false)
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()

      await wrapper.setProps({ disabled: false, isLoading: true })
      expect(editor.isEditable).toBe(false)
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()

      await wrapper.setProps({ isLoading: false })
      expect(editor.isEditable).toBe(true)
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })
  })

  BddTest().when('the editor content changes', () => {
    BddTest().then('it should emit the updated content', async () => {
      getEditor().commands.insertContent('Nouvelle consigne')
      await nextTick()

      expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual(['<p>Nouvelle consigne</p>'])
    })
  })
})

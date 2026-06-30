export const AvHeaderStub = defineComponent({
  name: 'AvHeader',
  props: ['modelValue', 'homeLabel', 'homeTo', 'languageSelector'],
  emits: ['update:modelValue', 'language-select'],
  template: `
    <div>
      <slot name="quickLinks" />
      <slot name="roleContext" />
      <slot name="mainnav" />
      <slot />
    </div>
  `
})

export const AvHeaderStub = defineComponent({
  name: 'AvHeader',
  props: ['modelValue', 'homeLabel', 'homeTo', 'quickLinks', 'languageSelector'],
  emits: ['update:modelValue', 'language-select'],
  template: `
    <div>
      <slot name="before-quick-links" />
      <slot name="after-quick-links" />
      <slot name="roleContext" />
      <slot name="mainnav" />
      <slot />
    </div>
  `
})

export const AvHeaderStub = defineComponent({
  name: 'AvHeader',
  props: ['modelValue', 'serviceTitle', 'homeTo', 'quickLinks', 'languageSelector'],
  emits: ['update:modelValue', 'language-select'],
  template: `
    <div>
      <slot name="before-quick-links" />
      <slot name="after-quick-links" />
      <slot name="serviceDescription" />
      <slot name="mainnav" />
      <slot />
    </div>
  `
})

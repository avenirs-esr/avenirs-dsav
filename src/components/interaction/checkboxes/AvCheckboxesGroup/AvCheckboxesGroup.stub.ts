export const AvCheckboxesGroupStub = defineComponent({
  name: 'AvCheckboxesGroup',
  props: ['modelValue', 'options'],
  emits: ['update:modelValue'],
  template: `
    <fieldset class="av-checkboxes-group-stub">
      <slot />
    </fieldset>
  `
})

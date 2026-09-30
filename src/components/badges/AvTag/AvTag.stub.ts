export const AvTagStub = defineComponent({
  name: 'AvTag',
  template: `<div class="av-tag-stub" />`,
  props: [
    'label',
    'link',
    'tagName',
    'icon',
    'disabled',
    'disabledTooltip',
    'small',
    'iconOnly',
    'selectable',
    'selected',
    'value'
  ]
})

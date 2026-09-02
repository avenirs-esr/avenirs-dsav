export const AvListItemStub = defineComponent({
  name: 'AvListItem',
  props: [
    'hoverBackgroundColor',
    'selected',
    'icon',
    'iconSize',
    'iconColor',
    'colorOnHover',
    'enableTooltip',
    'title',
    'description'
  ],
  emits: ['click'],
  template: `
    <div
      class="av-list-item-stub"
      @click="$emit(\'click\')"
    >
      {{ title }}
      {{ description }}
      <slot />
    </div>`
})

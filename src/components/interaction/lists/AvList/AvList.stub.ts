export const AvListStub = defineComponent({
  name: 'AvList',
  props: ['size'],
  template: `
    <div class="av-list-stub">
      <slot />
    </div>`
})

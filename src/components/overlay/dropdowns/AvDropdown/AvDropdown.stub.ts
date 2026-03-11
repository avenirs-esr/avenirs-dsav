export const AvDropdownStub = defineComponent({
  name: 'AvDropdown',
  props: ['items', 'triggerAriaLabel', 'triggerIcon', 'triggerLabel', 'triggerVariant', 'triggerSmall', 'padding'],
  emits: ['itemSelected'],
  template: `
    <div class="av-dropdown-stub">
      <button
        v-for="item in items"
        :key="item.name"
        :data-name="item.name"
        :disabled="item.disabled"
        @click="$emit('itemSelected', item.name)"
      >
        {{ item.label }}
      </button>
    </div>
  `
})

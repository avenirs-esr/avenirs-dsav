export const AvPageSizePickerStub = defineComponent({
  name: 'AvPageSizePicker',
  props: ['label', 'pageSizeSelected', 'handleSelectChange'],
  template: `<button class="page-size-picker" @click="handleSelectChange({ value: 12 })">Set 12</button>`
})

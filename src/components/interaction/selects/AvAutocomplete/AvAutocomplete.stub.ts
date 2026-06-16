export const AvAutocompleteStub = defineComponent({
  name: 'AvAutocomplete',
  props: [
    'modelValue',
    'options',
    'loading',
    'inputOptions',
    'getOptionLabel',
    'getOptionKey',
    'multiSelect',
    'showSelectedSection',
    'serverSideFiltering',
    'enableLoadMore',
    'displaySelectionInInput',
    'maxDropdownHeight',
    'search',
    'clearLabel',
    'clearSelectionLabel',
    'withClearSelectionButton'
  ],
  emits: ['update:modelValue', 'clear', 'clearSelection', 'loadMore', 'update:search'],
  template: `
    <div class="av-autocomplete-stub">
      <slot
        name="item"
        v-for="option in options"
        :key="option.id"
        :option="option"
        :is-selected="false"
        :toggle="() => {}"
      />
    </div>
  `
})

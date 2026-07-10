export const AvToggleStub = defineComponent({
  name: 'AvToggle',
  props: ['id', 'name', 'modelValue', 'description', 'activeText', 'inactiveText', 'disabled', 'activeInactiveTextWidth'],
  emits: ['update:modelValue'],
  template: `
    <div class="av-toggle">
      <input
        type="checkbox"
        :id="id"
        :name="name"
        :checked="modelValue"
        data-testid="av-toggle"
        @change="$emit(\'update:modelValue\', $event.target.checked)"
      />
      <span class="description">
        {{ description }}
      </span>
      <span class="active-text">
        {{ activeText }}
      </span>
      <span class="inactive-text">
        {{ inactiveText }}
      </span>
    </div>`
})

export const AvToggleStub = defineComponent({
  name: 'AvToggle',
  props: ['id', 'name', 'modelValue', 'description', 'activeText', 'inactiveText', 'disabled'],
  emits: ['update:modelValue'],
  template: `
    <div class="av-toggle">
      <input
        type="checkbox"
        :id="id"
        :name="name"
        :checked="modelValue"
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

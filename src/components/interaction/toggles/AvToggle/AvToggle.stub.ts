import { AvInteractivePropsStub } from '@/types/interfaces.stub'

export const AvToggleStub = defineComponent({
  name: 'AvToggle',
  props: {
    ...AvInteractivePropsStub,
    id: { type: String, required: false },
    name: { type: String, required: false },
    modelValue: { type: Boolean, required: false },
    description: { type: String, required: false },
    activeText: { type: String, required: false },
    inactiveText: { type: String, required: false },
    statusTextWidth: { type: String, required: false },
  },
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

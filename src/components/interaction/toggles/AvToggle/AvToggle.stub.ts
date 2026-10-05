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
      <slot :active="modelValue">
        <span class="status" :data-status="modelValue">
          {{ modelValue ? activeText : inactiveText }}
        </span>
      </slot>
    </div>`
})

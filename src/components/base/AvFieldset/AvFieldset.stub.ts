export const AvFieldsetStub = defineComponent({
  name: 'AvFieldset',
  props: {
    legend: {
      type: String,
      required: false,
      default: ''
    },
    legendClass: {
      type: String,
      required: false,
      default: 'caption-regular'
    },
    legendId: {
      type: String,
      required: false,
      default: ''
    },
    hint: {
      type: String,
      required: false,
      default: ''
    },
    hintClass: {
      type: String,
      required: false,
      default: ''
    },
    errorMessage: {
      type: String,
      required: false,
      default: ''
    },
    successMessage: {
      type: String,
      required: false,
      default: ''
    },
    inline: {
      type: Boolean,
      required: false,
      default: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  template: `
    <fieldset :class="'av-fieldset' + (errorMessage ? '--error' : successMessage ? '--success' : '')">
      <slot />
      <legend>
        <slot name="legend" />
      </legend>
      <slot name="hint" />
      <span v-if="errorMessage" class="av-message--error">{{ errorMessage }}</span>
      <span v-if="successMessage" class="av-message--success">{{ successMessage }}</span>
    </fieldset>
  `
})

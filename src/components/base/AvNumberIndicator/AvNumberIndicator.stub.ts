export const AvNumberIndicatorStub = defineComponent({
  name: 'AvNumberIndicator',
  props: {
    value: {
      type: [Number],
      required: false,
    }
  },
  template: `
    <span class="av-number-indicator-stub">
      {{ value }}
    </span>
  `,
})

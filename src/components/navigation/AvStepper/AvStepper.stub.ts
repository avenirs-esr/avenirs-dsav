export const AvStepperStub = defineComponent({
  name: 'AvStepper',
  props: {
    steps: {
      type: Array as () => string[],
      required: true,
    },
    currentStep: {
      type: Number,
      required: true,
    },
  },
  template: `
    <div class="av-stepper-stub">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="step"
        :class="{ active: index === currentStep }"
      >
        {{ index + 1 }}. {{ step }}
      </div>
    </div>
  `,
})

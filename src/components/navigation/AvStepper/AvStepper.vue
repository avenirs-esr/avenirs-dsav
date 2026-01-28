<script setup lang="ts">
/**
 * AvStepper props.
 */
export interface AvStepperProps {
  /**
   * List of steps to display in the stepper.
   */
  steps: string[]

  /**
   * Index of the current step (starts at 0).
   */
  currentStep: number

  /**
   * Width of the stepper.
   * @default '100%'
   */
  width?: string
}

const { steps, currentStep, width = '100%' } = defineProps<AvStepperProps>()
</script>

<template>
  <div class="av-stepper av-col">
    <div class="main-container av-row av-align-center av-flex-fill">
      <div
        class="step step--active av-radius-full"
        :aria-current="currentStep === 0 ? 'step' : undefined"
      >
        <span class="b1-regular">1</span>
      </div>
      <div
        v-for="(_step, index) in steps.slice(1, steps.length)"
        :key="index"
        class="av-row av-align-center av-flex-fill"
      >
        <div
          class="separator av-row av-flex-fill"
          :class="{ 'separator--active': index + 1 <= currentStep }"
        />
        <div
          class="step av-col av-align-center av-justify-center av-radius-full"
          :class="{ 'step--active': index + 1 <= currentStep }"
          :aria-current="index + 1 === currentStep ? 'step' : undefined"
        >
          <span class="b1-regular">{{ index + 2 }}</span>
        </div>
      </div>
    </div>

    <div class="main-labels-container av-row av-align-start av-justify-between av-pt-xs">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="label-container av-col av-align-center av-justify-center"
      >
        <span
          class="label av-col av-align-center"
          :class="{ 'b1-bold av-text-text1': index <= currentStep,
                    'b1-light av-text-text1': index > currentStep,
          }"
        >
          {{ step }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.av-stepper {
  width: v-bind('width');
}

.main-container {
  padding: var(--spacing-none) var(--dimension-6xl);
}

.label-container {
  flex: 1 0 0;
  max-width: calc(2 * var(--dimension-6xl));
}

.step {
  width: var(--dimension-md);
  height: var(--dimension-md);
  min-width: var(--dimension-md);
  min-height: var(--dimension-md);
  text-align: center;
  background-color: var(--light-background-primary1);
  color: var(--light-foreground-primary1);
  z-index: 0;

  &--active {
    background-color: var(--dark-background-primary1);
    color: var(--dark-foreground);
    box-shadow: 0 0 0 var(--dimension-xxxs) var(--dark-foreground),
                0 0 0 calc(var(--dimension-xxxs) * 2) var(--dark-background-primary1);
  }
}

.separator {
  height: var(--dimension-xxxs);
  background-color: var(--light-background-primary1);

  &--active {
    background-color: var(--dark-background-primary1);
  }
}

.label {
  text-align: center;
}

.b1-regular {
  color: currentColor;
}
</style>

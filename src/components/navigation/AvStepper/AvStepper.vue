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
}

const { steps, currentStep } = defineProps<AvStepperProps>()
</script>

<template>
  <div class="block-container">
    <div class="main-container">
      <div
        class="step step--active"
        :aria-current="currentStep === 0 ? 'step' : undefined"
      >
        <span class="b1-regular">1</span>
      </div>
      <div
        v-for="(_step, index) in steps.slice(1, steps.length)"
        :key="index"
        class="steps-container"
      >
        <div
          class="separator"
          :class="{ 'separator--active': index + 1 <= currentStep }"
        />
        <div
          class="step"
          :class="{ 'step--active': index + 1 <= currentStep }"
          :aria-current="index + 1 === currentStep ? 'step' : undefined"
        >
          <span class="b1-regular">{{ index + 2 }}</span>
        </div>
      </div>
    </div>

    <div class="main-labels-container">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="label-container"
      >
        <span
          class="label"
          :class="{ 'b1-bold': index <= currentStep,
                    'b1-light': index > currentStep,
          }"
        >
          {{ step }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block-container {
  display: block;
  width: 100%;
}

.main-container, .steps-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
}

.main-labels-container {
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  padding-top: var(--spacing-xs);
}

.main-container {
  padding: var(--spacing-none) var(--dimension-6xl);
}

.label-container {
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: center;
  max-width: calc(2 * var(--dimension-6xl));
}

.step {
  display: flex;
  width: var(--dimension-md);
  height: var(--dimension-md);
  min-width: var(--dimension-md);
  min-height: var(--dimension-md);
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: var(--light-background-primary1);
  color: var(--light-foreground-primary1);
  border-radius: var(--radius-full);
  z-index: 0;

  &--active {
    background-color: var(--dark-background-primary1);
    color: var(--dark-foreground);
    box-shadow: 0 0 0 var(--dimension-xxxs) var(--dark-foreground),
                0 0 0 calc(var(--dimension-xxxs) * 2) var(--dark-background-primary1);
  }
}

.separator {
  display: flex;
  flex: 1;
  height: var(--dimension-xxxs);
  background-color: var(--light-background-primary1);

  &--active {
    background-color: var(--dark-background-primary1);
  }
}

.label {
  display: flex;
  align-items: center;
  text-align: center;
}

.b1-regular {
  color: currentColor;
}

.b1-bold, .b1-light {
  color: var(--text1);
}
</style>

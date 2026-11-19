<script setup lang="ts">
/**
 * AvNumberIndicator component props.
 */
export interface AvNumberIndicatorProps {
  /**
   * The numeric value to be displayed in the indicator.
   * This value is optional and will only be displayed if it is a non-negative integer.
   * @default undefined
   */
  value?: number
}

defineOptions({
  inheritAttrs: false
})

const { value } = defineProps<AvNumberIndicatorProps>()

const isValidValue = computed(() => value !== undefined && Number.isInteger(value) && value >= 0)
</script>

<template>
  <div
    class="av-row"
    data-testid="av-number-indicator-container"
  >
    <span
      v-if="isValidValue"
      v-bind="$attrs"
      class="av-number-indicator av-p-xxs av-border-width-md av-border-style-solid av-radius-full"
      data-testid="av-number-indicator"
    >
      {{ value }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.av-number-indicator {
  color: inherit;
  min-width: var(--dimension-md);
  text-align: center;
}
</style>

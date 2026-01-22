<script lang="ts" setup>
import toggleActiveSvg from '@/components/interaction/toggles/AvToggle/assets/toggle-active.svg?url'
import toggleInactiveSvg from '@/components/interaction/toggles/AvToggle/assets/toggle-inactive.svg?url'

/**
 * AvToggle component props.
 */
export interface AvToggleProps {
  /**
   * Boolean value linked to the input.
   */
  modelValue?: boolean

  /**
   * Indicates the purpose of the toggle.
   */
  description: string

  /**
   * Unique id for the toggle. Used for accessibility.
   * @default `toggle-${crypto.randomUUID()}`
   */
  id?: string

  /**
   * Indicates if the toggle disabled.
   */
  disabled?: boolean

  /**
   * Text to display next to the toggle (right) when it is active.
   * @default 'On'
   */
  activeText?: string

  /**
   * Text to display next to the toggle (right) when it is inactive.
   * @default 'Off'
   */
  inactiveText?: string

  /**
   * `name` attribute of the input
   * @default undefined
   */
  name?: string
}

const {
  id,
  activeText = 'On',
  inactiveText = 'Off',
  name
} = defineProps<AvToggleProps>()

/**
 * Events emitted by the component.
 */
defineEmits<{
  /**
   * Emitted when the toggle is clicked.
   * @param payload New state (`boolean`) of the toggle.
   */
  (e: 'update:modelValue', payload: boolean): void
}>()

const inputId = computed(() => id ?? `toggle-${crypto.randomUUID()}`)
const labelId = computed(() => {
  return `${inputId.value}-label`
})
</script>

<template>
  <label
    :id="labelId"
    :for="inputId"
    class="av-toggle av-row av-justify-center av-gap-xs av-align-start"
    :class="{
      'av-toggle--disabled': disabled,
    }"
  >
    <div
      class="toggle av-row av-justify-center av-align-center av-gap-xxs"
      :class="{
        'toggle--disabled': disabled,
      }"
    >
      <svg
        width="34"
        height="14"
      >
        <image
          :href="modelValue ? toggleActiveSvg : toggleInactiveSvg"
          width="34"
          height="14"
        />
      </svg>
      <span
        v-if="modelValue"
        class="caption-bold no-select"
      >
        {{ activeText }}
      </span>
      <span
        v-else
        class="caption-regular no-select"
      >
        {{ inactiveText }}
      </span>
    </div>
    <span class="caption-regular">{{ description }}</span>
  </label>
  <input
    :id="inputId"
    :style="{ display: 'none' }"
    :disabled="disabled"
    :aria-disabled="disabled"
    type="checkbox"
    :checked="modelValue"
    :data-testid="inputId"
    :aria-describedby="labelId"
    :name="name"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
  >
</template>

<style lang="scss" scoped>
.av-toggle, .toggle {
  cursor: pointer;
  width: fit-content;
}

.toggle {
  width: 3.625rem;
}

.av-toggle--disabled, .toggle--disabled {
  cursor: default;
}

.caption-bold {
  color: var(--dark-background-primary1);
}

.caption-regular {
  color: var(--text1);
}

.no-select {
  user-select: none;
}
</style>

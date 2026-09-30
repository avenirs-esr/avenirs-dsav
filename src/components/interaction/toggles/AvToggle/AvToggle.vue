<script lang="ts" setup>
import { type Slot, useAttrs } from 'vue'
import toggleActiveDisabledSvg from '@/components/interaction/toggles/AvToggle/assets/toggle-active-disabled.svg?url'
import toggleActiveSvg from '@/components/interaction/toggles/AvToggle/assets/toggle-active.svg?url'
import toggleInactiveDisabledSvg from '@/components/interaction/toggles/AvToggle/assets/toggle-inactive-disabled.svg?url'
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
   * Unique id for the toggle. Used for accessibility.
   * @default `toggle-${crypto.randomUUID()}`
   */
  id?: string

  /**
   * `name` attribute of the input
   * @default undefined
   */
  name?: string

  /**
   * Indicates the purpose of the toggle.
   * @default undefined
   */
  description?: string

  /**
   * Tooltip text to display.
   */
  tooltip?: string

  /**
   * Indicates if the toggle is disabled.
   */
  disabled?: boolean

  /**
   * Tooltip text to display when the toggle is disabled.
   * When set to `true`, the `tooltip` value will be used.
   */
  disabledTooltip?: string | true
}

defineOptions({
  inheritAttrs: false,
})

const {
  id,
  name,
  description,
  tooltip,
  disabled = false,
  disabledTooltip,
} = defineProps<AvToggleProps>()

defineSlots<{
  /**
   * Default slot for custom content.
   */
  default?: Slot<{ active: boolean }>
}>()

const modelValue = defineModel<boolean>({ default: false })

const attrs = useAttrs()

const tooltipContent = computed(() => (!disabled || disabledTooltip === true ? tooltip : disabledTooltip) || undefined)

const randomId = id ? undefined : crypto.randomUUID()
const inputId = computed(() => id ?? `toggle-${randomId}`)
const labelId = computed(() => `${inputId.value}-label`)

const dataTestId = computed(() => attrs['data-testid'] ?? id ?? `av-toggle-${randomId}`)
const inputDataTestId = computed(() => `${dataTestId.value}-input`)
const labelDataTestId = computed(() => `${dataTestId.value}-label`)

const imageHref = computed(() =>
  modelValue.value
    ? (disabled ? toggleActiveDisabledSvg : toggleActiveSvg)
    : (disabled ? toggleInactiveDisabledSvg : toggleInactiveSvg)
)

function updateModelValue (event: Event) {
  modelValue.value = (event.target as HTMLInputElement).checked
}
</script>

<template>
  <AvTooltip
    :content="tooltipContent ?? ''"
    :disabled="!tooltipContent"
    :force-focusable="disabled && !!tooltipContent"
  >
    <input
      :id="inputId"
      class="av-toggle-input"
      :disabled="disabled"
      :aria-disabled="disabled"
      type="checkbox"
      :checked="modelValue"
      :aria-describedby="labelId"
      :name="name"
      :data-testid="inputDataTestId"
      @input="updateModelValue"
    >
    <label
      :id="labelId"
      :for="inputId"
      class="av-toggle av-row av-gap-xs av-align-center"
      :class="{
        'av-toggle--disabled': disabled,
      }"
      :data-testid="labelDataTestId"
    >
      <div
        class="toggle av-row av-justify-start av-align-center av-gap-xxs"
        :class="{
          'toggle--disabled': disabled,
        }"
      >
        <div class="av-col">
          <svg
            width="34"
            height="14"
          >
            <image
              :href="imageHref"
              width="34"
              height="14"
            />
          </svg>
        </div>

        <div class="av-col">
          <slot :active="modelValue">
            <div class="toggle-text av-row">
              <span
                v-if="modelValue"
                class="caption-bold no-select"
              >
                On
              </span>
              <span
                v-else
                class="caption-regular no-select"
              >
                Off
              </span>
            </div>
          </slot>
        </div>
      </div>
      <span
        v-if="description"
        class="caption-regular"
      >{{ description }}</span>
    </label>
  </AvTooltip>
</template>

<style lang="scss" scoped>
.av-toggle-input {
  position: absolute;
  inline-size: 1px;
  block-size: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
}

.av-toggle-input:focus-visible + .av-toggle {
  outline: 2px solid #005fcc;
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

.av-toggle, .toggle {
  cursor: pointer;
  width: fit-content;
}

.toggle-text {
  .caption-bold,
  .caption-regular {
    white-space: normal;
    word-break: break-word;
    display: block;
  }
}

.av-toggle--disabled {
  cursor: not-allowed;

  .toggle {
    cursor: not-allowed;
  }

  .caption-bold,
  .caption-regular {
    color: var(--text2);
  }
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

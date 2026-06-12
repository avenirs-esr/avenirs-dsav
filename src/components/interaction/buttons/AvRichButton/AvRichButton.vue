<script setup lang="ts">
import type { Slot } from 'vue'
import AvIcon from '@/components/base/AvIcon/AvIcon.vue'
import AvTooltip from '@/components/overlay/tooltips/AvTooltip/AvTooltip.vue'

/**
 * AvRichButton component props.
 */
export interface AvRichButtonProps {
  /**
   * Button aria label and title for accessibility.
   */
  label: string

  /**
   * Icon displayed on the left of the button.
   * Must be an icon name.
   */
  iconLeft?: string

  /**
   * Icon displayed on the right of the button.
   * Must be an icon name.
   */
  iconRight?: string

  /**
   * Allows you to change the padding of the button.
   * @default '1rem'
   */
  customPadding?: string

  /**
   * Enables the tooltip on the button. The tooltip will display the content of the `label` prop.
   * @default false
   */
  enableTooltip?: boolean
}

defineOptions({
  inheritAttrs: false,
})

const {
  label,
  iconLeft = undefined,
  iconRight = undefined,
  customPadding = 'var(--spacing-sm)',
  enableTooltip = false,
} = defineProps<AvRichButtonProps>()

defineEmits<{
  /**
   * Emitted when the button is clicked.
   */
  (e: 'click', event: MouseEvent): void
}>()

/**
 * Slots available in the AvRichButton component.
 *
 * @slot default - Default slot for rich button content.
 */
defineSlots<{
  /**
   * Default slot for rich button content.
   */
  default: Slot
}>()
</script>

<template>
  <AvTooltip
    class="av-rich-button__tooltip"
    :content="label"
    trigger-class="av-w-full"
    :disabled="!enableTooltip"
  >
    <button
      v-bind="$attrs"
      :aria-label="label"
      class="av-rich-button av-row av-w-full av-align-center av-justify-between"
      @click="$emit('click', $event)"
    >
      <div class="av-rich-button__line av-row av-align-center av-w-full">
        <div class="av-rich-button__left av-row av-align-center av-w-full av-gap-sm av-pr-sm">
          <AvIcon
            v-if="iconLeft"
            :name="iconLeft"
            color="var(--dark-background-primary1)"
            :size="1.5"
          />
          <slot />
        </div>
        <AvIcon
          v-if="iconRight"
          :name="iconRight"
          color="var(--dark-background-primary1)"
          :size="1.5"
        />
      </div>
    </button>
  </AvTooltip>
</template>

<style lang="scss" scoped>
.av-rich-button {
  border-radius: var(--radius-lg);
  border: 1px solid var(--stroke);
  overflow: hidden;
  padding: v-bind('customPadding');
}

.av-rich-button:hover {
  border: 1px solid var(--dark-background-primary1);
  box-shadow: 0 0 0 2px var(--dark-background-primary1);
  background: transparent !important;
}

.av-rich-button__line {
  text-align: left;
}

.av-rich-button__left {
  overflow: hidden;
}
</style>

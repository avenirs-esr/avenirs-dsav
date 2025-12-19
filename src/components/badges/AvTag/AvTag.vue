<script setup lang="ts">
import AvIcon from '@/components/base/AvIcon/AvIcon.vue'
import { ICONS_DATA_URL } from '@/tokens/icons'

/**
 * AvTag component props.
 */
export type AvTagProps<T = string> = {
  /**
   * Displayed tag label.
   */
  label: string

  /**
   * Tag name used for the tag (should be 'p' ou 'button').
   * @default 'p'
   */
  tagName?: 'p' | 'button'

  /**
   * Icon to display in the tag. Can be a name or an icon configuration.
   */
  icon?: string

  /**
   * Disabled the tag if it is a button.
   */
  disabled?: boolean

  /**
   * Display the tag in a small version.
   */
  small?: boolean

  /**
   * Display the tag in icon only version.
   */
  iconOnly?: boolean
} & ({
  /**
   * Make the tag selectable.
   */
  selectable: true

  /**
   * Indicated if the tag is selected.
   * @available if selectable is true
   */
  selected?: boolean

  /**
   * Tag value (useful in a selectable tags list).
   * @available if selectable is true
   */
  value?: T
} | {
  /**
   * Indicated if the tag is selected.
   */
  selectable?: false
})

const {
  label,
  tagName = 'p',
  icon,
  disabled,
  small,
  iconOnly,
  ...rest
} = defineProps<AvTagProps>()

defineEmits<{
  select: [[unknown, boolean]]
}>()

const is = computed(() => {
  return ((disabled && tagName === 'p') || rest.selectable) ? 'button' : tagName
})

const styleVars = computed(() => ({
  '--icon-path': `url(${ICONS_DATA_URL.MDI_CHECK_CIRCLE_OUTLINE})`,
}))
</script>

<template>
  <component
    :is="is"
    class="av-tag av-row av-gap-xxs av-align-center"
    :disabled="disabled"
    :class="{
      'av-tag--sm av-py-xxxs av-px-xs': small,
      'av-py-xxs av-px-sm': !small,
    }"
    :aria-pressed="rest.selectable ? rest.selected : undefined"
    v-bind="{ ...$attrs }"
    :style="styleVars"
    @click="!disabled && rest.selectable && $emit('select', [rest.value, rest.selected ?? false])"
  >
    <AvIcon
      v-if="icon"
      :title="iconOnly ? label : undefined"
      :size="small ? 0.875 : 1"
      :name="icon"
    />
    <template v-if="!iconOnly">
      <span :class="small ? 'caption-regular' : 'b2-regular'">{{ label }}</span>
    </template>
  </component>
</template>

<style lang="scss" scoped>
.av-tag {
  color: var(--text1);
  background-color: var(--light-background-neutral);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xxs) var(--spacing-sm);
  width: -moz-fit-content;
  width: fit-content;

  &:after {
    display: block;
  }

  &--sm {
    border-radius: var(--radius-lg);
  }

  &[aria-pressed='true'] {
    color: var(--other-background-base);
    background-color: var(--dark-background-primary1);
    position: relative;

    &::after,
    &::before {
      content: "";
      display: inline-block;
      flex: 0 0 auto;
      height: var(--dimension-md);
      margin: -.5rem;
      -webkit-mask-size: 100% 100%;
      mask-size: 100% 100%;
      position: absolute;
      right: var(--spacing-none);
      top: var(--spacing-none);
      width: var(--dimension-md);
    }

    &::before {
      background-color: var(--other-background-base);
      border-radius: var(--radius-full);
    }

    &::after {
      background-color: inherit;
      -webkit-mask-image: var(--icon-path);
      mask-image: var(--icon-path);
    }
  }

  .caption-regular,
  .b2-regular {
    color: inherit;
  }
}

button.av-tag {
  background-color: var(--light-background-primary1);
  color: var(--light-foreground-primary1);

  &:hover {
    background-color: var(--dark-background-primary1);
    color: var(--other-background-base);
  }
}
</style>

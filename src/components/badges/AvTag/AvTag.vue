<script setup lang="ts">
import AvIcon from '@/components/base/AvIcon/AvIcon.vue'

/**
 * AvTag component props.
 */
export type AvTagProps<T = string> = {
  /**
   * Displayed tag label.
   */
  label: string

  /**
   * URL for external link. Also determines the tag type (`a` or `RouterLink`).
   */
  link?: string

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
  link,
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

const isExternalLink = computed(() => typeof link === 'string' && link.startsWith('http'))
const is = computed(() => {
  return link
    ? (isExternalLink.value ? 'a' : 'RouterLink')
    : (((disabled && tagName === 'p') || rest.selectable) ? 'button' : tagName)
})
const linkProps = computed(() => {
  return { [isExternalLink.value ? 'href' : 'to']: link }
})

const iconSize = computed(() => small ? 0.65 : 0.9)
</script>

<template>
  <component
    :is="is"
    class="av-tag fr-tag"
    :disabled="disabled"
    :class="{
      'fr-tag--sm': small,
    }"
    :aria-pressed="rest.selectable ? rest.selected : undefined"
    v-bind="{ ...linkProps, ...$attrs }"
    @click="!disabled && rest.selectable && $emit('select', [rest.value, rest.selected ?? false])"
  >
    <AvIcon
      v-if="icon"
      :label="iconOnly ? label : undefined"
      :size="iconSize"
      :name="icon"
    />
    <template v-if="!iconOnly">
      {{ label }}
    </template>
  </component>
</template>

<style lang="scss" scoped>
.av-tag {
  display: flex;
  flex-direction: row;
  gap: var(--spacing-xxs);
}

.ov-icon {
  margin-top: 0.1rem;
}

.fr-tag {
  align-items: center;
}

.success {
  color: var(--light-foreground-success);
  background-color: var(--light-background-success);
}

.error {
  color: var(--light-foreground-error);
  background-color: var(--light-background-error);
}

.warning {
  color: var(--light-foreground-warn);
  background-color: var(--light-background-warn);
}

.info {
  color: var(--light-foreground-info);
  background-color: var(--light-background-info);
}
</style>

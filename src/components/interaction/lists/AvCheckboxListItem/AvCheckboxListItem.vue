<script lang="ts" setup>
import AvCheckbox from '@/components/interaction/checkboxes/AvCheckbox/AvCheckbox.vue'

export interface AvCheckboxListItemProps {
  /**
   * Unique ID of the checkbox list item
   */
  id: string

  /**
   * Unique ID of the parent checkbox list, used for accessibility and focus management
   */
  listId: string

  /**
   * Label for the checkbox list item
   */
  label?: string

  /**
   * Icon to display alongside the checkbox list item
   */
  icon?: string

  /**
   * Whether the checkbox list item is disabled
   */
  disabled?: boolean

  /**
   * ARIA label for the list item when clickable.
   */
  ariaLabel?: string

  /**
   * ID of an element that describes the list item.
   */
  ariaDescribedby?: string
}

const { id, listId, ariaLabel, ariaDescribedby } = defineProps<AvCheckboxListItemProps>()

const model = defineModel<(string | number)[]>({ required: true })

function getAllCheckbox (): NodeListOf<HTMLElement> {
  return document.querySelectorAll(`[id^='${listId}-'][id$='-checkbox']`)
}

function handleFocusNextCheckbox (event: KeyboardEvent) {
  event.preventDefault()
  const checkboxes = getAllCheckbox()
  const activeElement = document.activeElement as HTMLElement
  const currentIndex = Array.from(checkboxes).indexOf(activeElement)

  if (currentIndex !== -1) {
    const nextIndex = (currentIndex + 1) % checkboxes.length
    checkboxes[nextIndex].focus()
  }
}

function handleFocusPreviousCheckbox (event: KeyboardEvent) {
  event.preventDefault()
  const checkboxes = getAllCheckbox()
  const activeElement = document.activeElement as HTMLElement
  const currentIndex = Array.from(checkboxes).indexOf(activeElement)

  if (currentIndex !== -1) {
    const previousIndex
      = (currentIndex - 1 + checkboxes.length) % checkboxes.length
    checkboxes[previousIndex].focus()
  }
}
</script>

<template>
  <AvListItem
    :aria-label="ariaLabel"
    :aria-describedby="ariaDescribedby"
    data-testid="av-checkbox-list-item"
  >
    <AvCheckbox
      :id="`${listId}-${id}-checkbox`"
      v-model="model"
      :value="id"
      :name="`${listId}-${id}-checkbox`"
      :label="label"
      :icon="icon"
      :disabled="disabled"
      @keydown.down="handleFocusNextCheckbox"
      @keydown.right="handleFocusNextCheckbox"
      @keydown.up="handleFocusPreviousCheckbox"
      @keydown.left="handleFocusPreviousCheckbox"
    >
      <template #label>
        <slot />
      </template>
    </AvCheckbox>
  </AvListItem>
</template>

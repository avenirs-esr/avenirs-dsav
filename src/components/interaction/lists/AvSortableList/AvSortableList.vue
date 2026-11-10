<script lang="ts" setup generic="T extends AvSortableListItem">
import type { VNode } from 'vue'
import type { AvInteractiveProps } from '@/types/interfaces.types'
import { nextTick } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
import AvIcon from '@/components/base/AvIcon/AvIcon.vue'
import AvCard from '@/components/cards/AvCard/AvCard.vue'
import AvButton from '@/components/interaction/buttons/AvButton/AvButton.vue'
import AvTooltip from '@/components/overlay/tooltips/AvTooltip/AvTooltip.vue'
import { ICONS_DATA_URL, MDI_ICONS } from '@/tokens'

/**
 * Represents an item in the AvSortableList component. Each item must have a unique `id` and a `label`.
 */
export interface AvSortableListItem {
  /**
   * The unique identifier for the item.
   */
  id: string

  /**
   * The label for the item.
   */
  label: string
}

/**
 * Props passed to the default slot of the AvSortableList component.
 */
export interface AvSortableListSlotProps<T extends AvSortableListItem> {
  /**
   * The item being rendered.
   */
  element: T

  /**
   * The zero-based index of the item.
   */
  index: number
}

/**
 * Props for the AvSortableList component.
 */
export interface AvSortableListProps<T extends AvSortableListItem> extends AvInteractiveProps {
  /**
   * Label for the drag handle.
   * @default "Déplacer"
   */
  dragLabel?: string

  /**
   * Label for the "move up" button.
   * @default "Monter"
   */
  moveUpLabel?: string

  /**
   * Tooltip for the "move up" button when disabled.
   * @default "Cet élément est déjà en première position"
   */
  moveUpDisabledTooltip?: string

  /**
   * Label for the "move down" button.
   * @default "Descendre"
   */
  moveDownLabel?: string

  /**
   * Tooltip for the "move down" button when disabled.
   * @default "Cet élément est déjà en dernière position"
   */
  moveDownDisabledTooltip?: string

  /**
   * Function to generate an announcement message when an item is moved.
   * @param element The item being moved.
   * @param index The current index of the item.
   * @param targetIndex The index to which the item is moved.
   * @returns The announcement message.
   * @default
   * `(element, index, targetIndex) =>`
   * `\`Élément ${element.label} déplacé de la position ${index + 1}`
   * `à la position ${targetIndex + 1}\``
   */
  announcementFormatter?: (element: T, index: number, targetIndex: number) => string
}

const {
  disabled = false,
  disabledTooltip,
  moveUpLabel = 'Monter',
  moveDownLabel = 'Descendre',
  dragLabel = 'Déplacer',
  moveUpDisabledTooltip = 'Cet élément est déjà en première position',
  moveDownDisabledTooltip = 'Cet élément est déjà en dernière position',
  announcementFormatter = (element, index, targetIndex) =>
    `Élément ${element.label} déplacé de la position ${index + 1} à la position ${targetIndex + 1}`
} = defineProps<AvSortableListProps<T>>()

defineSlots<{
  /**
   * Default slot for custom sortable item rendering.
   * Not restricted to AvListItem or any specific component.
   * You can use this slot to render any custom content for each sortable item.
   */
  default?: (props: AvSortableListSlotProps<T>) => VNode[]
}>()

const items = defineModel<T[]>({ default: () => [] })

const DRAG_ANIMATION_MS = 200

const announcement = ref('')
const isDragging = ref(false)
const listRef = ref<HTMLElement | null>(null)

function isIndexInvalid (index: number) {
  return index < 0 || index >= items.value.length
}

async function announceMove (element: T, index: number, targetIndex: number) {
  if (isIndexInvalid(targetIndex)) {
    return
  }

  // Clear the announcement before setting a new one to ensure screen readers detect the change
  announcement.value = ''
  await nextTick()

  announcement.value = announcementFormatter(element, index, targetIndex)
}

async function restoreMoveButtonFocus (itemId: string, direction: 'up' | 'down') {
  await nextTick()

  const allSortableItems = Array.from(
    listRef.value?.querySelectorAll<HTMLElement>('[data-sortable-item-id]') ?? []
  )
  const sortableItem = allSortableItems.find(item => item.dataset.sortableItemId === itemId)
  const moveButton = sortableItem?.querySelector<HTMLButtonElement>(`[data-move-direction="${direction}"]`)

  const target = moveButton?.disabled ? moveButton.closest<HTMLElement>('.av-tooltip-trigger') : moveButton

  target?.focus()
}

function moveItem (index: number, offset: number) {
  const targetIndex = index + offset

  if (disabled || isIndexInvalid(index) || isIndexInvalid(targetIndex)) {
    return
  }

  const reorderedItems = [...items.value]
  const [item] = reorderedItems.splice(index, 1)

  reorderedItems.splice(targetIndex, 0, item)
  items.value = reorderedItems

  announceMove(item, index, targetIndex)
  restoreMoveButtonFocus(item.id, offset < 0 ? 'up' : 'down')
}

function onDragStart () {
  isDragging.value = true
}

async function onDragEnd (event: { oldIndex?: number, newIndex?: number }) {
  if (event.oldIndex !== undefined && event.newIndex !== undefined && event.oldIndex !== event.newIndex) {
    const element = items.value[event.newIndex]

    if (element) {
      announceMove(element, event.oldIndex, event.newIndex)
    }
  }

  await nextTick()
  await new Promise(resolve => setTimeout(resolve, DRAG_ANIMATION_MS))
  isDragging.value = false
}
</script>

<template>
  <div ref="listRef">
    <VueDraggable
      v-model="items"
      tag="div"
      role="list"
      class="av-col av-gap-sm"
      :class="{ 'is-dragging': isDragging }"
      :disabled="disabled"
      handle=".drag-handle"
      ghost-class="ghost"
      :animation="DRAG_ANIMATION_MS"
      @start="onDragStart"
      @end="onDragEnd"
    >
      <AvCard
        v-for="(element, index) in items"
        :key="element.id"
        role="listitem"
        radius="var(--radius-lg)"
      >
        <div
          class="av-row av-gap-sm av-align-center av-justify-between"
          :data-sortable-item-id="element.id"
        >
          <div class="av-col av-gap-xs av-align-center">
            <AvTooltip
              :content="disabled && disabledTooltip ? disabledTooltip : `${dragLabel} ${element.label}`"
              :disabled="isDragging || (disabled && !disabledTooltip)"
            >
              <AvIcon
                class="drag-handle"
                :class="{ 'drag-handle--disabled': disabled }"
                :name="MDI_ICONS.DRAG"
                :size="1.5"
                color="var(--dark-background-primary1)"
                data-testid="drag-handle"
              />
            </AvTooltip>
          </div>

          <div class="av-flex-fill">
            <slot
              :element="element"
              :index="index"
            >
              <span class="b2-regular">{{ element.label }}</span>
            </slot>
          </div>

          <div class="av-col av-gap-xs av-align-center">
            <AvButton
              :label="`${moveUpLabel} ${element.label}`"
              :icon="ICONS_DATA_URL.MS_ARROW_DROP_UP_ROUNDED"
              :disabled="disabled || index === 0"
              :disabled-tooltip="disabled ? disabledTooltip : moveUpDisabledTooltip"
              icon-only
              data-testid="move-up-button"
              data-move-direction="up"
              @click="moveItem(index, -1)"
            />
            <AvButton
              :label="`${moveDownLabel} ${element.label}`"
              :icon="ICONS_DATA_URL.MS_ARROW_DROP_DOWN_ROUNDED"
              :disabled="disabled || index === items.length - 1"
              :disabled-tooltip="disabled ? disabledTooltip : moveDownDisabledTooltip"
              icon-only
              data-testid="move-down-button"
              data-move-direction="down"
              @click="moveItem(index, 1)"
            />
          </div>
        </div>
      </AvCard>
    </VueDraggable>
  </div>

  <div
    class="av-sr-only"
    aria-live="polite"
    aria-atomic="true"
  >
    {{ announcement }}
  </div>
</template>

<style lang="scss" scoped>
.av-card {
  padding: var(--spacing-xs) !important;
}

.is-dragging :deep(.av-button) {
  pointer-events: none;
}

.drag-handle {
  cursor: grab;

  &--disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}

.av-card.ghost {
  border-color: var(--dark-background-primary1) !important;
  border-width: 2px !important;
}
</style>

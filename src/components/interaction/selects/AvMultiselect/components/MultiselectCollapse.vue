<script lang="ts" setup>
import type AvButton from '@/components/interaction/buttons/AvButton/AvButton.vue'
import type {
  AvMultiselectItem,
  AvMultiselectOption,
  AvMultiselectOptionGroup,
} from '@/components/interaction/selects/AvMultiselect/AvMultiselect.types'
import { nextTick } from 'vue'
import { MDI_ICONS } from '@/tokens/icons'

export interface MultiselectCollapseProps {
  isVisible: boolean
  selected: AvMultiselectOption[]
  options: AvMultiselectItem[]
  hint?: string
  id: string
  selectAll?: boolean
  search?: boolean
  selectAllLabel?: [string, string]
  noResultLabel?: string
  maxHeight?: string
}

const {
  isVisible,
  hint = 'Utilisez la tabulation (ou les touches flèches) pour naviguer dans la liste des suggestions',
  selectAll = false,
  selectAllLabel = ['Tout sélectionner', 'Tout désélectionner'],
  search = false,
  id,
  options,
  selected,
  noResultLabel = 'Pas de résultat',
  maxHeight,
} = defineProps<MultiselectCollapseProps>()

/**
 * Events emitted by MultiselectCollapse.
 * @event close - Event triggered when the collapse closes.
 */
const emit = defineEmits<{
  /**
   * Event triggered when the collapse closes.
   */
  (e: 'close'): void
}>()

function generateId (option: AvMultiselectOption, id: string): string {
  return `${id}-${option.value}`
}

function isOptionGroup (option: AvMultiselectItem): option is AvMultiselectOptionGroup {
  return 'children' in option && Array.isArray(option.children)
}

const host = ref<InstanceType<typeof AvButton> | null>(null)
const collapse = ref<HTMLElement | null>(null)
let skipNextClickOutside = false
const model = defineModel<(string | number)[]>({ required: true })
const hostWidth = ref(0)

const searchInput = ref('')

function handleClickOutside (event: MouseEvent) {
  if (skipNextClickOutside) {
    skipNextClickOutside = false
    return
  }
  const element = event.target as HTMLElement
  const hostEl = host.value && (host.value as any).$el ? (host.value as any).$el : null
  const collapseEl = collapse.value
  if (hostEl && hostEl.contains(element)) {
    return
  }
  if (collapseEl && collapseEl.contains(element)) {
    return
  }
  emit('close')
}

function clean () {
  document.removeEventListener('click', handleClickOutside)
}

watch(() => isVisible, (visible) => {
  if (visible) {
    nextTick(() => {
      skipNextClickOutside = true
      document.addEventListener('click', handleClickOutside)
    })
  }
  else {
    clean()
  }
})

const filteredOptions = computed<AvMultiselectItem[]>(() => {
  const searchValue = searchInput.value.toLowerCase()
  const filtered: AvMultiselectItem[] = []

  const optionMatchSearchValue = (option: AvMultiselectOption) => {
    return option.label.toLowerCase().includes(searchValue)
  }
  for (const option of options) {
    if (isOptionGroup(option)) {
      const children = option.children.filter(optionMatchSearchValue)

      if (children.length > 0) {
        filtered.push({ ...option, children })
      }

      continue
    }

    if (optionMatchSearchValue(option)) {
      filtered.push(option)
    }
  }

  return filtered
})

const selectableOptions = computed(() => filteredOptions.value.flatMap(option =>
  isOptionGroup(option)
    ? option.children.filter(child => !child.disabled)
    : option.disabled ? [] : [option]
))

function isGroupSelected (group: AvMultiselectOptionGroup): boolean {
  const children = group.children.filter(child => !child.disabled)
  const selectedValues = new Set(selected.map(option => option.value))

  return children.length > 0 && children.every(child => selectedValues.has(child.value))
}

function isGroupPartiallySelected (group: AvMultiselectOptionGroup): boolean {
  const children = group.children.filter(child => !child.disabled)
  const selectedValues = new Set(selected.map(option => option.value))
  const selectedChildren = children.filter(child => selectedValues.has(child.value))

  return selectedChildren.length > 0 && selectedChildren.length < children.length
}

function isGroupDisabled (group: AvMultiselectOptionGroup): boolean {
  return group.children.every(child => child.disabled)
}

function handleGroupSelection (
  group: AvMultiselectOptionGroup,
  values: (string | number | boolean | undefined)[],
) {
  const modelSet = new Set<string | number>(model.value || [])
  const groupValues = group.children
    .filter(child => !child.disabled)
    .map(child => child.value)

  if (values.includes(true)) {
    groupValues.forEach(value => modelSet.add(value))
  }
  else {
    groupValues.forEach(value => modelSet.delete(value))
  }

  model.value = Array.from(modelSet)
}

const isAllSelected = computed(() => {
  const selectedValues = new Set(selected.map(option => option.value))

  if (selectedValues.size < selectableOptions.value.length) {
    return false
  }

  return selectableOptions.value.every(option => selectedValues.has(option.value))
})

function handleClickSelectAllClick () {
  const modelSet = new Set<string | number>(model.value || [])

  if (isAllSelected.value) {
    selectableOptions.value.forEach((option) => {
      modelSet.delete(option.value)
    })
  }
  else {
    selectableOptions.value.forEach((option) => {
      modelSet.add(option.value)
    })
  }

  model.value = Array.from(modelSet)
}

onUnmounted(() => {
  clean()
})
</script>

<template>
  <div
    v-if="isVisible"
    :id="`${id}-collapse`"
    ref="collapse"
    :style="{
      '--width-host': `${hostWidth}px`,
    }"
    class="av-multiselect__collapse"
    data-testid="av-multiselect__collapse"
  >
    <p
      :id="`${id}-text-hint`"
      class="av-sr-only"
    >
      {{ hint }}
    </p>
    <ul
      v-if="selectAll"
      class="av-btns-group"
    >
      <li>
        <AvButton
          name="select-all"
          :disabled="selectableOptions.length === 0"
          :label="selectAllLabel[isAllSelected ? 1 : 0]"
          :icon="isAllSelected ? MDI_ICONS.CLOSE_CIRCLE_OUTLINE : MDI_ICONS.CHECK_CIRCLE_OUTLINE"
          @click="handleClickSelectAllClick"
        />
      </li>
    </ul>
    <div v-if="search">
      <AvInput
        v-model="searchInput"
        :aria-describedby="`${id}-text-hint`"
        :aria-controls="`${id}-checkboxes`"
        :prefix-icon="MDI_ICONS.MAGNIFY"
        aria-live="polite"
        placeholder="Rechercher"
        type="search"
      />
    </div>
    <AvList
      background-color="var(--dialog)"
      bordered
      border-color="var(--stroke)"
      border-radius="var(--radius-lg)"
      size="xsmall"
      class="multiselect-collapse-options-list"
    >
      <template
        v-for="(option, index) in filteredOptions"
        :key="`${id}-option-${index}`"
      >
        <template v-if="isOptionGroup(option)">
          <div class="av-row av-justify-between av-align-center av-px-xs av-pt-xs av-pb-xxs">
            <span class="av-text-title b2-bold">
              {{ option.label }}
            </span>
            <AvCheckbox
              :id="`${id}-group-${index}`"
              :model-value="isGroupSelected(option) ? [true] : []"
              :name="`${id}-group-${index}`"
              :value="true"
              small
              :disabled="isGroupDisabled(option)"
              :aria-checked="isGroupPartiallySelected(option) ? 'mixed' : undefined"
              :aria-label="`Sélectionner tout le groupe ${option.label}`"
              @update:model-value="handleGroupSelection(option, $event)"
            />
          </div>
          <AvCheckboxListItem
            v-for="child in option.children"
            :id="child.value.toString()"
            :key="generateId(child, id)"
            v-model="model"
            list-id="multiselect-collapse-options-list"
            :aria-label="child.label"
            :label="child.label"
            :icon="child.icon"
            :disabled="child.disabled"
            :disabled-tooltip="child.disabledTooltip"
          />
        </template>
        <AvCheckboxListItem
          v-else
          :id="option.value.toString()"
          :key="generateId(option, id)"
          v-model="model"
          list-id="multiselect-collapse-options-list"
          :aria-label="option.label"
          :label="option.label"
          :icon="option.icon"
          :disabled="option.disabled"
          :disabled-tooltip="option.disabledTooltip"
        />
      </template>
    </AvList>
    <div v-if="filteredOptions.length === 0">
      {{ noResultLabel }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.av-multiselect__collapse {
  z-index: 1;
  position: absolute;
  transform-origin: left top;
  width: auto;
  border: 2px solid var(--stroke);
  border-top-width: 1px;

  &__fieldset {
    overflow: auto;
    max-height: v-bind('maxHeight');
  }
}

.multiselect-collapse-options-list {
  max-height: v-bind('maxHeight');
  overflow-y: auto;
  overflow-x: hidden;
  border: none;
}
</style>

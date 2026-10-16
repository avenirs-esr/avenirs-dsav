<script lang="ts" setup>
import type AvButton from '@/components/interaction/buttons/AvButton/AvButton.vue'
import type {
  AvSelectItem,
  AvSelectOption,
  AvSelectOptionGroup,
} from '@/components/interaction/selects/AvSelect/AvSelect.types'
import { nextTick } from 'vue'
import { MDI_ICONS } from '@/tokens/icons'

export interface SelectCollapseProps {
  isVisible: boolean
  selected: AvSelectOption[] | AvSelectOption | null
  options: AvSelectItem[]
  hint?: string
  id: string
  selectAll?: boolean
  search?: boolean
  selectAllLabel?: [string, string]
  noResultLabel?: string
  maxHeight?: string
  multiple?: boolean
}

const props = withDefaults(defineProps<SelectCollapseProps>(), {
  hint: 'Utilisez la tabulation (ou les touches flèches) pour naviguer dans la liste des suggestions',
  selectAll: false,
  search: false,
  selectAllLabel: () => ['Tout sélectionner', 'Tout désélectionner'],
  noResultLabel: 'Pas de résultat',
  multiple: false,
})

const emit = defineEmits<{
  (e: 'close'): void
}>()

function generateId (option: AvSelectOption, id: string): string {
  return `${id}-${option.value}`
}

function isOptionGroup (
  option: AvSelectItem,
): option is AvSelectOptionGroup {
  return 'children' in option && Array.isArray(option.children)
}

/**
 * Normalize the public selection to an array.
 */
const selectedOptions = computed<AvSelectOption[]>(() => {
  if (Array.isArray(props.selected)) {
    return props.selected
  }

  return props.selected ? [props.selected] : []
})

const host = ref<InstanceType<typeof AvButton> | null>(null)
const collapse = ref<HTMLElement | null>(null)

let skipNextClickOutside = false

/**
 * Internal model is always an array, including single-select mode.
 */
const model = defineModel<(string | number)[]>({ required: true })

const hostWidth = ref(0)
const searchInput = ref('')

function handleClickOutside (event: MouseEvent) {
  if (skipNextClickOutside) {
    skipNextClickOutside = false
    return
  }

  const element = event.target as HTMLElement
  const hostEl = host.value && (host.value as any).$el
    ? (host.value as any).$el
    : null

  if (hostEl?.contains(element)) {
    return
  }

  if (collapse.value?.contains(element)) {
    return
  }

  emit('close')
}

function clean () {
  document.removeEventListener('click', handleClickOutside)
}

watch(
  () => props.isVisible,
  (visible) => {
    if (visible) {
      nextTick(() => {
        skipNextClickOutside = true
        document.addEventListener('click', handleClickOutside)
      })
    }
    else {
      clean()
    }
  },
)

/**
 * Handle an individual option selection.
 *
 * In single-select mode, only the clicked option can remain selected.
 */
function handleOptionUpdate (
  values: (string | number)[],
  option: AvSelectOption,
) {
  if (option.disabled) {
    return
  }

  if (props.multiple) {
    model.value = values
    return
  }

  model.value = values.includes(option.value)
    ? [option.value]
    : []

  if (values.includes(option.value)) {
    emit('close')
  }
}

const filteredOptions = computed<AvSelectItem[]>(() => {
  const searchValue = searchInput.value.toLowerCase()
  const filtered: AvSelectItem[] = []

  const optionMatchSearchValue = (option: AvSelectOption) =>
    option.label.toLowerCase().includes(searchValue)

  for (const option of props.options) {
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

const selectableOptions = computed(() =>
  filteredOptions.value.flatMap(option =>
    isOptionGroup(option)
      ? option.children.filter(child => !child.disabled)
      : option.disabled ? [] : [option],
  ),
)

function isGroupSelected (group: AvSelectOptionGroup): boolean {
  const children = group.children.filter(child => !child.disabled)
  const selectedValues = new Set(selectedOptions.value.map(option => option.value))

  return children.length > 0
    && children.every(child => selectedValues.has(child.value))
}

function isGroupPartiallySelected (group: AvSelectOptionGroup): boolean {
  const children = group.children.filter(child => !child.disabled)
  const selectedValues = new Set(selectedOptions.value.map(option => option.value))
  const selectedChildren = children.filter(child => selectedValues.has(child.value))

  return selectedChildren.length > 0
    && selectedChildren.length < children.length
}

function isGroupDisabled (group: AvSelectOptionGroup): boolean {
  return group.children.every(child => child.disabled)
}

function handleGroupSelection (
  group: AvSelectOptionGroup,
  values: (string | number | boolean | undefined)[],
) {
  if (!props.multiple) {
    return
  }

  const modelSet = new Set<string | number>(model.value)
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
  const selectedValues = new Set(selectedOptions.value.map(option => option.value))

  return selectableOptions.value.length > 0
    && selectableOptions.value.every(option => selectedValues.has(option.value))
})

function handleClickSelectAllClick () {
  if (!props.multiple) {
    return
  }

  const modelSet = new Set<string | number>(model.value)

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

onUnmounted(clean)
</script>

<template>
  <div
    v-if="isVisible"
    :id="`${id}-collapse`"
    ref="collapse"
    :style="{ '--width-host': `${hostWidth}px` }"
    class="av-select__collapse"
    data-testid="av-select__collapse"
  >
    <p
      :id="`${id}-text-hint`"
      class="av-sr-only"
    >
      {{ hint }}
    </p>

    <ul
      v-if="multiple && selectAll"
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
      class="select-collapse-options-list"
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
              v-if="multiple"
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
            :model-value="model"
            list-id="select-collapse-options-list"
            :aria-label="child.label"
            :label="child.label"
            :icon="child.icon"
            :disabled="child.disabled"
            :disabled-tooltip="child.disabledTooltip"
            @update:model-value="handleOptionUpdate($event, child)"
          />
        </template>

        <AvCheckboxListItem
          v-else
          :id="option.value.toString()"
          :key="generateId(option, id)"
          :model-value="model"
          list-id="select-collapse-options-list"
          :aria-label="option.label"
          :label="option.label"
          :icon="option.icon"
          :disabled="option.disabled"
          :disabled-tooltip="option.disabledTooltip"
          @update:model-value="handleOptionUpdate($event, option)"
        />
      </template>
    </AvList>

    <div v-if="filteredOptions.length === 0">
      {{ noResultLabel }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.av-select__collapse {
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

.select-collapse-options-list {
  max-height: v-bind('maxHeight');
  overflow-y: auto;
  overflow-x: hidden;
  border: none;
}
</style>

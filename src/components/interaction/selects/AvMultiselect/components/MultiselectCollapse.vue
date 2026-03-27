<script lang="ts" setup>
import type AvButton from '@/components/interaction/buttons/AvButton/AvButton.vue'
import type { AvMultiselectOption } from '@/components/interaction/selects/AvMultiselect/AvMultiselect.types'
import { nextTick } from 'vue'
import { MDI_ICONS } from '@/tokens/icons'

export interface MultiselectCollapseProps {
  isVisible: boolean
  selected: AvMultiselectOption[]
  options: AvMultiselectOption[]
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

const filteringKey:(keyof AvMultiselectOption) = 'label'

function generateId (option: AvMultiselectOption, id: string): string {
  return `${id}-${option.value}`
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

const filteredOptions = computed(() =>
  options.filter((option) => {
    if (typeof option === 'object' && option !== null) {
      return `${option[filteringKey]}`
        .toLowerCase()
        .includes(searchInput.value.toLowerCase())
    }
    return `${option}`.toLowerCase().includes(searchInput.value.toLowerCase())
  }),
)

const isAllSelected = computed(() => {
  if (selected.length < filteredOptions.value.length) {
    return false
  }

  return filteredOptions.value.every((option) => {
    return selected.includes(option)
  })
})

function handleClickSelectAllClick () {
  const modelSet = new Set<string | number>(model.value || [])

  if (isAllSelected.value) {
    filteredOptions.value.forEach((option) => {
      modelSet.delete(option.value)
    })
  }
  else {
    filteredOptions.value.forEach((option) => {
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
          size="sm"
          :disabled="filteredOptions.length === 0"
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
      <AvCheckboxListItem
        v-for="option in filteredOptions"
        :id="option.value.toString()"
        :key="`${generateId(option, id)}-fieldset`"
        v-model="model"
        list-id="multiselect-collapse-options-list"
        :aria-label="option.label"
        :label="option.label"
        :icon="option.icon"
      />
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

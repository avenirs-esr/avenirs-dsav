<script lang="ts" setup>
import type { Slot } from 'vue'
import type AvButton from '@/components/interaction/buttons/AvButton/AvButton.vue'
import type { AvMultiselectOption } from '@/components/interaction/selects/AvMultiselect/AvMultiselect.types'
import type { UseCollapsableReturn } from '@/composables/use-collapsable/use-collapsable'
import AvFieldset from '@/components/base/AvFieldset/AvFieldset.vue'
import AvCheckbox from '@/components/interaction/checkboxes/AvCheckbox/AvCheckbox.vue'
import { MDI_ICONS } from '@/tokens/icons'

export interface MultiselectCollapseProps {
  isVisible: boolean
  selected: AvMultiselectOption[]
  options: AvMultiselectOption[]
  hint?: string
  legend?: string
  id: string
  selectAll?: boolean
  search?: boolean
  selectAllLabel?: [string, string]
  maxOverflowHeight?: CSSStyleDeclaration['maxHeight']
  useCollapsableReturn: Omit<UseCollapsableReturn, 'adjust'>
  noResultLabel?: string
}

const {
  isVisible,
  hint = 'Utilisez la tabulation (ou les touches flèches) pour naviguer dans la liste des suggestions',
  legend = '',
  selectAll = false,
  selectAllLabel = ['Tout sélectionner', 'Tout désélectionner'],
  search = false,
  maxOverflowHeight = '400px',
  id,
  options,
  selected,
  useCollapsableReturn,
  noResultLabel = 'Pas de résultat'
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

defineSlots<{
  'legend'?: Slot
  'no-results'?: Slot
}>()

const filteringKey:(keyof AvMultiselectOption) = 'label'

function generateId (option: AvMultiselectOption, id: string): string {
  return `${id}-${option.value}`
}

const host = ref<InstanceType<typeof AvButton> | null>(null)
const expanded = ref(false)
const model = defineModel<(string | number)[]>({ required: true })
const hostWidth = ref(0)

const observations: (() => void)[] = []

const {
  collapse,
  collapsing,
  cssExpanded,
  onTransitionEnd,
} = useCollapsableReturn

function getAllCheckbox (): NodeListOf<HTMLElement> {
  return document.querySelectorAll(`[id^="${id}-"][id$="-checkbox"]`)
}

const searchInput = ref('')

function handleKeyDownEscape (event: KeyboardEvent) {
  if (event.key === 'Escape') {
    emit('close')
  }
}

function handleClickOutside (event: MouseEvent) {
  const element = event.target as HTMLElement
  if (!host.value?.$el.contains(element) && !collapse.value?.contains(element)) {
    emit('close')
  }
}

function clean () {
  while (observations.length) {
    const observation = observations.pop()
    if (observation) {
      observation()
    }
  }
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeyDownEscape)
}

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

function handleFocusFirstCheckbox (event: KeyboardEvent) {
  const [firstCheckbox] = getAllCheckbox()
  if (firstCheckbox) {
    event.preventDefault()
    firstCheckbox.focus()
  }
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

function handleFocusNextElementUsingTab (event: KeyboardEvent) {
  const checkboxes = getAllCheckbox()
  const activeElement = document.activeElement as HTMLElement
  const currentIndex = Array.from(checkboxes).indexOf(activeElement)
  if (currentIndex + 1 === checkboxes.length && host.value && !event.shiftKey) {
    emit('close')
  }
}

function handleFocusPreviousElement (event: KeyboardEvent) {
  const currentElement = document.activeElement as HTMLElement
  if (event.shiftKey && currentElement === host.value?.$el) {
    emit('close')
  }
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
    class="fr-multiselect__collapse fr-collapse"
    :class="{ 'fr-collapse--expanded': cssExpanded, 'fr-collapsing': collapsing }"
    @transitionend="onTransitionEnd(expanded)"
  >
    <p
      :id="`${id}-text-hint`"
      class="fr-sr-only"
    >
      {{ hint }}
    </p>
    <ul
      v-if="selectAll"
      class="fr-btns-group"
    >
      <li>
        <AvButton
          name="select-all"
          size="sm"
          :disabled="filteredOptions.length === 0"
          :label="selectAllLabel[isAllSelected ? 1 : 0]"
          :icon="isAllSelected ? MDI_ICONS.CLOSE_CIRCLE_OUTLINE : MDI_ICONS.CHECK_CIRCLE_OUTLINE"
          @click="handleClickSelectAllClick"
          @keydown.shift.tab="handleFocusPreviousElement"
        />
      </li>
    </ul>
    <div
      v-if="search"
      class="fr-input-group"
    >
      <div class="fr-input-wrap fr-icon-search-line">
        <AvInput
          v-model="searchInput"
          :aria-describedby="`${id}-text-hint`"
          :aria-controls="`${id}-checkboxes`"
          aria-live="polite"
          placeholder="Rechercher"
          type="text"
          @keydown.down="handleFocusFirstCheckbox"
          @keydown.right="handleFocusFirstCheckbox"
          @keydown.tab="handleFocusPreviousElement"
        />
      </div>
      <div
        class="fr-messages-group"
        aria-live="assertive"
      />
    </div>
    <AvFieldset
      :id="`${id}-checkboxes`"
      class="fr-multiselect__collapse__fieldset"
      aria-live="polite"
      :style="{ '--maxOverflowHeight': `${maxOverflowHeight}` }"
      :legend="legend"
      :legend-id="`${id}-checkboxes-legend`"
    >
      <slot name="legend" />
      <div
        v-for="option in filteredOptions"
        :key="`${generateId(option, id)}-checkbox`"
        class="fr-fieldset__element"
      >
        <div class="fr-checkbox-group fr-checkbox-group--sm">
          <AvCheckbox
            :id="`${generateId(option, id)}-checkbox`"
            v-model="model"
            :value="option.value"
            :label="option.label"
            :icon="option.icon"
            :name="`${generateId(option, id)}-checkbox`"
            @keydown.down="handleFocusNextCheckbox"
            @keydown.right="handleFocusNextCheckbox"
            @keydown.up="handleFocusPreviousCheckbox"
            @keydown.left="handleFocusPreviousCheckbox"
            @keydown.tab="handleFocusNextElementUsingTab"
          />
        </div>
      </div>
    </AvFieldset>
    <div v-if="filteredOptions.length === 0">
      <slot name="no-results">
        {{ noResultLabel }}
      </slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/core/_typography.scss';

.fr-multiselect__search__icon {
  margin-right: 1rem;
}

.fr-multiselect__collapse {
  z-index: 1;
  position: absolute;
  transform-origin: left top;
  width: auto;
  padding: var(--spacing-xs);
  margin-left: var(--spacing-xxs);
  margin-top: var(--spacing-xxs);
  background-color: var(--background-overlap-grey);
  filter: drop-shadow(var(--overlap-shadow));
}

.fr-multiselect__collapse__fieldset {
  max-height: var(--maxOverflowHeight);
  overflow: auto;
}

.fr-multiselect__collapse__fieldset label {
  color: inherit;
}

:deep(.fr-label) {
  color: var(--text1);
  padding-bottom: var(--spacing-xxs);
}
</style>

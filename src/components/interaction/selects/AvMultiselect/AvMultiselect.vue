<script lang="ts" setup>
import type AvButton from '@/components/interaction/buttons/AvButton/AvButton.vue'
import type { AvMultiselectOption } from '@/components/interaction/selects/AvMultiselect/AvMultiselect.types'
import MultiselectCollapse from '@/components/interaction/selects/AvMultiselect/components/MultiselectCollapse.vue'
import { useCollapsable } from '@/composables/use-collapsable/use-collapsable'

export interface AvMultiselectProps {
  /**
   * Indicated if the select is disabled.
   */
  disabled?: boolean

  /**
   * Unique id for the select. Used for the accessibility.
   */
  id?: string

  /**
   * Hint for guidance.
   * @default ''
   */
  hint?: string

  /**
   * Screen reader only hint for collapse.
   * @default 'Utilisez la tabulation (ou les touches flèches) pour naviguer dans la liste des suggestions'
   */
  collapseHint?: string

  /**
   * Selected option(s) value(s).
   */
  modelValue: AvMultiselectOption[]

  /**
   * Select text label.
   */
  label: string

  /**
   * Whether the label is visible or not
   * @default true
   */
  labelVisible?: boolean

  /**
   * CSS class for the label
   * @default ''
   */
  labelClass?: string

  /**
   * Selectable options.
   * @default []
   */
  options?: AvMultiselectOption[]

  /**
   * If set, display a success message.
   * @default ''
   */
  successMessage?: string

  /**
   * If set, display an error message.
   * @default ''
   */
  errorMessage?: string

  /**
   * Placeholder text.
   */
  placeholder: string

  /**
   * dense mode
   */
  dense?: boolean

  /**
   * Displayed text when options are selected.
   */
  selectedText?: string

  /**
   * Displays the select all items button
   * @default false
   */
  selectAll?: boolean

  /**
   * Update the select all items button label
   * @default ["Tout sélectionner", "Tout désélectionner"]
   */
  selectAllLabel?: [string, string]

  /**
   * Displays the search bar
   */
  search?: boolean

  /**
   * Label (legend) for the multiselect, rendered visually as a title.
   * Helps screen readers understand the select context.
   * @default ''
   */
  legend?: string

  /**
   * Dropdown max height
   * @default var(--dimension-8xl)
   */
  maxOverflowHeight?: CSSStyleDeclaration['maxHeight']

  /**
   * Fixes the width of the multiselect
   */
  width?: string
}

const {
  disabled,
  id = `multiselect-${crypto.randomUUID()}`,
  hint = '',
  collapseHint = 'Utilisez la tabulation (ou les touches flèches) pour naviguer dans la liste des suggestions',
  modelValue,
  label,
  labelVisible = true,
  labelClass = '',
  options = [],
  successMessage = '',
  errorMessage = '',
  placeholder,
  dense,
  selectedText,
  selectAll = false,
  selectAllLabel = ['Tout sélectionner', 'Tout désélectionner'],
  search = false,
  legend = '',
  maxOverflowHeight = 'var(--dimension-8xl)',
  width
} = defineProps<AvMultiselectProps>()

/**
 * Events emitted by the component.
 */
const emit = defineEmits<{
  /**
   * Emitted when an option is selected or unselected.
   * @param value Values (`AvMultiselectOption[]`) of the current selected options.
   */
  (e: 'update:modelValue', value: AvMultiselectOption[]): void
}>()

const host = ref<InstanceType<typeof AvButton> | null>(null)
const expanded = ref(false)

const message = computed(() => {
  return errorMessage || successMessage
})
const messageType = computed(() => {
  return errorMessage ? 'error' : 'valid'
})

const {
  collapse,
  collapsing,
  cssExpanded,
  doExpand,
  onTransitionEnd,
} = useCollapsable()

const useCollapsableReturn = {
  collapse,
  collapsing,
  cssExpanded,
  doExpand,
  onTransitionEnd,
}

const computedModelValue = computed(() => modelValue.map(selected => selected.value))

const title = computed(() => {
  if (!modelValue || modelValue.length === 0) {
    return placeholder
  }

  if (selectedText) {
    return selectedText
  }

  const pluralChoice = modelValue.length > 1 ? 's' : ''
  return `${modelValue.length} option${pluralChoice} sélectionnée${pluralChoice}`
})

const isVisible = ref(false)

function handleKeyDownEscape (event: KeyboardEvent) {
  if (event.key === 'Escape') {
    close()
  }
}

function handleClickOutside (event: MouseEvent) {
  const element = event.target as HTMLElement
  if (!host.value?.$el.contains(element) && !collapse.value?.contains(element)) {
    close()
  }
}

function open () {
  expanded.value = true
  isVisible.value = true
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleKeyDownEscape)
  setTimeout(() => {
    doExpand(true)
  }, 100)
}

function close () {
  expanded.value = false
  doExpand(false)
  setTimeout(() => {
    isVisible.value = false
  }, 300)
  clean()
}

async function handleClick () {
  if (isVisible.value) {
    close()
  }
  else {
    open()
  }
}

function clean () {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeyDownEscape)
}

function handleFocusPreviousElement (event: KeyboardEvent) {
  const currentElement = document.activeElement as HTMLElement
  if (event.shiftKey && currentElement === host.value?.$el) {
    close()
  }
}

function onUpdateModelValue (values: (string | number)[]) {
  const selectedOptions = options?.filter(option =>
    values.includes(option.value)
  ) ?? []

  emit('update:modelValue', selectedOptions)
}

onUnmounted(() => {
  clean()
})

const finalLabelClass = computed(() => [
  'fr-label',
  { invisible: !labelVisible },
  labelClass,
])
</script>

<template>
  <div
    :class="{
      'fr-multiselect--dense': dense,
      'fr-multiselect--unselected': modelValue.length === 0,
      'fr-multiselect--selected': modelValue.length > 0,
    }"
  >
    <div
      class="fr-select-group"
      :class="{ [`fr-select-group--${messageType}`]: message }"
      :title="title"
    >
      <label
        :class="finalLabelClass"
        :for="id"
      >
        <span class="b2-light">{{ label }}</span>
        <span
          v-if="'required' in $attrs && $attrs.required !== false"
          class="required"
        />

        <span
          v-if="hint"
          class="fr-hint-text"
        >
          {{ hint }}
        </span>
      </label>

      <AvButton
        :id="id"
        ref="host"
        type="button"
        variant="OUTLINED"
        v-bind="$attrs"
        :label="title"
        class="fr-select fr-multiselect"
        :disabled="disabled"
        :aria-expanded="expanded"
        :aria-controls="`${id}-collapse`"
        :class="{
          'fr-multiselect--is-open': expanded,
          [`fr-select--${messageType}`]: message,
        }"
        :size="dense ? 'sm' : 'md'"
        @click="handleClick"
        @keydown.shift.tab="handleFocusPreviousElement"
      />
      <MultiselectCollapse
        :id="id"
        :legend="legend"
        :hint="collapseHint"
        :model-value="computedModelValue"
        :is-visible="isVisible"
        :select-all="selectAll"
        :select-all-label="selectAllLabel"
        :search="search"
        :options="options"
        :selected="modelValue"
        :use-collapsable-return="useCollapsableReturn"
        :max-overflow-height="maxOverflowHeight"
        @close="close"
        @update:model-value="onUpdateModelValue"
      />
    </div>
    <p
      v-if="message"
      :id="`select-${messageType}-desc-${messageType}`"
      :class="`fr-${messageType}-text`"
    >
      {{ message }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/typography.scss" as typography;

.fr-multiselect {
  text-align: left;
  background-image: none;
  display: inline-flex;
  flex-direction: row;
  padding: 0.75rem 1rem;
}

.fr-multiselect::after {
  --icon-size: 1rem;
  background-color: currentColor;
  content: "";
  display: inline-block;
  flex: 0 0 auto;
  height: 1rem;
  height: var(--icon-size);
  margin-left: auto;
  margin-right: 0;
  -webkit-mask-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0ibTEyIDEzLjE3MiA0Ljk1LTQuOTUgMS40MTQgMS40MTRMMTIgMTYgNS42MzYgOS42MzYgNy4wNSA4LjIyMmw0Ljk1IDQuOTVaIi8+PC9zdmc+);
  mask-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0ibTEyIDEzLjE3MiA0Ljk1LTQuOTUgMS40MTQgMS40MTRMMTIgMTYgNS42MzYgOS42MzYgNy4wNSA4LjIyMmw0Ljk1IDQuOTVaIi8+PC9zdmc+);
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  transition: transform 0.3s;
  vertical-align: calc(0.375em - 0.5rem);
  vertical-align: calc((0.75em - var(--icon-size)) * 0.5);
  width: 1rem;
  width: var(--icon-size);
  margin-top: auto;
  margin-bottom: auto;
}

.fr-multiselect--is-open::after {
  transform: rotate(-180deg);
}

.fr-select {
  background-color: var(--other-background-base);
  border: 1px solid var(--stroke);
  color: var(--text1);
  box-shadow: none;
  border-radius: var(--radius-md);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: var(--spacing-none);
  width: v-bind('width');
}

.fr-multiselect--dense .fr-select {
  padding-top: .1rem !important;
  padding-bottom: .1rem !important;
}

.fr-select:not([aria-disabled=true]):hover {
  background-color: var(--dark-background-primary1);
  color: var(--other-background-base);
}

.fr-select:hover option {
  color: var(--text1);
  background-color: var(--other-background-base);
}

.fr-multiselect--unselected button {
  @extend .caption-regular;
  font-style: italic;
}

:deep(.av-button span) {
  color: var(--text2) !important;
}

:deep(.av-button):hover {
  span {
    color: unset !important;
  }
}

.b2-bold {
  color: var(--dark-background-primary1);
}
</style>

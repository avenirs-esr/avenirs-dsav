<script lang="ts" setup>
import type AvButton from '@/components/interaction/buttons/AvButton/AvButton.vue'
import type { AvSelectItem, AvSelectOption, AvSelectSelectedOption } from '@/components/interaction/selects/AvSelect/AvSelect.types'
import type { AvInteractiveProps } from '@/types/interfaces.types'
import { buildSelectedOptionByValue, findOptionByValue, findParentId, isOptionGroup } from '@/components/interaction/selects/AvSelect/AvSelect.utils'
import SelectCollapse from '@/components/interaction/selects/AvSelect/components/SelectCollapse.vue'
import { ICONS_DATA_URL } from '@/tokens'

export interface AvSelectProps extends AvInteractiveProps {
  /**
   * Unique id for the select. Used for accessibility.
   * @default select-${crypto.randomUUID()}
   */
  id?: string

  /**
   * Hint for guidance.
   * @default ''
   */
  hint?: string

  /**
   * Screen reader only hint for collapse.
   */
  collapseHint?: string

  /**
   * Select text label.
   */
  label: string

  /**
   * Whether the label is visible or not.
   * @default true
   */
  labelVisible?: boolean

  /**
   * CSS class for the label.
   * @default ''
   */
  labelClass?: string

  /**
   * Selectable options.
   * @default []
   */
  options?: AvSelectItem[]

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
   * Dense mode.
   */
  dense?: boolean

  /**
   * Displayed text when options are selected in multiple mode.
   * @default 'fichier(s) sélectionné(s)'
   */
  selectedText?: string

  /**
   * Displays the select all items button.
   * @default false
   */
  selectAll?: boolean

  /**
   * Labels for the select all items button.
   */
  selectAllLabel?: [string, string]

  /**
   * Displays the search bar.
   */
  search?: boolean

  /**
   * Fixes the width of the multiselect.
   */
  width?: string

  /**
   * Fixes the height of the multiselect.
   */
  height?: string

  /**
   * Max height of the collapse list of options.
   */
  collapseMaxHeight?: string

  /**
   * Whether multiple options can be selected.
   * @default false
   */
  multiple?: boolean

  /**
   * Whether the select is required.
   * @default false
   */
  required?: boolean
}

const {
  disabled,
  disabledTooltip,
  id,
  hint = '',
  collapseHint = 'Utilisez la tabulation (ou les touches flèches) pour naviguer dans la liste des suggestions',
  label,
  labelVisible = true,
  labelClass = '',
  options = [],
  successMessage = '',
  errorMessage = '',
  placeholder,
  dense,
  selectedText = 'fichier(s) sélectionné(s)',
  selectAll = false,
  selectAllLabel = ['Tout sélectionner', 'Tout désélectionner'],
  search = false,
  width,
  height,
  collapseMaxHeight,
  multiple = false,
  required = false,
} = defineProps<AvSelectProps>()

const modelValue = defineModel<
  AvSelectSelectedOption[] | AvSelectSelectedOption | null
>({ default: null })

const realId = computed(() => id ?? `select-${crypto.randomUUID()}`)

const host = ref<InstanceType<typeof AvButton> | null>(null)

const message = computed(() => errorMessage || successMessage)
const messageType = computed(() => errorMessage ? 'error' : 'success')

/**
 * Normalize the public model to an array for internal use.
 */
const selectedOptions = computed<AvSelectSelectedOption[]>(() => {
  const values = Array.isArray(modelValue.value)
    ? modelValue.value
    : modelValue.value
      ? [modelValue.value]
      : []

  return values.map(option => ({
    ...option,
    ...findParentId(options, option.value),
  }))
})

const selectedOptionsForCollapse = computed<AvSelectOption[]>(() => {
  return selectedOptions.value.flatMap(({ value }) => {
    const option = findOptionByValue(options, value)

    return option ? [{ ...option, ...findParentId(options, option.value) }] : []
  })
})

/**
 * SelectCollapse always works with an array of option values.
 */
const computedModelValue = computed({
  get: () => selectedOptions.value.map(option => option.value),

  set: (values: (string | number)[]) => {
    const selected = values.flatMap((value) => {
      const option = buildSelectedOptionByValue(options, value)

      return option ? [option] : []
    })

    if (multiple) {
      modelValue.value = selected
      return
    }

    modelValue.value = selected[0] ?? null
    close()
  },
})

const title = computed(() => {
  if (selectedOptions.value.length === 0) {
    return placeholder
  }

  if (multiple) {
    return selectedText
  }

  const selected = selectedOptions.value[0]
  const availableOptions = options.flatMap(option =>
    isOptionGroup(option) ? option.children : [option],
  )

  return availableOptions.find(option => String(option.value) === String(selected.value))?.label
    ?? placeholder
})

const isSelected = computed(() => selectedOptions.value.length > 0)

const isVisible = ref(false)

function handleKeyDownEscape (event: KeyboardEvent) {
  if (event.key === 'Escape') {
    close()
  }
}

function open () {
  if (disabled) {
    return
  }

  isVisible.value = true
  document.addEventListener('keydown', handleKeyDownEscape)
}

function close () {
  isVisible.value = false
  clean()
}

function handleClick () {
  if (isVisible.value) {
    close()
  }
  else {
    open()
  }
}

function clean () {
  document.removeEventListener('keydown', handleKeyDownEscape)
}

onUnmounted(clean)

const finalLabelClass = computed(() => [
  'av-label',
  { invisible: !labelVisible },
  labelClass,
])

const styleVars = computed(() => ({
  '--icon-path': `url(${ICONS_DATA_URL.MDI_KEYBOARD_ARROW_DOWN})`,
}))
</script>

<template>
  <div
    class="av-select-group"
    :class="{ [`av-select-group--${messageType}`]: message }"
  >
    <label
      :class="finalLabelClass"
      :for="realId"
    >
      <span class="b2-light">{{ label }}</span>

      <span
        v-if="required"
        class="required"
      />

      <span
        v-if="hint"
        class="av-hint-text"
      >
        {{ hint }}
      </span>
    </label>

    <AvButton
      :id="realId"
      ref="host"
      type="button"
      variant="OUTLINED"
      v-bind="$attrs"
      :label="title"
      class="av-select av-justify-between"
      :disabled="disabled"
      :disabled-tooltip="disabledTooltip"
      :aria-expanded="isVisible"
      :aria-controls="`${realId}-collapse`"
      :class="{
        'av-select--is-open': isVisible,
        'av-select--dense': dense,
        'av-select--unselected': !isSelected,
        'av-select--selected': isSelected,
      }"
      :size="dense ? 'MD' : 'LG'"
      :style="styleVars"
      @click="handleClick"
    />

    <SelectCollapse
      :id="realId"
      v-model="computedModelValue"
      :hint="collapseHint"
      :is-visible="isVisible"
      :select-all="multiple && selectAll"
      :select-all-label="selectAllLabel"
      :search="search"
      :options="options"
      :selected="selectedOptionsForCollapse"
      :max-height="collapseMaxHeight"
      :multiple="multiple"
      :required="required"
      @close="close"
    />
  </div>

  <AvMessage
    :message-id="`select-${messageType}-desc-${messageType}`"
    :type="messageType"
    :message="message"
  />
</template>

<style lang="scss" scoped>
@use '@/styles/utilities/_text.scss';

.av-select-group {
  width: v-bind('width');
}

:deep() {
  .av-select {
    text-align: left;
    background-image: none;
    width: v-bind('width');
    height: v-bind('height');

    &::after {
      background-color: currentColor;
      content: "";
      display: inline-block;
      flex: 0 0 auto;
      height: var(--dimension-sm);
      -webkit-mask-image: var(--icon-path);
      mask-image: var(--icon-path);
      -webkit-mask-size: 100% 100%;
      mask-size: 100% 100%;
      transition: transform 0.3s;
      vertical-align: calc((0.75em - var(--dimension-sm)) * 0.5);
      width: var(--dimension-sm);
      margin-top: auto;
      margin-bottom: auto;
    }

    &--is-open::after {
      transform: rotate(-180deg);
    }

    &--dense {
      padding-top: .1rem !important;
      padding-bottom: .1rem !important;
    }

    &:not([aria-disabled=true]):hover {
      background-color: var(--dark-background-primary1);
      color: var(--other-background-base);
    }

    &--unselected {
      font-style: italic;
    }
  }
}

:deep(.av-button span) {
  @extend .av-ellipsis;

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

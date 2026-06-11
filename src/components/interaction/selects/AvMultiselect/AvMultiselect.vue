<script lang="ts" setup>
import type AvButton from '@/components/interaction/buttons/AvButton/AvButton.vue'
import type { AvMultiselectOption } from '@/components/interaction/selects/AvMultiselect/AvMultiselect.types'
import MultiselectCollapse from '@/components/interaction/selects/AvMultiselect/components/MultiselectCollapse.vue'
import { ICONS_DATA_URL } from '@/tokens'

export interface AvMultiselectProps {
  /**
   * Indicated if the select is disabled.
   */
  disabled?: boolean

  /**
   * Unique id for the select. Used for the accessibility.
   * @default `multi-select-${crypto.randomUUID()}`
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
  selectedText: string

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
   * Fixes the width of the multiselect
   */
  width?: string

  /**
   * Fixes the height of the multiselect
   */
  height?: string

  /**
   * Max height of the collapse list of options.
   */
  collapseMaxHeight?: string
}

const {
  disabled,
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
  selectedText,
  selectAll = false,
  selectAllLabel = ['Tout sélectionner', 'Tout désélectionner'],
  search = false,
  width,
  height,
  collapseMaxHeight,
} = defineProps<AvMultiselectProps>()

const modelValue = defineModel<AvMultiselectOption[]>({ default: [] })

const realId = computed(() => id ?? `multi-select-${crypto.randomUUID()}`)

const host = ref<InstanceType<typeof AvButton> | null>(null)

const message = computed(() => {
  return errorMessage || successMessage
})
const messageType = computed(() => {
  return errorMessage ? 'error' : 'success'
})

const computedModelValue = computed(() => modelValue.value.map(selected => selected.value))

const title = computed(() => {
  if (modelValue.value.length === 0) {
    return placeholder
  }

  return selectedText
})

const isVisible = ref(false)

function handleKeyDownEscape (event: KeyboardEvent) {
  if (event.key === 'Escape') {
    close()
  }
}

function open () {
  isVisible.value = true
  document.addEventListener('keydown', handleKeyDownEscape)
}

function close () {
  isVisible.value = false
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
  document.removeEventListener('keydown', handleKeyDownEscape)
}

function onUpdateModelValue (values: (string | number)[]) {
  const selectedOptions = options?.filter(option =>
    values.includes(option.value)
  ) ?? []

  modelValue.value = selectedOptions
}

onUnmounted(() => {
  clean()
})

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
        v-if="'required' in $attrs && $attrs.required !== false"
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
      class="av-multiselect"
      :disabled="disabled"
      :aria-expanded="isVisible"
      :aria-controls="`${realId}-collapse`"
      :class="{
        'av-multiselect--is-open': isVisible,
        'av-multiselect--dense': dense,
        'av-multiselect--unselected': modelValue.length === 0,
        'av-multiselect--selected': modelValue.length > 0,
      }"
      :small="dense"
      :style="styleVars"
      @click="handleClick"
    />
    <MultiselectCollapse
      :id="realId"
      v-model="computedModelValue"
      :hint="collapseHint"
      :is-visible="isVisible"
      :select-all="selectAll"
      :select-all-label="selectAllLabel"
      :search="search"
      :options="options"
      :selected="modelValue"
      :max-height="collapseMaxHeight"
      @close="close"
      @update:model-value="onUpdateModelValue"
    />
  </div>
  <AvMessage
    :message-id="`multiselect-${messageType}-desc-${messageType}`"
    :type="messageType"
    :message="message"
  />
</template>

<style lang="scss" scoped>
@use '@/styles/utilities/_text.scss';

:deep() {
  .av-multiselect {
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
      height: var(--dimension-sm);
      -webkit-mask-image: var(--icon-path);
      mask-image: var(--icon-path);
      -webkit-mask-size: 100% 100%;
      mask-size: 100% 100%;
      transition: transform 0.3s;
      vertical-align: calc(0.375em - 0.5rem);
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

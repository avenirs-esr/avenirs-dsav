<script lang="ts" setup>
import type { AvInteractiveProps } from '@/types/interfaces.types'
import AvIcon from '@/components/base/AvIcon/AvIcon.vue'
import AvTooltip from '@/components/overlay/tooltips/AvTooltip/AvTooltip.vue'
import { getAvTooltipContent, isAvTooltipEnabled } from '@/components/overlay/tooltips/AvTooltip/utils'
import { ICONS_DATA_URL } from '@/tokens'

export interface AvSelectOptionBase {
  id: string
  label: string
  // Native select does not allow AvTooltip integration so we do not use AvInteractiveProps
  disabled?: boolean
}

export interface AvSelectSelectedOption {
  itemId: string
  parentId?: string
}

export interface AvSelectOption extends AvSelectOptionBase { children?: AvSelectOption[] }

/**
 * AvSelect component props.
 */
export interface AvSelectProps extends AvInteractiveProps {
  /**
   * Indicates if the select is required.
   * @default false
   */
  required?: boolean

  /**
   * Unique id for the select. Used for the accessibility.
   * @default `select-${crypto.randomUUID()}`
   */
  id?: string

  /**
   * Field name.
   * @default ''
   */
  name?: string

  /**
   * Hint for guidance.
   * @default ''
   */
  hint?: string

  /**
   * Select text label.
   * @default ''
   */
  label?: string

  /**
   * Selectable options.
   * @default []
   */
  options?: AvSelectOption[]

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
   * @default false
   */
  dense?: boolean

  /**
   * Prefix icon name (optional)
   */
  prefixIcon?: string

  /**
   * Whether the label is visible
   * @default true
   */
  labelVisible?: boolean
}

defineOptions({
  inheritAttrs: false
})

const {
  required = false,
  disabled = false,
  id,
  name = '',
  hint = '',
  label = '',
  options = [],
  successMessage = '',
  errorMessage = '',
  placeholder,
  dense = false,
  prefixIcon,
  labelVisible = true
} = defineProps<AvSelectProps>()

const selectedItem = defineModel<AvSelectSelectedOption>('selectedItem', {
  default: () => ({ itemId: '' })
})

const selectedId = computed(() => {
  return String(selectedItem.value.itemId ?? '')
})

const realId = id ?? `select-${crypto.randomUUID()}`

const title = computed(() => {
  if (!selectedId.value) {
    return placeholder
  }
  const selected = findSelectedOptionById(selectedId.value)
  return selected ? selected.label : placeholder
})

const styleVars = computed(() => ({
  '--icon-path': `url(${ICONS_DATA_URL.MDI_KEYBOARD_ARROW_DOWN})`,
}))

const message = computed(() => {
  return errorMessage || successMessage
})
const messageType = computed(() => {
  return errorMessage ? 'error' : 'success'
})
const finalLabelClass = computed(() => [
  'av-label b2-regular',
  { 'av-sr-only': !labelVisible },
])
const iconsTopPosition = computed(() => labelVisible && label ? '69%' : '50%')

function isOptionGroup (option: AvSelectOption): option is AvSelectOption {
  return Array.isArray(option.children)
}

function findSelectedOptionById (id: string) {
  for (const option of options) {
    if (isOptionGroup(option) && option.children) {
      const selectedChild = option.children.find(child => String(child.id) === id)
      if (selectedChild) {
        return selectedChild
      }
    }

    if (String(option.id) === id) {
      return option
    }
  }

  return undefined
}

function buildSelectedOptionById (id: string): AvSelectSelectedOption {
  for (const option of options) {
    if (isOptionGroup(option) && option.children) {
      const selectedChild = option.children.find(child => String(child.id) === id)
      if (selectedChild) {
        return { itemId: selectedChild.id, parentId: option.id }
      }
    }

    if (String(option.id) === id) {
      return { itemId: option.id }
    }
  }

  return { itemId: id }
}

function handleSelectChange (event: Event) {
  const id = (event.target as HTMLSelectElement).value
  selectedItem.value = buildSelectedOptionById(id)
}
</script>

<template>
  <div :class="{ 'av-select--dense': dense }">
    <div
      class="av-select-group"
      :class="{ [`av-select-group--${messageType}`]: message }"
    >
      <div
        class="av-select-control"
        :class="{ 'av-select-control--disabled': disabled }"
        :style="styleVars"
      >
        <div
          v-if="prefixIcon"
          class="av-select-prefix av-align-center av-col av-text-text2"
        >
          <AvIcon
            :name="prefixIcon"
            :size="1.2"
          />
        </div>

        <label
          :class="finalLabelClass"
          :for="realId"
        >
          <span>{{ label }}</span>
          <span
            v-if="required"
            class="required"
          >&nbsp;*</span>

          <span
            v-if="hint"
            class="av-hint-text"
          >
            {{ hint }}
          </span>
        </label>

        <AvTooltip
          :content="getAvTooltipContent({ content: title, disabled, disabledTooltip })"
          :disabled="!isAvTooltipEnabled({ disabled, disabledTooltip })"
          :force-focusable="isAvTooltipEnabled({ disabled, disabledTooltip })"
        >
          <select
            :id="realId"
            :value="selectedId"
            :class="{ [`av-select--${messageType}`]: message,
                      'av-select--with-prefix av-pl-xl': prefixIcon,
                      'av-py-xxs': dense,
                      'av-py-xs': !dense,
            }"
            class="av-select b2-light av-w-full av-pr-xl av-pl-sm av-text-text2 av-radius-lg"
            :name="name || realId"
            :disabled="disabled"
            :aria-disabled="disabled"
            :required="required"
            :aria-required="required"
            :aria-describedby="message ? `${realId}-${messageType}` : undefined"
            v-bind="$attrs"
            @change="handleSelectChange"
          >
            <option
              disabled
              value=""
              hidden=""
            >
              {{ placeholder }}
            </option>

            <template
              v-for="(option, index) in options"
              :key="index"
            >
              <template v-if="isOptionGroup(option) && option.children">
                <optgroup
                  v-if="option.children.length > 0"
                  :label="option.label"
                  :data-testid="`select-optgroup-${option.id}`"
                >
                  <option
                    v-for="(childOption, childIndex) in option.children"
                    :key="`${index}-${childIndex}`"
                    :value="childOption.id"
                    :disabled="childOption.disabled"
                    :aria-disabled="childOption.disabled"
                  >
                    {{ childOption.label }}
                  </option>
                </optgroup>
              </template>

              <option
                v-else
                :value="option.id"
                :disabled="option.disabled"
                :aria-disabled="option.disabled"
              >
                {{ option.label }}
              </option>
            </template>
          </select>
        </AvTooltip>
      </div>
      <AvMessage
        :message-id="`${realId}-${messageType}`"
        :message="message"
        :type="messageType"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.av-select-control {
  position: relative;
  width: fit-content;

  &::after {
    content: '';
    position: absolute;
    right: var(--dimension-sm);
    top: v-bind(iconsTopPosition);
    transform: translateY(-50%);
    width: var(--dimension-sm);
    height: var(--dimension-sm);
    pointer-events: none;
    background-color: var(--text2);
    mask: var(--icon-path) center / contain no-repeat;
    -webkit-mask: var(--icon-path) center / contain no-repeat;
    transition: transform 0.3s;
  }

  &:has(select:open)::after {
    transform: translateY(-50%) rotate(-180deg);
  }

  &.av-select-control--disabled::after {
    opacity: 0.7;
  }

  &:not(.av-select-control--disabled):hover {
    &::after {
      background-color: var(--color-primary-hover-text);
    }

    .av-select-prefix {
      color: var(--color-primary-hover-text);
    }
  }
}

.av-select-prefix {
  position: absolute;
  left: var(--spacing-xs);
  top: v-bind(iconsTopPosition);
  transform: translateY(-50%);
  z-index: 1;
  pointer-events: none;
  transition: color 0.2s ease;
}

.av-select {
  background-color: var(--other-background-base);
  border: 1px solid var(--divider);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  optgroup {
    background: var(--other-background-base);
    color: var(--title);
  }

  &[aria-disabled=true] {
    background-color: var(--surface-background);
    color: var(--text2);
    cursor: not-allowed;
    opacity: 0.7;
  }

  &:not([aria-disabled=true]):hover {
    background-color: var(--color-primary-hover-bg);
    color: var(--color-primary-hover-text);
  }

  &:hover {
    option {
      color: var(--text1);
      background-color: var(--other-background-base);
    }
  }

  option[aria-disabled=true] {
    background-color: var(--light-background-neutral);
    color: var(--text2);
    opacity: 0.7;
  }
}
</style>

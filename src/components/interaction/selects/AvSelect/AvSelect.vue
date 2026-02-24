<script lang="ts" setup>
import AvIcon from '@/components/base/AvIcon/AvIcon.vue'
import { ICONS_DATA_URL } from '@/tokens'

export interface AvSelectOptionBase {
  id: string
  label: string
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
export interface AvSelectProps {
  /**
   * Indicates if the select is required.
   * @default false
   */
  required?: boolean

  /**
   * Indicated if the select is disabled.
   * @default false
   */
  disabled?: boolean

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
}

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
          class="av-label b2-light"
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
          :title="title"
          v-bind="$attrs"
          :style="styleVars"
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

  &:not(.av-select-control--disabled):hover {
    .av-select-prefix {
      color: white;
    }
  }
}

.av-select-prefix {
  position: absolute;
  left: var(--spacing-xs);
  top: 69%;
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
  background-image: var(--icon-path);
  background-position: calc(100% - var(--dimension-sm)) 50%;
  background-repeat: no-repeat;
  background-size: var(--dimension-sm) var(--dimension-sm);

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
    background-color: var(--dark-background-primary1);
    color: var(--other-background-base);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23FFFFFF' d='M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z'/%3E%3C/svg%3E");
  }

  &:hover {
    option {
      color: var(--text1);
      background-color: var(--other-background-base);
    }
  }

  option[aria-disabled=true] {
    background-color: var(--surface-background);
    color: var(--text2);
    opacity: 0.7;
  }
}
</style>

<script lang="ts" setup>
import { Fragment, type Slot, useSlots, type VNode, type VNodeArrayChildren } from 'vue'
import { AvRadioButton } from '@/components/interaction/radios'
import RadioButton from '@/components/interaction/radios/AvRadioButtonSet/components/RadioButton.vue'

/**
 * AvRadioButtonSet component props.
 */
export interface AvRadioButtonSetProps {
  /**
   * ID of the legend element
   * @default `av-radio-button-set-${crypto.randomUUID()}`
   */
  id?: string

  /**
   * Name of the radio group, applied to each radio `<input name>`.
   * Used for form submission and accessibility.
   */
  name: string

  /**
   * Label (legend) for the radio group, rendered visually as a title.
   * Helps screen readers understand the group context.
   * @default ''
   */
  legend?: string

  /**
   * Current selected value in the radio group.
   * Must match one of the options values.
   */
  modelValue: string | number | boolean | undefined

  /**
   * If true, disables all radio buttons in the group.
   * @default false
   */
  disabled?: boolean

  /**
   * If true, marks the group as required and shows a required indicator.
   * @default false
   */
  required?: boolean

  /**
   * If true, displays the radio buttons in compact (small) mode.
   * @default false
   */
  small?: boolean

  /**
   * If true, displays the radio buttons inline (horizontally).
   * @default false
   */
  inline?: boolean

  /**
   * Optional global error message displayed below the group.
   * If set, indicates a validation error.
   */
  errorMessage?: string

  /**
   * Optional global valid message displayed below the group.
   * If set, confirms successful validation.
   */
  validMessage?: string

  /**
   * Optional hint text displayed below the legend.
   * Provides guidance or extra information.
   */
  hint?: string
}

const {
  id = `av-radio-button-set-${crypto.randomUUID()}`,
  name,
  legend = '',
  modelValue,
  disabled = false,
  required = false,
  small = false,
  inline = false,
  errorMessage,
  validMessage,
  hint = '',
} = defineProps<AvRadioButtonSetProps>()

const emit = defineEmits<{
  /**
   * Emitted when the selected radio button changes.
   *
   * @event update:modelValue
   * @param value The newly selected value.
   * Can be a `string`, `number`, or `boolean`, depending on the bound data.
   */
  (e: 'update:modelValue', value: string | number | boolean): void
}>()

defineSlots<{
  /**
   * Default slot to pass in one or more `AvRadioButton` components.
   *
   * Each `AvRadioButton` defines the props and content for a single radio option.
   * The content of each button will be injected into the `label` slot of `DsfrRadioButton`.
   *
   * @slot default
   */
  default?: Slot
}>()

const message = computed(() => errorMessage || validMessage)
const additionalMessageClass = computed(() => errorMessage ? 'fr-error-text' : 'fr-valid-text')

function onChange ($event: string) {
  if ($event === modelValue) {
    return
  }
  emit('update:modelValue', $event)
}

const describedByElement = computed(() => message.value ? `messages-${id}` : undefined)

type AvRadioButtonNode = VNode & { type: typeof AvRadioButton }

const slots = useSlots()

function isAvRadioButton (node: unknown): node is AvRadioButtonNode {
  return (
    node !== null
    && node !== undefined
    && typeof node === 'object'
    && 'type' in node
    && node.type === AvRadioButton
  )
}

function flattenRadioButtonNodes (
  nodes: VNode[] | VNodeArrayChildren | undefined
): AvRadioButtonNode[] {
  if (!nodes) {
    return []
  }

  return nodes.flatMap((node) => {
    if (!node || typeof node !== 'object' || !('type' in node)) {
      return []
    }

    if (node.type === Fragment && Array.isArray(node.children)) {
      return flattenRadioButtonNodes(node.children)
    }

    return isAvRadioButton(node) ? [node] : []
  })
}

const radios = computed((): AvRadioButtonNode[] => {
  return flattenRadioButtonNodes(slots.default?.())
})

const selected = ref(modelValue)

watch(() => modelValue, (val) => {
  selected.value = val
})

watch(selected, (val) => {
  if (val) {
    emit('update:modelValue', val)
  }
})

defineExpose({ selected })
</script>

<template>
  <div class="fr-form-group">
    <fieldset
      class="fr-fieldset"
      :class="{
        'fr-fieldset--error': errorMessage,
        'fr-fieldset--valid': validMessage,
      }"
      :disabled="disabled"
      :aria-labelledby="id"
      :aria-describedby="describedByElement"
      :role="(errorMessage || validMessage) ? 'group' : undefined"
    >
      <legend
        v-if="legend || hint"
        :id="id"
        class="fr-fieldset__legend fr-fieldset__legend--regular"
      >
        <span class="caption-regular">{{ legend }}</span>
        <span
          v-if="hint"
          class="caption-regular fr-hint-text"
        >
          {{ hint }}
        </span>
        <span
          v-if="required"
          class="caption-regular required"
        >&nbsp;*</span>
      </legend>
      <RadioButton
        v-for="(radio, index) in radios"
        :key="index"
        v-model="selected"
        :value="radio.props?.value"
        :disabled="radio.props?.disabled ?? disabled"
        :small="small"
        :inline="inline"
        :name="name"
        @update:model-value="onChange($event as string)"
      >
        <component :is="(radio.children as Record<string, unknown>)?.default" />
      </RadioButton>

      <div
        v-if="message"
        :id="`messages-${id}`"
        class="fr-messages-group"
        aria-live="assertive"
        role="alert"
      >
        <p
          class="fr-message  fr-message--info  flex  items-center"
          :class="additionalMessageClass"
        >
          {{ message }}
        </p>
      </div>
    </fieldset>
  </div>
</template>

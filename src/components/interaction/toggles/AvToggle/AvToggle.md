# Toggles - `AvToggle`

## ✨ Introduction

The `AvToggle` is a versatile Vue component, designed to allow the user to choose between two opposite states (active/inactive).

It can display a description and a tooltip (with a dedicated one when the toggle is disabled). The text displayed next to the switch (`On` / `Off` by default) can be customized with the `default` slot.

## 🏗️ Structure

None.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `modelValue` | `boolean` | `false` | | Boolean value linked to the input (`v-model`). |
| `id` | `string` | `toggle-${crypto.randomUUID()}` | | Unique id of the input. Used for accessibility. The id of the label is `<id>-label`. |
| `name` | `string` | `undefined` | | `name` attribute of the input. |
| `description` | `string` | `undefined` | | Indicates the purpose of the toggle. |
| `tooltip` | `string` | `undefined` | | Tooltip text to display. |
| `disabled` | `boolean` | `false` | | Indicates if the toggle is disabled. |
| `disabledTooltip` | `string \| true` | `undefined` | | Tooltip text to display when the toggle is disabled. When set to `true`, the `tooltip` value is used. When not set, no tooltip is displayed while the toggle is disabled. |

> ℹ️ To reuse the `tooltip` when the toggle is disabled, bind the value explicitly (`:disabled-tooltip="true"`). The bare attribute `disabled-tooltip` is an empty string and does not display any tooltip.

The component does not forward attributes to a root element, but it reads the `data-testid` attribute to build the test ids of its elements: `<data-testid>-input` for the input and `<data-testid>-label` for the label. When `data-testid` is not provided, the `id` is used instead (or a generated value if there is no `id` either).

## 🔊 Events

| Name | Payload | Description |
| --- | --- | --- |
| `update:modelValue` | `boolean` | Emitted when the user toggles the input. Used by `v-model`. |

## 🎨 Slots

| Name | Scope | Description |
| --- | --- | --- |
| `default` | `{ active: boolean }` | Content displayed next to the switch. Replaces the default `On` / `Off` text. `active` is the current state of the toggle. |

> ℹ️ The styles applied to the default `On` / `Off` text (colors, disabled look...) are scoped to the component and are not applied to the content of the slot: style it as needed.

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-interaction-toggles-avtoggle--docs).

## 💡 Examples of use

### Basic usage

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const state = ref(false)
</script>

<template>
  <AvToggle
    v-model="state"
    description="Awesome toggle"
  />
</template>
```

### With tooltips

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const state = ref(false)
const locked = ref(true)
</script>

<template>
  <!-- A dedicated tooltip is displayed while the toggle is disabled -->
  <AvToggle
    v-model="state"
    description="Notifications"
    tooltip="Receive an email for each new message"
    :disabled="locked"
    disabled-tooltip="Only administrators can change this setting"
  />

  <!-- The same tooltip is displayed whether the toggle is disabled or not -->
  <AvToggle
    v-model="state"
    description="Notifications"
    tooltip="Receive an email for each new message"
    :disabled="locked"
    :disabled-tooltip="true"
  />
</template>
```

### Custom status text

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const accepted = ref(false)
</script>

<template>
  <AvToggle
    v-model="accepted"
    description="Terms of use"
  >
    <template #default="{ active }">
      {{ active ? 'Accepted' : 'Refused' }}
    </template>
  </AvToggle>
</template>
```

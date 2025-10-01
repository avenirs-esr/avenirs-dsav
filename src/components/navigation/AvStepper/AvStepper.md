# Navigation - `AvStepper`

## ✨ Introduction

The `AvStepper` component is a visual guide to show the user their progress through a series of steps

## 🏗️ Structure

The stepper displays:
- all steps titles
- a progress status showing the current step and the total number of steps
- a stylized progress bar

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `steps` | `string[]` | | ✅ | List of steps to display in the stepper |
| `currentStep` | `number` | | ✅ | Index of the current step (starts at 0) |
| `width` | `string` | `'100%'` | | Width of the stepper |

## 🔊 Events

None.

## 🎨 Slots

None.

## 💡 Examples of use

```vue
<script language="ts">
const currentStep = ref(0)
</script>

<template>
  <AvStepper
    :steps="['Step 1', 'Step 2', 'Step 3', 'Step 4']"
    :current-step="currentStep"
  />
  <AvButton
    label="-1"
    :disabled="currentStep <= 0"
    @click="currentStep--"
  />
  <AvButton
    label="+1"
    :disabled="currentStep >= 3"
    @click="currentStep++"
  />
</template>
```

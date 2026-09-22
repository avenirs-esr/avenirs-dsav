# Cancel and confirm buttons - `AvCancelConfirmButtons`

## ✨ Introduction

The `AvCancelConfirmButtons` is an interaction element with an interface enabling the user to perform a cancel and/or a confirm action.

## 🏗️ Structure

This component consists of two optional buttons:

- A cancel button, displayed by passing the `cancelLabel` prop,
- A confirm button, displayed by passing the `confirmLabel` prop,

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `cancelLabel` | `string` | `undefined` | | Label and title (for accessibility) of the cancel button. |
| `cancelIcon` | `string` | `'mdi:close-circle-outline'` | | Icon name of the cancel button. |
| `cancelDisabled` | `boolean` | `undefined` | | Adds a disabled state on the cancel button. |
| `cancelDisabledTooltip` | `string` | `undefined` | | Adds a tooltip text to display when the cancel button is disabled. |
| `cancelIsLoading` | `boolean` | `undefined` | | Adds a loading state on the cancel button. |
| `confirmLabel` | `string` | `undefined` | | Label and title (for accessibility) of the confirm button. |
| `confirmIcon` | `string` | `'mdi:check-circle-outline'` | | Icon name of the confirm button. |
| `confirmDisabled` | `boolean` | `undefined` | | Adds a disabled state on the confirm button. |
| `confirmDisabledTooltip` | `string` | `undefined` | | Adds a tooltip text to display when the confirm button is disabled. |
| `confirmIsLoading` | `boolean` | `undefined` | | Adds a loading state on the confirm button. |
| `iconOnly` | `boolean` | `false` | | If true, only the icons are displayed on the buttons. |
| `form` | `string` | `undefined` | | Associates the confirm button with a form. |

## 🔊 Events

| Name | Data (*payload*) | Description |
| --- | --- | --- |
| `'cancel'` | | Event emitted when the cancel button is clicked. |
| `'confirm'` | | Event emitted when the confirm button is clicked. |

## 🎨 Slots

None.

## 🛠️ Exposed methods

| Name | Parameters | Description |
| --- | --- | --- |
| `focusCancel` | | Moves focus to the cancel button. |
| `focusConfirm` | | Moves focus to the confirm button. |

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-interaction-buttons-avcancelconfirmbuttons--docs).

## 💡 Examples of use

```vue
<template>
  <AvCancelConfirmButtons
    cancel-label="Close"
    @cancel="closeModal"
  />
</template>
```

```vue
<template>
  <AvCancelConfirmButtons
    confirm-label="Confirm"
    @confirm="saveData"
  />
</template>
```

```vue
<template>
  <AvCancelConfirmButtons
    cancel-label="Previous step"
    confirm-label="Next step"
    @cancel="goToPrevStep"
    @confirm="goToNextStep"
  />
</template>
```

```vue
<template>
  <AvCancelConfirmButtons
    cancel-label="Previous step"
    confirm-label="Validate form"
    form="some-form"
    @cancel="goToPrevStep"
    @confirm="goToNextStep"
  />
</template>
```

```vue
<template>
  <AvCancelConfirmButtons
    cancel-label="Cancel"
    confirm-label="Submit"
    :confirm-disabled="!isFormValid"
    confirm-disabled-tooltip="Please complete all required fields"
    @cancel="closeModal"
    @confirm="submitForm"
  />
</template>
```

```vue
<script lang="ts" setup>
const buttonsRef = ref<InstanceType<typeof AvCancelConfirmButtons> | null>(null)

onMounted(() => buttonsRef.value?.focusCancel())
</script>

<template>
  <AvCancelConfirmButtons
    ref="buttonsRef"
    cancel-label="Close"
    confirm-label="Confirm"
    @cancel="closeModal"
    @confirm="saveData"
  />
</template>
```

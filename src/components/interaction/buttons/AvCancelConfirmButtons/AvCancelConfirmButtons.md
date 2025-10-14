# Cancel and confirm buttons - `AvCancelConfirmButtons`

## ✨ Introduction

The `AvCancelConfirmButtons` is an interaction element with an interface enabling the user to perform a cancel and/or a confirm action.

## 🏗️ Structure

This component consist of two optional buttons :

- A cancel button, displayed by passing the `cancelLabel` prop,
- A confirm button, displayed by passing the `confirmLabel` prop,

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `cancelLabel` | `string` | `undefined` | | Label and title (for accessibility) of the cancel button. |
| `cancelIcon` | `string` | `'mdi:close-circle-outline'` | | Icon name of the cancel button. |
| `cancelDisabled` | `boolean` | `undefined` | | Adds a disabled state on the cancel button. |
| `cancelIsLoading` | `boolean` | `undefined` | | Adds a loading state on the cancel button. |
| `confiirmLabel` | `string` | `undefined` | | Label and title (for accessibility) of the confirm button. |
| `confirmIcon` | `string` | `'mdi:check-circle-outline'` | | Icon name of the confirm button. |
| `confirmDisabled` | `boolean` | `undefined` | | Adds a disabled state on the cancel button. |
| `confirmIsLoading` | `boolean` | `undefined` | | Adds a loading state on the cancel button. |
| `isLoading` | `boolean` | `false` | | Indicates a loading status for the buttons. |

## 🔊 Events

| Name | Data (*payload*) | Description |
| --- | --- | --- |
| `'cancel'` | | Event emitted when the cancel button is clicked. |
| `'confirm'` | | Event emitted when the confirm button is clicked. |

## 🎨 Slots

None.

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-interaction-buttons-avcancelconfirmbuttons--docs).

## 💡 Examples of use

```vue
<template>
  <AvCancelConfirmButton
    cancel-label="Close"
    @cancel="closeModal"
  />
</template>
```

```vue
<template>
  <AvCancelConfirmButton
    confirm-label="Confirm"
    @confirm="saveData"
  />
</template>
```

```vue
<template>
  <AvCancelConfirmButton
    cancel-label="Previous step"
    confirm-label="Next step"
    @cancel="goToPrevStep"
    @confirm="goToNextStep"
  />
</template>
```

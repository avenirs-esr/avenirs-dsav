# Modals - `AvModal`

## ✨ Introduction

The `AvModal` allows the user's attention to be focused exclusively on a task or piece of information, without losing the context of the current page. This component requires a user action in order to be opened or closed.

The `AvModal` component is a configurable modal window, offering advanced features such as focus trapping, escape key listening for closure, and action button management. This component is designed to display dialogs and alerts in an accessible and ergonomic way.

## 🏗️ Structure

The default modal is used to highlight information that does not require user action. It is displayed when a button is clicked.

It consists of the following elements:
- The title (slot `header`), optional
- Content zone (slot `default`), mandatory
- The right-justified footer zone, which can be filled in using the `footer` slot, with the close button always to the left of the slot elements. This zone must contain buttons only.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `id` | `string` | `modal-${crypto.randomUUID()}` | | Unique identifier for the modal. |
| `opened` | `boolean` | `false` | | Indicates whether the modal is open. |
| `isAlert` | `boolean` | `false` | | Specifies whether the modal is an alert (role `"alertdialog"` if `true`) or not (role will then be `"dialog"`). |
| `closeButtonLabel` | `string` | | ✅ | Label and title (for accessibility) of close button. |
| `closeButtonIcon` | `string` | `'mdi:close-circle-outline'` | | Icon name of the close button. |
| `closeButtonDisabled` | `boolean` | `false` | | Adds a disabled state on the close button. |
| `closeButtonDisabledTooltip` | `string` | `undefined` | | Adds a tooltip text to display when the close button is disabled. |
| `confirmButtonLabel` | `string` | `undefined` | | Label and title (for accessibility) of confirm button. |
| `confirmButtonIcon` | `string` | `'mdi:check-circle-outline'` | | Icon name of the confirm button. |
| `confirmButtonDisabled` | `boolean` | `false` | | Adds a disabled state on the confirm button. |
| `confirmButtonDisabledTooltip` | `string` | `undefined` | | Adds a tooltip text to display when the confirm button is disabled. |
| `isLoading` | `boolean` | `false` | | Adds a loading state on the close and confirm buttons. |

## 🔊 Events

| Name | Data (*payload*) | Description |
| --- | --- | --- |
| `'close'` | | Event emitted when modal is closed. |
| `'confirm'` | | Event emitted when confirm button is clicked. |
| `'clickOutside'` | | Event emitted when a click is detected outside the modal. |

## 🎨 Slots

| Name | Description |
| --- | --- |
| `default` | Default slot for modal content. |
| `header` | Slot for modal header. |
| `footer` | Slot for modal footer. |

## 💡 Examples of use

```vue
<script lang="ts" setup>
const { showModal, displayModal, hideModal } = useModal()
</script>

<template>
  <AvButton
    label="Open modal"
    @click="displayModal"
  />
  <AvModal
    :opened="showModal"
    close-button-label="Close"
    @close="hideModal"
  >
    <template #header>
      <span class="n5">An awesome title</span>
    </template>
    <span class="b2-regular">An awesome content</span>
    <template #footer>
      <AvButton label="A button to the right of the 'Close' button" />
    </template>
  </AvModal>
</template>
```

```vue
<script lang="ts" setup>
const { showModal, displayModal, hideModal } = useModal()
const isFormValid = ref(false)

function submitForm () {
  hideModal()
}
</script>

<template>
  <AvButton
    label="Open modal"
    @click="displayModal"
  />
  <AvModal
    :opened="showModal"
    close-button-label="Cancel"
    confirm-button-label="Submit"
    :confirm-button-disabled="!isFormValid"
    confirm-button-disabled-tooltip="Please complete all required fields"
    @close="hideModal"
    @confirm="submitForm"
  >
    <span class="b2-regular">Form content</span>
  </AvModal>
</template>
```

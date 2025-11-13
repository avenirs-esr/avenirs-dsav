# Messages - `AvMessage`

## ✨ Introduction

The `AvMessage` is a component that allows you to display small texts with an icon on the left depending on the type of information. This component is usefull for displaying error or success messages.

## 🏗️ Structure

- The component is an `AvIconText` component with specific icon and color depending on the type (prop `type`).

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `messageId` | `string` | `message-${crypto.randomUUID()}` | | Unique ID of the component. |
| `type` | `'info' \| 'success' \| 'warning' \| 'error'` | | ✅ | Defines the type of message to display. |
| `message` | `string \| string[]` | `undefined` | | Message text to display. |

## 🔊 Events

None.

## 🎨 Slots

None.

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-base-avmessage--docs).

## 💡 Examples of use

```vue
<template>
  <AvMessage
    :type="errorMessage ? 'error' : 'success'"
    :message="message"
  />
</template>
```

# Texts with icon - `AvIconText`

## ✨ Introduction

The `AvIconText` is a component that allows you to display text with an icon on the left (preferably an [MDI](https://icon-sets.iconify.design/mdi/) icon). This Vue component is ideal for displaying text with an icon that allows you to visualize the type of information conveyed by the text.

## 🏗️ Structure

- The component is a `div` element composed of an `AvIcon` component and a `span`.
- Props allow you to modify the appearance of the icon and text according to the props: color, icon, size, and handling of overly long text.
- The `label` is displayed inside a `span`, potentially with the `ellipsis` prop to handle truncated text.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `textColor` | `string` | `'var(--text1)'` | | The text color. |
| `iconColor` | `string` | `'var(--text1)'` | | The icon color. |
| `icon` | `string` | | ✅ | The icon name according to the naming convention of [Iconify-vue](https://icon-sets.iconify.design/). |
| `text` | `string` | | ✅ | The text to display. |
| `typographyClass` | `string` | `'b2-regular'` | | The typography class to use for the text. |
| `gap` | `string` | `'0.25rem'` | | The gap between the icon and the text. |
| `inline` | `boolean` | `false` | | If `false`, text that is too long will be truncated. |

## 🔊 Events

None.

## 🎨 Slots

None.

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-base-avicontext--docs).

## 💡 Examples of use

```vue
<template>
  <AvIconText
    text="Mailbox"
    icon="mdi:chat-bubble-outline"
    text-color="var(--title)"
    icon-color="var(--dark-background-primary1)"
    typography-class="n6"
    gap="var(--spacing-md)"
  />
</template>
```

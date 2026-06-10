# Tooltips - `AvTooltip`

## ✨ Introduction

The `AvTooltip` component replaces the native `title` attribute with a custom tooltip that can be styled and positioned consistently with the DSAV design system.

It appears on hover and keyboard focus, making it a better fit for accessible UI controls than the browser default tooltip.

## 🏗️ Structure

The `AvTooltip` component consists of a trigger element (provided via the default slot) and a tooltip content that appears when the trigger is hovered or focused. The tooltip content is defined by the `content` prop.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `content` | `string` | | ✅ | Tooltip text. |
| `disabled` | `boolean` | `false` | | Disable the tooltip. |
| `forceFocusable` | `boolean` | `false` | | Make the tooltip trigger focusable even if the default slot content is not. |

## 🎨 Slots

| Name | Description |
| --- | --- |
| `default` | Trigger content that will reveal the tooltip on hover/focus. |

## 🔊 Events

None.

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-overlay-tooltips-avtooltip--docs).

## 💡 Example

```vue
<template>
  <AvTooltip content="Delete item">
    <AvButton
      icon-only
      icon="MDI_ICONS.TRASH_CAN_OUTLINE"
    />
  </AvTooltip>
</template>
```

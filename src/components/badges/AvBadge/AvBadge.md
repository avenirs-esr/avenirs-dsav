# Badges - `AvBadge`

## ✨ Introduction

The `AvBadge` is ideal for displaying short, important information, such as categories, labels, or statuses.

## 🏗️ Structure

- The component is a `p` element with the `av-badge` class.
- Props allow you to modify the badge appearance according to the props: color, icon presence, size, and handling of overly long text.
- The `label` is displayed inside a `span`, potentially with the `ellipsis` prop and a defined or maximum size to handle truncated text.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `color` | `string` | | ✅ | The color of the text to display in the badge. |
| `backgroundColor` | `string` | | ✅ | The background color of the badge. |
| `borderColor` | `string` | | | The color of the badge border. |
| `iconDataUrl` | `string` | | | The base64 icon to be displayed. You can use the ICONS_DATA_URL constant from DSAV. |
| `label` | `string` | | ✅ | The text to display in the badge. |
| `small` | `boolean` | `false` | | If `true`, displays a reduced-size badge. |
| `ellipsis` | `boolean` | `false` | | If `true`, the text is truncated with an ellipsis if it is too long. |

## 🔊 Events

None.

## 🎨 Slots

None.

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-badges-avbadge--docs).

## 💡 Examples of use

```vue
<template>
  <AvBadge
    label="In progress"
    color="var(--dark-background-primary1)"
    background-color="var(--light-background-primary2)"
    :icon-data-url="ICON_DATA_URL.MDI_CALENDAR_CHECK_OUTLINE"
    small
  />
</template>
```

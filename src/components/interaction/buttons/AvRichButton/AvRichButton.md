# Rich buttons - `AvRichButton`

## ✨ Introduction

The rich button is an interaction element with an interface enabling the user to perform an action.

The `AvRichButton` is an elegant, reusable Vue component designed to simplify the creation of custom rich buttons. It features optional icons and a click manager. It is easy to use, with the flexibility to adapt to different contexts.

With a default slot, button content is highly customizable. The `label` property lets you assign the button `title` and `aria-label`.

## 🏗️ Structure

Rich buttons consist of a button composed of :
- an optional left icon
- a default slot for button content
- an optional right icon

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `label` | `string` | | ✅ | Aria label and title for accessibility. |
| `iconLeft` | `string` | `undefined` | | Icon to be displayed on the left of the button. Must be an icon name. |
| `iconRight` | `string` | `undefined` | | Icon to be displayed on the right of the button. Must be an icon name. |
| `customPadding` | `string` | `'1rem'` | | Allows you to modify button padding. |
| `enableTooltip` | `boolean` | `false` | | Enables the tooltip on the button. The tooltip will display the content of the `label` prop. |

## 🔊 Events

| Name | Description |
| --- | --- |
| `click` | Emitted when the button is clicked. |

## 🎨 Slots

| Name | Description |
| --- | --- |
| `default` | Default slot for the global content of the rich button. |

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-interaction-buttons-avrichbutton--docs).

## 💡 Examples of use

```vue
<template>
  <AvRichButton
    label="Edit my profile"
    icon-right="mdi:pencil-outline"
  >
    <span>Edit my profile</span>
  </AvRichButton>
</template>
```

```vue
<template>
  <AvRichButton
    icon-right="mdi:arrow-right-thin"
    label="Page name"
    custom-padding="var(--spacing-xs)"
  >
    <div class="body">
      <AvIcon
        :name="MDI_ICONS.FILE_ACCOUNT_OUTLINE"
        color="var(--other-background-base)"
        :size="1.5"
      />
      <div class="description ellipsis-container">
        <span class="ellipsis b1-regular">Page name</span>
        <span class="ellipsis caption-light">Last update on 02/02/2025</span>
      </div>
    </div>
  </AvRichButton>
</template>
```

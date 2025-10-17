# Tags - `AvTag`

## ✨ Introduction

The `AvTag` categorizes/classifies/organizes content using keywords. They help users easily search for and find information.

The tag can be used as a filter (in a search results page, for example). In this case, it can be:
- activated as a filter to be selected/deselected;
- deleted; serves as a reminder of a filter that has been checked in a sidebar or drop-down list.

## 🏗️ Structure

It consists of the following elements:
- a mandatory label: either using the prop `label`;
- an optional icon: the name of an `@iconify/vue` icon.

## 🏷️ Props

| Name | Type| Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `label` | `string` | | ✅ | Displayed tag label.|
| `link` | `string` | | | URL for external link. Also determines the tag type (`a` or `RouterLink`).|
| `tagName` | `'p' \| 'button'` | `'p'` | | Tag name used for the tag (should be `'p'` or `'button'`). *(DSFR default)* |
| `icon` | `string` | | | Icon to display in the tag. Can be a name or an icon configuration. |
| `disabled` | `boolean` | `false` | | Disables the tag if it is a button. |
| `small` | `boolean` | `false` | | Displays the tag in a small version.|
| `iconOnly` | `boolean` | `false` | | Displays the tag in icon-only version.|
| `selectable` | `boolean` | `false` | | Makes the tag selectable. When `true`, additional props are available.|
| `selected` | `boolean` | | | Indicates if the tag is selected. *(Available if `selectable` is `true`)* |
| `value` | `T` | | | Tag value (useful in a selectable tags list). *(Available if `selectable` is `true`)* |

## 🔊 Events

None.

## 🎨 Slots

None.

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-badges-avtag--docs).

## 💡 Examples of use

```vue
<template>
  <AvBadge
    label="In progress"
    color="var(--dark-background-primary1)"
    background-color="var(--light-background-primary2)"
    icon-path="/assets/icons/calendar-range-outline.svg"
    small
  />
</template>
```

# Navigation - `AvSkipLinks`

## ✨ Introduction

The `AvSkipLinks` component is ideal for providing skip links to improve navigation and accessibility.

## 🏗️ Structure

- The component is a `nav` element with the `av-skip-links` class.
- Props allow you to define the skip links with their labels (`label` prop) and target IDs (`id` prop).

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `skipLinks` | `Array<{ label: string, id: string }>` | `[]` | ✅ | The list of skip links to display. Each skip link should have a `label` and an `id`. |

## 🔊 Events

None.

## 🎨 Slots

None.

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-navigation-avskiplinks--docs).

## 💡 Examples of use

```vue
<template>
  <AvSkipLinks
    :skip-links="[
      { label: 'Aller au contenu principal', id: 'main' },
      { label: 'Aller au pied de page', id: 'footer' },
    ]"
  />
</template>
```

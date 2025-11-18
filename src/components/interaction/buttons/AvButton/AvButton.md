# Buttons - `AvButton`

## ✨ Introduction

The `AvButton` is an interaction element with an interface enabling the user to perform an action.

The `AvButton` is an elegant, reusable Vue component designed to simplify the creation of custom buttons. It features adjustable sizes (small and default), an optional icon and a click manager. It's easy to use, with the flexibility to adapt to different contexts.

The button only allow three variants (`DEFAULT` without border, `OUTLINED` with border and `FLAT` with filled background and border) and two themes (`PRIMARY` blue and `SECONDARY` grey).

## 🏗️ Structure

Buttons consist of :

- A label - mandatory, using the `label` prop, enables label display when `iconOnly` is `false`, also enables connection to `title` and `aria-label` ;
- An icon, which can be modified (see available icons) - optional.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `variant` | `'DEFAULT' \| 'OUTLINED' \| 'FLAT'` | `'DEFAULT'` | | Button variant: without border (`DEFAULT`) or with border (`OUTLINED`) or with filled background and border (`FLAT`). |
| `theme` | `'PRIMARY' \| 'SECONDARY'` | `'PRIMARY'` | | Button theme: blue (`PRIMARY`) or grey (`SECONDARY`). |
| `isLoading` | `boolean` | `false` | | Indicates a loading status for the button. |
| `iconScale` | `number` | `undefined` | | Allows you to manually change the icon size (it is automatically calculated otherwise). |
| `noRadius` | `boolean` | `false` | | Allows you to remove radii from the button border. |
| `disabled` | `boolean` | `false` | | Indicates the disabled state of the button. |
| `label` | `string` | | ✅ | Text label for the button. |
| `iconOnly` | `boolean` | `false` | | Hide label text (`true`) or show it (`false`). |
| `small` | `boolean` | `false` | | Display the button in small size (`true`) or default size (`false`). |
| `icon` | `string \| InstanceType<typeof AvIcon>['$props']` | `undefined` | | Icon to be displayed in button. Can be a name or icon configuration. |
| `noSentenceCase` | `boolean` | `false` | | Disable sentence case transformation on the label. You should only use this on very specific cases. |
| `onClick` | `($event: MouseEvent) => void` | `undefined` | | Function called when button is clicked.

## 🔊 Events

None.

## 🎨 Slots

None.

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-interaction-buttons-avbutton--docs).

## 💡 Examples of use

```vue
<template>
  <AvButton
    label="See all"
    :on-click="navigateToStudentDeliverables"
    icon="mdi:arrow-right-thin"
  />
</template>
```

```vue
<template>
  <AvButton
    class="settings-btn"
    icon="mdi:dots-vertical"
    icon-only
    variant="OUTLINED"
    small
    label="Paramètres de la trace"
    :on-click="toggleSettingsMenu"
  />
</template>
```

```vue
<template>
  <AvButton
    label="Logout"
    icon="mdi:logout"
    variant="DEFAULT"
    theme="SECONDARY"
    small
    no-radius
  />
</template>
```

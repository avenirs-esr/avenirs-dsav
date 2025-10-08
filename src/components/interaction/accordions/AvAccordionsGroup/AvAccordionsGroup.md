# Accordions group - `AvAccordionsGroup`

## ✨ Introduction

The `AvAccordionsGroup` component automatically manages the addition of `AvAccordion` in a group according to the `AvAccordion` present in the `default` slot.

Accordions allow users to show and hide sections of content presented on a page.

The accordions group lets you group several accordions into a single coherent unit. It manages active selection logic between child accordions, allowing you to open one accordion while closing the others. This component is essential for organizing interactively linked accordion sets.

## 🏗️ Structure

An accordion consists of the following elements:

- a header (prop `title`, type `string`), corresponding to the section title - mandatory.
- a left icon (prop `icon`, type `string`), adding information to the section title - optionnal, must respect VICon name format
- a right icon, `v` indicates when the panel is closed, `^` when the panel is open.
- a separator
- a content zone, hidden by default, which can contain any type of element. The default `slot` is designed for this purpose.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `activeAccordion` | `number` | `undefined` | | Index of the currently active accordion. Used with `v-model:activeAccordion` for two-way data binding. |

## 🔊 Events

| Name | Description |
| --- | --- |
| `update:activeAccordion` | Emitted when the active accordion changes. Receives the index of the newly active accordion. |

## 🎨 Slots

| Name | Description |
| --- | --- |
| `default` | Default slot for adding accordions (each accordion must be in an `AvAccordion`). |

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-interaction-accordions-avaccordionsgroup--docs).

## 💡 Examples of use

### Basic usage

```vue
<template>
  <AvAccordionsGroup>
    <AvAccordion
      title="Accordion 1"
      icon="mdi:file-document-multiple-outline"
    >
      <span>First accordion content</span>
    </AvAccordion>
    <AvAccordion
      title="Accordion 2"
      icon="mdi:plus-circle-outline"
    >
      <span>Second accordion content</span>
    </AvAccordion>
  </AvAccordionsGroup>
</template>
```

### With controlled state

```vue
<script setup lang="ts">
const activeAccordion = ref(0)
</script>

<template>
  <AvAccordionsGroup v-model:active-accordion="activeAccordion">
    <AvAccordion
      title="Accordion 1"
      icon="mdi:file-document-multiple-outline"
    >
      <span>First accordion content</span>
    </AvAccordion>
    <AvAccordion
      title="Accordion 2"
      icon="mdi:plus-circle-outline"
    >
      <span>Second accordion content</span>
    </AvAccordion>
  </AvAccordionsGroup>
</template>
```

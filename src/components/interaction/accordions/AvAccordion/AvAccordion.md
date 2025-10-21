# Accordions - `AvAccordion`

## ✨ Introduction

The `AvAccordion` allows users to show and hide sections of content presented on a page.

## 🏗️ Structure

An accordion consists of the following elements:
- a header (prop title, of type string), corresponding to the section title - mandatory.
- an icon, indicating when the panel is closed and when it is open.
- a separator
- a content area, hidden by default, that can contain any type of element; the default slot is designed for this.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `id` | `string` | `crypto.randomUUID()` | | Unique id of the accordion. |
| `title` | `string` | | ✅ | Title of accordion displayed. |
| `icon` | `string` | `undefined` | | Accordion icon. |

## 🔊 Events

None.

## 🎨 Slots

| Name | Description |
| --- | --- |
| `default` | Default slot for accordion content. |

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-interaction-accordions-avaccordion--docs).

## 💡 Examples of use

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

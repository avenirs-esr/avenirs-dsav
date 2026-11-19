# Number Indicator - `AvNumberIndicator`

## ✨ Introduction

The `AvNumberIndicator` component displays a non-negative integer value inside a circular visual element.

It is designed to highlight or identify an item within a collection, sequence, or structured content. It can be used independently or integrated into other components such as `AvListItem` or `AvAccordion`.

The component inherits the text color from its parent and automatically adjusts its width to accommodate the displayed value.

## 🏗️ Structure

The component consists of a single `span` element (inside an `av-row` div) containing:

- the numeric value,
- a circular border,
- centered text,
- consistent minimum dimensions.

The component is only rendered when the provided value is a non-negative integer.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `value` | `number` | `undefined` | | The numeric value to display. Only non-negative integers are rendered. |

## 🔊 Events

None.

## 🎨 Slots

None.

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-...).

## 💡 Examples of use

### Basic usage

```vue
<template>
  <AvNumberIndicator :value="1" />
</template>
```

### With a list item

```vue
<template>
  <AvListItem title="First item">
    <AvNumberIndicator :value="1" />
  </AvListItem>
</template>
```

### With an accordion

```vue
<template>
  <AvAccordion>
    <template #title>
      <AvNumberIndicator :value="2" />
      <span>Accordion title</span>
    </template>
  </AvAccordion>
</template>
```

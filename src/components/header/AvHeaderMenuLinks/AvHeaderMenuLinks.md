# Header menu links - `AvHeaderMenuLinks`

## ✨ Introduction

The `AvHeaderMenuLinks` component is intended to be used within the `AvHeader` component.

It provides a list-based navigation structure using the `AvButton` component.

## 🏗️ Structure

- `<nav>`: The main component.
- Encloses a `<ul>` list of `<AvButton>`.
- Each `AvButton` is an item in the list and is dynamically rendered.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `links` | `{ icon?: string \| InstanceType<typeof AvIcon>['$props'], label?: string, onClick?: ($event: MouseEvent) => void }[]` | `undefined` | | An array of prop objects for each `AvButton`. |
| `navAriaLabel` | `string` | `'Menu secondaire'` | | ARIA label for navigation, useful for accessibility. |

## 🔊 Events

| Name | Data (*payload*) | Description |
| --- | --- | --- |
| `'linkClick'` | Click Event (`MouseEvent`) | Event triggered when one of the links is clicked. |

## 🎨 Slots

None.

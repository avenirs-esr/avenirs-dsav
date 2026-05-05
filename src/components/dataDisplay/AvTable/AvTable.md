# Data Display - `AvTable`

## ✨ Introduction

The `AvTable` is a generic tabular data display component for typed data. It is headless on the logic side via **TanStack Table**, while maintaining full control over HTML/CSS rendering using the design system tokens.

## 🏗️ Structure

The `AvTable` consists of:

- A `div` wrapper with horizontal scroll and overflow hidden.
- A semantic `table` element with `caption`, `thead` and `tbody`.
- Dynamic slots `cell(key)` and `header(key)` per column.
- Customizable `loading` and `empty` states.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `columns` | `AvTableColumn<T>[]` | | ✅ | Column definitions |
| `rows` | `T[]` | | ✅ | Data to display |
| `rowKey` | `keyof T & string` | | ✅ | Unique key for each row |
| `loading` | `boolean` | `false` | | Displays the loading state |
| `caption` | `string` | | | Accessible table caption |
| `textAlign` | `'start' \| 'center' \| 'end'` | `'start'` | | Horizontal text alignment in all cells |

## 🔊 Events

None.

## 🎨 Slots

| Name | Exposed Props | Description |
| --- | --- | --- |
| `cell(${key})` | `{ row, value, rowIndex }` | Custom content for a cell |
| `header(${key})` | `{ column, header }` | Custom content for a header |
| `empty` | — | Displayed when `rows` is empty |
| `loading` | — | Displayed when `loading` is `true` |

## 🚀 Storybook demos

You can find examples of use and demo of the component on its dedicated [Storybook page](https://avenirs-esr.github.io/avenirs-dsav/storybook/?path=/docs/components-datadisplay-avtable--docs).

## 💡 Examples of use

```vue
<AvTable
  :columns="columns"
  :rows="users"
  row-key="id"
  caption="User list"
>
  <template #cell(status)="{ value }">
    <AvBadge :label="value" />
  </template>

  <template #empty>
    <span>No results found.</span>
  </template>
</AvTable>
```

```ts
const columns: AvTableColumn<User>[] = [
  { key: 'lastName', label: 'Last name' },
  { key: 'firstName', label: 'First name' },
  { key: 'status', label: 'Status' },
]
```

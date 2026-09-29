# Pagination - `AvPagination`

## ✨ Introduction

The `AvPagination` is a pagination system compliant with good ergonomic and accessibility practices (ARIA). It allows easy navigation through multiple pages, with advanced features such as page display limitation and event management.

## 🏗️ Structure

This component displays links for the first, previous, middle, next and last pages, with adaptive controls according to pagination status.

## 🏷️ Props

| Name | Type | Default | Mandatory | Description |
| --- | --- | --- | --- | --- |
| `compact` | `boolean` | `false` | | Allows compact display (`Page x of y` and navigation with only previous page and next page without text with just the icon). |
| `pages` | `Page[]` | | ✅ | List of pages, where each page is an object containing information such as `href` and `label`. |
| `truncLimit` | `number` | `2` | | Maximum number of pages displayed. |
| `currentPage` | `number` | `0` | | Index of currently selected page (starts at `0`). |
| `firstPageLabel` | `string` | | ✅ | Tooltip text for link to first page. |
| `firstPageDisabledTooltip` | `string` | | | Tooltip text for disabled first page link. |
| `lastPageLabel` | `string` | | ✅ | Tooltip text for link to last page. |
| `lastPageDisabledTooltip` | `string` | | | Tooltip text for disabled last page link. |
| `nextPageLabel` | `string` | | ✅ | Tooltip text for page link. |
| `nextPageDisabledTooltip` | `string` | | | Tooltip text for disabled next page link. |
| `prevPageLabel` | `string` | | ✅ | Tooltip text for previous page link. |
| `prevPageDisabledTooltip` | `string` | | | Tooltip text for disabled previous page link. |
| `compactCurrentPageLabel` | `string` | `undefined` | | Text for compact current page. |

## 🔊 Events

| Name | Data (*payload*) | Description |
| --- | --- | --- |
| `'update:current-page'` | `number` | Sent when user changes page. |

## 🎨 Slots

None.

## 💡 Examples of use

```vue
<template>
  <AvPagination
    id="top-pagination"
    :current-page="pageInfo.page"
    :pages="pages"
    aria-label="Top pagination"
    compact
    @update:current-page="onUpdateCurrentPage"
  />
</template>
```

```vue
<template>
  <AvPagination
    id="bottom-pagination"
    :items="amss"
    :current-page="pageInfo.page"
    :pages="pages"
    aria-label="Bottom pagination"
    @update:current-page="onUpdateCurrentPage"
  />
</template>
```

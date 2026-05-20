# Text

_Last updated: 2026-05-20_

## ✨ Introduction

This `text` utility generates text-related classes for all defined styles.

## 🏷️ Class patterns

| Class pattern | Description |
|---------------|-------------|
| `.av-max-lines` | Applies maximum lines with ellipsis |
| `.av-ellipsis` | Applies ellipsis for single-line text |

📝 Notes:
- for `.av-max-lines`, the number of lines is determined by the CSS variable `--max-lines` (default: 2), which can be set on the element or inherited from a parent element.

## 🎨 Some CSS results

### Text max lines classes

```css
.av-max-lines {
  display: -webkit-box !important;
  -webkit-box-orient: vertical !important;
  overflow: hidden !important;
  line-clamp: var(--max-lines) !important;
  -webkit-line-clamp: var(--max-lines) !important;
}
```

### Text ellipsis classes

```css
.av-ellipsis {
  display: inline !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
}
```

## 💡 Examples of use

```html
<span class="av-max-lines">
  <!-- av-max-lines: maximum lines with ellipsis (2 lines due to default value of --max-lines) on all screens -->
</span>
```

```html
<span class="av-max-lines" style="--max-lines: 3;">
  <!-- av-max-lines: maximum lines with ellipsis (3 lines due to overridden value of --max-lines) on all screens -->
</span>
```

```vue
<template>
  <span
    class="av-max-lines"
    style="--max-lines: 4;"
  >
    <!-- av-max-lines: maximum lines with ellipsis (4 lines due to overridden value of --max-lines) on all screens -->
  </span>
</template>
```

```vue
<template>
  <span class="my-truncated-text av-max-lines">
    <!-- av-max-lines: maximum lines with ellipsis (number of lines determined by the .my-truncated-text style) on all screens -->
  </span>
</template>

<style lang="scss" scoped>
.my-truncated-text {
  --max-lines: 3;
}
</style>
```

```vue
<template>
  <div class="parent">
    <span class="av-max-lines">
    <!-- av-max-lines: maximum lines with ellipsis (number of lines determined by the parent style) on all screens -->
    </span>
  </div>
</template>

<style lang="scss" scoped>
.parent {
  --max-lines: 3;
}
</style>
```

```html
<span class="av-ellipsis">
  <!-- av-ellipsis: ellipsis for single-line text on all screens -->
</span>
```

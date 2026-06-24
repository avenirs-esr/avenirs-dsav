# Text

_Last updated: 2026-06-24_

## ✨ Introduction

This `text` utility generates text-related classes for all defined styles.

## 🏷️ Class patterns

| Class pattern | Description |
|---------------|-------------|
| `.av-max-lines` | Applies maximum lines with ellipsis |
| `.av-wrap-anywhere` | Applies wrapping anywhere with hyphens |
| `.av-ellipsis` | Applies ellipsis for single-line text |
| `.av-text-{left\|center\|right\|justify}` | Applies text alignment |
| `.av-text-{left\|center\|right\|justify}--{sm\|md\|lg\|xl}` | Applies text alignment from a breakpoint and up |
| `.av-text-{bold\|light\|regular}` | Applies text weight |

📝 Notes:
- for `.av-max-lines`, the number of lines is determined by the CSS variable `--max-lines` (default: 2), which can be set on the element or inherited from a parent element.
- text alignment classes are generated from the available alignment values and also expose responsive variants.

## 🎨 Some CSS results

### Text max lines classes

```css
.av-max-lines {
  display: -webkit-box !important;
  -webkit-box-orient: vertical !important;
  overflow: hidden !important;
  white-space: normal !important;
  text-overflow: ellipsis !important;
  overflow-wrap: anywhere !important;
  word-break: break-word !important;
  line-clamp: var(--max-lines) !important;
  -webkit-line-clamp: var(--max-lines) !important;
}
```

### Wrap anywhere with hyphens classes

```css
.av-wrap-anywhere {
  min-width: 0 !important;
  white-space: normal !important;
  overflow-wrap: anywhere !important;
  word-break: break-word !important;
  hyphens: auto !important;
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

### Text alignment classes

```css
.av-text-left {
  text-align: left !important;
}

.av-text-center {
  text-align: center !important;
}

.av-text-right {
  text-align: right !important;
}

.av-text-justify {
  text-align: justify !important;
}
```

### Text weight classes

```css
.av-text-bold {
  font-weight: var(--font-weight-bold) !important;
}

.av-text-light {
  font-weight: var(--font-weight-light) !important;
}

.av-text-regular {
  font-weight: var(--font-weight-regular) !important;
}
```

### Responsive text alignment classes

```css
@media (min-width: <breakpoint>) {
  .av-text-center--md {
    text-align: center !important;
  }
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
<span class="av-wrap-anywhere">
  <!-- av-wrap-anywhere: wrap anywhere with hyphens on all screens -->
</span>
```

```html
<span class="av-ellipsis">
  <!-- av-ellipsis: ellipsis for single-line text on all screens -->
</span>
```

```html
<p class="av-text-center">
  <!-- av-text-center: centered text on all screens -->
</p>
```

```html
<p class="av-text-left av-text-right--lg">
  <!-- av-text-left: left-aligned text by default -->
  <!-- av-text-right--lg: right-aligned text from the lg breakpoint and up -->
</p>
```

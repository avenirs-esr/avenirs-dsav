# Border

_Last updated: 2026-10-08_

## ✨ Introduction

This `border` utility generates border width, border style and border radius classes for all defined sizes.

## 🏷️ Class patterns

| Class pattern | Description |
|---------------|-------------|
| `.av-border-width-{none\|sm\|md\|lg}` | Applies `border-width` with the specified size |
| `.av-border-style-{solid\|dashed\|dotted\|none}` | Applies `border-style` with the specified style |
| `.av-radius-{none\|xxs\|xs\|sm\|md\|lg\|xl\|hg\|full}` | Applies `border-radius` with the specified size |
| `.av-separator-{top\|right\|bottom\|left}` | Applies a separator (`1px solid var(--stroke)`) to the specified direction |

## 🎨 Some CSS results

### Border width classes

```css
.av-border-width-sm {
  border-width: 0.0625rem !important;
}

.av-border-width-md {
  border-width: 0.125rem !important;
}
```

### Border style classes

```css
.av-border-style-solid {
  border-style: solid !important;
}

.av-border-style-dashed {
  border-style: dashed !important;
}
```

### Border radius classes

```css
.av-radius-sm {
  border-radius: var(--radius-sm) !important;
}

.av-radius-md {
  border-radius: var(--radius-md) !important;
}
```

### Separator classes
```css
.av-separator-top {
  border-top: 1px solid var(--stroke) !important;
}

.av-separator-right {
  border-right: 1px solid var(--stroke) !important;
}

.av-separator-bottom {
  border-bottom: 1px solid var(--stroke) !important;
}

.av-separator-left {
  border-left: 1px solid var(--stroke) !important;
}
```

## 💡 Examples of use

```html
<div class="av-border-width-sm av-border-style-solid av-radius-sm av-separator-bottom">
  <!-- border-width-sm: border width sm (0.0625rem) on all screens -->
  <!-- border-style-solid: solid border style on all screens -->
  <!-- radius-sm: border radius sm (var(--radius-sm)) on all screens -->
  <!-- av-separator-bottom: separator at the bottom (1px solid var(--stroke)) on all screens -->
</div>
```

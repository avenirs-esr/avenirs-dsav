---
layout: page
lastUpdated: true
---

# Border

## ✨ Introduction

This `border` utility generates border width, border style and border radius classes for all defined sizes.

## 🏷️ Class patterns

| Class pattern | Description |
|---------------|-------------|
| `.av-border-width-{widthSize}` | Applies `border-width` with the specified size |
| `.av-border-style-{style}` | Applies `border-style` with the specified style |
| `.av-radius-{radiusSize}` | Applies `border-radius` with the specified size |

📝 Notes:
- `{widthSize}` corresponds to the border width scale defined in this file: `none` (`0`), `sm` (`0.0625rem`), `md` (`0.125rem`), `lg` (`0.25rem`).
- `{radiusSize}` corresponds to the radius scale defined in the core: `none`, `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `hg`, `full`.
- `{style}` options include: `solid`, `dashed`, `dotted`, `none`.

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

## 💡 Examples of use

```html
<div class="av-border-width-sm av-border-style-solid av-radius-sm">
  <!-- border-width-sm: border width sm (0.0625rem) on all screens -->
  <!-- border-style-solid: solid border style on all screens -->
  <!-- radius-sm: border radius sm (var(--radius-sm)) on all screens -->
</div>
```

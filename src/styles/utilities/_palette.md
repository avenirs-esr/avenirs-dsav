# Palette

## ✨ Introduction

This `palette` utility generates usual text color classes.

## 🏷️ Class patterns

| Class pattern | Description |
|---------------|-------------|
| `.av-text-{color}` | Applies text color with the specified color |

📝 Notes:
- `{color}` can be one of the following: `text1`, `text2` and `title`.

## 🎨 Some CSS results

```css
.av-text-text1 {
  color: var(--text1) !important;
}

.av-text-text2 {
  color: var(--text2) !important;
}

.av-text-title {
  color: var(--title) !important;
}
```

## 💡 Examples of use

```html
<span class="av-text-text1">
  <!-- text1: text color text1 (var(--text1)) on all screens -->
</span>
<span class="av-text-text2">
  <!-- text2: text color text2 (var(--text2)) on all screens -->
</span>
<span class="av-text-title">
  <!-- title: text color title (var(--title)) on all screens -->
</span>
```

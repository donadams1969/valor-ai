## 2025-05-02 - Progress Component Accessibility
**Learning:** Radix UI Progress components lack inherent labeling and must have explicit `aria-label` or `aria-labelledby` props to be accessible to screen readers, especially when visual labels are siblings.
**Action:** Always verify `Progress` usage includes accessible labels.

## 2026-02-02 - Keyboard Accessibility for Scrollable Regions
**Learning:** Scrollable areas like logs or code blocks must have `tabIndex="0"` and a descriptive `aria-label` to be accessible to keyboard users.
**Action:** Audit all `overflow-auto` or `overflow-scroll` containers for accessibility props.

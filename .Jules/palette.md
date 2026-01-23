## 2025-05-02 - Progress Component Accessibility
**Learning:** Radix UI Progress components lack inherent labeling and must have explicit `aria-label` or `aria-labelledby` props to be accessible to screen readers, especially when visual labels are siblings.
**Action:** Always verify `Progress` usage includes accessible labels.

## 2025-05-21 - Scrollable Region Accessibility
**Learning:** Scrollable containers (like code blocks and logs) with `overflow: auto` are inaccessible to keyboard users unless they have `tabIndex={0}`. They also need `aria-label` and visible focus styles to be discoverable and usable.
**Action:** Audit all `overflow: auto` / `overflow: scroll` elements for keyboard accessibility.

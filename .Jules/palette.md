## 2025-05-02 - Progress Component Accessibility
**Learning:** Radix UI Progress components lack inherent labeling and must have explicit `aria-label` or `aria-labelledby` props to be accessible to screen readers, especially when visual labels are siblings.
**Action:** Always verify `Progress` usage includes accessible labels.

## 2025-05-02 - Live Log Container Accessibility
**Learning:** Dynamic log containers / terminals need `role="log"`, `aria-live="polite"`, and `tabIndex={0}` to be accessible to screen readers and allow keyboard scrolling.
**Action:** Always add these attributes to "terminal" or "log" style components.

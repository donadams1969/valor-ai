## 2025-05-02 - Progress Component Accessibility
**Learning:** Radix UI Progress components lack inherent labeling and must have explicit `aria-label` or `aria-labelledby` props to be accessible to screen readers, especially when visual labels are siblings.
**Action:** Always verify `Progress` usage includes accessible labels.

## 2025-05-02 - Terminal Log Accessibility
**Learning:** Live-updating "terminal" or "log" areas are often inaccessible.
**Action:** Always add `role="log"`, `aria-live="polite"`, `tabIndex={0}`, and `aria-label` to log containers to support screen readers and keyboard navigation.

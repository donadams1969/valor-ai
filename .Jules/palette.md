## 2025-05-02 - Progress Component Accessibility
**Learning:** Radix UI Progress components lack inherent labeling and must have explicit `aria-label` or `aria-labelledby` props to be accessible to screen readers, especially when visual labels are siblings.
**Action:** Always verify `Progress` usage includes accessible labels.

## 2025-05-02 - Scrollable Live Regions
**Learning:** Dynamic log containers need `role="log"` (which implies `aria-live="polite"`) for screen readers to announce updates. They also require `tabIndex={0}` to allow keyboard users to scroll the history.
**Action:** Ensure all log/terminal outputs have `role="log"`, `tabIndex={0}`, and visible focus styles.

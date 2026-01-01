## 2025-05-02 - Progress Component Accessibility
**Learning:** Radix UI Progress components lack inherent labeling and must have explicit `aria-label` or `aria-labelledby` props to be accessible to screen readers, especially when visual labels are siblings.
**Action:** Always verify `Progress` usage includes accessible labels.

## 2025-05-20 - Log Accessibility
**Learning:** Dynamic log containers require `role="log"` and `aria-live="polite"` to automatically announce new entries to screen readers without stealing focus. `tabIndex={0}` allows keyboard users to scroll the log history.
**Action:** When implementing activity feeds or logs, ensure these ARIA roles and keyboard interactions are present.

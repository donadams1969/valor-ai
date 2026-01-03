## 2025-05-23 - Live Logs Accessibility
**Learning:** Live log/console areas must use `role="log"` and `aria-live="polite"` so screen readers announce new entries without stealing focus. `tabIndex={0}` allows keyboard users to scroll the log history.
**Action:** Apply `role="log"` pattern to all streaming status or chat-like interfaces.

## 2025-05-02 - Progress Component Accessibility
**Learning:** Radix UI Progress components lack inherent labeling and must have explicit `aria-label` or `aria-labelledby` props to be accessible to screen readers, especially when visual labels are siblings.
**Action:** Always verify `Progress` usage includes accessible labels.

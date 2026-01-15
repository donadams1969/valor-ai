## 2025-05-02 - Progress Component Accessibility
**Learning:** Radix UI Progress components lack inherent labeling and must have explicit `aria-label` or `aria-labelledby` props to be accessible to screen readers, especially when visual labels are siblings.
**Action:** Always verify `Progress` usage includes accessible labels.

## 2025-05-25 - Live Log Accessibility
**Learning:** Live-updating terminal/log components require `role="log"` and `aria-live="polite"` (or "assertive") to ensure screen readers announce new entries without losing focus. `tabIndex={0}` allows keyboard users to scroll the log history.
**Action:** Always add ARIA roles and keyboard accessibility to scrollable log containers.

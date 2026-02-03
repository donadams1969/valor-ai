## 2025-05-02 - Progress Component Accessibility
**Learning:** Radix UI Progress components lack inherent labeling and must have explicit `aria-label` or `aria-labelledby` props to be accessible to screen readers, especially when visual labels are siblings.
**Action:** Always verify `Progress` usage includes accessible labels.

## 2025-05-02 - Live Logs Accessibility
**Learning:** Live-updating log terminals are inaccessible by default; they require `role="log"`, `aria-live="polite"`, and `tabIndex={0}` to be perceivable and navigable for screen readers and keyboard users.
**Action:** Always wrap log/terminal components with these attributes and ensure focus visibility.

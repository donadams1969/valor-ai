## 2025-05-02 - Progress Component Accessibility
**Learning:** Radix UI Progress components lack inherent labeling and must have explicit `aria-label` or `aria-labelledby` props to be accessible to screen readers, especially when visual labels are siblings.
**Action:** Always verify `Progress` usage includes accessible labels.

## 2025-05-02 - Live Log Accessibility
**Learning:** Live-updating text areas (like terminals or logs) require `role="log"`, `aria-live="polite"`, and `tabIndex={0}` to be perceivable and navigable by screen readers and keyboard users.
**Action:** Enhance any scrolling log container with these attributes and visible focus styles.

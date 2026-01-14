## 2025-05-02 - Progress Component Accessibility
**Learning:** Radix UI Progress components lack inherent labeling and must have explicit `aria-label` or `aria-labelledby` props to be accessible to screen readers, especially when visual labels are siblings.
**Action:** Always verify `Progress` usage includes accessible labels.

## 2025-05-23 - Accessible Terminal Logs
**Learning:** Live-updating log/terminal components require `role="log"`, `aria-live="polite"`, `tabIndex={0}` (for scroll), and `aria-label` to be fully accessible.
**Action:** Ensure all terminal-like components include these attributes and a visible focus indicator.

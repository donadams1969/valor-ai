## 2025-05-02 - Progress Component Accessibility
**Learning:** Radix UI Progress components lack inherent labeling and must have explicit `aria-label` or `aria-labelledby` props to be accessible to screen readers, especially when visual labels are siblings.
**Action:** Always verify `Progress` usage includes accessible labels.

## 2026-01-30 - Accessible Live Logs
**Learning:** Live-updating scrollable regions (like logs/terminals) need `role="log"` and `aria-live="polite"` for screen readers, plus `tabIndex={0}` and a label for keyboard accessibility.
**Action:** Always check live regions for these 4 attributes: role, aria-live, tabIndex, and aria-label.
